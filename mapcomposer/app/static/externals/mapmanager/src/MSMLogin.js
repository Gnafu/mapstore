/*
 *  Copyright (C) 2007 - 2012 GeoSolutions S.A.S.
 *  http://www.geo-solutions.it
 *
 *  GPLv3 + Classpath exception
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Class: MSMLogin
 * Extend an Ext.FormPanel, enable insert of username and password to access to resources of MapStoreManager
 * and abilitate edit and delete map
 * 
 * 
 * 
 * Inherits from:
 *  - <Ext.FormPanel>
 *
 */

MSMLogin = Ext.extend(Ext.FormPanel, {
    /**
     * Property: loginText
     * {string} string for label in login button
     * 
     */
    loginText: "Login",
    /**
     * Property: logoutText
     * {string} string for label in logout button
     * 
     */
    logoutText: "Logout",
    /**
     * Property: ruleText
     * {string} string with template to display user and its role
     * 
     */
    ruleText: "USER LOGGED: {user}",
    /**
     * Property: loginErrorText
     * {string} string to visualize if user enter invalid username and password
     * 
     */
    loginErrorText: "Invalid username or password.",
    /**
     * Property: loginErrorTitle
     * {string} title of form alert to visualize if user enter invalid username and password
     * 
     */
    loginErrorTitle: "Login failed.",
    /**
     * Property: userFieldText
     * {string} label for user in a form
     * 
     */
    userFieldText: "User",
    /**
     * Property: passwordFieldText
     * {string} label for password in a form
     * 
     */
    passwordFieldText: "Password", 
    /**
     * Property: loginFormTitle
     * {string} title of login form
     * 
     */
    loginFormTitle: 'Please Login',
    /**
     * Property: loginFormTitle
     * {string} title of login form
     * 
     */
    loginWaitMessage: "Please wait...",
    /**
     * Property: grid
     * {object} property grid to access GridPanel
     * 
     */
    grid: null,
    /**
     * Property: config
     * {object} object for configuring the component. See <config.js>
     * 
     */
    config: null, 
    /**
     * Property: labelWidth
     * {number} set width of label
     * 
     */
    labelWidth:80,
    /**
     * Property: frame
     * {boolean} set frame properties to true
     * 
     */
    frame:true, 
    /**
     * Property: defaultType
     * {string} set default type of form as testfield
     * 
     */
    defaultType:'textfield',
    /**
     * Property: statelessSession
     * {Boolean} If the session is stateless is not needed check user details at startup
     * 
     */
    statelessSession: true,
    /**
     * Property: forceLogin
     * {Boolean} If true, the login window is opened on tool add, not closable and mask the background.
     *           in this way users must login. 
     * 
     */
    forceLogin: false,
     
    /** private: method[constructor]
     */
    constructor: function(config) {
        
        this.addEvents(
            /** api: event[login]
             *  Fired when an user perform a login.
             *
             *  Listener arguments:
             *  * userName - :class:`String` User name
             */
            "login",

            /** api: event[logout]
             *  Fired when an user makes a logout
             */
            "logout"
        );
        
        MSMLogin.superclass.constructor.apply(this, arguments);
    },

    initComponent : function() {
        
        Ext.apply(this, {  
            monitorValid:true,
            trackResetOnLoad : true,
            items:[{  
                fieldLabel: this.userFieldText,
                name:'loginUsername', 
                allowBlank:false,
                listeners: {
                  beforeRender: function(field) {
                    field.focus(false, 1000);
                  }
                }
            },{  
                fieldLabel:this.passwordFieldText, 
                name:'loginPassword', 
                inputType:'password', 
                allowBlank:false
            }],
            buttons:[{ 
                text: this.loginText,
                iconCls: 'accept',
                formBind: true,
                scope: this,
                handler: this.submitLogin
            }],
            keys: [{ 
                key: [Ext.EventObject.ENTER],
                scope: this,
                handler: this.submitLogin
            }]
        });
        
        this.loginButton = new Ext.Button({
            id: 'id_loginButton',
            listeners:{
                scope:this,
                afterrender: function(){
                    if(this.forceLogin){
                        this.showLoginForm();
                    }
                }
            }
        });
        
        this.userLabel = new Ext.form.Label({
            xtype: 'textfield',
            labelStyle: 'font-weight:bold;',
            cls: 'user-role-label'
        });

        if(!this.defaultHeaders){
            this.defaultHeaders = {
                'Accept': 'application/json',
                'Authorization': this.token
            };
        }

        if(!this.statelessSession || this.token){
            this.getLoginInformation();   
        }else{
            this.showLogin();
            
        }
        
        MSMLogin.superclass.initComponent.call(this, arguments);
        
    },

    /**
    * private: method[getLoginInformation]
    * Get the login information if available and store username
    */ 
    getLoginInformation: function(){
        Ext.Ajax.request({
            method: 'GET',
            url: this.geoStoreBase + 'users/user/details?includeattributes=true',
            scope: this,
            headers: this.defaultHeaders,
            success: function(response, form, action) {                
                var user = Ext.util.JSON.decode(response.responseText);
                if (user.User) {
                    this.userid = user.User.id;
                    this.username = user.User.name;
                    this.role = user.User.role;
					
					// //////////////////////////////////////////////////////////
					// Save the user's details in session storage in order to 
					// give these informations to the opened composer.
					// //////////////////////////////////////////////////////////
					var userDetails = {
						token: this.token,
						user: user.User,
						provider: "geostore"
					};
					
					sessionStorage.removeItem("userDetails");
					sessionStorage["userDetails"] = Ext.util.JSON.encode(userDetails);
					
                    this.showLogout(user.User.name);
                    this.fireEvent("login", this.username);
                }else{
                    // invalid user state
                    this.showLogin();
                    
                }
            },
            failure: function(response, form, action) {        
                this.showLogin();
                
                
            }
        });
    },

    /**
    * private: method[showLoginForm]
    * show the login form in a Ext.Window
    */ 
    showLoginForm: function() {
        var form = this.getForm();
        var me = this;
        if(!this.win){
            this.win = new Ext.Window({
                title: this.loginFormTitle,
                iconCls: 'user',
                layout: "border",
                width: 275,
                closeAction: 'hide',
                closable: !this.forceLogin,
                draggable: !this.forceLogin,
                height: 170,
                plain: true,
                border: false,
                modal: true,
                items: [
                
                    {
                        xtype: "panel",
                        height: 40,
                        border:false,
                        region:"north",
                        html: 
                        /*
                                "<span id=\"googlesigninbutton\">"+
                                  "<span "+
                                    " class=\"g-signin\""+
                                    " data-callback=\"stoca\""+
                                    " data-clientid=\"461544306225-g7g6fbfs351els9g9f8pk69qoaekf4fe.apps.googleusercontent.com\""+
                                    " data-cookiepolicy=\"none\""+
                                    " data-requestvisibleactions=\"http://schemas.google.com/AddActivity\""+
                                    " data-scope=\"https://www.googleapis.com/auth/plus.login\">"+
                                  "</span>"+
                              "</span>"+
                              */
                              "<span><a href=\"http://localhost:8083/opensdi2-manager/mvc/oauth/login/google?returnUrl=http://localhost:8081/manager\">LOGIN WITH GOOGLE</a></span>"
                    },
                    {
                        border:false,
                        id: "stocaLogin",
                        region:"center",
                        items:[this]
                    }
                ],
                listeners: {
                    afterRender: function(){
                        form.clearInvalid();
                        if(typeof stoca === 'undefined'){
                            stoca = function(obj){
                                console.log(obj);
                                
                                if(obj && obj.status){
                                    
                                    if(obj.status.signed_in){
                                        me.win.hide();
                                        me.getForm().reset();
                                        
                                        var user = Ext.util.JSON.decode(response.responseText);
                                        
                                        me.showLogout(user.User.name);
                                        // save auth info
                                        me.token = auth;
                                        if (user.User) {
                                            me.userid = user.User.id;//TODO geostore don't return user id! in details request
                                            me.username = user.User.name;
                                            me.role = user.User.role;
                                        }
                                        me.fireEvent("login", me.username, auth, user.User);
                                    }
                                }
                                
                            }
                        }
                        this.doLayout();
                        /*g
                        api.signin.go("googlesigninbutton");
                        
                        gapi.signin.render(
                            "googlesigninbutton",
                            {
                                "clientid": "461544306225-g7g6fbfs351els9g9f8pk69qoaekf4fe.apps.googleusercontent.com",
                                "cookiepolicy" : "none",
                                "requestvisibleactions": 'http://schemas.google.com/AddActivity http://schemas.google.com/CommentActivity',
                                "callback" : "stoca"
                            }
                        );
                        */
                        
                    },
                    hide: function(){
                        form.reset();
                    }
                }
            });
        }
        this.win.show();        
    },
    
    /** private: method[logout]
     *  Log out the current user from the application.
     */
    logout: function() {
        if(this.statelessSession){
            this.invalidateLoginState();
        }else{
            // do logout in spring security
            Ext.Ajax.request({
                method: 'GET',
                url: this.geoStoreBase.replace("/rest/", "/j_spring_security_logout"),
                scope: this,
                success: function(response, form, action) {
                    this.invalidateLoginState();
                },
                failure: function(response, form, action) {
                    this.invalidateLoginState();
                }
            });
        }
    },
    
    /** private: method[invalidateLoginState]
     *  Invalidate login state.
     */
    invalidateLoginState: function(){
        // invalidate token
        this.token = null;
        this.userid = null;
        this.username = null;
        this.showLogin(true);
    },

    /** 
     * api: method[getToken]
     * get the auth token for this session.
     */
	getToken: function(){
		return this.token;
	},

    /** 
     * api: method[getCurrentUser]
     * get the current user.
     */
	getCurrentUser: function(){
		return this.username;
	},
	
    /** 
     * api: method[isGuest]
     * verify if the current user is a guest.
     */
	isGuest: function(){
		return (this.username===undefined ||  this.username === null );
	},
		
    /** 
     * api: method[submitLogin]
     * Submits the login.
     */ 
    submitLogin: function (button, event, access_token) {
        var mask = this.getEl() ? new Ext.LoadMask(this.getEl(),{msg:this.loginWaitMessage}) : new Ext.LoadMask(Ext.getBody(),{msg: "Please wait.."});
        
        if(access_token){
            var auth= 'Bearer ' + access_token;
        }else{
            var form = this.getForm();
            var fields = form.getValues();
            var pass = fields.loginPassword;
            var user = fields.loginUsername;
            var auth= 'Basic ' + Base64.encode(user+':'+pass);
        }
        
        mask.show();
        Ext.Ajax.request({
            method: 'GET',
            url: this.geoStoreBase + 'users/user/details/',
            scope: this,
            headers: {
                'Accept': 'application/json',
                'Authorization' : auth
            },
            success: function(response, form, action) {  
                mask.hide();
                if(this.win){
                    this.win.hide();
                }
                this.getForm().reset();
                
                var user = Ext.util.JSON.decode(response.responseText);
                
                this.showLogout(user.User.name);
				// save auth info
				this.token = auth;
				if (user.User) {
					this.userid = user.User.id;//TODO geostore don't return user id! in details request
					this.username = user.User.name;
					this.role = user.User.role;
				}
                this.fireEvent("login", this.username, auth, user.User);
            },
            failure: function(response, form, action) {
                mask.hide();
                Ext.MessageBox.show({
                    title: this.loginErrorTitle,
                    msg: this.loginErrorText,
                    buttons: Ext.MessageBox.OK,
                    animEl: 'mb4',
                    icon: Ext.MessageBox.WARNING
                });
                if(this.form){
                    this.form.markInvalid({
                        "loginUsername": this.loginErrorText,
                        "loginPassword": this.loginErrorText
                    });
                }
            }
        });
    },

    /**
     * private: method[applyLoginState]
     * Attach a handler to the login button and set its text.
     */
    applyLoginState: function(iconCls, text, userLabel, handler, scope) {
        this.loginButton.setIconClass(iconCls);
        this.loginButton.setText(text);
        this.loginButton.setHandler(handler, scope);
        this.userLabel.setText(userLabel);
    },

    /** private: method[showLogin]
     *  Show the login button.
     */
    showLogin: function() {
        var text = this.loginText;
        var userLabel = '';
        var handler = this.showLoginForm;
        this.applyLoginState('login', text, userLabel, handler, this);
        this.fireEvent("logout");
        //force show login window on startup
        
    },

    /** private: method[showLogout]
     *  Show the logout button.
     */
    showLogout: function(user, role) {
        var text = this.logoutText;
        var userLabel = new Ext.Template(this.ruleText).applyTemplate({user: user});
        var handler = this.logout;
        this.applyLoginState('logout', text, userLabel, handler, this);
    }
});

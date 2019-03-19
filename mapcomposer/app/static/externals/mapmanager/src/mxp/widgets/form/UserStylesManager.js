/*
 *  Copyright (C) 2019 GeoSolutions S.A.S.
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

Ext.ns("mxp.widgets");

/**
 * Custom Category Manager for GeoStore
 */
mxp.widgets.UserStylesManager = Ext.extend(mxp.widgets.GeoStoreCategoryManager, {
     /** api: xtype = user_styles_manager */
    xtype: "user_styles_manager",
    
    defaultTpl : [
        '<tpl for=".">',
            '<div style="border-bottom:1px solid lightgray;margin: 2px">',
                '<div class="dataview" style="min-height:40px">',
                    '<div float="right" style="margin-right:20px;text-align: right;color: gray;font-size: 15px;float: right;">Creation:{creation}<br>Last Update:{lastUpdate}</div>',
                    '<div style="font-weight:bold;">{name}</div>',
                    '<div>{[Ext.util.Format.ellipsis(values.description,25,false)]}<div style="margin-right:20px;text-align: right;float: right;" >{style_sld_name}</div></div>',
                '</div>',
            '</div>',
        '</tpl>'],

    initComponent: function() {	
        mxp.widgets.UserStylesManager.superclass.initComponent.call(this, arguments);
		this.leftPanel.topToolbar.addFill();
		this.leftPanel.topToolbar.addButton(
			{
				iconCls: 'information_ic',
				text: 'Fetch styles names',
				handler: function(){
					console.log("cliccato;")
				}
			}
			);
		console.log("Initialized");
    }

});
Ext.reg(mxp.widgets.UserStylesManager.prototype.xtype, mxp.widgets.UserStylesManager);

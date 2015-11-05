{
    "footer": {
        "container": {}
    }, 
    "header": {
        "container": {
            "animCollapse": false, 
            "border": false, 
            "collapseMode": "mini", 
            "collapsible": true, 
            "header": false, 
            "height": 60, 
            "hideCollapseTool": true, 
            "maxHeight": 60, 
            "minHeight": 60, 
            "split": true
        }, 
        "css": "<style type='text/css'>div.topbanner{background-color:#888;height:60px;} div.topbanner .logo-gs-white{padding-left: 15px;padding-top:0px;}</style>", 
        "html": "<div class='topbanner'><div class='logo-gs-white'><a target='_blank' href='http://vm-osotp.csi.it/opticities'><img src='theme/app/img/banner/opticities.png' alt='Opticities'></a></div></div>"
    },
   "scaleOverlayMode": "basic",
   "defaultLanguage": "it",
   "gsSources":{
   "opti": {
        "ptype": "gxp_wmssource",
        "url": "http://vm-osotp.csi.it/geoserver/opti/wms",
        "title": "Opticities GeoServer",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png8",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
   "geotomob": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wmsg01/wms_sicc124_mobilita",
        "title": "Mobilita&grave; - Geoportale Torino",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
   "geotomob_tst": {
        "ptype": "gxp_wmssource",
        "url": "http://tst-geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wmsg01/wms_sicc124_mobilita",
        "title": "Mobilita&grave; - Geoportale Torino Test",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
   "ngv": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/ginevra/rp-01/ngvwms/wms_ngv_1",
        "title": "NGV viabilita&grave;",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
   "georpscuole": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wmsg01/wms_sicc40_scuole",
        "title": "Scuole - Geoportale Regione Piemonte",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
   "georpuniv": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wmsg01/wms_sicc121_universita",
        "title": "Universita&grave; - Geoportale Regione Piemonte",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
		"georpfarmacie": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wmsg01/wms_sicc102_farmacie",
        "title": "Farmacie - Geoportale Regione Piemonte",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
		"georpospedali": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wmsg01/wms_sicc112_ospedali",
        "title": "Ospdedali - Geoportale Regione Piemonte",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
		"georpmercati": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wmsg01/wms_sicc41_mercati",
        "title": "Mercati - Geoportale Regione Piemonte",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
		"georpasl": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wmsg01/wms_sicc106_sedi_asl",
        "title": "Sedi ASL - Geoportale Regione Piemonte",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
		"georpcons": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wmsg01/wms_sicc118_consultori",
        "title": "Consultori - Geoportale Regione Piemonte",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
		"georpstruttsocass": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wmsg01/wms_sicc38_strutt_socio_ass",
        "title": "Strutture socio assistenziali - Geoportale Regione Piemonte",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
		"georpsservinf": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wmsg01/wms_sicc104_servinf",
        "title": "Servizi infanzia - Geoportale Regione Piemonte",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
		"georpareepriv": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wmsg01/wms_sicc05_commercio_su_aree_private",
        "title": "Commercio aree private - Geoportale Regione Piemonte",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
    "sfondoBN": {
        "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/taims/rp-01/taimsbasewms/wms_sfondo_cart_rif_bn",
        "title": "Sfondo NGV bianco e nero",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
		"sfondoColori": { 
			  "ptype": "gxp_wmssource",
        "url": "http://geomap.reteunitaria.piemonte.it/ws/taims/rp-01/taimsbasewms/wms_sfondo_cart_rif",
        "title": "Sfondo NGV Colori",
        "version":"1.1.1",
        "layerBaseParams":{
                "FORMAT": "image/png",
                "transparent": true,
                "TILED": true
        },
        "loadingProgress": true,
        "useCapabilities": true
		},
		"mapquest": {
			"ptype": "gxp_mapquestsource"
		}, 
		"osm": { 
			"ptype": "gxp_osmsource"
		},
		"google": {
			"ptype": "gxp_googlesource" 
		},
		"bing": {
			"ptype": "gxp_bingsource" 
		}, 
		"ol": { 
			"ptype": "gxp_olsource" 
		}
	},
	"loadingPanel": {
		"width": 100,
		"height": 100,
		"center": true
	},
	"cookieConsent":true,
	"map": {
		"projection": "EPSG:900913",
		"units": "m",
    "center": [855361.824054, 5633117.32775],
    "zoom": 12,
		"maxExtent": [
			-20037508.34, -20037508.34,
			20037508.34, 20037508.34
		],
		"layers": [
			{
		  	"source": "ngv",
		  	"title": ["House numbers","Numeri civici"],
		  	"name": "Civici",
		  	"group": ["Transport netwoks","Reti di trasporto"],
		  	"visibility": false,
		  	"gnURL": "http://www.geoportale2.piemonte.it/geonetworkrp/srv/ita/",
		  	"uuid": "r_piemon:5a94b0e3-6385-4c5a-a361-5f8a3db1ff75"
		  },{
		  	"source": "ngv",
		  	"title": ["Rails stations","Stazioni Ferroviarie"],
		  	"name": "Stazioni",
		  	"group": ["Transport netwoks","Reti di trasporto"],
		  	"visibility": false,
		  	"gnURL": "http://www.geoportale2.piemonte.it/geonetworkrp/srv/ita/",
		  	"uuid": "r_piemon:dcaca667-70a8-40b6-9c4c-f8a56b4887d8"
		  },{
		  	"source": "ngv",
		  	"title": ["Rails","Ferrovie"],
		  	"name": "Ferrovie",
		  	"group": ["Transport netwoks","Reti di trasporto"],
		  	"visibility": false,
		  	"gnURL": "http://www.geoportale2.piemonte.it/geonetworkrp/srv/ita/",
		  	"uuid": "r_piemon:1da1a302-658a-4eb9-94d4-72808c1ec0c5"
		  },{
		  	"source": "ngv",
		  	"title": ["Viability graph - from 1:50.000 to 1:1","Grafo viabilit&agrave; - da 1:50.000 a 1:1"],
		  	"name": "GDF1",
		  	"group": ["Transport netwoks","Reti di trasporto"],
		  	"visibility": false,
		  	"gnURL": "http://www.geoportale2.piemonte.it/geonetworkrp/srv/ita/",
		  	"uuid": "r_piemon:186d2e51-8936-4f70-8806-2d4db9fc9924"
		  },{
		  	"source": "ngv",
		  	"title": ["Viability graph - from Regional levale to 1:50.000","Grafo viabilit&agrave; - da scala Regionale a 1:50.000"],
		  	"name": "GDF2",
		  	"group": ["Transport netwoks","Reti di trasporto"],
		  	"visibility": false,
		  	"gnURL": "http://www.geoportale2.piemonte.it/geonetworkrp/srv/ita/",
		  	"uuid": "r_piemon:d48748bb-9d35-4fa8-85eb-dda8122f6de6"
		  },{
		  	"source": "georpmercati",
		  	"title": ["Road markets periodical","Mercati periodici e tematici"],
		  	"name": "MercatiTematici",
		  	"group": ["Commercial Data","Dati commerciali"],
		  	"visibility": false
		  },{
		  	"source": "georpmercati",
		  	"title": ["Road markets area","Mercati aree"],
		  	"name": "MercatiAree",
		  	"group": ["Commercial Data","Dati commerciali"],
		  	"visibility": false
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Babyparking privati - Service for childrens","Babyparking privati - Servizi infanzia"],
		  	"name": "BabyparkP",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Centri per bambini e genitori - Service for childrens","Centri per bambini e genitori - Servizi infanzia"],
		  	"name": "CentroBambini",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Ludoteche - Service for childrens","Ludoteche - Servizi infanzia"],
		  	"name": "Ludoteche",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Sezioni primavera - Service for childrens","Sezioni primavera - Servizi infanzia"],
		  	"name": "Primavera",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Nidi e micronidi in famiglia - Service for childrens","Nidi e micronidi in famiglia - Servizi infanzia"],
		  	"name": "Micronidi",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Nidi aziendali - Service for childrens","Nidi aziendali - Servizi infanzia"],
		  	"name": "NidoAziendale",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Nidi privati - Service for childrens","Nidi privati - Servizi infanzia"],
		  	"name": "NidoPrivato",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Nidi comunali - Service for childrens","Nidi comunali - Servizi infanzia"],
		  	"name": "NidoComunale",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["Schools Buildings","Scuole Edificato"],
		  	"name": "ScuoleEdificato",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["Scuola d'infanzia accesso - Schools","Scuola d'infanzia accesso - Scuole"],
		  	"name": "ScInfanzia",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["Scuola primaria accesso - Schools","Scuola primaria accesso - Scuole"],
		  	"name": "ScPrimaria",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["Scuola secondaria I Grado accesso - Schools","Scuola secondaria I Grado accesso - Scuole"],
		  	"name": "ScSecIGrado",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["Scuola secondaria II Grado accesso - Schools","Scuola secondaria II Grado accesso - Scuole"],
		  	"name": "ScSecIIGrado",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["Liceo scienze umane - Schools","Liceo scienze umane - Scuole"],
		  	"name": "LScienzeUmane",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["Liceo scientifico - Schools","Liceo scientifico - Scuole"],
		  	"name": "LScientifico",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["Liceo musicale - Schools","Liceo musicale - Scuole"],
		  	"name": "LMusicale",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["Liceo linguistico - Schools","Liceo linguistico - Scuole"],
		  	"name": "LLinguistico",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["Liceo classico - Schools","Liceo classico - Scuole"],
		  	"name": "LClassico",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["Liceo artistico - Schools","Liceo artistico - Scuole"],
		  	"name": "LArtistico",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["I.T. Settore Economico - Schools","I.T. Settore Economico - Scuole"],
		  	"name": "ITEconomico",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["I.T. Settore Tecnico - Schools","I.T. Settore Tecnico - Scuole"],
		  	"name": "ITTecnologico",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["I.T. Settore Tecnico-Economico - Schools","I.T. Settore Tecnico-Economico - Scuole"],
		  	"name": "ITTecEcon",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["Istituto d'Arte - Schools","Istituto d'Arte - Scuole"],
		  	"name": "IstArte",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["I.P. Settore Industria e Artigianato - Schools","I.P. Settore Industria e Artigianato - Scuole"],
		  	"name": "IPIndArt",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpscuole",
		  	"title": ["I.P. Settore Servizi - Schools","I.P. Settore Servizi - Scuole"],
		  	"name": "IPServizi",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpuniv",
		  	"title": ["University Buildings","Universita&grave; Edifici"],
		  	"name": "UniversitaEdificato",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpuniv",
		  	"title": ["University Access","Universita&grave; Accessi"],
		  	"name": "UniversitaAccesso",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpstruttsocass",
		  	"title": ["Social care facilities","Strutture socio-assistenziali"],
		  	"name": "StruttSocioAss",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },      {
		  	"source": "georpcons",
		  	"title": ["Teenager Consultors","Consultori Adolescenti"],
		  	"name": "Adolescenti",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpcons",
		  	"title": ["Consultori Familiari","Family Consultors"],
		  	"name": "Familiari",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpcons",
		  	"title": ["Pediatric Consultors","Consultori Pediatrici"],
		  	"name": "Pediatrici",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpasl",
		  	"title": ["Offices ASL","Uffici ASL"],
		  	"name": "SediASLAccesso",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpospedali",
		  	"title": ["Hospitals Scope relevance","Ospedali Ambito pertinenza"],
		  	"name": "OspedaliAmbPert",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpospedali",
		  	"title": ["Hospitals buildings","Ospedali edifici"],
		  	"name": "OspedaliEdificato",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpospedali",
		  	"title": ["Hospitals recognized","Ospedali Presidi riconosciuti"],
		  	"name": "PresidiOsp",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpospedali",
		  	"title": ["Hospitals Access","Ospedali Accessi"],
		  	"name": "OspedaliAccesso",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpospedali",
		  	"title": ["Hospitals ER","Ospedali Pronto soccorso"],
		  	"name": "ProntoSocc",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpfarmacie",
		  	"title": ["Night Pharmacies","Farmacie notturne"],
		  	"name": "FarmacieNott",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "georpfarmacie",
		  	"title": ["Pharmacies","Farmacie"],
		  	"name": "FarmacieComu",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false
		  },{
		  	"source": "geotomob",
		  	"title": ["Paths loges","Percorsi loges"],
		  	"name": "PercorsiLoges",
		  	"group": ["Facilities for disabled people","Ausili per disabili"],
		  	"visibility": false
		  },{
		  	"source": "geotomob_tst",
		  	"title": ["Disabled people parking slots","Parcheggi disabili"],
		  	"name": "StalliDisabili",
		  	"group": ["Facilities for disabled people","Ausili per disabili"],
		  	"visibility": false
		  },{
		  	"source": "geotomob",
		  	"title": ["Pedestrian areas","Zone pedonali"],
		  	"name": "AreePedonali",
		  	"group": ["Road traffic restrictions - regulations", "Restrizioni al traffico - regolazioni"],
		  	"visibility": false
		  },{
		  	"source": "geotomob",
		  	"title": ["Restricted traffic area","ZTL"],
		  	"name": "ZTL",
		  	"group": ["Road traffic restrictions - regulations", "Restrizioni al traffico - regolazioni"],
		  	"visibility": false
		  },{
		  	"source": "geotomob",
		  	"title": ["Taxi","Taxi"],
		  	"name": "AreeSostaTaxi",
		  	"group": ["Taxi","Taxi"],
		  	"visibility": false
		  },{
        "source": "geotomob",
        "title": ["Blue zone parking","Parcheggi zona Blu"],
        "name": "ZonaBlu",
        "group": ["Car Parking","Parcheggi"], 
        "visibility": false
      },{
		  	"source": "geotomob_tst",
		  	"title": ["Parking","Parcheggi"],
		  	"name": "Parcheggi",
		  	"group": ["Car Parking","Parcheggi"],
		  	"visibility": false
		  },{
        "source": "opti",
        "title": ["Movicentro","Movicentro"],
        "name": "movicentro_al_2009",
        "group": ["Car Parking","Parcheggi"], 
        "visibility": false
      },{
		  	"source": "geotomob_tst",
		  	"title":  ["Car sharing stations","Stazioni Car sharing"],
		  	"name": "CarSharing",
		  	"group": ["Car sharing","Car sharing"],
		  	"visibility": false
		  },{
		  	"source": "geotomob",
		  	"title": ["Cycle paths inside green parks","Piste parchi"],
		  	"name": "PisteParchi",
		  	"group": ["Cycling","Bicicletta"],
		  	"visibility": false
		  },{
		  	"source": "geotomob",
		  	"title": ["Cycle paths","Piste ciclabili"],
		  	"name": "PisteCiclabili",
		  	"group": ["Cycling","Bicicletta"],
		  	"visibility": false
		  },{
		  	"source": "opti",
		  	"title": ["Bike sharing stazions","Postazioni Bike sharing"],
		  	"name": "bikesharingstation",
		  	"group": ["Cycling","Bicicletta"],
		  	"visibility": false
		  },{
        "source": "opti",
        "title": ["Lines","Linee"],
        "name": "v_shapetrip_trambus",
        "group": ["Buses","Autobus"], 
        "visibility": false
      },{
        "source": "opti",
        "title": ["Stops","Fermate"],
        "name": "v_stop_per_type_trambus",
        "group": ["Buses","Autobus"], 
        "visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "8e192f2a-7cde-4627-a964-1bdd326d5d0a"
      },{
        "source": "opti",
        "title": ["Lines","Linee"],
        "name": "v_trip_train",
        "group": ["Rails","Treni"], 
        "visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "fea721b3-707e-490f-803b-3335fcf413eb"
      },{
        "source": "opti",
        "title": ["Stops","Stazioni"],
        "name": "v_stop_per_type_train",
        "group": ["Rails","Treni"], 
        "visibility": false
      },{
        "source": "opti",
        "title": ["Lines","Linee"],
        "name": "v_trip_metro",
        "group": ["Metro","Metropolitana"],
        "visibility": false
      },{
        "source": "opti",
        "title": ["Stops","Stazioni"],
        "name": "v_stop_per_type_metro",
        "group": ["Metro","Metropolitana"], 
        "visibility": false
      },{
				"source": "google",
				"title": "Google Terrain",
				"name": "TERRAIN",
				"group": "background"
			},{
				"source": "google",
				"title": "Google Hybrid",
				"name": "HYBRID",
				"group": "background"
			},{
				"source": "mapquest",
				"title": "MapQuest OpenStreetMap",
				"name": "osm",
				"group": "background"
			},{
				"source": "sfondoColori",
				"title": "Sfondo colori",
				"name": "SfondoCartRif",
				"group": "background"
			},{
				"source": "sfondoBN",
				"title": "Sfondo BN",
				"name": "SfondoCartRifBN",
				"group": "background"
			},{
				"source": "osm",
				"title": "Open Cycle Map",
				"name": "opencyclemap",
				"group": "background"
			},{
				"source": "osm",
				"title": "Open Street Map",
				"name": "mapnik",
				"group": "background"
			},{
				"source": "google",
				"title": "Google Roadmap",
				"name": "ROADMAP",
				"group": "background"
			},{
				"source": "ol",
				"group": "background",
				"fixed": true,
				"type": "OpenLayers.Layer",
				"visibility": false,
				"args": [
					"None", {"visibility": false}
				]
			}
		]
	},
    "customPanels":[
        {
            "xtype": "panel",
            "title": "Metadata Explorer",
            "headerAsText": true,
            "iconCls": "csw-viewer",             
            "border": false,
            "id": "north",
            "region": "north",
            "layout": "fit",
            "split":true,
            "height": 330,
            "collapsed": true,
            "collapsible": true,
            "ctCls": "north-panel",
            "header": true,
            "floatable": false
        },{
          "xtype": "panel",
          "title": "FeatureGrid",
          "iconCls": "csw-viewer",      
          "border": false,
          "id": "south",
          "region": "south",
          "layout": "fit",
          "height": 330,
          "collapsed": true,
          "collapsible": true,
          "header": true
      },{
          "xtype": "panel",
          "title": "Query Panel", 
          "iconCls": "csw-viewer",        
          "border": false,
          "id": "east",
          "width": 400,
          "height": 500,
          "region": "east",
          "layout": "fit",
          "collapsed": true,
          "collapsible": true,
          "header": true
      }
    ],	
	"scaleOverlayUnits":{
        "bottomOutUnits":"nmi",    
        "bottomInUnits":"nmi",    
        "topInUnits":"m",    
        "topOutUnits":"km"
    },
	"customTools":[
		{
			"ptype": "gxp_embedmapdialog",
			"actionTarget": {"target": "paneltbar", "index": 2},
			"embeddedTemplateName": "viewer",
			"showDirectURL": true
		}, {
			"ptype": "gxp_categoryinitializer",
            "silentErrors": true
		}, {
		   "ptype": "gxp_mouseposition",
		   "displayProjectionCode":"EPSG:32362",
		   "customCss": "font-weight: bold; text-shadow: 1px 0px 0px #FAFAFA, 1px 1px 0px #FAFAFA, 0px 1px 0px #FAFAFA,-1px 1px 0px #FAFAFA, -1px 0px 0px #FAFAFA, -1px -1px 0px #FAFAFA, 0px -1px 0px #FAFAFA, 1px -1px 0px #FAFAFA, 1px 4px 5px #aeaeae;color:#050505 "
		}, {
			"ptype": "gxp_metadataexplorer",
			"id": "metadataexplorer",
            "outputTarget": "north",
            "actionTarget": {"target": "paneltbar", "index": 30},
            "saveState":true,
            "cswconfig": {
                "catalogs": [
                        {"name": "Geoportale Piemonte", "url": "http://www.geoportale2.piemonte.it/geonetworkrp/srv/ita/csw", "description": "Geoportale della Regione Piemonte"},
                        {"name": "Geoportale Torino", "url": "http://www.geoportale.cittametropolitana.torino.it/geonetworkpto/srv/ita/csw", "description": "Geoportale della Citt&agrave; metropolitana di Torino"},
                        {"name": "Geoportale Arpa Piemonte", "url": "http://webgis.arpa.piemonte.it/geoportalserver_arpa/csw", "description": "Geoportale Arpa Piemonte"},
                        {"name": "Catalogo Opticities", "url": "http://vm-osotp.csi.it/geonetwork/srv/ita/csw", "description": "Catalogo Opticities"}
                ],
                "dcProperty": "title",
                "cswVersion": "2.0.2",
                "filterVersion": "1.1.0",
                "start": 1,
                "limit": 10,
                "timeout": 60000
            }            
		}, {
			"ptype": "gxp_addlayer",
			"showCapabilitiesGrid": true,
			"useEvents": false,
			"showReport": "never",
			"directAddLayer": false,
			"id": "addlayer"
		}, {
			"actions": ["-"], 
			"actionTarget": "paneltbar"
		}, {
			"ptype": "gxp_geolocationmenu",
			"actionTarget": {"target": "paneltbar", "index": 23},
			"toggleGroup": "toolGroup"
		}, {
			"actions": ["->"], 
			"actionTarget": "paneltbar"
		}, {
			"ptype": "gxp_help",
			"actionTarget": "paneltbar",
			"text": "Help",
			"tooltip":"MapStore Guide",
			"index": 24,
			"showOnStartup": false,
			"fileDocURL": "MapStore-Help.pdf"
    }, {
			"ptype": "gxp_languageselector",
			"data":[
				["en","English","","en","English language"],
				["it","Italiano","","it","Italian language"] 
			],
			"actionTarget": {"target": "panelbbar", "index": 3}
		}, {
			"ptype": "gxp_layertree",
			"outputConfig": {
				"id": "layertree"
				},
				"outputTarget": "tree",
				"localIndexs": {
					"en": 0,
					"it": 1
				},
				"collapsedGroups": true
		}, {
        "ptype":"gxp_print",
        "customParams":{
            "outputFilename":"opticities-web-print",
            "geodetic": true
        },
        "ignoreLayers": "ROADMAP,TERRAIN,HYBRID",
        "printService":"http://vm-osotp.csi.it/geoserver/pdf/",
        "legendPanelId":"legendPanel",
        "actionTarget":{
            "target":"paneltbar",
            "index":21
        }
    },{
		    "ptype":"gxp_geolocate",
		    "enableTracking" : false,
		    "layerName": "Position",
		    "bind": true,
		    "zoom": true,
		    "displayInLayerSwitcher": false,
		    "geolocationStyles": {
		        "pointStyle":{
		                "graphicName": "circle",
		                "strokeColor": "#aaa",
		                "fillColor": "#11f",
		                "strokeWidth": 2,
		                "fillOpacity": 0.7,
		                "strokeOpacity": 0.6,
		                "pointRadius": 5
		        },"auraStyle":{
		                "fillOpacity": 0.3,
		                "fillColor": "#55b",
		                "strokeColor": "#00f",
		                "strokeOpacity": 0.6
		        },
		    "geolocationOptions": {
		            "enableHighAccuracy": true,
		            "maximumAge": 0,
		            "timeout": 7000
		        }
		    },
		    "actionTarget":{
		        "target":"paneltbar",
		        "index": 22
		    }
		}, {
		  "ptype": "gxp_featuremanager",
		  "id": "featuremanager",
		  "showUnqueryableAlert": true,
      "paging": true,
			"pagingType": 1
	    }, {
		  "ptype": "gxp_featuregrid",
		  "featureManager": "featuremanager",
		  "outputConfig": {
			  "id": "featuregrid",
			  "title": "Features"
		  },
		  "outputTarget": "south",
		  "showNumberOfRecords": true,
		  "exportFormats": ["CSV","shape-zip"],
          "forceWFSversion" : "1.0.0"
	    }, {
          "ptype": "gxp_spatialqueryform",
          "featureManager": "featuremanager",
          "featureGridContainer": "south",
          "outputTarget": "east",
          "queryAll": true,
          "showSelectionSummary": true,
          "actions": null,
          "id": "bboxquery",
          "autoComplete": {
            "sources": ["opti"],
            "url": "http://vm-osotp.csi.it/geoserver/opti/wps",
            "pageSize": 10
          },          
          "outputConfig":{
                  "outputSRS": "EPSG:900913",
                  "selectStyle":{
                          "strokeColor": "#ee9900",
                          "fillColor": "#ee9900",
                          "fillOpacity": 0.4,
                          "strokeWidth": 1
                  },
                  "spatialFilterOptions": {    
                          "lonMax": 20037508.34,  
                          "lonMin": -20037508.34,
                          "latMax": 20037508.34,  
                          "latMin": -20037508.34  
                  },
                  "bufferOptions": {
                        "minValue": 1,
                        "maxValue": 10000,
                        "decimalPrecision": 2,
                        "distanceUnits": "m"
                  }
          },
          "spatialSelectorsConfig":{
                "aree":{
                    "xtype": "gxp_spatial_geocoding_selector",
                    "multipleSelection": false,
                    "name": "Aree censorie",
                    "label": "Aree censorie",
                    "searchComboOutputFormat": "json",
                    "wfsBaseURL": "http://vm-osotp.csi.it/geoserver/opti/wfs",
                    "geocoderTypeName": "aree_censorie_ms",
                    "geocoderTypeRecordModel":[
                      {
                          "name":"id",
                          "mapping":"gid"
                      },
                      {
                          "name":"name",
                          "mapping":"properties.nome"
                      },
                      {
                          "name":"geometry",
                          "mapping":"geom"
                      }
                    ],
                   "geocoderTypeSortBy":null,
                   "geocoderTypeQueriableAttributes":["nome"],
                   "spatialOutputCRS": "EPSG:4326",
                   "geocoderTypePageSize": 10,
                   "zoomToCurrentExtent": true
                },
                "bbox":{
                    "xtype": "gxp_spatial_bbox_selector"
                },
                "buffer":{
                    "xtype": "gxp_spatial_buffer_selector"
                },
                "circle":{
                    "xtype": "gxp_spatial_circle_selector",
                    "zoomToCurrentExtent": true
                },
                "polygon":{
                    "xtype": "gxp_spatial_polygon_selector"
                }
              }
        }
	]
}

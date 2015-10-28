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
        "title": "Mobilita' - Geoportale Torino",
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
				"wfsBase": "http://tst-geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wfsg01/wfs_sicc124_mobilita",
        "title": "Mobilita' - Geoportale Torino Test",
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
        "title": "NGV viabilita'",
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
        "wfsBase": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wfsg01/wfs_sicc40_scuole",
        "title": "Scuole - Geoportale Torino",
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
        "wfsBase": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wfsg01/wfs_sicc121_universita",
        "title": "Universita&grave; - Geoportale Torino",
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
        "wfsBase": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wfsg01/wfs_sicc102_farmacie",
        "title": "Farmacie - Geoportale Torino",
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
        "title": "Ospdedali - Geoportale Torino",
        "wfsBase": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wfsg01/wfs_sicc112_ospedali",
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
        "wfsBase": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wfsg01/wfs_sicc41_mercati",
        "title": "Mercati - Geoportale Torino",
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
        "wfsBase": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wfsg01/wfs_sicc106_sedi_asl",
        "title": "Sedi ASL - Geoportale Torino",
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
        "wfsBase": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wfsg01/wfs_sicc118_consultori",
        "title": "Consultori - Geoportale Torino",
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
        "wfsBase": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wfsg01/wfs_sicc38_strutt_socio_ass",
        "title": "Strutture socio assistenziali - Geoportale Torino",
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
        "wfsBase": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wfsg01/wfs_sicc104_servinf",
        "title": "Servizi infanzia - Geoportale Torino",
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
        "wfsBase": "http://geomap.reteunitaria.piemonte.it/ws/siccms/coto-01/wfsg01/wfs_sicc05_commercio_su_aree_private",
        "title": "Commercio aree private - Geoportale Torino",
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
		"musei": {
	    "ptype": "gxp_geojsonsource",
  	  "urlSource": "http://vm-osotp.csi.it/musei/get_musei.php",
  	  "title": "Musei"
		},
		"hotel": {
	    "ptype": "gxp_geojsonsource",
  	  "urlSource": "http://vm-osotp.csi.it/hotel/get_hotel.php",
  	  "title": "Hotel"
		},
		"beni_arch": {
	    "ptype": "gxp_geojsonsource",
  	  "urlSource": "http://vm-osotp.csi.it/beni_arch/get_beni.php",
  	  "title": "Berni architettonici"
		},
		"eventi": {
	    "ptype": "gxp_geojsonsource",
  	  "urlSource": "http://vm-osotp.csi.it/eventi/get_eventi_fix_param.php",
  	  "title": "Eventi"
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
				"source": "musei",
				"baseParams": {"p1": "asdfasd", "p2": "12346"},
				"title": ["Museum","Musei"],
				"name": "Musei",
				"group": ["GeoJSON","GeoJSON"],
		  	"visibility": false
			},{
				"source": "hotel",
				"baseParams": {"p1": "asdfasd", "p2": "12346"},
				"title": ["Hotels","Hotel"],
				"name": "Hotel",
				"group": ["GeoJSON","GeoJSON"],
		  	"visibility": false
			},{
				"source": "beni_arch",
				"baseParams": {"p1": "asdfasd", "p2": "12346"},
				"title": ["Architectural","Beni architettonici"],
				"name": "Beni architettonici",
				"group": ["GeoJSON","GeoJSON"],
		  	"visibility": false
			},{
				"source": "eventi",
				"baseParams": {"p1": "asdfasd", "p2": "12346"},
				"title": ["Events","Eventi"],
				"name": "Eventi",
				"group": ["GeoJSON","GeoJSON"],
		  	"visibility": false
			},{
		  	"source": "ngv",
		  	"title": ["Rail regional graph","Grafo ferroviario regionale"],
		  	"name": "Ferrovie",
		  	"group": ["Transport netwoks","Reti di trasporto"],
		  	"visibility": false,
		  	"gnURL": "http://www.geoportale2.piemonte.it/geonetworkrp/srv/ita/",
		  	"uuid": "r_piemon:1da1a302-658a-4eb9-94d4-72808c1ec0c5"
		  },{
		  	"source": "ngv",
		  	"title": ["Road regional graph - from 1:50.000 to 1:1","Grafo stradale regionale - da 1:50.000 a 1:1"],
		  	"name": "GDF1",
		  	"group": ["Transport netwoks","Reti di trasporto"],
		  	"visibility": false,
		  	"gnURL": "http://www.geoportale2.piemonte.it/geonetworkrp/srv/ita/",
		  	"uuid": "r_piemon:186d2e51-8936-4f70-8806-2d4db9fc9924"
		  },{
		  	"source": "ngv",
		  	"title": ["Road regional graph 1:50.000","Grafo stradale regionale 1:50.000"],
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
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:e28d157a-76a7-42ae-b9ed-83f312dc1922&currTab=rndt"
		  },{
		  	"source": "georpmercati",
		  	"title": ["Road markets area","Mercati aree"],
		  	"name": "MercatiAree",
		  	"group": ["Commercial Data","Dati commerciali"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:dca60ed3-b479-4c35-867e-150839fe2898&currTab=rndt"
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Babyparking privati - Service for childrens","Babyparking privati - Servizi infanzia"],
		  	"name": "BabyparkP",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:120f1b3c-acd6-4034-a117-d33e1d787a6d&currTab=rndt"
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Centri per bambini e genitori - Service for childrens","Centri per bambini e genitori - Servizi infanzia"],
		  	"name": "CentroBambini",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:120f1b3c-acd6-4034-a117-d33e1d787a6d&currTab=rndt"
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Ludoteche - Service for childrens","Ludoteche - Servizi infanzia"],
		  	"name": "Ludoteche",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:120f1b3c-acd6-4034-a117-d33e1d787a6d&currTab=rndt"
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Sezioni primavera - Service for childrens","Sezioni primavera - Servizi infanzia"],
		  	"name": "Primavera",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:120f1b3c-acd6-4034-a117-d33e1d787a6d&currTab=rndt"
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Nidi e micronidi in famiglia - Service for childrens","Nidi e micronidi in famiglia - Servizi infanzia"],
		  	"name": "Micronidi",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:120f1b3c-acd6-4034-a117-d33e1d787a6d&currTab=rndt"
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Nidi aziendali - Service for childrens","Nidi aziendali - Servizi infanzia"],
		  	"name": "NidoAziendale",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:120f1b3c-acd6-4034-a117-d33e1d787a6d&currTab=rndt"
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Nidi privati - Service for childrens","Nidi privati - Servizi infanzia"],
		  	"name": "NidoPrivato",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:120f1b3c-acd6-4034-a117-d33e1d787a6d&currTab=rndt"
		  },{
		  	"source": "georpsservinf",
		  	"title": ["Nidi comunali - Service for childrens","Nidi comunali - Servizi infanzia"],
		  	"name": "NidoComunale",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:120f1b3c-acd6-4034-a117-d33e1d787a6d&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["Schools Buildings","Scuole Edificato"],
		  	"name": "ScuoleEdificato",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["Scuola d'infanzia accesso - Schools","Scuola d'infanzia accesso - Scuole"],
		  	"name": "ScInfanzia",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["Scuola primaria accesso - Schools","Scuola primaria accesso - Scuole"],
		  	"name": "ScPrimaria",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["Scuola secondaria I Grado accesso - Schools","Scuola secondaria I Grado accesso - Scuole"],
		  	"name": "ScSecIGrado",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["Scuola secondaria II Grado accesso - Schools","Scuola secondaria II Grado accesso - Scuole"],
		  	"name": "ScSecIIGrado",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["Liceo scienze umane - Schools","Liceo scienze umane - Scuole"],
		  	"name": "LScienzeUmane",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["Liceo scientifico - Schools","Liceo scientifico - Scuole"],
		  	"name": "LScientifico",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
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
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["Liceo classico - Schools","Liceo classico - Scuole"],
		  	"name": "LClassico",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
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
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["I.T. Settore Tecnico - Schools","I.T. Settore Tecnico - Scuole"],
		  	"name": "ITTecnologico",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["I.T. Settore Tecnico-Economico - Schools","I.T. Settore Tecnico-Economico - Scuole"],
		  	"name": "ITTecEcon",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["Istituto d'Arte - Schools","Istituto d'Arte - Scuole"],
		  	"name": "IstArte",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["I.P. Settore Industria e Artigianato - Schools","I.P. Settore Industria e Artigianato - Scuole"],
		  	"name": "IPIndArt",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpscuole",
		  	"title": ["I.P. Settore Servizi - Schools","I.P. Settore Servizi - Scuole"],
		  	"name": "IPServizi",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:309f0a6a-999f-4ab9-be07-d94945f254b6&currTab=rndt"
		  },{
		  	"source": "georpuniv",
		  	"title": ["University Buildings","Universita&grave; Edifici"],
		  	"name": "UniversitaEdificato",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:b78c2f16-7ebd-4574-8f81-312b88580381&currTab=rndt"
		  },{
		  	"source": "georpuniv",
		  	"title": ["University Access","Universita&grave; Accessi"],
		  	"name": "UniversitaAccesso",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:b78c2f16-7ebd-4574-8f81-312b88580381&currTab=rndt"
		  },{
		  	"source": "georpstruttsocass",
		  	"title": ["Social care facilities","Strutture socio-assistenziali"],
		  	"name": "StruttSocioAss",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:8912b31e-ca69-48d9-9666-36f7e0cc1f01&currTab=rndt"
		  },{
		  	"source": "georpcons",
		  	"title": ["Teenager Consultors","Consultori Adolescenti"],
		  	"name": "Adolescenti",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:ab745dc5-629f-433c-8235-fe5f4f00b37c&currTab=rndt"
		  },{
		  	"source": "georpcons",
		  	"title": ["Consultori Familiari","Family Consultors"],
		  	"name": "Familiari",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:ab745dc5-629f-433c-8235-fe5f4f00b37c&currTab=rndt"
		  },{
		  	"source": "georpcons",
		  	"title": ["Pediatric Consultors","Consultori Pediatrici"],
		  	"name": "Pediatrici",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:ab745dc5-629f-433c-8235-fe5f4f00b37c&currTab=rndt"
		  },{
		  	"source": "georpasl",
		  	"title": ["Offices ASL","Uffici ASL"],
		  	"name": "SediASLAccesso",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:aa1eb8fd-c300-4252-a44e-eaf5d75c0069&currTab=rndt"
		  },{
		  	"source": "georpospedali",
		  	"title": ["Hospitals Scope relevance","Ospedali Ambito pertinenza"],
		  	"name": "OspedaliAmbPert",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:454af8f2-4306-4530-bd14-f72707822646&currTab=rndt"
		  },{
		  	"source": "georpospedali",
		  	"title": ["Hospitals buildings","Ospedali edifici"],
		  	"name": "OspedaliEdificato",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:454af8f2-4306-4530-bd14-f72707822646&currTab=rndt"
		  },{
		  	"source": "georpospedali",
		  	"title": ["Hospitals recognized","Ospedali Presidi riconosciuti"],
		  	"name": "PresidiOsp",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:454af8f2-4306-4530-bd14-f72707822646&currTab=rndt"
		  },{
		  	"source": "georpospedali",
		  	"title": ["Hospitals Access","Ospedali Accessi"],
		  	"name": "OspedaliAccesso",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:454af8f2-4306-4530-bd14-f72707822646&currTab=rndt"
		  },{
		  	"source": "georpospedali",
		  	"title": ["Hospitals ER","Ospedali Pronto soccorso"],
		  	"name": "ProntoSocc",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:454af8f2-4306-4530-bd14-f72707822646&currTab=rndt"
		  },{
		  	"source": "georpfarmacie",
		  	"title": ["Night Pharmacies","Farmacie notturne"],
		  	"name": "FarmacieNott",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:cc936099-22ef-4c12-9aa2-1d6da29c896b&currTab=rndt"
		  },{
		  	"source": "georpfarmacie",
		  	"title": ["Pharmacies","Farmacie"],
		  	"name": "FarmacieComu",
		  	"group": ["Point of interest","Punti di interesse"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:cc936099-22ef-4c12-9aa2-1d6da29c896b&currTab=rndt"
		  },{
		  	"source": "geotomob",
		  	"title": ["Paths loges","Percorsi loges"],
		  	"name": "PercorsiLoges",
		  	"group": ["Facilities for disabled people","Ausili per disabili"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:8f839f2a-244a-4e96-8620-0defe6b69b65&currTab=rndt"
		  },{
		  	"source": "geotomob_tst",
		  	"title": ["Disabled people parking slots","Parcheggi disabili"],
		  	"name": "StalliDisabili",
		  	"group": ["Facilities for disabled people","Ausili per disabili"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:0f21f93f-55da-4e89-b119-8af4a769225a&currTab=rndt"
		  },{
		  	"source": "geotomob",
		  	"title": ["Pedestrian areas","Zone pedonali"],
		  	"name": "AreePedonali",
		  	"group": ["Road traffic restrictions - regulations", "Restrizioni al traffico - regolazioni"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:985329f9-78ac-48bb-b324-84e0c5a6b7cb&currTab=rndt"
		  },{
		  	"source": "geotomob",
		  	"title": ["Restricted traffic area","ZTL"],
		  	"name": "ZTL",
		  	"group": ["Road traffic restrictions - regulations", "Restrizioni al traffico - regolazioni"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:76139607-633f-4e0f-a38a-f8a231a99eb0&currTab=rndt"
		  },{
		  	"source": "geotomob",
		  	"title": ["Taxi","Taxi"],
		  	"name": "AreeSostaTaxi",
		  	"group": ["Taxi","Taxi"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:8e4cf2e2-4699-475a-9c95-4084694c8d69&currTab=rndt"
		  },{
        "source": "geotomob",
        "title": ["Blue zone parking","Parcheggi zona Blu"],
        "name": "ZonaBlu",
        "group": ["Car Parking","Parcheggi"], 
        "visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:46480784-c426-4763-a62b-15aa89b88488&currTab=rndt"
      },{
		  	"source": "geotomob_tst",
		  	"title": ["Controlled access car parks","Parcheggi ad accesso controllato"],
		  	"name": "Parcheggi",
		  	"group": ["Car Parking","Parcheggi"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:46480784-c426-4763-a62b-15aa89b88488&currTab=rndt"
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
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:005e0261-a0da-4618-b2ea-43fbcc443140&currTab=rndt"
		  },{
		  	"source": "geotomob",
		  	"title": ["Cycle paths inside green parks","Piste parchi"],
		  	"name": "PisteParchi",
		  	"group": ["Cycling","Bicicletta"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:b1430c66-cdf5-4c49-bf4c-566714101fb7&currTab=rndt"
		  },{
		  	"source": "geotomob",
		  	"title": ["Cycle paths","Piste ciclabili"],
		  	"name": "PisteCiclabili",
		  	"group": ["Cycling","Bicicletta"],
		  	"visibility": false,
		  	"gnURL": "http://vm-osotp.csi.it/geonetwork/srv/ita/",
		  	"uuid": "o_p:f578a8c9-7133-4533-923a-34d11567ce00&currTab=rndt"
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
        "visibility": false
      },{
        "source": "opti",
        "title": ["Lines","Linee"],
        "name": "v_trip_train",
        "group": ["Rails","Treni"], 
        "visibility": false
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
		   "displayProjectionCode": "EPSG:32362",
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
			"toggleGroup": "toolGroup",
			"markerFadeoutDelay": 30
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
			"ptype": "gxp_wmsgetfeatureinfo_menu", 
			"regex": "[\\s\\S]*[\\w]+[\\s\\S]*",
			"useTabPanel": true,
			"infoAction": "hover;click",
			"toggleGroup": "toolGroup",
			"actionTarget": {"target": "paneltbar", "index": 20},
			"maxFeatures": 50
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
		  "exportFormats": ["CSV","shape-zip"]
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
                    "name": "Zone di analisi",
                    "label": "Zone di analisi",
                    "searchComboOutputFormat": "json",
                    "wfsBaseURL": "http://vm-osotp.csi.it/geoserver/opti/wfs",
                    "geocoderTypeName": "aree_censorie_ms",
                    "geocoderTypeRecordModel":[
                      {
                          "name":"id",
                          "mapping":"properties.gid"
                      },
                      {
                          "name":"name",
                          "mapping":"properties.nome"
                      },
                      {
                          "name":"geometry",
                          "mapping":"geometry"
                      }
                    ],
                   "geocoderTypeSortBy":null,
                   "geocoderTypeQueriableAttributes":[
                       "nome"
                   ],
                   "spatialOutputCRS": "EPSG:32632",
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

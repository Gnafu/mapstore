{
   "geoStoreBase": "",
   "proxy":"/http_proxy/proxy/?url=",
   "defaultLanguage": "it",
   "proj4jsDefs": {"EPSG:25832": "+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs"},
   "gsSources":{ 
		"bolzano": {
			"ptype": "gxp_wmssource",
			"url": "http://sit.comune.bolzano.it/geoserver/ows",
			"title": "Bolzano GeoServer",
			"SRS": "EPSG:900913",
			"version":"1.1.1",
		    "layersCachedExtent": [
				-20037508.34,-20037508.34,
				20037508.34,20037508.34
			],
			"layerBaseParams":{
				"FORMAT":"image/png8",
				"TILED":true
			}
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
	"map": {
		"projection": "EPSG:900913",
		"units": "m",
		"zoom": 5,
		"extent": [
			1259091.229051,5855016.830973,
			1268808.28627,5863434.458712
		],
		"maxExtent": [
			1252344.2712499984,5850795.892246094,1271912.1504882798,5870363.771484375
		],
		"layers": [						
			{
				"source": "bing",
				"title": "Bing Aerial",
				"name": "Aerial",
				"group": "background"
			},{
				"source": "ol",
				"title": "Vuoto",
				"group": "background",
				"fixed": true,
				"type": "OpenLayers.Layer",
				"visibility": false,
				"args": [
					"None", {"visibility": false}
				]
		    },{
				"source": "osm",
				"title": "Open Street Map",
				"name": "mapnik",
				"group": "background"
			},{
				"source": "mapquest",
				"title": "MapQuest OpenStreetMap",
				"name": "osm",
				"group": "background"
			},{
				"source": "google",
				"title": "Google Roadmap",
				"name": "ROADMAP",
				"group": "background"
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
				"source": "bolzano",
				"title": "Ortofoto Bolzano/Bozen",
				"name": "Cartografia:ortofoto_2010",
			    "layersCachedExtent": [
					1252344.2712499984,5850795.892246094,1271912.1504882798,5870363.771484375
				],
				"group": "background",
				"transparent": false,
				"format": "image/jpeg"
			}
		]
	},
			"customPanels":[
      {
          "xtype": "panel",
          "title": "FeatureGrid",      
          "border": false,
          "id": "south",
          "region": "south",
          "layout": "fit",
          "height": 330,
          "collapsed": false,
          "collapsible": true,
          "header": true
      },{
          "xtype": "panel",
          "title": "Query Panel",         
          "border": false,
          "id": "east",
          "width": 400,
          "height": 500,
          "region": "east",
          "layout": "fit",
          "collapsed": false,
          "collapsible": true,
          "header": true
      }
    ],	
	"tools": [
		{
			"ptype": "gxp_layertree",
			"outputConfig": {
				"id": "layertree"
			},
			"outputTarget": "tree",
			"localIndexs":{
					"it": 0,
					"de": 1
			}
		}, {
			"ptype": "gxp_legend",
			"outputTarget": "legend",
			"outputConfig": {
				"autoScroll": true
			},
			"legendConfig" : {
				"legendPanelId" : "legendPanel",
				"defaults": {
					"style": "padding:5px",                  
					"baseParams": {
						"LEGEND_OPTIONS": "forceLabels:on;fontSize:10",
						"WIDTH": 20, "HEIGHT": 20
					}
				}
			}
		}, {
			"ptype": "gxp_addlayers",
			"actionTarget": "tree.tbar",
			"id": "addlayers"
		}, {
			"ptype": "gxp_removelayer",
			"actionTarget": ["tree.tbar", "layertree.contextMenu"]
		}, {
			"ptype": "gxp_removeoverlays",
			"actionTarget": "tree.tbar"
		}, {
			"ptype": "gxp_addgroup",
			"actionTarget": "tree.tbar"
		}, {
			"ptype": "gxp_removegroup",
			"actionTarget": ["tree.tbar", "layertree.contextMenu"]
		}, {
			"ptype": "gxp_groupproperties",
			"actionTarget": ["tree.tbar", "layertree.contextMenu"]
		}, {
			"ptype": "gxp_layerproperties",
			"actionTarget": ["tree.tbar", "layertree.contextMenu"]
		}, {
			"ptype": "gxp_zoomtolayerextent",
			"actionTarget": {"target": "layertree.contextMenu", "index": 0}
		}, {
			"ptype":"gxp_geonetworksearch",
			"actionTarget": ["layertree.contextMenu"]
		}, {
			"ptype": "gxp_zoomtoextent",
			"actionTarget": {"target": "paneltbar", "index": 15}
		}, {
			"ptype": "gxp_navigation", "toggleGroup": "toolGroup",
			"actionTarget": {"target": "paneltbar", "index": 16}
		}, {
			"actions": ["-"], "actionTarget": "paneltbar"
		}, {
			"ptype": "gxp_zoombox", "toggleGroup": "toolGroup",
			"actionTarget": {"target": "paneltbar", "index": 17}
		}, {
			"ptype": "gxp_zoom",
			"actionTarget": {"target": "paneltbar", "index": 18}
		}, {
			"actions": ["-"], "actionTarget": "paneltbar"
		}, {
			"ptype": "gxp_navigationhistory",
			"actionTarget": {"target": "paneltbar", "index": 19}
		}, {
			"actions": ["-"], "actionTarget": "paneltbar"
		}, {
			"ptype": "gxp_wmsgetfeatureinfo_menu", 
			"regex": "[\\s\\S]*[\\w]+[\\s\\S]*",
			"useTabPanel": true,
			"toggleGroup": "toolGroup",
			"actionTarget": {"target": "paneltbar", "index": 20}
		}, {
			"actions": ["-"], "actionTarget": "paneltbar"
		}, {
			"ptype": "gxp_measure", "toggleGroup": "toolGroup",
			"actionTarget": {"target": "paneltbar", "index": 21}
		}, {
			"ptype": "gxp_print",
			"customParams":{
				"outputFilename":"mapstore-print"
			},
			"printService": "http://sit.comune.bolzano.it/geoserver/pdf/",
			"legendPanelId": "legendPanel",
			"actionTarget":{
			    "target": "paneltbar",
				"index":4
			}
        }, {
                        "ptype": "gxp_searchvia",
                        "outputTarget": "searchpanel",
                        "serviceUrl": "http://sit.comune.bolzano.it/GeoInfo/",
                        "selectionProperties": {
                            "wmsURL": "http://sit.comune.bolzano.it/geoserver/",
                                "selectionLayerTitle": "Selection Layer",
                                "selectionLayerCiviciName": "Cartografia:civici",
                                "selectionLayerViaName": "Ambiente:grafo",
                                "filterCiviciAttribute": "ID",
                                "selectionCiviciStyle": "highlight_point",
                                "filterViaAttribute": "ID_STRASSE",
                                "selectionViaStyle": "highlight"
                        }
                },  {
                        "ptype": "gxp_searchcatasto",
                        "outputTarget": "searchpanel",
                        "serviceUrl": "http://sit.comune.bolzano.it/GeoInfo/",
                        "selectionProperties": {
                            "wmsURL": "http://sit.comune.bolzano.it/geoserver/",
                                "selectionLayerTitle": "Selection Layer"
                        }
                }, {
			"ptype": "gxp_addlayer",
			"showCapabilitiesGrid": false,
			"id": "addlayer"
		}, {
		  "ptype": "gxp_featuremanager",
		  "id": "featuremanager"
	    }, {
		  "ptype": "gxp_featuregrid",
		  "featureManager": "featuremanager",
		  "outputConfig": {
			  "id": "featuregrid",
			  "title": "Features"
		  },
		  "outputTarget": "south",
		  "showExportCSV": true
	    }, {
		  "ptype": "gxp_bboxqueryform",
		  "featureManager": "featuremanager",
		  "featureGridContainer": "south",
		  "outputTarget": "east",
		  "actions": null,
		  "id": "bboxquery",
		  "outputConfig":{
		      "toggleGroup": "toolGroup",
			  "outputSRS": "EPSG:900913",
			  "selectStyle":{
				  "strokeColor": "#FF0000",
				  "handlerFillColor": "#FFFFFF",
				  "fillColor": "#FFFFFF",
				  "fillOpacity":0,
				  "strokeWidth":2
			  }	,
			  "spatialFilterOptions": {	
				  "lonMax": 20037508.34,   
				  "lonMin": -20037508.34,
				  "latMax": 20037508.34,   
				  "latMin": -20037508.34  
			  },
			  "bufferOptions": {
				"minValue": 1,
				"maxValue": 1000,
				"decimalPrecision": 2,
				"distanceUnits": "m"
			  }
		  }
	    }
	]
}

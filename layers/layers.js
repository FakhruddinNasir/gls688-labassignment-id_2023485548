var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_output_Snow1854_georef_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'output_Snow1854_georef<br />\
    <img src="styles/legend/output_Snow1854_georef_1_0.png" /> 0<br />\
    <img src="styles/legend/output_Snow1854_georef_1_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/output_Snow1854_georef_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-16098.302245, 6711808.354002, -14506.478924, 6713291.294938]
        })
    });
var lyr_Cholera_KDE_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cholera_KDE<br />\
    <img src="styles/legend/Cholera_KDE_2_0.png" /> 6.17789e-10<br />\
    <img src="styles/legend/Cholera_KDE_2_1.png" /> 37.593<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Cholera_KDE_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-15681.659041, 6712237.338800, -14700.335504, 6713149.161333]
        })
    });
var lyr_Cholera_KDE_25m_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cholera_KDE_25m<br />\
    <img src="styles/legend/Cholera_KDE_25m_3_0.png" /> 1.42979e-07<br />\
    <img src="styles/legend/Cholera_KDE_25m_3_1.png" /> 25.0796<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Cholera_KDE_25m_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-15640.559616, 6712278.549732, -14741.443571, 6713107.950204]
        })
    });
var format_Cholera_Deathscopy_4 = new ol.format.GeoJSON();
var features_Cholera_Deathscopy_4 = format_Cholera_Deathscopy_4.readFeatures(json_Cholera_Deathscopy_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cholera_Deathscopy_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cholera_Deathscopy_4.addFeatures(features_Cholera_Deathscopy_4);
var lyr_Cholera_Deathscopy_4 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Cholera_Deathscopy_4, 
                radius: 50 * 2,
                gradient: ['#fec6c6', '#ff0909'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Count';
        var featureWeight = feature.get(weightField);
        var maxWeight = 15;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'Cholera_Deaths copy'
            });
var lyr_Cholera_KDE_100_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cholera_KDE_100<br />\
    <img src="styles/legend/Cholera_KDE_100_5_0.png" /> 1.0699e-11<br />\
    <img src="styles/legend/Cholera_KDE_100_5_1.png" /> 79.6915<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Cholera_KDE_100_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-15763.710151, 6712160.798029, -14621.806048, 6713231.583668]
        })
    });
var format_Cholera_Deaths1854_6 = new ol.format.GeoJSON();
var features_Cholera_Deaths1854_6 = format_Cholera_Deaths1854_6.readFeatures(json_Cholera_Deaths1854_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cholera_Deaths1854_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cholera_Deaths1854_6.addFeatures(features_Cholera_Deaths1854_6);
var lyr_Cholera_Deaths1854_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cholera_Deaths1854_6, 
                style: style_Cholera_Deaths1854_6,
                popuplayertitle: 'Cholera_Deaths(1854)',
                interactive: true,
    title: 'Cholera_Deaths(1854)<br />\
    <img src="styles/legend/Cholera_Deaths1854_6_0.png" /> 1 - 1<br />\
    <img src="styles/legend/Cholera_Deaths1854_6_1.png" /> 1 - 3<br />\
    <img src="styles/legend/Cholera_Deaths1854_6_2.png" /> 3 - 5<br />\
    <img src="styles/legend/Cholera_Deaths1854_6_3.png" /> 5 - 8<br />\
    <img src="styles/legend/Cholera_Deaths1854_6_4.png" /> 8 - 15<br />' });
var format_WaterPumps_7 = new ol.format.GeoJSON();
var features_WaterPumps_7 = format_WaterPumps_7.readFeatures(json_WaterPumps_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterPumps_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterPumps_7.addFeatures(features_WaterPumps_7);
var lyr_WaterPumps_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterPumps_7, 
                style: style_WaterPumps_7,
                popuplayertitle: ' Water Pumps',
                interactive: true,
    title: ' Water Pumps<br />\
    <img src="styles/legend/WaterPumps_7_0.png" /> <br />' });
var format_Pump_Voronoi_8 = new ol.format.GeoJSON();
var features_Pump_Voronoi_8 = format_Pump_Voronoi_8.readFeatures(json_Pump_Voronoi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pump_Voronoi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pump_Voronoi_8.addFeatures(features_Pump_Voronoi_8);
var lyr_Pump_Voronoi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pump_Voronoi_8, 
                style: style_Pump_Voronoi_8,
                popuplayertitle: 'Pump_Voronoi',
                interactive: true,
                title: '<img src="styles/legend/Pump_Voronoi_8.png" /> Pump_Voronoi'
            });
var format_Meancoordinates_9 = new ol.format.GeoJSON();
var features_Meancoordinates_9 = format_Meancoordinates_9.readFeatures(json_Meancoordinates_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meancoordinates_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meancoordinates_9.addFeatures(features_Meancoordinates_9);
var lyr_Meancoordinates_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Meancoordinates_9, 
                style: style_Meancoordinates_9,
                popuplayertitle: 'Mean coordinates',
                interactive: true,
                title: '<img src="styles/legend/Meancoordinates_9.png" /> Mean coordinates'
            });
var format_Voronoi_Deaths_10 = new ol.format.GeoJSON();
var features_Voronoi_Deaths_10 = format_Voronoi_Deaths_10.readFeatures(json_Voronoi_Deaths_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voronoi_Deaths_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voronoi_Deaths_10.addFeatures(features_Voronoi_Deaths_10);
var lyr_Voronoi_Deaths_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voronoi_Deaths_10, 
                style: style_Voronoi_Deaths_10,
                popuplayertitle: 'Voronoi_Deaths',
                interactive: true,
                title: '<img src="styles/legend/Voronoi_Deaths_10.png" /> Voronoi_Deaths'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_output_Snow1854_georef_1.setVisible(true);lyr_Cholera_KDE_2.setVisible(true);lyr_Cholera_KDE_25m_3.setVisible(true);lyr_Cholera_Deathscopy_4.setVisible(true);lyr_Cholera_KDE_100_5.setVisible(true);lyr_Cholera_Deaths1854_6.setVisible(true);lyr_WaterPumps_7.setVisible(true);lyr_Pump_Voronoi_8.setVisible(true);lyr_Meancoordinates_9.setVisible(true);lyr_Voronoi_Deaths_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_output_Snow1854_georef_1,lyr_Cholera_KDE_2,lyr_Cholera_KDE_25m_3,lyr_Cholera_Deathscopy_4,lyr_Cholera_KDE_100_5,lyr_Cholera_Deaths1854_6,lyr_WaterPumps_7,lyr_Pump_Voronoi_8,lyr_Meancoordinates_9,lyr_Voronoi_Deaths_10];
lyr_Cholera_Deaths1854_6.set('fieldAliases', {'Count': 'Count', });
lyr_WaterPumps_7.set('fieldAliases', {'Name': 'Name', });
lyr_Pump_Voronoi_8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Meancoordinates_9.set('fieldAliases', {'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', });
lyr_Voronoi_Deaths_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Deaths': 'Deaths', });
lyr_Cholera_Deaths1854_6.set('fieldImages', {'Count': 'Range', });
lyr_WaterPumps_7.set('fieldImages', {'Name': 'TextEdit', });
lyr_Pump_Voronoi_8.set('fieldImages', {'fid': '', 'Name': '', });
lyr_Meancoordinates_9.set('fieldImages', {'MEAN_X': '', 'MEAN_Y': '', });
lyr_Voronoi_Deaths_10.set('fieldImages', {'fid': '', 'Name': '', 'Deaths': '', });
lyr_Cholera_Deaths1854_6.set('fieldLabels', {'Count': 'no label', });
lyr_WaterPumps_7.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Pump_Voronoi_8.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Meancoordinates_9.set('fieldLabels', {'MEAN_X': 'inline label - visible with data', 'MEAN_Y': 'inline label - visible with data', });
lyr_Voronoi_Deaths_10.set('fieldLabels', {'fid': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Deaths': 'inline label - visible with data', });
lyr_Voronoi_Deaths_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
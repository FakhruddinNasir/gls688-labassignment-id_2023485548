var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
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
var lyr_Cholera_KDE_100_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cholera_KDE_100<br />\
    <img src="styles/legend/Cholera_KDE_100_2_0.png" /> 1.0699e-11<br />\
    <img src="styles/legend/Cholera_KDE_100_2_1.png" /> 79.6915<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Cholera_KDE_100_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-15763.710151, 6712160.798029, -14621.806048, 6713231.583668]
        })
    });
var format_WaterPumps_3 = new ol.format.GeoJSON();
var features_WaterPumps_3 = format_WaterPumps_3.readFeatures(json_WaterPumps_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterPumps_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterPumps_3.addFeatures(features_WaterPumps_3);
var lyr_WaterPumps_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterPumps_3, 
                style: style_WaterPumps_3,
                popuplayertitle: ' Water Pumps',
                interactive: true,
    title: ' Water Pumps<br />\
    <img src="styles/legend/WaterPumps_3_0.png" /> <br />' });
var format_Meancoordinates_4 = new ol.format.GeoJSON();
var features_Meancoordinates_4 = format_Meancoordinates_4.readFeatures(json_Meancoordinates_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meancoordinates_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meancoordinates_4.addFeatures(features_Meancoordinates_4);
var lyr_Meancoordinates_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Meancoordinates_4, 
                style: style_Meancoordinates_4,
                popuplayertitle: 'Mean coordinates',
                interactive: true,
                title: '<img src="styles/legend/Meancoordinates_4.png" /> Mean coordinates'
            });
var format_Voronoi_Deaths_5 = new ol.format.GeoJSON();
var features_Voronoi_Deaths_5 = format_Voronoi_Deaths_5.readFeatures(json_Voronoi_Deaths_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Voronoi_Deaths_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Voronoi_Deaths_5.addFeatures(features_Voronoi_Deaths_5);
var lyr_Voronoi_Deaths_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Voronoi_Deaths_5, 
                style: style_Voronoi_Deaths_5,
                popuplayertitle: 'Voronoi_Deaths',
                interactive: true,
                title: '<img src="styles/legend/Voronoi_Deaths_5.png" /> Voronoi_Deaths'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_output_Snow1854_georef_1.setVisible(true);lyr_Cholera_KDE_100_2.setVisible(true);lyr_WaterPumps_3.setVisible(true);lyr_Meancoordinates_4.setVisible(true);lyr_Voronoi_Deaths_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_output_Snow1854_georef_1,lyr_Cholera_KDE_100_2,lyr_WaterPumps_3,lyr_Meancoordinates_4,lyr_Voronoi_Deaths_5];
lyr_WaterPumps_3.set('fieldAliases', {'Name': 'Name', });
lyr_Meancoordinates_4.set('fieldAliases', {'MEAN_X': 'MEAN_X', 'MEAN_Y': 'MEAN_Y', });
lyr_Voronoi_Deaths_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Deaths': 'Deaths', });
lyr_WaterPumps_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_Meancoordinates_4.set('fieldImages', {'MEAN_X': '', 'MEAN_Y': '', });
lyr_Voronoi_Deaths_5.set('fieldImages', {'fid': '', 'Name': '', 'Deaths': '', });
lyr_WaterPumps_3.set('fieldLabels', {'Name': 'inline label - visible with data', });
lyr_Meancoordinates_4.set('fieldLabels', {'MEAN_X': 'inline label - visible with data', 'MEAN_Y': 'inline label - visible with data', });
lyr_Voronoi_Deaths_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Deaths': 'inline label - visible with data', });
lyr_Voronoi_Deaths_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_MapaValledelCauca_0 = new ol.format.GeoJSON();
var features_MapaValledelCauca_0 = format_MapaValledelCauca_0.readFeatures(json_MapaValledelCauca_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapaValledelCauca_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MapaValledelCauca_0.addFeatures(features_MapaValledelCauca_0);var lyr_MapaValledelCauca_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MapaValledelCauca_0, 
                style: style_MapaValledelCauca_0,
                title: '<img src="styles/legend/MapaValledelCauca_0.png" /> Mapa Valle del Cauca'
            });var format_AreaSembrada_1 = new ol.format.GeoJSON();
var features_AreaSembrada_1 = format_AreaSembrada_1.readFeatures(json_AreaSembrada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaSembrada_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_AreaSembrada_1.addFeatures(features_AreaSembrada_1);var lyr_AreaSembrada_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaSembrada_1, 
                style: style_AreaSembrada_1,
    title: 'Area Sembrada<br />\
    <img src="styles/legend/AreaSembrada_1_0.png" />  9.3000 - 261.8400 <br />\
    <img src="styles/legend/AreaSembrada_1_1.png" />  261.8400 - 514.3800 <br />\
    <img src="styles/legend/AreaSembrada_1_2.png" />  514.3800 - 766.9200 <br />\
    <img src="styles/legend/AreaSembrada_1_3.png" />  766.9200 - 1019.4600 <br />\
    <img src="styles/legend/AreaSembrada_1_4.png" />  1019.4600 - 1272.0000 <br />'
        });

lyr_MapaValledelCauca_0.setVisible(true);lyr_AreaSembrada_1.setVisible(true);
var layersList = [baseLayer,lyr_MapaValledelCauca_0,lyr_AreaSembrada_1];
lyr_MapaValledelCauca_0.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'municipio': 'municipio', 'departamen': 'departamen', 'cultivo': 'cultivo', 'aã‘o': 'aã‘o', 'ãrea_semb': 'ãrea_semb', 'ãrea_cose': 'ãrea_cose', 'producciã³': 'producciã³', 'rendimient': 'rendimient', 'no': 'no', });
lyr_AreaSembrada_1.set('fieldAliases', {'qc_id_0': 'qc_id_0', 'qc_id': 'qc_id', 'id': 'id', 'municipio': 'municipio', 'departamen': 'departamen', 'cultivo': 'cultivo', 'año': 'año', 'area sembr': 'area sembr', 'area cosec': 'area cosec', 'producción': 'producción', 'rendimient': 'rendimient', 'no': 'no', });
lyr_MapaValledelCauca_0.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'municipio': 'TextEdit', 'departamen': 'TextEdit', 'cultivo': 'TextEdit', 'aã‘o': 'TextEdit', 'ãrea_semb': 'TextEdit', 'ãrea_cose': 'TextEdit', 'producciã³': 'TextEdit', 'rendimient': 'TextEdit', 'no': 'TextEdit', });
lyr_AreaSembrada_1.set('fieldImages', {'qc_id_0': 'TextEdit', 'qc_id': 'TextEdit', 'id': 'TextEdit', 'municipio': 'TextEdit', 'departamen': 'TextEdit', 'cultivo': 'TextEdit', 'año': 'TextEdit', 'area sembr': 'TextEdit', 'area cosec': 'TextEdit', 'producción': 'TextEdit', 'rendimient': 'TextEdit', 'no': 'TextEdit', });
lyr_MapaValledelCauca_0.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'municipio': 'no label', 'departamen': 'no label', 'cultivo': 'no label', 'aã‘o': 'no label', 'ãrea_semb': 'no label', 'ãrea_cose': 'no label', 'producciã³': 'no label', 'rendimient': 'no label', 'no': 'no label', });
lyr_AreaSembrada_1.set('fieldLabels', {'qc_id_0': 'no label', 'qc_id': 'no label', 'id': 'no label', 'municipio': 'inline label', 'departamen': 'header label', 'cultivo': 'header label', 'año': 'inline label', 'area sembr': 'header label', 'area cosec': 'inline label', 'producción': 'inline label', 'rendimient': 'inline label', 'no': 'header label', });
lyr_AreaSembrada_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
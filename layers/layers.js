var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FUENTES_ORNAMENTALES_1 = new ol.format.GeoJSON();
var features_FUENTES_ORNAMENTALES_1 = format_FUENTES_ORNAMENTALES_1.readFeatures(json_FUENTES_ORNAMENTALES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FUENTES_ORNAMENTALES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FUENTES_ORNAMENTALES_1.addFeatures(features_FUENTES_ORNAMENTALES_1);
var lyr_FUENTES_ORNAMENTALES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FUENTES_ORNAMENTALES_1, 
                style: style_FUENTES_ORNAMENTALES_1,
                popuplayertitle: 'FUENTES_ORNAMENTALES',
                interactive: true,
    title: 'FUENTES_ORNAMENTALES<br />\
    <img src="styles/legend/FUENTES_ORNAMENTALES_1_0.png" /> Verdadero<br />\
    <img src="styles/legend/FUENTES_ORNAMENTALES_1_1.png" /> Falso<br />' });
var group_LOTEZONASVERDESARBOLADOYFUENTES = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'LOTE ZONAS VERDES, ARBOLADO Y FUENTES'});
var group_LOTEJUEGOSINFANTILES = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'LOTE JUEGOS INFANTILES'});
var group_MAPABASE = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: 'close',
                                title: 'MAPA BASE'});

lyr_GoogleSatellite_0.setVisible(true);lyr_FUENTES_ORNAMENTALES_1.setVisible(true);
var layersList = [group_MAPABASE,lyr_FUENTES_ORNAMENTALES_1];
lyr_FUENTES_ORNAMENTALES_1.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'id': 'id', 'fuente': 'fuente', 'sector': 'sector', 'inventario': 'inventario', 'nombre': 'nombre', });
lyr_FUENTES_ORNAMENTALES_1.set('fieldImages', {'qc_id': '', 'fid': '', 'id': '', 'fuente': '', 'sector': '', 'inventario': '', 'nombre': '', });
lyr_FUENTES_ORNAMENTALES_1.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'id': 'no label', 'fuente': 'no label', 'sector': 'no label', 'inventario': 'no label', 'nombre': 'no label', });
lyr_FUENTES_ORNAMENTALES_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
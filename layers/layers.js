var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KONSEPPOLARUANG_2 = new ol.format.GeoJSON();
var features_KONSEPPOLARUANG_2 = format_KONSEPPOLARUANG_2.readFeatures(json_KONSEPPOLARUANG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONSEPPOLARUANG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONSEPPOLARUANG_2.addFeatures(features_KONSEPPOLARUANG_2);
var lyr_KONSEPPOLARUANG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KONSEPPOLARUANG_2, 
                style: style_KONSEPPOLARUANG_2,
                popuplayertitle: "KONSEP POLA RUANG",
                interactive: true,
    title: 'KONSEP POLA RUANG<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_0.png" /> Badan Air<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_2.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_3.png" /> Instalasi Pengolahan Air Limbah (IPAL)<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_4.png" /> Instalasi Pengolahan Air Minum (IPAM)<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_5.png" /> Jalur Hijau<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_6.png" /> Pariwisata<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_7.png" /> Pemakaman<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_8.png" /> Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_9.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_10.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_11.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_12.png" /> Perkantoran<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_13.png" /> Perkebunan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_14.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_15.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_16.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_17.png" /> Perumahan Kepadatan Sangat Rendah<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_18.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_19.png" /> Pos Lintas Batas Negara<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_20.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_21.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_22.png" /> SPU Skala RW<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_23.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_24.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_25.png" /> Taman Kota<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_26.png" /> Taman RW<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_27.png" /> Tanaman Pangan<br />'
        });
var format_BatasDesa_3 = new ol.format.GeoJSON();
var features_BatasDesa_3 = format_BatasDesa_3.readFeatures(json_BatasDesa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_3.addFeatures(features_BatasDesa_3);
var lyr_BatasDesa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_3, 
                style: style_BatasDesa_3,
                popuplayertitle: "Batas Desa",
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_3.png" /> Batas Desa'
            });
var format_VIDEO_DRONE_4 = new ol.format.GeoJSON();
var features_VIDEO_DRONE_4 = format_VIDEO_DRONE_4.readFeatures(json_VIDEO_DRONE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIDEO_DRONE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIDEO_DRONE_4.addFeatures(features_VIDEO_DRONE_4);
var lyr_VIDEO_DRONE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIDEO_DRONE_4, 
                style: style_VIDEO_DRONE_4,
                popuplayertitle: "VIDEO_DRONE",
                interactive: true,
                title: '<img src="styles/legend/VIDEO_DRONE_4.png" /> VIDEO_DRONE'
            });

lyr_GoogleHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_KONSEPPOLARUANG_2.setVisible(true);lyr_BatasDesa_3.setVisible(true);lyr_VIDEO_DRONE_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_KONSEPPOLARUANG_2,lyr_BatasDesa_3,lyr_VIDEO_DRONE_4];
lyr_KONSEPPOLARUANG_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'NAMZON': 'Nama Zona', 'KODZON': 'Kode Zona', 'NAMSZN': 'Nama Sub-Zona', 'KODSZN': 'Kode Sub-Zona', 'JNSRPR': 'Jenis Rencana Pola Ruang', 'KODEWP': 'Kode WP', 'KODSWP': 'Kode SWP', 'KODBLK': 'Kode Blok', 'KODSBL': 'Kode Sub-Blok', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'WADMKC': 'Wilayah Administrasi Kecamatan', 'WADMKD': 'Wilayah Administrasi Kelurahan/Desa', 'KKOP_1': 'Kawasan Keselamatan Operasi Penerbangan', 'LP2B_2': 'Lahan Pertanian Pangan Berkelanjutan', 'KRB_03': 'Kawasan Rawan Bencana', 'TOD_04': 'Kawasan Berorientasi Transit', 'TEB_05': 'Tempat Evakuasi Bencana', 'PUSLIT': 'Pusat Penelitian', 'CAGBUD': 'Kawasan Cagar Budaya', 'RESAIR': 'Kawasan Resapan Air', 'KSMPDN': 'Kawasan Sempadan', 'HANKAM': 'Kawasan Pertahanan dan Keamanan', 'KKARST': 'Kawasan Karst', 'PTBGMB': 'Kawasan Pertambangan Mineral dan Batubara', 'MGRSAT': 'Kawasan Migrasi Satwa', 'RDBUMI': 'Ruang Dalam Bumi', 'TPZ_00': 'Teknik Pengaturan Zonasi', 'REMARK': 'Catatan', 'LUASHA': 'Luas Area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BatasDesa_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'METADATA': 'METADATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_VIDEO_DRONE_4.set('fieldAliases', {'objectid': 'objectid', 'fid_1': 'fid_1', 'video': 'video', 'LOKASI': 'LOKASI', });
lyr_KONSEPPOLARUANG_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'NAMZON': 'TextEdit', 'KODZON': 'ValueMap', 'NAMSZN': 'ValueMap', 'KODSZN': 'ValueMap', 'JNSRPR': 'ValueMap', 'KODEWP': 'TextEdit', 'KODSWP': 'TextEdit', 'KODBLK': 'TextEdit', 'KODSBL': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'KKOP_1': 'ValueMap', 'LP2B_2': 'ValueMap', 'KRB_03': 'ValueMap', 'TOD_04': 'ValueMap', 'TEB_05': 'ValueMap', 'PUSLIT': 'ValueMap', 'CAGBUD': 'ValueMap', 'RESAIR': 'ValueMap', 'KSMPDN': 'ValueMap', 'HANKAM': 'ValueMap', 'KKARST': 'ValueMap', 'PTBGMB': 'ValueMap', 'MGRSAT': 'ValueMap', 'RDBUMI': 'ValueMap', 'TPZ_00': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasDesa_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NAMOBJ': 'TextEdit', 'METADATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_VIDEO_DRONE_4.set('fieldImages', {'objectid': 'TextEdit', 'fid_1': 'TextEdit', 'video': 'TextEdit', 'LOKASI': 'TextEdit', });
lyr_KONSEPPOLARUANG_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'NAMZON': 'inline label - always visible', 'KODZON': 'inline label - always visible', 'NAMSZN': 'inline label - always visible', 'KODSZN': 'inline label - always visible', 'JNSRPR': 'inline label - always visible', 'KODEWP': 'inline label - always visible', 'KODSWP': 'inline label - always visible', 'KODBLK': 'inline label - always visible', 'KODSBL': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'KKOP_1': 'inline label - always visible', 'LP2B_2': 'inline label - always visible', 'KRB_03': 'inline label - always visible', 'TOD_04': 'inline label - always visible', 'TEB_05': 'inline label - always visible', 'PUSLIT': 'inline label - always visible', 'CAGBUD': 'inline label - always visible', 'RESAIR': 'inline label - always visible', 'KSMPDN': 'inline label - always visible', 'HANKAM': 'inline label - always visible', 'KKARST': 'inline label - always visible', 'PTBGMB': 'inline label - always visible', 'MGRSAT': 'inline label - always visible', 'RDBUMI': 'inline label - always visible', 'TPZ_00': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_BatasDesa_3.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_VIDEO_DRONE_4.set('fieldLabels', {'objectid': 'inline label - always visible', 'fid_1': 'inline label - always visible', 'video': 'inline label - always visible', 'LOKASI': 'no label', });
lyr_VIDEO_DRONE_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
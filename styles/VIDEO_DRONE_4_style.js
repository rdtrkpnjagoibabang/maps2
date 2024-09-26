var size = 0;
var placement = 'point';

var style_VIDEO_DRONE_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("LOKASI") !== null) {
        labelText = String(feature.get("LOKASI"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 9.6 + size, points: 5,
            radius2: 4.8, stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.7019607843137254)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(133,182,111,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

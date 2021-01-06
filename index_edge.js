/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'b2',
                type: 'image',
                rect: ['158px', '5px','146px','114px','auto', 'auto'],
                clip: ['rect(0px 146px 72.381591796875px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"b.jpg",'0px','0px']
            },
            {
                id: 'c',
                type: 'image',
                rect: ['149px', '26px','249px','113px','auto', 'auto'],
                clip: ['rect(36px 151.5px 80px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"c.jpg",'0px','0px']
            },
            {
                id: 't',
                type: 'image',
                rect: ['0px', '-49px','300px','49px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.jpg",'0px','0px']
            },
            {
                id: 'f1',
                type: 'image',
                rect: ['-307px', '117px','300px','78px','auto', 'auto'],
                clip: ['rect(0px 300px 64.5px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"f1.jpg",'0px','0px'],
                transform: [[],[],[],['1','0.93023']]
            },
            {
                id: 'a',
                type: 'image',
                rect: ['0px', '49px','150px','68px','auto', 'auto'],
                clip: ['rect(0px 150px 64px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"a.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_b2}": [
                ["style", "top", '6px'],
                ["style", "clip", [0,146,72.381591796875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '114px'],
                ["style", "opacity", '1'],
                ["style", "left", '158px'],
                ["style", "width", '146px']
            ],
            "${_c}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '149px'],
                ["style", "width", '249px'],
                ["style", "top", '35px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '113px'],
                ["style", "clip", [36,151.5,80,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "left", '0px'],
                ["style", "top", '-56px']
            ],
            "${_f1}": [
                ["style", "top", '117px'],
                ["transform", "scaleY", '0.93023'],
                ["style", "clip", [0,300,64.5,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-307px']
            ],
            "${_a}": [
                ["style", "top", '49px'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '150px'],
                ["style", "clip", [0,150,64,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: true,
            timeline: [
                { id: "eid44", tween: [ "transform", "${_b2}", "scaleY", '1', { fromValue: '0'}], position: 2930, duration: 315, easing: "easeInCubic" },
                { id: "eid62", tween: [ "style", "${_b2}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 305, easing: "easeInCubic" },
                { id: "eid58", tween: [ "style", "${_c}", "top", '27px', { fromValue: '35px'}], position: 330, duration: 290, easing: "easeInCubic" },
                { id: "eid99", tween: [ "style", "${_c}", "top", '38px', { fromValue: '27px'}], position: 3071, duration: 174, easing: "easeInCubic" },
                { id: "eid118", tween: [ "style", "${_c}", "top", '67px', { fromValue: '38px'}], position: 6590, duration: 116, easing: "easeInCubic" },
                { id: "eid45", tween: [ "style", "${_b2}", "clip", [0,146,112.265869140625,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,146,72.381591796875,0]}], position: 3245, duration: 1377, easing: "easeInCubic" },
                { id: "eid18", tween: [ "style", "${_c}", "-webkit-transform-origin", [3.21,49.56], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 6425, duration: 285, easing: "easeInCubic" },
                { id: "eid174", tween: [ "style", "${_c}", "-moz-transform-origin", [3.21,49.56], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 6425, duration: 285, easing: "easeInCubic" },
                { id: "eid175", tween: [ "style", "${_c}", "-ms-transform-origin", [3.21,49.56], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 6425, duration: 285, easing: "easeInCubic" },
                { id: "eid176", tween: [ "style", "${_c}", "msTransformOrigin", [3.21,49.56], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 6425, duration: 285, easing: "easeInCubic" },
                { id: "eid177", tween: [ "style", "${_c}", "-o-transform-origin", [3.21,49.56], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 6425, duration: 285, easing: "easeInCubic" },
                { id: "eid43", tween: [ "transform", "${_b2}", "scaleX", '1', { fromValue: '0'}], position: 2930, duration: 315, easing: "easeInCubic" },
                { id: "eid1", tween: [ "style", "${_f1}", "left", '0px', { fromValue: '-307px'}], position: 0, duration: 555, easing: "easeInCubic" },
                { id: "eid128", tween: [ "style", "${_f1}", "left", '-306px', { fromValue: '0px'}], position: 6425, duration: 206, easing: "easeInCubic" },
                { id: "eid96", tween: [ "transform", "${_c}", "scaleY", '1.1', { fromValue: '1'}], position: 425, duration: 195, easing: "easeInCubic" },
                { id: "eid11", tween: [ "style", "${_c}", "opacity", '1', { fromValue: '0'}], position: 285, duration: 360, easing: "easeInCubic" },
                { id: "eid159", tween: [ "style", "${_c}", "opacity", '0', { fromValue: '1'}], position: 6039, duration: 211, easing: "easeInCubic" },
                { id: "eid161", tween: [ "style", "${_c}", "opacity", '1', { fromValue: '0'}], position: 6499, duration: 211, easing: "easeInCubic" },
                { id: "eid19", tween: [ "style", "${_c}", "clip", [-3,250.5,114.5,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [36,151.5,80,0]}], position: 6425, duration: 285, easing: "easeInCubic" },
                { id: "eid95", tween: [ "transform", "${_c}", "scaleX", '1.1', { fromValue: '1'}], position: 425, duration: 195, easing: "easeInCubic" },
                { id: "eid108", tween: [ "style", "${_a}", "top", '0px', { fromValue: '49px'}], position: 3000, duration: 304, easing: "easeInCubic" },
                { id: "eid103", tween: [ "style", "${_a}", "left", '0px', { fromValue: '150px'}], position: 0, duration: 270, easing: "easeInCubic" },
                { id: "eid119", tween: [ "style", "${_a}", "left", '75px', { fromValue: '0px'}], position: 6590, duration: 87, easing: "easeInCubic" },
                { id: "eid63", tween: [ "transform", "${_a}", "scaleX", '0', { fromValue: '1'}], position: 6000, duration: 305, easing: "easeInCubic" },
                { id: "eid115", tween: [ "transform", "${_a}", "scaleX", '1', { fromValue: '0'}], position: 6490, duration: 250, easing: "easeInCubic" },
                { id: "eid101", tween: [ "style", "${_c}", "left", '14px', { fromValue: '149px'}], position: 3071, duration: 174, easing: "easeInCubic" },
                { id: "eid64", tween: [ "transform", "${_a}", "scaleY", '0', { fromValue: '1'}], position: 6000, duration: 305, easing: "easeInCubic" },
                { id: "eid116", tween: [ "transform", "${_a}", "scaleY", '1', { fromValue: '0'}], position: 6490, duration: 250, easing: "easeInCubic" },
                { id: "eid12", tween: [ "style", "${_t}", "top", '-4px', { fromValue: '-56px'}], position: 330, duration: 285, easing: "easeInCubic" },
                { id: "eid14", tween: [ "style", "${_t}", "top", '-56px', { fromValue: '-4px'}], position: 3000, duration: 285, easing: "easeInCubic" },
                { id: "eid7", tween: [ "style", "${_a}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 615, easing: "easeInCubic" },
                { id: "eid117", tween: [ "style", "${_a}", "opacity", '1', { fromValue: '0'}], position: 6425, duration: 315, easing: "easeInCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2243408");

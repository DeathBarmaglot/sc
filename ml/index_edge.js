(function($, Edge, compId){

var im='https://raw.githubusercontent.com/DeathBarmaglot/sc/main/ml/images/';

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
                id: 'a',
                type: 'image',
                rect: ['-1353px', '-958px','3007px','2097px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.09']]
            },
            {
                id: 'i',
                type: 'image',
                rect: ['-254px', '-103px','1000px','510px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"i.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_0',
                type: 'image',
                rect: ['-858px', '-57px','1907px','420px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"0.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'p2',
                type: 'image',
                rect: ['-648px', '-167px','1460px','620px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'p1',
                type: 'image',
                rect: ['-893px', '-36px','2010px','370px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't2',
                type: 'image',
                rect: ['-7px', '136px','308px','26px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.png",'0px','0px'],
                transform: [[],[],[],['0.9']]
            },
            {
                id: 'l',
                type: 'image',
                rect: ['-1349px', '-190px','2930px','680px','auto', 'auto'],
                clip: ['rect(0px 2930px 508.8260192871094px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"l.svg",'0px','0px'],
                transform: [[],[],[],['0.0762','0.0762']]
            },
            {
                id: 'lCopy2',
                type: 'image',
                rect: ['-1475px', '-267px','2930px','680px','auto', 'auto'],
                clip: ['rect(513.5219116210938px 2930px 794.1181030273438px 1732.283447265625px)'],
                fill: ["rgba(0,0,0,0)",im+"l.svg",'0px','0px'],
                transform: [[],[],[],['0.0762','0.0762']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_p1}": [
                ["style", "top", '-36px'],
                ["style", "opacity", '1'],
                ["style", "left", '-1127px']
            ],
            "${_a}": [
                ["style", "top", '-958px'],
                ["transform", "scaleY", '0.09'],
                ["style", "height", '2097px'],
                ["style", "opacity", '1'],
                ["style", "left", '-1353px'],
                ["style", "width", '3007px']
            ],
            "${_lCopy2}": [
                ["style", "top", '-267px'],
                ["transform", "scaleY", '0.0762'],
                ["transform", "scaleX", '0.0762'],
                ["style", "opacity", '0'],
                ["style", "left", '-1475px'],
                ["style", "clip", [513.5219116210938,2930,794.1181030273438,1732.283447265625], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_i}": [
                ["style", "top", '-103px'],
                ["style", "opacity", '0'],
                ["style", "left", '-254px']
            ],
            "${_l}": [
                ["style", "top", '-284px'],
                ["transform", "scaleY", '0.0762'],
                ["transform", "scaleX", '0.0762'],
                ["style", "opacity", '0'],
                ["style", "clip", [0,2930,508.8260192871094,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-1349px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_t2}": [
                ["style", "top", '136px'],
                ["transform", "scaleX", '0.9'],
                ["style", "height", '26px'],
                ["style", "opacity", '0'],
                ["style", "left", '-7px'],
                ["style", "width", '308px']
            ],
            "${_p2}": [
                ["style", "top", '-167px'],
                ["style", "opacity", '0'],
                ["style", "left", '-648px']
            ],
            "${__0}": [
                ["style", "top", '-57px'],
                ["style", "height", '420px'],
                ["style", "opacity", '0'],
                ["style", "left", '-858px'],
                ["style", "width", '1907px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13000,
            autoPlay: true,
            timeline: [
                { id: "eid38", tween: [ "style", "${_p1}", "opacity", '0', { fromValue: '1'}], position: 3250, duration: 301 },
                { id: "eid19", tween: [ "style", "${_l}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid23", tween: [ "style", "${_l}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid18", tween: [ "style", "${_l}", "top", '-303px', { fromValue: '-284px'}], position: 0, duration: 301 },
                { id: "eid25", tween: [ "style", "${_p1}", "left", '-893px', { fromValue: '-1127px'}], position: 1000, duration: 250 },
                { id: "eid30", tween: [ "style", "${_t2}", "opacity", '1', { fromValue: '0'}], position: 10148, duration: 254 },
                { id: "eid56", tween: [ "style", "${_t2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid50", tween: [ "style", "${_lCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "eid49", tween: [ "style", "${_lCopy2}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 },
                { id: "eid33", tween: [ "style", "${_p2}", "opacity", '1', { fromValue: '0'}], position: 4500, duration: 500 },
                { id: "eid41", tween: [ "style", "${_p2}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 500 },
                { id: "eid15", tween: [ "style", "${__0}", "opacity", '1', { fromValue: '0'}], position: 7898, duration: 500 },
                { id: "eid53", tween: [ "style", "${__0}", "opacity", '0', { fromValue: '1'}], position: 9750, duration: 250 },
                { id: "eid35", tween: [ "style", "${_i}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 500 },
                { id: "eid40", tween: [ "style", "${_i}", "opacity", '0', { fromValue: '1'}], position: 7898, duration: 500 },
                { id: "eid52", tween: [ "style", "${_i}", "opacity", '1', { fromValue: '0'}], position: 8398, duration: 500 },
                { id: "eid55", tween: [ "style", "${_i}", "opacity", '0', { fromValue: '1'}], position: 9750, duration: 250 },
                { id: "eid57", tween: [ "style", "${_a}", "opacity", '0', { fromValue: '1'}], position: 12500, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4914716");

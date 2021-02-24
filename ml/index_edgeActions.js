(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol;


   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.play(0);

      });

   })("stage");


})(jQuery, AdobeEdge, "EDGE-4914716");
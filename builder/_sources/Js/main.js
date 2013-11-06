(function ( global ) {
  "use strict";
  var $ = global.jQuery;

  $( global.document ).ready( function(){
    global.setTimeout( function() {
      $('.docs-top').affix();
    }, 100);
  });

  $("select[name=search]").on("change", function(){
    global.location = $( this ).val();
  });

}( this ));

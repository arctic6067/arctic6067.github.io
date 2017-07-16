$(document).ready(function() {

    // Если в проекте используются встроенные js-плагины от Foundation, разкомментировать
    // $(document).foundation();

    $('#vanillajs').attr('checked', false);

    $(".dial").each(function () {
      var $t = $(this)
      var $arrow = $t.siblings('.meter-arrow');
      var knob = $t.knob({
                   width: 253,
                   height: 127,
                   min: 0,
                   max: 1000,
                   angleOffset: -90,
                   angleArc: 180,
                   fgColor: 'transparent',
                   bgColor: 'transparent',
                   inputColor: 'inherit',
                   change : function (v) {
                      $arrow.css({transform: 'rotateZ('+ $t.val()/5.5 + 'deg)'});
                    }
                 });

      $.when(knob)
       .then(function () {
         $(".counter").append($('.dial'));
         $t.css({
           fontSize: 50,
           fontWeight: 900,
           textAlign: 'inherit',

           position: 'static',

           height: 45,
           width: '100%',
           margin: 0,
           
           boxShadow: 'none'
         });
         $t.change(function () {
           $arrow.css({transform: 'rotateZ('+ $t.val()/5.5 + 'deg)'});
         }).change();
       })
    });

});

        $(function(){

        $('.headerimg img').hide();
        $('.headerimg .roomw').show();

           $('.dotlist .dotb').hover(function(){
             $('.headerimg img').hide();
             $('.headerimg .roomb').show();
           });

            $('.dotlist .dotb').mouseout(function(){
            $('.headerimg .roomb').hide();
            $('.headerimg .roomw').show();
           });
            });

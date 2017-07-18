$(function(){//呼出键盘，隐藏下方导航
    var w_h=$(window).height();
    $(window).on("resize",function(){
        var t_h=$(this).height();
        if(w_h-t_h>50){
            $(".footer").hide()
        }else{
            $(".footer").show();
        }
    });
});
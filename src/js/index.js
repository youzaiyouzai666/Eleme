/**
 * Created by jiayao3 on 2015/8/14.
 */
$.fn.smartFloat = function() {
    var position = function(element) {
        var top = element.position().top; //当前元素对象element距离浏览器上边缘的距离
        var pos = element.css("position"); //当前元素距离页面document顶部的距离
        $(window).scroll(function() { //侦听滚动时
            var scrolls = $(this).scrollTop();
            console.log(scrolls > top);
            if (scrolls > top) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度
                if (window.XMLHttpRequest) { //如果不是ie6
                    $(this).find('.search').removeClass('none');
                    element.css({ //设置css
                        position: "fixed", //固定定位,即不再跟随滚动
//                        background:'#ccc',
                        top: 0 //距离页面顶部为0
                    }).addClass("shadow"); //加上阴影样式.shadow

                } else { //如果是ie6
                    element.css({
                        top: scrolls  //与页面顶部距离
                    });
                }
            }else {
                element.css({ //如果当前元素element未滚动到浏览器上边缘，则使用默认样式
                    position: pos,
                    top: top
                }).removeClass("shadow");//移除阴影样式.shadow
                $(this).find('.search').addClass('none');
            }
        });
    };
    return $(this).each(function() {
        position($(this));
    });
};

function position(ele){
    var top = $('.article-place').position().top;
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll>top){
            $('.article-place').css({
                position:'fixed',
                top:0
            })
        }
    });
}
$(function(){

    $(function(){
        $("#banner").slidesjs({
            width: 940,
            height: 528
        });
    });
    $('#js-top').smartFloat();
//    var top = $('#js-top').position().top;
//    var pos = element.css("position"); //当前元素距离页面document顶部的距离
//    $(window).scroll(function(){
//        var scroll = $(this).scrollTop();
//        if(scroll>top){
//            $('#js-top').css({
//                position:'fixed',
//                top:0,
//                background:'#ccc'
//            });
//        }else{
//            $('#js-top').css({
//                position: pos,
//                top: top
//            });
//        }
//    });

});
window.onload = function(){

}
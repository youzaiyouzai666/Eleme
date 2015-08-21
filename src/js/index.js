/**
 * Created by jiayao3 on 2015/8/14.
 */
$.fn.smartFloat = function() {
    var position = function(element) {
        var top = element.position().top; //当前元素对象element距离浏览器上边缘的距离
        var pos = element.css("position"); //当前元素距离页面document顶部的距离
        $(window).scroll(function() { //侦听滚动时
            console.log(element.scrollTop());
            var scrolls = $(this).scrollTop();
            console.log(scrolls > top);
            if (scrolls > top) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度
                if (window.XMLHttpRequest) { //如果不是ie6
//                    alert(element.find('.search').html());
                    element.find('.search').removeClass('none');
                    element.find('.article-place-right').removeClass('right').addClass('left');
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
                element.find('.search').addClass('none');
                element.find('.article-place-right').removeClass('left').addClass('right');
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
//function setTime(time){
//    var imgs = [];
//    var nubers =[];
//    var i = 0;
//    var length = $('#js_banner').find('img').size();
//    var nubersHtml = "";
//    for(i=0;i<length;i++){
//        nubersHtml+='<li data-index="'+i+'" class="page-index js-page-index">'+(i+1)+'</li>';
//        imgs.push( $('#js_banner').find('img').eq(i));
//    };
//    $('.js-img-indexs').html(nubersHtml);
//    $('.js-img-indexs').find('.js-page-index').eq(0).addClass('active');
//    var index = 0 ;
//    setInterval(function(){
//        if(index<(length-1)){
////            imgs[index].addClass("none");
//            imgs[index].slideUp('1000');
////            imgs[index+1].removeClass("none");
//            imgs[index+1].slideDown('1000');
//            index++;
//            $(".js-img-indexs").find('.active').removeClass('active');
//            $('.js-img-indexs').find('.js-page-index').eq(index).addClass('active');
//        }else{
////            imgs[length-1].addClass("none");
//            imgs[length-1].slideUp('1000');
////            imgs[0].removeClass("none");
//            imgs[0].slideDown('1000');
//            index = 0;
//            $(".js-img-indexs").find('.active').removeClass('active');
//            $('.js-img-indexs').find('.js-page-index').eq(0).addClass('active');
//        }
//
//    },time);
//    $('.js-img-indexs').on('click','.js-page-index',function(){
//        index = parseInt($(this).attr('data-index'));
//        $('#js_banner').find('img').addClass('none');
//        imgs[index].removeClass("none");
//        $(".js-img-indexs").find('.active').removeClass('active');
//        $('.js-img-indexs').find('.js-page-index').eq(index).addClass('active');
////        if(index<(length-1)){
//    });
//}
$(function(){
    $('#js-top').smartFloat();
});
window.onload = function(){
//    setTime(3000);
    scrollBar(1000);
};
function scrollBar(time){
    var imgs = [];
    var height = $('.banner-imgs').find('img').eq(0).height();
    var length = $('#js_banner').find('img').size();
    var index = 1;
    var nubersHtml = '';
    for(i=0;i<length;i++){
        nubersHtml+='<li data-index="'+i+'" class="page-index js-page-index">'+(i+1)+'</li>';
        imgs.push( $('#js_banner').find('img').eq(i));
    };
    $('.js-img-indexs').html(nubersHtml);
    $('.js-img-indexs').find('.js-page-index').eq(0).addClass('active');
    $('.js-img-indexs').on('click','.js-page-index',function(){
        index = parseInt($(this).attr('data-index'));
//        $('#js_banner').find('img').addClass('none');
        $('.banner-imgs').animate({top:height*index+'px'});
        $(".js-img-indexs").find('.active').removeClass('active');
        $('.js-img-indexs').find('.js-page-index').eq(index-1).addClass('active');
//        if(index<(length-1)){
    });
  setInterval(function(){
      if(index<length){
          top_h=-(height*index);
          index ++;
      }else{
          top_h=0;
          index =1;
      }
      $('.banner-imgs').animate({top:top_h+'px'});
      $(".js-img-indexs").find('.active').removeClass('active');
      $('.js-img-indexs').find('.js-page-index').eq(index-1).addClass('active');

  },time);
}

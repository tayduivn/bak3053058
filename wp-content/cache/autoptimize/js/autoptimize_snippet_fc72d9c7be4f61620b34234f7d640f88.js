(function($){$.fn.bighover=function(options){var opts=$.extend({},$.fn.bighover.defaults,options);return this.each(function(){var o=$.meta?$.extend({},opts,$(this).data('bighover')):opts;$(this).unbind('mouseenter mousemove mouseleave');$(this).hover(function(){if(typeof o.originalHeight==='undefined'||o.originalWidth==='undefined'){o.originalHeight=o.height;o.originalWidth=o.width;}
$("body").after($('<img />').attr('src',$(this).attr('src')).attr('id','bighoverImage'));var width=o.width;var height=o.height;if(width=='auto'&&height=='auto'){}else{if(width!='auto'){width=width+"px";}
if(height!='auto'){height=height+"px";}}
$('#bighoverImage').css({width:width,height:height,position:'fixed','z-index':99});},function(){$('#bighoverImage').remove();});$(this).mousemove(function(e){console.log(e.pageY-$(window).scrollTop());if(o.originalHeight=='auto'){o.originalHeight=$('#bighoverImage').height();}
if(o.originalWidth=='auto'){o.originalWidth=$('#bighoverImage').width();}
var originalHeight=o.originalHeight;var originalWidth=o.originalWidth;var imageHeight=$('#bighoverImage').height();var imageWidth=$('#bighoverImage').width();var windowHeight=$(window).height();var windowWidth=$(window).width();if(o.position=='right'){var bestX=e.pageX+15;var bestY=e.pageY-(imageHeight/2)-$(window).scrollTop();$('#bighoverImage').css({left:bestX+'px',top:bestY+'px',right:'auto',bottom:'auto'});}else if(o.position=='top-right'){var bestX=e.pageX+15;var bestY=windowHeight-e.pageY+15+$(window).scrollTop();$('#bighoverImage').css({left:bestX+'px',top:'auto',right:'auto',bottom:bestY+'px'});}else if(o.position=='top'){var bestX=e.pageX-(imageWidth/2);var bestY=windowHeight-e.pageY+15+$(window).scrollTop();$('#bighoverImage').css({left:bestX+'px',top:'auto',right:'auto',bottom:bestY+'px'});}else if(o.position=='top-left'){var bestX=windowWidth-e.pageX+15;var bestY=windowHeight-e.pageY+15+$(window).scrollTop();$('#bighoverImage').css({left:'auto',top:'auto',right:bestX+'px',bottom:bestY+'px'});}else if(o.position=='left'){var bestX=windowWidth-e.pageX+15;var bestY=e.pageY-(imageHeight/2)-$(window).scrollTop();$('#bighoverImage').css({left:'auto',top:bestY+'px',right:bestX+'px',bottom:'auto'});}else if(o.position=='bottom-left'){var bestX=windowWidth-e.pageX+15;var bestY=e.pageY+15-$(window).scrollTop();$('#bighoverImage').css({left:'auto',top:bestY+'px',right:bestX+'px',bottom:'auto'});}else if(o.position=='bottom'){var bestX=e.pageX-(imageWidth/2);var bestY=e.pageY+15-$(window).scrollTop();$('#bighoverImage').css({left:bestX+'px',top:bestY+'px',right:'auto',bottom:'auto'});}else{var bestX=e.pageX+15;var bestY=e.pageY+15-$(window).scrollTop();$('#bighoverImage').css({left:bestX+'px',top:bestY+'px',right:'auto',bottom:'auto'});}});});};$.fn.bighover.defaults={width:'auto',height:'auto',position:'bottom-right',resizeAuto:true};})(jQuery);
!function(a){"use strict";function b(){var a=0;return"number"==typeof window.innerHeight?a=window.innerHeight:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(a=document.body.clientHeight),a}function c(){if(document.getElementById){var a=b();if(a>0){var c=document.getElementById("hero-content"),d=c.offsetHeight;a-d>0?(c.style.position="relative",c.style.top=a/2-d/2+"px"):c.style.position="static"}}}var d=window.OP=window.OP||{};d.main=function(){var b="s-checked",d="s-closed",e="checkbox_",f="close_",g=a(".m-items li"),h=a(".m-hero"),i=function(){c();var i=a(window).height();i>480&&h.height(i),g.each(function(c,g){var h="item-"+c,i=a.cookie(e+h),j=a.cookie(f+h);g.id=h;var k=a('<label class="checkbox-wrapper"><input type="checkbox"/></label>'),l=a("<button/>",{text:"X","class":"b-close"});a(this).prepend(k).prepend(l),i&&a(this).addClass(b).find('input[type="checkbox"]').attr("checked","checked"),j&&a(this).addClass(d),a(this).find(".detail").length>0&&a(this).addClass("l-hasdetail").prepend('<span class="i-arrow">')}),g.find('input[type="checkbox"]').on("click",function(){var c=a(this).parents("li"),d=c.attr("id"),f=e+d;a.cookie(f)?(c.removeClass(b),a.removeCookie(f)):(c.addClass(b),a.cookie(f,d,{expires:365}))}),g.find(".b-close").on("click",function(){var b=a(this).parents("li"),c=b.attr("id"),e=f+c;a.cookie(e)?(b.removeClass(d),a.removeCookie(e)):(b.addClass(d),a.cookie(e,c,{expires:365}))}),g.find(".title").on("click",function(b){b.preventDefault(),a(this).next(".detail").collapse("toggle"),a(this).parents("li").toggleClass("s-open")})};return{init:i}}(),window.onload=function(){}}(jQuery,window),$(document).ready(OP.main.init);
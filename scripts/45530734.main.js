!function(a){"use strict";var b=window.OP=window.OP||{};b.main=function(){var b="s-checked",c="s-closed",d="checkbox_",e="close_",f=a(".m-items li"),g=function(){f.each(function(f,g){var h="item-"+f,i=a.cookie(d+h),j=a.cookie(e+h);g.id=h;var k=a("<input/>",{type:"checkbox"}),l=a("<button/>",{text:"Ne s'applique pas","class":"b-close"});a(this).append(l).append(k),i&&a(this).addClass(b).find('input[type="checkbox"]').attr("checked","checked"),j&&a(this).addClass(c)}),f.find('input[type="checkbox"]').on("click",function(){var c=a(this).parents("li"),e=c.attr("id"),f=d+e;a.cookie(f)?(c.removeClass(b),a.removeCookie(f)):(c.addClass(b),a.cookie(f,e,{expires:365}))}),f.find(".b-close").on("click",function(){var b=a(this).parents("li"),d=b.attr("id"),f=e+d;a.cookie(f)?(b.removeClass(c),a.removeCookie(f)):(b.addClass(c),a.cookie(f,d,{expires:365}))})};return{init:g}}()}(jQuery,window),$(document).ready(OP.main.init);
function mainMenuElemRemove(){$(".sub-toggle-ext").each(function(){$(this).parent("li").removeClass("open"),$(this).parent("li").find("> ul").hide("fast")}),$(".sub-toggle").each(function(){$(this).parent("li").removeClass("open"),$(this).parent("li").find("> ul").hide("fast")})}if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}function i(i){i&&3===i.which||(t(o).remove(),t(s).each(function(){var n=t(this),o=e(n),s={relatedTarget:this};o.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(o[0],i.target)||(o.trigger(i=t.Event("hide.bs.dropdown",s)),i.isDefaultPrevented()||(n.attr("aria-expanded","false"),o.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function n(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new r(this)),"string"==typeof e&&n[e].call(i)})}var o=".dropdown-backdrop",s='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle)};r.VERSION="3.3.6",r.prototype.toggle=function(n){var o=t(this);if(!o.is(".disabled, :disabled")){var s=e(o),r=s.hasClass("open");if(i(),!r){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var l={relatedTarget:this};if(s.trigger(n=t.Event("show.bs.dropdown",l)),n.isDefaultPrevented())return;o.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",l))}return!1}},r.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var n=t(this);if(i.preventDefault(),i.stopPropagation(),!n.is(".disabled, :disabled")){var o=e(n),r=o.hasClass("open");if(!r&&27!=i.which||r&&27==i.which)return 27==i.which&&o.find(s).trigger("focus"),n.trigger("click");var l=" li:not(.disabled):visible a",a=o.find(".dropdown-menu"+l);if(a.length){var h=a.index(i.target);38==i.which&&h>0&&h--,40==i.which&&h<a.length-1&&h++,~h||(h=0),a.eq(h).trigger("focus")}}}};var l=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=l,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,r.prototype.toggle).on("keydown.bs.dropdown.data-api",s,r.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",r.prototype.keydown)}(jQuery),!function(t){return"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window,document)}):"object"==typeof exports?module.exports=t(require("jquery"),window,document):t(jQuery,window,document)}(function(t,e,i){"use strict";var n,o,s,r,l,a,h,c,p,d,u,g,f,v,m,w,S,y,b,T,C,$,x,E,H,A,O,k,D,M,N;x={paneClass:"nano-pane",sliderClass:"nano-slider",contentClass:"nano-content",enabledClass:"has-scrollbar",flashedClass:"flashed",activeClass:"active",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},y="scrollbar",S="scroll",p="mousedown",d="mouseenter",u="mousemove",f="mousewheel",g="mouseup",w="resize",l="drag",a="enter",T="up",m="panedown",s="DOMMouseScroll",r="down",C="wheel",h="keydown",c="keyup",b="touchmove",n="Microsoft Internet Explorer"===e.navigator.appName&&/msie 7./i.test(e.navigator.appVersion)&&e.ActiveXObject,o=null,O=e.requestAnimationFrame,$=e.cancelAnimationFrame,D=i.createElement("div").style,N=function(){var t,e,i,n,o,s;for(n=["t","webkitT","MozT","msT","OT"],t=o=0,s=n.length;s>o;t=++o)if(i=n[t],e=n[t]+"ransform",e in D)return n[t].substr(0,n[t].length-1);return!1}(),M=function(t){return N===!1?!1:""===N?t:N+t.charAt(0).toUpperCase()+t.substr(1)},k=M("transform"),H=k!==!1,E=function(){var t,e,n;return t=i.createElement("div"),e=t.style,e.position="absolute",e.width="100px",e.height="100px",e.overflow=S,e.top="-9999px",i.body.appendChild(t),n=t.offsetWidth-t.clientWidth,i.body.removeChild(t),n},A=function(){var t,i,n;return i=e.navigator.userAgent,(t=/(?=.+Mac OS X)(?=.+Firefox)/.test(i))?(n=/Firefox\/\d{2}\./.exec(i),n&&(n=n[0].replace(/\D+/g,"")),t&&+n>23):!1},v=function(){function h(n,s){this.el=n,this.options=s,o||(o=E()),this.$el=t(this.el),this.doc=t(this.options.documentContext||i),this.win=t(this.options.windowContext||e),this.body=this.doc.find("body"),this.$content=this.$el.children("."+this.options.contentClass),this.$content.attr("tabindex",this.options.tabIndex||0),this.content=this.$content[0],this.previousPosition=0,this.options.iOSNativeScrolling&&null!=this.el.style.WebkitOverflowScrolling?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return h.prototype.preventScrolling=function(t,e){if(this.isActive)if(t.type===s)(e===r&&t.originalEvent.detail>0||e===T&&t.originalEvent.detail<0)&&t.preventDefault();else if(t.type===f){if(!t.originalEvent||!t.originalEvent.wheelDelta)return;(e===r&&t.originalEvent.wheelDelta<0||e===T&&t.originalEvent.wheelDelta>0)&&t.preventDefault()}},h.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},h.prototype.updateScrollValues=function(){var t,e;t=this.content,this.maxScrollTop=t.scrollHeight-t.clientHeight,this.prevScrollTop=this.contentScrollTop||0,this.contentScrollTop=t.scrollTop,e=this.contentScrollTop>this.previousPosition?"down":this.contentScrollTop<this.previousPosition?"up":"same",this.previousPosition=this.contentScrollTop,"same"!==e&&this.$el.trigger("update",{position:this.contentScrollTop,maximum:this.maxScrollTop,direction:e}),this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=0===this.maxScrollTop?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},h.prototype.setOnScrollStyles=function(){var t;H?(t={},t[k]="translate(0, "+this.sliderTop+"px)"):t={top:this.sliderTop},O?($&&this.scrollRAF&&$(this.scrollRAF),this.scrollRAF=O(function(e){return function(){return e.scrollRAF=null,e.slider.css(t)}}(this))):this.slider.css(t)},h.prototype.createEvents=function(){this.events={down:function(t){return function(e){return t.isBeingDragged=!0,t.offsetY=e.pageY-t.slider.offset().top,t.slider.is(e.target)||(t.offsetY=0),t.pane.addClass(t.options.activeClass),t.doc.bind(u,t.events[l]).bind(g,t.events[T]),t.body.bind(d,t.events[a]),!1}}(this),drag:function(t){return function(e){return t.sliderY=e.pageY-t.$el.offset().top-t.paneTop-(t.offsetY||.5*t.sliderHeight),t.scroll(),t.contentScrollTop>=t.maxScrollTop&&t.prevScrollTop!==t.maxScrollTop?t.$el.trigger("scrollend"):0===t.contentScrollTop&&0!==t.prevScrollTop&&t.$el.trigger("scrolltop"),!1}}(this),up:function(t){return function(e){return t.isBeingDragged=!1,t.pane.removeClass(t.options.activeClass),t.doc.unbind(u,t.events[l]).unbind(g,t.events[T]),t.body.unbind(d,t.events[a]),!1}}(this),resize:function(t){return function(e){t.reset()}}(this),panedown:function(t){return function(e){return t.sliderY=(e.offsetY||e.originalEvent.layerY)-.5*t.sliderHeight,t.scroll(),t.events.down(e),!1}}(this),scroll:function(t){return function(e){t.updateScrollValues(),t.isBeingDragged||(t.iOSNativeScrolling||(t.sliderY=t.sliderTop,t.setOnScrollStyles()),null!=e&&(t.contentScrollTop>=t.maxScrollTop?(t.options.preventPageScrolling&&t.preventScrolling(e,r),t.prevScrollTop!==t.maxScrollTop&&t.$el.trigger("scrollend")):0===t.contentScrollTop&&(t.options.preventPageScrolling&&t.preventScrolling(e,T),0!==t.prevScrollTop&&t.$el.trigger("scrolltop"))))}}(this),wheel:function(t){return function(e){var i;return null!=e?(i=e.delta||e.wheelDelta||e.originalEvent&&e.originalEvent.wheelDelta||-e.detail||e.originalEvent&&-e.originalEvent.detail,i&&(t.sliderY+=-i/3),t.scroll(),!1):void 0}}(this),enter:function(t){return function(e){var i;return t.isBeingDragged&&1!==(e.buttons||e.which)?(i=t.events)[T].apply(i,arguments):void 0}}(this)}},h.prototype.addEvents=function(){var t;this.removeEvents(),t=this.events,this.options.disableResize||this.win.bind(w,t[w]),this.iOSNativeScrolling||(this.slider.bind(p,t[r]),this.pane.bind(p,t[m]).bind(""+f+" "+s,t[C])),this.$content.bind(""+S+" "+f+" "+s+" "+b,t[S])},h.prototype.removeEvents=function(){var t;t=this.events,this.win.unbind(w,t[w]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+S+" "+f+" "+s+" "+b,t[S])},h.prototype.generate=function(){var t,i,n,s,r,l,a;return s=this.options,l=s.paneClass,a=s.sliderClass,t=s.contentClass,(r=this.$el.children("."+l)).length||r.children("."+a).length||this.$el.append('<div class="'+l+'"><div class="'+a+'" /></div>'),this.pane=this.$el.children("."+l),this.slider=this.pane.find("."+a),0===o&&A()?(n=e.getComputedStyle(this.content,null).getPropertyValue("padding-right").replace(/[^0-9.]+/g,""),i={right:-14,paddingRight:+n+14}):o&&(i={right:-o},this.$el.addClass(s.enabledClass)),null!=i&&this.$content.css(i),this},h.prototype.restore=function(){this.stopped=!1,this.iOSNativeScrolling||this.pane.show(),this.addEvents()},h.prototype.reset=function(){var t,e,i,s,r,l,a,h,c,p,d,u;return this.iOSNativeScrolling?void(this.contentHeight=this.content.scrollHeight):(this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),t=this.content,s=t.style,r=s.overflowY,n&&this.$content.css({height:this.$content.height()}),e=t.scrollHeight+o,p=parseInt(this.$el.css("max-height"),10),p>0&&(this.$el.height(""),this.$el.height(t.scrollHeight>p?p:t.scrollHeight)),a=this.pane.outerHeight(!1),c=parseInt(this.pane.css("top"),10),l=parseInt(this.pane.css("bottom"),10),h=a+c+l,u=Math.round(h/e*a),u<this.options.sliderMinHeight?u=this.options.sliderMinHeight:null!=this.options.sliderMaxHeight&&u>this.options.sliderMaxHeight&&(u=this.options.sliderMaxHeight),r===S&&s.overflowX!==S&&(u+=o),this.maxSliderTop=h-u,this.contentHeight=e,this.paneHeight=a,this.paneOuterHeight=h,this.sliderHeight=u,this.paneTop=c,this.slider.height(u),this.events.scroll(),this.pane.show(),this.isActive=!0,t.scrollHeight===t.clientHeight||this.pane.outerHeight(!0)>=t.scrollHeight&&r!==S?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===t.scrollHeight&&r===S?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),i=this.$content.css("position"),("static"===i||"relative"===i)&&(d=parseInt(this.$content.css("right"),10),d&&this.$content.css({right:"",marginRight:d})),this)},h.prototype.scroll=function(){return this.isActive?(this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop(this.maxScrollTop*this.sliderY/this.maxSliderTop),this.iOSNativeScrolling||(this.updateScrollValues(),this.setOnScrollStyles()),this):void 0},h.prototype.scrollBottom=function(t){return this.isActive?(this.$content.scrollTop(this.contentHeight-this.$content.height()-t).trigger(f),this.stop().restore(),this):void 0},h.prototype.scrollTop=function(t){return this.isActive?(this.$content.scrollTop(+t).trigger(f),this.stop().restore(),this):void 0},h.prototype.scrollTo=function(t){return this.isActive?(this.scrollTop(this.$el.find(t).get(0).offsetTop),this):void 0},h.prototype.stop=function(){return $&&this.scrollRAF&&($(this.scrollRAF),this.scrollRAF=null),this.stopped=!0,this.removeEvents(),this.iOSNativeScrolling||this.pane.hide(),this},h.prototype.destroy=function(){return this.stopped||this.stop(),!this.iOSNativeScrolling&&this.pane.length&&this.pane.remove(),n&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass(this.options.enabledClass)&&(this.$el.removeClass(this.options.enabledClass),this.$content.css({right:""})),this},h.prototype.flash=function(){return!this.iOSNativeScrolling&&this.isActive?(this.reset(),this.pane.addClass(this.options.flashedClass),setTimeout(function(t){return function(){t.pane.removeClass(t.options.flashedClass)}}(this),this.options.flashDelay),this):void 0},h}(),t.fn.nanoScroller=function(e){return this.each(function(){var i,n;if((n=this.nanoscroller)||(i=t.extend({},x,e),this.nanoscroller=n=new v(this,i)),e&&"object"==typeof e){if(t.extend(n.options,e),null!=e.scrollBottom)return n.scrollBottom(e.scrollBottom);if(null!=e.scrollTop)return n.scrollTop(e.scrollTop);if(e.scrollTo)return n.scrollTo(e.scrollTo);if("bottom"===e.scroll)return n.scrollBottom(0);if("top"===e.scroll)return n.scrollTop(0);if(e.scroll&&e.scroll instanceof t)return n.scrollTo(e.scroll);if(e.stop)return n.stop();if(e.destroy)return n.destroy();if(e.flash)return n.flash()}return n.reset()})},t.fn.nanoScroller.Constructor=v}),$(".main-menu__content").nanoScroller(),$(".sub-toggle-ext").click(function(){setTimeout(function(){$(".main-menu__content").nanoScroller()},200)}),function(t){t(".yay-toggle").click(function(){t("body").toggleClass("menu-hide"),mainMenuElemRemove()}),t(".app-switcher").on("show.bs.dropdown",function(){t(".main-menu").addClass("main-menu__toggled")}),t(".app-switcher").on("hide.bs.dropdown",function(){t(".main-menu").removeClass("main-menu__toggled")}),t(document).on("click",".sub-toggle-ext, li .yay-collapse-icon",function(e){e.preventDefault();var i=t(this);i.parent("li").hasClass("open")?(i.parent("li").removeClass("open"),i.parent("li").find(".open").removeClass("open"),i.parent("li").find("ul").hide("fast")):(i.parent("li").addClass("open"),i.parent("li").find("> ul").show("fast"))})}(jQuery),$(window).on("load resize",function(){$(window).width()<=1024?($("body").addClass("menu-hide"),mainMenuElemRemove()):$("body").removeClass("menu-hide")});
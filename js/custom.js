$(document).on("ready",function(){function b(){var b=0,c=window.pageYOffset;b<c?a.add():c==b&&a.remove()}var a={flagAdd:!0,elements:[],init:function(a){this.elements=a},add:function(){if(this.flagAdd){for(var a=0;a<this.elements.length;a++)document.getElementById(this.elements[a]).className+=" fixed-theme";this.flagAdd=!1}},remove:function(){for(var a=0;a<this.elements.length;a++)document.getElementById(this.elements[a]).className=document.getElementById(this.elements[a]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g,"");this.flagAdd=!0}};a.init(["header","header-container","brand"]),window.onscroll=function(a){b()},b()}),$(".lightbox-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-fade",fixedContentPos:!0,closeBtnInside:!0,gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}}),$(function(){var a="";$(".fil-cat").on("click",function(){a=$(this).attr("data-rel"),$(".gallery").fadeTo(500,.5),$(".gallery li").not("."+a).fadeOut().removeClass("scale-anm"),setTimeout(function(){$("."+a).fadeIn().addClass("scale-anm"),$(".gallery").fadeTo(200,1)},0)})}),$(".portfolio-filter button").on("click",function(){$(".portfolio-filter button").removeClass("selected"),$(this).addClass("selected")}),$('a[href*="#"]:not([href="#"])').on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html, body").animate({scrollTop:a.offset().top},1e3),!1}}),jQuery(document).on("ready",function(a){function n(a,b){var c=document.getElementById("cd-zoom-in"),d=document.getElementById("cd-zoom-out");a.appendChild(c),a.appendChild(d),google.maps.event.addDomListener(c,"click",function(){b.setZoom(b.getZoom()+1)}),google.maps.event.addDomListener(d,"click",function(){b.setZoom(b.getZoom()-1)})}var b=-33.4437071,c=-70.6038333,d=15,f=(navigator.userAgent.toLowerCase().indexOf("trident"),"images/map-marker-2.png"),j=[{stylers:[{visibility:"simplified"}]},{stylers:[{color:"#131314"}]},{featureType:"water",stylers:[{color:"#131313"},{lightness:7}]},{elementType:"labels.text.fill",stylers:[{visibility:"on"},{lightness:25}]}],k={center:new google.maps.LatLng(b,c),zoom:d,panControl:!1,zoomControl:!1,mapTypeControl:!1,streetViewControl:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:j},l=new google.maps.Map(document.getElementById("google-container"),k),o=(new google.maps.Marker({position:new google.maps.LatLng(b,c),map:l,visible:!0,icon:f}),document.createElement("div"));new n(o,l);l.controls[google.maps.ControlPosition.LEFT_TOP].push(o)}),$(function(){$(".nav a").on("click",function(){"none"!=$(".navbar-toggle").css("display")&&$(".navbar-toggle").trigger("click")})}),$(document).on("ready",function(){$(".navbar-toggle").on("click",function(){$(this).toggleClass("active")})}),$("#testCarousel").bcSwipe({threshold:50}),jQuery(window).on("load",function(){jQuery(".loader-container").delay(1500).fadeOut(600),jQuery("#intro-loader").delay(2e3).fadeOut(600)}),$(document).on("ready",function(){$("#testCarousel").carousel({interval:3e3}).carousel("pause")});
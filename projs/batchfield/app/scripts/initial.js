







$(document).ready(function(){
          var batchfield 



          var batchfield = {

              init:function (){
                  this.cacheDom();
                  this.render();
              },
              cacheDom: function (){
                /*-------landing--------*/
                  this.$heroSectionHeight = $ ('.slider.fullscreen').height();
                  this.$heroSectionWidth = $ ('.slider.fullscreen').width();
                  this.$eyeCatcher = $('.section.eye_catcher_top');
                  this.$materialboxed = $('.materialboxed');



                  this.$topNav = $('#otherpages_top_nav');
                  this.$whiteNavForOtherPages = $('#otherpages_nav_white');
                /*-------Price_sub_pages--------*/
                  this.$lastBulletLinks = $('#last_bullet_links');
                  // this.$visitOthersLinks = $('#price_visit_others_links');
                  this.$pakagePrice =  $('#paketpreis');
                  this.$priceTable =  $('#price-table');

              },
              render:function (){
                  this.$topNav.load("/include/top-nav.html");
                  this.$whiteNavForOtherPages.load("/include/bottom-nav.html");
                /*-------landing--------*/
                  this.initSliders();
                /*-------Price_sub_pages--------*/
                  this.$lastBulletLinks.load("/include/price_detail_page_bullet_links.html");
                  // this.$visitOthersLinks.load("/include/price_detail_page_visit_others_links.html");
                  this.$pakagePrice.load("/include/paketpreis.html")
                  this.$priceTable.load("/include/price-table.html");

                  this.setHeroFullScreen();
                  this.activeNavLink();
                  this.fireUpBlueimpGallery();
              },
              setHeroFullScreen:function (){
                   // for "landing".html,set the second section's margin-top as same height as fullScreen slider's height, 
                   //in order to make a seamless for the second part
                  this.$eyeCatcher.css("margin-top", this.$heroSectionHeight);
              },
              activeNavLink:function (){
                  // get current URL path and assign 'active' class
                  var pathname = window.location.pathname;
                  // if the location is NOT at index.html at the root level, apply thge active class to the navbar
                  if(pathname != "/"){
                    $('nav ul > li > a[href^="'+pathname+'"]').parent().addClass('active');
                  } else{
                    pathname ="";
                  };
              },
              initSliders:function (){
                  this.$materialboxed.materialbox();
              },
              fireUpBlueimpGallery: function (){
                    $('#links').click(function(event){
                        event = event || window.event;
                        var target = event.target || event.srcElement,
                            link = target.src ? target.parentNode : target,
                            options = {index: link, event: event},
                            links = this.getElementsByTagName('a');
                        blueimp.Gallery(links, options);
                    });
              }

          };

          batchfield.init();









           // keep the margin-top space resizable whenever the windows size changed
           // add the event listener , and call the event handling "resize" funciton and pass "myFunction" in
          window.addEventListener("resize", myFunction);
          // for "landing page".html,set the second section's margin-top as same height as fullScreen slider's height, in order to make a seamless for the second part
          function myFunction(){
              var screenHeight = $ ('.slider.fullscreen').height();
              var screenWidth = $ ('.slider.fullscreen').width();
              $('.section.eye_catcher_top').css("margin-top", screenHeight);

              // for "landing page".html,set the second section's margin-top as same height as fullScreen slider's height, in order to make a seamless for the second part
              var otherpagesScreenHeight = $ ('.landing-full-screen').height();
              

              $('.section.price.big_container.first_section').css("margin-top", otherpagesScreenHeight);
              $('#first_section').css("margin-top", otherpagesScreenHeight);


              // for kontact.html,set the second section's margin-top as same height as fullScreen slider's height, in order to make a seamless for the second part
              var contactPageScreenHeight = $('.landing-full-screen.contact').height();
              $('div#map').css("margin-top", contactPageScreenHeight);


               // for "otherpages".html,set the second section's margin-top as same height as fullScreen slider's height, in order to make a seamless for the second part
              //  var screenHeight = $ ('.landing-full-screen').height();
              //  $('.section.second-section').css("margin-top", screenHeight);
          };



     // when screenSize is > 992, make the navbar full screen widht
        


        var controlScreenWithJS = function(){
            var $windowScreenWidth = $(window).width();
            
       

            if($windowScreenWidth > 600 ){
             
                
              




            }
            // windows screen > 992
            else if ($windowScreenWidth > 992) {
             
                //start of control the navbar to full screen width 
               // $('.nav-wrapper').removeClass("container").addClass("container-fluid side-padding");//
                //end of control the navbar to full screen width 


            } else{

                // if screen size is less then 992px, make the slider pause
                $('.slider').slider('pause');



                //control the navbar back into ".container width" on mobile version
                $('.nav-wrapper').removeClass("container-fluid side-padding").addClass("container");
              }
        }

    // call the function -- controlScreenWithJS
        controlScreenWithJS();



  });




  




  //Sticky Header
    $(window).scroll(function() {
         if ($(this).scrollTop() > 105){  
            $('nav').addClass("sticky");

            //for otherpages
            $('#otherpages_top_nav').addClass("sticky");
            $('#otherpages_top_nav').find('a').addClass("text-color");
            $('#otherpages_nav_white').addClass("sticky");
            $('#otherpages_nav_white').find('a').addClass("text-color");

            //$('nav').find('a').addClass("text-color");
            
            // for termin-button in the navbar
            $('a.termin-button').addClass('termin-button-margin');


          } else{
            $('nav').removeClass("sticky");
            //$('nav').find('a').removeClass("text-color");

            //for otherpages
            $('#otherpages_top_nav').removeClass("sticky");
            $('#otherpages_top_nav').find('a').removeClass("text-color");
            $('#otherpages_nav_white').removeClass("sticky");
            $('#otherpages_nav_white').find('a').removeClass("text-color");

                        // for termin-button in the navbar
            $('a.termin-button').removeClass('termin-button-margin');
          }

         
    });




    //run the code after the DOM has finished loading
    $(window).load(function(){


        var priceSection = {
          init:function () {
            this.cacheDom();
            this.render();
          },
          cacheDom: function () {
            this.$visitOthersLinks = $('#price_visit_others_links');
          },
          render:function () {
            this.$visitOthersLinks.load("/include/price_detail_page_visit_others_links.html");
          }
        }

        priceSection.init();
         


      //------------ start of index.html-------------


        // upload the headline of pricing secton on landing page
        $('.landing.section.price.big_container').find('h3').text('Shootings & Preise');

       //preloader
       // $(".section.preloader-big-wrapper").fadeOut("slow");
       //inject landingSlider
       var landingSlider = '<li id="slider_image_02"> <img src="" alt=""> <div class="caption right-align"> <h3>Familie</h3> <h5 class="light grey-text text-lighten-3">unser Frühjahrsangebot:<br>Familien Fotoshooting</h5> <a class="waves-effect waves-light btn light-blue" href="/fotoshootings_preise/fotostudio_familienfotograf_rosenheim.html">für nur 39€</a> </div></li><li id="slider_image_03"> <img src="" alt=""> <div class="caption center-align"> <h3>Best Friends</h3> <h5 class="light grey-text text-lighten-3">Beste Zeit unseres Lebens!</h5> <a class="waves-effect waves-light btn light-blue" href="/fotoshootings_preise/fotostudio_besfriendsfotograf_rosenheim.html">für nur 39€</a> </div></li><li id="slider_image_04"> <img src="" alt=""> <div class="caption left-align"> <h3>Baby & Kids</h3> <h5 class="light grey-text text-lighten-3">Dein Kind hat ganz viel Spaß bei uns.</h5> <a class="waves-effect waves-light btn light-blue" href="/fotoshootings_preise/fotostudio_kidsfotograf_rosenheim.html"> für nur 39€</a> </div></li>';
       // $(landingSlider).insertAfter($("#slider_image_01"));
    
        // inject the image into the card
        // $("#card-image-01").prepend('<img src="/images/photo-section-familie-thumbnail.jpg">');
        // $("#card-image-02").prepend('<img src="/images/batchfield_fotograf_rosenheim_paerchen-thumbnail.jpg">');
        // $("#card-image-03").prepend('<img src="/images/photo-section-bestfriends-thumbnail.jpg">');

        //inject landing fotowall
        $("#links").load("/include/fotowall.html");
        



     
       //inject the footer social icons
       $("#social_icons").load("/include/social_icons.html");
                       // start of initial the parallax effect

                (function($){
                  $(function(){

                    $('.button-collapse').sideNav();
                    $('.parallax').parallax();

                  }); // end of document ready
                })(jQuery); // end of jQuery name space

                // end of initial the parallax effect

       //------------ end  of index.html-------------
         //footer
         $('#otherpages_footer').load("/include/footer.html");



       //------------ Start of price_subpages ---------------
      //------------ End of price_subpages ---------------



      //Smooth Scrolling To Internal Links With jQuery
       $('a[href^="#"]').on('click',function (e) {
          e.preventDefault();

          var target = this.hash;
          var $target = $(target);

          $('html, body').stop().animate({
           'scrollTop': $target.offset().top()
          }, 900, 'swing');
       });











          //initial the fullScreen sliders
        $('.slider').slider({full_width: true});

    });




// call the owl.carousel

      $('.owl-carousel').owlCarousel({
          margin:0,
          loop:true,
          autoplay:true,
          autoplayTimeout:1500,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          autoWidth:true,
          items:4,
          nav:true,
          navText: [
                    '<i class="fa fa-chevron-left"></i>',
                    '<i class="fa fa-chevron-right"></i>'
                    ]
      });

// call the landing owl.carousel
      $('.landing-owl-carousel').owlCarousel({
          center: true,
          margin:0,
          loop:true,
          autoplay:true,
          autoplayTimeout:1500,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          items:1,
          nav:true,
          navText: [
                    '<i class="fa fa-chevron-left"></i>',
                    '<i class="fa fa-chevron-right"></i>'
                    ],
          responsive:{
              640:{
                  items:1
              },
              1300:{
                  items:1.8
              },
              1700:{
                  items:2
              }
          }
      });







// START of cookies
      

 (function(){
  
  //Change these values
  var msg = "Diese Website verwendet Cookies von Google, um ihre Dienste bereitzustellen, Anzeigen zu personalisieren und Zugriffe zu analysieren. Informationen darüber, wie du die Website verwendest, werden an Google weitergegeben. Durch die Nutzung dieser Website erklärst du dich damit einverstanden, dass sie Cookies verwendet.";
  var closeBtnMsg = "OK";
  var privacyBtnMsg = "WEITERE INFORMATIONEN";
  var privacyLink = "https://www.google.com/policies/technologies/cookies/";
  
  //check cookies 
  if(document.cookie){
   var cookieString = document.cookie;
   var cookieList = cookieString.split(";");
   // if cookie named OKCookie is found, return
   for(x = 0; x < cookieList.length; x++){
     if (cookieList[x].indexOf("OKCookie") != -1){return}; 
   }
  }
  
  var docRoot = document.body;
  var okC = document.createElement("div");
  okC.setAttribute("id", "okCookie");
  var okCp = document.createElement("p");
  var okcText = document.createTextNode(msg); 
  
  //close button
  var okCclose = document.createElement("a");
  var okcCloseText = document.createTextNode(closeBtnMsg);
  okCclose.setAttribute("href", "#");
  okCclose.setAttribute("id", "okClose");
  okCclose.appendChild(okcCloseText);
  okCclose.addEventListener("click", closeCookie, false);
 
  //privacy button
  var okCprivacy = document.createElement("a");
  var okcPrivacyText = document.createTextNode(privacyBtnMsg);
  okCprivacy.setAttribute("href", privacyLink);
  okCprivacy.setAttribute("id", "okCprivacy");
  okCprivacy.appendChild(okcPrivacyText);
  
  //add to DOM
  okCp.appendChild(okcText);
  okC.appendChild(okCp);
  okC.appendChild(okCclose);
  okC.appendChild(okCprivacy);
  docRoot.appendChild(okC);
  
  okC.classList.add("okcBeginAnimate");
  
  function closeCookie(){
    var cookieExpire = new Date();
    cookieExpire.setFullYear(cookieExpire.getFullYear() +365);
    document.cookie="OKCookie=1; expires=" + cookieExpire.toGMTString() + ";path=/";
    docRoot.removeChild(okC);
  }
  
})();

      
// END of cookies










$(document).ready(function(){


               //navbar
                var topNav = ' <div class="container"> <p> <a class="telephone_number" href="tel:+49-8031-8878777"><i class="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;08031 8878777</a> <a class="google_address" href="https://goo.gl/maps/tdS6tE9oXU32" target="_blank"><i class="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;Hammerweg 8 , 83022 Rosenheim</a> </p></div>';


                var bottomNav = ' <div class="nav-wrapper container"> <a id="logo-container" href="index.html" class="brand-logo"><img src="images/batchfield_logo.png" alt="BATCHFIELD"></a> <ul id="slide-out" class="side-nav"> <li class="logo"><a href="index.html" class="waves-effect waves-blue"><img src="images/batchfield_logo.png" alt="BATCHFIELD"></a></li><li><a href="/fotoshootings_preise.html" class="waves-effect waves-blue">Shootings & Preise</a></li><li><a href="/batchfield_team.html" class="waves-effect waves-blue">Team</a></li><li><a href="/fotograf_rosenheim_kontakt.html" class="waves-effect waves-blue">Kontakt</a></li><!-- <li><a href="termine_buchen.html" class="waves-effect waves-blue termin-button">Termine</a></li>--> <li><a href="images/gutschein.png" target="_blank" class="waves-effect waves-blue">Gutschein</a></li><!-- <li> <ul class="collapsible collapsible-accordion"> <li> <a class="collapsible-header">Drop Me!<i class="mdi-navigation-arrow-drop-down"></i></a> <div class="collapsible-body"> <ul> <li><a href="#!" class="waves-effect waves-blue">First</a></li><li><a href="#!" class="waves-effect waves-blue">Second</a></li><li><a href="#!" class="waves-effect waves-blue">Third</a></li><li><a href="#!" class="waves-effect waves-blue">Fourth</a></li><li><a href="#!" class="waves-effect waves-blue">More</a></li><li><a href="#!" class="waves-effect waves-blue">More</a></li><li><a href="#!" class="waves-effect waves-blue">More</a></li><li><a href="#!" class="waves-effect waves-blue">More</a></li><li><a href="#!" class="waves-effect waves-blue">More</a></li><li><a href="#!" class="waves-effect waves-blue">More</a></li><li><a href="#!" class="waves-effect waves-blue">More</a></li></ul> </div></li></ul> </li>--> </ul> <ul class="left hide-on-med-and-down"> <li><a href="/fotoshootings_preise.html" class="waves-effect waves-blue">Shootings & Preise</a></li><li><a href="/batchfield_team.html" class="waves-effect waves-blue">Team</a></li><li><a href="/fotograf_rosenheim_kontakt.html" class="waves-effect waves-blue">Kontakt</a></li><!--dropdown menu <li><a class="dropdown-button waves-effect waves-blue" href="#!" data-activates="dropdown1">PLANS & PRICING<i class="mdi-navigation-arrow-drop-down right"></i></a></li><ul id="dropdown1" class="dropdown-content"> <li><a href="#!" class="waves-effect waves-blue">First</a></li><li><a href="#!" class="waves-effect waves-blue">Second</a></li><li><a href="#!" class="waves-effect waves-blue">Third</a></li><li><a href="#!" class="waves-effect waves-blue">Fourth</a></li></ul>--> </ul> <ul class="right hide-on-med-and-down"><!-- <li><a href="termine_buchen.html" class="waves-effect waves-blue termin-button">Termine<span class="fa fa-calendar"></span></a></li>--> <li><a href="images/gutschein.png" target="_blank" class="waves-effect waves-blue">Gutschein<span class="fa fa-calendar"></span></a></li></ul> <a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i></a> </div>';

                $('#otherpages_top_nav').append(topNav);
                $('#otherpages_nav_white').append(bottomNav);



                
                //footer
                $('#otherpages_footer').load("include/footer.html");


  // start of Price_subpages
                 //the link below the first bullet point of all price-detail page
                $('#last_bullet_links').load("include/price_detail_page_bullet_links.html");




                 //the link at the button of all price-detail page
                $('#price_visit_others_links').load("include/price_detail_page_visit_others_links.html");


                $('#paketpreis').load("include/paketpreis.html")
                $('#price-table').load("include/price-table.html");

                 // End of Price_subpages




   // get current URL path and assign 'active' class
                var pathname = window.location.pathname;
                if(pathname != "/"){
                  $('nav ul > li > a[href^="'+pathname+'"]').parent().addClass('active');
                } else{
                  pathname ="";
                }
                



       // start of initial the parallax effect

             (function($){
              $(function(){
                $('.button-collapse').sideNav();
                $('.parallax').parallax();
                 }); // end of document ready
                })(jQuery); // end of jQuery name space

                // end of initial the parallax effect

          //initial the fullScreen sliders
        $('.slider').slider({full_width: true});


        // for "landing page".html,set the second section's margin-top as same height as fullScreen slider's height, in order to make a seamless for the second part
        //var screenHeight = $ ('.slider.fullscreen').height();
       // $('.container.photo-gallery').css("margin-top", screenHeight);


       // for "otherpages".html,set the second section's margin-top as same height as fullScreen slider's height, in order to make a seamless for the second part
        var screenHeight = $ ('.landing-full-screen').height();
        $('.section.price.big_container.first_section').css("margin-top", screenHeight);
        $('#first_section').css("margin-top", screenHeight);






      








      // initial the sliders
        $('.materialboxed').materialbox();

     // initial the Gutschine windows pop out by clicking the button of "print out the gutschein"
        $('.modal-trigger').leanModal();


        






     // when screenSize is > 992, make the navbar full screen widht
   

        var controlScreenWithJS = function(){

            // windows screen < 600
            if ($(window).width() < 600) {

            



                //start of control the navbar to full screen width 




                
                
                //end of control the navbar to full screen width 



/*

                $('#fade-in-title').css( "opacity", 0 );
                $('#fade-in-card-01').css( "opacity", 0 );
                $('#fade-in-card-02').css( "opacity", 0 );
                $('#fade-in-card-03').css( "opacity", 0 );

                $('#fade-in-team-mumber-01').css( "opacity", 0 );
                $('#fade-in-team-mumber-02').css( "opacity", 0 );
                $('#fade-in-team-mumber-03').css( "opacity", 0 );
                $('#fade-in-team-mumber-04').css( "opacity", 0 );
                $('#fade-in-team-mumber-05').css( "opacity", 0 );
                $('#fade-in-team-mumber-06').css( "opacity", 0 );

                $('#fade-in-contact-title').css( "opacity", 0 );
                $('#fade-in-contact-p').css( "opacity", 0 );
                $('#fade-in-contact-info').css( "opacity", 0 );
                $('#fade-in-social-icon-01').css( "opacity", 0 );
                $('#fade-in-social-icon-02').css( "opacity", 0 );
                $('#fade-in-social-icon-03').css( "opacity", 0 );

                


                //start of ScrollFire
                var options = [
                {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
                //promotion area
                {selector: '#fade-in-title', offset: 0, callback: 'Materialize.fadeInImage("#fade-in-title")' },
                {selector:'#fade-in-card-01',offset:0,callback:'Materialize.fadeInImage("#fade-in-card-01")'},
                {selector:'#fade-in-card-02',offset:50,callback:'Materialize.fadeInImage("#fade-in-card-02")'},
                {selector:'#fade-in-card-03',offset:100,callback:'Materialize.fadeInImage("#fade-in-card-03")'},
                //team-member
                {selector:'#fade-in-team-mumber-01',offset:0,callback:'Materialize.fadeInImage("#fade-in-team-mumber-01")'},
                {selector:'#fade-in-team-mumber-02',offset:100,callback:'Materialize.fadeInImage("#fade-in-team-mumber-02")'},
                {selector:'#fade-in-team-mumber-03',offset:0,callback:'Materialize.fadeInImage("#fade-in-team-mumber-03")'},
                {selector:'#fade-in-team-mumber-04',offset:100,callback:'Materialize.fadeInImage("#fade-in-team-mumber-04")'},
                {selector:'#fade-in-team-mumber-05',offset:0,callback:'Materialize.fadeInImage("#fade-in-team-mumber-05")'},
                {selector:'#fade-in-team-mumber-06',offset:100,callback:'Materialize.fadeInImage("#fade-in-team-mumber-06")'},








                //fade-in-contact
                {selector:'#fade-in-contact-title',offset:0,callback:'Materialize.fadeInImage("#fade-in-contact-title")'},
                {selector:'#fade-in-contact-p',offset:50,callback:'Materialize.fadeInImage("#fade-in-contact-p")'},
                {selector:'#fade-in-contact-info',offset:100,callback:'Materialize.fadeInImage("#fade-in-contact-info")'},
                //fade-in-contact-social-icons
                {selector:'#fade-in-social-icon-01',offset:0,callback:'Materialize.fadeInImage("#fade-in-social-icon-01")'},
                {selector:'#fade-in-social-icon-02',offset:50,callback:'Materialize.fadeInImage("#fade-in-social-icon-02")'},
                {selector:'#fade-in-social-icon-03',offset:100,callback:'Materialize.fadeInImage("#fade-in-social-icon-03")'}

                ];
              
                Materialize.scrollFire(options);
                //End of ScrollFire

*/










            } 
        }

    // call the function -- controlScreenWithJS
        controlScreenWithJS();

  });




  




  //Sticky Header
    $(window).scroll(function() {
         if ($(this).scrollTop() > 105){  

            $('#otherpages_top_nav').addClass("sticky");
            $('#otherpages_top_nav').find('a').addClass("text-color");
            $('#otherpages_nav_white').addClass("sticky");
            $('#otherpages_nav_white').find('a').addClass("text-color");


            
            
          } else{
            $('#otherpages_top_nav').removeClass("sticky");
            $('#otherpages_top_nav').find('a').removeClass("text-color");
            $('#otherpages_nav_white').removeClass("sticky");
            $('#otherpages_nav_white').find('a').removeClass("text-color");

            
          }

         
    });






    
// preloader

    $(window).load(function(){
    $(".section.preloader-big-wrapper").fadeOut("slow");


    

    // keep the margin-top space resizable whenever the windows size changed
    // add the event listener , and call the event handling "resize" funciton and pass "myFunction" in
    window.addEventListener("resize", myFunction);
    // for "landing page".html,set the second section's margin-top as same height as fullScreen slider's height, in order to make a seamless for the second part
    function myFunction(){
    var windowsHeight = $ ('.landing-full-screen').height();
    $('.section.price.big_container.first_section').css("margin-top", screenHeight);
    $('#first_section').css("margin-top", screenHeight);
    };




        //Smooth Scrolling To Internal Links With jQuery
     $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
       'scrollTop': $target.offset().top
      }, 900, 'swing');
     });










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
})













      





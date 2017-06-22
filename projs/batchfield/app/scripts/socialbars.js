$(document).ready(function() {
	
	// ["Label" , "website link" , "bar color" , "bar image"]
	var social = [
	 // ["aim", 		"http://www.aim.com/", 		"#ffd900", "images/social_sharing_icon/aim.png"],
	 // ["behance", 	"http://www.behance.net/", 	"#1769ff", "images/social_sharing_icon/behance.png"],
	 // ["digg", 		"http://digg.com/", 		"#2e9fff", "images/social_sharing_icon/digg.png"],
	 // ["dribbble", 	"http://dribbble.com/", 	"#8aba56", "images/social_sharing_icon/dribbble.png"],
	 // ["ember", 		"#", 						"#3fc380", "images/social_sharing_icon/ember.png"],
	 // ["evernote", 	"https://evernote.com/", 	"#5ba525", "images/social_sharing_icon/evernote.png"],
	 ["facebook", 	"http://fb.com", 			"#3B5998", "images/social_sharing_icon/facebook.png"],
	 // ["flickr", 	"https://www.flickr.com/", 	"#0063dc", "images/social_sharing_icon/flickr.png"],
	 // ["forrst", 	"http://forrst.com/", 		"#5b9a68", "images/social_sharing_icon/forrst.png"],
	 ["google+", 	"http://google.com", 		"#dd4b39", "images/social_sharing_icon/google_plus.png"],
	 // ["github", 	"http://github.com", 		"#171515", "images/social_sharing_icon/github.png"],
	 // ["last-fm", 	"http://www.last.fm/",  	"#c3000d", "images/social_sharing_icon/last-fm.png"],
	 // ["linkedin", 	"https://www.linkedin.com/","#0e76a8", "images/social_sharing_icon/linkedin.png"],
	 // ["paypal", 	"https://www.paypal.com", 	"#1e477a", "images/social_sharing_icon/paypal.png"],
	 // ["rss", 		"http://postrss.com/", 		"#ee802f", "images/social_sharing_icon/rss.png"],
	 // ["sharethis", 	"http://www.sharethis.com/","#96bf48", "images/social_sharing_icon/sharethis.png"],
	 // ["skype", 		"http://www.skype.com", 	"#00aff0", "images/social_sharing_icon/skype.png"],
	 // ["tumblr", 	"https://www.tumblr.com/", 	"#34526f", "images/social_sharing_icon/tumblr.png"],
	 // ["twitter", 	"https://twitter.com/", 	"#55acee", "images/social_sharing_icon/twitter.png"],
	 // ["vimeo", 		"https://vimeo.com/", 		"#44bbff", "images/social_sharing_icon/vimeo.png"],
	 // ["wordpress", 	"http://wordpress.com#", 	"#d54e21", "images/social_sharing_icon/wordpress.png"],
	 // ["yahoo", 		"https://www.yahoo.com/", 	"#720e9e", "images/social_sharing_icon/yahoo.png"],
	 ["youtube", 	"http://youtube.com", 		"#c4302b", "images/social_sharing_icon/youtube.png"],
	 // ["zerply", 	"http://zerply.com/", 		"#9dcc7a", "images/social_sharing_icon/zerply.png"]
	 ];

////////////////////////////////////////////////	
//// DO NOT EDIT ANYTHING BELOW THIS LINE! /////
////////////////////////////////////////////////
		
	$("#socialside").append('<ul class="mainul"></ul>');
	
	/// generating bars
	for(var i=0;i<social.length;i++){
	$(".mainul").append("<li>" + '<ul class="scli" style="background-color:' + social[i][2] + '">' +
						'<li>' + social[i][0] + '<img src="' + social[i][3] + '"/></li></ul></li>');
	 				}
	
	/// bar click event
	$(".scli").click(function(){
		var link = $(this).text();		
		for(var i=0;i<social.length;i++){
			if(social[i][0] == link){
				window.open(social[i][1]);
			}
		}		
	});
	
	/// mouse hover event
	$(".scli").mouseenter(function() {	
		$(this).stop(true);	
		$(this).clearQueue();
			$(this).animate({
				left : "105px"
			}, 300);
				
	});

	/// mouse out event
	$(".scli").mouseleave(function(){
		$(this).animate({
			left:"0px"
		},700,'easeOutBounce');
	});

});

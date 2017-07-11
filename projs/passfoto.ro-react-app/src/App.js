import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import Container from './page_container.js';

// import Header from './components/header/Header';
// import Main from './components/main/Main';
// import FooterComponent  from './footer/FooterComponent';

import './components/header/nav/navbar.css';
// import logo from './logo.svg';
import './App.css';


import * as firebase from 'firebase';










  class FirebaseTestingComponent extends Component {
    // constructor(){
    //   super();

    //   this.state = { 
    //     speed: 10
    //   };


    //   // this.updateData = this.updateData.bind(this);
    // }

    // componentWillMount(){
    //   const rootRef = firebase.database().ref().child('react');
    //   const speedRef = rootRef.child('speed');
    //   speedRef.on('value', snap => {
    //     this.setState({
    //       speed: snap.val()
    //     });
    //   });
    // }

    constructor() {
      super();

      this.loadData = this.loadData.bind(this);

    }

    loadData () {
       var data = {};
       const rootRef = firebase.database().ref().child('react');
       const speedRef = rootRef.child('speed');
       speedRef.set('value', snap => {
            data.speed = snap.val()
       });

       console.log(data);

    }




    render(){
      return (
        <div>
          <h1>{this.loadData()}</h1>
        </div>

      ); 

    }


  }



// import topicsData from './data/data.js';

// class App extends Component {
//   render() {
//     return (
//     	 <div>
//      		<Header />
//      		<Main/>
//      		{/*<FooterComponent/>*/}
  			
//   		 </div>
//     );
//   }
// }

const topicsData = {
    topic1 :{
              id:"biometrische-passbilder-passfotos",
              title: "Biometrische Passbilder",
              garantie_text:"in 5 Minuten. Garantiert!",
              telephone:"08031-22104040",
              disc:"Hochwertige <span>Passfotos</span> für deinen <span>Personalausweis</span>, <span>Reisepass</span>, elektronische <span>Gesundheitskarte</span>, <span>Führerschein</span>...",
              price:10,
              image:"",
              tab:{
                    tab_sub_title:"Personalausweis, Reisepass, Führerschein",
                    active:true,
                    tab_garantie_text:"Unsere Passbilder werden von den Behörden garantiert akzeptiert.",
                    thumbnail:"pass_single.jpg",
                    tab_content:{
                      content_id:"home",
                      headline:"4 Passbilder in nur 5 Minuten",
                      sub_headline:"Hergestellt auf Premium Hochglanz-Fotopapier & zugeschnitten",
                      image:"passfoto-rosenheim-biometrische-passbilder-big-trans-bg.png",
                      bullet_points: [
                        "100% Bewilligungsrate durch die Ämter GARANTIERT!",
                        "fotografiert durch einen professionellen Fotografen",
                        "super schnell fertig in nur 5 Minuten",
                        "sofort mitnehmen"
                      ]

                    }
                  }
            },
    topic2 :{
              id:"visum-fotos",
              title: "Visum-Fotos",
              garantie_text:"in nur 5 Minuten.Garantiert!",
              telephone:"08031-22104040",
              disc:"Hergestellt auf Premium Hochglanz-Fotopapier & zugeschnitten",
              price:19,
              image:"",
              tab :{
                    title: "Visum-Fotos",
                    tab_sub_title:"Visum, USA, Indien, Reisepass, Botschaftsdokumente",
                    active:false,
                    tab_garantie_text:"Unsere Visum-Fotos werden von den Behörden garantiert akzeptiert.",
                    thumbnail:"passfoto-rosenheim-visum-foto-thumb.jpg",
                    tab_content:{
                      content_id:"profile",
                      headline:"4 Visum-Fotos in nur 5 Minuten",
                      sub_headline:"Hergestellt auf Premium Hochglanz-Fotopapier & zugeschnitten",
                      image:"passfoto-rosenheim-visum-foto-high-res-trans-bg.png",
                      bullet_points: [
                        "100% Bewilligungsrate durch die Ämter GARANTIERT!",
                        "fotografiert durch einen professionellen Fotografen",
                        "super schnell fertig in nur 5 Minuten",
                        "sofort mitnehmen"
                      ]

                    }
                  }
            },
    topic3 :{
              id:"passbilder-schoene-portraits",
              title: "4 Passbilder + 2 schöne Portraits",
              garantie_text:"in nur 15 Minuten. Garantiert!",
              telephone:"08031-22104040",
              disc:"Hergestellt auf <span>Premium Hochglanz-Fotopapier</span> & zugeschnitten",
              price:39,
              image:"",
              tab :{
                    title: "Quick Shot",
                    tab_sub_title:"Passfotos und schöne Portraits von dir",
                    active:false,
                    tab_garantie_text:"Unsere Passbilder und Visum-Fotos werden von den Behörden garantiert akzeptiert.",
                    thumbnail:"passfoto-rosenheim-quick-shot-thumb.jpg",
                    tab_content:{
                      content_id:"messages",
                      headline:"4 Passbilder <span>+</span> 2 schöne Portraits <span>in nur 15 Minuten</span>",
                      sub_headline:"Hergestellt auf Premium Hochglanz-Fotopapier & zugeschnitten",
                      image:"passfoto-rosenheim-quick-shot-high-res-trans-bg.png",
                      bullet_points: [
                        "100% Bewilligungsrate durch die Ämter GARANTIERT!",
                        "fotografiert durch einen professionellen Fotografen",
                        "super schnell fertig in nur 15 Minuten",
                        "sofort mitnehmen"
                      ]

                    }
                  }
            },
  };






class TerminVereinbaren extends Component {
  render(){
    return (
      <section className="termin-vereinbaren">
        <div className="container">
          <div className="flexrow">
            <div className="text-wrapper">
              <h3><span>Terminbuchung, Spezialformate, Fragen </span></h3>
            </div>
            <div className="button-wrapper">
               <a className="btn btn-default button" href="tel:+49-08031-2214040">Uns anrufen 
                  08031-2214040 &nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-earphone"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );

  }

}





const howItWorksData  = {
    headline: "So einfach und schnell",
    dataset:[
      {
          id:"card_1",
          image:"/images/passfoto-rosenheim-termin-vereinbaren-icon.svg",
          image_alt:"rosenheim-termin-vereinbaren-icon",
          title:"Termin vereinbaren",
          sub_title:"Ob super kurzfristig oder länger geplant – ruf uns einfach an:",
          telephone:"08031-2214040",
          font_awesome_icon:"glyphicon glyphicon-earphone",
      },
      {
          id:"card_2",
          image:"/images/passfoto-rosenheim-du-wirst-fotografiert-icon.svg",
          image_alt:"rosenheim-du-wirst-fotografiert-icon",
          title:"Du wirst fotografiert",
          sub_title:"Danach hast du die Wahl aus mehreren Fotos. Schließlich sollst du auch 100% zufrieden sein!",
          telephone:"",
          font_awesome_icon:"",
      },
      {
          id:"card_3",
          image:"/images/passfoto-rosenheim-fotos-sofort-mitnehmen-icon.svg",
          image_alt:"rosenheim-fotos-sofort-mitnehmen-icon",
          title:"Fotos sofort mitnehmen",
          sub_title:"Blitzschneller Service und perfekte Fotos!",
          telephone:"",
          font_awesome_icon:"",
      }

    ]

};






const commentsData = {
    genders:{
       male:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-01.png',
       female:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-02.png' 
    },
    authors:[
              { author: 'Bianca',
                text: 'Hab echt tolle Passfotos bekommen! Das Team war auch super nett und professionell.',
                img: "'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-02.png",
                alt:'quick-shot-kunden-01',
                // date:  $scope.displayDate(new Date("2014-6-26"))
                date: "2014-6-26",
              }, 

              { author: 'Sonja',
                text: 'Ich habe Passbilder für meine Tochter machen lassen. Nettes Team, schneller Service, tolle Fotoqualität!',
                img: "'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-02.png",
                alt:'quick-shot-kunden-02',
                // date:  $scope.displayDate(new Date("2016-6-16"))
                date: "2014-6-16",
              }
    ],

    
};




class CommentsDate extends Component {
   pluralize  (number, string ){
    // check if the string is 'Woche'
    if(string === 'Woche'){
        if( number > 1 ) {
          return number + " " + string + 'n';  
        }
        else if (number == 1){
          return number + " " + string;
        }
        else{
          return "";
        }

    } else {
        if( number > 1 ) {
          return number + " " + string + 'en';  
        }
        else if (number == 1){
          return number + " " + string;
        }
        else{
          return "";
        }
    }

   
 }

  displayDate (timeStampInput) {
      var  timeStamp = new Date(timeStampInput);
      var currentDate = Date.now();
      var convertToWeekNum = 604800000;
      var totalDays = Math.round((( currentDate - timeStamp  ) / convertToWeekNum ) * 7) // 1094 days
      var yearCount =  this.pluralize ( Math.floor( totalDays / 365.25) , 'Jahr' );   ;  // 2 years
      var yearRemainder = totalDays % 365.25; // 364 dyas left
      var monthCount  = this.pluralize(Math.floor( yearRemainder / 30.4375 ),'Monat');  

      var monthRemainder = Math.floor( yearRemainder % 30.4375);


      var weeksCount =  this.pluralize(Math.floor( monthRemainder / 7), 'Woche' );
      var weeksRemainder = monthRemainder % 7;
      var daysCount  = this.pluralize(Math.floor(weeksRemainder), 'Tag')
     
 
      return (`- ${yearCount}  ${monthCount}  ${weeksCount}  ${daysCount}` ) ;
  }



  render(){
    return (
        <div>{this.displayDate(this.props.date)} </div>
    )

  }



}



class Comments extends Component {

  populateCommentsHtml (){
    const commentsHtml =  commentsData.authors.map(function (item,index){
      return (
        <li className="col-xs-12 col-sm-6 recommend-card" key={index}>
            <div className="card-wrapper">
              <div className="card">
                <img className="author-image" src={item.img} alt="comment.alt"/>
                <p>{item.text}</p>
                <h5 className="recommend-okay"><span className="glyphicon glyphicon-ok"></span>&nbsp;&nbsp;Ich würde passfoto.ro weiterempfehlen</h5>
              </div>
            </div>
            <h5><span className="glyphicon glyphicon-minus"></span>&nbsp;<i className="author">{item.author}</i></h5>
          
            <CommentsDate  
              date={item.date}
            />

          </li>
      );

    });

    return commentsHtml;
  }



  render(){
    return (
          <ul>
            {this.populateCommentsHtml()}
          </ul>
    );

  }


}




class Facebook extends Component {
  render(){
    return (
          <div className="row">
             <div className="col-xs-12 col-sm-6 recommend-card">
              <div className="card-wrapper">
                <div className="card">
                  <img className="author-image" src="/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-facebook.png" alt="facebook-image" />
                 <div className="fb-page" data-href="https://www.facebook.com/PassFoto.ro"  data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                   <div className="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/PassFoto.ro"><a href="https://www.facebook.com/PassFoto.ro">PassFoto.ro</a></blockquote>
                   </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
    );

  }

}


class Tetimonial extends Component {
  render(){
    return (
       <section className="testimonial text-center" id="kundenstimmen">
        <div className="container">
          <div className="row">
             <h3>Warum unsere Kunden unseren Service lieben</h3>
              <p>Weil wir nur mit dem besten Service der Stadt zufrieden sind! Nur wenn du zufrieden bist, sind wir es auch!</p>
              <div className="stars-block">
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
              </div>
          </div>

          <Facebook />
          <Comments />




         

        </div>
      </section>
    );

  }
}






class Telephone extends Component {

  checkTelephoneData(){
      if(this.props.telephone.telephone.length > 0){
        return (
           <a className="btn btn-default button"  href={`tle:+49-${this.props.telephone.telephone}}`}>
              {this.props.telephone.telephone}
          </a>
        );
        
      } else {
        return "";
      }

  }

  render(){
    return (
        <div>
        {this.checkTelephoneData()}
        </div>
    );

  }


}





class HowItworks extends Component {


  populateHowItWorksHtml (){
    const howItWorksHtml = howItWorksData.dataset.map(function (item,index){

        return (
             <div className="col-xs-12 col-sm-4 col-md-4 card" id={item.id} key={index}>
                <img className="how-it-works-icons" src={item.image} alt={item.alt} />
                <h3>{item.title}</h3>
                <p>{item.sub_title}</p>

                <Telephone telephone={item}/> 
                
              </div>
        );

    });

    return howItWorksHtml;
  }


  render(){
    return (
         <section className="how-it-works text-center">
          <div className="container">
            <div className="row">
              <h3>So einfach und schnell</h3>
            </div>
            <div className="row">
              {this.populateHowItWorksHtml()}
            </div>
          </div>
        </section>

    );

  }



}





class NavContent extends Component {

  populateTabsHtml (){

        var keys = Object.keys(topicsData); // ['topic1', 'topic2', 'topic3'];

      const keyHtml = keys.map(function (item,index){
            var nav_content = topicsData[item].tab;
            return (
                    <li role="tabpanel" className={`tab-pane fade ${nav_content.active? 'active in': ''}`} id={nav_content.tab_content['content_id']} key={index}>   
                        <div className="tab-pane-content row">
                          <div className="col-xs-12 col-sm-4 image-wrapper">
                            <img className="detail-image" id="passbilder" src={`/images/${nav_content.tab_content['image']}`} alt={nav_content.tab_content.image} />
                          </div>

                          <div className="col-xs-12 col-sm-8 checking-points">
                            <h3 className="detail-headline">{nav_content.tab_content.headline}</h3>
                            <p className="detail-sub-headline">{nav_content.tab_content.sub_headline}</p>
                            <div className="price-big-wrapper">
                              <div className="price-wrapper"><div className="price">nur<br/><span>{nav_content.price}&nbsp;€</span></div></div>
                            </div>
                            <ul>
                              { nav_content.tab_content.bullet_points.map((item,index) => { return <li key={index}>{item}</li>})}
                           </ul>
                           <a className="btn btn-default three-package-button" href="tel:+49-08031-2214040">
                            08031-2214040 &nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-earphone"></span>
                          </a>
                        </div>

                      </div>

                      <div className="tab-pane-sub-content row">
                        <div className="col-xs-12 col-sm-2"><img className="garantie-image" src={"/images/passfoto-rosenheim-garantiert.svg"} alt="passfoto-rosenheim-garantiert-garantiert" />
                        </div>
                        <div className="col-xs-12 col-sm-10 garantie-text-wrapper">
                          <h4 className="garantie-sub-headline">Garantie.</h4>
                          <p className="garantie-sub-body-text">Unsere Passbilder werden von den Behörden garantiert akzeptiert.</p>
                        </div>
                      </div>
                </li>
            );
        });

        return keyHtml;

  }




  render() {
    return (
      <ul className="tab-content">
            {this.populateTabsHtml()}
        </ul>
    );
  }
}







class NavTabs extends Component {

  populateTabsHtml (){
      var keys = Object.keys(topicsData); // ['topic1', 'topic2', 'topic3'];

      const keyHtml = keys.map(function (item,index){
        var navtabs = topicsData[item].tab;
        return (
          <li role="presentation" id="first-tab" key={index } className={ (navtabs.active)? "active" : "" }> 
                <a href={`#${navtabs.tab_content.content_id}`} aria-controls="home" role="tab" data-toggle="tab">
                <div className="tab-image-wrapper">
                  <img className="tab-image" src={`/images/${navtabs.thumbnail}`} alt={navtabs.title} />
                </div>
                <div className="tabs-text-wrapper">
                  <h5>{navtabs.title}</h5>
                  <p>{navtabs.sub_title}</p>
                </div>
                </a>
            </li>
        );
      });

      return keyHtml;

  }


  render() {
    return (
      <ul className="nav nav-tabs" role="tablist">
          {this.populateTabsHtml()}
        </ul>
    );
  }
}














class Hero extends Component {
  populateTabsHtml (){
      var keys = Object.keys(topicsData); // ['topic1', 'topic2', 'topic3'];
      var id  = this.props.topic;

      var filterData = keys.filter(function(word){                
                        return topicsData[word].id === id;
                       });



      const topicHtml = filterData.map(function (item,index){
          var data = topicsData[item];
          return (
             <div className="container" key={index}>
            <div className="row">
              <a href="/index.html" className="logo-link-wrapper"><img className="logo logo-wrapper" src="images/passfoto-rosenheim-logo.svg" alt="PassFoto.ro" /></a>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-5 hand-wrapper">
                <img className="img-responsive" src="/images/passfoto-rosenheim-pass_set_only.png" alt="passfoto-rosenheim-pass" />
              </div>
              <div className="col-xs-12 col-sm-7 text-center text-wrapper">
                <h1 className="header first">{data.title}</h1>
                <h1 className="header second">{data.garantie_text}</h1>
                <a className="btn btn-default shake-slow shake-constant" href="tel:+49-08031-2214040">
                    {data.telephone} &nbsp;&nbsp;&nbsp;<span className="glyphicon glyphicon-earphone"></span>
                </a>
               

                <p className="sub-header" dangerouslySetInnerHTML={{__html:data.disc}}></p>
              {/*
                dangerouslySetInnerHTML
                dangerouslySetInnerHTML is React's replacement for using innerHTML in the browser DOM.
                In general, setting HTML from code is risky because it's easy to inadvertently expose 
                your users to a cross-site scripting (XSS) attack. So, you can set HTML directly from
                React, but you have to type out dangerouslySetInnerHTML and pass an object with a __html key,
                 to remind yourself that it's dangerous. For example:
              */}


                <div className="big-price-tag-wrapper">
                  <div className="text-block">
                    <div className="text">
                      <span>nur</span>
                      <span>{data.price}</span>
                      <span>€</span>
                    </div>
                  </div>
                </div>

              </div>
              
            </div>
         </div>
          );
      });


      return topicHtml;



  }

  render() {
    return (
         <section className="hero">
            {this.populateTabsHtml()}
      </section>
    );
  }
}





const Contact = () => (
  <div>
     here is the contact component
  </div>
)


const Topic = ({ match }) => (
  <div>
    {/* <h3>{match.params.topicId}</h3> */}
    <Hero topic={match.params.topicId} />
    <NavTabs />
    <NavContent />
    <HowItworks />
    <TerminVereinbaren />
    <Tetimonial />
    <FirebaseTestingComponent />
  </div>
)



class FooterCopyright extends Component {
  yearOfCopyRight(){
    var year = new Date().getFullYear();
    return year;
  }
  render(){
    return (
      <div className="container-fluid text-center footer-copyright"> {`@ ${this.yearOfCopyRight()} PassFoto.ro`}</div>
    );

  }

}



const App = () => (
  <Router>

   <div>
      <nav id="nav">
         <div className="navmenu navmenu-default navmenu-fixed-right offcanvas">
          <a className="navmenu-brand" href="/index.html">Startseite</a>
          <ul className="nav navmenu-nav">
            <li><Link to="/biometrische-passbilder-passfotos">Biometrische Passbilder</Link></li>
            <li><Link to="/visum-fotos">Visum-Fotos</Link></li>
            <li><Link to="/passbilder-schoene-portraits">QuickShot</Link></li>
            <li><Link to="/kundenstimmen">Kundenstimmen</Link></li>
          </ul>
          <ul className="nav navmenu-nav">
            <li><Link to="/kontakt">Kontakt</Link></li>
           {/*  uncommend the code below to show up the dropdown menu */}

           {/*    <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                <ul className="dropdown-menu navmenu-nav">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li className="divider"></li>
                  <li className="dropdown-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li> 
            */}        
          </ul>
          <ul className="nav navmenu-nav">
            {/*
            <li>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.3758343654513!2d12.12524061601262!3d47.85168407920168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47761a39e2c62747%3A0x68fdc7ba19fb294!2sHammerweg%2C+83022+Rosenheim!5e0!3m2!1sen!2sde!4v1466576946172" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
            </li>
             */}
          </ul>
           <ul className="nav navmenu-nav">
            <li className="address">
               <a href="http://www.google.com"><span className="glyphicon glyphicon-map-marker">&nbsp;</span>Hammerweg 8
                  83022 Rosenheim</a>
            </li>
            <li className="tel">
               <a href="tel:+49-08031-2214040"><span className="glyphicon glyphicon-earphone">&nbsp;</span>08031-2214040</a>
            </li>
          </ul>
        </div>

        <div className="navbar navbar-default navbar-fixed-top">
          <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-target=".navmenu" data-canvas="body">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </nav>

      <Route path={`/:topicId`} component={Topic}/>
      <Route path="/kontakt" component={Contact}/>
      {/*<Route exact path="/" component={Home}/> */}
      {/*<Route path="/about" component={About}/> */}
      {/*<Route path="/topics" component={Topics}/> */}


      <footer id="footer">
         <div className="container">
        <div className="row">
          <div className="col-sm-4 footer-block">
              <a href="/index.html">
               <img className="footer-logo" src="/images/passfoto-rosenheim-logo-white.svg" alt="PassFoto.ro" />
              </a>
          </div>
           <div className="col-sm-4 footer-block">
            <h4 className="footer-header">Produkte</h4>
            <ul>
              <li><a href="/biometrische-passbilder-passfotos.html">Biometrische Passbilder</a></li>
              <li><a href="/visum-fotos.html">Visum-Fotos</a></li>
              <li><a href="/passbilder-schoene-portraits.html">QuickShot</a></li>
            </ul>
          </div>




          <div className="col-sm-4 footer-block">
            <h4 className="footer-header">Kontakt</h4>
            <ul>
              <li><a href="tel:+49-08031-2214040">08031-2214040</a></li>
              <li><a href="mailto: hello@batchfield.de"> hello@batchfield.de</a></li>
              <li><a href="/kontakt.html">Hammerweg 8 , 83022 Rosenheim</a></li>
              <li><a className="social-slide rollover-facebook" href="https://www.facebook.com/PassFoto.ro" target="_blank"></a></li>
              <li><a className="social-slide rollover-google-plus" href="https://plus.google.com/116547718476111779755" target="_blank"></a></li>
            </ul>
          </div>
        </div>
        <div className="row text-center footer-extra-info">
         <div className="col-sm-12 footer-impressum-section">
            <ul>
             <li><a href="/impressum.html">Impressum</a></li>
             <li><a href="/datenschutz.html">Datenschutz</a></li>
             <li><a href="/sitemap.html">Sitemap</a></li>
           </ul>
         </div>
         <div className="col-sm-12 product-delivery-detail-description">
            <ul>
              <li>Alle angegebenen Preise sind bereits inkl. MwSt.</li>
           </ul>
         </div>
        </div>
      </div>


      <FooterCopyright />
      </footer>

    </div>
  </Router>                                                     


)




export default App;







// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )





// const Topics = ({ match }) => (  
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )
 
// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr/>

//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )
// export default BasicExample

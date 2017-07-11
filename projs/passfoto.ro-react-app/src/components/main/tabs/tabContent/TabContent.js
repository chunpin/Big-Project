import React, { Component } from 'react';




class NavContent extends Component {

  populateTabsHtml (){

        var keys = Object.keys(this.props.data); // ['tab1', 'tab2', 'tab3'];
        var data = this.props.data;


        const keyHtml = keys.map(function (item){
            return (
                    <li role="tabpanel" className={`tab-pane fade ${data[item].active? 'active in': ''}`} id={data[item].tab_content['content_id']}>   
                        <div className="tab-pane-content row">
                          <div className="col-xs-12 col-sm-4 image-wrapper">
                            <img className="detail-image" id="passbilder" src={`/images/${data[item].tab_content['image']}`} alt={data[item].tab_content.image} />
                          </div>

                          <div className="col-xs-12 col-sm-8 checking-points">
                            <h3 className="detail-headline">{data[item].tab_content.headline}</h3>
                            <p className="detail-sub-headline">{data[item].tab_content.sub_headline}</p>
                            <div className="price-big-wrapper">
                              <div className="price-wrapper"><div className="price">nur<br/><span>{data[item].price}&nbsp;€</span></div></div>
                            </div>
                            <ul>
                              { data[item].tab_content.bullet_points.map((item) => { return <li>{item}</li>})}
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



export default NavContent;





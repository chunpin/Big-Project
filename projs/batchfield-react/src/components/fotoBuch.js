import React, { Component } from 'react';

import './fotoBuch.css';




class FotoBuch extends Component {

	render(){
		return (
			<div>


     		<div className="section paketpreis shadow_divider" id="paketpreis">
     			<div className="row">
				  <h3 className="col s12 topic_title center light-blue-text text-lighten-1">BATCHFIELD Fotobuch</h3>
				  <h5 className="col s12 center">Deine Lieblingsbilder zum unschlagbaren Paketpreis</h5>
				</div>



			    <div className="container fixed_width hide-mobile">
			      <div className="row col s12 preise_wrapper center">
			         

			        <div className="col s12 m4 offset-m2 l2 center card hoverable">
			          <h1>10</h1>
			          <h2>Lieblingsbilder</h2>
			          <h3>99€</h3>
			      
			        </div>
			        <div className="col s12 m4 l2 center card hoverable special_middle">
			          <h1>15</h1>
			          <h2>Lieblingsbilder</h2>
			          <h3>149€</h3>
			      
			        </div>
			        <div className="col s12 m4 l2 center card hoverable special_big">
			          <div className="price_high_light"></div>
			          <h1>20</h1>
			          <h2>Lieblingsbilder</h2>
			          <h3>189€</h3>
			      
			        </div>
			        <div className="col s12 m4 l2 center card hoverable special_middle">
			          <h1>30</h1>
			          <h2>Lieblingsbilder</h2>
			          <h3>259€</h3>
			      
			        </div>
			        <div className="col s12 m4 l2 center card hoverable">
			          <h1>50</h1>
			          <h2>Lieblingsbilder</h2>
			          <h3>379€</h3>
			      
			        </div>

			      </div>
			    </div>
			</div>


			<div className="section">
			  <div className="container fixed_width hide-desktop" id="price-table">
					<table className="striped">
			            <thead>
			              <tr>
			                 <th data-field="id"></th>
			                  <th data-field="name">Paket</th>
			                  <th data-field="price">Preise</th>
			              </tr>
			            </thead>
			    
			            <tbody>
			               <tr>
			                <td>Garda</td>
			                <td>10 Lieblingsbilder</td>
			                <td>99€</td>
			              </tr>
			               <tr>
			                <td>Venezia</td>
			                <td>15 Lieblingsbilder</td>
			                <td>149€</td>
			              </tr>
			              <tr>
			                <td>Firenze</td>
			                <td>20 Lieblingsbilder</td>
			                <td>189€</td>
			              </tr>
			              <tr>
			                <td>Bologna</td>
			                <td>30 Lieblingsbilder</td>
			                <td>259€</td>
			              </tr>
			              <tr>
			                <td>Milano</td>
			                <td>50 Lieblingsbilder</td>
			                <td>379€</td>
			              </tr>
			            </tbody>
			      </table>
			  </div>
			</div>



			<div className="container bullet_list">
			    <ul className="row">
			      <li className="col s12">Jedes Fotobuch-Paket enthält deine Lieblingsbilder als Abzug und Datei.</li>
			      <li className="col s12">Alle Paketpreise gelten zzgl. 39€ Fotoshooting Grundgebühr</li>
			      <li className="col s12">Jedes weitere Bild als hochauflösende Datei: 20€</li>
			      <li className="col s12">weitere Abzüge nach Größe und Menge — siehe Studiopreise</li>
			      <li className="col s12">MakeUp: 35€</li>
			    </ul>
			</div>


			</div>
		);
	}
}

export default FotoBuch;
import React, { Component } from 'react';
import ProductNavigation from './ProductNavigation';
import NavBar from './NavBar';

export default () => {

	return (
		<div>
		 <NavBar/>
  		<div id="container">
  			<img src="/images/BannerImage.jpg" style={{'display': 'block', 'margin': 'auto', 'height': 'auto', 'maxWidth':'60%', 'width': 'auto', 'maxHeight':'30%'}}/>
			<ProductNavigation />
  		</div>
		</div>
 )
}
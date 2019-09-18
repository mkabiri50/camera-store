
import React from 'react';
import {Col} from 'react-bootstrap';

import classes from './BasketItem.css'

const basketItem = props =>(
<React.Fragment>
    <Col xs={4} className={classes.Basket_Img_Container}>
    <img
      src={props.imageSource}
      alt=""
      className={classes.thumbnail}
    />
  </Col>
  <Col xs={6} className={classes.Basket_Info_Container}>
    <div className={classes.title}>{props.productTitle}</div>

    <div style={{ verticalAlign: 'middle', fontSize: 'xx-small' }}>
      {props.sign}{props.productCount}
    </div>
    
    <div style={{color: 'gray'}} > { props.productBrand} </div>
   
    <div style={{ verticalAlign: 'middle' }}>
      {props.dollarSign} {props.productPrice}
    </div>
  </Col>
  </React.Fragment>

)

export default basketItem
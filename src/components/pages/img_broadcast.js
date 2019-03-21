import React from 'react';
import PropTypes from 'prop-types';
import {Button, Carousel, Card, Icon, Avatar } from 'antd';
import styles from './components.css';

const { Meta } = Card;

class ImgBroadcast extends React.Component {
    render() {
      let imageUrl = require('../../resources/images/6.jpg');
      return (
          <div style={{marginTop : '10px'}}>
              <Carousel autoplay className={styles['carousel-img-broadcast']}>
                  <div><img className={styles['img-broadcast']} alt="images" src={imageUrl} /></div>
                  <div><img className={styles['img-broadcast']} alt="images" src={imageUrl} /></div>
                  <div><img className={styles['img-broadcast']} alt="images" src={imageUrl} /></div>
                  <div><img className={styles['img-broadcast']} alt="images" src={imageUrl} /></div>
              </Carousel>
          </div>
      );
    }
}

// ImgBroadcast.propTypes = {
//     countValue: PropTypes.number.isRequired,
//     onPlusClick: PropTypes.func.isRequired
// }

export default ImgBroadcast;

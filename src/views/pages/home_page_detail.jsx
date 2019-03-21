import React from 'react';
import {Menu, Icon, Row, Col } from 'antd';
import PCHeader from "../../components/layout/pc_header";
import PCFooter from "../../components/layout/pc_footer";
import ImgBroadcast from "../../components/pages/img_broadcast";
import styles from './views_pages.css';

const MenuItem = Menu.Item;

class HomePageDetail extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleClickMenu = this.handleClickMenu.bind(this);
        this.state={
            current: 'news',
            currentMenu: 'health'

        }
    }
    handleClick(e){
        this.setState({
            current: e.key,
        });
    }
    handleClickMenu(e){
        this.setState({
            currentMenu: e.key,
        });
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={3}></Col>
                    <Col span={12}>
                      <Row className={styles['news-title']}>习近平时间|习近平出访署名文章频谈国之相交</Row>
                      <Row><span className={styles['news-title-footer']}>2018-07-30 08:24:59　来源: 新华网</span></Row>
                      <Row>
                        <Col span={6}>
                          <ul>
                            <li className={styles['list-li']}><img className={styles['news-detail-image']} src={require('../../resources/images/icon/weixin.jpg')} alt=""/><span className={styles['news-detail-font']}>微信</span></li>
                            <li className={styles['list-li']}><img className={styles['news-detail-image']} src={require('../../resources/images/icon/qq_space.jpg')} alt=""/><span className={styles['news-detail-font']}>QQ空间</span></li>
                            <li className={styles['list-li']}><img className={styles['news-detail-image']} src={require('../../resources/images/icon/weibo.jpg')} alt=""/><span className={styles['news-detail-font']}>微博</span></li>
                            <li className={styles['list-li']}><img className={styles['news-detail-image']} src={require('../../resources/images/icon/more.jpg')} alt=""/><span className={styles['news-detail-font']}>更多</span></li>
                          </ul>
                        </Col>
                        <Col span={17} className={styles['news-detail-content']}>
                          <div className={styles['content-intro-title']}>（原标题：习近平时间|习近平出访署名文章频谈国之相交）</div>
                          <div className={styles['content-intro']}>&nbsp;&nbsp;&nbsp;&nbsp;7月19日至28日，习近平主席对阿联酋、塞内加尔、卢旺达和南非进行国事访问，出席在南非约翰内斯堡举行的金砖国家领导人第十次会晤，过境毛里求斯并进行友好访问。习近平接连在出访国发表署名文章，讲述国与国之间相知相交的故事。今天的《习近平时间》，让我们一起聆听。</div>
                          <img className={styles['new-tile-image']} src={require('../../resources/images/new_image.jpg')} alt=""/>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={6}>
                      <Row><div className={styles['special-topic']}><span className={styles['special-topic-content']}>专题推荐</span></div></Row>
                      <Row className={styles['special-title']}>诚信建设万里行</Row>
                      <Row>
                        <ul className={styles['special-topic-ul']}>
                          <li className={styles['special-topic-li']}>聚焦晋江经验</li>
                          <li className={styles['special-topic-li']}>纪念中国共产党成立97周年</li>
                          <li className={styles['special-topic-li']}>探访南水北调中线工程</li>
                          <li className={styles['special-topic-li']}>[二十四节气]夏满芒种暑相连</li>
                          <li className={styles['special-topic-li']}>马克思诞辰200周年</li>
                          <li className={styles['special-topic-li']}>学宪法守宪法</li>
                          <li className={styles['special-topic-li']}>自主创新推进网络强国建设</li>
                          <li className={styles['special-topic-li']}>习近平出席2018博鳌论坛</li>
                          <li className={styles['special-topic-li']}>新时代新气象新作为</li>
                        </ul>
                      </Row>

                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        );
    }
}

export default HomePageDetail;

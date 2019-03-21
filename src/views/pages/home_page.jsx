import React from 'react';
import {Menu, Icon, Row, Col } from 'antd';
import { Router, Route, Switch, Redirect, Link} from 'dva/router';
import PCHeader from "../../components/layout/pc_header";
import PCFooter from "../../components/layout/pc_footer";
import PCBar from "../../components/layout/pc_bar";
import ImgBroadcast from "../../components/pages/img_broadcast";
import styles from './views_pages.css';
import {connect} from 'dva';

const MenuItem = Menu.Item;

class HomePage extends React.Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleClickMenu = this.handleClickMenu.bind(this);
        this.titleBarClick = this.titleBarClick.bind(this);
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
    titleBarClick(){
      this.props.redirectToNewsDetail('/news/pages/detail');
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={3}></Col>
                    <Col span={4}>
                        <ImgBroadcast></ImgBroadcast>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={8}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick}>
                            <MenuItem key="news">要闻</MenuItem>
                            <MenuItem key="ccnews">长春新闻</MenuItem>
                        </Menu>
                        {
                            this.state.current == 'news' ?
                                <ul>
                                    <li className={styles['news-content-bold']} onClick={this.titleBarClick}>习近平出席金砖国家工商论坛并发表重要讲话</li>
                                    <li className={styles['news-content']}>习近平时间|习近平出访署名文章频谈国之相交</li>
                                    <li className={styles['news-content']}>金砖国家领导人会晤机制都谈了什么 "金砖色彩"    </li>
                                    <li className={styles['news-content']}>老人10年前出资16万修桥 暴雨后清淤时落水身亡</li>
                                    <li className={styles['news-content']}>南非各界高度评价习近平访问成果 辛识平</li>
                                    <li className={styles['news-content']}>征集"世界互联网领先科技成果发布活动"成果通知</li>
                                    <li className={styles['news-content-bold']}>问题疫苗流向及控制情况如何?国家药监局回应</li>
                                    <li className={styles['news-content']}>专家：河北山东重庆百白破疫苗补种工作陆续展开</li>
                                    <li className={styles['news-content']}>白宫：第二次"双普会"将不会在2018年举行</li>
                                    <li className={styles['news-content']}>军改以来东海舰队首迎新政委 他来自空军政工部</li>
                                    <li className={styles['news-content-bold']}>月薪1500到身家过亿 京东前副总裁自我投资之道</li>
                                    <li className={styles['news-content']}>人间 | 我一个要当作家的，怎么信了成功学</li>
                                </ul>
                                  :
                                <ul>
                                    <li className={styles['news-content-bold']}>长春生态广场互通立交预计10月完工</li>
                                    <li className={styles['news-content']}>传高俊芳系原吉林省委书记高狄女儿 当事人：造谣</li>
                                    <li className={styles['news-content']}>因违规停车 长春54路有轨电车被“逼停”60分钟</li>
                                    <li className={styles['news-content']}>老人10年前出资16万修桥 暴雨后清淤时落水身亡</li>
                                    <li className={styles['news-content']}>找微信代购买名表 交了12万 表没影儿 钱不退</li>
                                    <li className={styles['news-content']}>司机遇检查：我要喝酒了 脑袋割下来给你当球踢</li>
                                    <li className={styles['news-content']}>好样的 女子倒地抽搐 女护士跪地救人</li>
                                </ul>
                        }
                    </Col>
                    <Col span={5}>
                        <Menu mode="horizontal" selectedKeys={[this.state.currentMenu]} onClick={this.handleClickMenu}>
                            <MenuItem key="health">健康</MenuItem>
                            <MenuItem key="handleMoney">理财</MenuItem>
                        </Menu>

                        {
                            this.state.currentMenu == 'health' ?
                                <div className="div-health-parent">
                                    <div className={styles['div-health']}>
                                        <a>
                                            <img src={require('../../resources/images/baby_born.jpg')}></img>
                                        </a>
                                        <h3 className={styles['div-health-h3']}>印度婴儿出生时0.72斤</h3>
                                    </div>
                                    <div className={styles['div-health']}>
                                        <a>
                                            <img src={require('../../resources/images/hospital_cure.jpg')}></img>
                                        </a>
                                        <h3 className={styles['div-health-h3']}>日本高温万人中暑就医</h3>
                                    </div>
                                    <div className={styles['div-health']}>
                                        <a>
                                            <img src={require('../../resources/images/baby_born.jpg')}></img>
                                        </a>
                                        <h3 className={styles['div-health-h3']}>印度婴儿出生时0.72斤</h3>
                                    </div>
                                    <div className={styles['div-health']}>
                                        <a>
                                            <img src={require('../../resources/images/hospital_cure.jpg')}></img>
                                        </a>
                                        <h3 className={styles['div-health-h3']}>日本高温万人中暑就医</h3>
                                    </div>
                                    <div className={styles['div-health-ul-parent']}>
                                        <ul className={styles['div-health-ul-parent-list']}>
                                            <li className={styles['news-item-li']}>宝宝发烧了？千万别裹紧他的小被子！</li>
                                            <li className={styles['news-item-li']}>最新研究表明“主观年龄”影响大脑衰老</li>
                                            <li className={styles['news-item-li']}>夏季食物是中毒高发期 食材选取请谨慎</li>
                                        </ul>
                                    </div>
                                </div>
                                 :
                                <ul>
                                  adf
                                </ul>

                        }
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    redirectToNewsDetail: (tabName) => {
      dispatch({type: 'pageModel/changeTab', payload: { tabName: tabName }})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

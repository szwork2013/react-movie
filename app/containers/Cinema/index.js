import React, { Component } from 'react'
import {List, NavBar, Nav, Slider, Loading, Icon} from '../../components';
import Axios from 'axios'; //引入axios处理ajax
import './index.css';
//首页页面
class Cinema extends Component{
    constructor(props){
        super(props);
        console.log('--------Containers/Main--------')
        console.log('Main执行getInitialState')
        this.ignoreLastFetch = false;
        this.state = {
          newslist : [],   //新闻列表数据
          slider : [],     //轮播图数据
          sliderId : 0,    //轮播图组件id
          loading : true   //loading参数
        }
        this.props.navBarSet("全部影院")
    }

    getData(id){
        //数据返回之前，重新设置state,因为不同路由使用的一个组件，切换时，需要重置状态
        this.setState({
          loading : true   //loading参数
        })

        let self = this;
        let url = 'http://mockdata/get/newslist';
        console.log('Main请求的url为：' + url);
        Axios.get(url).then(function(res){
            console.log('--------Containers/Main--------');
            console.log('Main获取到的数据为：');
            console.log(res.data.slider);
            if(!self.ignoreLastFetch){
                self.setState({
                    newslist : res.data.data,
                    slider : res.data.slider.data,
                    sliderId : res.data.slider.id,
                    loading : false
                })
            }

            console.log(res.data.slider)
            // 设置滚动条位置
            self.setPosition();
        })

    }


    savePosition() {
        console.log('...savePosition...');
        let scrollTop = document.body.scrollTop;//获取滚动条高度
        let path = this.props.location.pathname;//获取当前的pathname
        let positionData = {"scrollTop" : scrollTop, "path" : this.props.location.pathname};//redux中要存储的数据

        this.props.addTodo('this is addTodo' + scrollTop); //测试addTodo

        this.props.setScroll(positionData);//通过action设置位置信息
    }

    // 设置滚动条位置
    setPosition(){
        console.log('...setPosition...');
        let posData = this.props.position;//获取store中的滚动条位置信息
        let len = posData.length;         //获取信息数组长度，用于获取最新的位置信息
        console.log(posData);
        let savePos = 0;                  //初始位置为0
        let savePath = '';                //初始pathname为空
        if(len != 0 ){                    //当位置信息数组不为空的时候，设置位置和pathname
            savePos = posData[len - 1].position.scrollTop;
            savePath = posData[len - 1].position.path;
            console.log(savePos);
            console.log(savePath);
        }

        let path = this.props.location.pathname; //获取当前pathname
        if(path == savePath){                    //当store中路径和当前路径一致时，
          window.scrollTo(0, savePos);           //设置滚动条位置到 相应位置
          let positionData = {"scrollTop" : 0, "path" : this.props.location.pathname};
          this.props.setScroll(positionData);    //设置store中当前path为0，解决导航栏目切换时，滚动条位置
        }
        else{                                   //否则滚动到顶部
          window.scrollTo(0, 0);
        }

    }

    componentDidMount(){
        // 初始化时，设置导航状态
        console.log('--------Containers/Main--------');
        console.log('Main执行componentDidMount');

        // 初始化新闻列表数据
        this.getData('tuijian');
    }

    componentDidUpdate(prevProps) {
        // 上面步骤3，通过参数更新数据
        let oldId = prevProps.params.id;
        console.log('--------Containers/Main--------');
        console.log('Main执行componentDidUpdate');
        console.log('oldId ' + oldId);
        let id = this.props.params.id;
        console.log('newId ' + id);
        if (id !== oldId){
            // 如果路由获取不到参数，获取推荐数据
            if(typeof(id) == 'undefined'){
              console.log("id是 " + id + " componetWillReceiveProps");
              this.getData('tuijian');
            }
            // 否则获取相应栏目数据，根据id查询
            else {
              console.log('--------Containers/Main--------')
              console.log("Main执行componentDidUpdate");
              this.getData(id);
            }
        }

    }

    componentWillUnmount () {
        // 上面步骤四，在组件移除前忽略正在进行中的请求
        this.ignoreLastFetch = true
        this.savePosition()

    }

    // getNavActive(){
    //   let data = this.props.navActiveData;
    //   let len = data.length;
    //   if(len != 0){
    //     return data[len - 1].navActiveData
    //   }
    //   else{
    //     return false;
    //   }
    //
    // }

    render(){
        return(

            <div className="main-con">
                <Loading active={this.state.loading} />
                <div className={this.state.loading ? "con-hide" : "con-show"}>
                    <Slider id={this.state.sliderId} data={this.state.slider} />
                    <List data={this.state.newslist} />
                </div>
            </div>
        )
    }

}


export default  Cinema

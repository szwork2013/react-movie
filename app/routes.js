import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory,browserHistory, applyRouterMiddleware, Link} from 'react-router';
import {App, Home, Film, Cinema, User} from './containers';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} /> //首页
        <Route path="/home" component={Home} />  //栏目切换
        <Route path="/film" component={Film} /> //电影
        <Route path="/cinema" component={Cinema} /> //影院
        <Route path="/user" component={User} /> //用户中心
        <Redirect from='*' to='/' />
    </Route>
)

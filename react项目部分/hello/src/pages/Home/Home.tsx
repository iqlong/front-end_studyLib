import { NavLink, Route, Switch } from 'react-router-dom'
import Message from './Message/Message'
import News from './News/News'
import React from 'react';

function Home() {
    return (
        <div className="home-body" style={{marginLeft: '40px'}}>
            <div style={{backgroundColor: 'pink'}}>
                <h4>Home 的子容器</h4>
            </div>
            <div className="nav">
                <NavLink to='/home/news/kobeDead'>to news</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to='/home/message?name=zhl&age=12'>to Message</NavLink>
                <NavLink to={{path: '/home/message', state: {mes: 'i am state'}}}>to Message_withState</NavLink>
            </div>
            <div className="contain">
                <Switch>
                    <Route path={`/home/news/:news`} component={News}></Route>
                    <Route path='/home/message' component={Message}></Route>

                </Switch>
            </div>
        </div>
    )
}

export default  Home

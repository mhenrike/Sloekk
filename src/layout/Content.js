import React from 'react'
import {Route, Switch} from 'react-router-dom'
import ChatList from '../containers/chat/chatList/ChatList'
import {Register} from '../containers/register/Register'
import {Login} from '../containers/login/Login'

const Content = () => {
    return (
        <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login} />
            <Route path="/" component={ChatList} />
        </Switch>
    )
}

export default Content
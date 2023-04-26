import './App.css'
import React from 'react'

import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Main from '../template/Main'
import Footer from '../template/Footer'
import Header from '../template/Header'

export default props =>
<div className="app">
    <Logo/>
    <Nav/>
    <Header/>
    <Main/>
    <Footer/>
</div>
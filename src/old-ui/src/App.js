import React from 'react'
import './App.css'  // contains styles for the app
import './icons/index.css' // contains icon-class to display small icon to the left of the element
import './generell.css'  // contains generell styles (ex. for tables)
import './ui_components/index.css'  // contains styles for ui-components like <Loader>
import MenuBar from './menubar'
import HomeFeed from './homefeed'
import WebFooter from './webfooter'


export default class App extends React.Component {
    render(){
        return <>
            <MenuBar />
            <HomeFeed />
            <WebFooter />
        </>
    }
}

import React from "react"
import './index.css'


export default class MenuBar extends React.Component {
    render(){
        return <div className="menubar">
            {/* this link should reload the page (equal to reload) */}
            <a href=".">
                <img src="logo512.png" alt="logo" />
            </a>
            <h1 className="no-select">
                PlayerG9
            </h1>
        </div>
    }
}

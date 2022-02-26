import React from "react"
import './index.css'


export default class WebFooter extends React.Component {
    render(){
        return <div className="footer">
            <div>
                <Link url="https://github.com/PlayerG9">Github</Link>
            </div>
        </div>
    }
}


function Link(props){
    return <a href={props.url} target="_blank" rel="noreferrer">{props.children}</a>
}

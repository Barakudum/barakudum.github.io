import React from "react"
import './index.css'
import Link from "../ui_components/link"


export default class WebFooter extends React.Component {
    render(){
        return <div className="footer">
            <div>
                <Link className="icon-github" url="https://github.com/PlayerG9">Github</Link>
            </div>
        </div>
    }
}

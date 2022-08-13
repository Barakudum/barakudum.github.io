import React from "react"


export default class CopyButton extends React.Component {
    render(){
        return <button onClick={this.copyContent}>
            {this.props.children}
        </button>
    }

    copyContent(){
        navigator.clipboard.writeText(this.props.children)
    }
}

import React from 'react'


export default class FlipCard extends React.Component {
    render(){
        if(this.props.children?.length !== 2)
            return <p style={{backgroundColor: "red"}}>invalid children ({'<FlipCard>'})</p>
        
        return <div className="flip-card">
            <div className="flip-card-inner">
                {this.addClass(this.props.children[0], 'flip-card-front')}
                {this.addClass(this.props.children[1], 'flip-card-back')}
            </div>
        </div>
    }

    addClass(child, className){
        const props = {
            ...child.props
        }
        props.className += ` ${className}`

        return React.cloneElement(child, props)
    }
}

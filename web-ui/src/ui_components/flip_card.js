import React from 'react'


export default class FlipCard extends React.Component {
    render(){
        if(this.props.children?.length !== 2)
            throw Error('invalid children')
        
        return <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    {this.props.children[0]}
                </div>
                <div className="flip-card-back">
                    {this.props.children[1]}
                </div>
            </div>
        </div>
    }
}
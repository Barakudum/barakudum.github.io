import React from 'react'


export default class Loader extends React.Component {
    render(){
        var size = this.getSize()
        return <div className="ui-loader" style={{width: size, height: size}} />
    }

    getSize(){
        switch(this.props.size){
            case 'smaller':
                return 20
            case 'small':
                return 40
            case 'normal':  // equal to default
                return 60
            case 'big':
                return 80
            case 'bigger':
                return 100
            default:
                return 60
        }
    }
}

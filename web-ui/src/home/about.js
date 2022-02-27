import React from "react"


export default class AboutMe extends React.Component {
    render(){
        return <div className="aboutme">
            <AboutMe_Text />
            <AboutMe_OperatingSystems />
            <AboutMe_LanguageAndTools />
        </div>
    }
}


class AboutMe_Text extends React.Component {
    render(){
        return <>
            <h2>I'm a Developer</h2>
            <p>I'm currently learning everything</p>
            <p>I'm looking to collaborate with other content creators</p>
        </>
    }
}


class AboutMe_OperatingSystems extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            operatingSystems: []
        }
    }

    componentDidMount(){
        this.loadOperatingSystems()
    }

    render(){
        return <>
            <h2>Known Operating systems</h2>
            {this.state.operatingSystems.map((os, key) => <InfoIcon key={key} data={os} />)}
        </>
    }

    loadOperatingSystems(){
        fetch('/static_data/operating_systems.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    operatingSystems: data
                })
            })
    }
}


class AboutMe_LanguageAndTools extends React.Component {
    render(){
        return <>
            <h2>Languages and Tools</h2>
        </>
    }
}



class InfoIcon extends React.Component {
    render(){
        const data = this.props.data
        return <div className="info-icon tooltip">
            <a href={data.link} target="_blank" rel="norefferrer">
                <img src={data.image} alt={data.display} width="" />
            </a>
            <span className="tooltiptext">{data.display}</span>
        </div>
    }
}

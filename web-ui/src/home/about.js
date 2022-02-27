import React from "react"


export default class AboutMe extends React.Component {
    render(){
        return <div className="aboutme">
            <AboutMeText />
            <AboutMeOperatingSystems />
            <AboutMeLanguageAndTools />
        </div>
    }
}


class AboutMeText extends React.Component {
    render(){
        return <>
            <h2>I'm a Developer</h2>
            <p>I'm currently learning everything</p>
            <p>I'm looking to collaborate with other content creators</p>
        </>
    }
}


class AboutMeOperatingSystems extends React.Component {
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


class AboutMeLanguageAndTools extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            languagesAndTools: []
        }
    }

    componentDidMount(){
        this.loadLanguagesAndTools()
    }

    render(){
        return <>
            <h2>Languages and Tools</h2>
            {this.state.languagesAndTools.map((group, key) => <div key={key}>
                {group.map((element, key) => <InfoIcon key={key} data={element} />)}
            </div>)}
        </>
    }

    loadLanguagesAndTools(){
        fetch('/static_data/languages_and_tools.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    languagesAndTools: data
                })
            })
    }
}



class InfoIcon extends React.Component {
    render(){
        const data = this.props.data
        return <div className="info-icon tooltip">
            <a href={data.link} target="_blank" rel="noreferrer">
                <img src={data.image} alt={data.display} width="" />
            </a>
            <span className="tooltiptext">{data.display}</span>
        </div>
    }
}

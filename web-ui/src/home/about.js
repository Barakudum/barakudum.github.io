import React from "react"
import ChipCard from "../ui_components/chip_card"


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
            <h1>HomeFeed PlayerG9</h1>
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
            <div style={{}}>
                {this.state.operatingSystems.map((os, key) => <ChipCard key={key} data={os} />)}
            </div>
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
            {this.state.languagesAndTools.map((group, key) => 
                <div key={key}>
                    {group.map((element, key) => <ChipCard key={key} data={element} />)}
                </div>
            )}
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


// /* about.js */
// .info-icon {
//     margin: 10px;
// }
// .info-icon img {
//     height: 30px;
// }
// class InfoIcon extends React.Component {
//     render(){
//         const data = this.props.data
//         return <div className="info-icon tooltip">
//             <a href={data.link} target="_blank" rel="noreferrer">
//                 <img src={data.image} alt={data.display} width="" />
//             </a>
//             <span className="tooltiptext">{data.display}</span>
//         </div>
//     }
// }

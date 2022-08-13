import React from "react"
import ChipCard from "../ui_components/chip_card"


export default class AboutMe extends React.Component {
    render(){
        return <div className="aboutme parallax">
            <AboutMeText />
            <AboutMeOperatingSystems />
            <AboutMeLanguageAndTools />
            <PythonLibrarys />
            <JavascriptLibrarys />
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
            <div className="chipcard-list">
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
                <div className="chipcard-list" key={key}>
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


class PythonLibrarys extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            pythonLibrarys: []
        }
    }

    componentDidMount(){
        this.loadPythonLibrarys()
    }

    render(){
        return <>
            <h2>Python Librarys</h2>
            <div className="chipcard-list">
                {this.state.pythonLibrarys.map((element, key) => 
                    <ChipCard key={key} data={element} />
                )}
            </div>
        </>
    }

    loadPythonLibrarys(){
        fetch('/static_data/python_librarys.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    pythonLibrarys: data
                })
            })
    }
}


class JavascriptLibrarys extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            javascriptLibrarys: []
        }
    }

    componentDidMount(){
        this.loadJavascriptLibrarys()
    }

    render(){
        return <>
            <h2>Javascript Librarys</h2>
            <div className="chipcard-list">
                {this.state.javascriptLibrarys.map((element, key) => 
                    <ChipCard key={key} data={element} />
                )}
            </div>
        </>
    }

    loadJavascriptLibrarys(){
        fetch('/static_data/javascript_librarys.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    javascriptLibrarys: data
                })
            })
    }
}

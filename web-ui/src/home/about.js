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
    render(){
        return <>
            <h2>Known Operating systems</h2>
        </>
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

}

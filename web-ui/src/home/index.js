import React from 'react'
import './index.css'
import AboutMe from './about'
import PythonPackages from './python_packages'
import GitProjects from './gitprojects'


export default class HomeFeed extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return <div className='homefeed'>
            <h1>HomeFeed PlayerG9</h1>
            <AboutMe />
            <PythonPackages />
            <GitProjects />
        </div>
    }
}

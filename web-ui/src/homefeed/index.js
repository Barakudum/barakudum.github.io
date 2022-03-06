import React from 'react'
import './index.css'
import AboutMe from './about'
import Creations from './creations'
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
            <AboutMe />
            <Creations />
            <PythonPackages />
            <GitProjects />
        </div>
    }
}

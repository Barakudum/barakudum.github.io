import React from "react"
import Link from "../ui_components/link"


export default class PythonPackages extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            projects: []
        }
    }

    componentDidMount(){
        this.loadProjects()
    }

    render(){
        return <div className="top-hr">
            <h1>Python Packages</h1>
            <div className="grid">
                {this.state.projects.map((project, key) => <Package key={key} data={project} />)}
            </div>
        </div>
    }

    loadProjects(){
        fetch('/static_data/python_packages.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    projects: data
                })
            })
    }
}


class Package extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            iconUrl: null
        }
    }

    componentDidMount(){
        this.findIconUrl()
    }

    render(){
        const project = this.props.data

        return <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front python-package-card-front">
                    <h1>{project.display}</h1>
                    <img src={this.state.iconUrl} />
                </div>
                <div className="flip-card-back python-package-card-back">
                    <p>{project.description ?? "no description available"}</p>
                    {project.pypi_name ?
                        <p>Installation: <code>pip install {project.pypi_name}</code> {project.pip_installable === false && "soon"}</p>
                        :
                        <p>Not installable via pip</p>
                    }
                    <div className="local-footer">
                        <Link url={"https://pypi.org/project/" + project.pypi_name + "/"}>PyPi.org</Link>
                        <Link url={"https://github.com/PlayerG9/" + project.display + "#readme"}>Github Repo</Link>
                    </div>
                </div>
            </div>
        </div>
    }
    
    findIconUrl(){
        // this function loads the content of the git-repo README
        // and attempts to find the first <img src=url>
        const project = this.props.data
        fetch('https://raw.githubusercontent.com/PlayerG9/' + project.display + '/main/README.md')
            .then((response) => response.text())
            .then((text) => {
                var re = /<img.*src="(?<url>[a-z0-9:/\.]+)".*>/i;
                const match = text.match(re)
                if(match){
                    this.setState({
                        iconUrl: match[1]
                    })
                }
            })
    }
}

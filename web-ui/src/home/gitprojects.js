import React from "react"
import Link from "../ui_components/link"
import FlipCard from "../ui_components/flip_card"


export default class GitProjects extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            repos: []
        }
    }

    componentDidMount(){
        this.loadRepos()
    }

    render(){
        return <div className="top-hr gitprojects parallax">
            <h1>GitProjects</h1>
            <div className="grid">
                {this.state.repos.map((repo, key) => <Repo key={key} data={repo} />)}
            </div>
        </div>
    }

    loadRepos(){
        fetch('https://api.github.com/users/PlayerG9/repos')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    repos: data
                })
            })
    }
}


class Repo extends React.Component {
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
        const repo = this.props.data
        const imgUrl = "https://opengraph.githubassets.com/32e88f7df03756f8001bf1fb87cf789c1397014e4cb2a1506d0b077c5f73aa92/"
        return <FlipCard>
            <img className="gitrepo-front" src={imgUrl + repo.full_name} alt={repo.name} />
            {/* <div className="gitrepo-front">
                <h1>{repo.name}</h1>
                <img src={this.state.iconUrl} alt="" />
            </div> */}
            {/* position: relative is needed for local-footer */}
            <div className="gitrepo-back" style={{position: "relative", backgroundImage: "url(" + this.state.iconUrl + ")"}}>
                <p>{repo.description ?? "no description available"}</p>
                {/* <img src={this.state.iconUrl} alt="" /> */}
                <div className="gitrepo-stats">
                    <pre>
                        Language:    {repo.language ?? 'unknown'}<br/>
                        Created at:  {this.formatDate(repo.created_at)}<br/>
                        Last Update: {this.formatDate(repo.updated_at)}
                    </pre>
                </div>
                <div className="local-footer">
                    {repo.homepage &&
                        <Link className="icon-web" url={repo.homepage}>Project Homepage</Link>
                    }
                    <Link className="icon-github" url={repo.html_url + "#readme"}>Github Repo</Link>
                </div>
            </div>
        </FlipCard>
    }

    formatDate(dateString){
        var timestamp = Date.parse(dateString)
        if(isNaN(timestamp))
            return '~err~'
        var date = new Date(timestamp)
        return date.toLocaleDateString()
    }

    findIconUrl(){
        // this function loads the content of the git-repo README
        // and attempts to find the first <img src=url>
        const repo = this.props.data
        fetch('https://raw.githubusercontent.com/PlayerG9/' + repo.name + '/main/README.md')
            .then((response) => response.text())
            .then((text) => {
                var re = /<img.*src="(?<url>[a-z0-9:/.]+)".*>/i;
                const match = text.match(re)
                if(match){
                    this.setState({
                        iconUrl: match[1]
                    })
                    return
                }
            })
    }
}

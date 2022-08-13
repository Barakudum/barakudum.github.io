import React from "react"
import Link from "../ui_components/link"
import FlipCard from "../ui_components/flip_card"
import gitIcon from '../icons/github.png'
import GitColors from './github_language_colors'


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
            <h1>Github</h1>
            <img src="https://github-readme-stats.vercel.app/api?username=PlayerG9&show_icons=true&theme=vue-dark" alt="" />
            <h1>Git-Projects</h1>
            <div className="grid">
                {this.state.repos.map((repo, key) => <Repository key={key} repo={repo} />)}
            </div>
        </div>
    }

    loadRepos(){
        // sort: [created,updated,pushed,full_name(default)]
        // updated is when repo-metadata has changed (eg description)
        // after a 100 repos this code needs to get updated
        fetch('https://api.github.com/users/PlayerG9/repos?sort=pushed&per_page=100')
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    repos: result
                })
            })
    }
}


class Repository extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            iconUrl: null,
            contributorCount: null
        }
    }

    componentDidMount(){
        this.findIconUrl()
        this.loadContributors()
    }

    render(){
        const repo = this.props.repo
        return <FlipCard>
            {/* front of the flip-card*/}
            <div className="gitrepo-front">
                <h1>{repo.name}</h1>
                <img className="repo-icon" src={this.state.iconUrl} alt="" />
                <div className="stats">
                    <span>👥{this.state.contributorCount}</span>
                    <span>👁{repo.watchers_count}</span>
                    <span>⚠{repo.open_issues_count}</span>
                    <span>★{repo.stargazers_count}</span>
                    <span>⑂{repo.forks_count}</span>
                </div>
                <img className="git-icon" src={gitIcon} alt="" />
                <RepoLanguages repo={repo} />
            </div>
            {/* back of the flip-card */}
            {/* position: relative is needed for local-footer */}
            <div className="gitrepo-back local-footer-container">
                <p className="description">{repo.description ?? "no description available"}</p>
                <pre className="stats">
                    Language:    {repo.language ?? 'unknown'}<br/>
                    Created at:  {this.formatDate(repo.created_at)}<br/>
                    Last Update: {this.formatDate(repo.updated_at)}
                </pre>
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
        const repo = this.props.repo
        fetch(`https://raw.githubusercontent.com/${repo.full_name}/main/README.md`)
            .then((response) => response.text())
            .then((text) => {
                var re = /<img .*src="(?<url>[a-z0-9\-:/.]+)" .*\/>/i;
                const match = text.match(re)
                if(match){
                    this.setState({
                        iconUrl: match[1]
                    })
                    return
                }
            })
            .catch((error) => {
                console.error('Failed to fetch repo-readme', repo.full_name, error)
            })
    }

    loadContributors(){
        const repo = this.props.repo
        fetch(`https://api.github.com/repos/${repo.full_name}/contributors`)
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    contributorCount: result.length
                })
            })
    }
}


class RepoLanguages extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            languages: null
        }
    }

    componentDidMount(){
        this.loadLanguages()
    }

    render(){
        const languages = this.state.languages

        // is null/undefined or contains no keys/languages
        if(!languages || Object.keys(languages).length === 0)
            return null

        let total = 0
        for(let size of Object.values(languages)){
            total += size
        }

        return <div className="color-bar">
            {Object.keys(languages).map(language => 
                <div key={language} className="color" style={{width: `${Math.round(languages[language] / total * 100)}%`, backgroundColor: GitColors[language]}} />
            )}
        </div>
    }

    loadLanguages(){
        const repo = this.props.repo

        fetch(`https://api.github.com/repos/${repo.full_name}/languages`)
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    languages: result
                })
            })
    }
}

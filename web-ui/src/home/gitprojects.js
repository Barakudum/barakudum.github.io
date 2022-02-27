import React from "react"


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
        return <div className="top-hr">
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
    render(){
        const repo = this.props.data
        return <div className="repo">
            <h1>{repo.name}</h1>
            <p>{repo.description}</p>
            <p>Created at: {this.formatDate(repo.created_at)}</p>
            <p>Last Update: {this.formatDate(repo.updated_at)}</p>
        </div>
    }

    formatDate(dateString){
        var timestamp = Date.parse(dateString)
        if(isNaN(timestamp))
            return '~err~'
        var date = new Date(timestamp)
        return date.toLocaleDateString()
    }
}

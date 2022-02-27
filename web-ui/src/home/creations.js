import React from "react"
import Link from "../ui_components/link"


export default class Creations extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            creations: []
        }
    }

    componentDidMount(){
        this.loadCreations()
    }

    render(){
        return <div className="top-hr">
            <h1>Creations</h1>
            {this.state.creations.map((creation, key) => <Creation key={key} data={creation} />)}
        </div>
    }

    loadCreations(){
        fetch('/static_data/creations.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    creations: data
                })
            })
    }
}


class Creation extends React.Component {
    render(){
        const creation = this.props.data
        return <div className="creation-chip">
            <img src={creation.icon_url} alt={creation.display} width="" />
            <div className="tooltip">
                <a href={creation.link} target="_blank" rel="norefferer">
                    <p>{creation.display}</p>
                </a>
                <span className="tooltiptext">{creation.description}</span>
            </div>
        </div>
    }
}

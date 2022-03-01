import React from "react"
import ChipCard from "../ui_components/chip_card"


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
        return <div className="top-hr creations parallax">
            <h1>Creations</h1>
            {this.state.creations.map((creation, key) => <ChipCard key={key} data={creation} />)}
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

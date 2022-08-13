import React from "react"


export default class ChipCard extends React.Component {
    /*
    data: {
        icon_url: "url",
        display: "string",
        description?: "text",
        link?: "url"
    }
    */
    render(){
        const data = this.props.data

        var text

        if(data.link)
            text = <a href={data.link} target="_blank" rel="noreferrer">
                <p>{data.display}</p>
            </a>
        else
            text = <p>{data.display}</p>

        if(data.description)
            text = <div className="tooltip">
                {text}
                <span className="tooltiptext">{data.description}</span>
            </div>

        return <div className="chip-card">
            <img src={data.icon_url} alt="" />
            {text}
        </div>
    }
}

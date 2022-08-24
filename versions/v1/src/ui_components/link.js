export default function Link(props){
    return <a className={"classic-link " + props.className} style={props.style} href={props.url} target="_blank" rel="noreferrer">{props.children}</a>
}

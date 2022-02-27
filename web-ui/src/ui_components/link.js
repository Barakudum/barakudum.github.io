export default function Link(props){
    return <a className={props.className ?? "classic-link"} style={props.style} href={props.url} target="_blank" rel="noreferrer">{props.children}</a>
}

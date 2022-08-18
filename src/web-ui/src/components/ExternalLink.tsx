export interface LinkProps {
    className?: string
    url: string,
    children: any
}


export default function ExternalLink(props: LinkProps){
    const className = `external-link ${props.className}`
    return <a className={className} href={props.url} target="_blank" rel="noreferrer">
        {props.children}
    </a>
}

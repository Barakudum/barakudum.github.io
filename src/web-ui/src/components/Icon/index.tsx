import './style.scss'
import fallbackImage from '../../assets/problem.png'

import github from './assets/github.png'
import pypi from './assets/pypi.png'
import python from './assets/python.png'
import website from './assets/website.png'



interface IconProps {
    className?: string,
    name: string
}


interface stringIndex {
    [index: string]: any
}


const iconIndex: stringIndex = {
    github, pypi, python, website
}


export default function Icon(props: IconProps){
    const className = `icon ${props.className ?? ""}`
    const src = iconIndex[props.name] ?? fallbackImage
    return <img className={className} src={src} alt=""/>
}

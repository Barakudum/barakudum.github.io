import { useState } from "react"
import problemIcon from '../assets/problem.png'


export interface FallbackImageProps {
    className?: string
    srcs: (string|null)[]
}


export default function FallbackImage(props: FallbackImageProps){
    const [srcIndex, setSrcIndex] = useState(0)
    const imageSrc = props.srcs.filter(e => e !== null)[srcIndex]
    const fadedClass = imageSrc ? "" : "faded"
    const className = `fallback-image ${props.className ?? ""} ${fadedClass}`
    
    function onError(){
        setSrcIndex((prev) => prev + 1)
    }

    return <img className={className} src={imageSrc ?? problemIcon} alt="" loading="lazy" onError={onError}/>
}

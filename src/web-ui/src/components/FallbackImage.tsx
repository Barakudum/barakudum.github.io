import { useState } from "react"
import problemIcon from '../assets/problem.png'


export interface FallbackImageProps {
    className?: string
    imageSrc: string,
    fallbackSrc?: string
}



export default function FallbackImage(props: FallbackImageProps){
    const [useFallback, setUseFallback] = useState(false)
    const fadedClass = (useFallback && !props.fallbackSrc) ? "faded" : ""
    const className = `fallback-image ${props.className ?? ""} ${fadedClass}`
    
    const imageSrc = !useFallback ? props.imageSrc : (props.fallbackSrc ?? problemIcon)

    function onError(){
        setUseFallback(true)
    }

    return <img className={className} src={imageSrc} alt="" loading="lazy" onError={onError}/>
}

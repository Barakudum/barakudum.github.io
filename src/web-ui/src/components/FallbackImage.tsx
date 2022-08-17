import { useState } from "react"

export interface FallbackImageProps {
    imageSrc: string,
    fallbackSrc: string
}



export default function FallbackImage(props: FallbackImageProps){
    const [imageSrc, setImageSrc] = useState(props.imageSrc)

    function onError(){
        setImageSrc(props.fallbackSrc)
    }

    return <img className="fallback-image" src={imageSrc} alt="" loading="lazy" onError={onError}/>
}

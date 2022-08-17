
export interface FallbackImageProps {
    imageSrc: string,
    fallbackSrc: string
}


export default function FallbackImage(props: FallbackImageProps){
    return <object className="fallback-image" data={props.imageSrc} type="image/png">
        <img className="fallback" src={props.fallbackSrc} alt=""/>
    </object>
}

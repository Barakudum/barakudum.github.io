import './style.scss'
import loadingGif from './loading.gif'


export interface LoaderProps {
    size?: string
}


export default function IsLoading(props: LoaderProps){
    const size = props.size ?? "80px"

    const style = {
        width: size,
        height: size
    }

    return <div className="isloading">
        <img src={loadingGif} alt="" style={style} />
    </div>
}

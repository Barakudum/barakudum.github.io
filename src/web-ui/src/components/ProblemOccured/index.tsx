import './style.scss'
import problemImage from '../../assets/problem.png'


export default function ProblemOccured(){
    return <div className='problem-occured'>
        <Icon/>
        <span>
            Problem Occured
        </span>
        <Icon/>
    </div>
}


function Icon(){
    return <img src={problemImage} alt=""/>
}

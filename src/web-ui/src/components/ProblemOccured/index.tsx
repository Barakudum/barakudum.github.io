import './style.scss'
import problemImage from '../../assets/problem.png'


export default function ProblemOccured(){
    return <div className='problem-occured'>
        <Icon/>
        <span className='text'>
            Problem Occured
        </span>
        <Icon/>
    </div>
}


function Icon(){
    return <img className='icon' src={problemImage} alt=""/>
}

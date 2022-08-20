import './style.scss'
import PlayerG9  from '../../../assets/PlayerG9.png'


export default function MeScreen(){
    return <div className='me-screen parallax'>
        <div className='text-pane'>
            <div>
                <h1>PlayerG9</h1>
                <h2>A Programmer without a life</h2>
            </div>
        </div>
        <div className='icon-pane'>
            <img className='icon' src={PlayerG9} alt=""/>
        </div>
    </div>
}

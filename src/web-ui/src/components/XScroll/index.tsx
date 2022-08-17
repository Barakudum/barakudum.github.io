import './style.scss'


export default function XScroll(props: {children: any}){
    return <div className='x-scroll-container'>
        <div className='x-scroll'> 
            {props.children}
        </div>
        <div className='x-scroll delayed'>
            {props.children}
        </div>
    </div>
}

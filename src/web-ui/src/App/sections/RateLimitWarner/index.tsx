import './style.scss'
import { useQuery } from 'react-query'
import { getRateLimit } from '../../../apiCommunication'


export default function RateLimitWarner(){
    const request = useQuery(['rate-limit'], () => getRateLimit())

    if(request.isLoading || !request.isSuccess){
        return null
    }

    const data = request.data

    const t = new Date(data.reset * 1000)

    if(data.remaining <= 0){
        // bad
        return <div className='rate-limit-warning'>
            No rate-limit available (until {t.toLocaleTimeString()})
        </div>
    }else if(data.remaining <= 5){
        // warning
        return <div className='rate-limit-info'>
            rate-limit is low
        </div>
    }else{
        // don't care
        return null
    }
}

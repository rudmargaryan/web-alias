import React,{ useState } from 'react'
import './index.scss'

export function First(){
    const [page,setPage] = useState(0)
    if(page === 0){
        return(
            <div className='background__schoole'>
                <div className="background__schoole__title">HELLO...</div>
                <button className='btn btn-next' onClick={()=>setPage(page+1)}>Next</button>
            </div>
        )
    }
    if(page === 1){
        return(
            <div className='background__schoole'>
                <div className="background__schoole__title">For first create teams</div>
                <button className='btn btn-next' onClick={()=>setPage(page+1)}>Next</button>
                <button className='btn btn-back' onClick={()=>setPage(page-1)}>Back</button>
            </div>
        )
    }
    return(
        <div>first</div>
    )
}
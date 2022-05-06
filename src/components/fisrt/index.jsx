import React,{ useState } from 'react'
import './index.scss'

export function First(){
    const [page,setPage] = useState(0)
    function changePage(){
        let thisPage = page
        setPage(3)
        setTimeout(()=>{
            setPage(thisPage+1)
        },2000)
    }
    if(page === 0){
        return(
            <div className='background__schoole'>
                <div className="background__schoole__title">HELLO...</div>
                <button className='btn btn-next' onClick={()=>changePage()}>Next</button>
            </div>
        )
    }
    if(page === 1){
        return(
            <div className='background__schoole'>
                <div className="background__schoole__title">For first create teams</div>
                <button className='btn btn-next' onClick={()=>changePage()}>Next</button>
                <button className='btn btn-back' onClick={()=>setPage(page-1)}>Back</button>
            </div>
        )
    }
        return(
            <div className='background__schoole'>
                <div className="background__schoole__title">Loading...</div>
            </div>
        )
}
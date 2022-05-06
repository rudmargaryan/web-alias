import React,{ useState } from 'react'
import './index.scss'

export function First(){
    const [page,setPage] = useState(0)
    function changePage(pageNext){
        setPage(3)
        setTimeout(()=>{
            setPage(pageNext)
        },500)
    }
    if(page === 0){
        return(
            <div className='background__schoole'>
                <div className="background__schoole__title">HELLO...</div>
                <button className='btn btn-next' onClick={()=>changePage(page+1)}>Next</button>
            </div>
        )
    }
    if(page === 1){
        return(
            <div className='background__schoole'>
                <div className="background__schoole__title">For first create teams</div>
                <button className='btn btn-next' onClick={()=>changePage(page+1)}>Next</button>
                <button className='btn btn-back' onClick={()=>changePage(page-1)}>Back</button>
            </div>
        )
    }
        return(
            <div className='background__schoole'>
                <div className="background__schoole__title">
                <div id="loading-bar-spinner" className="spinner"><div className="spinner-icon"></div></div>
                </div>
            </div>
        )
}
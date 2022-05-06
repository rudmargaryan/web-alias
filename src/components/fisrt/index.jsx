import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearFirstVisit } from '../../func/isFirstVisit'
import './index.scss'

export function First(){
    const [page,setPage] = useState(0)
    const naviagte = useNavigate()
    function changePage(pageNext){
        setPage('loader')
        setTimeout(()=>{
            setPage(pageNext)
        },500)
    }
    if(page === 0){
        return(
            <div className='background__schoole'>
                <div className="background__schoole__title"><span>H</span><span>E</span><span>L</span><span>L</span><span>O</span><span>!</span></div>
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
    if(page === 2){
        return(
            <div className='background__schoole'>
                <div className="background__schoole__title">Second select more settings</div>
                <button className='btn btn-next' onClick={()=>changePage(page+1)}>Next</button>
                <button className='btn btn-back' onClick={()=>changePage(page-1)}>Back</button>
            </div>
        )
    }
    if(page === 3){
        return(
            <div className='background__schoole'>
                <div className="background__schoole__title">Click to start button</div>
                <button  className='btn btn-next' onClick={()=>clearFirstVisit(naviagte)}>{`Let's Go`}</button>
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
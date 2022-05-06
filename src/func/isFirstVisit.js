export const isFirstVisited = function(){
    let isFirst = localStorage.getItem('isFirst')
    return !!isFirst 
}

export const clearFirstVisit = function(navigate){
    localStorage.setItem('isFirst',true)
    navigate('/')
    window.location.reload()
}
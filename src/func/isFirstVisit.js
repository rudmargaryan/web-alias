export const isFirstVisited = function(){
    let isFirst = localStorage.getItem('isFirst')
    return !!isFirst 
}
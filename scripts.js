
function responsive_menu(){

    var e = document.getElementById('nav-add');
    if(e.className === 'nav-list'){
        e.className += " info";    
    }
    else{
        e.className = 'nav-list';
    }
} 



window.addEventListener('load', (e)=>{
    let theme =localStorage.getItem('theme');
    theme == null ? setTheme('blue') : setTheme(theme);
    
    let themeDots= document.getElementsByClassName('theme-dot');
    
    for(var i=0; themeDots.length > i; i++){
        themeDots[i].addEventListener('click', function(){
            setTheme(this.dataset.mode);
        });
    };
});

function setTheme(mode){
    let theme_style = document.getElementById('theme-style');
    mode == 'light' ? theme_style.href = 'style.css' : theme_style.href=`${mode}.css`; 
    localStorage.setItem('theme', mode);
};

# My Portfolio Website

This is my online portfolio website that I have coded in HTML, CSS and JavaScript for interactivity.

## Welcome! 👋

Thanks for checking out my work .

### Built with

- Semantic HTML 5 Markup
- CSS
- JavaScript
- Flexbox

### What I have learned

Here is the code snippet I've used in my project that I have learned a lot from:

```code
    window.addEventListener('load', (e)=>{
        let theme =localStorage.getItem('theme');
            theme == null ? setTheme('blue') : setTheme(theme);

    let themeDots= document.getElementsByClassName('theme-dot');

    for(var i=0; themeDots.length > i; i++){
        themeDots[i].addEventListener('click', function(){
            setTheme(this.dataset.mode);
});

function setTheme(mode){
    let theme_style = document.getElementById('theme-style');
        mode == 'light' ? theme_style.href = 'style.css' : theme_style.href=`${mode}.css`;
            localStorage.setItem('theme', mode);
};

```

I have learned how to use the conditional ternary operator to run my javaScript function() while setting the theme mode. Here is the code snippet example

```javaScript Code
    function setTheme(mode){
        let theme_style = document.getElementById('theme-style');
            mode == 'light' ? theme_style.href = 'style.css' : theme_style.href=`${mode}.css`;
                localStorage.setItem('theme', mode);
};
```
```ternary operator
    mode == 'light' ? theme_style.href = 'style.css' : theme_style.href=`${mode}.css`;

```

I have also learned to use the javaScript ES6 arrow function.Here is the code snippet example

```javaScript
    window.addEventListener('load', (e)=>{
        let theme =localStorage.getItem('theme');
            theme == null ? setTheme('blue') : setTheme(theme);
};
```

I have also learned how to use a for loop. Here is the code snippet example

```javaScript
    for(var i=0; themeDots.length > i; i++){
        themeDots[i].addEventListener('click', function(){
            setTheme(this.dataset.mode);
        });
    };


```

### Continued development

I will continue learning how to use local storage to store data for my portfolio projects as well as my blogs.This will help me to maximize the frontend skill to my level best and become a global developer.

### Author

- Website - [Kyle Gichez](https://www.github.com/KyleGichez)
- Frontend Mentor - [@KyleGichez](https://www.frontendmentor.io/profile/KyleGichez)
- Twitter - [@KyleGichez](https://www.twitter.com/KyleGichez)

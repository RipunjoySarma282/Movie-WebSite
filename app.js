const arrows=document.querySelectorAll('.arrow');
const movielists=document.querySelectorAll('.movie-list');

arrows.forEach((arrow,i)=>{
    const itemNumber=movielists[i].querySelectorAll("img").length;
    var clickCounter=0;
    arrow.addEventListener("click",()=>{
        const ratio=Math.floor(window.innerWidth/330);  
        clickCounter++;

        if(itemNumber - (4+clickCounter)+(4-ratio)>=0)
            {
                movielists[i].style.transform=`translateX(${
                movielists[i].computedStyleMap().get("transform")[0].x.value -360
                }px)`;
            }
        else    
            {
                movielists[i].style.transform="translateX(0)";
                clickCounter=0;
            }
    });

    console.log(movielists[i].querySelectorAll("img").length)
});

const ball=document.querySelector('.toggle-ball');
const items=document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle, .toggle-ball");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
})
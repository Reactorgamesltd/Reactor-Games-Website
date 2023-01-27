console.log("Hello World");

function leftScroll()
{
    debugger;
    const left = document.querySelector(".card-game__cards-list");
    left.scrollBy(-200,0);
}

function rightScroll()
{
    const right = document.querySelector(".card-game__cards-list");
    right.scrollBy(200,0);
}
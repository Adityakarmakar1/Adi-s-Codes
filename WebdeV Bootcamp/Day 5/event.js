function handleClick(){
    alert("Button Clicked")
}

//recommended way
document.getElementById("clickme").addEventListener("click", handleClick)

function handlemouseOver(event){
    console.log(event)
}

document.getElementById("start").addEventListener("click", function handleClick(){
    document.addEventListener("mouseover", handlemouseOver)
})

document.addEventListener("keyup", function(e){
    console.log(e.key);
})
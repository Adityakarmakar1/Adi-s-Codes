// function handleClick(){
//     alert("Button Clicked")
// }

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

//Capturing events:
document.querySelector(".parent").addEventListener("click", function(){
    console.log("parent clicked");
})
document.querySelector(".child").addEventListener("click", function(){
    console.log("child clicked");
})
document.getElementById("subchild").addEventListener("click", function(event){
    console.log("subchild clicked");
    event.stopPropagation
})

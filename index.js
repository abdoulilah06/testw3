function menu(){
    let menu = document.getElementById("menu")
    let nav2 = document.getElementById("nav2")
    menu.classList.toggle("onmenu")
    nav2.classList.toggle("onnav2")
}
function se(){
    let tyi = document.getElementById("tyi")
    tyi.classList.toggle("onty")
    
}
function tit(){
    let down = document.getElementById("down")
    window.scrollTo({
        top:960,
        left:0,
        behavior:"smooth",
      })
}
function auth(){
    var up = document.getElementById("up")
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
      })

}

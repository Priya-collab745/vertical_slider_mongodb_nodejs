const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const loadTextHead=document.querySelector('.loading-text-head')
let load = 0
let loadstr='.'
let loadheadstr=''
let int = setInterval(blurring, 60)

function blurring() {
    load++
    loadstr=loadstr+'.'
    if (load%3==2){
        loadstr='.'
    }
    if(load>10){
        loadheadstr='Comingsoon'
    }
    if(load>30){
        loadheadstr='Hurrah!!'
    }
    if(load<10){
        loadheadstr='loading'
    }

    if (load > 99) {
        clearInterval(int)
        loadheadstr=''
    }
    /*console.log('SCALE VALUE--->>>', scale(load, 0, 100, 1, 0))*/

    loadText.innerText = `${loadstr}`

    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 60, 0)}px)`
    loadTextHead.innerText=`${loadheadstr}`
}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
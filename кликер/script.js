let plus = document.getElementById('plus')
let count = document.getElementById('count1')
let num = 0
let bonus = 1 
let stoimost = 500
let povish = document.getElementById('st')

plus.onclick = function(){
    num = num + bonus 
    count.innerHTML = num 
}

let buySmth = document.getElementById('first')

buySmth.onclick = function(){
    if(num >= stoimost){
        num = num-stoimost
        count.innerHTML = num

        stoimost = stoimost*2
        povish.innerHTML = stoimost
        bonus = bonus*2
        
    }
}



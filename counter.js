let num=0;
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
plus.onclick=()=>{
    num+=1;
    document.getElementById('result').innerHTML=num
}
minus.onclick=()=>{
    num-=1;
    document.getElementById('result').innerHTML=num
}
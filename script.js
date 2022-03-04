
const h1 = document.getElementById("tt");

function getTime(){
    const date = new Date()
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const time = `${hour}:${min}:${sec}`
    h1.textContent =time;
   

}
setInterval(getTime,1000);

const h2 = document.getElementById("tt2");

function getTime2(){
    const date = new Date()
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const time = `${hour-8}:${min}:${sec}`
    h2.textContent =time ;
    

}
setInterval(getTime2,1000);


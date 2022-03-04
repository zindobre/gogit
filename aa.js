
const h1 = document.getElementById("time");

function getTime(){
    const date = new Date()
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const time = `${hour}:${min}:${sec}`
    h1.textContent =time;

}

setInterval(getTime,1000);

/*
현재 희망사항은 시간나오는 네비랑 메뉴어사이드를 고정하고 싶은데
메뉴를 클릭하면 새페이지로 이동하게되므로 각 메뉴창에선 사라지게된다.
 

*/

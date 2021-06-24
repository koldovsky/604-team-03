function udateClock(){
const clockContainer = document.querySelector('.clock');
clockContainer.innerHTML = '<b1>'+ new Date().toLocaleTimeString('uk') + '</b1>';
}
setInterval(udateClock, 1000);

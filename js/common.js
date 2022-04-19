'use strict'
// live watch
let t = null;
let lunch = ['중국집','찜닭','닭곰탕','고삐식당','국밥','뜨돈','장도뚝배기'];
function startTime() {
  // console.log('startTime!!!');
  // let elem = document.getElementById('txt');
  // console.log(elem);
  let week = ['(일)','(월)','(화)','(수)','(목)','(금)','(토)'];
  t = setTimeout(startTime, 500);
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = today.getDay();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  // if ( h == 17 && m > 24 || h == 13 && m <= 59 )
  function bgCheck(num) {
    if(num == 2) {
      document.body.style.backgroundImage = 'url(./img/background_lunch.gif)'
      document.getElementById('txt').innerHTML = `<p>Let&acute;s Lunch Time!!!!!!!!<br>${week[d]} ${h}:${m}:${s}</p>`;
    }else if (num == 1){
      document.body.style.backgroundImage = 'url(./img/background_rest.gif)'
      document.getElementById('txt').innerHTML = `<p>지금은 쉬는시간입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
      document.body.style.backgroundColor = '#cb997e'
    }else if (num == 0) {
      document.body.style.backgroundImage = 'url(./img/background_study01.gif)'
      document.body.style.backgroundColor = '#cb997e'
    }
  }
  
  if ( h == 12 && m > 49 || h == 13 && m <= 59 ) {
    bgCheck(2);
    // document.body.style.backgroundImage = 'url(./img/background_lunch.gif)'
    // document.getElementById('txt').innerHTML = `<p>Let&acute;s Lunch Time!!!!!!!!<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 9 && m < 50 ) {
    bgCheck(0);
    // document.body.style.backgroundImage = 'url(./img/background_study01.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    document.getElementById('txt').innerHTML = `<p>지금은 1교시입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 9 && m > 49 || h < 10 ){
    bgCheck(1);
    // document.body.style.backgroundImage = 'url(./img/background_rest.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    // document.getElementById('txt').innerHTML = `<p>지금은 쉬는시간입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 10 && m < 50 ){
    bgCheck(0);
    // document.body.style.backgroundImage = 'url(./img/background_study01.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    document.getElementById('txt').innerHTML = `<p>지금은 2교시입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 10 && m > 49 || h < 11 ){
    bgCheck(1);
    // document.body.style.backgroundImage = 'url(./img/background_rest.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    // document.getElementById('txt').innerHTML = `<p>지금은 쉬는시간입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 11 && m < 50 ){
    bgCheck(0);
    // document.body.style.backgroundImage = 'url(./img/background_study01.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    document.getElementById('txt').innerHTML = `<p>지금은 3교시입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 11 && m > 49 || h < 12 ){
    bgCheck(1);
    // document.body.style.backgroundImage = 'url(./img/background_rest.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    // document.getElementById('txt').innerHTML = `<p>지금은 쉬는시간입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 12 && m < 50){
    bgCheck(0);
    // document.body.style.backgroundImage = 'url(./img/background_study01.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    document.getElementById('txt').innerHTML = `<p>지금은 4교시입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 14 && m < 50){
    bgCheck(0);
    // document.body.style.backgroundImage = 'url(./img/background_study01.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    document.getElementById('txt').innerHTML = `<p>지금은 5교시입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 14 && m > 49 || h < 15 ){
    bgCheck(1);
    // document.body.style.backgroundImage = 'url(./img/background_rest.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    // document.getElementById('txt').innerHTML = `<p>지금은 쉬는시간입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 15 && m < 50){
    bgCheck(0);
    // document.body.style.backgroundImage = 'url(./img/background_study01.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    document.getElementById('txt').innerHTML = `<p>지금은 6교시입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 15 && m > 49 || h < 16 ){
    bgCheck(1);
    // document.body.style.backgroundImage = 'url(./img/background_rest.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    // document.getElementById('txt').innerHTML = `<p>지금은 쉬는시간입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 16 && m < 50){
    bgCheck(0);
    // document.body.style.backgroundImage = 'url(./img/background_study01.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    document.getElementById('txt').innerHTML = `<p>지금은 7교시입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 16 && m > 49 || h < 17 ){
    bgCheck(1);
    // document.body.style.backgroundImage = 'url(./img/background_rest.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    // document.getElementById('txt').innerHTML = `<p>지금은 쉬는시간입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 17 && m < 50){
    bgCheck(0);
    // document.body.style.backgroundImage = 'url(./img/background_study01.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    document.getElementById('txt').innerHTML = `<p>지금은 8교시입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }else if ( h == 17 && m > 49){
    // document.body.style.backgroundImage = 'url(./img/background_rest.gif)'
    // document.body.style.backgroundColor = '#cb997e';
    document.getElementById('txt').innerHTML = `<p>지금은 집에갈시간입니다.<br>${week[d]} ${h}:${m}:${s}</p>`;
  }
}

function checkTime(i) {
  if ( i < 10 ) {
    i = '0' + i;
  }return i;
}

function lunchMenu() {
  let menu = Math.floor(Math.random() * 7);
  return alert(`오늘의 점심은 ${lunch[menu]} 입니다!`);
}

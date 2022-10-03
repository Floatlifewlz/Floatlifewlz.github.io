/* Hello World
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

/*匿名函数
document.querySelector('img').onclick = function() {
    alert('别戳我，我怕疼。');
}
*/

/*箭头函数使用() => 代替 function ()
document.querySelector('html').addEventListener('click', () => {
    alert('别戳我，我怕疼。');
  });
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog.jpg') {
      myImage.setAttribute('src', 'images/cool dog.jpg');
    } else {
      myImage.setAttribute('src', 'images/dog.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
  }
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }
 

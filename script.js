var check = document.querySelector('.checker'),
myContent = document.querySelector('.calendar-container');
function switchTheme(){
  if (check.checked){
    myContent.classList.add('night');
  } else{
    myContent.classList.remove('night');
  }
}
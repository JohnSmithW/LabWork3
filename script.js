var check = document.querySelector('.checker'),
myContent = document.querySelector('body');
function switchTheme(){
  if (check.checked){
    myContent.classList.add('night');
  } else{
    myContent.classList.remove('night');
  }
}
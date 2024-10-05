
document.querySelector('#start')?.addEventListener('click', () => {
  let age: number = 10;
  
  age = document.querySelector('#age').value;

  function multiplyAge(age) {
    return age * 2;
  }

  multiplyAge(age)

})



document.querySelector('#start')?.addEventListener('click', () => {
  let age: number = 10;
  
  age = document.querySelector('#age');

  function multiplyAge(age) {
    return age * 2;
  }

  multiplyAge(age)

})
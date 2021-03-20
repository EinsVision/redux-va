const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
let value = parseInt(number.innerText);

const updateValue = () => {
  number.innerText = value;
}


const handleAdd = () => {
  value += 1; 
  updateValue();
}

const handleMinus = () => {
  value -= 1;
  updateValue();
}

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
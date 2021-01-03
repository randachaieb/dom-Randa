
let input = document.getElementById('myInput');
let addBtn = document.querySelector('.addBtn');
let list = document.getElementById('myUL');


function addToDo() {
  
  let text = document.createTextNode(input.value);
  
  
  let li = document.createElement('li');
  
 
  li.appendChild(text);
  
  
  list.appendChild(li);
 
  
  input.value = '';
  
  
  let removeBtn = document.createElement('button');
  
 
  li.appendChild(removeBtn);
  
 
  removeBtn.innerText = 'x';
  

  removeBtn.addEventListener('click', function () {
    removeBtn.parentElement.remove();
  });
  
  
  removeBtn.setAttribute('class', 'removeBtn');
 
  
  
  li.addEventListener('mouseover', function () {
    li.style.backgroundColor = 'rgb(173, 173, 173)';
  });
  li.addEventListener('mouseout', function () {
    li.style.backgroundColor = ' lightskyblue';
  });
}


addBtn.addEventListener('click', addToDo);





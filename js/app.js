document.addEventListener('DOMContentLoaded', ()=>{


  // const allRedElements=document.querySelectorAll('.red');
  // console.dir(allRedElements);
  // console.log(allRedElements);

  // const redListItem=document.querySelector('li.red');
  // console.log(redListItem);
  // redListItem.textContent='RED!!!';
  // redListItem.classList.add('bold')
const newListItem=document.createElement('li');
newListItem.textContent='Purple';
newListItem.classList.add('purple');

//get a hold of where to put new list item and then
const list=document.querySelector('ul');
//attach item to list
list.appendChild(newListItem)


  // const redElement=document.querySelector('li.red');
  // console.log(redElement);
  // const title=document.querySelector('h1');
  // title.textContent='JavaScript says Change the DOM!!';
  //
  // const paragraph=document.querySelector('#welcome-paragraph');
  // console.log('console.log',paragraph);
  // console.dir(paragraph);
});

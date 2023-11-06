const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngradients = document.getElementById('ingredients');
const listItemP = document.createElement('li');
listItemP.classList.add('item');
listItemP.textContent = "Potatoes";
const listItemM = document.createElement('li');
listItemM.classList.add('item');
listItemM.textContent = "Mushrooms";
const listItemG = document.createElement('li');
listItemG.classList.add('item');
listItemG.textContent = "Garlic";
const listItemT = document.createElement('li');
listItemT.classList.add('item');
listItemT.textContent = "Tomatos";
const listItemH = document.createElement('li');
listItemH.classList.add('item');
listItemH.textContent = "Herbs";
const listItemC = document.createElement('li');
listItemC.classList.add('item');
listItemC.textContent = "Condiments";
listOfIngradients.prepend(listItemP, listItemM, listItemG, listItemT, listItemH, listItemC);


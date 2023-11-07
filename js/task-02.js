const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngradients = document.getElementById('ingredients');
const arrayItem = [];
for (let i = 0; i < ingredients.length; i++){
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredients[i];
  arrayItem.push(item);
}
 listOfIngradients.append(...arrayItem);



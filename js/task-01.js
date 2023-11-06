const categoryList = document.getElementById('categories');
console.log(`Number of categories: ${categoryList.children.length}`);
const firstItem = categoryList.firstElementChild;
console.log(`Category: ${firstItem.firstElementChild.textContent}`);
console.log(`Elements: ${firstItem.lastElementChild.children.length}`);
const secondItem = firstItem.nextElementSibling;
console.log(`Category: ${secondItem.firstElementChild.textContent}`);
console.log(`Elements: ${secondItem.lastElementChild.children.length}`);
const lastItem = categoryList.lastElementChild;
console.log(`Category: ${lastItem.firstElementChild.textContent}`);
console.log(`Elements: ${lastItem.lastElementChild.children.length}`);


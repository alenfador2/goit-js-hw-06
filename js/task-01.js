const categoryList = document.getElementById('categories');

console.log(`Number of categories: ${categoryList.children.length}`);
for (let i = 0; i < categoryList.children.length; i++){
    const categoryItem = categoryList.children[i];
    const categoryName = categoryItem.firstElementChild.textContent;
    const numberOfCategories = categoryItem.lastElementChild.children.length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numberOfCategories}`);
}


// const firstItem = categoryList.firstElementChild;
// console.log(`Category: ${firstItem.firstElementChild.textContent}`);
// console.log(`Elements: ${firstItem.lastElementChild.children.length}`);
// const secondItem = firstItem.nextElementSibling;
// console.log(`Category: ${secondItem.firstElementChild.textContent}`);
// console.log(`Elements: ${secondItem.lastElementChild.children.length}`);
// const lastItem = categoryList.lastElementChild;
// console.log(`Category: ${lastItem.firstElementChild.textContent}`);
// console.log(`Elements: ${lastItem.lastElementChild.children.length}`);


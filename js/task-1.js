const categoryAllEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoryAllEl.length}`);

categoryAllEl.forEach(el =>
  console.log(
    `Category: ${el.firstElementChild.textContent}`,
    `\nElements: ${el.lastElementChild.children.length}`
  )
);

//const categoriesList = document.querySelectorAll('#categories .item');
//categoriesList.forEach(category => {
// const categoryTitle = category.querySelector('h2').textContent;
// const categoryItems = category.querySelectorAll('ul li').length;
// console.log(categoryTitle);
// console.log(categoryItems);
//});

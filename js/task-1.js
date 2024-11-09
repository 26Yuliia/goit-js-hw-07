const categoriesList = document.querySelectorAll('#categories .item');
categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li').length;
  console.log(categoryTitle);
  console.log(categoryItems);
});

const categories = document.querySelector('#categories');
console.log(`TASK_1`, `В списке ${categories.children.length} категории.`);

const item = document.querySelectorAll('.item');
item.forEach(el =>
  console.log(
    `Категория: ${el.firstElementChild.textContent}.`,
    `Количество элементов: ${el.lastElementChild.children.length}.`,
  ),
);

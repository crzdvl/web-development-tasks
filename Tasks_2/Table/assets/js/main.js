const GOODS = [
  {
    category: 'furniture',
    name: 'Chair',
    amount: 1,
    price: 20
  },
  {
    category: 'supplies',
    name: 'Gel Pen',
    amount: 20,
    price: 2
  },
  {
    category: 'other',
    name: 'Trash Bin',
    amount: 1,
    price: 5
  },
  {
    category: 'furniture',
    name: 'Sofa',
    amount: 1,
    price: 50
  },
  {
    category: 'supplies',
    name: 'Notebook',
    amount: 3,
    price: 3
  },
  {
    category: 'other',
    name: 'Calendar 2019',
    amount: 1,
    price: 3
  }
];

let tableContainer = document.getElementById('table-information'),
    i = 0;

uploadElements(GOODS);

window.onload = function () {
  sortCategory();
  sortName();
}

function uploadElements(elements){  
  let container = '<tbody>',
      totalPrice = 0,
      total = document.getElementById('total');
  elements.forEach(function (elem) {
    container += '<tr>';
    container += '<td>' + elem.category + '</td>';
    container += '<td>' + elem.name     + '</td>';
    container += '<td>' + elem.amount   + '</td>';
    container += '<td>' + elem.price    + '</td>';
    container += '</tr>';
    totalPrice += elem.price * elem.amount;
  });
  total.innerHTML = totalPrice + '¥';
  tableContainer.innerHTML = container;
};

function sortCategory() {
  const element = document.getElementById('category');
  let span = document.getElementById('name_span');
  element.addEventListener('click', function(event) {
      sortByCategory();
      categoryReverse();
      uploadElements(GOODS); 
  });
}

function sortByCategory() {
  GOODS.sort(function(a, b){
    if ( a.category < b.category ){
      return -1;
    }
    if ( a.category > b.category ){
      return 1;
    }
    return 0;
  });
}

function categoryReverse() {
  if(i === 0){
    GOODS.reverse();
    i = 1;
    document.getElementById('category_span').innerHTML = "▲";
  } else {
    i = 0;
    document.getElementById('category_span').innerHTML = "▼";
  }
  return i;
}
  
function sortName() {
  const element = document.getElementById('name');
  element.addEventListener('click', function(event) {
      sortByName();
      nameReverse();
      uploadElements(GOODS); 
  });
}

function sortByName() {
  GOODS.sort(function(a, b){
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  });
}

function nameReverse() {
  if(i === 0){
    GOODS.reverse();
    i = 1;
    document.getElementById('name_span').innerHTML = "▲";
  } else {
    i = 0;
    document.getElementById('name_span').innerHTML = "▼";
  }
  return i;
}

filter.onclick = function() {
  let filterCategory = document.getElementById('filter').value,
      i;
  if (filterCategory) {
    for (i = 0; i < GOODS.length; i++) {
        if(GOODS[i].category.trim() === filterCategory.trim()){
          document.querySelectorAll('tbody tr')[i].style.display = 'table-row';
        } else {
          document.querySelectorAll('tbody tr')[i].style.display = 'none';
        }
    }
  } else {
      for (i = 0; i <= GOODS.length; i++) {
        document.querySelectorAll('tbody tr')[i].style.display = 'table-row';
      }
  }
}

document.getElementById('search').oninput = function () {
  let val = this.value.trim();
  if (val) {  
    for (let i = 0; i < GOODS.length; i++) {
      if (GOODS[i].name.toUpperCase().search(val.toUpperCase()) == -1) {
        document.querySelectorAll('tbody tr')[i].style.display = 'none';
      } else {
        document.querySelectorAll('tbody tr')[i].style.display = 'table-row';
      }
    };
  }
  else {
    for (let j = 0; j <= GOODS.length; j++) {
      document.querySelectorAll('tbody tr')[j].style.display = 'table-row';
    }
  }
}
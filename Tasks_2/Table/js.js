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

let total = document.getElementById('total');
let totalPrice = 0;
let tableContainer = document.getElementById('table-information');
let i = 0;
uploadElements(GOODS);


window.onload = function () {
  sortCategory();
  sortName();
}

function sortName() {
  const element = document.getElementById('name');
  element.addEventListener('click', function(event) {
      sortByName();
      GOODSreverse();
      uploadElements(GOODS); 
  });
}

function sortCategory() {
  const element = document.getElementById('category');
  element.addEventListener('click', function(event) {
      sortByCategory();
      GOODSreverse();
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




function GOODSreverse() {
  if(i === 0){
    GOODS.reverse();
    i = 1;
  } else {
    i = 0;
  }
  return i;
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

function uploadElements(elements){  
  let container = '<tbody>';
  elements.forEach(function (elem) {
    container += '<tr>';
    container += '<td>' + elem.category + '</td>';
    container += '<td>' + elem.name     + '</td>';
    container += '<td>' + elem.amount   + '</td>';
    container += '<td>' + elem.price    + '</td>';
    container += '</tr>';
    totalPrice += elem.price * elem.amount;
  });
  tableContainer.innerHTML = container;
  total.innerHTML = totalPrice + '¥';
};

filter.onclick = function() {
let filterCategory = document.getElementById('filter').value;
if (filterCategory != '') {
  for (let i = 0; i < GOODS.length; i++) {
      if(GOODS[i].category.trim() === filterCategory.trim()){
        document.querySelectorAll('tbody tr')[i].style.display = 'table-row';
      } else {
        document.querySelectorAll('tbody tr')[i].style.display = 'none';
      }
  }
} else {
    for (let j = 0; j <= GOODS.length; j++) {
      document.querySelectorAll('tbody tr')[j].style.display = 'table-row';
    }
}
}

document.getElementById('search').oninput = function () {
let val = this.value.trim();

if (val != '') {  
  for (let i = 0; i < GOODS.length; i++) {
    if (GOODS[i].category.search(val) == -1) {
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
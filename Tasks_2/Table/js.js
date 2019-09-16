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
let container = '<tbody>';

uploadElements(GOODS);


window.onload = function () {
  clickListener();
}


function clickListener() {
  const element = document.getElementById('category');
  element.addEventListener('click', function(event) {
    removeElements();
    sortByCategory();
    uploadElements(GOODS);
  });
}

function removeElements() {
  console.log(GOODS);
  for(let i = 1; i < GOODS.length ;i++){
    console.log(i);
    document.querySelectorAll('tbody tr')[i].style.display = 'none';
  }
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

function uploadElements(elements)
{  
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
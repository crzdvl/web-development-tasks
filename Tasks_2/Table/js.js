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

window.onload = function () {
  clickListener();
}


function clickListener() {
  const element = document.getElementById('category');
  element.addEventListener('click', function(event) {
    removeElements();
    sortByCategory();
    console.log(GOODS);
    uploadingElements(GOODS);
  });
}

function removeElements() {
  console.log('fdf');
  for(let i = 1; i < GOODS.length ;i++){
    document.getElementsByTagName('tr')[i].style.display = 'none';
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



let total = document.getElementById('total');
let total_price = 0;
let table_container = document.getElementById('table-information');
let container = '<tbody>';

uploadingElements(GOODS);

function uploadingElements(elements)
{  

  elements.forEach(function (elem) {
    container += '<tr>';
    container += '<td>' + elem.category + '</td>';
    container += '<td>' + elem.name     + '</td>';
    container += '<td>' + elem.amount   + '</td>';
    container += '<td>' + elem.price    + '</td>';
    container += '</tr>';
    total_price += elem.price * elem.amount;
});
  table_container.innerHTML = container;
  total.innerHTML = total_price + '¥';
};

filter.onclick = function() {
  let filterCategory = document.getElementById('filter').value;
 
  if (filterCategory != '') {
    for (let i = 0; i < GOODS.length; i++) {
 
        if(GOODS[i].category == filterCategory){
          document.getElementsByTagName('tr')[i].style.display = 'table-row';
        } else {
          document.getElementsByTagName('tr')[i].style.display = 'none';
        }
    }
  } else {
      // it's working
      const TR_ELEMENTS_QUANTITY = document.querySelectorAll('tbody tr');
 
      for (let b = 0; b < TR_ELEMENTS_QUANTITY.length; b++) {
        document.getElementsByTagName('tr')[b].style.display = 'table-row';
      }
  }
}

 
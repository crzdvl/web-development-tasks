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
  /*table_container.childNodes.firstChild;
  console.log(table_container.childNodes);
  while(table_container.childNodes.firstChild) {
    table_container.removeChild(table_container.childNodes.firstChild);
    console.log('f');
  };*/
  let a = document.getElementsByTagName('tr');
  for(let i = 1; i < 7;i++){
    //a[i].remove();
    a[i] = "";
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

/*

document.getElementById("search").addEventListener("keydown", validateName);

function validateName() {
  /*
    if(document.getElementById("search").value === GOODS[1].name){
      console.log('sbgsnbg');

    } else {

    }
  }
  for(i = 0;i < 6;i++){
    if (document.getElementById("search").value = GOODS[i].name){
      /*document.getElementById("search").style.cssText=`    
        color: green;
    `;
    }
    console.log(i);
    }
  }
}
*/








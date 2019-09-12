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
let i = 0;
let filtered_data    = [];
document.getElementById('category').onclick = function(){
  if (i === 0){
    GOODS.sort(function(a,b){
      return arraySort(a.name,b.name);
  });
  i++;
  } else {

    i--;
  }
}
*/

document.getElementById("search").addEventListener("keydown", validateName);

function validateName() {
  /*
    if(document.getElementById("search").value === GOODS[1].name){
      console.log('sbgsnbg');

    } else {

    }
  }*/
  for(i = 0;i < 6;i++){
    if (document.getElementById("search").value = GOODS[i].name){
      /*document.getElementById("search").style.cssText=`    
        color: green;
    `;
    }*/
    console.log(i);
    }
  }
}









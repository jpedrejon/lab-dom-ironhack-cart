
function deleteItem(e){
  var parent = document.getElementById("container");
  var child = document.getElementsByClassName("item");
  parent.removeChild(child[e]);
  }

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var quantities = document.getElementsByClassName("quantities");
  var prices = document.getElementsByClassName("product-price");
  var totalSum = 0;
   for (var i=0; i<quantities.length; i++) {
     var oneProduct = quantities[i].value * prices[i].innerHTML;

     var valorProductoIndividual = document.getElementsByClassName("totalProductPrice");
     valorProductoIndividual[i].innerHTML = oneProduct;
     totalSum += oneProduct;
   }
  document.getElementById("show-price").innerHTML = totalSum;
 }

 function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  // var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

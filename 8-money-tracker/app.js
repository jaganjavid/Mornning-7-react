// Storage Controller

// const StorageCtrl = (function(){

// }())


// Item Controller
const itemCtrl = (function(){


    // Data Structure / State

    const data = {
        items: [
            {id:0, name: "Bike", money:3000},
            {id:1, name: "Phone", money:1500},
            {id:0, name: "Clothes", money:800},
        ],
        totalMoney: 0,
        currentItem: null
    }

    return {
        getItem: function(){
            return data.items;
        }
    }

}())






// UI Controller
// const UICtrl = (function(){

// }())


// App Controller

const App = (function(itemCtrl){
  return {
    init: function(){
        const items = itemCtrl.getItem();

        console.log(items);
    }
  }
}(itemCtrl))

// Intitialize App

App.init();
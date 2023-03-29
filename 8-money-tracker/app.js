// Storage Controller

// const StorageCtrl = (function(){

// }())


// Item Controller
const itemCtrl = (function(){

    // Item Constructor

    const Item = function(id, name, money){
        this.id = id;
        this.name = name;
        this.money = money;
    }


    // Data Structure / State

    const data = {
        items: [
            {id:0, name: "Bike", money:3000},
            {id:1, name: "Phone", money:1500},
            {id:2, name: "Clothes", money:800},
        ],
        totalMoney: 0,
        currentItem: null
    }

    return {
        getItem: function(){
            return data.items;
        },
        addItem:function(name, money){
            let ID;
            // Create ID
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
                console.log(ID);
            } else {
                ID = 0;
            }

            money = parseInt(money);

            // Create new Item
            newItem = new Item(ID, name, money);

            // Add to item array
            data.items.push(newItem);

            return newItem;
        }
    }

}())






// UI Controller
const UICtrl = (function(){

    const UISelectors = {
        itemList: "#item-list",
        addBtn: ".add-btn",
        updateBtn: ".update-btn",
        deleteBtn: ".delete-btn",
        backBtn: ".back-btn",
        inputItem:"item-name",
        inputMoney: "item-money"
    }

    return {
        populateItemList:function(items){
          let html = "";

          items.forEach(function(item){
            html += `
            <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}:</strong> <em>${item.money}$</em>
                <a href="#" class="secondary-content">
                    <i class="fa fa-pencil"></i>
                </a>
            </li>
            `;
          });

        //   Insert List Items
        document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        clearEditState: function(){
            document.querySelector(UISelectors.addBtn).style.display = "inline";
            document.querySelector(UISelectors.updateBtn).style.display = "none";
            document.querySelector(UISelectors.deleteBtn).style.display = "none";
            document.querySelector(UISelectors.backBtn).style.display = "none";
        },
        getSelectors: function(){
            return UISelectors;
        },
        getItemInput: function(){
            const name = document.getElementById(UISelectors.inputItem).value;
            const money = document.getElementById(UISelectors.inputMoney).value;
            return {
                name:name,
                money: money
            }
        },
        addListItem: function(item){
            
            // Create ali
            const li = document.createElement("li");

            // Add Class
            li.className = "collection-item";

            // Add ID
            li.id = `item-${item.id}`;

            // Add HTML
            li.innerHTML = `<strong>${item.name}</strong> <em>${item.money}$</em>
                <a href="#" class="secondary-content">
                    <i class="fa fa-pencil"></i>
                </a>
            </li>`;

            // Insert to ul
            document.querySelector(UISelectors.itemList).appendChild(li);
        }
    }
}())




// App Controller

const App = (function(itemCtrl,UICtrl){

 const selectors = UICtrl.getSelectors(); 

  const loadEventListeners = function(){
    // Add Item Event
    document.querySelector(selectors.addBtn).addEventListener("click", itemAddSubmit);
  }  

  const itemAddSubmit = function(e){
    e.preventDefault();
    
    const input = UICtrl.getItemInput();

    if(input.name !== "" && input.money !== ""){
      // Add Item
     const newItem = itemCtrl.addItem(input.name,input.money);

     UICtrl.addListItem(newItem);
    }
  }

  return {
    init: function(){
        UICtrl.clearEditState();
        const items = itemCtrl.getItem();

        if(items.length === 0){
            console.log("There is no item")
        } else {
            // Populate list with items
            UICtrl.populateItemList(items);
        }

        loadEventListeners();
    }
  }
}(itemCtrl,UICtrl))

// Intitialize App

App.init();
// Storage Controller

const StorageCtrl = (function(){
   return {
    storeItem: function(item){
        let items;

        // check if any items in ls

        if(localStorage.getItem("items") === null){
            items = [];
            
            items.push(item);

            localStorage.setItem("items", JSON.stringify(items));
        } else {
            // get the existing data from the ls
            items = JSON.parse(localStorage.getItem("items"));

            // push new item
            items.push(item);

            localStorage.setItem("items", JSON.stringify(items));
        }
    },
    getItemsFromLs: function(){
        let items;
        if(localStorage.getItem("items") === null){
            items = [];
        } else {
            // get the existing data from the ls
            items = JSON.parse(localStorage.getItem("items"));
        }
        return items;
    },
    updateItemStorage: function(updateItem){
        let items = JSON.parse(localStorage.getItem("items"));
        
        items.forEach(function(item, index){
            if(updateItem.id === item.id){
                items.splice(index, 1, updateItem);
            }
        })
        localStorage.setItem("items", JSON.stringify(items));
    },
    deleteItemStorage: function(id){
        let items = JSON.parse(localStorage.getItem("items"));
        items.forEach(function(item, index){
            if(id === item.id){
                items.splice(index, 1);
            }
        })
        localStorage.setItem("items", JSON.stringify(items));
    },
    clearItemsFromLs: function(){
        localStorage.removeItem("items");
    }
   };
}())


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
        // items: [
        //     // {id:0, name: "Bike", money:3000},
        //     // {id:1, name: "Phone", money:1500},
        //     // {id:2, name: "Clothes", money:800},
        // ],
        items: StorageCtrl.getItemsFromLs(),
        totalMoney: 0,
        currentItem: null
    }

    return {
        getAllData:function(){
          return data;
        },
        getItem: function(){
            return data.items;
        },
        addItem:function(name, money){
            let ID;
            // Create ID
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            money = parseInt(money);

            // Create new Item
            newItem = new Item(ID, name, money);

            // Add to item array
            data.items.push(newItem);

            return newItem;
        },
        getTotalMoney: function(){
            let total = 0;

            if(data.items.length > 0){
                data.items.forEach(function(item){
                    total = total + item.money;
                    data.totalMoney = total;
                });
                return data.totalMoney;
            } else {
                return data.totalMoney = 0;
            }
            
        },
        getItemById: function(id){
          let found = null;

        //   LOOP Through Items

        data.items.forEach(function(item){
           if(item.id === id){
             found = item
           } 
        })
        return found;
        },
        setCurrentItem: function(item){
            data.currentItem = item;
        },
        getCurrentItem: function(){
            return data.currentItem;
        },
        updateItem: function(name, money){
            //    Money to number
            money = parseInt(money);
            let found = null;

            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name,
                    item.money = money;
                    found = item;
                }
            })

            return found;
        },
        deleteItem: function(id){
            // Get ids
            const ids = data.items.map(function(item){
                return item.id;
            })

            // Get Index
            const index = ids.indexOf(id);

            data.items.splice(index, 1);
        },
        clearAllItems: function(){
            data.items = [];
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
        inputMoney: "item-money",
        totalMoney: ".total-money",
        listItems: ".collection-item",
        clearBtn : ".clear-btn"
    }

    return {
        populateItemList:function(items){
          let html = "";

          items.forEach(function(item){
            html += `
            <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}:</strong> <em>${item.money}$</em>
                <a href="#" class="secondary-content">
                    <i class="fa fa-pencil edit-item"></i>
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
        showEditState: function(){
            document.querySelector(UISelectors.addBtn).style.display = "none";
            document.querySelector(UISelectors.updateBtn).style.display = "inline";
            document.querySelector(UISelectors.deleteBtn).style.display = "inline";
            document.querySelector(UISelectors.backBtn).style.display = "inline";
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
            // Create li
            const li = document.createElement("li");
            // Add Class
            li.className = "collection-item";
            // Add ID
            li.id = `item-${item.id}`;
            // Add HTML
            li.innerHTML = `<strong>${item.name}</strong> <em>${item.money}$</em>
                <a href="#" class="secondary-content">
                    <i class="fa fa-pencil edit-item"></i>
                </a>
            </li>`;

            // Insert to ul
            document.querySelector(UISelectors.itemList).appendChild(li);
        },
        showTotalMoney: function(totalMoney){
            document.querySelector(UISelectors.totalMoney).textContent = totalMoney;
        },
        addItemToForm: function(){
          const name = document.getElementById(UISelectors.inputItem).value = itemCtrl.getCurrentItem().name;
          const money = document.getElementById(UISelectors.inputMoney).value = itemCtrl.getCurrentItem().money;
        },
        updateListItem: function(item){
            let listItems = document.querySelectorAll(UISelectors.listItems);
            
            listItems.forEach(function(listItem){
                const itemID = listItem.getAttribute("id");
                
                if(itemID === `item-${item.id}`){
                    document.querySelector(`#${itemID}`).innerHTML = `
                        <strong>${item.name}:</strong> <em>${item.money}$</em>
                        <a href="#" class="secondary-content">
                            <i class="fa fa-pencil edit-item"></i>
                        </a>
                    `
                }
            })
        },
        deleteItemList: function(id){
          const itemID = `#item-${id}`;
          const item = document.querySelector(itemID);
          item.remove();
        },
        clearInputState: function(){
            const name = document.getElementById(UISelectors.inputItem).value = "";
            const money = document.getElementById(UISelectors.inputMoney).value = "";
        },
        removeAllItems: function(){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            listItems.forEach(function(item){
                item.remove();
            })
        }
    }
}())


// App Controller

const App = (function(itemCtrl,UICtrl,StorageCtrl){

 const selectors = UICtrl.getSelectors(); 

  const loadEventListeners = function(){
    // Add Item Event
    document.querySelector(selectors.addBtn).addEventListener("click", itemAddSubmit);

    // Edit icon click event
    document.querySelector(selectors.itemList).addEventListener("click", itemEditClick);

    // Update item event
    document.querySelector(selectors.updateBtn).addEventListener("click", itemUpdateSubmit);

    // Delete item event
    document.querySelector(selectors.deleteBtn).addEventListener("click", itemDeleteSubmit);

    // Clear btn 
    document.querySelector(selectors.clearBtn).addEventListener("click", clearAllItemsClick)

    // Back Button Event
    document.querySelector(selectors.backBtn).addEventListener("click", function(e){
        e.preventDefault();
        UICtrl.clearEditState();
    })
  }  

  const itemAddSubmit = function(e){
    e.preventDefault();
    
    const input = UICtrl.getItemInput();

    if(input.name !== "" && input.money !== ""){
      // Add Item
     const newItem = itemCtrl.addItem(input.name,input.money);

     UICtrl.addListItem(newItem);

    //  ADD TOTAL MONEY
    const totalMoney = itemCtrl.getTotalMoney();

    UICtrl.showTotalMoney(totalMoney);

    StorageCtrl.storeItem(newItem);

    document.querySelector(".collection").style.display = "block";
    document.querySelector(".no-item").style.display = "none";
    }
   
  }

  const itemEditClick = function(e){

    e.preventDefault();
    if(e.target.classList.contains("edit-item")){
    const listId = e.target.parentElement.parentElement.id;
    //    Breal into an array
    const listArr = listId.split("-");

    // Get the Actual id
    const id = parseInt(listArr[1]);
    
    // Get item
    const itemToEdit = itemCtrl.getItemById(id);

    // Set Current Item
    itemCtrl.setCurrentItem(itemToEdit);

    // showEditState

    UICtrl.showEditState();

    // Add Item to form
    UICtrl.addItemToForm();
    }
    
  }

  const itemUpdateSubmit = function(e){
    e.preventDefault();
    //  Get the input
    const input = UICtrl.getItemInput();

    // Update Item 
    const updateItem = itemCtrl.updateItem(input.name, input.money);
    // update UI
    UICtrl.updateListItem(updateItem);

    // Get Total Money
    const totalMoney = itemCtrl.getTotalMoney();
    
    // Add total Money to UI

    UICtrl.showTotalMoney(totalMoney);

    StorageCtrl.updateItemStorage(updateItem);
    
    UICtrl.clearEditState();

    UICtrl.clearInputState();
  }

  const itemDeleteSubmit = function(e){
    e.preventDefault();

     

    // Get Current Item
    const currentItem = itemCtrl.getCurrentItem();

    // Delete From Data Structure
    itemCtrl.deleteItem(currentItem.id);

    // Delete From UI
    UICtrl.deleteItemList(currentItem.id);

    //  ADD TOTAL MONEY
    const totalMoney = itemCtrl.getTotalMoney();

    UICtrl.showTotalMoney(totalMoney);

    UICtrl.clearEditState();

    UICtrl.clearInputState();

    StorageCtrl.deleteItemStorage(currentItem.id);

    const items = itemCtrl.getItem();
    if(items.length === 0){
       location.reload();
    } 


 
  }


  const clearAllItemsClick = function(){
    itemCtrl.clearAllItems();
    UICtrl.removeAllItems();
    //  ADD TOTAL MONEY
    const totalMoney = itemCtrl.getTotalMoney();

    UICtrl.showTotalMoney(totalMoney);
    StorageCtrl.clearItemsFromLs();
    document.querySelector(".collection").style.display = "none";
    document.querySelector(".no-item").style.display = "block";
}

  return {
    init: function(){
        UICtrl.clearEditState();
        const items = itemCtrl.getItem();

        if(items.length === 0){
            document.querySelector(".collection").style.display = "none";
    
        } else {
            // Populate list with items
            UICtrl.populateItemList(items);

                //  ADD TOTAL MONEY
            const totalMoney = itemCtrl.getTotalMoney();

            UICtrl.showTotalMoney(totalMoney);

            document.querySelector(".collection").style.display = "block";
            document.querySelector(".no-item").style.display = "none";

        }

        loadEventListeners();
    }
  }
}(itemCtrl,UICtrl,StorageCtrl))

// Intitialize App

App.init();
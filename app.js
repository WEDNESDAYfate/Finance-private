//Delgetstei ajillah controller
var uiController = (function(){
    var DOMstrings ={
      inputType: ".add__type",
      inputDescription: ".add__description",
      inputValue: ".add__value",
      addBtn: ".add__btn"
    };

    return {
      getInput: function(){
        return {
            type: document.querySelector(DOMstrings.inputType).value,
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
        };
      },

      getDOMstrings: function(){
        return DOMstrings;
      }
    };
})();
//Sankhuutei ajillah controller
var financeController = (function(){
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  
  var incomes =[];
  var expenses =[];

  var totalIncomes = 0;
  var totalExpenses = 0;

  var data ={
    allItems: {
      inc:[],
      exp:[]
    },

    total: {
      inc:0,
      exp:0
    }
  }
})();

//Programiin holbogch controller
var appController = (function(uiController, financeController){
    var ctrlAddItem = function(){
      //1.Oruulah ugugdliig delgetsees olj avna
      console.log(uiController.getInput());
      //2.Olj avsan ugugdluudee sankhuugiin controllert damjuulj hadgalah
      //3.Olj avsan ugugdluudiig web deeree tohirgoo
      //4.Tusviig tootsoolno
      //5.Etssiin uldegdel, tootsoog delgetsend gargana
    };

  var setupEventListeners = function(){
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function() {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function(event) {
      if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
      }
    });
  };

  return {
    init: function() {
      console.log("Appliction started...");
      setupEventListeners();
    }
  }


})( uiController, financeController);

appController.init();
//Delgetstei ajillah controller
var uiController = (function(){
  
})();
//Sankhuutei ajillah controller
var financeController = (function(){

})();

//Programiin holbogch controller
var appController = (function(uiController, financeController){
    var ctrlAddItem = function(){
         //Oruulah ugugdliig delgetsees olj avna
    console.log("Delgetsnees ogogdloo avag heseg");
    //olj avsan ugugdluudee sankhuugiin controllert damjuulj hadgalah
    //Olj avsan ugugdluudiig web deeree tohirgoo
    };
document.querySelector('.add__btn').addEventListener('click', function(){
   ctrlAddItem();
});

document.addEventListener("keypress", function(event) {
    if(event.keyCode === 13 || event.which === 13){
     ctrlAddItem();
    }
    else console.log("Oor toch darsan baina : " + event.keyCode);
});

})( uiController, financeController);
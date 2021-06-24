menu_list_array = [
            " Veg Margherita Pizza",
                  " Chicken tandoori Pizza",
                  " Veg supreme Pizza",
                  " Paneer tikka Pizza",
                  " Deluxe veggie Pizza",
                  " Veg extravaganza Pizza"
                   ]

function getmenu(){
var htmldata
htmldata="ol class='menulist'>"
menu_list_array_sort()
for(var i=0;i<menu_list_array.length;i++)
htmldata=htmldata<li> +menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata



function additem(){
var htmldata
var item=document.getElementById("add_item").value
menu_list_array.push(item)
menu_list_array.sort()
htmldata="<section class =cards'>"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class ="card">' + '<img src = "images/pizzaimg.png"/>' + menu_list_array[i]
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML =htmldata;
}

function add_top(){
item=document.getElementById("add_item").value
menu_list_array.push(item)
additem()
}
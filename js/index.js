/*Ajouter*/
document.getElementsById("btnadd").addEventListener("click",add)
function add(){
    var task = document.getElementById("write").textContent = 
    

}
/*Supprimer*/
var del = document.getElementsByClassName("fa-trash-alt");
for(var i=0;i<del.length;i++){
    del[i].addEventListener("click",deletetask);
}

function deletetask(){
    var confirmer = confirm("are you sure !!!");
    if(confirmer){
        this.parentElement.parentElement.remove();
    }
}
/*Modifier*/
var list = document.getElementsByTagName("li");
for(var i=0;i<list.length;i++){
    list[i].addEventListener("dblclick",edittask);
}

function edittask(){
    this.children[0].setAttribute("contenteditable","");
}


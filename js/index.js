/*Ajouter*/
document.getElementsById("btnadd").addEventListener("click",add)
function add(){
    var task = document.getElementById("write").textContent.trim()
    if(task!=""){
        document.getElementById("ulgroupe").innerHTML+='<div class="col-lg-10 offset-lg-1"><ul class="list.group"><li class="list-group-item"><span>'+task+'</span><div class="icons"><i class="fas fa-trash-alt trash"></i><i class="fas fa-user-edit edit"></i></div></li></ul></div>'
    }

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
/*Supprimer*/
document.getElementsById("search").addEventListener("keyup",chercher)
function chercher(){
    var cle = this.value
    for(var i=0; i<list.length; i++){
        if(!list[i].children[0].textContent.trim().toUpperCase().includes(cle.toUpperCase())){
            list[i].style.display="none"
        }
        else{
            list[i].style.display="block"
        }
        
    }
}
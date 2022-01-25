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
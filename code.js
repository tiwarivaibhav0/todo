
var incomplete =[];
function Add(){
  var p=  document.getElementById("newT").value;
  document.getElementById("newT").value='';

     incomplete.push(p);
     show();
      
}
function show(){
    let text='';
     for(let i=0;i<incomplete.length;i++)
      text+='<li><input type="checkbox"><label>'+incomplete[i]+'</label><input type="text"><button class="edit" onclick=Edit(this.value) value='+incomplete[i]+'>Edit</button><button class="delete" onclick="Delete(this.value)" value='+incomplete[i]+'>Delete</button></li>';
     document.getElementById("incompleteT").innerHTML=text;
}

function Edit(E){
    
    document.getElementById("newT").value=E;
    Delete(E);
}


function Delete(D){
    let temp=[];
    for(let i=0;i<incomplete.length;i++){
        if(incomplete[i]!=D)
           temp.push(incomplete[i]);
    }
    incomplete=temp;
    show();



}



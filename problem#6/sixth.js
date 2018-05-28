var array=[];
function pairs(){
    var n=parseInt(document.getElementById("num").value);
    
    input.push(n);
}document.getElementById("num1").innerHTML=" ";
function pairsofarray(n){
   var i;
   var m=parseInt(document.getElementById("result").value);
   for(i=0;i<array.length;i++){
       for(var j=i+1;j<input.length;j++){
           if(array[i]+array[j]==m){
               document.getElementById("result").innerHTML+=array[i]+array[j];
           }
       }
   }
   
}
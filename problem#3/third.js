function mulof(){
    var n=parseInt(document.getElementById("num").value);
    document.getElementById("result").innerHTML=sum(n);

}
function sum(n){
    var sum=0;
    for(var i=1;i<n;i++){
        if(i%3==0||i%5==0){
            sum=sum+i;
        }
    }
    return sum;
}
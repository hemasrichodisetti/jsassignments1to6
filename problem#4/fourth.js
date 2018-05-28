function nearpow(){
    var n=parseInt(document.getElementById("num").value);
    document.getElementById("result").innerHTML=powerof(n);

}
function powerof(n){
   /* var sum=0;
    for(var i=1;i<n;i++){
        if(i%3==0||i%5==0){
            sum=sum+i;
        }
    }
    return sum;*/
    var count=0,ans=1;
    while(ans!=n){
        ans=ans*2;
        count++;
        if(ans>=n)
            return count;
    }
}
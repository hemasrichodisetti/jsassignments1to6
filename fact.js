function factorial(){
    var n=document.getElementById("num").value;
    document.getElementById("result").innerHTML=fact(n);

}
function fact(n){
    var ans=1;
    for(var i=1;i<=n;i++){
        ans=ans*i;
    }
    return ans;
}
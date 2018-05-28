function mul3and5(){
    var n=parseInt(document.getElementById("num").value);
    document.getElementById("result").innerHTML=mul(n);

}
function mul(n){
   /* var sum=0;
    for(var i=1;i<n;i++){
        if(i%3==0||i%5==0){
            sum=sum+i;
        }
    }
    return sum;*/
    for(var i=1;i<=n;i++){
        if(i%3==0){
            document.write ("Fizz ")
        }
        else if(i%5==0){
            document.write ("Buzz ")
        }
        else{
            document.write (i);
            document.write("\n")
        }
    }
}
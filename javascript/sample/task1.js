var x=20;
var even=""
var odd=""
for(var i=1;i<=x;i++)
    {
        if(i%2==0)
            {
               even+=i+" "
            }
        else
        {
            odd+=i+" "
        }
    }
console.log("even="+even)
console.log("odd="+odd)
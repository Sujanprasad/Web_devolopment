var x=20;
var even_sum=0
var odd_sum=0
for(var i=1;i<=x;i++)
    {
        if(i%2==0)
            {
                even_sum+=i
            }
        else
        {
            odd_sum+=i
        }
    }
console.log("sum of even numbers="+even_sum)
console.log("sum of odd numbers="+odd_sum)
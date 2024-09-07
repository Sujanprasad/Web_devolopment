x=int(input("enter a number :"))
Notprime=False
if x==1:
    print("1 is not a prime number")
else:
    for i in range(2,x): 
       if x%i==0:
         Notprime=True
         break

    if Notprime:
       print(" not prime")
    else:
       print(' prime')
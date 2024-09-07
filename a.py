#The try block will raise an error when trying to write to a read-only file:

try:
  f = open("demofile.txt","w")
  try:
    for x in range(10):
      f.write("sujan")
      f.write(" ")
  except:
    print("Something went wrong when writing to the file")
  finally:
    f.close()
except:
  print("Something went wrong when opening the file")  

function  validateform()
    {
        var name=document.myform.name.value;
        var password=document.myform.password.value;
        
        if(name.length<=0)      {
            alert("Name can't be blank");
                       
           if(confirm("Do you want to return homepage?")==true)
           {
           window.open("home.html")
            }
          else{
          window.open("login.html");
          }
      }
        else if(password.length<6)
            {
                alert("Password must be atleat 6 characters");
                 
      if(confirm("Do you want to return homepage?")==true)
      {
       window.open("home.html")
      }
      else{
          window.open("login.html");
      }
            }
        
        else if(phonenumber==null||phonenumber==" ")
        {
            alert("Phone number can't be empty");
            return false;
        }
    }
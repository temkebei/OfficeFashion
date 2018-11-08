$("#signup").on("click", function(event){
  event.preventDefault();

  //name, address, email, phone,m password variables that get values from inputs
   let users = {
     Name: $("#inputName").val(),
     Address: $("#inputAddress").val(),
     Email: $("#inputEmail").val(),
     Phone : $("#inputPhone").val(),
     Password : $("#inputPassword").val()
   }
 console.log(users);
  
  
  $.ajax({
        url:'/api/users',
        method:'POST', 
        data:users
      }).then(function(response){
        console.log(response)
        if(response.success){
          console.log("Success");
          sessionStorage.setItem("userName", response.user.Name)
          sessionStorage.setItem("userId", response.user.id)
          window.location.replace("/")
          }
          else{
              alert("Please try again")
          }
      });
    

})
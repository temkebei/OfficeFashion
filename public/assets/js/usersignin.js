$("#submit").on("click", function(event){
    event.preventDefault();



let users = {
    email: $("#inputEmail").val(),
    password: $("#inputPassword").val(),

}
console.log(users);
  
  
  $.ajax({
        url:'/login',
        method:'POST', 
        data:users
      }).then(function(response){
        console.log(response)
        if(response.success){
        sessionStorage.setItem("userName", response.user.Name)
        sessionStorage.setItem("userId", response.user.id)
       window.location.replace("/")
        }
        else{
            alert("Please try again")
        }
      });
    

})

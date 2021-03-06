$.ajax({
  url:'/api/department/women',
  method:'GET'
}).then(function(response){
  console.log(response)
  for(let i = 0; i < response.length; i++){
    let department = response[i]; 
let cardDiv = $(`<div class="card" style="width:300px" height:400px hi >
<img class="card-img-top img-thumbnail rounded" src="${department.Image}" alt="Card image cap">
<div class="card-body">
<h4 class="card-title">${department.Item}</h4>
<h4 class="card-title">${`$${department.Price}`}</h4>

<p class="card-text">Office Fashion</p>
<a href="#" class="btn btn-primary see-item" data-id=${department.id}>view</a>

<form target="_self" action="https://www.paypal.com/cgi-bin/webscr"
method="post">
<!-- Identify your business so that you can collect the payments. -->
<input type="hidden" name="business" value="kin@kinskards.com">

<!-- Specify a PayPal Shopping Cart Add to Cart button. -->
<input type="hidden" name="cmd" value="_cart">
<input type="hidden" name="add" value="1">

<!-- Specify details about the item that buyers will purchase. -->
<input type="hidden" name="item_name" value=${department.Item}>
<input type="hidden" name="amount" value=${department.Price}>
<input type="hidden" name="currency_code" value="USD">

<!-- Display the payment button. -->
<input type="image" name="submit"
src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
alt="Add to Cart">
<img alt="" width="1" height="1"
src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" >
</form>

</div>
</div>`);
$("#product-view .row").append(cardDiv);

  }})

  $("#product-view").on("click", ".see-item", function(event){
    event.preventDefault();
    let productId = $(this).data("id");
    console.log(productId);

$.ajax({
url:`/api/products/ ${productId}`,
method:'GET'
}).then(function(response){
console.log(response)
let data = response[0]
$("#product-view .row").empty()
let displayDiv = $(`<div class="col-8">
<img class="card-img-top img-thumbnail rounded" src="${data.Image}" alt="Card image cap" style="
  height: 400px;
  width: 300px;
"/>

</div>
<div class="col-4">
<h4 class="card-title">${data.Item}</h4>
<h4 class="card-title">${`$${data.Price}`}</h4>
<h4 class="card-title">In Stock: ${data.InStock}</h4>
<a href="/men">Back to All women</a>

<form target="_self" action="https://www.paypal.com/cgi-bin/webscr"
method="post">
<!-- Identify your business so that you can collect the payments. -->
<input type="hidden" name="business" value="kin@kinskards.com">

<!-- Specify a PayPal Shopping Cart Add to Cart button. -->
<input type="hidden" name="cmd" value="_cart">
<input type="hidden" name="add" value="1">

<!-- Specify details about the item that buyers will purchase. -->
<input type="hidden" name="item_name" value=${data.Item}>
<input type="hidden" name="amount" value=${data.Price}>
<input type="hidden" name="currency_code" value="USD">

<!-- Display the payment button. -->
<input type="image" name="submit"
src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
alt="Add to Cart">
<img alt="" width="1" height="1"
src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" >
</form>
</div>
</div>`);


$("#product-view .row").append(displayDiv);

})

  })

  window.onload = function(){
    console.log(window.location.href)
    let loggedInUser = sessionStorage.getItem("userName");
    console.log("Back Home", loggedInUser)
    if(loggedInUser){
      $("#signinnav").empty().attr("href","#").text("Welcome " + loggedInUser.toUpperCase())
      $("#signupnav").attr("href", "/logout").html(`<strong>Log Out</strong>`);
    }
    else{
      window.location.replace("/signin")
    }
    if(window.location.pathname === "/logout"){
      sessionStorage.setItem("userName", "");
      $("#signinnav").empty().attr("href","/signin").text("Sign In")
      $("#signupnav").attr("href", "/signup").html(`<strong>Sign Up</strong>`);
      window.location.replace("/")
    }
  }
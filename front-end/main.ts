//load in html components
$(() => {
  $("#included__header").load("./components/header.html");
});

$(() => {
  $("#included__medicines__list").load("./components/medicines_list.html");
});

//medicines__list code
$(document).on('click','#new_medicine_form_button',function(e){
    e.preventDefault();
    console.log("hi")
   // alert("button");
});

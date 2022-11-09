//load in html components
$(() => {
  $("#included__header").load("./components/header.html");
});

$(() => {
  $("#included__medicines__list").load("./components/medicines_list.html");
});

//medicines__list code
let count = 0;

//add new table row
$(document).on("click", "#new_medicine_form_button", (e) => {
  e.preventDefault();
  //get new values
  const newMedicine = $("#name").val();
  const newQuantity = $("#quantity").val();
  const newDose = $("#dose").val();

  //generate unique row ids
  count++;

  $("#current__medicines__table > tbody:first").append(
    `<tr class="medicines__table__row" id="${count}__table__row" ><td>${newMedicine}</td><td>${newQuantity}</td><td>${newDose}</td><td><button id="${count}__delete__btn" class="delete__btn">Remove</button></td></tr>`
  );
});

//remove table row
//note -> did not use ES6 arrow func as could not use this keyword to grab button id
$(document).on(
  "click",
  "[id*=__delete__btn]",
  function () {
    const rowID = $(this).parent().parent().attr("id");
    if (rowID) {
      $(`#${rowID}`).remove();
    }
  }

  //get id of clicked
  //id of parent
  //remove parent
);

//load in html components
$(() => {
  $("#included__header").load("./components/header.html");
});

$(() => {
  $("#included__medicines__list").load("./components/medicines_list.html");
});

//medicines__list code
let count = 0;
$(document).on("click", "#new_medicine_form_button", (e) => {
  e.preventDefault();
  //get new values
  const newMedicine = $("#name").val();
  const newQuantity = $("#quantity").val();
  const newDose = $("#dose").val();

  //generate unique row ids
  count++;
  let row__id = `${count}__table__row`

  $("#current__medicines__table > tbody:first").append(
    `<tr class="medicines__table__row" id=${row__id} ><td>${newMedicine}</td><td>${newQuantity}</td><td>${newDose}</td><td><button class="delete__btn">Remove</button></td></tr>`
  );
});

//load in html components
$(() => {
  $("#included__header").load("./components/header.html");
});

$(() => {
  $("#included__medicines__list").load("./components/medicines_list.html");
});

//medicines__list code
$(document).on("click", "#new_medicine_form_button", (e) => {
  e.preventDefault();
  //get new values
  const newMedicine = $("#name").val();
  const newQuantity = $("#quantity").val();
  const newDose = $("#dose").val();
  //add new values to table

  // $("#table__row__name").html(`${newMedicine}`);
  $("#current__medicines__table > tbody:first").append(
    `<tr><td>${newMedicine}</td><td>${newQuantity}</td><td>${newDose}</td></tr>`
  );
});

//load in html components
$(() => {
  $("#included__header").load("./components/header.html");
});

$(() => {
  $("#included__medicines__list").load("./components/medicines_list.html");
});

$(() => {
  $("#alerts__list").load("./components/medicines_alerts.html");
});

//medicines__list code

//note this need fixing to accept only valid types
interface medicationArr {
  newMedicine: string | number | undefined | string[];
  newQuantity: string | number | undefined | string[];
  newDose: string | number | undefined | string[];
}

interface medicationsData extends Array<medicationArr> {}

const medicationArr: medicationArr[] = [];
let count = 0;

//add new table row
$(document).on("click", "#new_medicine_form_button", (e) => {
  e.preventDefault();
  //get new values
  const newMedicine = $("#name").val();
  const newQuantity = $("#quantity").val();
  const newDose = $("#dose").val();

  //pipulate array
  medicationArr.push({
    newMedicine: newMedicine,
    newQuantity: newQuantity,
    newDose: newDose,
  });

  //add new result to alert selector
  const selectorValue = `${newMedicine} /${newQuantity} ${newDose}`;
  const optionID = `${newMedicine}${newQuantity}${newDose}`;
  $("#medication_selector").append(
    `<option id="${optionID}" value="${selectorValue}">${selectorValue}</option>`
  );

  //generate unique row ids
  count++;

  $("#current__medicines__table > tbody:first").append(
    `<tr class="medicines__table__row" id="${count}__table__row" ><td>${newMedicine}</td><td>${newQuantity}</td><td>${newDose}</td><td><button id="${count}__delete__btn" class="delete__btn">Remove</button></td></tr>`
  );
});

//remove table row
//note -> did not use ES6 arrow func as could not use this keyword to grab button id
$(document).on("click", "[id*=__delete__btn]", function () {
  const rowID = $(this).parent().parent().attr("id");
  if (rowID) {
    $(`#${rowID}`).remove();

    //remove from medicationArr
    const indexToRemove = [...rowID.matchAll(/\d/g)].join("");
    const numberIndexToRemove = parseInt(indexToRemove) - 1;
    medicationArr.splice(numberIndexToRemove, 1);

    //remove from medication alery selector To implement
    const optionRemoveID = $("#medication_selector").children()[
      numberIndexToRemove
    ].id;
    //bug cannot remove existing
    $(`#${optionRemoveID}`).remove();
  }
});

//medication alerts
const alertArr = [];
let alertCount = 0;
$(document).on("click", "#medication__alerts__form__button", (e) => {
  e.preventDefault();
  const alertMedication = $("#medication_selector").val();
  const alertTime = $("#alert__time__input").val();
  const alertRepeats = $("#alert__repeats__selector").val();

  //alert in arr
  const alertArrObj = {medication: alertMedication, time: alertTime, repeats: alertRepeats};
  alertArr.push(alertArrObj);
  //active alerts in table

 
  //generate unique row ids
  alertCount++;

  $("#medicines__alert__table > tbody:first").append(
    `<tr class="medicines__table__row" id="${count}__table__row" ><td>${alertMedication}</td><td>${alertTime}</td><td>${alertRepeats}</td><td><button id="${alertCount}__alerts__delete__btn" class="delete__btn">Remove</button></td></tr>`
  );

   //alert on time
});

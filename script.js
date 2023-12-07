// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

document.addEventListener("DOMContentLoaded", function () {

  let saveBtn = document.getElementsByClassName("btn");

  // runs first to load any saved data
    displaySavedData();
  
    //function to compare the current time to the time blocks in html file.
    var currentDay = dayjs().format("dddd MMM DD, YYYY");
    $('#currentDay').text(currentDay);
  
    var currentTime = dayjs().format("HH")
  //changes display features based on relative time
    for (var i = 9; i <= 17; i++) {
  
      if (currentTime == i) { // if current time is the same as i, set the current [i] block to present
        $(`#hour-${i}`).removeClass("past future").addClass("present");
  
      } else if (currentTime > i) {// if current time is more than i, set the current [i] block to past
        $(`#hour-${i}`).removeClass("past present").addClass("past");
  
      } else {// if current time is less than i, set the current [i] block to future
        $(`#hour-${i}`).removeClass("present future").addClass("future");
  
      }
  
  
    };
  
  
  //function to save info in text area
    function saveInfo() {
      for (var i = 9; i <= 17; i++) {
  
        let hourDiv = document.getElementById(`hour-${i}-desc`);
        localStorage.setItem(`hour-${i}-desc`, hourDiv.value)
      }
  
    }
  
  //adding event listeners to each button
    for (var i = 0; i < saveBtn.length; i++) {
      saveBtn[i].addEventListener("click", saveInfo);
    }
  
    //function to display information saved to local storage
    function displaySavedData () {
      for (var i = 9; i <= 17; i++) {
        let oldSaveData = localStorage.getItem(`hour-${i}-desc`);
  
        let oldSaveDataText = document.getElementById(`hour-${i}-desc`);
  
        oldSaveDataText.innerText = oldSaveData;
    
      }
      }

});

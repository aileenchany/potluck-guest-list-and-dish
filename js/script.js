// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// button to assign dishes
const assignButton = document.querySelector(".assign");
// access to empty list wich will store the name of guest & the item they're bringing
const assignedItems = document.querySelector(".assigned-items");

//Function triggered by a click
//We store the suer input in the guest variable
//If value is not an empty string, it will proceed to call three functions
addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

//This function adds the guest by creating a list & storing this value inside
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

//This function will clear the input box after user types a name and clicks the button
const clearInput = function () {
  guestInput.value = "";
};

/*This function selects all the guests and count how many there are
The if statement allows for only 8 guests
Once this is true, it will hide the input box, the button, and label
and a messsage will appear saying the list is full*/
const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

//This function assigns items randomly to the guests by using a for...of loop.
const assignItems = function () {
  const potluckItems = [
    "rice",
    "beans",
    "potato salad",
    "pasta salad",
    "chicken",
    "fish",
    "tofu",
    "green salad",
    "apple pie",
    "wine",
    "ice cream",
    "juice & soda"
  ];
  const allGuests = document.querySelectorAll(".guest-list li");

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

//Here we tell the button to listen for a click and trigger "assignItems" function
assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});

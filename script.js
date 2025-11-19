var pet_info = {
    name: "Cthulhu",
    weight: 6000,
    happiness: 5,
    visibility: 1

};


$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();

    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.hide-button').click(function () {
        pet_info.happiness -= 1;       // hiding makes Cthulhu sad
        pet_info.visibility = 0;

        $('.pet-image').hide();
        $('.message').text("Cthulhu got sad and hid.");
        checkAndUpdatePetInfoInHtml();
    });

    $('.show-button').click(function () {
        pet_info.happiness += 1;       // * showing makes Cthulhu happy
        pet_info.visibility = 1;

        $('.pet-image').show();
        $('.message').text("Cthulhu happily shows its self.");

        checkAndUpdatePetInfoInHtml();
    });

    // Add a variable "pet_info" equal to an object with the name (string), weight (number), and happiness (number) of your pet


    function clickedTreatButton() {
        pet_info.happiness += 2;
        pet_info.weight += 1000;
        $(".message").text("Cthulhu chomps the human and is happier.");
        checkAndUpdatePetInfoInHtml();
    }

    function clickedPlayButton() {
        pet_info.happiness += 3
        pet_info.weight -= 500
        $(".message").text("Cthulhu plays with the puppies.");
        checkAndUpdatePetInfoInHtml();
    }

    function clickedExerciseButton() {
        pet_info.happiness -= 2
        pet_info.weight -= 750
        $('.message').text("Cthulhu runs to the cult meeting.");
        checkAndUpdatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() {
        checkWeightAndHappinessBeforeUpdating();
        updatePetInfoInHtml();
    }

    function checkWeightAndHappinessBeforeUpdating() {
        if (pet_info.weight < 0) {
            pet_info.weight = 0
        }
        if (pet_info.happiness < 0) {
            pet_info.happiness = 0
        }
    }

    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
        $('.name').text(pet_info['name']);
        $('.weight').text(pet_info['weight']);
        $('.happiness').text(pet_info['happiness']);
        $('.visibility').text(pet_info.visibility === 1 ? "Visible" : "Hidden");
    }
});
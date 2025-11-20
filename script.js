var pet_info = {
    name: "Cthulhu",
    weight: 6000,
    happiness: 5,
    visibility: 1 // new thing i made was visibility since it went well with my hide and show

};


$(function() {

    checkAndUpdatePetInfoInHtml();

    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);


    // ****************** hide and show methods **********************

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

    function clickedTreatButton() {
        pet_info.happiness += 2;
        pet_info.weight += 1000;
        $(".message").text("Cthulhu chomps the human and is happier.");
        checkAndUpdatePetInfoInHtml();
    }

    function clickedPlayButton() {
        pet_info.happiness += 3
        pet_info.weight -= 500
        $(".message").text("Cthulhu plays with the puppies."); // message
        checkAndUpdatePetInfoInHtml();
    }

    function clickedExerciseButton() {
        pet_info.happiness -= 2
        pet_info.weight -= 750
        $('.message').text("Cthulhu runs to the cult meeting."); // message
        checkAndUpdatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() {
        checkWeightAndHappinessBeforeUpdating();
        updatePetInfoInHtml();
    }


    // stops lil guy from going below zero
    function checkWeightAndHappinessBeforeUpdating() {
        if (pet_info.weight < 0) {
            pet_info.weight = 0
        }
        if (pet_info.happiness < 0) {
            pet_info.happiness = 0
        }
    }


    function updatePetInfoInHtml() {
        $('.name').text(pet_info['name']);
        $('.weight').text(pet_info['weight']);
        $('.happiness').text(pet_info['happiness']);
        $('.visibility').text(pet_info.visibility === 1 ? "Visible" : "Hidden"); // status for the lil guys visability
    }
});
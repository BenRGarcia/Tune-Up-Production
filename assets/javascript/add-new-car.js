// jQuery on ready
$( function() {

  // Disable all but the 'year'
  $('#js-add-car-make').attr("disabled", "disabled");
  $('#js-add-car-model').attr("disabled", "disabled");
  $('#js-add-car-mileage').attr("disabled", "disabled");

  // When user chooses a year
  $('body').on('change',"#js-add-car-year",function(event){
    // Remove disabled class from car make
    $('#js-add-car-make').removeAttr("disabled");
    // Materialize CSS method to re-render dropdown options
    $('select').material_select();

    // If both make and year selected
    if ($(this).val() && $('#js-add-car-make').val()) {
      let year = $(this).val();
      let make = $('#js-add-car-make').val();
      // Call API to retrieve models
      vehicleApi.searchModel(year, make).then( models => {
        // Append response array to dropdown options
        DOM.renderDropDownModels(models);
      }, err => {
        console.log(err);
      });
    }
  });

  // When user chooses a make
  $('body').on('change',"#js-add-car-make",function(event){
    // Remove disabled class from car model
    $('#js-add-car-model').removeAttr("disabled");
    $('select').material_select();

    // If both make and year selected
    if ($(this).val() && $('#js-add-car-year').val()) {
      let make = $(this).val();
      let year = $('#js-add-car-year').val();
      // Call API to retrieve models
      vehicleApi.searchModel(year, make).then( models => {
        // Append response array to dropdown options
        DOM.renderDropDownModels(models);
      }, err => {
        console.log(err);
      });
    }
  });

  // When user chooses a model
  $('body').on('change', '#js-add-car-model', function(event) {
    // Remove disabled class from car mileage
    $('#js-add-car-mileage').removeAttr("disabled");
    $('select').material_select();
  });

  // When user submits form
  $('body').on('submit',"form",function(event){

    // Prevent page reload
    event.preventDefault();

    // Get data
    let uid = userAuth.getUid;
    let year = $('#js-add-car-year').val();
    let make = $('#js-add-car-make').val();
    let model = $('#js-add-car-model').val();
    let mileage = $('#js-add-car-mileage').val();

    // Ignore empty inputs
    if (year && make && model && mileage) {
      // Reset values in form
      $('#js-add-car-year').val("");
      $('#js-add-car-make').val("");
      $('#js-add-car-model').val("");
      $('#js-add-car-mileage').val("");

      // Re-disable inputs
      $('#js-add-car-make').attr("disabled", "disabled");
      $('#js-add-car-model').attr("disabled", "disabled");
      $('#js-add-car-mileage').attr("disabled", "disabled");

      // Materialize CSS method to re-render dropdown options
      $('select').material_select();

      // Call db object's method to post new car to firebase database
      db.addNewCar(uid, year, make, model, mileage).then( function(response) {
          initializeGarage();
          // console.log(response); // 'response' will be the new car object created
        }, function(err) {
          console.log(err); // Errors are logged in the console
      });
    }
  });
});

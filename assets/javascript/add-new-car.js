// Start Ben's Code

// End Ben's Code

/*$('body').on('click',"#js-new-car-add",function(){
  if (userAuth.getUid){
    var uid = userAuth.getUid;
    // Get user input
    let year = $('#js-new-car-year').val();
    let make = $('#js-new-car-make').val();
    let model = $('#js-new-car-model').val();
    let mileage = $('#js-new-car-mileage').val();

    // Ignore incomplete form submissions
    if (year && make && model && mileage) {
    // Reset form inputs to empty strings
    $('#js-new-car-year').val("");
    $('#js-new-car-make').val("");
    $('#js-new-car-model').val("");
    $('#js-new-car-mileage').val("");
    // Call db object's method to post new car to firebase database
    db.addNewCar(uid, year, make, model, mileage).then( function(response) {
      DOM.renderCars(response);
      console.log(response); // 'response' will be the new car object created
    }, function(err) {
      console.log(err); // Errors are logged in the console
      });
    }
  }
});*/

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
  // $('body').on('submit',"form",function(event){
    // Prevent page reload
    // event.preventDefault();

    // Get data
    // let uid = userAuth.getUid;
    // let year = $('#js-add-car-year').val();
    // let make = $('#js-add-car-make').val();
    // let model = $('#js-add-car-model').val();
    // let mileage = $('#js-add-car-mileage').val();

    // Call db object's method to post new car to firebase database
    /*db.addNewCar(uid, year, make, model, mileage).then( function(response) {
      DOM.renderCars(response);
      console.log(response); // 'response' will be the new car object created
    }, function(err) {
      console.log(err); // Errors are logged in the console
      });*/
    // });
  // };




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

    // Call db object's method to post new car to firebase database
    db.addNewCar(uid, year, make, model, mileage).then( function(response) {
        DOM.renderCars(response);
        console.log(response); // 'response' will be the new car object created
      }, function(err) {
        console.log(err); // Errors are logged in the console
    });
  });
});

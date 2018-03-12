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

  // When user chooses a year
  $('body').on('change',"#js-add-car-year",function(event){
    console.log("#js-add-car-year");
  });

  // When user chooses a make
  $('body').on('change',"#js-add-car-make",function(event){
    console.log("#js-add-car-make");
    console.log(event);
  });

  // When user chooses a model
  $('body').on('change',"#js-add-car-model",function(event){
    console.log("#js-add-car-model");
    console.log(event);
  });

  // When user chooses submit (plus sign)
  $('body').on('change',"#js-add-car-mileage",function(event){
    console.log("#js-add-car-mileage");
    console.log(event);
  });

  // When user submits form
  $('body').on('submit',"form",function(event){
    event.preventDefault();
    console.log("#js-add-car-submit");
  });
});
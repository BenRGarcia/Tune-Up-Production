const dateConverter = {

  mmddyyyyToUnixTime() { 
   // Establish format of passed argument
   let format = "MM/DD/YYYY";
   // Convert Date for moment.js
   let convertedDate = moment(mmddyyyy, format);
   // Reformat date as Unix Time
   let unixTime = moment(convertedDate).format("X");
   return unixTime;
  },

  unixTimeTommddyyyy() {
    // Establish format of passed argument
    let format = "X";
    // Convert Date for moment.js
    let convertedDate = moment(unixTime, format);
    // Reformat date as MM DD YYYY
    let mmddyyyy = moment(convertedDate).format("MM/DD/YYYY");
    return mmddyyyy;
  }
};

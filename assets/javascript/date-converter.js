const dateConverter = {

  mmddyyyyToUnixTime : 
   // Establish format of passed argument
   let format = "MM/DD/YYYY";
   // Convert Date for moment.js
   let convertedDate = moment(mmddyyyy, format);
   // Reformat date as Unix Time
   let unixTime = moment(convertedDate).format("X");
   return unixTime;
  },

  unixTimeTommddyyyy :
    function(unixTime) {
      var unix = moment.unix(unixTime)._d;
      var unixFormat = moment(unix).format("MM/DD/YYYY");
        console.log(unixFormat, "Convert to Date");
    return mmddyyyy;
  }
};


// $(document).ready(function(){  

//     var oilDate =  $("#oilDate").val();
//     var newOilDate = moment(oilDate).add(3, 'M');
//     console.log(oilDate, "oilDate");
//     console.log(newOilDate, "newOilDate");

  
//   }
  // //Add 3 months to current date
  // var currentDate = moment();
  // var futureMonth = moment(currentDate).add(3, 'M');
  // var futureMonthEnd = moment(futureMonth).endOf('month');

  // if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
  //   futureMonth = futureMonth.add(1, 'd');
  // }
  // console.log(currentDate, "currentDate");
  // console.log(currentDate.utc().valueOf(), "UTC value");
  // console.log(futureMonth, "futureDate");

  // //create a date from UNIX timestamp
  // var unix = moment.unix(1520561224);
  //   console.log(unix, "unix to date");
  // var UTC = unix.utc();
  //   console.log(UTC, "new UTC");

  // //create UNIX from a date
  // var date = new Date(moment()).getTime() / 1000;
  // console.log(date, "date to unix")

// });
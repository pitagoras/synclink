var cronJob = require('cron').CronJob;

// every 1 sec
// var cronTime = "* * * * * *";

// every  minutes
var cronTime = "*/1 * * * *";

// every weekday at 11:30:00 AM JST
// var cronTime = "00 30 11 * * 1-5";

// once at the specified date.
// var cronTime = new Date();

var page = require('webpage').create(),
    system = require('system'),
    t, address;


job = new cronJob({
  // The time to fire off your job.
  cronTime: cronTime

  // The function to fire at the specified time.
  , onTick: function() {
    console.log('Hello! Hello!');
	
	
	
	
	
	
	
 t = Date.now();
    address = "http://8.sync-play.appspot.com/user1-aghbc/3.3-kvsupdnew7.htm";
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            //console.log('Page title is ' + page.evaluate(function () {
            //    return document.title;
            //}));	
            console.log('Loading time ' + t + ' msec');
        }
        //phantom.exit();
		
		
		
    });	


	
  }

  // A function that will fire when the job is complete, when it is stopped
  , onComplete: function() {
    console.log('Completed!')	
  }

  // Specified whether to start the job after just before exiting the constructor.
  , start: false
  , timeZone: "Japan/Tokyo"
})

// Runs your job.
job.start();

// Stops your job.
//job.stop();
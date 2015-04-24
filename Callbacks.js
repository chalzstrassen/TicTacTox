function Clock () {

}

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  console.log(this.hour + ":" + this.minutes + ":" + this.seconds);
};

Clock.prototype.run = function () {
  var currentTime = new Date();
  this.hour = currentTime.getHours();
  this.minutes = currentTime.getMinutes();
  this.seconds = currentTime.getSeconds();
  this.printTime();
  setInterval(this._tick.bind(this), Clock.TICK);
};

Clock.prototype._tick = function () {
  this.seconds += 5;
  var elapsed_secs = this.seconds;

  if (elapsed_secs >= 60) {
    this.seconds = elapsed_secs % 60;
    this.minutes++;
  }

  var elapsed_mins = this.minutes;

  if (elapsed_mins >= 60) {
    this.minutes = 0;
    this.hour++;
  }

  var elapsed_hours = this.hours;
  
  if (elapsed_hours >= 24) {
    this.hours = 0;
  }

  this.printTime();
};

var clock = new Clock();
clock.run();

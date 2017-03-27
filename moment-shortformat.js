(function() {
  var day, hour, initialize, minute, week;

  minute = 6e4;
  hour = 36e5;
  day = 864e5;
  week = 6048e5;

  initialize = function(moment) {
    var shortFormat;
    shortFormat = function(withoutPreOrSuffix, now) {
      var diff, num, result, unit;
      now = now || moment();
      diff = Math.abs(this.diff(now));
      unit = null;
      num = null;

      if (diff < minute) {
        unit = 'seconds';
      } else if (diff < hour) {
        unit = 'minutes';
      } else if (diff < day) {
        unit = 'hours';
      } else if (diff < week) {
        unit = 'days';
      } else if (this.year() != now.year()) {
        return this.format('MMM D, YYYY');
      } else {
        return this.format('MMM D');
      }
      num = Math.max(1, moment.duration(diff)[unit]());

      result = num + unit.charAt(0);
      if (!withoutPreOrSuffix) {
        result = moment.localeData().pastFuture(this.diff(now), result);
      }

      return result;
    };

    moment.fn.short = function(withoutPreOrSuffix, now) {
      return shortFormat.call(this, withoutPreOrSuffix, now);
    };

    return moment;
  };

  if (typeof define === 'function' && define.amd) {
    define('moment-shortformat', ['moment'], function(moment) {
      return this.moment = initialize(moment);
    });
  } else if (typeof module !== 'undefined') {
    module.exports = initialize(require('moment'));
  } else if (typeof window !== "undefined" && window.moment) {
    this.moment = initialize(this.moment);
  }
}).call(this);

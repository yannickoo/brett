(function () {
  var brett = function () {
    var c = document.getElementsByTagName('canvas')[0];
    var pixelsX = c.width;
    var pixelsY = c.height;
    var r = document.getElementsByTagName('brett')[0];
    var $ = c.getContext('2d');
    var base = 137 + 37;
    var mod = 37;
    var modifier = 0.137 / 6;
    var running = 0;

    var col = function(x, y, r, g, b) {
      $.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
      $.fillRect(x, y, 1, 1);
    }
    var R = function(x, y, t) {
      return Math.floor(base + mod * Math.cos((x * x - y * y) / 300 + t ));
    }

    var G = function(x, y, t) {
      return Math.floor(base * 0.55 + mod * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300));
    }

    var B = function(x, y, t) {
      return Math.floor(base + mod * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100));
    }

    var t = 0;

    var run = function() {
      for (x=0; x <= pixelsX; x++) {
        for (y = 0; y <= pixelsY; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + modifier;

      if (r.classList.contains('running')) {
        window.requestAnimationFrame(run);
      }
    }

    var init = function () {
      r.className = 'running';

      window.requestAnimationFrame(run);
    }

    return {
      init: init
    };
  };

  window.addEventListener('DOMContentLoaded', function () {
    brett().init();
  });
})();

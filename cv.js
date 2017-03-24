$(document).ready(function() {
    var arc_params = {
        center: [685, 100],
        radius: 150,
        start: 30,
        end: 200,
        dir: 1
    };
    var arc_back = {
        center: [685, 100],
        radius: 150,
        start: 200,
        end: 30,
        dir: 1
    };

    new Waypoint({
        element: document.getElementById('belgium'),
        handler: function(direction) {
          if (direction == "up") {
              $("#flight").animate({
                  path: new $.path.arc(arc_back)
              });
          }
            if (direction == "down") {
                $("#flight").animate({
                    path: new $.path.arc(arc_params)
                });
            }
        },
        offset: '50%'
    });

    new Waypoint({
        element: document.getElementById('animal'),
        handler: function(direction) {

            if (direction == "down") {
                $("#animalone").addClass("shake-slow shake-constant");
                $("#animaltwo").addClass("shake shake-constant");
                setTimeout(function(){$("#animalone").removeClass("shake-slow shake-constant"); }, 1000);
                setTimeout(function(){$("#animaltwo").removeClass("shake shake-constant"); }, 1000);
            }
        },
        offset: '50%'
    });

    new Waypoint({
        element: document.getElementById('bacterias'),
        handler: function(direction) {

            if (direction == "down") {
                $("#bacteriaone").addClass("shake shake-constant");
                $("#bacteriatwo").addClass("shake-slow shake-constant");
                $("#bacteriathree").addClass("shake-little shake-constant");
                setTimeout(function(){$("#bacteriaone").removeClass("shake shake-constant"); }, 1000);
                setTimeout(function(){$("#bacteriatwo").removeClass("shake-slow shake-constant"); }, 1000);
                setTimeout(function(){$("#bacteriathree").removeClass("shake-little shake-constant"); }, 1000);
            }
        },
        offset: '50%'
    });

    var eerstepunt = new Waypoint({
        element: document.getElementsByClassName('center')[0],
        handler: function(direction) {
            var element1 = document.getElementById('bactpartyoneimg'),
                element2 = document.getElementById('html'),
                element3 = document.getElementById('bactpartytwoimg'),
                element4 = document.getElementById('clock'),
                element5 = document.getElementById('bactpartythreeimg'),
                element6 = document.getElementById('css'),
                element7 = document.getElementById('bactpartyfourimg'),
                element8 = document.getElementById('jquery');
                if (direction == "up") {



                      // set the stage so ramjet copies the right styles...
                      element1.classList.remove('hidden');
                      element3.classList.remove('hidden');
                      element5.classList.remove('hidden');
                      element7.classList.remove('hidden');

                      ramjet.transform(element2, element1, {
                          done: function() {
                              // this function is called as soon as the transition completes
                              element1.classList.remove('hidden');
                          },
                          duration: 2000,
                      });
                      ramjet.transform(element4, element3, {
                          done: function() {
                              // this function is called as soon as the transition completes
                              element3.classList.remove('hidden');
                          },
                          duration: 2000,
                      });
                      ramjet.transform(element6, element5, {
                          done: function() {
                              // this function is called as soon as the transition completes
                              element5.classList.remove('hidden');
                          },
                          duration: 2000,
                      });

                      ramjet.transform(element8, element7, {
                          done: function() {
                              // this function is called as soon as the transition completes
                              element7.classList.remove('hidden');
                          },
                          duration: 2000,
                      });
                      // ...then hide the original elements for the duration of the transition
                      element1.classList.add('hidden');
                      element2.classList.add('hidden');
                      element3.classList.add('hidden');
                      element4.classList.add('hidden');
                      element5.classList.add('hidden');
                      element6.classList.add('hidden');
                      element7.classList.add('hidden');
                      element8.classList.add('hidden');

                  };
          if (direction == "down") {



                // set the stage so ramjet copies the right styles...
                element2.classList.remove('hidden');
                element4.classList.remove('hidden');
                element6.classList.remove('hidden');
                element8.classList.remove('hidden');

                ramjet.transform(element1, element2, {
                    done: function() {
                        // this function is called as soon as the transition completes
                        element2.classList.remove('hidden');
                    },
                    duration: 2000,
                });
                ramjet.transform(element3, element4, {
                    done: function() {
                        // this function is called as soon as the transition completes
                        element4.classList.remove('hidden');
                    },
                    duration: 2000,
                });
                ramjet.transform(element5, element6, {
                    done: function() {
                        // this function is called as soon as the transition completes
                        element6.classList.remove('hidden');
                    },
                    duration: 2000,
                });

                ramjet.transform(element7, element8, {
                    done: function() {
                        // this function is called as soon as the transition completes
                        element8.classList.remove('hidden');
                    },
                    duration: 2000,
                });
                // ...then hide the original elements for the duration of the transition
                element1.classList.add('hidden');
                element2.classList.add('hidden');
                element3.classList.add('hidden');
                element4.classList.add('hidden');
                element5.classList.add('hidden');
                element6.classList.add('hidden');
                element7.classList.add('hidden');
                element8.classList.add('hidden');

            }
        },
        offset: '50%'
    });

});

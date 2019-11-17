{
    init: function(elevators, floors) {
        var elevator = elevators[0];

        elevator.on("idle", function() {
            elevator.goToFloor(Math.floor(floors.length/2));
        });
        
        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum)
        })
        
        for (var i=0; i<floors.length; i++) {
            var create_callback = function(floornum){
                var _floornum=floornum;
                return function() {elevator.goToFloor(_floornum);}
            }
            floors[i].on("up_button_pressed", create_callback(i));
            floors[i].on("down_button_pressed", create_callback(i));
        }
        
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}

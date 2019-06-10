function update() {
				position += speed;    // increment position by speed on every update
	    		console.log("new position: " + position + " vs " + boardWidth);
	    		position += speed;
	    		box.css('left', position);      // set the 'left' CSS property of the box to the new value of position
	    		if(position > boardWidth) {
    				console.log("Right Wall Hit");
    				direction = -1;
    				console.log(direction);
				}
			}
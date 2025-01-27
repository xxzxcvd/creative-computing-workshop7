# creative-computing-workshop7
https://xxzxcvd.github.io/creative-computing-workshop7/

Instructions:
1. Save the above HTML file as index.html and save the sketch.js file in the same directory.
2. Open the index.html file and view it in the browser.
3. You can see 100 red particles randomly wandering in the canvas and bouncing when they hit the border of the canvas.

Study notes:

● Learn how to create custom classes (such as the Particle class) to represent objects in the simulation.
● Master the use of the createVector function to create vectors to represent position and velocity.
● Understand how to update and display objects in the draw function and how to perform boundary checks.
● Be able to use the for...of loop to iterate over objects in an array, update and display them.

Possible improvements:

● You can add interactive elements, such as adding new particles when the mouse is clicked.
● You can use different shapes or colors to represent particles to make the simulation richer.
● You can introduce physical effects, such as gravity, friction, etc., to affect the movement of particles.
● You can use the noise function to add more natural movement effects instead of simple random movement.


sketch.js:
Update function:
- this.position.add(this.velocity);: Add the particle's velocity vector to the position vector to update the particle's position.
Boundary check part: If the particle's x coordinate is less than 0 or greater than the canvas's width, multiply its x-direction velocity by -1 to achieve a rebound effect; similarly, perform similar processing on the y coordinate.
Display function:
  - fill(255, 0, 0);: Set the particle's fill color to red.
  - ellipse(this.position.x, this.position.y, this.size, this.size);: Draw a circle at the particle's current position, with a diameter equal to the particle's size.

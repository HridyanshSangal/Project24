class Iron{
	constructor(x,y)
	{
	var options = {
	restitution:0.8,
	friction:3,
	density:30
	}
	// assign options to the rubber ball
		this.body=Bodies.rectangle(x,y,50,50, options)
		this.width = 50
		this.height = 50
		World.add(world, this.body);
		
	}
	display()
	{
			var rubberpos=this.body.position;
			var angle = this.body.angle	
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.width,this.height)
			pop()
	}

}
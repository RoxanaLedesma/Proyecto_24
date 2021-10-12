class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options={
		restitucion:0.8,
		friction:3,
		density:30
	}
		this.x=x;
		this.y=y;
		this.height=height;
        this.width=width;
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height, options)
		World.add(world, this.body);
        
	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
			rect(0,0,this.width,this.height);
			pop()
	}

}
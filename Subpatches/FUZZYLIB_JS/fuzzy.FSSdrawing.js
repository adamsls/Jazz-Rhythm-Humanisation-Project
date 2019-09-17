// JavaScript Document//
//FUZZYLIB, by Alain Bonardi, Isis Truck and Nicolas Jouandeau//
//Javascript version for Max/MSP//

//LV object - drawing of fuzzysubsets//
//2007-2008//
//
//Fuzzy subsets handled have the following indexes://
//index 0: current measure of the phenomenon//
//index 1 to fSSNumber: fuzzy subsets belonging to the linguistic variable and achieved by fuzzification//
//index fSSNumber+1: response fuzzy subset when obtained from the gmpa object//


// inlets and outlets//
inlets = 1;
outlets = 1;

// global variables//
var fSSNumber = 0;
var infoCurrentData = 0;
var fssName;
var fssValues;

var xmin = 12345678;
var xmax = -12345678;

var backRGB = [1.0, 1.0, 1.0, 1.0];
var lineRGB = [0.0, 0.0, 0.0, 1.0];
var legendRGB = [0.25, 0.25, 0.25, 1.0];
var fssRGB;

var msg1 = "";
var msg2 = "";

var gmpaResponseActive = false;





// set up jsui defaults to 2d//
sketch.default2d();

// initialize graphics
draw();
refresh();

// draw -- main graphics function
function draw()
{
	var mi, ma;		
	with (sketch) 
	{
		// set how the polygons are rendered
		glclearcolor(backRGB[0],backRGB[1],backRGB[2],backRGB[3]); // set the clear color
		glclear(); // erase the background
		//displays axes//	
		glcolor(lineRGB[0], lineRGB[1], lineRGB[2], lineRGB[3]);
		moveto(-2.0, convertTo2dYCoordinate(0.25));
		lineto(2.0, convertTo2dYCoordinate(0.25));
		lineto(2.0, convertTo2dYCoordinate(0.75));
		moveto(-2.0, convertTo2dYCoordinate(0.25));
		lineto(-2.0, convertTo2dYCoordinate(0.75));
		if (fSSNumber > 0)
		{
			moveto(0.0, convertTo2dYCoordinate(0.15));
			textalign("center", "center");
			text(fssName[0]);
		}
		//Alert messages to be displayed at the bottom of the screen : msg1 on the left, msg2 on the right//
		glcolor(1.0, 0.0, 0.0, 1.0);
		moveto(-2.0, convertTo2dYCoordinate(0.15));
		textalign("left", "left");
		text(msg1);
		moveto(2.0, convertTo2dYCoordinate(0.15));
		textalign("right", "right");
		text(msg2);
		//
		if (xmin < xmax)
		{
			glcolor(legendRGB[0], legendRGB[1], legendRGB[2], legendRGB[3]);
			moveto(-2.0, convertTo2dYCoordinate(0.2));
			textalign("left", "left");
			mi = Math.round(xmin*100.0)/100.0;
			text(String(mi));
			moveto(2.0, convertTo2dYCoordinate(0.2));
			textalign("right", "right");
			ma = Math.round(xmax*100.0)/100.0;
			text(String(ma));
			textalign("center", "center");
		}
		
	
			//to draw the fuzzy subset linked to the data//
			//post(currentDataValue, xmin, xmax, "\n");
			//post(aval, bval, cval, dval, "\n");
			
			//post(convertTo2dXCoordinate(aval),"\n");
			
			if (infoCurrentData > 0)
			{
				glcolor(legendRGB[0], legendRGB[1], legendRGB[2], legendRGB[3]);
				fssDraw(0);
			}

		//post("fSSNumber = ", fSSNumber, "\n");	
		if (fSSNumber > 0)
		{
			for (i= 1; i< fSSNumber+2; i++)
			{
				//post("Boucle de dessin sur i = ", i, "\n");
				glcolor(fssRGB[4*i], fssRGB[4*i+1], fssRGB[4*i+2], fssRGB[4*i+3]);		
				fssDraw(i);
			
				//glcolor(lineRGB[0], lineRGB[1], lineRGB[2], lineRGB[3]);
			}
			
		}
	}
}

function fssDraw(num)
{
	var n, i, x, y, deb, fin;
	n = fssValues[num].length / 2;
	//
	if (n > 0)
	{
		//post("_____\n", num, n, fssValues[num][0], fssValues[num][1], "\n");
		deb = n-1;
		fin = 0;
		with (sketch) 
		{
			moveto(convertTo2dXCoordinate(fssValues[num][0]), convertTo2dYCoordinate(fssValues[num][1]/2+0.25));
			for (i = 1; i < n; i++)
			{
				//post(i, fssValues[num][2*i], fssValues[num][2*i+1], "\n");
				if (num == fSSNumber+1)
				{
					//for the possible response FSS//
					gllinewidth(3);
				}
				if (((fssValues[num][2*i-1] > 0) || (fssValues[num][2*i+1] > 0)) || (num == fSSNumber+1))
				{
					//if the segment is not on the x axis or belongs to the response, we draw it, else we don't do it not to hide the x axis//
					if ((num == fSSNumber+1) && (gmpaResponseActive == true))
					{
						lineto(convertTo2dXCoordinate(fssValues[num][2*i]), convertTo2dYCoordinate(fssValues[num][2*i+1]/2+0.25));
					}
					if (num != fSSNumber+1)
					{
						lineto(convertTo2dXCoordinate(fssValues[num][2*i]), convertTo2dYCoordinate(fssValues[num][2*i+1]/2+0.25));
					}
					if (i-1 < deb)
					{
						//first segment not to be on x axis//
						deb = i-1;
					//post("dans boucle i=", i, "deb=", deb, "\n");
					}
					if (i > fin)
					{
						//last segment not to be on x axis//
						fin = i;
					}
				}
				else
				{
					//if we don't draw, at least we move to the right//
					moveto(convertTo2dXCoordinate(fssValues[num][2*i]), convertTo2dYCoordinate(fssValues[num][2*i+1]/2+0.25));
				}
				gllinewidth(1);
			}
			//post("fin boucle i=", i, "deb=", deb, "\n");
			//to prepare the display of the text//
			if (num == 0)
			{
				textalign("center", "center");
				moveto(convertTo2dXCoordinate((fssValues[num][2*deb]+fssValues[num][2*fin])/2.0), convertTo2dYCoordinate(0.95));
				text(fssName[num]);
			}
			else
			{
				switch(num)
				{
					case 1:
					x = -2.0;
					y = convertTo2dYCoordinate(0.80);
					moveto(x, y);
					textalign("left", "left");
					text(fssName[num]);
					//post(num, "->", x, y, "\n");
					break;
					
					case fSSNumber:
					//x= convertTo2dXCoordinate((fssValues[num][0]+fssValues[num][2*n-2])/2.0);
					x = 2.0;
					y = convertTo2dYCoordinate(0.80);
					moveto(x, y);
					textalign("right", "right");
					text(fssName[num]);
					//post(num, "->", x, y, "\n");
					break;
					
					default:
					//post("Valeurs intermédiaires***************\n");
					//x = convertTo2dXCoordinate(0.5*(fssValues[num][0]+fssValues[num][2*n-2]));
					x = convertTo2dXCoordinate(0.5*(fssValues[num][2*deb]+fssValues[num][2*fin]));
					if (num % 2 == 1)
					{
						y = convertTo2dYCoordinate(0.80);
					}
					else
					{
						y = convertTo2dYCoordinate(0.88);
					}
					//post("deb=", deb, "fin=", fin, "x=", x, "y=", y, "\n");
					moveto(x, y);
					textalign("center", "center");
					text(fssName[num]);
					//post(num, "->", x, y, "\n");
					break;
				}
			}
		}
	}
}

function fssNumber(x)
{
	//post("FSSNUMBER\n");
	var i, r, t;
	if (x > 0)
	{
		fSSNumber = x;
		//one more than the number of fuzzy subsets since number 0 is the current data fuzzy subset//
		//MODIFICATION - 10/08/2008//
		//in fact, two more than the number of fuzzy subsets since #0 is the current data fuzzy subset//
		//and #(fssNumber+1) is the resulting FSS after fuzzy implication if necessary//
		fssValues = new Array(fSSNumber+2);
		fssName = new Array(fSSNumber+2);
		for (i = 0; i < fSSNumber+2; i++)
		{
			fssValues[i] = new Array();
		}
		//colors are prepared for fuzzysubsets//
		t = (fSSNumber+2)*4;
		fssRGB = new Array(t);
		for (i=0 ; i < fSSNumber+2; i++)
		{
			r = i % 3;
			switch(r)
			{
				case 0:
				fssRGB[4*i] = 1.0 - (4*i)/t;
				fssRGB[4*i+1] = 0.0;
				fssRGB[4*i+2] = 0.0;
				fssRGB[4*i+3] = 1.0;
				break;
				
				case 1:
				fssRGB[4*i] = 0.0;
				fssRGB[4*i+1] = 1.0 - (4*i+1)/t;
				fssRGB[4*i+2] = 0.0;
				fssRGB[4*i+3] = 1.0;
				break;
				
				case 2:
				fssRGB[4*i] = 0.0;
				fssRGB[4*i+1] = 0.0;
				fssRGB[4*i+2] = 1.0 - (4*i+2)/t;
				fssRGB[4*i+3] = 1.0;
				break;
			}
		}
	//post(x);
	}
}



function fuzzySubset(x)
{
	var n, i, m, p;
	//post("A\n");
	if (fSSNumber > 0)
	{
	n = arguments[1];
	m = arguments.length-2;
	p = m / 2;
	fssName[n] = arguments[0];
	fssValues[n] = new Array(m);
	for (i = 0; i < p; i++)
	{
			fssValues[n][2*i] = arguments[2+i];
			fssValues[n][2*i+1] = arguments[2+p+i];
	}
	//post("FSS #", n, fssValues[n], "\n");
	if (n == fSSNumber + 1)
	{
		//post("Je suis passé par là*******************************\n");
		gmpaResponseActive = true;
	}

	if (n == 0)
	{
		infoCurrentData = 1;
	}
	bang();
	}
}

function dataBoundaries(mi, ma)
{
	xmin = mi;
	xmax = ma;
}
	

function message1(x)
{
	msg1 = arguments[0]+arguments[1];
	//post(arguments[0], arguments[1], msg1, "\n");
}


function message2(x)
{
	msg2 = arguments[0]+arguments[1];
}


function convertTo2dXCoordinate(x)
{
	//post(x, xmin, xmax, 4.0*(x-xmin)/(xmax-xmin)-2.0, "\n");
	return (-2.0+4.0*(x-xmin+0.0)/(xmax-xmin+0.0));
}

function convertTo2dYCoordinate(y)
{
	return (-1.0+2.0*y);
}


// bang -- draw and refresh display
function bang()
{
	draw();
	refresh();
}



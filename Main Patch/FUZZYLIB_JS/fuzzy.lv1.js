//FUZZYLIB, by Alain Bonardi (IMTR Team, Ircam) and Isis Truck (LIASD, University Paris 8)
//with the collaboration of Nicolas Jouandeau (LIASD, University Paris 8)
//
//Javascript version for Max/MSP//

//LINGUISTIC VARIABLE object//
//
//2007-2008//


//_____________________________________________________________________//
//CONSTANTES//
//type of errors met//
//
const NO_ERROR = -1;
const WRONG_FUZZIFCATIONMETHOD_PARAMETER = 1;
const WRONG_FUZZIFICATION_DATANUMBER = 2;
const WRONG_PARTITIONINGMETHOD_PARAMETER = 3;
const WRONG_TRAININGMODE_PARAMETER = 4;
const WRONG_OVERFLOW_MODE = 5;
const WRONG_MEASURE_MODE = 6;
//
//MODIFICATION 31-07-08 - SUPPRESSION DE LA TNORME AU NIVEAU DE LA VARIABLE LINGUISTIQUE//
//const WRONG_DUALTNORMCONORM_PARAMETER = 5;

//fuzzification methods//
const TRIANGULAR_PERCENT = 0;
const TRIANGULAR_ABSOLUTE = 1;
const TRAPEZOIDAL_PERCENT = 2;
const TRAPEZOIDAL_ABSOLUTE = 3;
const SINGLETON = 4;

//partitioning methods//
const CLASSICALPARTITIONING = 0;
const MARTINEZPARTITIONING = 1;
const TRUCKTRAINEDPARTITIONING = 2;

//training mode//
const TRAININGOFF = 0;
const TRAININGON = 1;

//operations possibles//
const TNORM_MIN = 0;
const TNORM_PROD = 1;
const TNORM_MAXSUM = 2;
//T-conorms//
const TCONORM_MAX = 3;
const TCONORM_SUMMINUSPROD = 4;
const TCONORM_MINSUM = 5;
//couples of dual T-norms and T-conorms//
const DUAL_MIN_MAX = 0;
const DUAL_PROD_SUMMINUSPROD = 1;
const DUAL_MAXSUM_MINSUM = 2;
//overflow management//
const OVERFLOW_NOUPDATE_WARNING = 0;
const OVERFLOW_NOUPDATE_NOWARNING = 1;
const OVERFLOW_UPDATE_WARNING = 2;
const OVERFLOW_ACQUISITION_UPDATE = 3;
//input measure//
const PRECISE_MEASURE = 0;
const IMPRECISE_MEASURE = 1;
//when removing an LV, remove or not the impacted rules//
const LV_IMPACT = 0;
const ONLY_LV = 1;
const LV_AND_RULES = 2;


//String constants//
const TRIANGULAR_PERCENT_ID = "triangularPercent";
const TRIANGULAR_ABSOLUTE_ID = "triangularAbsolute";
const TRAPEZOIDAL_PERCENT_ID = "trapezoidalPercent";
const TRAPEZOIDAL_ABSOLUTE_ID = "trapezoidalAbsolute";
const SINGLETON_ID = "singleton";
const CLASSICALPARTITIONING_ID = "classicalPartitioning";
const MARTINEZPARTITIONING_ID = "martinezPartitioning";
const TRUCKTRAINEDPARTITIONING_ID = "truckTrainedPartitioning"; 
const TRAININGOFF_ID = "trainingOff";
const TRAININGON_ID = "trainingOn";
const DUAL_MIN_MAX_ID = "Min___Max";
const DUAL_PROD_SUMMINUSPROD_ID = "x*y___x+y-x*y";
const DUAL_MAXSUM_MINSUM_ID = "Max(x+y-1 0)___Min(x+y 1)";
const TNORM_MIN_ID = "tNorm_Min(x,y)";
const TNORM_PROD_ID = "tNorm_x*y";
const TNORM_MAXSUM_ID = "tNorm_Max(x+y-1,0)";
const TCONORM_MAX_ID = "tCoNorm_Max(x,y)";
const TCONORM_SUMMINUSPROD_ID = "tCoNorm_x+y-x*y";
const TCONORM_MINSUM_ID = "tCoNorm_Min(x+y,1)";
const OVERFLOW_NOUPDATE_WARNING_ID = "noUpdate_warning_boundaries";
const OVERFLOW_NOUPDATE_NOWARNING_ID = "noUpdate_noWarning_boundaries";
const OVERFLOW_UPDATE_WARNING_ID = "update_warning_boundaries";
const OVERFLOW_ACQUISITION_UPDATE_ID = "update_acquisition_boundaries";
const PRECISE_MEASURE_ID = "preciseMeasure";
const IMPRECISE_MEASURE_ID = "impreciseMeasure";
const LV_IMPACT_ID = "LVremoveImpact";
const ONLY_LV_ID = "onlyLV";
const LV_AND_RULES_ID = "LVandRules";
//
//Linguistic Variables Types//
const RCFI_ID = 0;
const OLV_ID = 1;

//ARBITRARY MIN AND MAX FLOAT VALUES//
const MAX_APP = 12345678.0;
const MIN_APP = -12345678.0;

//NONAME CONSTANT
const NONAME = "NONAME";
//IS_NONE CONSTANT
const IS_NONE = -1;

//_____________________________________________________________________//

//defines 3 inlets//
//to receive the inputs//
//inlet 1 receives the data name. For instance 'qom' for 'quantity of movement', prefixed by 'dataName'//
//inlet 1 receives the output-format, it means the names given to the fuzzysubsets used, prefixed by 'outFormat'//
//inlet 1 also receives the rcfi parameters, with various prefixes//
//inlet 2 receives the current input data value//
//inlet 3 receives the expert data
inlets = 3;

//defines 2 outlet//
//outlet 1 sends the fuzzy data to be used in mpga object//
//outlet 2 sends the data to the js user interface//
//outlet 3 sends update data to the control and parameter interface//
outlets = 3;
const FSS_OUTLET = 0;
const FSS_DISPLAY_OUTLET = 1;

//_____________________________________________________________________//

//global variables//


//number of arguments passed for the Fuzzy Method at the instanciation of the object//
var nbArgumentsFuzzyMethod = 0;
//number of arguments passed for the Partitioning Method at the instanciation of the object//
var nbArgumentsPartitioningMethod = 0;

//var currentLV = new LV(NONAME, RCFI_ID);
var errorType = NO_ERROR;

var dataNameValue = "";
var fssVal = new FSS("");
var modellingFSS = new Array();

//current input data value (initially 0.0)//
var currentDataValue = 0.0;
//fuzzySubsetNumber : number of fuzzy subsets used//
var fuzzySubsetNumber = 0;
//fuzzification method and data genre (initially 0)//
var myFuzzyficationMethod = TRIANGULAR_PERCENT;
//partitioning method (initially 0)//
var myPartitioningMethod = CLASSICALPARTITIONING;
//overflow mode//
var myOverflowMode = OVERFLOW_NOUPDATE_WARNING;
//measure//
var myMeasureMode = PRECISE_MEASURE;
//training on or off (initially 0 = off)//
var myTrainingMode = TRAININGOFF;
//leftboundary for fuzzification//
var leftBoundaryValue = 0.0;
//rightboundary for fuzzification//
var rightBoundaryValue = 0.0;
//halfKernelLength for trapezoidal fuzzification//
var halfKernelValue = 0.0;
//min, max and average for the input data//
var dataMin = MAX_APP;
var dataMax = MIN_APP;
var dataInputMin = MAX_APP;
var dataInputMax = MIN_APP;
var dataMinAlert = MAX_APP;
var dataMaxAlert = MIN_APP;
var dataAvg = 0.;
var dataReceivedNumber = 0;




//_____________________________________________________________________//
//_____________________________________________________________________//
//_____________________________________________________________________//
//Functions to take into account the inputs and parameters selected by the user//
//_____________________________________________________________________//
//_____________________________________________________________________//
//_____________________________________________________________________//


//_____________________________________________________________________//
//This function receives the name given to the linguistic variable     //
//by the user														   //
//_____________________________________________________________________//

function dataName(x)
{
	dataNameValue = x;
	fssVal.FSS_SetFSSName(dataNameValue);
	currentDataFuzzification();
	//displaysGlobalVariables();
}

//_____________________________________________________________________//
//This function receives the labels given to the various fuzzy subsets //
//of the linguistic variable by the user                               //
//_____________________________________________________________________//
function outFormat(x)
{
	var i;
	fuzzySubsetNumber = arguments.length;
	//outFormatValue = new Array(fuzzySubsetNumber);
	if (nbArgumentsFuzzyMethod == 0)
	{
		//automatic update only if no parameters of fuzzy method passed//
		induceBoundariesFromData();
	}
	FSSSizing();
	for (i = 0 ; i < arguments.length; i++)
	{
		FSSInstantiation(i, arguments[i]);
	}
	outlet(1, "fssNumber", fuzzySubsetNumber);
	partitioningComputing();
	//displaysGlobalVariables();
}


//_____________________________________________________________________//
//This function dumps all information that model the linguistic variable//
//into the message window of Max/MSP                                   //
//_____________________________________________________________________//

function dump()
{
	post("_____________________\n");
	displaysParameters();
	displaysDataProperties();
	displaysFSSData();
}


//_____________________________________________________________________//
//This function resets overflow information caused by data out of the  //
//scope described by the user for the linguistic variable              //
//_____________________________________________________________________//

function overflowReset()
{
	//post("Fonction OVERFLOW RESET\n");
	outlet(1, "message1", "", "");
	outlet(1, "message2", "", "");
	partitioningComputing();
	if (dataMinAlert < dataMin)
	{
		dataMinAlert = dataMin;
	}
	if (dataMaxAlert > dataMax)
	{
		dataMaxAlert = dataMax;
	}
	outlet(2, "overflow", 0);
}



//_____________________________________________________________________//
//This function receives the half kernel value used for trapezoidal FSS//
//_____________________________________________________________________//

function halfKernelLength(x)
{
	//updates only if value has changed//
	if (halfKernelValue != x)
	{
		halfKernelValue = x;
		induceBoundariesFromData();
		partitioningComputing();
		//displaysGlobalVariables();
	}
}

//_____________________________________________________________________//
//This function receives the leftBoundary value used for FSS           //
//_____________________________________________________________________//

function leftBoundary(x)
{
	//updates only if value has changed//
	if (leftBoundaryValue != x)
	{
		leftBoundaryValue = x;
		partitioningComputing();
		//displaysGlobalVariables();
	}
}

//_____________________________________________________________________//
//This function receives the rightBoundary value used for FSS          //
//_____________________________________________________________________//

function rightBoundary(x)
{
	//updates only if value has changed//
	if (rightBoundaryValue != x)
	{
		rightBoundaryValue = x;
		partitioningComputing();
		//displaysGlobalVariables();
	}
}

//_____________________________________________________________________//
//This function receives the fuzzificationMethod choice                //
//_____________________________________________________________________//

function fuzzificationMethod(x)
{
	var err;
	//post("Fuzzification method", x, "\n");
	err = parseFuzzificationMethod(x);
	partitioningComputing();
	//post("Verif", currentLV.LV_getFuzzificationMethodLabel());
	//displaysGlobalVariables();
}


//_____________________________________________________________________//
//This function receives the partitioningMethod choice                 //
//_____________________________________________________________________//
function partitioningMethod(x)
{
	var err;
	//post("Partitioning", x, "\n");
	err = parsePartitioningMethod(x);
	if (myPartitioningMethod == CLASSICALPARTITIONING)
	{
		induceBoundariesFromData();
		partitioningComputing();
	}
	//displaysGlobalVariables();
}

//_____________________________________________________________________//
//This function receives the two extrema boundaries of the linguistic  //
//variable. They are received as a list of two arguments, that can be  //
//given in any order, and will be sorted in any case.                  //
//_____________________________________________________________________//
function list(a)
{
	//post("inlet = ", inlet, "\n");
	if (inlet == 2)
	{
		if (arguments.length == 2)
		{
			
			if (arguments[0] < arguments[1])
			{
				dataMin = arguments[0];
				dataMax = arguments[1];
			}
			else
			{
				dataMin = arguments[1];
				dataMAx = arguments[0];
			}
			//As soon as the two numbers are given, we compare to the alert min and max//
			//->if necessary, we erase the alert messages, and reset the alert values//
			updatesBoundariesInfo();
		}
		else
		{
			post("Expected number of expert data boundaries should be 2 !\n");
		}
	}
}

//_____________________________________________________________________//
//This function receives the trainingMode choice done by the user      //
//_____________________________________________________________________//

function trainingMode(x)
{
	var err;
	err = parseTrainingMode(x);
	//displaysGlobalVariables();
}

//_____________________________________________________________________//
//This function receives the trainingMode choice done by the user      //
//_____________________________________________________________________//

function trainingModeAndUpdate(x)
{
	var err;
	err = parseTrainingMode(x);
	//post("Erreur = ", err, "TrainingMode = ", myTrainingMode, "\n");
	outlet(2, "trainingMode", myTrainingMode);
	//displaysGlobalVariables();
}

//_____________________________________________________________________//
//This function resets training data for building adequate FSS         //
//_____________________________________________________________________//

function resetTrainingData()
{
	reInitDataProperties();
	post("Data reset for LV = ", dataNameValue, "\n");
}

//_____________________________________________________________________//
//This function receives the overflowMode choice done by the user      //
//_____________________________________________________________________//
function overflowMode(x)
{
	if ((x < OVERFLOW_NOUPDATE_WARNING) || (x > OVERFLOW_ACQUISITION_UPDATE))
	{
		return WRONG_OVERFLOW_MODE;
	}
	else
	{
		myOverflowMode = x;
		return NO_ERROR;
	}
}

//_____________________________________________________________________//
//This function receives the measure mode choice done by the user      //
//_____________________________________________________________________//
function measureMode(x)
{
	if ((x != PRECISE_MEASURE) && (x != IMPRECISE_MEASURE))
	{
		return WRONG_MEASURE_MODE;
	}
	else
	{
		myMeasureMode = x;
		return NO_ERROR;
	}
}

//________________________________________________________________________________________________________//
//This function receives the data necessary for Truck algorithm: min, max and average of the training data//
//Min and max of training data should be included in the boundaries given by the expert//
//_______________________________________________________________________________________________________//
function setTrainingData(x)
{
	if (arguments.length == 3)
	{
		//requires three arguments: min, max and average value of the training data//
		setDataInputMin(arguments[0]);
		setDataInputMax(arguments[1]);
		setDataAvg(arguments[2]);
		partitioningComputing();
	}
	else
	{
		post("Wrong number of arguments for 'setTrainingData' message. Got", arguments.length, ", 3 were expected\n");
	}
}



//_____________________________________________________________________//
//This function receives a floating point value and processes it as an //
//input (precise measure) of the linguistic variable                   //
//_____________________________________________________________________//
function msg_float(x)
{
	var overflowCount = 0;
	//post("inlet = ", inlet, "\n");
	if (inlet == 1)
	{
		if (x < dataMin)
		{
			//if (x < dataMinAlert)
			//{
				dataMinAlert = x;
				overflowCount += 1;
				switch(myOverflowMode)
				{
					case OVERFLOW_NOUPDATE_WARNING:
					outlet(1, "message1", x, " lower than expert min");
					break;
					//
					case OVERFLOW_UPDATE_WARNING:
					outlet(1, "message1", x, " lower than expert min");
					//dataInputMin = x;
					dataMin = x;
					outlet(1, "dataBoundaries", dataMin, dataMax);
					break;
					//
					case OVERFLOW_ACQUISITION_UPDATE:
					if ((myPartitioningMethod == TRUCKTRAINEDPARTITIONING) && (myTrainingMode == TRAININGON))
					{
						outlet(1, "message1", x, " lower than expert min");
						//dataInputMin = x;
						dataMin = x;
						outlet(1, "dataBoundaries", dataMin, dataMax);
					}
					break;
				}
			//}
		}
		
		if (x > dataMax)
		{
			//if (x > dataMaxAlert)
			//{
				dataMaxAlert = x;
				overflowCount += 1;
				switch(myOverflowMode)
				{
					case OVERFLOW_NOUPDATE_WARNING:
					//post("NOUPDATE_WARNING Former dataMax = ", dataMax, "\n");
					outlet(1, "message2", x, " greater than expert max");
					break;
					//
					case OVERFLOW_UPDATE_WARNING:
					outlet(1, "message2", x, " greater than expert max");
					//post("UPDATE_WARNING Former dataMax = ", dataMax, "\n");
					//dataInputMax = x;
					dataMax = x;
					outlet(1, "dataBoundaries", dataMin, dataMax);
					break;
					//
					case OVERFLOW_ACQUISITION_UPDATE:
					if ((myPartitioningMethod == TRUCKTRAINEDPARTITIONING) && (myTrainingMode == TRAININGON))
					{
						outlet(1, "message2", x, " greater than expert max");
						//dataInputMax = x;
						//post("Former dataMax = ", dataMax, "\n");
						dataMax = x;
						//post("Mise a jour dataMax = ", dataMax, "\n");
						outlet(1, "dataBoundaries", dataMin, dataMax);
					}
					break;
				}
			//}
		}
		if (overflowCount > 0)
		{
			outlet(2, "overflow", 1)
		}
		currentDataValue = x;
		//when the float comes through the second input pin, it means it is a data value//
		//it updates the data properties only when we are in training mode
		if ((myTrainingMode == TRAININGON) && ((overflowCount == 0) || ((overflowCount > 0) && (myOverflowMode == OVERFLOW_UPDATE_WARNING))))
		{
			//post("updatesDataProperties(x)\n");
			updatesDataProperties(x);
			//currentLV.LV_displaysDataProperties();
		}
		//post(currentLV.LV_GetDataMin(), currentLV.LV_GetDataMax(), "\n");
		//currentLV.LV_displaysDataProperties();
		if (dataMin < dataMax)
		{
			//post("CurrentDataFuzzification\n");
			currentDataFuzzification();
		}
	}
}

//_____________________________________________________________________//
//this function is used to remove LV from gmpa//
//
//it has a parameter with two possible constant values: onlyLV (0 by default) LVandRules (1)
//
//_____________________________________________________________________//

function removeLV(x)
{
	//post("removeLV function \n");
	switch(x)
	{
		case LV_IMPACT_ID:
		outlet(FSS_OUTLET, "LVDeleted", dataNameValue, LV_IMPACT);
		break;
		
		case ONLY_LV_ID:
		outlet(FSS_OUTLET, "LVDeleted", dataNameValue, ONLY_LV);
		break;
		
		case LV_AND_RULES_ID:
		outlet(FSS_OUTLET, "LVDeleted", dataNameValue, LV_AND_RULES);
		break;
		
		default:
		outlet(FSS_OUTLET, "LVDeleted", dataNameValue, LV_IMPACT);
		break;
	}
}
//_____________________________________________________________________//
//Resends declaration information of the LV
//_____________________________________________________________________//
function SelfDeclareLV()
{
	var i;
	var msg = new Array();
	for (i = 0; i < fuzzySubsetNumber; i++)
	{
		//modellingFSS[i].FSS_Display(i+1);
		//MODIFICATION 31-07-08 FSS sent to outlet 0 either for OLV or RCFI//
		//if (this.lvType == OLV_ID)
		//{
		//for OLV : the contents of the FSS are sent on outlet 0//
		msg.push(modellingFSS[i].FSS_GetFSSName());
		msg.push(modellingFSS[i].FSS_GetNumberOfCoord());
		for (j = 0; j < modellingFSS[i].FSS_GetNumberOfCoord(); j++)
		{
			msg.push(modellingFSS[i].FSS_GetCoordX(j));
			msg.push(modellingFSS[i].FSS_GetCoordY(j));
		}
	//}
		//for drawing : number 0 is the current data fuzzy subset//
	}
	outlet(FSS_OUTLET, "LVDeclared", dataNameValue, fuzzySubsetNumber, msg, dataMin, dataMax);
}

//_____________________________________________________________________//
//_____________________________________________________________________//
//_____________________________________________________________________//
//Functions used to restore the context when reloading the patch       //
//_____________________________________________________________________//
//_____________________________________________________________________//
//_____________________________________________________________________//



//_____________________________________________________________________//
//This function receives the dataMinAlert value                        //
//_____________________________________________________________________//
function setDataMinAlert(x)
{
	dataMinAlert = x;
}

//_____________________________________________________________________//
//This function receives the dataMaxAlert value                        //
//_____________________________________________________________________//
function setDataMaxAlert(x)
{
	dataMaxAlert = x;
}

//_____________________________________________________________________//
//This function receives the dataInputMin value                        //
//_____________________________________________________________________//
function setDataInputMin(x)
{
	dataInputMin = x;
}

//_____________________________________________________________________//
//This function receives the dataInputMax value                        //
//_____________________________________________________________________//
function setDataInputMax(x)
{
	dataInputMax = x;
}

//_____________________________________________________________________//
//This function receives the dataMin value (low boundary of the LV)    //
//_____________________________________________________________________//
function setDataMin(x)
{
	dataMin = x;
}

//_____________________________________________________________________//
//This function receives the dataMax value (high boundary of the LV)    //
//_____________________________________________________________________//
function setDataMax(x)
{
	dataMax = x;
}

//_____________________________________________________________________//
//This function receives the average value of the data passed for      //
//building FSS according to training data, for instance in Truck's     //
//method.													           //
//_____________________________________________________________________//
function setDataAvg(x)
{
	dataAvg = x;
}

//_____________________________________________________________________//
//This function receives the number of data passed for                 //
//building FSS according to training data, for instance in Truck's     //
//method.													           //
//_____________________________________________________________________//
function setDataReceivedNumber(x)
{
	dataReceivedNumber = x;
}


//_____________________________________________________________________//
//_____________________________________________________________________//
//_____________________________________________________________________//
//Functions used to compute important data of FSS                      //
//_____________________________________________________________________//
//_____________________________________________________________________//
//_____________________________________________________________________//



//_____________________________________________________________________//
//This function computes some boundaries information and sends warnings//
//if necessary in the display jsui                                     //
//_____________________________________________________________________//
function updatesBoundariesInfo()
{
	//post("updatesBoundariesInfo\n");
	var overflowCount = 0;
	//
	if (dataMin <= dataMinAlert)
		{
			outlet(1, "message1", "", "");
			dataMinAlert = dataMin;
		}
	else
		{
			outlet(1, "message1", dataMinAlert, " lower than expert min");
			overflowCount += 1;
		}
	if (dataMax >= dataMaxAlert)
		{
			outlet(1, "message2", "", "");
			dataMaxAlert = dataMax;
		}
	else
		{
			outlet(1, "message2", dataMaxAlert, " greater than expert min");
			overflowCount += 1;
		}
	if (overflowCount > 0)
	{
		outlet(2, "overflow", 1);
	}
	else
	{
		outlet(2, "overflow", 0);
	}
	partitioningComputing();
}



//_____________________________________________________________________//
//
//Sends to jsui object all graphic information necessary to represent the linguistic variable FSS//
//
//_____________________________________________________________________//

function allGraphicInfo()
{
	var i;
	outlet(1, "dataBoundaries", dataMin, dataMax);
	updatesBoundariesInfo();
	outlet(1, "fssNumber", fuzzySubsetNumber);
	for (i = 0; i < fuzzySubsetNumber; i++)
	{
		modellingFSS[i].FSS_Display(i+1, FSS_DISPLAY_OUTLET);
	}
	fssVal.FSS_Display(0, FSS_DISPLAY_OUTLET);
}

//_____________________________________________________________________//
// This function sends feedback information to the control panel       //
//
//_____________________________________________________________________//

function initialCommandAndParameterSet()
{
	//
	outlet(2, "fuzzificationMethod", myFuzzyficationMethod);
	outlet(2, "partitioningMethod", myPartitioningMethod);
	outlet(2, "trainingMode", myTrainingMode);
	outlet(2, "leftBoundary", leftBoundaryValue);
	outlet(2, "rightBoundary", rightBoundaryValue);
	outlet(2, "halfKernel", halfKernelValue);
}

//_____________________________________________________________________//
//
// This function sends graphical info and feedback info to restore     //
//the context of the linguistic variable as saved when leaving         //
//
//_____________________________________________________________________//
function loadbang()
{
	allGraphicInfo();
	initialCommandAndParameterSet();
}

//_____________________________________________________________________//
//
//Save function to save and restore basic parameters of the Linguistic Variable//
//
//_____________________________________________________________________//
function save()
{
	var i;
	var msg = new Array();
	//we collect the labels of the FSS created//
	for (i = 0; i < fuzzySubsetNumber; i++)
	{
		msg.push(modellingFSS[i].FSS_GetFSSName());
	}
	embedmessage("fuzzificationMethod", getFuzzificationMethodLabel(myFuzzyficationMethod));
	embedmessage("partitioningMethod", getPartitioningMethodLabel(myPartitioningMethod));
	embedmessage("trainingMode", getTrainingModeLabel(myTrainingMode));
	embedmessage("leftBoundary", leftBoundaryValue);
	embedmessage("rightBoundary", rightBoundaryValue);
	embedmessage("halfKernelLength", halfKernelValue);
	embedmessage("overflowMode", myOverflowMode);
	embedmessage("measureMode", myMeasureMode);
	embedmessage("setDataMinAlert", dataMinAlert);
	embedmessage("setDataMaxAlert", dataMaxAlert);
	embedmessage("setDataInputMin", dataInputMin);
	embedmessage("setDataInputMax", dataInputMax);
	embedmessage("setDataMin", dataMin);
	embedmessage("setDataMax", dataMax);
	embedmessage("setDataAvg", dataAvg);
	embedmessage("setDataReceivedNumber", dataReceivedNumber);
	embedmessage("currentDataFuzzification", currentDataValue);
	embedmessage("updatesBoundariesInfo");
	embedmessage("outFormat", msg);
	embedmessage("dataName", dataNameValue);
	embedmessage("partitioningComputing");
}

//_____________________________________________________________________//
//
//analysis of the arguments passed to the MaxObject, supposed to be RCFI parameters//
//
//_____________________________________________________________________//

//
if (jsarguments.length > 1)
{
	var argumentError;
	var indexArgument, indexFuzzyMethodArgument, indexPartitioningMethodArgument;
	errorType = NO_ERROR;
	//we examine all arguments//
	indexFuzzyMethodArgument = -1;
	indexPartitioningMethodArgument = -1;
	for (indexArgument = 1; indexArgument < jsarguments.length; indexArgument++)
	{
		//looking for a fuzzification method//
		argumentError = parseFuzzificationMethod(jsarguments[indexArgument]);
		if (argumentError == NO_ERROR)
		{
			indexFuzzyMethodArgument = indexArgument;
		}
		else
		{
			//looking for a partitioning method//
			argumentError = parsePartitioningMethod(jsarguments[indexArgument]);
			if (argumentError == NO_ERROR)
			{
				indexPartitioningMethodArgument = indexArgument;
			}
			else
			{
				//looking for an overflow mode (no parameter)//
				argumentError = parseOverflowMode(jsarguments[indexArgument]);
				if (argumentError != NO_ERROR)
				{
					//looking for measure mode (no parameter)//
					argumentError = parseMeasureMode(jsarguments[indexArgument]);
				}
			}
		}
	}
	if (indexFuzzyMethodArgument == -1)
	{
		errorType = WRONG_FUZZIFCATIONMETHOD_PARAMETER;
		//post("error : missing fuzzification method indication\n");
	}
	else
	{
		if (indexPartitioningMethodArgument == -1)
		{
			errorType = WRONG_PARTITIONINGMETHOD_PARAMETER;
			//post("error : missing partitioning method indication\n");
		}
		else
		{
			//both required information are present//
			if (indexFuzzyMethodArgument < indexPartitioningMethodArgument)
			{
				//first information about the fuzzy method//
				//number of arguments for the fuzzy and partitioning methods//
				nbArgumentsFuzzyMethod = indexPartitioningMethodArgument - indexFuzzyMethodArgument -1;
				nArgumentsPM = jsarguments.length - indexPartitioningMethodArgument;
			}
			else
			{
				//first information about the partitioning method//
				//number of arguments for the fuzzy and partitioning methods//
				nbArgumentsPartitioningMethod = indexFuzzyMethodArgument - indexPartitioningMethodArgument -1;
				nbArgumentsFuzzyMethod = jsarguments.length - indexFuzzyMethodArgument;
			}
			//examine fuzzy method arguments//
			induceBoundariesFromData();
			switch (nbArgumentsFuzzyMethod)
			{
				case 1:
				//consider this value is one symetric value for boundaries (same for left and right)
				leftBoundaryValue = jsarguments[indexFuzzyMethodArgument+1];
				rightBoundaryValue =leftBoundaryValue;
				break;
				
				case 2:
				//consider the two values as left and right boundaries//
				leftBoundaryValue = jsarguments[indexFuzzyMethodArgument+1];
				rightBoundaryValue = jsarguments[indexFuzzyMethodArgument+2];
				break;
				
				case 3:
				//consider the three values as halfkernel value, left and right boundaries//
				halfKernelValue = jsarguments[indexFuzzyMethodArgument+1];
				leftBoundaryValue = jsarguments[indexFuzzyMethodArgument+2];
				rightBoundaryValue = jsarguments[indexFuzzyMethodArgument+3];
				break;
			}
			switch (nbArgumentsPartitioningMethod)
			{
				case 1:
				//consider this value as trainingon or training off indication//
				argumentError = parseTrainingMode(jsarguments[indexPartitioningMethodArgument+1]);
				if (argumentError != NO_ERROR)
				{
					errorType = WRONG_TRAININGMODE_PARAMETER;
					post("error : wrong training mode indication\n");
				}
				break;
			}
		}
	}
	partitioningComputing();
	//displaysGlobalVariables();
}

//_____________________________________________________________________//
//
//This function fuzzifies the current input as a singleton             //
//
//_____________________________________________________________________//
function currentDataFuzzification()
{
	var i;

	//if ((myPartitioningMethod != TRUCKTRAINEDPARTITIONING) || ((myPartitioningMethod == TRUCKTRAINEDPARTITIONING) && (myTrainingMode == TRAININGOFF)))
	//{
		fssVal.FSS_SetFSSName(dataNameValue);
		//post("MyMeasureMode=", myMeasureMode, "myFuzzyMethod=", myFuzzyficationMethod, "\n");
		if (myMeasureMode == PRECISE_MEASURE)
		{
			fssVal.FSS_Fuzzyfication(currentDataValue, dataMin, dataMax, SINGLETON, halfKernelValue, leftBoundaryValue, rightBoundaryValue);
		}
		else
		{
			fssVal.FSS_Fuzzyfication(currentDataValue, dataMin, dataMax, myFuzzyficationMethod, halfKernelValue, leftBoundaryValue, rightBoundaryValue);
		}
		fssVal.FSS_Display(0, FSS_DISPLAY_OUTLET);
		if (dataNameValue != NONAME)
		{
			//we cannot send results if the LV has no name//
			outlet(FSS_OUTLET, "LVCurrentInput", dataNameValue, currentDataValue);
		}
	//}
}

//_____________________________________________________________________//
//
//This function resets data properties (of training data used to build //
//adequate FSS)														   //
//
//_____________________________________________________________________//
function reInitDataProperties()
{
	//this.dataMin = MAX_APP;
	//this.dataMax = MIN_APP;
	dataInputMin = MAX_APP;
	dataInputMax = MIN_APP;
	dataAvg = 0.;
	dataReceivedNumber = 0;
}


//_____________________________________________________________________//
//
//This function parses the string received, supposed to be the id of a fuzzification method//
//
//_____________________________________________________________________//

function parseFuzzificationMethod(x)
{
	//checks the fuzzification method passed as an argument of the Max RCFI object//
	switch(x)
	{
		case TRIANGULAR_PERCENT_ID:
		myFuzzyficationMethod = TRIANGULAR_PERCENT;
		return NO_ERROR;
		break;

		case TRIANGULAR_ABSOLUTE_ID:
		myFuzzyficationMethod = TRIANGULAR_ABSOLUTE;
		return NO_ERROR;
		break;

		case TRAPEZOIDAL_PERCENT_ID:
		myFuzzyficationMethod = TRAPEZOIDAL_PERCENT;
		return NO_ERROR;
		break;
		
		case TRAPEZOIDAL_ABSOLUTE_ID:
		myFuzzyficationMethod = TRAPEZOIDAL_ABSOLUTE;
		return NO_ERROR;
		break;

		case SINGLETON_ID:
		myFuzzyficationMethod = SINGLETON;
		return NO_ERROR;
		break;

		default:
		return WRONG_FUZZIFCATIONMETHOD_PARAMETER;
		//post("error: argument given :", x, "as fuzzification method is wrong\n");
		break;
	}
}

//_____________________________________________________________________//
//
//This function parses the string received, supposed to be the id of a partitioning method//
//
//_____________________________________________________________________//

function parsePartitioningMethod(x)
{
	//check the partitioning method passed as an argument of the Max RCFI object//
	switch(x)
	{
		case CLASSICALPARTITIONING_ID:
		myPartitioningMethod = CLASSICALPARTITIONING;
		return NO_ERROR;
		break;

		case MARTINEZPARTITIONING_ID:
		myPartitioningMethod = MARTINEZPARTITIONING;
		return NO_ERROR;
		break;
		
		case TRUCKTRAINEDPARTITIONING_ID:
		myPartitioningMethod = TRUCKTRAINEDPARTITIONING;
		if ((dataInputMax <= dataMax) && (dataInputMax >= dataMin) && (dataInputMin <= dataMax) && (dataInputMin >= dataMin))
		{
			partitioningComputing();
		}
		return NO_ERROR;
		break;

		default:
		return WRONG_PARTITIONINGMETHOD_PARAMETER;
		//post("error: argument given :", x, "as partitioning method is wrong\n");
		break;
	}
}

//_____________________________________________________________________//
//
//This function parses the string received, supposed to be the id of a training mode//
//
//_____________________________________________________________________//

function parseTrainingMode(x)
{
	//checks the training mode passed as an argument of the Max RCFI object//
	switch(x)
	{
		case TRAININGOFF_ID:
		//MODIFICATION 31-07-08//
		//If training was on and is nov set off, we have to compute partitioning thanks to Truck's algorithm//
		if (myTrainingMode == TRAININGON)
		{
			partitioningComputing();
		}
		myTrainingMode = TRAININGOFF;
		return NO_ERROR;
		break;

		case TRAININGON_ID:
		myTrainingMode = TRAININGON;
		return NO_ERROR;
		break;

		default:
		return WRONG_TRAININGMODE_PARAMETER;
		//post("error: argument given :", x, "as training mode is wrong\n");
		break;
	}
}


//_____________________________________________________________________//
//
//This function parses the string received, supposed to be the ID of the overflow mode//
//
//_____________________________________________________________________//
function parseOverflowMode(x)
{
	switch (x)
	{
		case OVERFLOW_NOUPDATE_WARNING_ID:
		myOverflowMode = OVERFLOW_NOUPDATE_WARNING;
		return NO_ERROR;
		break;
		
		case OVERFLOW_NOUPDATE_NOWARNING_ID:
		myOverflowMode = OVERFLOW_NOUPDATE_NOWARNING;
		return NO_ERROR;
		break;
		
		case OVERFLOW_UPDATE_WARNING_ID:
		myOverflowMode = OVERFLOW_UPDATE_WARNING;
		return NO_ERROR;
		break;
		
		case OVERFLOW_ACQUISITION_UPDATE_ID:
		myOverflowMode = OVERFLOW_ACQUISITION_UPDATE;
		return NO_ERROR;
		break;
		
		default:
		return WRONG_OVERFLOW_MODE;
		break;
	}
}


//_____________________________________________________________________//
//
//This function parses the string received, supposed to be the ID of the measure mode//
//
//_____________________________________________________________________//
function parseMeasureMode(x)
{
	switch (x)
	{
		case PRECISE_MEASURE_ID:
		myMeasureMode = PRECISE_MEASURE;
		return NO_ERROR;
		break;
		
		case IMPRECISE_MEASURE_ID:
		myMeasureMode = IMPRECISE_MEASURE;
		return NO_ERROR;
		break;
		
		default:
		return WRONG_MEASURE_MODE;
		break;
	}
}



//_____________________________________________________________________//
//
//
//The choice by the user of a partitioning method may induce the automatic computation of left and right boundaries//
//
//_____________________________________________________________________//
function induceBoundariesFromData()
{
	switch(myPartitioningMethod)
	{
		case CLASSICALPARTITIONING:
		switch(myFuzzyficationMethod)
		{
			case TRIANGULAR_PERCENT:
			//post("triangularPercent Induce\n");
			if (fuzzySubsetNumber > 1)
			{
				leftBoundaryValue = 1/(fuzzySubsetNumber - 1);
			}
			else
			{
				leftBoundaryValue = 0.5;
			}
			rightBoundaryValue = leftBoundaryValue;
			//post("triangularPercent ->", leftBoundaryValue, rightBoundaryValue, "\n");
			break;

			case TRIANGULAR_ABSOLUTE:
			if (fuzzySubsetNumber > 1)
			{
				leftBoundaryValue = (dataMax-dataMin)/(fuzzySubsetNumber - 1);
			}
			else
			{
				leftBoundaryValue = (dataMax-dataMin)/2;
			}
			rightBoundaryValue = leftBoundaryValue;
			break;

			case TRAPEZOIDAL_PERCENT:
			if (fuzzySubsetNumber > 1)
			{
				leftBoundaryValue = (1 - (2*fuzzySubsetNumber-2)*halfKernelValue)/(fuzzySubsetNumber - 1);
			}
			else
			{
				leftBoundaryValue = (1-2*halfKernelValue)/2;
			}
			rightBoundaryValue = leftBoundaryValue;
			break;
		
			case TRAPEZOIDAL_ABSOLUTE:
			if (fuzzySubsetNumber > 1)
			{
				leftBoundaryValue = (dataMax-dataMin - (2*fuzzySubsetNumber-2)*halfKernelValue)/(fuzzySubsetNumber - 1);
			}
			else
			{
				leftBoundaryValue = (dataMax-dataMin-2*halfKernelValue)/2;
			}
			rightBoundaryValue = leftBoundaryValue;
			break;
		}
		break;
	}
	//post("induce ->", leftBoundaryValue, rightBoundaryValue, "\n");
}

//_____________________________________________________________________//
//
//This function displays the global variables
//
//_____________________________________________________________________//

function displaysParameters()
{
	var i;
	post("dataName = ", dataNameValue, "\n");
	post("fuzzySubsetNumber = ", fuzzySubsetNumber, "\n");
	//i = 0;
	//post("outFormat = ");
	//do {
		//post(outFormatValue[i]," ");
	//i += 1;
	//} while (i < fuzzySubsetNumber);
	post("\n");
	post("fuzzificationMethod = ", getFuzzificationMethodLabel(myFuzzyficationMethod), "\n");
	post("leftBoundaryValue = ", leftBoundaryValue, "\n");
	post("rightBoundaryValue = ", rightBoundaryValue, "\n");
	post("halfKernelValue = ", halfKernelValue, "\n");
	post("partitioningMethod = ", getPartitioningMethodLabel(myPartitioningMethod), "\n");
	post("trainingMode = ", getTrainingModeLabel(myTrainingMode), "\n");
	post("Overflow Mode = ", myOverflowMode, "\n");
	//post("tNorm = ", this.LV_getTNormLabel(this.tNormID), "\n");
	//post("tCoNorm = ", this.LV_getTCoNormLabel(this.tCoNormID), "\n");
	//MODIFICATION 31-07-08 - SUPPRESSION DE LA TNORME AU NIVEAU DE LA VARIABLE LINGUISTIQUE//
	//post("dualTNormAndCoNorm = ", this.LV_getDualTNormCoNormLabel(this.dualTNormAndCoNormID), "\n");
}


//_____________________________________________________________________//
//
//This function displays the global variables
//
//_____________________________________________________________________//

function displaysDataProperties()
{
	post("\n");
	post("expert minimum = ", dataMin, "\n");
	post("expert maximum = ", dataMax, "\n");
	post("alert minimum = ", dataMinAlert, "\n");
	post("alert maxmum = ", dataMaxAlert, "\n");
	post("input minimum = ", dataInputMin, "\n");
	post("input maximum = ", dataInputMax, "\n");
	post("average = ", dataAvg, "\n");
	post("data received number = ", dataReceivedNumber, "\n");
}

//_____________________________________________________________________//
//
//This function displays the information for each FSS in LV class
//
//_____________________________________________________________________//

function displaysFSSData()
{
	var i;
	fssVal.FSS_TextDisplay();
	for (i = 0; i < fuzzySubsetNumber; i++)
	{
		modellingFSS[i].FSS_TextDisplay();
	}
}



function FSSSizing()
{
	modellingFSS = new Array(fuzzySubsetNumber);
}


function FSSInstantiation(i, myName)
{
	modellingFSS[i] = new FSS(myName);
}

//_____________________________________________________________________//
//
//This function computes the partitioning of FSS
//composing the linguistic variable 
//
//_____________________________________________________________________//
function partitioningComputing()
{
	var i, j, h, x, dx, a, b, c, d;
	var msg = new Array();
	//post("LV_partitioning\n");
	//MODIFICATION 31-07-08//
	if (fuzzySubsetNumber > 0)
	{
		dx = dataMax-dataMin;
		//post("partitionMethod = ", this.myPartitioningMethod, "\n");
		switch(myPartitioningMethod)
		{
			case CLASSICALPARTITIONING:
				if (fuzzySubsetNumber > 1)
				{
					h = dx/(fuzzySubsetNumber - 1);
					//post(dataMin, dataMax, h, leftBoundaryValue, rightBoundaryValue, myFuzzyficationMethod);
					for (i = 0; i < fuzzySubsetNumber; i++)
					{
						//absciss of the center of the fuzzysubset//
						//post("partitioning fss #", i, "\n");
						x = h*i+dataMin;
						modellingFSS[i].FSS_Fuzzyfication(x, dataMin, dataMax, myFuzzyficationMethod, halfKernelValue, leftBoundaryValue, rightBoundaryValue);
					}
				}
				else
				{
					//case when only one FSS//
					x = (dataMin+dataMax)/2;
					modellingFSS[0].FSS_Fuzzyfication(x, dataMin, dataMax, myFuzzyficationMethod, halfKernelValue, leftBoundaryValue, rightBoundaryValue);
				}
			break;
			//
			//AJOUT 31-07-08 - WE ADDED TRUCK TRAINED PARTITIONING//
			case TRUCKTRAINEDPARTITIONING:
				if (fuzzySubsetNumber == 5)
				{
					//Truck's algorithm requires five fuzzy subsets//
					var x0, x01, x02, x1, x11, x12, x2, cvl, ca, da, ch, dh;
					//post("TRUCK TRAINED PARTITIONING\n");
					x0 = dataInputMin;
					x1 = dataAvg;
					x2 = dataInputMax;
					x01 = x0+(x1-x0)/3.0;
					x02 = x0+2.0*(x1-x0)/3.0;
					x11 = x1+(x2-x1)/3.0;
					x12 = x1+2.0*(x2-x1)/3.0;
					cvl = 2*x0-x01;
					ca = x02+x11-x1;
					da = 2*x11-ca;
					ch = 2*x12-da;
					dh = 2*x2-ch;
					//post("x0=",x0," x01=", x01," x02=", x02, " x1=", x1, " x11=", x11, " x12=", x12, " x2=", x2, "\n");
					//building FSS equivalent to 'VERY LOW'//
					//for situations where x0 is close to dataMin//
					cvl = Math.max(cvl, dataMin);
					//for situations where x2 is close to dataMax//
					dh = Math.min(dh, dataMax);
					//
					//post("\nAffichage des FSS obtenus \n");
					modellingFSS[0].FSS_Fill(dataMin, dataMax, dataMin, 1.0, cvl, 1.0, x01, 0.0, dataMax, 0.0);
					//modellingFSS[0].FSS_TextDisplay();
					//building FSS equivalent to 'LOW'//
					modellingFSS[1].FSS_Fill(dataMin, dataMax, dataMin, 0.0, cvl, 0.0, x01, 1.0, x01, 1.0, x1, 0.0, dataMax, 0.0);
					//modellingFSS[1].FSS_TextDisplay();
					//building FSS equivalent to 'AVERAGE'//
					modellingFSS[2].FSS_Fill(dataMin, dataMax, dataMin, 0.0, x01, 0.0, Math.min(x1, ca), 1.0, Math.min(Math.max(x1, ca), dataMax), 1.0, da, 0.0, dataMax, 0.0);
					//modellingFSS[2].FSS_TextDisplay();
					//building FSS equivalent to 'HIGH'//
					modellingFSS[3].FSS_Fill(dataMin, dataMax, dataMin, 0.0, ca, 0.0, Math.min(da, ch), 1.0, Math.min(Math.max(da, ch), dataMax), 1.0, dh, 0.0, dataMax, 0.0);
					//modellingFSS[3].FSS_TextDisplay();
					//building FSS equivalent to 'VERY HIGH'//
					modellingFSS[4].FSS_Fill(dataMin, dataMax, dataMin, 0.0, ch, 0.0, Math.min(dh, dataMax), 1.0, dataMax, 1.0);
					//modellingFSS[4].FSS_TextDisplay();
				}
				else
				{
					post("Truck's algorithm requires five fuzzy subsets, please update your fuzzy subset configuration. \n");
				}
			break;
			
		}
		outlet(1, "dataBoundaries", dataMin, dataMax);
		//outlet(1, "fssNumber", fuzzySubsetNumber);
		for (i = 0; i < fuzzySubsetNumber; i++)
		{
			modellingFSS[i].FSS_Display(i+1, FSS_DISPLAY_OUTLET);
			//MODIFICATION 31-07-08 FSS sent to outlet 0 either for OLV or RCFI//
			//if (this.lvType == OLV_ID)
			//{
				//for OLV : the contents of the FSS are sent on outlet 0//
				msg.push(modellingFSS[i].FSS_GetFSSName());
				msg.push(modellingFSS[i].FSS_GetNumberOfCoord());
				for (j = 0; j < modellingFSS[i].FSS_GetNumberOfCoord(); j++)
				{
					msg.push(modellingFSS[i].FSS_GetCoordX(j));
					msg.push(modellingFSS[i].FSS_GetCoordY(j));
				}
			//}
			//for drawing : number 0 is the current data fuzzy subset//
		}
		//Prepare possible FSS for calculation of fuzzy implication//
		//outlet(1, "fuzzySubset", "", fuzzySubsetNumber+1, dataMin, dataMax, 0.0, 0.0);
		//triggers the possible modification of current data fuzzy subset//
		currentDataFuzzification();
		//MODIFICATION 31-07-08 FSS sent to outlet 0 either for OLV or RCFI//
		if (dataNameValue != NONAME)
		{
			outlet(FSS_OUTLET, "LVDeclared", dataNameValue, fuzzySubsetNumber, msg, dataMin, dataMax);
		}
	}
}

//_____________________________________________________________________//
//This function updates data properties (of training data)             //
//_____________________________________________________________________//
function updatesDataProperties(x)
{
	if (x < dataInputMin)
	{
		dataInputMin = x;
	}
	if (x > dataInputMax)
	{
		dataInputMax = x;
	}
	if (dataReceivedNumber > 0)
	{
		dataAvg = (dataAvg+x/dataReceivedNumber)/(1+1/dataReceivedNumber);
	}
	else
	{
		dataAvg = x;
	}
	dataReceivedNumber = dataReceivedNumber+1;
}


//_____________________________________________________________________//
//This function gets the label of the fuzzification method             //
//_____________________________________________________________________//
function getFuzzificationMethodLabel(x)
{
	switch(x)
	{
		case TRIANGULAR_PERCENT:
		return TRIANGULAR_PERCENT_ID;
		break;
		
		case TRIANGULAR_ABSOLUTE:
		return TRIANGULAR_ABSOLUTE_ID;
		break;
		
		case TRAPEZOIDAL_PERCENT:
		return TRAPEZOIDAL_PERCENT_ID;
		break;
		
		case TRAPEZOIDAL_ABSOLUTE:
		return TRAPEZOIDAL_ABSOLUTE_ID;
		break;
		
		case SINGLETON:
		return SINGLETON_ID;
		break;
	}
}

//_____________________________________________________________________//
//This function gets the label of the partitioning method used         //
//_____________________________________________________________________//
function getPartitioningMethodLabel(x)
{
	switch(x)
	{
		case CLASSICALPARTITIONING:
		return CLASSICALPARTITIONING_ID;
		break;
		
		case MARTINEZPARTITIONING:
		return MARTINEZPARTITIONING_ID;
		break;
		
		case TRUCKTRAINEDPARTITIONING:
		return TRUCKTRAINEDPARTITIONING_ID;
		break;
	}
}

//_____________________________________________________________________//
//This function gets the label of the training mode used               //
//_____________________________________________________________________//
function getTrainingModeLabel(x)
{
	switch(x)
	{
		case TRAININGOFF:
		return TRAININGOFF_ID;
		break;
		
		case TRAININGON:
		return TRAININGON_ID;
		break;
	}
}

//_____________________________________________________________________//
//_____________________________________________________________________//
//
//FUZZY SUBSET PROTOTYPE - DATA AND METHODS//
//
//_____________________________________________________________________//
//_____________________________________________________________________//

function FSS(fssName)
{
	this.fssName = fssName;
	this.coordX = new Array();
	this.coordY = new Array();
	//methods//
	this.FSS_Fill = FSS_Fill;
	this.FSS_GetMembershipValue = FSS_GetMembershipValue;
	this.FSS_Display = FSS_Display;
	this.FSS_MultiDisplay = FSS_MultiDisplay;
	this.FSS_TextDisplay = FSS_TextDisplay;
	this.FSS_Insert = FSS_Insert;
	this.FSS_Fuzzyfication = FSS_Fuzzyfication;
	this.FSS_GetYMin = FSS_GetYMin;
	this.FSS_GetYMax = FSS_GetYMax;
	this.FSS_GetFSSName = FSS_GetFSSName;
	this.FSS_SetFSSName = FSS_SetFSSName;
	this.FSS_GetCoordX = FSS_GetCoordX;
	this.FSS_GetCoordY = FSS_GetCoordY;
	this.FSS_SetCoordX = FSS_SetCoordX;
	this.FSS_SetCoordY = FSS_SetCoordY;
	this.FSS_GetNumberOfCoord = FSS_GetNumberOfCoord;
	this.FSS_AppendPoint = FSS_AppendPoint;
	this.FSS_Simplify = FSS_Simplify;
	this.FSS_CopyFrom = FSS_CopyFrom;
	this.FSS_Defuzzification = FSS_Defuzzification;
	this.FSS_BuildFuzzyImplicationFrom = FSS_BuildFuzzyImplicationFrom;
	this.FSS_PrependPoint = FSS_PrependPoint;
	this.FSS_InsertPointAtPosition = FSS_InsertPointAtPosition;
	this.FSS_CompleteWithZeros = FSS_CompleteWithZeros;
	this.FSS_GetSuperiorIndexOfXValue = FSS_GetSuperiorIndexOfXValue;
	this.FSS_GetNumberOfIdenticalXValueFrom = FSS_GetNumberOfIdenticalXValueFrom;
	this.FSS_GetY_Clip = FSS_GetY_Clip;
	//this.FSS_GetYCoordinatesAt = FSS_GetYCoordinatesAt;
}
//_____________________________________________________________________//
//This function fills the FSS with couples of values
//The first couple is min and max for x//
//_____________________________________________________________________//
function FSS_Fill(x)
{
	var i, n, dmin, dmax, x1, x2, y1, y2;
	//first two arguments are min and max of the domain//
	n = (arguments.length - 2) / 2;
	dmin = arguments[0];
	dmax = arguments[1];
	this.coordX = new Array();
	this.coordY = new Array();
	for (i = 1; i < n+1; i++)
	{
		x1 = arguments[2*i];
		y1 = arguments[2*i+1];
		//post("x1 = ", x1, "y1 = ", y1, "\n");
		if (i < n)
		{
			x2 = arguments[2*i+2];
			y2 = arguments[2*i+3];
			if ((x1 < dmin) && (x2 > dmin))
			{
				this.coordX.push(dmin);
				this.coordY.push(FSS_GetY_Clip(x1, y1, x2, y2, dmin));
			}
			else
			{
				if ((x1 >= dmin) && (x1 <= dmax))
				{
					this.coordX.push(x1);
					this.coordY.push(y1);
				}
			}
		}
		else
		{
			//(x1,y1) is the last couple//
			//(x2, y2) is in fact the previous couple//
			x2 = arguments[2*i-2];
			y2 = arguments[2*i-1];
			//post("Dernier point FSS\n");
			//post("x1=", x1, "y1=", y1, "x2=", x2, "y2=", y2, "dmin=", dmin, "dmax=", dmax, "\n");
			//
			if (x1 <= dmax)
			{
				this.coordX.push(x1);
				this.coordY.push(y1);
			}
			else
			{
				if (x2 <= dmax)
				{
					this.coordX.push(dmax);
					this.coordY.push(FSS_GetY_Clip(x2, y2, x1, y1, dmax));
				}
			}
		}
	}
}

//_____________________________________________________________________//
//This function adds a couple of values at the end of the list
//of couples (x,y) in the FSS
//_____________________________________________________________________//
function FSS_AppendPoint(x,y)
{
	this.coordX.push(x);
	this.coordY.push(y);
}


//_____________________________________________________________________//
//This function removes points of the FSS that are no use//
//it means points who are identical to the previous and next ones//
//_____________________________________________________________________//
function FSS_Simplify()
{

	var i, y0, y1, y2, x0, x1;
	var begTabX, endTabX, begTabY, endTabY;
	var simplificationNumber = 0;
	//
	i = 1;
	//post("_____Simplification\n");
	//this.FSS_TextDisplay();
	do
	{
		x1 = this.coordX[i-1];
		y1 = this.coordY[i-1];
		x0 = this.coordX[i];
		y0 = this.coordY[i];
		y2 = this.coordY[i+1];
		if (((y1 == y0) && (y2 == y0)) || ((x1 == x0) && (y1 == y0)))
		{
			//remove ith point//
			begTabX = this.coordX.slice(0, i);
			endTabX = this.coordX.slice(i+1, this.coordX.length);
			begTabY = this.coordY.slice(0, i);
			endTabY = this.coordY.slice(i+1, this.coordY.length);
			this.coordX = begTabX.concat(endTabX);
			this.coordY = begTabY.concat(endTabY);
			simplificationNumber += 1;
			//this.FSS_TextDisplay();
		}
		else
		{
			i += 1;
		}
	} while (i < this.coordX.length-1)
	//post("nbr of simplications = ", simplificationNumber, "\n");
}

//_____________________________________________________________________//
//This function sends info of the FSS (name, number passed,
//list of x coordinates, list of y coordinates)
//_____________________________________________________________________//
function FSS_Display(num, outletNumber)
{
	//to send the values to the Javascript graphic interface//
	outlet(outletNumber, "fuzzySubset", this.fssName, num, this.coordX, this.coordY);
}

//_____________________________________________________________________//
//This function sends info of the FSS (name, number passed,
//list of x coordinates, list of y coordinates)
//_____________________________________________________________________//
function FSS_MultiDisplay(num, LVLabel, outletNumber)
{
	//to send the values to the Javascript graphic interface//
	//post("LVLabel=", LVLabel, "num=", num, "\n");
	//outlet(1, LVLabel, "fuzzySubset", this.fssName, num, this.coordX, this.coordY);
	outlet(outletNumber, LVLabel, "fuzzySubset", this.fssName, num, this.coordX, this.coordY);
}

//_____________________________________________________________________//
//This function posts info of the FSS
//_____________________________________________________________________//
function FSS_TextDisplay()
{
	var i;
	post(this.fssName);
	for (i = 0; i < this.coordX.length; i++)
	{
		post(this.coordX[i]," ", this.coordY[i], " ");
	}
	post("\n");
}


//_____________________________________________________________________//
//This function fuzzifies the x value//
//_____________________________________________________________________//
function FSS_Fuzzyfication(x, dataMin, dataMax, fuzzyficationMethod, halfKernelValue, leftBoundaryValue, rightBoundaryValue)
{
	var a, b, c, d, dx;
	dx = dataMax-dataMin;
	//post("fuzzyfication", x, dataMin, dataMax, myFuzzyficationMethod, "\n");
	switch(fuzzyficationMethod)
	{
			case TRIANGULAR_PERCENT:
			//post("Fuzzification\n");
			a = x-dx*leftBoundaryValue;
			b = x + dx*rightBoundaryValue;
			if ((a <= dataMin) && (b >= dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, a, 0.0, x, 1.0, b, 0.0);
				//this.FSS_Fill(dataMin, FSS_GetY_Clip(a, 0.0, x, 1.0, dataMin), x, 1.0, dataMax, FSS_GetY_Clip(x, 1.0, b, 0.0, dataMax));
			}
			if ((a <= dataMin) && (b < dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, a, 0.0, x, 1.0, b, 0.0, dataMax, 0.0);
				//this.FSS_Fill(dataMin, FSS_GetY_Clip(a, 0.0, x, 1.0, dataMin), x, 1.0, b, 0.0, dataMax, 0.0);
			}
			if ((a > dataMin) && (b >= dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, dataMin, 0.0, a, 0.0, x, 1.0, b, 0.0);
				//this.FSS_Fill(dataMin, 0.0, a, 0.0, x, 1.0, dataMax, FSS_GetY_Clip(x, 1.0, b, 0.0, dataMax);
			}
			if ((a > dataMin) && (b < dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, dataMin, 0.0, a, 0.0, x, 1.0, b, 0.0, dataMax, 0.0);
			}
			break;

			case TRIANGULAR_ABSOLUTE:
			a = x - leftBoundaryValue;
			b = x + rightBoundaryValue;
			if ((a <= dataMin) && (b >= dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, a, 0.0, x, 1.0, b, 0.0);
				//this.FSS_Fill(dataMin, FSS_GetY_Clip(a, 0.0, x, 1.0, dataMin), x, 1.0, dataMax, FSS_GetY_Clip(x, 1.0, b, 0.0, dataMax));
			}
			if ((a <= dataMin) && (b < dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, a, 0.0, x, 1.0, b, 0.0, dataMax, 0.0);
				//this.FSS_Fill(dataMin, FSS_GetY_Clip(a, 0.0, x, 1.0, dataMin), x, 1.0, b, 0.0, dataMax, 0.0);
			}
			if ((a > dataMin) && (b >= dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, dataMin, 0.0, a, 0.0, x, 1.0, b, 0.0);
				//this.FSS_Fill(dataMin, 0.0, a, 0.0, x, 1.0, dataMax, FSS_GetY_Clip(x, 1.0, b, 0.0, dataMax);
			}
			if ((a > dataMin) && (b < dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, dataMin, 0.0, a, 0.0, x, 1.0, b, 0.0, dataMax, 0.0);
			}
			break;

			case TRAPEZOIDAL_PERCENT:
			b = x - dx*halfKernelValue;
			c = x + dx*halfKernelValue;
			a = b - dx*leftBoundaryValue;
			d = c + dx*rightBoundaryValue;
			//post("fuzzy ->", a, b, c, d, "\n");
			if ((a <= dataMin) && (d >= dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, a, 0.0, b, 1.0, c, 1.0, d, 0.0);
			}
			if ((a <= dataMin) && (d < dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, a, 0.0, b, 1.0, c, 1.0, d, 0.0, dataMax, 0.0);
			}
			if ((a > dataMin) && (d >= dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, dataMin, 0.0, a, 0.0, b, 1.0, c, 1.0, d, 0.0);
			}
			if ((a > dataMin) && (d < dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, dataMin, 0.0, a, 0.0, b, 1.0, c, 1.0, d, 0.0, dataMax, 0.0);
			}
			break;

			case TRAPEZOIDAL_ABSOLUTE:
			b = x - halfKernelValue;
			c = x + halfKernelValue;
			a = b - leftBoundaryValue;
			d = c + rightBoundaryValue;
			if ((a <= dataMin) && (d >= dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, a, 0.0, b, 1.0, c, 1.0, d, 0.0);
			}
			if ((a <= dataMin) && (d < dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, a, 0.0, b, 1.0, c, 1.0, d, 0.0, dataMax, 0.0);
			}
			if ((a > dataMin) && (d >= dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, dataMin, 0.0, a, 0.0, b, 1.0, c, 1.0, d, 0.0);
			}
			if ((a > dataMin) && (d < dataMax))
			{
				this.FSS_Fill(dataMin, dataMax, dataMin, 0.0, a, 0.0, b, 1.0, c, 1.0, d, 0.0, dataMax, 0.0);
			}
			break;
					
			case SINGLETON:
			this.FSS_Fill(dataMin, dataMax, dataMin, 0.0, x, 0.0, x, 1.0, x, 0.0, dataMax, 0.0);
			break;
	}
}

//_____________________________________________________________________//
//This function returns the membership at x position
//_____________________________________________________________________//
function FSS_GetMembershipValue(x)
{
	var i = 0;
	var n;
	var memberShipValue = 0.0;
	var trouve = 0;
	n = this.coordX.length;
	if ((x < this.coordX[0]) || (x > this.coordX[n-1]))
	{
		//post("0 direct, en dehors du support\n");
		memberShipValue = 0.0;
	}
	else
	{
		do
		{
			//post("******->x=", x, " i=", i, " xi=", this.coordX[i], " xi+1=", this.coordX[i+1], " yi=", this.coordY[i], "yi+1=", this.coordY[i+1], "\n");
			if (x == this.coordX[i])
			{
				memberShipValue = this.coordY[i];
				trouve = 1;
				//post("exact xi - membership = ", memberShipValue, "\n");
			}
			else
			{
				if (x == this.coordX[i+1])
				{
					memberShipValue = this.coordY[i+1];
					trouve = 1;
					//post("exact xi - membership = ", memberShipValue, "\n");
				}
				else
				{
					if ((x > this.coordX[i]) && (x < this.coordX[i+1]))
					{
						if (this.coordX[i+1] == this.coordX[i])
						{
							memberShipValue = this.coordY[i];
							//post("xi = xi+1 - membership = ", memberShipValue, " i=", i, "\n");
							trouve = 1;
						}
						else
						{
							memberShipValue = this.coordY[i]+(x-this.coordX[i])/(this.coordX[i+1]-this.coordX[i])*(this.coordY[i+1]-this.coordY[i]);
							//post("normal computation - membership = ", memberShipValue, " i=", i, "\n");
							trouve = 1;
						}
					}
				}
			}
			i += 1;
		} while ((i < n-1) && (trouve == 0));
	}
	return memberShipValue;
}

//_____________________________________________________________________//
//This function returns the Y minimum value //
//_____________________________________________________________________//
function FSS_GetYMin()
{
	var mi = MAX_APP;
	var i;
	for (i=0; i < this.coordY.length; i++)
	{
		if (this.coordY[i] < mi)
		{
			mi = this.coordY[i];
		}
	}
	return mi;
}

//_____________________________________________________________________//
//This function returns the Y maximum value //
//_____________________________________________________________________//
function FSS_GetYMax()
{
	var ma = MIN_APP;
	var i;
	for (i=0; i < this.coordY.length; i++)
	{
		if (this.coordY[i] > ma)
		{
			ma = this.coordY[i];
		}
	}
	return ma;
}

//_____________________________________________________________________//
//This function returns the name of the fss
//_____________________________________________________________________//
function FSS_GetFSSName()
{
	return this.fssName;
}

//_____________________________________________________________________//
//This function sets the name of the fss
//_____________________________________________________________________//
function FSS_SetFSSName(fssName)
{
	this.fssName = fssName;
}

//_____________________________________________________________________//
//This functions gets the ith value in X
//_____________________________________________________________________//
function FSS_GetCoordX(i)
{
	return this.coordX[i];
}

//_____________________________________________________________________//
//This function gets the ith value in Y
//_____________________________________________________________________//
function FSS_GetCoordY(i)
{
	return this.coordY[i];
}

//_____________________________________________________________________//
//This function sets the ith value in X
//_____________________________________________________________________//
function FSS_SetCoordX(x, i)
{
	this.coordX[i] = x;
}

//_____________________________________________________________________//
//This function sets the ith value in Y
//_____________________________________________________________________//
function FSS_SetCoordY(y, i)
{
	this.coordY[i] = y;
}


//_____________________________________________________________________//
//This function returns the number of (x,y) couples
//_____________________________________________________________________//
function FSS_GetNumberOfCoord()
{
	return this.coordX.length;
}


//_____________________________________________________________________//
//This function inserts a couple (x,y) at the right position (for x)
//_____________________________________________________________________//
function FSS_Insert(x, y)
{
	//to insert in right position x and y//
	var i = 0, trouve = 0;
	var n;
	var tab1X, tab2X, tab1Y, tab2Y, tx, ty;
	tx = new Array(1);
	tx[0] = x;
	ty = new Array(1);
	ty[0] = y;
	n = this.FSS_GetNumberOfCoord();
	//post("Insertion of ", x, " and ", y, "\n");
	if (n == 0)
	{
		//the FSS is still empty//
		//post("empty fss\n");
		this.coordX = new Array(1);
		this.coordY = new Array(1);
		this.coordX[0] = x;
		this.coordY[0] = y;
		trouve = 1;
		//post("insertion at rank 0 in empty array\n");
	}
	else
	{
		if (x > this.coordX[n-1])
		{
			//the element to add is greater than the greater of elements already in the FSS//
			this.coordX[n] = x;
			this.coordY[n] = y;
			trouve = 1;
			//post("insertion at end at rank ", n, "\n");
		}
		else
		{
			do
			{
				//post("after do -> i = ", i, " trouve = ", trouve," x = ", x, " coordX[i] = ", this.coordX[i], "\n");
				if (x < this.coordX[i])
				{
					//post("after if x < coordX -> i = ", i, " x = ", x, " coordX[i] = ", this.coordX[i], "\n");
					trouve = 1;
					tab2X = this.coordX.slice(i, this.coordX.length);//slice does not include the last indexed element//
					tab2Y = this.coordY.slice(i, this.coordY.length);
					if (i > 0)
					{
						tab1X = this.coordX.slice(0, i);
						tab1Y = this.coordY.slice(0, i);
						this.coordX = tab1X.concat(tx);
						this.coordY = tab1Y.concat(ty);
						this.coordX = this.coordX.concat(tab2X);
						this.coordY = this.coordY.concat(tab2Y);
					}
					else
					{
						//the element to insert is in first position//
						this.coordX = tx.concat(tab2X);
						this.coordY = ty.concat(tab2Y);
					}
				}
				else
				{
					if (x == this.coordX[i])
					{
						//element already inserted//
						trouve = 1;
					}
					else
					{
						//element to be inserted on the right//
						i += 1;
					}
				}
			} while ((i < n) && (trouve == 0));
		}
		//if (trouve == 1)
//		{
//			post("insertion at rank ", i, "\n");
//			this.FSS_TextDisplay();
//		}
		//else
		//{
			//post("no insertion possible\n");
		//}
	}
}

//_____________________________________________________________________//
//This function inserts a couple (x,y) at first position
//_____________________________________________________________________//
function FSS_PrependPoint(x,y)
{
	//
	this.coordX.unshift(x);
	this.coordY.unshift(y);
}


//_____________________________________________________________________//
//This function inserts a couple (x,y) at position i
//_____________________________________________________________________//
function FSS_InsertPointAtPosition(x, y, i)
{
	var tab1 = new Array();
	var tab2 = new Array();
	//
	//insertion into coordX array//
	tab1 = this.coordX.slice(0, i);
	tab2 = this.coordX.slice(i, this.coordX.length);
	tab1.push(x);
	this.coordX = tab1.concat(tab2);
	//insertion into coordY array//
	tab1 = this.coordY.slice(0, i);
	tab2 = this.coordY.slice(i, this.coordY.length);
	tab1.push(y);
	this.coordY = tab1.concat(tab2);
}


//_____________________________________________________________________//
//This function completes with (x, 0) points at the beginning
//or the end of the FSS if necessary
//_____________________________________________________________________//
function FSS_CompleteWithZeros()
{
	var x0, y0;
	x0 = this.coordX[0];
	y0 = this.coordY[0];
	//post("Ajout 1er point => x0=", x0, " y0=", y0, "\n");
	if (y0 != 0.0)
	{
		this.FSS_PrependPoint(x0, 0.0);
	}
	x0 = this.coordX[this.coordX.length-1];
	y0 = this.coordY[this.coordY.length-1];
	//post("Ajout dernier point => x0=", x0, " y0=", y0, "\n");
	if (y0 != 0.0)
	{
		this.FSS_AppendPoint(x0, 0.0);
	}
}

//_____________________________________________________________________//
//This function copies the current FSS to fss2
//_____________________________________________________________________//
function FSS_CopyFrom(fss2)
{
	var i, n;
	this.fssName = fss2.FSS_GetFSSName();
	n = this.FSS_GetNumberOfCoord();
	this.coordX = new Array();
	this.coordY = new Array();
	for (i = 0; i < n; i++)
	{
		this.coordX.push(fss2.FSS_GetCoordX(i));
		this.coordY.push(fss2.FSS_GetCoordY(i));
	}
}

//var modellingFSS;
//var fssVal;

//_____________________________________________________________________//
//This function provides defuzzification
//_____________________________________________________________________//
function FSS_Defuzzification(dmin, dmax)
{
	var i, n, num, den, x0, y0, x1, y1;
	num =  0;
	den = 0;
	n = this.FSS_GetNumberOfCoord();
	//post("_________________________\n");
	//post("FUZZY SUBSET =", this.FSS_GetFSSName(),"\n");
	x0 = this.coordX[0];
	y0 = this.coordY[0];
	/*
	if ((x0 < dmin) || (x0 > dmax))
	{
		post("Pas pris en compte\n");
	}
	*/
	for (i = 1; i < n; i++)
	{
		x1 = this.coordX[i];
		y1 = this.coordY[i];
		 
		num += (x1-x0)*((2*x1+x0)*y1+(2*x0+x1)*y0);
		den += (x1-x0)*(y1+y0);
		//post("PRIS EN COMPTE : x0=", x0, "y0=", y0, "x1=", x1, "y1=", y1, "\n");
		x0 = x1;
		y0 = y1;
	}
	if (den == 0)
	{
		return (this.coordX[0]+this.coordX[n-1])/2;
	}
	else
	{
		return (num/(3*den));
	}
}
//_____________________________________________________________________//
//This function builds a result FSS from the fuzzy implication fi chosen,
//and the fa value of membership to the original fss
//_____________________________________________________________________//
function FSS_BuildFuzzyImplicationFrom(fa, fi, dmin, dmax)
{
	var i, n, x, y;
	var resultFSS = new FSS("");
	

	//
	n = this.coordX.length;
	//post("n=", n, "\n");
	//this.FSS_TextDisplay();
	
	//post("FuzzyImplication\n");
	//post("x=", x, "y=", y, "\n");
	switch(fi)
	{
		//_____________________________________________________________________//
		case FI_REICHENBACH:
		//post("fa=", fa, "\n");
		for (i=0; i < n; i++)
		{
			x = this.coordX[i];
			y = this.coordY[i];
			resultFSS.FSS_AppendPoint(x, 1.0-fa+fa*y);
		}
		resultFSS.FSS_CompleteWithZeros();
		//post("\n\n");
		//post("Fuzzy Implication ->");
		//resultFSS.FSS_TextDisplay();
		break;
		
		//_____________________________________________________________________//
		case FI_WILLMOTT:
		var fss1 = new FSS("");
		var fss2 = new FSS("");
		var fss3 = new FSS("");
		//Build Min(fa, fB) FSS//
		//first build fa constant FSS, then operate min with current FSS//
		//fss1.FSS_AppendPoint(this.coordX[0], 0.0);
		fss1.FSS_AppendPoint(this.coordX[0], fa);
		fss1.FSS_AppendPoint(this.coordX[n-1], fa);
		//fss1.FSS_AppendPoint(this.coordX[n-1], 0.0);
		fss2 = LV_Operation(TNORM_MIN, fss1, this);
		//Build Max(1-fa, previous min)//
		//fss3.FSS_AppendPoint(this.coordX[0], 0.0);
		fss3.FSS_AppendPoint(this.coordX[0], 1.0-fa);
		fss3.FSS_AppendPoint(this.coordX[n-1], 1.0-fa);
		//fss3.FSS_AppendPoint(this.coordX[n-1], 0.0);
		resultFSS = LV_Operation(TCONORM_MAX, fss3, fss2);
		//post("Fuzzy Implication ->");
		//resultFSS.FSS_TextDisplay();
		break;
		
		//_____________________________________________________________________//
		case FI_RESCHER_GAINES:
		var fss1 = new FSS("");
		//Build Max(fa, fb) FSS//
		//First build fa constant FSS//
		fss1.FSS_AppendPoint(this.coordX[0], fa);
		fss1.FSS_AppendPoint(this.coordX[n-1], fa);
		resultFSS = LV_Operation(TNORM_MIN, fss1, this);
		//Then replace fa values by 0, and other values greater than fa by 1//
		n = resultFSS.FSS_GetNumberOfCoord();
		for (i=0; i < n; i++)
		{
			y = resultFSS.FSS_GetCoordY(i);
			//post("y=", y, "fa=", fa, "\n");
			if (y >= fa)
			{
				resultFSS.FSS_SetCoordY(1.0, i);
			}
			else
			{
				resultFSS.FSS_SetCoordY(0.0, i);
			}
		}
		//
		i = 0;
		while (i < resultFSS.FSS_GetNumberOfCoord())
		{
			x = resultFSS.FSS_GetCoordX(i);
			if (resultFSS.FSS_GetCoordY(i) == 1.0)
			{
				if (i > 0)
				{
					if ((resultFSS.FSS_GetCoordY(i-1) == 0.0) && (x > resultFSS.FSS_GetCoordX(i-1)))
					{
						//in this case, we insert a zero at position i//
						//post("Avant insertion up = ");
						//resultFSS.FSS_TextDisplay();
						resultFSS.FSS_InsertPointAtPosition(resultFSS.FSS_GetCoordX(i), 0., i);
						//post("Après insertion = ");
						//resultFSS.FSS_TextDisplay();
						//resultFSS.FSS_SetCoordX(resultFSS.FSS_GetCoordX(i), i-1);
					}
				}
				if (i < resultFSS.FSS_GetNumberOfCoord()-1)
				{
					if ((resultFSS.FSS_GetCoordY(i+1) == 0.0) && (x < resultFSS.FSS_GetCoordX(i+1)))
					{
						//post("Avant insertion down = ");
						//resultFSS.FSS_TextDisplay();
						//in this case, we insert a zero at position i+1//
						resultFSS.FSS_InsertPointAtPosition(resultFSS.FSS_GetCoordX(i), 0., i+1);
						//post("Après insertion = ");
						//resultFSS.FSS_TextDisplay();
						//resultFSS.FSS_SetCoordX(resultFSS.FSS_GetCoordX(i), i+1);
					}
				}
			}
			i += 1;
		}
		resultFSS.FSS_CompleteWithZeros();
		//post("Fuzzy Implication ->");
		//resultFSS.FSS_TextDisplay();
		//resultFSS.FSS_TextDisplay();
		break;
		
		//_____________________________________________________________________//
		case FI_KLEENE_DIENES:
		var fss1 = new FSS("");
		//Build Max(1-fa, fb) FSS//
		//First build 1-fa constant FSS//
		fss1.FSS_AppendPoint(this.coordX[0], 1.0-fa);
		fss1.FSS_AppendPoint(this.coordX[n-1], 1.0-fa);
		resultFSS = LV_Operation(TCONORM_MAX, fss1, this);
		//post("Fuzzy Implication ->");
		//resultFSS.FSS_TextDisplay();
		//y2 = Math.max(1.0-fa, y);
		break;
		
		
		//_____________________________________________________________________//
		case FI_BROUWER_GOEDEL:
		var fss1 = new FSS("");
		//Build Max(fa, fb) FSS//
		//First build fa constant FSS//
		fss1.FSS_AppendPoint(this.coordX[0], fa);
		fss1.FSS_AppendPoint(this.coordX[n-1], fa);
		resultFSS = LV_Operation(TNORM_MIN, fss1, this);
		//Then replace fa values by 0, and other values greater than fa by 1//
		//n = resultFSS.FSS_GetNumberOfCoord();
		i=0;
		while ((i < resultFSS.FSS_GetNumberOfCoord()) && (i < 40))
		{
			//post("i=", i, "\n");
			x = resultFSS.FSS_GetCoordX(i);
			y = resultFSS.FSS_GetCoordY(i);
			//post("y=", y, "fa=", fa, "nbre de points =", resultFSS.FSS_GetNumberOfCoord(), "\n");
			if ((y > fa) || (Math.abs(y-fa) < 0.001))
			{
				resultFSS.FSS_SetCoordY(1.0, i);
				//post("y modification to 1 => ");
				//resultFSS.FSS_TextDisplay();
				//insert another point//
				if (i > 0)
				{
					if ((resultFSS.FSS_GetCoordY(i-1) < y) && (x > resultFSS.FSS_GetCoordX(i-1)))
					{
						//post("Insertion before\n");
						resultFSS.FSS_InsertPointAtPosition(resultFSS.FSS_GetCoordX(i), y, i);
						//resultFSS.FSS_TextDisplay();
						i += 1;
					}
				}
				if (i < resultFSS.FSS_GetNumberOfCoord()-1)
				{
					if ((resultFSS.FSS_GetCoordY(i+1) < y) && (x < resultFSS.FSS_GetCoordX(i+1)))
					{
						//post("Insertion after\n");
						resultFSS.FSS_InsertPointAtPosition(resultFSS.FSS_GetCoordX(i), y, i+1);
						//resultFSS.FSS_TextDisplay();
						i += 1;
					}
				}
			}
			i += 1;
		}
		
		resultFSS.FSS_CompleteWithZeros();
		//post("Fuzzy Implication ->");
		//resultFSS.FSS_TextDisplay();
		//resultFSS.FSS_TextDisplay();
		break;
		
		
		//_____________________________________________________________________//
		case FI_GOGUEN:
		var fss1 = new FSS("");
		var fss2 = new FSS("");
		//post("______\n");
		if (fa == 0.0)
		{
			//post("fa = 0\n");
			resultFSS.FSS_AppendPoint(this.coordX[0], 0.0);
			resultFSS.FSS_AppendPoint(this.coordX[0], 1.0);
			resultFSS.FSS_AppendPoint(this.coordX[n-1], 1.0);
			resultFSS.FSS_AppendPoint(this.coordX[n-1], 0.0);
			//resultFSS.FSS_TextDisplay();
		}
		else
		{
			//post("fa != 0\n");
			for (i=0; i < n; i++)
			{
				x = this.coordX[i];
				y = this.coordY[i];
				fss1.FSS_AppendPoint(x, y/fa);
			
			}
			//fss1.FSS_TextDisplay();
			//fss2.FSS_AppendPoint(this.coordX[0], 0.0);
			fss2.FSS_AppendPoint(this.coordX[0], 0.0);
			fss2.FSS_AppendPoint(this.coordX[0], 1.0);
			fss2.FSS_AppendPoint(this.coordX[n-1], 1.0);
			fss2.FSS_AppendPoint(this.coordX[n-1], 0.0);
			//fss2.FSS_AppendPoint(this.coordX[n-1], 0.0);
			//fss2.FSS_TextDisplay();
			resultFSS = LV_Operation(TNORM_MIN, fss1, fss2);
			//resultFSS.FSS_TextDisplay();
		}
		break;
		
		//_____________________________________________________________________//
		case FI_LUKASIEWICZ:
		//post("______\n");
		var fss1 = new FSS("");
		var fss2 = new FSS("");
		
		for (i=0; i < n; i++)
		{
			x = this.coordX[i];
			y = this.coordY[i];
			fss1.FSS_AppendPoint(x, 1.0-fa+y);
			
		}
		//fss1.FSS_TextDisplay();
		fss2.FSS_AppendPoint(this.coordX[0], 0.0);
		fss2.FSS_AppendPoint(this.coordX[0], 1.0);
		fss2.FSS_AppendPoint(this.coordX[n-1], 1.0);
		fss2.FSS_AppendPoint(this.coordX[n-1], 0.0);
		//fss2.FSS_TextDisplay();
		resultFSS = LV_Operation(TNORM_MIN, fss1, fss2);
		//resultFSS.FSS_TextDisplay();
		//y2 =  Math.min(1.0-fa+y, 1.);
		break;
		
		//_____________________________________________________________________//
		case FI_MAMDANI:
		var fss1 = new FSS("");
		fss1.FSS_AppendPoint(this.coordX[0], 0.0);
		fss1.FSS_AppendPoint(this.coordX[0], fa);
		fss1.FSS_AppendPoint(this.coordX[n-1], fa);
		fss1.FSS_AppendPoint(this.coordX[n-1], 0.0);
		resultFSS = LV_Operation(TNORM_MIN, fss1, this);
		//y2 = Math.min(fa,y);
		break;
		
		//
		//_____________________________________________________________________//
		case FI_LARSEN:
		
		for (i=0; i < n; i++)
		{
			x = this.coordX[i];
			y = this.coordY[i];
			resultFSS.FSS_AppendPoint(x, fa*y);
		}
		break;
	}
	
	return resultFSS;
}


//_____________________________________________________________________//
//This function gets the first index of x values that corresponds
//to an x valuer greater than x passed, starting from i index
//_____________________________________________________________________//
function FSS_GetSuperiorIndexOfXValue(i, x)
{
	var j, n;
	//
	j = i;
	n = this.coordX.length;
	//post("Function GetSuperiorIndexOfXValue i = ", i, " x = ", x, "\n");
	
	while ((this.coordX[j] < x) && (j < n))
	{
		j += 1;
		//post("j=", j, "\n");
	}
	if (j == n)
	{
		return (n-1);
	}
	else
	{
		if (this.coordX[j] > x)
		{
			return (-1);
		}
		else
		{
			return j;
		}
	}
	
	return i;
}


//____________________________________________________________________________________//
//This function returns the number of elements identical
//to x starting at i position in array coordX
//____________________________________________________________________________________//
function FSS_GetNumberOfIdenticalXValueFrom(i, x)
{
	var j, k, n;
	//
	j = i+1;
	k = 1;
	n = this.coordX.length;
	while((j < n) && (this.coordX[j] == x))
	{
		k += 1;
		j += 1;
	}
	return k;
}

//____________________________________________________________________________________//
//This function returns the y of the clipping of the line going 
//through (x1, y1) and (x2, y2) by the vertical axis going through d//
//____________________________________________________________________________________//
function FSS_GetY_Clip(x1, y1, x2, y2, d)
{
	var deltaX;
	deltaX = x2-x1;
	if (deltaX != 0.)
	{
		return ((y2-y1)*d+y1*x2-y2*x1)/(deltaX+0.0);
	}
	else
	{
		return MAX_APP;
	}
}
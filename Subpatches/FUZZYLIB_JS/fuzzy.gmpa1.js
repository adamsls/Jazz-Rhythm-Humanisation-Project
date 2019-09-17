//FUZZYLIB, by Alain Bonardi (IMTR Team, Ircam) and Isis Truck (LIASD, University Paris 8)
//with the collaboration of Nicolas Jouandeau (LIASD, University Paris 8)
//
//Javascript version for Max/MSP//

//GMPA object//
//GENERAL MODUS PONENS APPLICATION//
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
const WRONG_DUALTNORMCONORM_PARAMETER = 5;

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
//T-norms//
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
//
//Linguistic Variables Types//
/*
const RCFI_ID = 0;
const OLV_ID = 1;
*/
//ARBITRARY MIN AND MAX FLOAT VALUES//
const MAX_APP = 1234567890.0;
const MIN_APP = -1234567890.0;

//NONAME CONSTANT
const NONAME = "NONAME";
//IS_NONE CONSTANT
const IS_NONE = -1;


//______________________________________________________//

//CONSTANTS ONLY FOR FUZZY RULES//

const UNDERSCORE_ID = "_";
//const AND_CHAR_ID = "&";
//const OR_CHAR_ID = "|";
const SPACE_CHAR_ID = " ";
const LEFT_PARENTHESIS_ID = "(";
const RIGHT_PARENTHESIS_ID = ")";
const CONDITION_ID = 0;
const CONSEQUENT_ID = 1;
//
const AND_OPERATION_ID = 0;
const OR_OPERATION_ID = 1;
//
const FI_REICHENBACH_ID = "Reichenbach";
const FI_WILLMOTT_ID = "Willmott";
const FI_RESCHER_GAINES_ID = "Rescher-Gaines";
const FI_KLEENE_DIENES_ID = "Kleene-Dienes";
const FI_BROUWER_GOEDEL_ID = "Brouwer-Goedel";
const FI_GOGUEN_ID = "Goguen";
const FI_LUKASIEWICZ_ID = "Lukasiewicz";
const FI_MAMDANI_ID = "Mamdani";
const FI_LARSEN_ID = "Larsen";
//
const FI_REICHENBACH = 0;
const FI_WILLMOTT = 1;
const FI_RESCHER_GAINES = 2;
const FI_KLEENE_DIENES = 3;
const FI_BROUWER_GOEDEL = 4;
const FI_GOGUEN = 5;
const FI_LUKASIEWICZ = 6;
const FI_MAMDANI = 7;
const FI_LARSEN = 8;

const GMPO_MAX_ID = "max(u+v-1 0)";
const GMPO_MIN_ID = "min(u v)";
const GMPO_PROD_ID = "u*v";

//GMP Operators are TNorms: we retrieve the same codes as for TNorms//
const GMPO_MAX = 2;
const GMPO_MIN = 0;
const GMPO_PROD = 1;
//
const ENG_LANGUAGE = 0;
const FR_LANGUAGE = 1;
const C_LANGUAGE = 2;
//
const ENG_LANGUAGE_ID = "eng";
const FR_LANGUAGE_ID = "fr";
const C_LANGUAGE_ID = "c";
//
const EQUALS_OPERATOR = 2;//for "is' in the member//
const DIFFERS_OPERATOR = 3;//for "is not" in the member//

//_____________________________________________________________________//

//defines 1 inlet//
//to receive the inputs//
//it can receive the rules, the messages from the LV objects and parameters//
inlets = 1;

//defines 4 outlets//
//outlet 0 sends the defuzzified results//
//outlet 1 sends the fss data to the js user interface//
//outlet 2 sends info to the ruleComposer object//
//outlet 3 sends the warning and error messages//
//outlet 4 sends the feedback info to the control interface panel//
outlets = 5;
//
//constantes pour désigner les sorties//
//
const DEFUZZ_OUTLET = 0;
const FSS_OUTLET = 1;
const RULECOMPOSER_OUTLET = 2;
const MESSAGE_OUTLET = 3;
const CONTROL_OUTLET = 4;

//_____________________________________________________________________//

//global variables//

var errorType = NO_ERROR;
var myRules = new Array();
var myLVNames = new Array();
var myFSSNames = new Array();
//one boolean by LV to set if it is necessary to recompute//
var requiresExtraComputation = new Array();
var myLV = new Array();
var myCurrentExpression = new FR("");
var myLanguage = ENG_LANGUAGE;
var myImpactedRulesByInputLV = new Array();
var myImpactedRulesByOutputFSS = new Array();
var operation = [" and ", " or "];
var myDualTNormAndCoNorm = DUAL_MIN_MAX;
var tNormID = TNORM_MIN;
var tCoNormID = TCONORM_MAX;
var myFuzzyImplication = FI_REICHENBACH;
var IF_ID = "if";
var THEN_ID = "then";
var EQUALS_ID = " is ";
var DIFFERENT_ID = " is_not ";
var ruleComposerInformedOfLanguage = false;





//_____________________________________________________________________//
//Receives a message of declaration of LV
//_____________________________________________________________________//
function LVDeclared(x)
{
	var lv, j, nFSS, k, l, m, n, provLV;
	//post("___________________\n");
	//post("LVDeclared received\n");
	//post(arguments.length, "\n");
	if (arguments.length > 0)
	{
		//gets lv name//
		lv = arguments[0];
		//post("lvName = ", lv, "\n");
		//looks if the lv passed is already stored or not//
		j = looksForLVName(lv);
		//post("j = ", j, "\n");
		if ((j < 0) && (lv != NONAME))
		{
			addsLVname(lv);
			j = myLVNames.length-1;
			//post("j = ", j, "\n");
			//myLV = new Array(myLVNames.length);
			//post("New array myVL\n");
			provLV =new LV(lv, "toto");
			myLV.push(provLV);
			//myLV[j] = new LV(lv, "toto");
			//post("New LV \n");
		}
		if (lv != NONAME)
		{
			//changes name with passed name//
			
			//myLV[j].LV_SetDataNameValue(lv);
			//gets and imposes fuzzySubsetNumber
			nFSS = arguments[1];
			//post("j = ", j, "nFSS = ", nFSS, "\n");
			myLV[j].LV_SetFuzzySubsetNumber(nFSS);
			//post("LV_SetFuzzySubsetNumber\n");
			myLV[j].LV_FSSSizing();
			//post("LV_FSSSizing\n");
			k = 2;
			n = 0;
			myFSSNames[j] = new Array();
			do
			{
				//memorize the names of FSS in the myFSSNames to store all FSS used//
				//post("myFSSNames[j][n] = arguments[k] ", j, n, "->", arguments[k], "\n");
				myFSSNames[j][n] = arguments[k];
				//post("myOLV.LV_FSSInstantiation(n, arguments[k]);\n");
				myLV[j].LV_FSSInstantiation(n, arguments[k]);
				l = arguments[k+1];
				//post("l = ", l, "\n");
				for (m=0; m < l; m++)
				{
					//post("myOLV.modellingFSS[n]...", arguments[k+2+2*m], arguments[k+2+2*m+1], "\n");
					myLV[j].modellingFSS[n].FSS_AppendPoint(arguments[k+2+2*m], arguments[k+2+2*m+1]);
				}
				//myOLV.modellingFSS[n].FSS_TextDisplay();
				n += 1;
				k = k+2+2*l;
			} while (n < nFSS);
			//take into account dataMin and dataMax provided by the "expert" by defining the OLV//
			myLV[j].LV_SetDataMin(arguments[arguments.length-2]);
			myLV[j].LV_SetDataMax(arguments[arguments.length-1]);
			//these boundaries information is transmitted to the jsui object//
			//outlet(FSS_OUTLET, "dataBoundaries", arguments[arguments.length-2], arguments[arguments.length-1]);
			//just one result FSS transmitted//
			//outlet(FSS_OUTLET, "fssNumber", 1);
			//myLV[j].LV_displaysFSSData();
			//Passes this content to ruleComposer object//
			outlet(RULECOMPOSER_OUTLET, "LVCreated", lv, nFSS, myFSSNames[j]);
			if (ruleComposerInformedOfLanguage == false)
			{
				//in the case when language information has not been sent//
				outlet(RULECOMPOSER_OUTLET, "LanguageTerms", operation[0], operation[1], IF_ID, THEN_ID, EQUALS_ID, DIFFERENT_ID);
				ruleComposerInformedOfLanguage = true;
			}
		}
	}
}

//______________________________________________________________________________//
//When the user wants to remove a LV, this function erases all relevant elements//
//Concerning fuzzy rules, impacted rules are extracted                          //
//They are deleted only in the case when the parameter is LVandRules (value 1)  //
//______________________________________________________________________________//
function LVDeleted(x)
{
	var j, lv, k, i, impact, nru, nl, nlc, l, s, n;
	var listOfRuleStatementsImpacted = new Array();
	var tab1 = new Array();
	var tab2 = new Array();
	//
	lv = arguments[0];
	impact = arguments[1];
	j = looksForLVName(lv);
	if (j != IS_NONE)
	{
		//post("LVDeleted is", x, "#", j, "impact rules=", impact, "\n");
		if (impact != LV_IMPACT)
		{
			post("Impact on LVs ==>", lv, "deleted\n");
			//impact myLVNames first//
			//we remove the rank #j//
			n = myLVNames.length;
			tab1 = myLVNames.slice(0, j);
			if (j < n-1)
			{
				tab2 = myLVNames.slice(j+1, n);
				myLVNames = tab1.concat(tab2);
			}
			else
			{
				myLVNames = tab1;
			}
			//
			//impact myFSSNames
			//we remove the rank #j//
			n = myFSSNames.length;
			tab1 = myFSSNames.slice(0, j);
			if (j < n-1)
			{
				tab2 = myFSSNames.slice(j+1, n);
				myFSSNames = tab1.concat(tab2);
			}
			else
			{
				myFSSNames = tab1;
			}
			//impact myLV
			//
			n = myLV.length;
			tab1 = myLV.slice(0, j);
			if (j < n-1)
			{
				tab2 = myLV.slice(j+1, n);
				myLV = tab1.concat(tab2);
			}
			else
			{
				myLV = tab1;
			}
			outlet(RULECOMPOSER_OUTLET, "LVRemoved", lv);
		}
	
		//see impacts on rules//
		//looks for line possibly impacted in consequents//
		nlc = myImpactedRulesByOutputFSS.length;
		nru = myRules.length;
	
		//s = maxArgumentsToString(arguments, true);

	
		for (k=0; k < nru; k++)
		{
			nl = myImpactedRulesByInputLV[j][k].length;
			//post("nl = ", nl, "myImpactedRulesByInputLV[j][k][0]=", myImpactedRulesByInputLV[j][k][0], "\n");
			if ((nl != 1) || (myImpactedRulesByInputLV[j][k][0] != IS_NONE))
			{
				post("Rule #", k, "is impacted on the condition side\n");
				//post("intitule = ", myRules[k].FR_GetStatement(), "\n");
				listOfRuleStatementsImpacted.push(myRules[k].FR_GetStatement());
			}
		
			else
			{
				//looks in the outputFSS impact table//
				for (i = 0; i < nlc; i++)
				{
					if (myImpactedRulesByOutputFSS[i][0] == j)
					{
						for (l = 2; l < myImpactedRulesByOutputFSS[i].length; l++)
						{
							//post("impact(",i,",",l,")=", myImpactedRulesByOutputFSS[i][l],"\n");
							if (myImpactedRulesByOutputFSS[i][l] == k)
							{
								post("Rule #", k, "is impacted on the consequent side\n");
								//post("intitule = ", myRules[k].FR_GetStatement(), "\n");
								listOfRuleStatementsImpacted.push(myRules[k].FR_GetStatement());
							}
						}
					}
				}
			
			}
		}
		//
		//if fuzzy rules are impacted, we delete the one implied//
		if (impact == LV_AND_RULES)
		{
			nru = listOfRuleStatementsImpacted.length;
			//post("List of rules to delete\n");
			for (k = 0; k < nru; k++)
			{
				//post("Rule #", k, "to be deleted\n");
				//post("Rule ", listOfRuleStatementsImpacted[k], "to be deleted\n");
				//post(myRules[k].FR_GetStatement, "\n");
				deleteRuleFromStatement(listOfRuleStatementsImpacted[k]);
			}
		}
	}
}

//_____________________________________________________________________//
//Receives a numerical value for an LV
//_____________________________________________________________________//
function LVCurrentInput(x)
{
	var lv, j, x0, k, nru, nl, l, indNode, indFSS, nImp, i, indLV, initialFSS, resultFSS, resultFSS2, dmin, dmax, fa, previousIndLV, operationType;
	var rulesImpacted;
	var noImpact = true;
	var firstFSS = true;
	//post("_____\nLVCurrentInput received with value=", arguments[1], "for LV=", arguments[0], "\n");
	if (arguments.length > 0)
	{
		lv = arguments[0];
		j = looksForLVName(lv);
		//post(lv, "j=", j, "\n");
		if (j < 0)
		{
			//post("Sorry, ", lv, " as a linguistic variable is not declared yet.\n");
		}
		else
		{
			//if the value has changed, we compute impacts; if not, nothing//
			//MODIF 18 08 08 : remove this constraint//
			x0 = arguments[1];
			nru = myRules.length;
			//post("_______\nImpacted LV is ", myLVNames[j], "#", j, "with value x0=", x0, "\n");
			if ((x0 != myLV[j].LV_GetCurrentDataValue()) || (requiresExtraComputation[j] == true))
			{
				myLV[j].LV_SetCurrentDataValue(x0);
				//post("Recomputation for LV=", myLVNames[j], "#", j, "with value x0=", x0, "\n");
				rulesImpacted = new Array(nru);
				//we scan the rules//
				noImpact = true;
				for (k = 0; k < nru; k++)
				{
					//post("Examining rule #", k, myRules[k].FR_GetStatement(), "\n");
					rulesImpacted[k] = 0;
					nl = myImpactedRulesByInputLV[j][k].length;
					//post("nl = ", nl, "\n");
					for (l = 0; l < nl; l++)
					{
						indNode = myImpactedRulesByInputLV[j][k][l];
						//post("pour l = ", l, " indNode = ", indNode, "\n");
						if (indNode != IS_NONE)
						{
							//post("---->Node of impact =", indNode, "\n");
							rulesImpacted[k] = 1;
							
							//post("fssNames length=", myFSSNames[j].length, "pour j=", j, "\n");
							for (indFSS = 0; indFSS < myFSSNames[j].length; indFSS++)
							{
								//post("indFSS = ", indFSS, "\n");
								//post("FSS impacted=", myRules[k].FR_getFSSIndexImpactedInLeaf(indNode),"\n");
								//myRules[k].FR_displayRuleElements();
								if (indFSS == myRules[k].ruleNode[indNode].NODE_getFSSReferencedIndex())
								{
								//if the node concerns the right FSS//
								
								//if (indFSS == myRules[k].FR_getFSSIndexImpactedInLeaf(indNode))
								//{
									//post("FSS matching ", indFSS, myRules[k].ruleNode[indNode].NODE_getFSSReferencedIndex(), "\n");
									noImpact = false;
									//ADDED SEPTEMBER 18 2008//
									operationType = myRules[k].FR_getNodeOperationID(indNode);
									//post("operationType = ", operationType, "\n");
									if (operationType == EQUALS_OPERATOR)
									{
										myRules[k].FR_updatesNodeValue(indNode, myLV[j].modellingFSS[indFSS].FSS_GetMembershipValue(x0));
									}
									if (operationType == DIFFERS_OPERATOR)
									{
										myRules[k].FR_updatesNodeValue(indNode, 1.0-myLV[j].modellingFSS[indFSS].FSS_GetMembershipValue(x0));
									}
								}
								
							}
						}
					}
				}
				if (noImpact == false)
				{
					//post("There is an impact\n");
					//we then build the result of each composed condition//
					for (k = 0; k < nru; k++)
					{
						//we compute conditions only for rules impacted//
						if (rulesImpacted[k] > 0)
						{
							if (myRules[k].FR_checkInstantiability() == true)
							{
								//post("Rule # ", k, " can be instantiated\n");
								myRules[k].FR_computeCondition();
							}
						}
					}
					//we then compute the result FSS fB' for each FSS that belongs to a consequent of a rule//
					initialFSS = new FSS("fss0");
					resultFSS = new FSS("result "+myLVNames[indLV]);
					resultFSS2 = new FSS("fss2");
					nImp = myImpactedRulesByOutputFSS.length;
					firstFSS = true;
					previousIndLV = -1;
					//post("nImp=", nImp, "\n");
					for (i=0; i < nImp; i++)
					{
						//we get the LV concerned//
						previousIndLV = indLV;
						indLV = myImpactedRulesByOutputFSS[i][0];
						//if we change of Linguistic Variable, we reinitialize firstFSS//
						if (indLV != previousIndLV)
						{
							firstFSS = true;
						}
						//we get the FSS of the LV that is concerned//
						indFSS = myImpactedRulesByOutputFSS[i][1];
						//post("i=", i, "j=", j,  "name=", myLVNames[indLV], "indLV=", indLV, "indFSS=", indFSS, "\n");
						//get min and max of the LV//
						dmin = myLV[indLV].LV_GetDataMin();
						dmax = myLV[indLV].LV_GetDataMax();
						//post("dmin=", dmin, "dmax=", dmax, "name=", myLVNames[indLV],"\n");
						//we then collect the indexes of the rules concerned//
						initialFSS = myLV[indLV].LV_GetModellingFSS(indFSS);
						//post("Get initialFSS==>");
						//initialFSS.FSS_TextDisplay();
						//
						for (l = 2; l < myImpactedRulesByOutputFSS[i].length; l++)
						{
							//post("l=", l, "rule impacted=", myImpactedRulesByOutputFSS[i][l], myRules[myImpactedRulesByOutputFSS[i][l]].FR_GetStatement(), "\n");
							fa = myRules[myImpactedRulesByOutputFSS[i][l]].FR_GetConditionMembershipValue();
							//post("fa=", fa, "\n");
							if (firstFSS == false)
							{
								//post("Not first fss\n");
								resultFSS2 = initialFSS.FSS_BuildFuzzyImplicationFrom(fa, myFuzzyImplication, dmin, dmax);
								//post("Computation of fuzzyImplication OK");
								//resultFSS.FSS_TextDisplay();
								//resultFSS2.FSS_TextDisplay();
								//2 cases : Mamdani or Larsen : we use max between rules//
								//other fuzzy implications : we use min between rules//
								//post(myFuzzyImplication, "\n");
								if ((myFuzzyImplication == FI_MAMDANI) || (myFuzzyImplication == FI_LARSEN))
								{
									resultFSS = LV_Operation(TCONORM_MAX, resultFSS, resultFSS2, dmin, dmax);
									//post("Mamdani ou Larsen OK\n");
								}
								else
								{
									//post("Appel operation\n");
									resultFSS = LV_Operation(TNORM_MIN, resultFSS, resultFSS2, dmin, dmax);
									//resultFSS.FSS_TextDisplay();
									//post("Autre implication floue OK\n");
								}
							}
							else
							{
								//first computation of FSS//
								//post("First computation of FSS\n");
								resultFSS = initialFSS.FSS_BuildFuzzyImplicationFrom(fa, myFuzzyImplication, dmin, dmax);
								//resultFSS.FSS_TextDisplay();
								firstFSS = false;
							}
						}
						//send the FSS result to display//
						//resultFSS.FSS_SetFSSName("result "+myLVNames[indLV]);
						if (indLV != j)
						{
							//an LV cannot impact itself//
							//if it does there will be a stack overflow//
							resultFSS.FSS_SetFSSName("");
							//post("Resultat intersection ==> ");
							//resultFSS.FSS_TextDisplay();
							resultFSS.FSS_MultiDisplay(myLV[indLV].LV_GetFuzzySubsetNumber()+1, myLVNames[indLV], FSS_OUTLET);
							//now, defuzzification of the result//
							yy = resultFSS.FSS_Defuzzification(dmin, dmax);
							if (yy < dmin)
							{
								yy = dmin;
							}
							if (yy > dmax)
							{
								yy = dmax;
							}
							//post("DEFUZZ=>", myLVNames[indLV], yy, "\n");
							outlet(DEFUZZ_OUTLET, myLVNames[indLV], yy);
						}
					}
					
				}
				else
				{
					//post("No impact\n");
				}
			requiresExtraComputation[j] = false;
			//post("after requires Extra Computation\n");
			}
			/*
			else
			{
				post("No recomputation for LV=", myLVNames[j], "#", j, "with value x0=", x0, "\n");
			}
			*/
		}
		
	}
	
}

//_____________________________________________________________________//
//Chercks the rule received as parameter to know if it is correct
//_____________________________________________________________________//

function checkRule(x)
{
	var s, r ;
	s = maxArgumentsToString(arguments, true);
	//s2 = maxArgumentsToString(arguments, true);
	//post(s, "\n");
	outlet(MESSAGE_OUTLET, s.concat(" is a correct rule"));
	myCurrentExpression = new FR(s);
	r = myCurrentExpression.FR_SplitInitialStatement()
	//myCurrentExpression.FR_displayRuleElements();
}

//_____________________________________________________________________//
//Adds the content of a message as a fuzzy rule to the list of rules
//_____________________________________________________________________//
function addRule(x)
{
	var i, j, n, s, isAlreadyAdded, x, y, c_result;
	s = maxArgumentsToString(arguments, true);
	if (s != "")
	{
		//MODIFICATION APRIL 30TH 2008//
		//WE CHECK IF THE RULE IS NOT ALREADY ADDED//
		isAlreadyAdded = false;
		n = myRules.length;
		i = 0;
		if (n > 0)
		{
			do
			{
				if (myRules[i].FR_IsDifferentRule(s) == false)
				{
					isAlreadyAdded = true;
					//post("Indice trouve =", i, "\n");
				}
				i++;
			} while ((i < n) && (isAlreadyAdded == false))
		}
		
/*		for (i = 0; i < n; i++)
		{
			if (myRules[i].FR_IsDifferentRule(s) == false)
			{
				isAlreadyAdded = true;
			}
		}
*/
		if (isAlreadyAdded == false)
		{
			var r = new FR(s);
			//r.FR_displayRuleElements();
			c_result = r.FR_SplitInitialStatement();
			//post("c_result = ", c_result, "\n");
			if (c_result > IS_NONE)
			{
				myRules.push(r);
				//MODIFICATION APRIL 29TH 2008//
				//AS SOON AS A RULE IS ADDED, NODES GET CURRENT VALUES FROM LV AND FSS//
				n = myRules.length;
				for (j = 0; j < myFSSNames.length; j++)
				{
					for (i = 0; i < myFSSNames[j].length; i++)
					{
						//post(myFSSNames.length, myFSSNames[j].length, "\n");
						//post(myLVNames[j], myFSSNames[j][i], myFSSIntersectionValues[j][i], "\n");
						//myRules[n-1].FR_setLeafValue(myLVNames[j], myFSSNames[j][i], myFSSIntersectionValues[j][i]);
						x = myLV[j].LV_GetCurrentDataValue();
						y = myLV[j].modellingFSS[i].FSS_GetMembershipValue(x);
						//post(myLVNames[j], " ", myFSSNames[j][i], " ", y);
						myRules[n-1].FR_setLeafValue(myLVNames[j], myFSSNames[j][i], y);
					}
				}
				//post("Fuzzy rule => ", s ," taken into account\n");
				outlet(MESSAGE_OUTLET, "Fuzzy rule => ", s ," taken into account");
			}
		}
		else
		{
			//post("Fuzzy rule => ", s ," already added\n");
			outlet(MESSAGE_OUTLET, "Fuzzy rule => ", s ," already added");
		}
		//post("Boucles terminées\n");
		computeImpactOfInputLV();
		computeImpactOfOutputFSS();
	}
}

//_____________________________________________________________________//
//Removes a rule that is passed as a message from the patch            //
//_____________________________________________________________________//
function deleteRule(x)
{
	var s;
	s = maxArgumentsToString(arguments, true);
	deleteRuleFromStatement(s);
}

//_________________________________________________________________________//
// Deletes rule from the statement passed as as string                     //
//_________________________________________________________________________//
function deleteRuleFromStatement(s)
{
	var i, n, isAlreadyAdded, ind;
	if (s != "")
	{
		isAlreadyAdded = false;
		n = myRules.length;
		i = 0;
		if (n > 0)
		{
			do
			{
				if (myRules[i].FR_IsDifferentRule(s) == false)
				{
					isAlreadyAdded = true;
					ind = i
					//post("Indice trouve =", i, "\n");
				}
				i++;
			} while ((i < n) && (isAlreadyAdded == false))
		}
		
		if (isAlreadyAdded == true)
		{
			deleteRuleFromNumber(ind);
			outlet(MESSAGE_OUTLET, "Fuzzy rule => ", s ," deleted");
		}
		else
		{
			outlet(MESSAGE_OUTLET, "Fuzzy rule => ", s ," not found");
		}
	
		//post("Boucles terminées\n");
		computeImpactOfInputLV();
		computeImpactOfOutputFSS();
	}
	else
	{
		outlet(MESSAGE_OUTLET, "Fuzzy rule passed is empty !");
	}
}
//_________________________________________________________________________//
// Deletes rule #ind, where the integer index ind is passed as an argument //
//_________________________________________________________________________//
function deleteRuleFromNumber(ind)
{
	var tab1 = new Array();
	var tab2 = new Array();
	var n = myRules.length;
	//post("deleteThisRule function with ind=", ind, "\n");
	tab1 = myRules.slice(0, ind);
	//post("Tab1 created \n");
	tab2 = myRules.slice(ind+1, n);
	//post("Tab2 created \n");
	myRules = tab1.concat(tab2);
	//post("Tab1+2 OK \n");
}


//_____________________________________________________________________//
//Computes the indices of rules and FSS impacted by a numerical value for an LV
//_____________________________________________________________________//
function computeImpactOfInputLV()
{
	var nLV, nru, i, j, k, matchingLeaves;
	//
	nLV = myLVNames.length;
	myImpactedRulesByInputLV = new Array(nLV);
	nru = myRules.length;
	//myImpactedRules has as many principle rows as LV//
	//each row is a double array//
	//with ruleNumber as primary index, and second index belongs to the list of impacted leaves//
	for (i=0; i < myLVNames.length; i++)
	{
		//post("\n-->For", myLVNames[i], " as a LV\n_______\n");
		myImpactedRulesByInputLV[i] = new Array(nru);
		//we examine each rule to get impacted leaves//
		for (j = 0; j < nru; j++)
		{
			//post("------->Examining rule #", j, "= ", myRules[j].FR_GetStatement(), "\n");
			myImpactedRulesByInputLV[i][j] = new Array();
			//gets the number of impacted leaves in input//
			matchingLeaves = new Array();
			matchingLeaves = myRules[j].FR_GetMatchingLeaves(i);
			//if there are no leaves impacted//
			if (matchingLeaves.length == 0)
			{
				//post("Rule #", j, " no leaves impacted in current LV #", i, "\n");
				myImpactedRulesByInputLV[i][j].push(IS_NONE);
			}
			else
			{
				for (k=0; k <matchingLeaves.length; k++)
				{
					myImpactedRulesByInputLV[i][j].push(matchingLeaves[k]);
					//post("Matching leaf = ", matchingLeaves[k], "\n");
					//post("Impact of rule #", j,", leaf #k = ", k, "ruleNode #", myImpactedRulesByInputLV[i][j][k], "\n");
				}
			}
		}
	}
}

//_____________________________________________________________________//
//Computes the impact of consequent rules on FSS
//_____________________________________________________________________//
function computeImpactOfOutputFSS()
{
	var i, j, k, nru, rangImpact;
	var premiere = false;
	
	myImpactedRulesByOutputFSS = new Array();
	//in this array, we store in each rank the # of LV, the # of FSS and the list of impacted rules//
	nru = myRules.length;
	//we scan all FSS and check the ones that belong to consequent rules//
	for (i=0; i < myLVNames.length; i++)
	{
		for (j=0; j < myFSSNames[i].length; j++)
		{
			premiere = false;
			for (k = 0; k < nru; k++)
			{
				if ((myFSSNames[i][j] == myRules[k].FR_getImpactedFSSName()) && (myLVNames[i] == myRules[k].FR_getImpactedLVName()))
				{
					//post("Rule#", k, myRules[k].FR_GetStatement());
					//post("LV=", myLVNames[i], "FSS=", myFSSNames[i][j], "\n");
					if (premiere == false)
					{
						rangImpact = new Array();
						rangImpact.push(i);//adds LV index//
						rangImpact.push(j);//adds FSS index//
						rangImpact.push(k);//adds # of rule//
						premiere = true;
						//post("Impact on output ->", i, j, k, "\n");
					}
					else
					{
						//post("and ->", k, "\n");
						rangImpact.push(k);//adds # of rule//
					}
				}
			}
			if (premiere == true)
			{
				//if we got some impacts//
				myImpactedRulesByOutputFSS.push(rangImpact);
				//post(myImpactedRulesByOutputFSS[0][0],"\n");
			}
		}
	}
}


//_____________________________________________________________________//
//Resets the rule stack: empty
//_____________________________________________________________________//
function deleteAllRules(x)
{
	myRules = new Array();
	//post("No more fuzzy rules taken into account\n");
	outlet(MESSAGE_OUTLET, "No more fuzzy rules taken into account");
}

//_____________________________________________________________________//
//Converts ID to number for fuzzy implication
//_____________________________________________________________________//
function fuzzyImplication(x)
{
	var s;
	s = maxArgumentsToString(arguments, true);
	//post(s, "as FuzzyImplication\n");
	switch(s)
	{
		case FI_REICHENBACH_ID:
		myFuzzyImplication = FI_REICHENBACH;
		//post("Reichenbach fuzzy implication selected\n");
		break;
		
		case FI_WILLMOTT_ID:
		myFuzzyImplication = FI_WILLMOTT;
		//post("Willmott fuzzy implication selected\n");
		break;
		
		case FI_RESCHER_GAINES_ID:
		myFuzzyImplication = FI_RESCHER_GAINES;
		//post("Rescher-Gaines fuzzy implication selected\n");
		break;
		
		case FI_KLEENE_DIENES_ID:
		myFuzzyImplication = FI_KLEENE_DIENES;
		//post("Kleene-Dienes fuzzy implication selected\n");
		break;
		
		case FI_BROUWER_GOEDEL_ID:
		myFuzzyImplication = FI_BROUWER_GOEDEL;
		//post("Brouwer-Goedel fuzzy implication selected\n");
		break;

		case FI_GOGUEN_ID:
		myFuzzyImplication = FI_GOGUEN;
		//post("Goguen fuzzy implication selected\n");
		break;

		case FI_LUKASIEWICZ_ID:
		myFuzzyImplication = FI_LUKASIEWICZ;
		//post("Lukasiewicz fuzzy implication selected\n");
		break;
		
		case FI_MAMDANI_ID:
		myFuzzyImplication = FI_MAMDANI;
		//post("Mamdani fuzzy implication selected\n");
		break;
		
		case FI_LARSEN_ID:
		myFuzzyImplication = FI_LARSEN;
		//post("Larsen fuzzy implication selected\n");
		break;
	}
	//post(myFuzzyImplication, "\n");
	resetExtraComputationArray();
}

/*
//_____________________________________________________________________//
//
//_____________________________________________________________________//
function gmpOperator(x)
{
	var s;
	s = maxArgumentsToString(arguments, true);
	//post(s, "as Gmp operator\n");
	switch(s)
	{
		case GMPO_MAX_ID:
		myGmpOperator = GMPO_MAX;
		break;
		
		case GMPO_MIN_ID:
		myGmpOperator = GMPO_MIN;
		break;
		
		case GMPO_PROD_ID:
		myGmpOperator = GMPO_PROD;
		break;
	}
	//post(myGmpOperator, "\n");
}
*/
//_____________________________________________________________________//
//Dumps all FSS info
//_____________________________________________________________________//
function dumpFSSInfo(x)
{
	var n1, i;
	n1 = myLV.length;
	//post("dump n1 = ", n1, "\n");
	for (i = 0; i < n1; i++)
	{
		post("_____________________\n");
		post("LV = ", myLV[i].LV_GetDataNameValue(),"\n");
		myLV[i].LV_displaysFSSData();
	}
}

//_____________________________________________________________________//
//Dumps all rule statements
//_____________________________________________________________________//
function dumpRules()
{
	var i, n;
	n = myRules.length;
	post("_____________________\n");
	post("DUMP RULES\n");
	post(n, "rule(s) taken into account\n");
	for (i = 0; i < n; i++)
	{
		//post(myRules[i].FR_GetStatement(), "\n");
		post("_____\nRULE #", i, "\n");
		myRules[i].FR_displayRuleElements();
		post("_____________________\n");
	}
}

//_____________________________________________________________________//
//Dumps gmpa info
//_____________________________________________________________________//
function gmpaInfo()
{
	post("_____________________\n");
	post("GMPA INFO\n");
	post("Language for rule expression is");
	switch(myLanguage)
	{
		case ENG_LANGUAGE:
		post(ENG_LANGUAGE_ID);
		break;
		//
		case FR_LANGUAGE:
		post(FR_LANGUAGE_ID);
		break;
		//
		case C_LANGUAGE:
		post(C_LANGUAGE_ID);
		break;
	}
	post("\n");
	//
	post("Fuzzy implication is");
	switch(myFuzzyImplication)
	{
		case FI_REICHENBACH:
		post(FI_REICHENBACH_ID);
		break;
		
		case FI_WILLMOTT:
		post(FI_WILLMOTT_ID);
		break;
		
		case FI_RESCHER_GAINES:
		post(FI_RESCHER_GAINES_ID);
		break;
		
		case FI_KLEENE_DIENES:
		post(FI_KLEENE_DIENES_ID);
		break;
		
		case FI_BROUWER_GOEDEL:
		post(FI_BROUWER_GOEDEL_ID);
		break;

		case FI_GOGUEN:
		post(FI_GOGUEN_ID);
		break;

		case FI_LUKASIEWICZ:
		post(FI_LUKASIEWICZ_ID);
		break;
		
		case FI_MAMDANI:
		post(FI_MAMDANI_ID);
		break;
		
		case FI_LARSEN:
		post(FI_LARSEN_ID);
		break;
	}
	post("\n");
	//
	post("tNorm and CoNorm selected are");
	switch(myDualTNormAndCoNorm)
	{
		case DUAL_MIN_MAX:
		post(DUAL_MIN_MAX_ID);
		break;
		case DUAL_PROD_SUMMINUSPROD:
		post(DUAL_PROD_SUMMINUSPROD_ID);
		break;
		case DUAL_MAXSUM_MINSUM:
		post(DUAL_MAXSUM_MINSUM_ID);
		break;
	}
	post("\n");
	post("_____________________\n");
}


//_____________________________________________________________________//
//Processes the arguments passed
//_____________________________________________________________________//
//Processes the argument that can be passed, which is the language to be used//
/*
if (jsarguments.length == 2)
{
	languageAdaptation(jsarguments[1]);
}
*/
if (jsarguments.length > 1)
{
	
	languageAdaptation(jsarguments[1]);
	if (jsarguments.length > 2)
	{
		fuzzyImplication(jsarguments[2]);
		
		if (jsarguments.length > 3)
		{
			switch (jsarguments[3])
			{
				case "MinMax1":
				dualTNormCoNorm(DUAL_MIN_MAX_ID);
				break;
				case "*+":
				dualTNormCoNorm(DUAL_PROD_SUMMINUSPROD_ID);
				break;
				case "MaxMin2":
				dualTNormCoNorm(DUAL_MAXSUM_MINSUM_ID);
				break;
			}
			//Mamdani and Larsen verifications//
			//
			if (myFuzzyImplication == FI_MAMDANI)
			{
				if (myDualTNormAndCoNorm != DUAL_MIN_MAX)
				{
					post("tNorm and tCoNorm have been forced to MinMax1 since Mamdani fuzzy implication is required\n");
					dualTNormCoNorm(DUAL_MIN_MAX_ID);
				}
			}
			if (myFuzzyImplication == FI_LARSEN)
			{
				if (myDualTNormAndCoNorm != DUAL_PROD_SUMMINUSPROD)
				{
					post("tNorm and tCoNorm have been forced to *+ since Larsen fuzzy implication is required\n");
					dualTNormCoNorm(DUAL_PROD_SUMMINUSPROD_ID);
				}
			}
		}
		
		
	}
}

//Fonctions utilitaires//

//_____________________________________________________________________//
//Updates key ids according to the language used
//_____________________________________________________________________//
function languageAdaptation(l)
{
	//post("LanguageAdaptation ->", l, "\n");
	//var s;
	switch(l)
	{
		case ENG_LANGUAGE_ID:
		IF_ID = "if";
		THEN_ID = "then";
		EQUALS_ID = " is ";
		DIFFERENT_ID = " is_not ";
		operation = [" and ", " or "];
		myLanguage = ENG_LANGUAGE;
		//post("English selected to express rules\n");
		break;
		
		case FR_LANGUAGE_ID:
		IF_ID = "si";
		THEN_ID = "alors";
		EQUALS_ID = " est ";
		DIFFERENT_ID = " n_est_pas ";
		operation = [" et ", " ou "];
		myLanguage = FR_LANGUAGE;
		//post("French selected to express rules\n");
		break;
		
		case C_LANGUAGE_ID:
		IF_ID = "if";
		THEN_ID = "then";
		EQUALS_ID = " == ";
		DIFFERENT_ID = " != ";
		operation = [" && ", " || "];
		myLanguage = C_LANGUAGE;
		//post("C formalism selected to express rules\n");
		break;
	}
	//s = maxArgumentsToString(arguments, true);
}

//_____________________________________________________________________//
//Ordering classification (an element cannot be inserted twice)
//_____________________________________________________________________//
function insertIntoList(x, myList)
{
	//post("insertIntoListFunction x = ", x, "\n");
	var i, n;
	var myNewList = new Array();
	
	//
	myNewList = myList;
	n = myList.length;
	//post("Size = ", n, "\n");
	if ((n == 0) || (x > myList[n-1]))
	{
		//insertion on the right//
		//post("Insertion on the right\n");
		myNewList.push(x);
		return myNewList;
	}
	else
	{
		if (x < myList[0])
		{
			//post("Insertion on the left\n");
			myNewList.unshift(x);
			return myNewList;
		}
		else
		{
			//post("Insertion among elements\n");
			i = 0;
			while ((i < n) && (x > myList[i]))
			{
				i += 1;
			}
			//at the end, either it is the end of the list or we found a place for insertion//
			if ((i < n) && (x != myList[i]))
			{
				//the place can only be < n since we already dealt wth the insertion on the right//
				var tab1 = new Array();
				var tab2 = new Array();
				tab1 = myList.slice(0, i);
				tab2 = myList.slice(i, n);
				tab1.push(x);
				myNewList = tab1.concat(tab2);
				return myNewList;
			}
			else
			{
				//element already present//
				return myList;
			}
		}
	}
}


//_____________________________________________________________________//
//Computes intersection of two segments
//Segment 1 is defined by 2 points: (xa, y1a) (xb, y1b)
//Segment 2 is defined by 2 points: (xa, y2a) (xb, y2b)
//They have the same abscissa at beginning and end: xa and xb
//_____________________________________________________________________//
function segmentIntersection(xa, y1a, y2a, xb, y1b, y2b)
{
	var dx, dy1, dy2, slope1, slope2, origOrdinate1, origOrdinate2, intersectionOrdinate, intersectionAbscissa;
	//the result of the intersection is an array//
	//with three values//
	//item 0 is the result of the intersection : -1 for parallel segments, 0 for secant segments with intersection in the interval//
	//item 1 is the abscissa of the intersection if applicable//
	//item 2 is the ordinate of the intersection if applicable//
	var intersection = new Array(3);
	//
	dx = xb-xa;
	dy1 = y1b - y1a;
	dy2 = y2b - y2a;
	slope1 = dy1 / dx;
	slope2 = dy2 / dx;
	if (slope1 == slope2)
	{
		//post("Parallel segments\n");
		//segments are parallel//
		intersection[0] = IS_NONE;
		intersection[1] = IS_NONE;
		intersection[2] = IS_NONE;
		return intersection;
	}
	else
	{
		//post("Intersection of segments  \n");
		//there is an intersection of the two segments//
		origOrdinate1 = (y1a * xb - y1b * xa)/dx;
		origOrdinate2 = (y2a * xb - y2b * xa)/dx;
		intersectionOrdinate = (slope1 * origOrdinate2 - slope2 * origOrdinate1) / (slope1 - slope2);
		intersectionAbscissa = (origOrdinate2 - origOrdinate1) / (slope1 - slope2);
		if ((intersectionAbscissa > xa) && (intersectionAbscissa < xb))	
		{
			//if the intersection abscissa belongs to [xa, xb], we have to insert a new point in the FSS : the intersection point//
			//post("Insertion intersection=", intersectionAbscissa, intersectionOrdinate, "\n");
			intersection[0] = 0;
			intersection[1] = intersectionAbscissa;
			intersection[2] = intersectionOrdinate;
			//post("After insertion \n");
		}
		else
		{
			intersection[0] = IS_NONE;
			intersection[1] = IS_NONE;
			intersection[2] = IS_NONE;
		}
		return intersection;
	}
}

//_____________________________________________________________________//
//
//_____________________________________________________________________//
function maxArgumentsToString(x, sep)
{
	var s1 = "";
	var s2;
	var i;
	for (i = 0; i < x.length; i++)
	{
		s2 = String(x[i]);
		//post(s2, "\n");
		if (sep == false)
		{
			s1 = s1+s2;
		}
		else
		{
			if (i > 0)
			{
				//on ajoute " " et le nouveau "terme" sauf pour le 1er, où l'on prend directement le nouveau terme//
				s1=s1+" "+s2;
			}
			else
			{
				s1 = s2;
			}
		}
		//post(s1, "\n");
	}
	return s1;
}

//_____________________________________________________________________//
//Looks for lvName in the LVNames array//
//returns either its index if found or (-1) if not found//
//_____________________________________________________________________//
function looksForLVName(lvName)
{
	var i, n, trouve;
	n = myLVNames.length;
	trouve = IS_NONE;
	i = 0;
	if (n > 0)
	{
		do
		{
			//post(i, "eme comparison ->", lvName, myLVNames[i], "\n");
			if (lvName == myLVNames[i])
			{
				trouve =i;
			}
			i += 1;
		} while ((i < n) && (trouve < 0))
	}
	//post("trouve = ", trouve, "\n");
	return trouve;
}

//_____________________________________________________________________//
//Looks for fssName in the fssNames double array for a precise LV//
//returns either its index if found or (-1) if not found//
//_____________________________________________________________________//
function looksForFSSName(fssName, nLV)
{
	var i, n , trouve;
	trouve = IS_NONE;
	if (nLV > IS_NONE)
	{
		n = myFSSNames[nLV].length;
		i = 0;
		if (n > 0)
		{
			do
			{
				if (fssName == myFSSNames[nLV][i])
				{
					trouve = i;
				}
				i += 1;
			} while ((i < n) && (trouve < 0))
		}
	}
	return trouve;
}

//_____________________________________________________________________//
//Adds passed lvName to the list of LVNames
//_____________________________________________________________________//
function addsLVname(lvName)
{
	//post("addsLVName\n");
	myLVNames.push(lvName);
}



//_____________________________________________________________________//
//Displays LV Names
//_____________________________________________________________________//
function displaysLVNames()
{
	var i, n;
	n = myLVNames.length;
	for (i = 0; i < n; i++)
	{
		post("LV # ", i, " is ", myLVNames[i], "\n");
	}
}


//_____________________________________________________________________//
//Converts dual tNorm and tCoNorm IDS to numbers
//_____________________________________________________________________//
function dualTNormCoNorm(x)
{
	//post(x, "\n");
	switch(x)
	{
		case DUAL_MIN_MAX_ID:
		myDualTNormAndCoNorm = DUAL_MIN_MAX;
		tNormID = TNORM_MIN;
		tCoNormID = TCONORM_MAX;
		//post("Min___Max tNorm and tCoNorm selected\n");
		break;
		
		case DUAL_PROD_SUMMINUSPROD_ID:
		myDualTNormAndCoNorm = DUAL_PROD_SUMMINUSPROD;
		tNormID = TNORM_PROD;
		tCoNormID = TCONORM_SUMMINUSPROD;
		//post("x*y___x+y-x*y tNorm and tCoNorm selected\n");
		break;
		
		case DUAL_MAXSUM_MINSUM_ID:
		myDualTNormAndCoNorm = DUAL_MAXSUM_MINSUM;
		tNormID = TNORM_MAXSUM;
		tCoNormID = TCONORM_MINSUM;
		//post("Max(x+y-1,0)___Min(x+y,1) tNorm and tCoNorm selected\n");
		break;
	}
	resetExtraComputationArray();
}


//_____________________________________________________________________//
//Resets all flags of extra computation
//_____________________________________________________________________//
function resetExtraComputationArray()
{
	var n = myLVNames.length;
	var i;
	requiresExtraComputation = new Array(n);
	//
	for (i=0; i < n; i++)
	{
		requiresExtraComputation[i] = true;
	}
}

//_____________________________________________________________________//
//Tests if it gets one of the three expected characters : space, left
//or right parenthesis
//_____________________________________________________________________//
function isExpectedChar(x)
{
	if ((x != SPACE_CHAR_ID) && (x != LEFT_PARENTHESIS_ID) && (x != RIGHT_PARENTHESIS_ID))
	{
		return false;
	}
	else
	{
		return true;
	}
}

//_____________________________________________________________________//
//Tries to find an operation at position i in string x
//_____________________________________________________________________//
function containsOperation(x, i)
{
	var j, n, l, trouve;
	n = operation.length;
	j = 0;
	trouve = IS_NONE
	do
	{
		l = operation[j].length;
		if (x.slice(i, i+l) == operation[j])
		{
			trouve = j;
		}
		j += 1;
		
	} while (j < n);
	return trouve;
}

//_____________________________________________________________________//
//Checks parentheses
//_____________________________________________________________________//
function checkParentheses(x)
{
	var openingParenthesisNbr, closingParenthesisNbr;
	var i, n;
	//
	n = x.length;
	openingParenthesisNbr = 0;
	closingParenthesisNbr = 0;
	//post("expression = ", x, "\n");
	for (i = 0; i < n; i++)
	{
		//post(x.charAt(i), "\n");
		if (x.charAt(i) == LEFT_PARENTHESIS_ID)
		{
			openingParenthesisNbr += 1;
		}
		else
		{
			if (x.charAt(i) == RIGHT_PARENTHESIS_ID)
			{
				closingParenthesisNbr += 1;
			}
		}
	}
	if (openingParenthesisNbr == closingParenthesisNbr)
	{
		//post(openingParenthesisNbr, " ( + ", closingParenthesisNbr, " ) \n");
		return true;
	}
	else
	{
		if (openingParenthesisNbr > closingParenthesisNbr)
		{
			//post("____________________expression : ", x, "\n");
			//post("Too many opening parentheses : ", openingParenthesisNbr-closingParenthesisNbr, "more than required\n");
			outlet(MESSAGE_OUTLET, "expression", x, "has", openingParenthesisNbr-closingParenthesisNbr, "opening parentheses more than required");
			//this.errorMessage.push(x.concat(" has too many opening parentheses"));
			return false;
		}
		if (closingParenthesisNbr > openingParenthesisNbr)
		{
			//post("____________________expression : ", x, "\n");
			//post("Too many closing parentheses : ", -openingParenthesisNbr+closingParenthesisNbr, "more than required\n");
			outlet(MESSAGE_OUTLET, "expression", x, "has", -openingParenthesisNbr+closingParenthesisNbr, "closing parentheses more than required");
			//this.errorMessage.push(x.concat(" has too many closing parentheses"));
			return false;
		}
	}
}

//_____________________________________________________________________//
//Gets the position of the highest operation found in string x
//_____________________________________________________________________//
function getHighestOperationIndex(x)
{
	var i, n;
	var openingParenthesisNbr, trouve, levelTrouve;
	
	n = x.length;
	openingParenthesisNbr = 0;
	trouve = IS_NONE;
	levelTrouve = MAX_APP;
	
	for (i = 0; i < n; i++)
	{
		if (x.charAt(i) == LEFT_PARENTHESIS_ID)
		{
			openingParenthesisNbr += 1;
		}
		else
		{
			if (x.charAt(i) == RIGHT_PARENTHESIS_ID)
			{
				openingParenthesisNbr -= 1;
			}
			else
			{
				if (containsOperation(x, i) > IS_NONE)
					{
						if (openingParenthesisNbr < levelTrouve)
						{
							trouve = i;
							levelTrouve = openingParenthesisNbr;
						}
					}
			}
		}
	}
	return trouve;
}



//_____________________________________________________________________//
//Removes parentheses
//_____________________________________________________________________//
function removeParentheses(x)
{
	var i, leftP, rightP, xBis;
	xBis = x;
	i = 0;
	do
	{
		if ((xBis.charAt(i) == LEFT_PARENTHESIS_ID) || (xBis.charAt(i) == RIGHT_PARENTHESIS_ID))
		{
			leftP = xBis.slice(0, i);
			rightP = xBis.slice(i+1, xBis.length);
			xBis = leftP.concat(rightP);
			//in this case, we start the next loop from the same position since everything has been shifted//
		}
		else
		{
		i += 1;
		}
	} while (i < xBis.length);
	return xBis;
}

//_____________________________________________________________________//
//Computes a given operation between x and y
//_____________________________________________________________________//
function computeOperation(x, y, opID)
{
	//post("x = ", x, "y = ", y, "opID = ", opID);
	//post("myDualTNormAndCoNorm = ", myDualTNormAndCoNorm, "\n");
	switch(opID)
	{
		case AND_OPERATION_ID:
		switch (myDualTNormAndCoNorm)
		{
			case DUAL_MIN_MAX:
			return LV_implementedOperation(TNORM_MIN, x, y);
			case DUAL_PROD_SUMMINUSPROD:
			return LV_implementedOperation(TNORM_PROD, x, y);
			case DUAL_MAXSUM_MINSUM:
			return LV_implementedOperation(TNORM_MAXSUM, x, y);
		}
		break;
		//
		case OR_OPERATION_ID:
		//post("OR_OPERATION\n");
		switch (myDualTNormAndCoNorm)
		{
			case DUAL_MIN_MAX:
			//post("value is ", tNormOrCoNorm(TCONORM_MAX, x, y), "\n");
			return LV_implementedOperation(TCONORM_MAX, x, y);
			case DUAL_PROD_SUMMINUSPROD:
			return LV_implementedOperation(TCONORM_SUMMINUSPROD, x, y);
			case DUAL_MAXSUM_MINSUM:
			return LV_implementedOperation(TNORM_MINSUM, x, y);
		}
		break;
	}
}


//_____________________________________________________________________//
//Sets language
//_____________________________________________________________________//
function setLanguage(l)
{
	switch(l)
	{
		case ENG_LANGUAGE:
		languageAdaptation(ENG_LANGUAGE_ID);
		break;
		//
		case FR_LANGUAGE:
		languageAdaptation(FR_LANGUAGE_ID);
		break;
		//
		case C_LANGUAGE:
		languageAdaptation(C_LANGUAGE_ID);
		break;
	}
}

//_____________________________________________________________________//
//Sets tNorm and tCoNorm
//_____________________________________________________________________//
function setDualTNormAndCoNorm(t)
{
	switch(t)
	{
		case DUAL_MIN_MAX:
		dualTNormCoNorm(DUAL_MIN_MAX_ID);
		break;
		case DUAL_PROD_SUMMINUSPROD:
		dualTNormCoNorm(DUAL_PROD_SUMMINUSPROD_ID);
		break;
		case DUAL_MAXSUM_MINSUM:
		dualTNormCoNorm(DUAL_MAXSUM_MINSUM_ID);
		break;
	}
}

//_____________________________________________________________________//
//Sets fuzzy implication
//_____________________________________________________________________//
function setFuzzyImplication(fi)
{
	switch(fi)
	{
		case FI_REICHENBACH:
		fuzzyImplication(FI_REICHENBACH_ID);
		break;
		
		case FI_WILLMOTT:
		fuzzyImplication(FI_WILLMOTT_ID);
		break;
		
		case FI_RESCHER_GAINES:
		fuzzyImplication(FI_RESCHER_GAINES_ID);
		break;
		
		case FI_KLEENE_DIENES:
		fuzzyImplication(FI_KLEENE_DIENES_ID);
		break;
		
		case FI_BROUWER_GOEDEL:
		fuzzyImplication(FI_BROUWER_GOEDEL_ID);
		break;

		case FI_GOGUEN:
		fuzzyImplication(FI_GOGUEN_ID);
		break;

		case FI_LUKASIEWICZ:
		fuzzyImplication(FI_LUKASIEWICZ_ID);
		break;
		
		case FI_MAMDANI:
		fuzzyImplication(FI_MAMDANI_ID);
		break;
		
		case FI_LARSEN:
		fuzzyImplication(FI_LARSEN_ID);
		break;
	}
}

//_____________________________________________________________________//
//Saves parameters
//_____________________________________________________________________//
function save()
{
	embedmessage("setLanguage", myLanguage);
	embedmessage("setDualTNormAndCoNorm", myDualTNormAndCoNorm);
	embedmessage("setFuzzyImplication", myFuzzyImplication);
}


//_____________________________________________________________________//
// This function sends feedback information to the control panel       //
//
//_____________________________________________________________________//

function initialCommandAndParameterSet()
{
	outlet(CONTROL_OUTLET, "fuzzyImplication", myFuzzyImplication);
	outlet(CONTROL_OUTLET, "dualTNormAndCoNorm", myDualTNormAndCoNorm);
}


//_____________________________________________________________________//
//
// This function sends feedback info to restore                        //
//the context of the linguistic variable as saved when leaving         //
//
//_____________________________________________________________________//
function loadbang()
{
	initialCommandAndParameterSet();
}

//_____________________________________________________________________//
//_____________________________________________________________________//
//
//NODE PROTOTYPE - DATA AND METHODS//
//
//_____________________________________________________________________//
//_____________________________________________________________________//
function NODE(deb, fin, content, opID, l)
{
	//data//
	this.begInText = deb;
	this.endInText = fin;
	this.content = content;
	this.operationID = opID;
	this.level = l;
	this.leftSonIndex = IS_NONE;
	this.rightSonIndex = IS_NONE;
	this.currentValue = 0.0;
	this.hasReceivedValue = false;
	this.LVReferencedIndex = IS_NONE;
	this.FSSReferencedIndex = IS_NONE;
	this.LVReferencedName = "";
	this.FSSReferencedName = "";
	//service methods//
	this.NODE_setLeftSonIndex = NODE_setLeftSonIndex;
	this.NODE_setRightSonIndex = NODE_setRightSonIndex;
	this.NODE_getContent = NODE_getContent;
	this.NODE_getLevel = NODE_getLevel;
	this.NODE_getLeftSonIndex = NODE_getLeftSonIndex;
	this.NODE_getRightSonIndex = NODE_getRightSonIndex;
	this.NODE_getCurrentValue = NODE_getCurrentValue;
	this.NODE_setCurrentValue = NODE_setCurrentValue;
	this.NODE_setLVReferencedIndex = NODE_setLVReferencedIndex;
	this.NODE_getLVReferencedIndex = NODE_getLVReferencedIndex;
	this.NODE_setFSSReferencedIndex = NODE_setFSSReferencedIndex;
	this.NODE_getFSSReferencedIndex = NODE_getFSSReferencedIndex;
	this.NODE_setLVReferencedName = NODE_setLVReferencedName;
	this.NODE_getLVReferencedName = NODE_getLVReferencedName;
	this.NODE_setFSSReferencedName = NODE_setFSSReferencedName;
	this.NODE_getFSSReferencedName = NODE_getFSSReferencedName;
	this.NODE_getHasReceivedValue = NODE_getHasReceivedValue;
	this.NODE_getOperationID = NODE_getOperationID;
	this.NODE_setOperationID = NODE_setOperationID;
	//other methods//
	this.NODE_isALeaf = NODE_isALeaf;
	this.NODE_setLeafValue = NODE_setLeafValue;
	this.NODE_resetHasReceivedValue = NODE_resetHasReceivedValue;
	this.NODE_displayNodeElements = NODE_displayNodeElements;
}
//_____________________________________________________________________//
//Sets left son index
//_____________________________________________________________________//
function NODE_setLeftSonIndex(ind)
{
	this.leftSonIndex = ind;
}

//_____________________________________________________________________//
//Sets right son index
//_____________________________________________________________________//
function NODE_setRightSonIndex(ind)
{
	this.rightSonIndex = ind;
}

//_____________________________________________________________________//
//Gets node content
//_____________________________________________________________________//
function NODE_getContent()
{
	return this.content;
}

//_____________________________________________________________________//
//Gets node level
//_____________________________________________________________________//
function NODE_getLevel()
{
	return this.level;
}

//_____________________________________________________________________//
//Gets left son index
//_____________________________________________________________________//
function NODE_getLeftSonIndex()
{
	return this.leftSonIndex;
}

//_____________________________________________________________________//
//Gets right son index
//_____________________________________________________________________//
function NODE_getRightSonIndex()
{
	return this.rightSonIndex;
}

//_____________________________________________________________________//
//Gets current value of the node
//_____________________________________________________________________//
function NODE_getCurrentValue()
{
	return this.currentValue;
}

//_____________________________________________________________________//
function NODE_setCurrentValue(x)
{
	this.currentValue = x;
}

//_____________________________________________________________________//
//Sets the index of the referenced LV
//_____________________________________________________________________//
function NODE_setLVReferencedIndex(x)
{
	this.LVReferencedIndex = x;
}

//_____________________________________________________________________//
//Gets the index of the referenced index
//_____________________________________________________________________//
function NODE_getLVReferencedIndex()
{
	return this.LVReferencedIndex;
}

//_____________________________________________________________________//
//Sets the index of the referenced FSS
//_____________________________________________________________________//
function NODE_setFSSReferencedIndex(x)
{
	this.FSSReferencedIndex = x;
}

//_____________________________________________________________________//
//Gets the index of the referenced FSS
//_____________________________________________________________________//
function NODE_getFSSReferencedIndex()
{
	return this.FSSReferencedIndex;
}

//_____________________________________________________________________//
//Sets the name of the referenced LV
//_____________________________________________________________________//
function NODE_setLVReferencedName(x)
{
	this.LVReferencedName = x;
}

//_____________________________________________________________________//
//Gets the name of the referenced LV
//_____________________________________________________________________//
function NODE_getLVReferencedName()
{
	return this.LVReferencedName;
}

//_____________________________________________________________________//
//Sets the name of the referenced LV
//_____________________________________________________________________//
function NODE_setFSSReferencedName(x)
{
	this.FSSReferencedName = x;
}

//_____________________________________________________________________//
//Gets the name of the referenced FSS
//_____________________________________________________________________//
function NODE_getFSSReferencedName()
{
	return this.FSSReferencedName;
}

//_____________________________________________________________________//
//Gets whether the node has received a value or not
//_____________________________________________________________________//
function NODE_getHasReceivedValue()
{
	return this.hasReceivedValue;
}

//_____________________________________________________________________//
//Gets Operation ID for the node
//_____________________________________________________________________//
function NODE_getOperationID()
{
	return this.operationID;
}

//_____________________________________________________________________//
//Sets Operation ID for the node
//_____________________________________________________________________//

function NODE_setOperationID(x)
{
	this.operationID = x;
}

//_____________________________________________________________________//
//Gets if the node is a leaf or not
//_____________________________________________________________________//
function NODE_isALeaf()
{
	if ((this.leftSonIndex == IS_NONE) && (this.rightSonIndex = IS_NONE))
	{
		return true;	
	}
	else
	{
		return false;
	}
}

//_____________________________________________________________________//
//Sets leaf value 
//_____________________________________________________________________//
function NODE_setLeafValue(lvName, fssName, x)
{
	//post("LV = ", lvName, " this.LV = ", this.LVReferencedName, " FSS = ", fssName, " this.FSS = ", this.FSSReferencedName,"\n");
	if ((lvName == this.LVReferencedName) && (fssName == this.FSSReferencedName))
	{
		//post("Got node\n");
		this.currentValue = x;
		this.hasReceivedValue = true;
		//this.NODE_displayNodeElements();
	}
}

//_____________________________________________________________________//
//Resets has received value field
//_____________________________________________________________________//
function NODE_resetHasReceivedValue()
{
	this.hasReceivedValue = false;
}

//_____________________________________________________________________//
//Displays node elements
//_____________________________________________________________________//
function NODE_displayNodeElements()
{
	post("Content = ", this.content, " at level ", this.level, " operationID = ", this.operationID, "\n");
	post("Position in the text of the rule - begins at ", this.begInText, " to ", this.endInText, "\n");
	post("Indexes = left son is ", this.leftSonIndex, " right son is ", this.rightSonIndex, "\n");
	post("Current value = ", this.currentValue, " has received value = ", this.hasReceivedValue, "\n");
	post("Refers to LV = ", this.LVReferencedName, "#", this.LVReferencedIndex, " and FSS = ", this.FSSReferencedName, "#", this.FSSReferencedIndex, "\n");
}

//_____________________________________________________________________//
//_____________________________________________________________________//
//
//FUZZY RULE PROTOTYPE - DATA AND METHODS//
//
//_____________________________________________________________________//
//_____________________________________________________________________//
function FR(s)
{
	this.statement = s;
	this.condition = "";
	this.consequent = "";
	this.conditionMembershipValue = 0.0;
	this.consequentMembershipValue = 0.0;
	this.leavesIndexes = new Array();
	//this.errorMessage = new Array();
	this.ruleNode = new Array();
	this.conditionNodeEntry = IS_NONE;
	this.consequentNodeEntry = IS_NONE;
	this.isInstantiable = false;
	this.FSSRule = new FSS("FSSRule");
	//methods of the class//
	//service methods//
	this.FR_GetStatement = FR_GetStatement;
	this.FR_SetStatement = FR_SetStatement;
	this.FR_GetLVBeginCharPos = FR_GetLVBeginCharPos;
	this.FR_GetLVEndCharPos = FR_GetLVEndCharPos;
	this.FR_GetFSSBeginCharPos = FR_GetFSSBeginCharPos;
	this.FR_GetFSSEndCharPos = FR_GetFSSEndCharPos;
	this.FR_GetIsInstantiable = FR_GetIsInstantiable;
	this.FR_SetIsInstantiable = FR_SetIsInstantiable;
	this.FR_GetConditionMembershipValue = FR_GetConditionMembershipValue;
	this.FR_SetConditionMembershipValue = FR_SetConditionMembershipValue;
	//pthers methods// 
	this.FR_SplitInitialStatement = FR_SplitInitialStatement;
	this.FR_displayRuleElements = FR_displayRuleElements;
	this.FR_Parsing = FR_Parsing;
	this.FR_DisplayParsingResults = FR_DisplayParsingResults;
	this.FR_GetMatchingLeaves = FR_GetMatchingLeaves;
	this.FR_updatesNodeValue = FR_updatesNodeValue;
	this.FR_getListOfLeaves = FR_getListOfLeaves;
	this.FR_setLeafValue = FR_setLeafValue;
	this.FR_resetNodeHasReceivedValue = FR_resetNodeHasReceivedValue;
	this.FR_computeNodeValue = FR_computeNodeValue;
	this.FR_checkInstantiability = FR_checkInstantiability;
	this.FR_computeCondition = FR_computeCondition;
	this.FR_getImpactedFSSName = FR_getImpactedFSSName;
	this.FR_getImpactedLVName = FR_getImpactedLVName;
	this.FR_computeFSSRule = FR_computeFSSRule;
	this.FR_GetFSSRule = FR_GetFSSRule;
	this.FR_GetCondition = FR_GetCondition;
	this.FR_IsDifferentRule = FR_IsDifferentRule;
	this.FR_getNodeOperationID = FR_getNodeOperationID;
}

//_____________________________________________________________________//
//Gets the statement of the fuzzy rule
//_____________________________________________________________________//

function FR_GetStatement()
{
	//post("FR_GetStatement = ", this.statement, "\n");
	//var s;
	//s = new String(this.statement);
	return (this.statement);
}

//_____________________________________________________________________//
//Sets the stament of the fuzzy rule
//_____________________________________________________________________//

function FR_SetStatement(x)
{
	this.statement = x;
}

//_____________________________________________________________________//
///Gets the start position of LV i in statement
//_____________________________________________________________________//
function FR_GetLVBeginCharPos(i)
{
	return this.LVBeginCharPos[i];
}

//_____________________________________________________________________//
//Gets the end position of LV i in statement
//_____________________________________________________________________//
function FR_GetLVEndCharPos(i)
{
	return this.LVEndCharPos[i];
}

//_____________________________________________________________________//
//Gets the start position of FSS i in statement
//_____________________________________________________________________//
function FR_GetFSSBeginCharPos(i)
{
	return this.FSSBeginCharPos[i];
}

//_____________________________________________________________________//
//Gets the end position of FSS i in statement
//_____________________________________________________________________//
function FR_GetFSSEndCharPos(i)
{
	return this.FSSEndCharPos[i];
}

//_____________________________________________________________________//
//Gets the instantiability
//_____________________________________________________________________//
function FR_GetIsInstantiable()
{
	return this.isInstantiable;
}

//_____________________________________________________________________//
//Sets the instantiability
//_____________________________________________________________________//
function FR_SetIsInstantiable(v)
{
	this.isInstantiable = v;
}

//_____________________________________________________________________//
//Gets the membership value of the condition
//_____________________________________________________________________//
function FR_GetConditionMembershipValue()
{
	return this.conditionMembershipValue;
}

//_____________________________________________________________________//
//Sets the membership value of the condition
//_____________________________________________________________________//
function FR_SetConditionMembershipValue(x)
{
	this.conditionMembershipValue = x;
}

//_____________________________________________________________________//
//Splits initial statement into condition and consequent
//_____________________________________________________________________//
function FR_SplitInitialStatement()
{
	var p1, p3, p5, ind1, ind2, c1_result, c2_result;
	p1 = this.statement.indexOf(IF_ID);
	//post("p1 = ", p1, "\n");
	//post("longueur si = ", IF_ID.length);
	p3 = this.statement.indexOf(THEN_ID);
	this.condition = this.statement.substring(p1+IF_ID.length, p3);
	//post("condition = ", this.condition, "\n");
	p5 = this.statement.length;
	this.consequent = this.statement.substring(p3+THEN_ID.length, p5);
	//post("consequent = ", this.consequent, "\n");
	//
	if (checkParentheses(this.condition))
	{
		c1_result = this.FR_Parsing(this.condition, 0);
		if (c1_result > IS_NONE)
		{
			this.conditionNodeEntry = c1_result;
		}
		else
		{
			return IS_NONE;
		}
		//post("ind1 = ", this.conditionNodeEntry, "\n");
		//this.FR_DisplayParsingResults(this.conditionNodeEntry);
		//we get the list of leaves in trees for inputs, no need to get them for the outputs//
		this.FR_getListOfLeaves();
		//post(getHighestOperationIndex(this.condition), "position of operation\n");//
	}
	if (checkParentheses(this.consequent))
	{
		c2_result = this.FR_Parsing(this.consequent, 0);
		if (c2_result > IS_NONE)
		{
			this.consequentNodeEntry = c2_result;
		}
		else
		{
			return IS_NONE;
		}
		//post("ind2 = ", this.consequentNodeEntry, "\n");
		//this.FR_DisplayParsingResults(this.consequentNodeEntry);
		//post(getHighestOperationIndex(this.consequent), "position of operation\n");
	}
	//post(p1, p3, p5, "\n");
	return 0;
}


/*
//_____________________________________________________________________//
function FR_hasErrors()
{
	var n;
	n = this.errorMessage.length;
	if (n > 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
*/

	
//_____________________________________________________________________//
//Displays rule elements
//_____________________________________________________________________//
function FR_displayRuleElements()
{

	var i, j, p, n;
	post("Rule = ", this.statement, "\n");
	post("Condition = ", this.condition, "\n");
	post("Consequent = ", this.consequent, "\n");
	post("Condition Membership Value=", this.conditionMembershipValue, "\n");
	//
	//Displays error information//
	//
	/*
	n = this.errorMessage.length;
	for (i = 0; i < n; i++)
	{
		post("error = ", this.errorMessage[i], "\n");
	}
	if (n == 0)
	{
		//if no error//
		post("No error\n");
	}
	*/
	post("\nCondition Node Entry Index = ", this.conditionNodeEntry, " Consequent Node Entry Index = ", this.consequentNodeEntry, "\n\n");
	//
	//Displays node information//
	//
	n = this.ruleNode.length;
	for (i = 0; i < n; i++)
	{
		post("_____\nNODE ", i, "\n");
		this.ruleNode[i].NODE_displayNodeElements();
	}
	//
	//Displays leaves indexes//
	//
	n = this.leavesIndexes.length;
	post("\nIndexes of leaves = ");
	for (i = 0; i < n; i++)
	{
		post(this.leavesIndexes[i], " ");
	}
	post("\n");
}



//_____________________________________________________________________//
//Fuzzy rule parsing
//_____________________________________________________________________//
function FR_Parsing(x, lev)
{
	var ind, l, noeud, opInd, myInd, leftInd, rightInd, xBis;
	var i, j, n, trouve1, trouve2, nLV, nFSS;
	var LVN, FSSN;
	ind = getHighestOperationIndex(x);
	//post("\nWorking on = ", x, "\n");
	//if there is still an operation, we create a node with this operation//
	if (ind > IS_NONE)
	{
		opInd = containsOperation(x, ind);
		//post("_______________________________\n");
		noeud = new NODE(ind, ind+operation[opInd].length, operation[opInd], opInd, lev);
		this.ruleNode.push(noeud);
		myInd = this.ruleNode.length-1;
		//post("My Ind = ", myInd, "\n");
		//post("Parameters = ", ind, ind+operation[opInd].length, operation[opInd], opInd, lev, "\n");
		//post("operation = ", this.ruleNode[myInd].NODE_getOperationID(), "\n");
		//looks for another operation on the left side//
		//post("Looking for left son...up to", ind, "\n");
		leftInd = this.FR_Parsing(x.slice(0, ind), lev+1);
		this.ruleNode[myInd].NODE_setLeftSonIndex(leftInd);
		//post("Left Ind in Parsing = ", leftInd, "\n");
		//post("Looking for right son... from", ind+operation[opInd].length, " to ", x.length,"\n");
		rightInd = this.FR_Parsing(x.slice(ind+operation[opInd].length, x.length), lev+1);
		this.ruleNode[myInd].NODE_setRightSonIndex(rightInd);
		//post("Right Ind in Parsing = ", rightInd, "\n");
		return myInd;
	}
	else
	{
		var equalFound = false;
		var differFound = false;
		//it is a leave of a tree
		//if needed, remove all parentheses//
		xBis = removeParentheses(x);
		//post("before x = ", x, " after xBis = ", xBis, "\n");
		noeud = new NODE(0, xBis.length, xBis, IS_NONE, lev);
		noeud.NODE_setLeftSonIndex(IS_NONE);
		noeud.NODE_setRightSonIndex(IS_NONE);
		this.ruleNode.push(noeud);
		myInd = this.ruleNode.length-1;
		//post("myInd = ", myInd, "\n");
		//parsing of the content of the node//
		n = xBis.length;
		i = 0;
		nLV = IS_NONE;
		do
		{
			//post("Fragment examine a la position", i, "=", xBis.substring(i, i+EQUALS_ID.length), "\n");
			if (xBis.substring(i, i+EQUALS_ID.length) == EQUALS_ID)
			{
				//we found equals keyword
				equalFound = true;
				//post("Equals found at position", i, "\n");
				this.ruleNode[myInd].NODE_setOperationID(EQUALS_OPERATOR);
			}
			if (xBis.substring(i, i+DIFFERENT_ID.length) == DIFFERENT_ID)
			{
				//we found differs keyword
				differFound = true;
				//post("Differs found at position", i, "\n");
				this.ruleNode[myInd].NODE_setOperationID(DIFFERS_OPERATOR)
			}
			if ((equalFound == true) || (differFound == true))
			{
				//equalFound = true;
				//back search for LV//
				j = i-1;
				trouve1 = 0;
				LVN = "";
				do
				{
					//post(xBis.charAt(j), "\n");
					if (isExpectedChar(xBis.charAt(j)) == false)
					{
						j -= 1;
					}
					else
					{
						trouve1 = 1;
					}
				} while ((j >= 0) && (trouve1 == 0));
				//post("fin j =", j, "trouve1=", trouve1, "\n");
				if ((trouve1 == 1) || (j < 0))
				{
					LVN = xBis.substring(j+1, i);
					//post("LV found = ", LVN, "\n");
					this.ruleNode[myInd].NODE_setLVReferencedName(LVN);
					nLV = looksForLVName(LVN);
					this.ruleNode[myInd].NODE_setLVReferencedIndex(nLV);
					//post("number = ", nLV, "\n");
					if (nLV < 0)
					{
						//post("___________________\n\n");
						outlet(MESSAGE_OUTLET, LVN, " is not a declared linguistic variable");
						//this.errorMessage.push(LVN.concat(" LV not declared"));
						return IS_NONE;
					}
					else
					{
						//this.LVImpactedNumber.push(nLV);
						//this.LVImpactedName.push(LVN);
						//this.LVBeginCharPos.push(j+1);
						//this.LVEndCharPos.push(i);
						//this.proposalStatus.push(RCFI_ID); //either condition or consequent//
					}
					//forward search for FSS//
					if (equalFound == true)
					{
						j = i+EQUALS_ID.length;
						//post("equal j=", j, "\n");
					}
					if (differFound == true)
					{
						j = i+DIFFERENT_ID.length;
						//post("different j=", j, "\n");
					}
					trouve2 = 0;
					FSSN = "";
					do
					{
						if (isExpectedChar(xBis.charAt(j)) == false)
						{
							j += 1;
						}
						else
						{
							trouve2 = 1;
						}
					} while ((j < n) && (trouve2 == 0));
					//post("fin2 j =", j, " n = ", n , "\n");
					if ((trouve2 == 1) || (j == n))
					{
						if (equalFound == true)
						{
							FSSN = xBis.substring(i+EQUALS_ID.length, j);
						}
						if (differFound == true)
						{
							FSSN = xBis.substring(i+DIFFERENT_ID.length, j);
						}
						//post("FSS found = ", FSSN, "\n");
						this.ruleNode[myInd].NODE_setFSSReferencedName(FSSN);
						nFSS = looksForFSSName(FSSN, nLV);
						this.ruleNode[myInd].NODE_setFSSReferencedIndex(nFSS);
						//post("number = ", nFSS, "\n");
						if (nFSS < 0)
						{
							outlet(MESSAGE_OUTLET, FSSN, " is not a declared fuzzy subset");
							//this.errorMessage.push(FSSN.concat(" FSS not declared"));
							return IS_NONE;
						}
						else
						{
							//this.FSSImpactedNumber.push(nFSS);
							//this.FSSImpactedName.push(FSSN);
							//this.FSSBeginCharPos.push(i+1);
							//this.FSSEndCharPos.push(j);
						}
					}
				}
			}
			i += 1;
		} while ((i < n) && (nLV < 0))
		if ((equalFound == false) && (differFound == false))
		{
			outlet(MESSAGE_OUTLET, "In expression", xBis, "no", EQUALS_ID, "nor", DIFFERENT_ID, "term found");
			return IS_NONE;
		}
		//post("*****\n");
		//post("My Ind = ", myInd, " NO SONS \n");
		//post("Parameters = ", 0, xBis.length, xBis, -1, lev, "\n");
		return myInd;
	}
}


//_____________________________________________________________________//
//Displays results of parsing for the fuzzy rule
//_____________________________________________________________________//
function FR_DisplayParsingResults(ind)
{
	var i1, i2;
	post("______Display of entity #", ind, "\n");
	post("Content = ", this.ruleNode[ind].NODE_getContent(), "\n");
	post("Level = ", this.ruleNode[ind].NODE_getLevel(), "\n");
	i1 = this.ruleNode[ind].NODE_getLeftSonIndex();
	post("Left son index = ", i1, "\n");
	i2 = this.ruleNode[ind].NODE_getRightSonIndex();
	post("Right son index = ", i2, "\n");
	if (i1 > IS_NONE)
	{
		this.FR_DisplayParsingResults(i1);
	}
	if (i2 > IS_NONE)
	{
		this.FR_DisplayParsingResults(i2);
	}
	
}

//_____________________________________________________________________//
//To get the list of leaves indexes
//_____________________________________________________________________//
function FR_getListOfLeaves()
{
	var i, n;
	this.leavesIndexes = new Array();
	n = this.ruleNode.length;
	for (i = 0; i < n; i++)
	{
		if (this.ruleNode[i].NODE_isALeaf() == true)
		{
			this.leavesIndexes.push(i);
		}
	}
}



//_____________________________________________________________________//
//To get the number of input leaves indexes
//_____________________________________________________________________//
function FR_GetMatchingLeaves(indLV)
{
	var liste = new Array();
	var i, j, n;
	n = this.leavesIndexes.length;
	//among all leaves in the condition, we collect the ones that concern the LV passed as number indLV//
	for (i = 0; i < n; i++)
	{
		j = this.leavesIndexes[i];
		//post("GetMatchingLeaves ->", j, indLV, this.ruleNode[j].NODE_getLVReferencedIndex(), "\n");
		if (indLV == this.ruleNode[j].NODE_getLVReferencedIndex())
		{
			liste.push(j);
		}

	}
	return liste;
}

//_____________________________________________________________________//
//Updates node value
//_____________________________________________________________________//
function FR_updatesNodeValue(i,x)
{
	this.ruleNode[i].NODE_setCurrentValue(x);
}

//_____________________________________________________________________//
//Gets the index of impact of fss i in leaf
//_____________________________________________________________________//
function FR_getFSSIndexImpactedInLeaf(i)
{
	post("FR_getFSSIndexImpactedInLeaf", i);
	return this.ruleNode[i].NODE_getFSSReferencedIndex();
}

//_____________________________________________________________________//
//To set the value to leaves
//_____________________________________________________________________//
function FR_setLeafValue(lvName, fssName, x)
{
	var i, n;
	//we examine all leaves and set the value if appliable//
	n = this.leavesIndexes.length;
	//post("LV = ", lvName, " FSS = ", fssName, "\n");
	for (i = 0; i < n; i++)
	{
		//post("node # ", this.leavesIndexes[i], "\n");
		this.ruleNode[this.leavesIndexes[i]].NODE_setLeafValue(lvName, fssName, x);
	}
}
	
//_____________________________________________________________________//
//To reset the indicator has received value
//_____________________________________________________________________//
function FR_resetNodeHasReceivedValue()
{
	var i, n;
	n = this.ruleNode.length;
	for (i = 0; i < n; i++)
	{
		this.ruleNode[i].NODE_resetHasReceivedValue();
	}
}

//_____________________________________________________________________//
//Computes the undertree of the node # i
//_____________________________________________________________________//
function FR_computeNodeValue(i)
{
	var fg, fd, vg, vd, vv;
	//get the indexes of left son node and right son node//
	//post("Node = ", i, "\n");
	fg = this.ruleNode[i].NODE_getLeftSonIndex();
	fd = this.ruleNode[i].NODE_getRightSonIndex();
	//post("fg = ", fg, " fd = ", fd, "\n");
	if ((fg != IS_NONE) && (fd != IS_NONE))
	{
		if (this.ruleNode[fg].NODE_getHasReceivedValue() == false)
		{
			//left son has no computed value yet//
			//post("Compute left son", fg);
			this.FR_computeNodeValue(fg);
			//post(" which has now value = ", this.ruleNode[fg].NODE_getCurrentValue(), "\n");
		}
		if (this.ruleNode[fd].NODE_getHasReceivedValue() == false)
		{
			//right son has no computed value yet//
			//post("Compute right son", fd);
			this.FR_computeNodeValue(fd);
			//post(" which has now value = ", this.ruleNode[fd].NODE_getCurrentValue(), "\n");
		}
		vg = this.ruleNode[fg].NODE_getCurrentValue();
		vd = this.ruleNode[fd].NODE_getCurrentValue();
		//this.ruleNode[i].NODE_displayNodeElements();
		//post("Computation with operation = ", this.ruleNode[i].NODE_getOperationID(), this.ruleNode[i].NODE_getContent(), "\n");
		vv = computeOperation(vg, vd, this.ruleNode[i].NODE_getOperationID());
		//post("Both sons have computed values => vg = ", vg, " vd = ", vd, "value = ", vv, "\n");
		this.ruleNode[i].NODE_setCurrentValue(vv);
	}
	/*
	if (fg != IS_NONE)
	{
		if (this.ruleNode[fg].NODE_getHasReceivedValue() == false)
		{
			//left son has no computed value yet//
			post("Compute left son", fg, "\n");
			this.FR_computeNodeValue(fg);
		}
		else
		{
			if (fd != IS_NONE)
			{
				if (this.ruleNode[fd].NODE_getHasReceivedValue() == false)
				{
					//right son has no computed value yet//
					post("Compute right son", fd, "\n");
					this.FR_computeNodeValue(fd);
				}
				else
				{
					//both sons have computed values//
					vg = this.ruleNode[fg].NODE_getCurrentValue();
					vd = this.ruleNode[fd].NODE_getCurrentValue();
					//this.ruleNode[i].NODE_displayNodeElements();
					//post("Computation with operation = ", this.ruleNode[i].NODE_getOperationID(), this.ruleNode[i].NODE_getContent(), "\n");
					vv = computeOperation(vg, vd, this.ruleNode[i].NODE_getOperationID());
					post("Both sons have computed values => vg = ", vg, " vd = ", vd, "value = ", vv, "\n");
					this.ruleNode[i].NODE_setCurrentValue(vv);
				}
			}
		}
	}
	*/
}


//_____________________________________________________________________//
//Checks instantiability
//_____________________________________________________________________//
function FR_checkInstantiability()
{
	//we check all leaves and verify they all have received values//
	//and return and store either true or false//
	var complet = true;
	var i, j, n;
	n = this.leavesIndexes.length;
	//post("check n = ", n, "\n");
	for (i = 0; i < n; i++)
	{
		j = this.leavesIndexes[i];
		//post("check j = ", j, "\n");
		//this.ruleNode[j].NODE_displayNodeElements();
		//post("check = has received value", this.ruleNode[j].NODE_getHasReceivedValue(), "\n");
		if (this.ruleNode[j].NODE_getHasReceivedValue() == false)
		{
			complet = false;
			post("Error in rule instanciation ->", this.condition, "Member not instanciated is: ", this.ruleNode[j].NODE_getContent(), "\n");
		}
	}
	this.FR_SetIsInstantiable(complet);
	return (complet);
}

//_____________________________________________________________________//
//Computes the condition of the fuzzy rule
//_____________________________________________________________________//
function FR_computeCondition()
{
	var v;
	//post("Starting computing with node #", this.conditionNodeEntry,"\n");
	this.FR_computeNodeValue(this.conditionNodeEntry);
	v = this.ruleNode[this.conditionNodeEntry].NODE_getCurrentValue();
	this.conditionMembershipValue = v;
	//post("condition membership = ", v, "\n");
}
	
//_____________________________________________________________________//
//gets the name of the FSS impacted in the consequent of the rule	   //
//_____________________________________________________________________//
function FR_getImpactedFSSName()
{
	return this.ruleNode[this.consequentNodeEntry].NODE_getFSSReferencedName();
}

//_____________________________________________________________________//
//gets the name of the LV impacted in the consequent of the rule	   //
//_____________________________________________________________________//
function FR_getImpactedLVName()
{
	return this.ruleNode[this.consequentNodeEntry].NODE_getLVReferencedName();
}
	

//_____________________________________________________________________//
//Computes the rule from the fss impacted
//_____________________________________________________________________//

function FR_computeFSSRule(FSSImpacted, tn, dmin, dmax)
{
	var constantFSS, n, y;
	//
	constantFSS = new FSS("prov");
	n = FSSImpacted.FSS_GetNumberOfCoord();
	y = this.conditionMembershipValue;
	//we build a provisional FSS with constant y that is condition membership value and x boundaries that come from the FSS impacted//
	constantFSS.FSS_AppendPoint(FSSImpacted.FSS_GetCoordX(0), y);
	constantFSS.FSS_AppendPoint(FSSImpacted.FSS_GetCoordX(n-1), y);
	//constantFSS.FSS_TextDisplay();
	//FSSImpacted.FSS_TextDisplay();
	//PROVISIONNALLY, WE FORCED THE MIN IN THE FOLLOWING LV_OPERATION//
	//this.FSSRule = LV_Operation(TNORM_MIN, FSSImpacted, constantFSS);
	//MODIF 09/06/2008 TNORM_MIN IS NO LONGER IMPOSED//
	//Now we accept any TNORM//
	this.FSSRule = LV_Operation(tn, FSSImpacted, constantFSS, dmin, dmax);
	//this.FSSRule.FSS_Simplify();
	//this.FSSRule.FSS_TextDisplay();
}

//_____________________________________________________________________//
//Gets FSS
//_____________________________________________________________________//
function FR_GetFSSRule()
{
	return this.FSSRule;
}
	
//_____________________________________________________________________//
//This function returns the condition statement (first part of the expression of the rule)//
//_____________________________________________________________________//
function FR_GetCondition()
{
	return this.condition;
}

//_____________________________________________________________________//
//Compares two rules
//_____________________________________________________________________//
function FR_IsDifferentRule(s)
{
	if (s != this.statement)
	{
		return true;
	}
	else
	{
		return false;
	}
}

//_____________________________________________________________________//
//Gets node operaion id
//_____________________________________________________________________//

function FR_getNodeOperationID(indNode)
{
	return this.ruleNode[indNode].NODE_getOperationID();
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
	//this function removes points of the FSS that are no use//
	//it means points who are identical to the previous and next ones//
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
function FSS_Fuzzyfication(x, dataMin, dataMax, fuzzyficationMethodID, halfKernelValue, leftBoundaryValue, rightBoundaryValue)
{
	var a, b, c, d, dx;
	dx = dataMax-dataMin;
	//post("fuzzyfication", x, dataMin, dataMax, fuzzyficationMethodID, "\n");
	switch(fuzzyficationMethodID)
	{
			case TRIANGULAR_PERCENT:
			//post("Fuzzification\n");
			this.FSS_Fill(x-dx*leftBoundaryValue, 0.0, x, 1.0, x+dx*rightBoundaryValue, 0.0);
			break;

			case TRIANGULAR_ABSOLUTE:
			this.FSS_Fill(x - leftBoundaryValue, 0.0, x, 1.0, x + rightBoundaryValue, 0.0);
			break;

			case TRAPEZOIDAL_PERCENT:
			b = x - dx*halfKernelValue;
			c = x + dx*halfKernelValue;
			a = b - dx*leftBoundaryValue;
			d = c + dx*rightBoundaryValue;
			//post("fuzzy ->", a, b, c, d, "\n");
			this.FSS_Fill(a, 0.0, b, 1.0, c, 1.0, d, 0.0);
			break;

			case TRAPEZOIDAL_ABSOLUTE:
			b = x - halfKernelValue;
			c = x + halfKernelValue;
			a = b - leftBoundaryValue;
			d = c + rightBoundaryValue;
			this.FSS_Fill(a, 0.0, b, 1.0, c, 1.0, d, 0.0);
			break;
					
			case SINGLETON:
			this.FSS_Fill(x, 1.0, x, 0.0);
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
		resultFSS.FSS_CompleteWithZeros(dmin, dmax);
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
		fss2 = LV_Operation(TNORM_MIN, fss1, this, dmin, dmax);
		//Build Max(1-fa, previous min)//
		//fss3.FSS_AppendPoint(this.coordX[0], 0.0);
		fss3.FSS_AppendPoint(this.coordX[0], 1.0-fa);
		fss3.FSS_AppendPoint(this.coordX[n-1], 1.0-fa);
		//fss3.FSS_AppendPoint(this.coordX[n-1], 0.0);
		resultFSS = LV_Operation(TCONORM_MAX, fss3, fss2, dmin, dmax);
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
		resultFSS = LV_Operation(TNORM_MIN, fss1, this, dmin, dmax);
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
		resultFSS.FSS_CompleteWithZeros(dmin, dmax);
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
		resultFSS = LV_Operation(TCONORM_MAX, fss1, this, dmin, dmax);
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
		resultFSS = LV_Operation(TNORM_MIN, fss1, this, dmin, dmax);
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
		
		resultFSS.FSS_CompleteWithZeros(dmin, dmax);
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
			resultFSS = LV_Operation(TNORM_MIN, fss1, fss2, dmin, dmax);
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
		resultFSS = LV_Operation(TNORM_MIN, fss1, fss2, dmin, dmax);
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
		resultFSS = LV_Operation(TNORM_MIN, fss1, this, dmin, dmax);
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

//_____________________________________________________________________//
//_____________________________________________________________________//
//
//LINGUISTIC VARIABLE PROTOTYPE - DATA AND METHODS//
//
//_____________________________________________________________________//
//_____________________________________________________________________//

function LV(lvName)
{
	this.dataNameValue = lvName;
	//this.preciseVal = 0;
	this.modellingFSS = new Array();
	//
	//current input data value (initially 0.0)//
	this.currentDataValue = 0.0;
	//fuzzySubsetNumber : number of fuzzy subsets used//
	this.fuzzySubsetNumber = 0;
	
	//min, max and average for the input data//
	this.dataMin = MAX_APP;
	this.dataMax = MIN_APP;
	
	//service methods//
	this.LV_SetDataNameValue = LV_SetDataNameValue;
	this.LV_GetDataNameValue = LV_GetDataNameValue;
	this.LV_SetCurrentDataValue = LV_SetCurrentDataValue;
	this.LV_GetCurrentDataValue = LV_GetCurrentDataValue;
	this.LV_SetFuzzySubsetNumber = LV_SetFuzzySubsetNumber;
	this.LV_GetFuzzySubsetNumber = LV_GetFuzzySubsetNumber;
	
	this.LV_SetDataMin = LV_SetDataMin;
	this.LV_GetDataMin = LV_GetDataMin;
	this.LV_SetDataMax = LV_SetDataMax;
	this.LV_GetDataMax = LV_GetDataMax;
	
	this.LV_alphaCut = LV_alphaCut;
	this.LV_CopyFrom = LV_CopyFrom;
	this.LV_GetModellingFSS = LV_GetModellingFSS;
	//other methods//
	this.LV_Operation = LV_Operation;
	this.LV_implementedOperation = LV_implementedOperation;
	this.LV_GetIntersectionValue = LV_GetIntersectionValue;
	
	this.LV_displaysParameters = LV_displaysParameters;
	this.LV_displaysDataProperties = LV_displaysDataProperties;
	this.LV_displaysFSSData = LV_displaysFSSData;
	this.LV_FSSSizing = LV_FSSSizing;
	this.LV_FSSInstantiation = LV_FSSInstantiation;
	
	this.LV_parseDualTNormCoNorm = LV_parseDualTNormCoNorm;
	
	this.LV_getTNormLabel = LV_getTNormLabel;
	this.LV_getTCoNormLabel = LV_getTCoNormLabel;
	this.LV_getDualTNormCoNormLabel = LV_getDualTNormCoNormLabel;
	
}

//_____________________________________________________________________//
function LV_SetDataNameValue(lvName)
{
	this.dataNameValue = lvName;
}

//_____________________________________________________________________//
function LV_GetDataNameValue()
{
	return this.dataNameValue;
}

//_____________________________________________________________________//
function LV_SetCurrentDataValue(v)
{
	this.currentDataValue = v;
}

//_____________________________________________________________________//
function LV_GetCurrentDataValue()
{
	return this.currentDataValue;
}

//_____________________________________________________________________//
function LV_SetFuzzySubsetNumber(n)
{
	this.fuzzySubsetNumber = n;
}

//_____________________________________________________________________//
function LV_GetFuzzySubsetNumber()
{
	return this.fuzzySubsetNumber;
}

//_____________________________________________________________________//

//_____________________________________________________________________//
function LV_SetDataMin(x)
{
	this.dataMin = x;
}

//_____________________________________________________________________//
function LV_GetDataMin()
{
	return this.dataMin;
}

//_____________________________________________________________________//
function LV_SetDataMax(x)
{
	this.dataMax = x;
}

//_____________________________________________________________________//
function LV_GetDataMax()
{
	return this.dataMax;
}



//_____________________________________________________________________//
function LV_GetModellingFSS(i)
{
	if ((i > -1) && (i < this.fuzzySubsetNumber))
		{
			return this.modellingFSS[i];
		}
}


//_____________________________________________________________________//
function LV_Operation(operationID, fss1, fss2, dmin, dmax)
{
	var fssInter = new FSS("");
	var xCoordinateList = new Array();
	var y1_prec_a, y1_prec_b, y2_prec_a, y2_prec_b, y1_suiv_a, y1_suiv_b, y2_suiv_a, y2_suivb;
	var nx1, nx2, nx, x_prec, x_suiv;
	var i, j, i1_prec, i2_prec, i1_suiv, i2_suiv, ind;
	var n1_prec, n2_prec, n1_suiv, n2_suiv;
	//var x0, y0;
	var elementFound = false;
	var intersectionResult = new Array(3);
	//
	//post("==========================\nLV_Operation ", operationID, "\n");
	nx1 = fss1.FSS_GetNumberOfCoord();
	nx2 = fss2.FSS_GetNumberOfCoord();
	//post("nx1=", nx1, " nx2=", nx2, "\n");
	//
	//we build the list of xcoordinates necessary//
	for (i=0 ; i < nx1; i++)
	{
		xCoordinateList = insertIntoList(fss1.FSS_GetCoordX(i), xCoordinateList);
	}
	for (i=0 ; i < nx2; i++)
	{
		xCoordinateList = insertIntoList(fss2.FSS_GetCoordX(i), xCoordinateList);
	}
	//post("Number of x coordinates = ", xCoordinateList.length, "\n");
	//
	if ((nx1 > 0) && (nx2 > 0))
	{
		//if there is at least one value in each FSS//
		//initialization//
		i1_prec = 0;
		i2_prec = 0;
		nx = xCoordinateList.length;
		x_prec = xCoordinateList[0];
		//move forward to find next index for fss1//
		ind = fss1.FSS_GetSuperiorIndexOfXValue(i1_prec, x_prec);
		//post("Ind = ", ind, "\n");
		if (ind < 0)
		{
			n1_prec = 1;
			y1_prec_a = fss1.FSS_GetMembershipValue(x_prec);
			y1_prec_b = y1_prec_a;
		}
		else
		{
			i1_prec = ind;
			n1_prec = fss1.FSS_GetNumberOfIdenticalXValueFrom(i1_prec, x_prec);
			//post("n1_prec = ", n1_prec, "\n");
			y1_prec_a = fss1.FSS_GetCoordY(i1_prec);
			//post("y1_prec_a = ", y1_prec_a, "\n");
			y1_prec_b = fss1.FSS_GetCoordY(i1_prec+n1_prec-1);
			//post("y1_prec_b = ", y1_prec_b, "\n");
		}
		//move forward to find next index for fss2//
		ind = fss2.FSS_GetSuperiorIndexOfXValue(i2_prec, x_prec);
		//post("Ind = ", ind, "\n");
		if (ind < 0)
		{
			n2_prec = 1;
			y2_prec_a = fss2.FSS_GetMembershipValue(x_prec);
			//post("y2_prec_a = ", y2_prec_a, "\n");
			y2_prec_b = y2_prec_a;
		}
		else
		{
			i2_prec = ind;
			n2_prec = fss2.FSS_GetNumberOfIdenticalXValueFrom(i2_prec, x_prec);
			y2_prec_a = fss2.FSS_GetCoordY(i2_prec);
			//post("y2_prec_a = ", y2_prec_a, "\n");
			y2_prec_b = fss2.FSS_GetCoordY(i2_prec+n2_prec-1);
			//post("y2_prec_b = ", y2_prec_b, "\n");
		}
		i = 1;
		//
		
		while (i < nx)
		{
			//post("Debut boucle while i=", i, "\n");
			x_suiv = xCoordinateList[i];
			/*
			if (i1_prec < nx1 - 1)
			{
				i1_suiv = i1_prec+1;
			}
			*/
			ind = fss1.FSS_GetSuperiorIndexOfXValue(i1_prec, x_suiv);
			//post("Ind = ", ind, "\n");
			if (ind < 0)
			{
				i1_suiv = i1_prec;
				n1_suiv = 1;
				y1_suiv_a = fss1.FSS_GetMembershipValue(x_suiv);
				y1_suiv_b = y1_suiv_a;
			}
			else
			{
				i1_suiv = ind;
				n1_suiv = fss1.FSS_GetNumberOfIdenticalXValueFrom(i1_suiv, x_suiv);
				y1_suiv_a = fss1.FSS_GetCoordY(i1_suiv);
				y1_suiv_b = fss1.FSS_GetCoordY(i1_suiv+n1_suiv-1);
			}
			//move forward to find next index for fss2//
			/*
			if (i2_prec < nx2 - 1)
			{
				i2_suiv = i2_prec+1;
			}
			*/
			ind = fss2.FSS_GetSuperiorIndexOfXValue(i2_prec, x_suiv);
			//post("Ind = ", ind, "\n");
			if (ind < 0)
			{
				i2_suiv = i2_prec;
				n2_suiv = 1;
				y2_suiv_a = fss2.FSS_GetMembershipValue(x_suiv);
				y2_suiv_b = y2_suiv_a;
			}
			else
			{
				i2_suiv = ind;
				n2_suiv = fss2.FSS_GetNumberOfIdenticalXValueFrom(i2_suiv, x_suiv);
				y2_suiv_a = fss2.FSS_GetCoordY(i2_suiv);
				y2_suiv_b = fss2.FSS_GetCoordY(i2_suiv+n2_suiv-1);
			}
			
			//post("_________________________________________________________\n");
			//post("x_prec = ", x_prec, " x_suiv = ", x_suiv, "\n");
			//post("i1_prec = ", i1_prec, " i1_suiv = ", i1_suiv, "\n");
			//post("i2_prec = ", i2_prec, " i2_suiv = ", i2_suiv, "\n");
			//post("n1_prec = ", n1_prec, " n1_suiv = ", n1_suiv, " n2_prec = ", n2_prec, " n2_suiv = ", n2_suiv, "\n");
			//post("Pour fss1 : ", y1_prec_a, y1_prec_b, y1_suiv_a, y1_suiv_b,"\n");
			//post("Pour fss2 : ", y2_prec_a, y2_prec_b, y2_suiv_a, y2_suiv_b,"\n");
			
			//
			//first case : we only have one element in each list//
			//it is the classical situation with 4 points, defining 2 segments//
			if ((n1_prec == 1) && (n2_prec == 1) && (n1_suiv == 1) && (n2_suiv == 1))
			{
				intersectionResult=segmentIntersection(x_prec, y1_prec_a, y2_prec_a, x_suiv, y1_suiv_a, y2_suiv_a);
				if (intersectionResult[0] == IS_NONE)
				{
					//segments are parallel//
					//post("Parallel segments\n");
					fssInter.FSS_AppendPoint(x_prec, LV_implementedOperation(operationID, y1_prec_a, y2_prec_a));
				}
				else
				{
					//post("Intersection of segments  \n");
					//there is an intersection of the two segments//
					fssInter.FSS_AppendPoint(x_prec, LV_implementedOperation(operationID, y1_prec_a, y2_prec_a));
					fssInter.FSS_AppendPoint(intersectionResult[1], intersectionResult[2]);
					//post("After insertion \n");
					//fssInter.FSS_TextDisplay();	
				}
				if ((i1_suiv+n1_suiv == nx1) && (i2_suiv+n2_suiv == nx2))
				{
					//if last point, we add it also//
					//post("Last point added\n");
					fssInter.FSS_AppendPoint(x_suiv, LV_implementedOperation(operationID, y1_suiv_a, y2_suiv_a));
				}
			}
			else
			{
				//post("At least a vertical segment\n")
				//second case: there is at least a vertical segment//
				fssInter.FSS_AppendPoint(x_prec, LV_implementedOperation(operationID, y1_prec_a, y2_prec_a));
				//post("Add 1st point");
				//fssInter.FSS_TextDisplay();
				
				//for the second point//
				if ((y1_prec_b != y1_prec_a) || (y2_prec_b != y2_prec_a))
				{
					fssInter.FSS_AppendPoint(x_prec, LV_implementedOperation(operationID, y1_prec_b, y2_prec_b));
					//post("Add possible 2nd point");
					//fssInter.FSS_TextDisplay();
				}
				intersectionResult=segmentIntersection(x_prec, y1_prec_b, y2_prec_b, x_suiv, y1_suiv_a, y2_suiv_a);
				if (intersectionResult[0] != IS_NONE)
				{
					fssInter.FSS_AppendPoint(intersectionResult[1], intersectionResult[2]);
					//post("Add possible intersection");
					//fssInter.FSS_TextDisplay();
				}
				//for the last point//
				if ((i1_suiv+n1_suiv == nx1) && (i2_suiv+n2_suiv == nx2))
				{
					//post("For the last point=>\n");
					intersectionResult=segmentIntersection(x_prec, y1_prec_b, y2_prec_b, x_suiv, y1_suiv_a, y2_suiv_a);
					if (intersectionResult[0] != IS_NONE)
					{
						fssInter.FSS_AppendPoint(intersectionResult[1], intersectionResult[2]);
						//post("Add possible intersection");
						//fssInter.FSS_TextDisplay();
					}
					fssInter.FSS_AppendPoint(x_suiv, LV_implementedOperation(operationID, y1_suiv_a, y2_suiv_a));
					//post("Add 1st point");
					//fssInter.FSS_TextDisplay();
					if ((y1_suiv_b != y1_suiv_a) || (y2_suiv_b != y2_suiv_a))
					{
						fssInter.FSS_AppendPoint(x_suiv, LV_implementedOperation(operationID, y1_suiv_b, y2_suiv_b));
						//post("Add possible 2nd point");
						//fssInter.FSS_TextDisplay();
					}
				}
			}
			
			//prepare next loop//
			i += 1;
			i1_prec = i1_suiv;
			i2_prec = i2_suiv;
			n1_prec = n1_suiv;
			n2_prec = n2_suiv;
			x_prec = x_suiv;
			y1_prec_a = y1_suiv_a;
			y1_prec_b = y1_suiv_b;
			y2_prec_a = y2_suiv_a;
			y2_prec_b = y2_suiv_b;
			//
			//fssInter.FSS_TextDisplay();
		}
		
		fssInter.FSS_Simplify();
		//post("After simplication==>");
		//fssInter.FSS_TextDisplay();
		//if the first point x is not at ordinate y=0, let's add the point (x, 0) at the beginning//
		fssInter.FSS_CompleteWithZeros(dmin, dmax);
		//post("After completing with zeros==>");
		//fssInter.FSS_TextDisplay();
		return fssInter;
	}
	
	else
	{
		//return null FSS//
		return fssInter;
	}	
}


//_____________________________________________________________________//
//
//_____________________________________________________________________//
function LV_implementedOperation(operationID, x, y)
{
	//post("operationID = ", operationID, " x = ", x, " y = ", y, "\n");
	switch (operationID)
	{
		case TNORM_MIN:
		return Math.min(x,y);
		break;
		
		case TNORM_PROD:
		return x*y;
		break;
		
		case TNORM_MAXSUM:
		return Math.max(x+y-1.0, 0.0);
		break;
		
		case TCONORM_MAX:
		return Math.max(x, y);
		break;
		
		case TCONORM_SUMMINUSPROD:
		return (x+y-x*y);
		break;
		
		case TCONORM_MINSUM:
		return Math.min(x+y, 1.0);
		break;
	}
}

//_____________________________________________________________________//
function LV_GetIntersectionValue(fss1, fss2, dmin, dmax)
{
	var fssInter = new FSS("intersection");
	//post("GetIntersectionValue = ", this.tNormID, "\n");
	fssInter = this.LV_Operation(this.tNormID, fss1, fss2, dmin, dmax);
	return fssInter.FSS_GetYMax();
}
	



//_____________________________________________________________________//
//
//function LV_parseDualTNormCoNorm(x)
//
//This function parses the string received, supposed to be the id of a dual tNorm and CoNorm selection//
//
//_____________________________________________________________________//
function LV_parseDualTNormCoNorm(x)
{
	//post(x, "\n");
	switch(x)
	{
		case DUAL_MIN_MAX_ID:
		this.myDualTNormAndCoNorm = DUAL_MIN_MAX;
		this.tNormID = TNORM_MIN;
		this.tCoNormID = TCONORM_MAX;
		return NO_ERROR;
		break;
		
		case DUAL_PROD_SUMMINUSPROD_ID:
		this.myDualTNormAndCoNorm = DUAL_PROD_SUMMINUSPROD;
		this.tNormID = TNORM_PROD;
		this.tCoNormID = TCONORM_SUMMINUSPROD;
		return NO_ERROR;
		break;
		
		case DUAL_MAXSUM_MINSUM_ID:
		this.myDualTNormAndCoNorm = DUAL_MAXSUM_MINSUM;
		this.tNormID = TNORM_MAXSUM;
		this.tCoNormID = TCONORM_MINSUM;
		return NO_ERROR;
		break;
		
		default:
		return WRONG_DUALTNORMCONORM_PARAMETER;
		break;
	}
}



//_____________________________________________________________________//
//
//function displaysParameters()
//
//This function displays the global variables
//
//_____________________________________________________________________//

function LV_displaysParameters()
{
	var i;
	post("dataName = ", this.dataNameValue, "\n");
	post("fuzzySubsetNumber = ", this.fuzzySubsetNumber, "\n");
}


//_____________________________________________________________________//
//
//function displaysDataProperties()
//
//This function displays the global variables
//
//_____________________________________________________________________//

function LV_displaysDataProperties()
{
	post("\n");
	post("minimum = ", this.dataMin, "\n");
	post("maximum = ", this.dataMax, "\n");
}

//_____________________________________________________________________//
//
//function LV_displaysFSSData()
//
//This function displays the information for each FSS in LV class
//
//_____________________________________________________________________//

function LV_displaysFSSData()
{
	var i;
	//this.fssVal.FSS_TextDisplay();
	for (i = 0; i < this.fuzzySubsetNumber; i++)
	{
		this.modellingFSS[i].FSS_TextDisplay();
	}
}



function LV_FSSSizing()
{
	this.modellingFSS = new Array(this.fuzzySubsetNumber);
}


function LV_FSSInstantiation(i, myName)
{
	this.modellingFSS[i] = new FSS(myName);
}

//_____________________________________________________________________//
//
//_____________________________________________________________________//
function LV_getTNormLabel(x)
{
	switch(x)
	{
	case TNORM_MIN:
	return TNORM_MIN_ID;
	break;
	
	case TNORM_PROD:
	return TNORM_PROD_ID;
	break;
	
	case TNORM_MAXSUM:
	return TNORM_MAXSUM_ID;
	break;
	}
}

//_____________________________________________________________________//
//
//_____________________________________________________________________//
function LV_getTCoNormLabel(x)
{
	switch(x)
	{
	case TCONORM_MAX:
	return TCONORM_MAX_ID;
	break;
	
	case TCONORM_SUMMINUSPROD:
	return TCONORM_SUMMINUSPROD_ID;
	break;
	
	case TCONORM_MINSUM:
	return TCONORM_MINSUM_ID;
	break;
	}
}

//_____________________________________________________________________//
//
//_____________________________________________________________________//
function LV_getDualTNormCoNormLabel(x)
{
	switch(x)
	{
	case DUAL_MIN_MAX:
	return DUAL_MIN_MAX_ID;
	break;
	
	case DUAL_PROD_SUMMINUSPROD:
	return DUAL_PROD_SUMMINUSPROD_ID;
	break;
	
	case DUAL_MAXSUM_MINSUM:
	return DUAL_MAXSUM_MINSUM_ID;
	break;
	}
}

//_____________________________________________________________________//
//
//_____________________________________________________________________//
function LV_alphaCut(fss1, alpha)
{
	var fss2 = new FSS("alphaCut");
	var i, n, x, y;
	n = fss1.FSS_GetNumberOfCoord();
	for (i=0; i < n; i++)
	{
		x = fss1.FSS_GetCoordX(i);
		y = fss1.FSS_GetCoordY(i);
		fss2.AddPoint(x, Math.min(y, alpha));
	}
	return fss2;
}

//_____________________________________________________________________//
//
//_____________________________________________________________________//
function LV_CopyFrom(lv2)
{
	var i, n;
	//post("1\n");
	this.dataNameValue = lv2.LV_GetDataNameValue();
	//post("2\n");
	//this.fssVal = new FSS(lv2.LV_GetDataNameValue());
	
	//
	//post("3\n");
	//this.lvType = lv2.LV_GetLV_Type();
	//
	//post("4\n");
	this.currentDataValue = lv2.LV_GetCurrentDataValue();
	//
	//post("5\n");
	this.fuzzySubsetNumber = lv2.LV_GetFuzzySubsetNumber();
	n = this.fuzzySubsetNumber;
	for (i = 0; i < n; i++)
	{
		this.modellingFSS.push(lv2.LV_GetModellingFSS(i));
	}
	//
	//this.fuzzyficationMethodID = lv2.LV_GetFuzzyficationMethodID();
	//
	//this.partitioningMethodID = lv2.LV_GetPartitionMethodID();
	//
	//this.trainingModeID = lv2.LV_GetTrainingModeID();
	//
	//this.leftBoundaryValue = lv2.LV_GetLeftBoundaryValue();
	//
	//this.rightBoundaryValue = lv2.LV_GetRightBoundaryValue();
	//
	//this.halfKernelValue = lv2.LV_GetHalfKernelValue();
	//
	this.dataMin = lv2.LV_GetDataMin();
	this.dataMax = lv2.LV_GetDataMax();

}
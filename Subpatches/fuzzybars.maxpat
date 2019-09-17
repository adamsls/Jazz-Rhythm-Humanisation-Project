{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 6,
			"minor" : 1,
			"revision" : 4,
			"architecture" : "x86"
		}
,
		"rect" : [ 0.0, 42.0, 1366.0, 640.0 ],
		"bgcolor" : [ 0.54902, 0.85098, 0.588235, 1.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 0,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 0,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"boxanimatetime" : 200,
		"imprint" : 0,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"boxes" : [ 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-159",
					"linecount" : 4,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1046.760254, 71.0, 150.0, 62.0 ],
					"text" : "Delete all rules, and 1ms later implement rules and dataNames etc if humanisation is turned on"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-157",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1220.0, 193.99173, 101.0, 48.0 ],
					"text" : "Delete all rules if humanisation is turned off"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-156",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 818.198364, 1537.829468, 122.041321, 48.0 ],
					"text" : "Output: velocity levels to be sent to makenote"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-155",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1073.718994, 1298.329468, 150.0, 34.0 ],
					"text" : "Fuzzy Rules determined by analysis of jazz playing"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-154",
					"linecount" : 7,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1031.474365, 1441.337646, 142.0, 103.0 ],
					"text" : "gmpa1 object applies fuzzy rules to incoming data from the first lv1 object and labels the output according to the specifications from second lv1 object"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-153",
					"linecount" : 4,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 755.409058, 1448.329468, 75.0, 62.0 ],
					"text" : "jsui shows visualisaton of gmpa1 output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-152",
					"linecount" : 5,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 313.260315, 1247.329468, 78.95871, 75.0 ],
					"text" : "Labels, format and range for data to be output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-151",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 270.260315, 867.491699, 150.0, 34.0 ],
					"text" : "Labels, format and range for data to be output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-150",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 467.739685, 1322.329468, 126.5, 48.0 ],
					"text" : "Second lv1 object creates labels for defuzzified data"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-149",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 313.260315, 1346.337769, 97.0, 34.0 ],
					"text" : "lv1 object labels incoming data"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-146",
					"linecount" : 5,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 18.0, 1310.337769, 104.0, 75.0 ],
					"text" : "Triggers for quarters notes from switches in main patch input to lv1 object"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-148",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 27.0, 1448.329468, 80.0, 48.0 ],
					"text" : "jsui shows visualisation of lv1 output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-145",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 18.0, 1267.337769, 66.0, 20.0 ],
					"text" : "7/4 Time"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-144",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1057.260254, 923.991699, 150.0, 34.0 ],
					"text" : "Fuzzy Rules determined by analysis of jazz playing"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-143",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1031.760254, 566.508301, 150.0, 34.0 ],
					"text" : "Fuzzy Rules determined by analysis of jazz playing"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-141",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 806.198364, 1215.519531, 122.041321, 48.0 ],
					"text" : "Output: velocity levels to be sent to makenote"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-140",
					"linecount" : 7,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1057.260254, 1117.991699, 142.0, 103.0 ],
					"text" : "gmpa1 object applies fuzzy rules to incoming data from the first lv1 object and labels the output according to the specifications from second lv1 object"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-139",
					"linecount" : 4,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 725.0, 1070.991699, 75.0, 62.0 ],
					"text" : "jsui shows visualisaton of gmpa1 output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-138",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 446.739685, 991.991699, 126.5, 48.0 ],
					"text" : "Second lv1 object creates labels for defuzzified data"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-137",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 295.219025, 1016.0, 97.0, 34.0 ],
					"text" : "lv1 object labels incoming data"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-134",
					"linecount" : 5,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 27.0, 980.0, 104.0, 75.0 ],
					"text" : "Triggers for quarters notes from switches in main patch input to lv1 object"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-135",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 59.0, 901.0, 66.0, 20.0 ],
					"text" : "5/4 Time"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-136",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 27.0, 1130.983398, 80.0, 48.0 ],
					"text" : "jsui shows visualisation of lv1 output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-133",
					"linecount" : 5,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 27.0, 622.991699, 104.0, 75.0 ],
					"text" : "Triggers for quarters notes from switches in main patch input to lv1 object"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-132",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 283.280945, 532.508301, 150.0, 34.0 ],
					"text" : "Labels, format and range for data to be output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-131",
					"linecount" : 5,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 935.880127, 895.491699, 81.760315, 75.0 ],
					"text" : "Output: velocity levels to be sent to makenote"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-128",
					"linecount" : 7,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1057.260254, 809.983398, 142.0, 103.0 ],
					"text" : "gmpa1 object applies fuzzy rules to incoming data from the first lv1 object and labels the output according to the specifications from second lv1 object"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-126",
					"linecount" : 4,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 732.0, 772.991699, 75.0, 62.0 ],
					"text" : "jsui shows visualisaton of gmpa1 output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-124",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 454.989685, 636.991699, 126.5, 48.0 ],
					"text" : "Second lv1 object creates labels for defuzzified data"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-123",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 315.260315, 676.0, 97.0, 34.0 ],
					"text" : "lv1 object labels incoming data"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-121",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 80.260315, 581.991699, 66.0, 20.0 ],
					"text" : "3/4 Time"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-122",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 46.0, 777.991699, 80.0, 48.0 ],
					"text" : "jsui shows visualisation of lv1 output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-127",
					"linecount" : 5,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 935.880127, 524.491699, 81.760315, 75.0 ],
					"text" : "Output: velocity levels to be sent to makenote"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-125",
					"linecount" : 7,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1012.760254, 428.983429, 142.0, 103.0 ],
					"text" : "gmpa1 object applies fuzzy rules to incoming data from the first lv1 object and labels the output according to the specifications from second lv1 object"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-119",
					"linecount" : 7,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1060.760254, 236.99173, 131.0, 103.0 ],
					"text" : "Rules input in c code rather than linguistically, for simplicity. Linguistic labels could be used, but would be slightly more cumbersome"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-104",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 901.760315, 213.0, 150.0, 34.0 ],
					"text" : "Fuzzy Rules determined by analysis of jazz playing"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-103",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 315.260315, 309.200012, 97.0, 34.0 ],
					"text" : "lv1 object labels incoming data"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-110",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 463.239685, 293.991699, 126.5, 48.0 ],
					"text" : "Second lv1 object creates labels for defuzzified data"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-99",
					"linecount" : 4,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 732.0, 385.991699, 75.0, 62.0 ],
					"text" : "jsui shows visualisaton of gmpa1 output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-142",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 46.0, 213.0, 66.0, 20.0 ],
					"text" : "4/4 Time"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-98",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 46.0, 428.983429, 80.0, 48.0 ],
					"text" : "jsui shows visualisation of lv1 output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-90",
					"linecount" : 2,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 301.260315, 152.908264, 150.0, 34.0 ],
					"text" : "Labels, format and range for data to be output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-89",
					"linecount" : 3,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 79.0, 141.408264, 156.0, 48.0 ],
					"text" : "Triggers for quarters notes from switches in main patch input to lv1 object"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"frgb" : 0.0,
					"id" : "obj-93",
					"linecount" : 4,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 79.0, 19.964468, 181.0, 62.0 ],
					"text" : "fuzzybars subpatch: Generates velocities for four bar phrases using JavaScript objects from the FuzzyLib library"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-72",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 871.718994, 1287.329468, 193.0, 18.0 ],
					"text" : "if (beat == 1) then (output == high)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-73",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 876.718994, 1310.329468, 197.0, 18.0 ],
					"text" : "if (beat == 28) then (output == mid)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-79",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 876.718994, 1337.837769, 195.0, 18.0 ],
					"text" : "if (beat == 27) then (output == low)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-85",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 871.718994, 1366.337769, 360.0, 18.0 ],
					"text" : "if (beat != 1) && (beat != 28) && (beat != 27) then (output == vlow)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-57",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 903.760315, 971.991699, 193.0, 18.0 ],
					"text" : "if (beat == 1) then (output == high)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-67",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 908.760315, 994.991699, 197.0, 18.0 ],
					"text" : "if (beat == 20) then (output == mid)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-68",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 908.760315, 1023.5, 195.0, 18.0 ],
					"text" : "if (beat == 19) then (output == low)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-69",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 903.760315, 1051.0, 360.0, 18.0 ],
					"text" : "if (beat != 1) && (beat != 20) && (beat != 19) then (output == vlow)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-28",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 948.760315, 622.991699, 193.0, 18.0 ],
					"text" : "if (beat == 1) then (output == high)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-34",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 953.760315, 645.991699, 197.0, 18.0 ],
					"text" : "if (beat == 12) then (output == mid)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-40",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 953.760315, 674.5, 194.0, 18.0 ],
					"text" : "if (beat == 11) then (output == low)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-42",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 948.760315, 702.0, 359.0, 18.0 ],
					"text" : "if (beat != 1) && (beat != 12) && (beat != 11) then (output == vlow)"
				}

			}
, 			{
				"box" : 				{
					"border" : 0,
					"filename" : "fuzzy.FSSdrawing.js",
					"id" : "obj-12",
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 439.47937, 1429.845947, 261.52066, 125.983459 ]
				}

			}
, 			{
				"box" : 				{
					"border" : 0,
					"filename" : "fuzzy.FSSdrawing.js",
					"id" : "obj-18",
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 137.219025, 1429.845947, 261.52066, 125.983459 ]
				}

			}
, 			{
				"box" : 				{
					"border" : 0,
					"filename" : "fuzzy.FSSdrawing.js",
					"id" : "obj-9",
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 424.260315, 1091.991699, 261.52066, 125.983459 ]
				}

			}
, 			{
				"box" : 				{
					"border" : 0,
					"filename" : "fuzzy.FSSdrawing.js",
					"id" : "obj-11",
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 122.0, 1091.991699, 261.52066, 125.983459 ]
				}

			}
, 			{
				"box" : 				{
					"border" : 0,
					"filename" : "fuzzy.FSSdrawing.js",
					"id" : "obj-4",
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 418.260315, 393.991699, 261.52066, 125.983459 ]
				}

			}
, 			{
				"box" : 				{
					"border" : 0,
					"filename" : "fuzzy.FSSdrawing.js",
					"id" : "obj-147",
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 140.0, 393.991699, 261.52066, 125.983459 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-62",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 858.760315, 270.99173, 193.0, 18.0 ],
					"text" : "if (beat == 1) then (output == high)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-20",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 863.760315, 293.991699, 197.0, 18.0 ],
					"text" : "if (beat == 16) then (output == mid)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-19",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 863.760315, 322.5, 195.0, 18.0 ],
					"text" : "if (beat == 15) then (output == low)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-120",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1046.760254, 156.5, 120.0, 20.0 ],
					"text" : "if $i1 == 1 then bang"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-60",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1182.360352, 156.5, 120.0, 20.0 ],
					"text" : "if $i1 == 0 then bang"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-91",
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 92.04129, 1262.337769, 25.0, 25.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-92",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 786.0, 1199.337769, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-94",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 639.739624, 1366.337769, 50.0, 18.0 ],
					"text" : "1 40"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-95",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 639.739624, 1346.337769, 36.0, 20.0 ],
					"text" : "pack"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-96",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 666.47937, 1310.337769, 32.5, 18.0 ],
					"text" : "40"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-97",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 606.47937, 1310.337769, 32.5, 18.0 ],
					"text" : "1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-101",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 947.760254, 1537.829468, 66.0, 18.0 ],
					"text" : "4.25"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-102",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 947.760254, 1488.329468, 75.0, 20.0 ],
					"text" : "route output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-105",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 862.760254, 1488.329468, 75.0, 20.0 ],
					"text" : "route output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-106",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 860.760254, 1422.329468, 103.0, 20.0 ],
					"text" : "prepend addRule"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-107",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 394.239655, 1285.329468, 195.0, 18.0 ],
					"text" : "outFormat vlow low mid high vhigh"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-108",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 413.260315, 1254.329468, 103.0, 18.0 ],
					"text" : "dataName output"
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "fuzzificationMethod", "triangularPercent" ], [ "partitioningMethod", "classicalPartitioning" ], [ "trainingMode", "trainingOff" ], [ "leftBoundary", 0.25 ], [ "rightBoundary", 0.25 ], [ "halfKernelLength", 0 ], [ "overflowMode", 0 ], [ "measureMode", 0 ], [ "setDataMinAlert", 0 ], [ "setDataMaxAlert", 127 ], [ "setDataInputMin", 12345678 ], [ "setDataInputMax", -12345678 ], [ "setDataMin", 1 ], [ "setDataMax", 40 ], [ "setDataAvg", 0 ], [ "setDataReceivedNumber", 0 ], [ "currentDataFuzzification", 4.25 ], [ "updatesBoundariesInfo" ], [ "outFormat", "vlow", "low", "mid", "high", "vhigh" ], [ "dataName", "output" ], [ "partitioningComputing" ] ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-109",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 430.239685, 1392.337769, 143.0, 27.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fuzzy.lv1.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fuzzy.lv1.js triangularPercent classicalPartitioning"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-111",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 294.260315, 1322.329468, 34.0, 18.0 ],
					"text" : "1 28"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-112",
					"linecount" : 4,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 170.260315, 1285.329468, 127.0, 60.0 ],
					"text" : "outFormat 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-113",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 170.260315, 1254.329468, 93.0, 18.0 ],
					"text" : "dataName beat"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-114",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 755.409058, 1229.519531, 43.0, 20.0 ],
					"text" : "pipe 1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-115",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1041.260376, 1419.329468, 87.0, 18.0 ],
					"text" : "deleteAllRules"
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "setLanguage", 2 ], [ "setDualTNormAndCoNorm", 1 ], [ "setFuzzyImplication", 8 ] ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-117",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 5,
					"outlettype" : [ "", "", "", "", "" ],
					"patching_rect" : [ 862.760254, 1448.329468, 155.0, 17.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fuzzy.gmpa1.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fuzzy.gmpa1.js c Larsen MinMax1"
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "fuzzificationMethod", "triangularPercent" ], [ "partitioningMethod", "classicalPartitioning" ], [ "trainingMode", "trainingOff" ], [ "leftBoundary", 0.037037 ], [ "rightBoundary", 0.037037 ], [ "halfKernelLength", 0 ], [ "overflowMode", 0 ], [ "measureMode", 0 ], [ "setDataMinAlert", 0 ], [ "setDataMaxAlert", 28 ], [ "setDataInputMin", 12345678 ], [ "setDataInputMax", -12345678 ], [ "setDataMin", 1 ], [ "setDataMax", 28 ], [ "setDataAvg", 0 ], [ "setDataReceivedNumber", 0 ], [ "currentDataFuzzification", 22 ], [ "updatesBoundariesInfo" ], [ "outFormat", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28 ], [ "dataName", "beat" ], [ "partitioningComputing" ] ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-118",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 170.260315, 1358.329468, 143.0, 27.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fuzzy.lv1.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fuzzy.lv1.js triangularPercent classicalPartitioning"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-88",
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 59.0, 932.0, 25.0, 25.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-61",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 812.248718, 901.0, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-63",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 606.698364, 1036.0, 50.0, 18.0 ],
					"text" : "1 40"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-64",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 606.698364, 1016.0, 36.0, 20.0 ],
					"text" : "pack"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-65",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 633.43811, 980.0, 32.5, 18.0 ],
					"text" : "40"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-66",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 573.43811, 980.0, 32.5, 18.0 ],
					"text" : "1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-70",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 914.718994, 1207.491699, 66.0, 18.0 ],
					"text" : "10.75"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-71",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 914.718994, 1157.991699, 75.0, 20.0 ],
					"text" : "route output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-74",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 829.718994, 1157.991699, 75.0, 20.0 ],
					"text" : "route output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-75",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 827.718994, 1091.991699, 103.0, 20.0 ],
					"text" : "prepend addRule"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-76",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 394.239655, 954.991699, 195.0, 18.0 ],
					"text" : "outFormat vlow low mid high vhigh"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-77",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 380.219025, 923.991699, 103.0, 18.0 ],
					"text" : "dataName output"
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "fuzzificationMethod", "triangularPercent" ], [ "partitioningMethod", "classicalPartitioning" ], [ "trainingMode", "trainingOff" ], [ "leftBoundary", 0.25 ], [ "rightBoundary", 0.25 ], [ "halfKernelLength", 0 ], [ "overflowMode", 0 ], [ "measureMode", 0 ], [ "setDataMinAlert", 0 ], [ "setDataMaxAlert", 127 ], [ "setDataInputMin", 12345678 ], [ "setDataInputMax", -12345678 ], [ "setDataMin", 1 ], [ "setDataMax", 40 ], [ "setDataAvg", 0 ], [ "setDataReceivedNumber", 0 ], [ "currentDataFuzzification", 10.75 ], [ "updatesBoundariesInfo" ], [ "outFormat", "vlow", "low", "mid", "high", "vhigh" ], [ "dataName", "output" ], [ "partitioningComputing" ] ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-78",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 424.260315, 1046.5, 143.0, 27.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fuzzy.lv1.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fuzzy.lv1.js triangularPercent classicalPartitioning"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-80",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 261.219025, 991.991699, 34.0, 18.0 ],
					"text" : "1 20"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-81",
					"linecount" : 4,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 166.760315, 954.991699, 109.0, 60.0 ],
					"text" : "outFormat 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-82",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 137.219025, 923.991699, 93.0, 18.0 ],
					"text" : "dataName beat"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-83",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 786.0, 948.991699, 43.0, 20.0 ],
					"text" : "pipe 1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-84",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1008.218994, 1088.991699, 87.0, 18.0 ],
					"text" : "deleteAllRules"
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "setLanguage", 2 ], [ "setDualTNormAndCoNorm", 1 ], [ "setFuzzyImplication", 8 ] ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-86",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 5,
					"outlettype" : [ "", "", "", "", "" ],
					"patching_rect" : [ 829.718994, 1117.991699, 155.0, 17.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fuzzy.gmpa1.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fuzzy.gmpa1.js c Larsen MinMax1"
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "fuzzificationMethod", "triangularPercent" ], [ "partitioningMethod", "classicalPartitioning" ], [ "trainingMode", "trainingOff" ], [ "leftBoundary", 0.052632 ], [ "rightBoundary", 0.052632 ], [ "halfKernelLength", 0 ], [ "overflowMode", 0 ], [ "measureMode", 0 ], [ "setDataMinAlert", 0 ], [ "setDataMaxAlert", 20 ], [ "setDataInputMin", 12345678 ], [ "setDataInputMax", -12345678 ], [ "setDataMin", 1 ], [ "setDataMax", 20 ], [ "setDataAvg", 0 ], [ "setDataReceivedNumber", 0 ], [ "currentDataFuzzification", 19 ], [ "updatesBoundariesInfo" ], [ "outFormat", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ], [ "dataName", "beat" ], [ "partitioningComputing" ] ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-87",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 137.219025, 1027.991699, 143.0, 27.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fuzzy.lv1.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fuzzy.lv1.js triangularPercent classicalPartitioning"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 893.760315, 551.991699, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-5",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 615.739685, 696.0, 50.0, 18.0 ],
					"text" : "1 40"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-6",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 615.739685, 676.0, 36.0, 20.0 ],
					"text" : "pack"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-7",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 642.47937, 640.0, 32.5, 18.0 ],
					"text" : "40"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-8",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 582.47937, 640.0, 32.5, 18.0 ],
					"text" : "1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-23",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 923.760315, 867.491699, 66.0, 18.0 ],
					"text" : "20.5"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-27",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 923.760315, 817.991699, 75.0, 20.0 ],
					"text" : "route output"
				}

			}
, 			{
				"box" : 				{
					"border" : 0,
					"filename" : "fuzzy.FSSdrawing.js",
					"id" : "obj-41",
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 441.0, 741.0, 261.52066, 125.983459 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-46",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 838.760315, 817.991699, 75.0, 20.0 ],
					"text" : "route output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-47",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 836.760315, 751.991699, 103.0, 20.0 ],
					"text" : "prepend addRule"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-48",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 403.280945, 597.508301, 195.0, 18.0 ],
					"text" : "outFormat vlow low mid high vhigh"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-49",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 389.260315, 566.508301, 103.0, 18.0 ],
					"text" : "dataName output"
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "fuzzificationMethod", "triangularPercent" ], [ "partitioningMethod", "classicalPartitioning" ], [ "trainingMode", "trainingOff" ], [ "leftBoundary", 0.25 ], [ "rightBoundary", 0.25 ], [ "halfKernelLength", 0 ], [ "overflowMode", 0 ], [ "measureMode", 0 ], [ "setDataMinAlert", 0 ], [ "setDataMaxAlert", 127 ], [ "setDataInputMin", 12345678 ], [ "setDataInputMax", -12345678 ], [ "setDataMin", 1 ], [ "setDataMax", 40 ], [ "setDataAvg", 0 ], [ "setDataReceivedNumber", 0 ], [ "currentDataFuzzification", 20.5 ], [ "updatesBoundariesInfo" ], [ "outFormat", "vlow", "low", "mid", "high", "vhigh" ], [ "dataName", "output" ], [ "partitioningComputing" ] ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-50",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 446.739685, 687.991699, 143.0, 27.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fuzzy.lv1.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fuzzy.lv1.js triangularPercent classicalPartitioning"
				}

			}
, 			{
				"box" : 				{
					"border" : 0,
					"filename" : "fuzzy.FSSdrawing.js",
					"id" : "obj-51",
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 138.260315, 733.0, 261.52066, 125.983459 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-52",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 270.260315, 651.991699, 34.0, 18.0 ],
					"text" : "1 12"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-53",
					"linecount" : 3,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 166.760315, 614.991699, 87.0, 46.0 ],
					"text" : "outFormat 1 2 3 4 5 6 7 8 9 10 11 12"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-54",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 146.260315, 583.991699, 93.0, 18.0 ],
					"text" : "dataName beat"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-55",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 858.760315, 603.0, 43.0, 20.0 ],
					"text" : "pipe 1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-56",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1017.260315, 748.991699, 87.0, 18.0 ],
					"text" : "deleteAllRules"
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "setLanguage", 2 ], [ "setDualTNormAndCoNorm", 1 ], [ "setFuzzyImplication", 8 ] ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-58",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 5,
					"outlettype" : [ "", "", "", "", "" ],
					"patching_rect" : [ 838.760315, 777.991699, 155.0, 17.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fuzzy.gmpa1.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fuzzy.gmpa1.js c Larsen MinMax1"
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "fuzzificationMethod", "triangularPercent" ], [ "partitioningMethod", "classicalPartitioning" ], [ "trainingMode", "trainingOff" ], [ "leftBoundary", 0.090909 ], [ "rightBoundary", 0.090909 ], [ "halfKernelLength", 0 ], [ "overflowMode", 0 ], [ "measureMode", 0 ], [ "setDataMinAlert", 0 ], [ "setDataMaxAlert", 12 ], [ "setDataInputMin", 12345678 ], [ "setDataInputMax", -12345678 ], [ "setDataMin", 1 ], [ "setDataMax", 12 ], [ "setDataAvg", 0 ], [ "setDataReceivedNumber", 0 ], [ "currentDataFuzzification", 12 ], [ "updatesBoundariesInfo" ], [ "outFormat", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], [ "dataName", "beat" ], [ "partitioningComputing" ] ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-59",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 146.260315, 687.991699, 143.0, 27.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fuzzy.lv1.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fuzzy.lv1.js triangularPercent classicalPartitioning"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 893.760315, 193.99173, 20.0, 20.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-13",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 615.739685, 338.0, 47.0, 18.0 ],
					"text" : "1 40"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-14",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 615.739685, 309.200012, 36.0, 20.0 ],
					"text" : "pack"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-16",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 642.47937, 282.0, 32.5, 18.0 ],
					"text" : "40"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-17",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 582.47937, 282.0, 50.0, 18.0 ],
					"text" : "1"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-21",
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 1022.0, 25.056198, 25.0, 25.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-22",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 920.770325, 495.0, 72.0, 18.0 ],
					"text" : "20.5"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-24",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 923.760315, 459.991699, 75.0, 20.0 ],
					"text" : "route output"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-25",
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 1247.98999, 19.964468, 25.0, 25.0 ]
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-26",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 858.760315, 350.0, 360.0, 18.0 ],
					"text" : "if (beat != 1) && (beat != 16) && (beat != 15) then (output == vlow)"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-29",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 838.760315, 459.991699, 75.0, 20.0 ],
					"text" : "route output"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-30",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 836.760315, 393.991699, 103.0, 20.0 ],
					"text" : "prepend addRule"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-31",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 403.280945, 256.99173, 195.0, 18.0 ],
					"text" : "outFormat vlow low mid high vhigh"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-32",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 389.260315, 225.99173, 103.0, 18.0 ],
					"text" : "dataName output"
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "fuzzificationMethod", "triangularPercent" ], [ "partitioningMethod", "classicalPartitioning" ], [ "trainingMode", "trainingOff" ], [ "leftBoundary", 0.25 ], [ "rightBoundary", 0.25 ], [ "halfKernelLength", 0 ], [ "overflowMode", 0 ], [ "measureMode", 0 ], [ "setDataMinAlert", -8 ], [ "setDataMaxAlert", 127 ], [ "setDataInputMin", 12345678 ], [ "setDataInputMax", -12345678 ], [ "setDataMin", 1 ], [ "setDataMax", 40 ], [ "setDataAvg", 0 ], [ "setDataReceivedNumber", 0 ], [ "currentDataFuzzification", 20.5 ], [ "updatesBoundariesInfo" ], [ "outFormat", "vlow", "low", "mid", "high", "vhigh" ], [ "dataName", "output" ], [ "partitioningComputing" ] ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-33",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 446.739685, 350.0, 143.0, 27.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fuzzy.lv1.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fuzzy.lv1.js triangularPercent classicalPartitioning"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-35",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 270.260315, 293.991699, 34.0, 18.0 ],
					"text" : "1 16"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-36",
					"linecount" : 3,
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 166.760315, 256.99173, 102.0, 46.0 ],
					"text" : "outFormat 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-37",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 146.260315, 225.99173, 93.0, 18.0 ],
					"text" : "dataName beat"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-38",
					"maxclass" : "newobj",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 858.760315, 236.99173, 43.0, 20.0 ],
					"text" : "pipe 1"
				}

			}
, 			{
				"box" : 				{
					"fontname" : "Arial",
					"fontsize" : 12.0,
					"id" : "obj-39",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 985.0, 393.991699, 87.0, 18.0 ],
					"text" : "deleteAllRules"
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "setLanguage", 2 ], [ "setDualTNormAndCoNorm", 1 ], [ "setFuzzyImplication", 8 ] ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-43",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 5,
					"outlettype" : [ "", "", "", "", "" ],
					"patching_rect" : [ 838.760315, 419.991699, 155.0, 17.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fuzzy.gmpa1.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fuzzy.gmpa1.js c Larsen MinMax1"
				}

			}
, 			{
				"box" : 				{
					"embedstate" : [ [ "fuzzificationMethod", "triangularPercent" ], [ "partitioningMethod", "classicalPartitioning" ], [ "trainingMode", "trainingOff" ], [ "leftBoundary", 0.066667 ], [ "rightBoundary", 0.066667 ], [ "halfKernelLength", 0 ], [ "overflowMode", 0 ], [ "measureMode", 0 ], [ "setDataMinAlert", 0 ], [ "setDataMaxAlert", 40 ], [ "setDataInputMin", 12345678 ], [ "setDataInputMax", -12345678 ], [ "setDataMin", 1 ], [ "setDataMax", 16 ], [ "setDataAvg", 0 ], [ "setDataReceivedNumber", 0 ], [ "currentDataFuzzification", 16 ], [ "updatesBoundariesInfo" ], [ "outFormat", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ], [ "dataName", "beat" ], [ "partitioningComputing" ] ],
					"fontname" : "Arial",
					"fontsize" : 9.0,
					"id" : "obj-44",
					"linecount" : 2,
					"maxclass" : "newobj",
					"numinlets" : 3,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "" ],
					"patching_rect" : [ 146.260315, 329.991699, 143.0, 27.0 ],
					"saved_object_attributes" : 					{
						"filename" : "fuzzy.lv1.js",
						"parameter_enable" : 0
					}
,
					"text" : "js fuzzy.lv1.js triangularPercent classicalPartitioning"
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-45",
					"maxclass" : "outlet",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 1154.474365, 1613.885742, 25.0, 25.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-2",
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 46.0, 563.0, 25.0, 25.0 ]
				}

			}
, 			{
				"box" : 				{
					"comment" : "",
					"id" : "obj-1",
					"maxclass" : "inlet",
					"numinlets" : 0,
					"numoutlets" : 1,
					"outlettype" : [ "int" ],
					"patching_rect" : [ 32.0, 154.0, 25.0, 25.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-44", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 41.5, 198.0, 33.0, 198.0, 33.0, 315.0, 217.760315, 315.0 ],
					"source" : [ "obj-1", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-38", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 903.260315, 213.0, 868.260315, 213.0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 903.260315, 213.0, 843.0, 213.0, 843.0, 378.0, 994.5, 378.0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 957.260254, 1599.0, 1163.974365, 1599.0 ],
					"source" : [ "obj-101", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 957.260254, 1524.0, 711.0, 1524.0, 711.0, 1566.0, 426.0, 1566.0, 426.0, 1425.0, 448.97937, 1425.0 ],
					"source" : [ "obj-102", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-101", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 872.260254, 1524.0, 1004.260254, 1524.0 ],
					"source" : [ "obj-105", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-101", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 872.260254, 1524.0, 957.260254, 1524.0 ],
					"source" : [ "obj-105", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-109", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 872.260254, 1509.0, 840.0, 1509.0, 840.0, 1395.0, 585.0, 1395.0, 585.0, 1389.0, 501.739685, 1389.0 ],
					"source" : [ "obj-105", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-117", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 870.260254, 1443.0, 872.260254, 1443.0 ],
					"source" : [ "obj-106", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-109", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 403.739655, 1332.0, 439.739685, 1332.0 ],
					"source" : [ "obj-107", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-109", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 422.760315, 1272.0, 591.0, 1272.0, 591.0, 1314.0, 439.739685, 1314.0 ],
					"source" : [ "obj-108", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-117", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 439.739685, 1419.0, 846.0, 1419.0, 846.0, 1443.0, 872.260254, 1443.0 ],
					"source" : [ "obj-109", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-12", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 501.739685, 1419.0, 450.0, 1419.0, 450.0, 1425.0, 448.97937, 1425.0 ],
					"source" : [ "obj-109", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-118", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 303.760315, 1341.0, 303.760315, 1341.0 ],
					"source" : [ "obj-111", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-118", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 179.760315, 1347.0, 179.760315, 1347.0 ],
					"source" : [ "obj-112", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-118", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 179.760315, 1272.0, 156.0, 1272.0, 156.0, 1353.0, 179.760315, 1353.0 ],
					"source" : [ "obj-113", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-107", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 764.909058, 1251.0, 528.0, 1251.0, 528.0, 1239.0, 403.739655, 1239.0 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-108", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 764.909058, 1251.0, 528.0, 1251.0, 528.0, 1239.0, 422.760315, 1239.0 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-111", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 764.909058, 1251.0, 528.0, 1251.0, 528.0, 1233.0, 300.0, 1233.0, 300.0, 1317.0, 303.760315, 1317.0 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-112", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 764.909058, 1251.0, 528.0, 1251.0, 528.0, 1233.0, 156.0, 1233.0, 156.0, 1281.0, 179.760315, 1281.0 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-113", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 764.909058, 1251.0, 528.0, 1251.0, 528.0, 1233.0, 179.760315, 1233.0 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-72", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 764.909058, 1284.0, 881.218994, 1284.0 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-73", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 764.909058, 1305.0, 886.218994, 1305.0 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-79", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 764.909058, 1332.0, 886.218994, 1332.0 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-85", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 764.909058, 1362.0, 881.218994, 1362.0 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-96", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 764.909058, 1296.0, 675.97937, 1296.0 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-97", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 764.909058, 1296.0, 615.97937, 1296.0 ],
					"source" : [ "obj-114", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-117", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1050.760376, 1437.0, 963.0, 1437.0, 963.0, 1443.0, 872.260254, 1443.0 ],
					"source" : [ "obj-115", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-102", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 906.260254, 1485.0, 957.260254, 1485.0 ],
					"source" : [ "obj-117", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-105", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 872.260254, 1467.0, 872.260254, 1467.0 ],
					"source" : [ "obj-117", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-117", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 179.760315, 1395.0, 417.0, 1395.0, 417.0, 1377.0, 585.0, 1377.0, 585.0, 1413.0, 846.0, 1413.0, 846.0, 1443.0, 872.260254, 1443.0 ],
					"source" : [ "obj-118", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-18", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 241.760315, 1416.0, 146.719025, 1416.0 ],
					"source" : [ "obj-118", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1056.260254, 189.0, 903.260315, 189.0 ],
					"source" : [ "obj-120", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1056.260254, 177.0, 822.0, 177.0, 822.0, 537.0, 903.260315, 537.0 ],
					"source" : [ "obj-120", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-61", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1056.260254, 177.0, 821.748718, 177.0 ],
					"source" : [ "obj-120", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-92", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1056.260254, 177.0, 822.0, 177.0, 822.0, 888.0, 843.0, 888.0, 843.0, 1077.0, 810.0, 1077.0, 810.0, 1185.0, 795.5, 1185.0 ],
					"source" : [ "obj-120", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-33", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 625.239685, 357.0, 600.0, 357.0, 600.0, 345.0, 580.239685, 345.0 ],
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 625.239685, 330.0, 653.239685, 330.0 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-13", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 625.239685, 330.0, 625.239685, 330.0 ],
					"source" : [ "obj-14", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 651.97937, 300.0, 645.0, 300.0, 645.0, 306.0, 642.239685, 306.0 ],
					"source" : [ "obj-16", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-14", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 591.97937, 306.0, 625.239685, 306.0 ],
					"source" : [ "obj-17", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-30", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 873.260315, 342.0, 843.0, 342.0, 843.0, 390.0, 846.260315, 390.0 ],
					"source" : [ "obj-19", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-59", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 55.5, 609.0, 141.0, 609.0, 141.0, 672.0, 217.760315, 672.0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-30", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 873.260315, 312.0, 843.0, 312.0, 843.0, 390.0, 846.260315, 390.0 ],
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-10", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1031.5, 180.0, 903.260315, 180.0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-16", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1031.5, 180.0, 651.97937, 180.0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1031.5, 180.0, 609.0, 180.0, 609.0, 276.0, 591.97937, 276.0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1031.5, 180.0, 822.0, 180.0, 822.0, 537.0, 903.260315, 537.0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-61", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1031.5, 180.0, 821.748718, 180.0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-65", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1031.5, 180.0, 714.0, 180.0, 714.0, 966.0, 642.93811, 966.0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-66", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1031.5, 180.0, 714.0, 180.0, 714.0, 966.0, 591.0, 966.0, 591.0, 975.0, 582.93811, 975.0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1031.5, 180.0, 690.0, 180.0, 690.0, 627.0, 651.97937, 627.0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1031.5, 180.0, 690.0, 180.0, 690.0, 627.0, 591.97937, 627.0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-92", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1031.5, 180.0, 822.0, 180.0, 822.0, 888.0, 843.0, 888.0, 843.0, 1077.0, 810.0, 1077.0, 810.0, 1185.0, 795.5, 1185.0 ],
					"source" : [ "obj-21", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 930.270325, 735.0, 1275.0, 735.0, 1275.0, 1599.0, 1163.974365, 1599.0 ],
					"source" : [ "obj-22", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 933.260315, 885.0, 888.0, 885.0, 888.0, 1080.0, 993.0, 1080.0, 993.0, 1116.0, 1044.0, 1116.0, 1044.0, 1272.0, 1242.0, 1272.0, 1242.0, 1599.0, 1163.974365, 1599.0 ],
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 933.260315, 480.0, 690.0, 480.0, 690.0, 378.0, 427.760315, 378.0 ],
					"source" : [ "obj-24", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-120", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1257.48999, 57.0, 1032.0, 57.0, 1032.0, 153.0, 1056.260254, 153.0 ],
					"source" : [ "obj-25", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-60", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1257.48999, 141.0, 1194.0, 141.0, 1194.0, 153.0, 1191.860352, 153.0 ],
					"source" : [ "obj-25", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-30", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 378.0, 846.260315, 378.0 ],
					"source" : [ "obj-26", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-41", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 933.260315, 849.0, 714.0, 849.0, 714.0, 726.0, 450.5, 726.0 ],
					"source" : [ "obj-27", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 958.260315, 642.0, 846.260315, 642.0 ],
					"source" : [ "obj-28", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 848.260315, 492.0, 983.270325, 492.0 ],
					"source" : [ "obj-29", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 848.260315, 492.0, 930.270325, 492.0 ],
					"source" : [ "obj-29", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-33", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 848.260315, 480.0, 690.0, 480.0, 690.0, 366.0, 600.0, 366.0, 600.0, 345.0, 518.239685, 345.0 ],
					"source" : [ "obj-29", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-55", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 903.260315, 588.0, 868.260315, 588.0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-56", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 903.260315, 588.0, 921.0, 588.0, 921.0, 735.0, 1026.760254, 735.0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-43", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 846.260315, 414.0, 848.260315, 414.0 ],
					"source" : [ "obj-30", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-33", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 412.780945, 294.0, 450.0, 294.0, 450.0, 342.0, 456.239685, 342.0 ],
					"source" : [ "obj-31", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-33", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 398.760315, 294.0, 450.0, 294.0, 450.0, 342.0, 456.239685, 342.0 ],
					"source" : [ "obj-32", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 518.239685, 378.0, 427.760315, 378.0 ],
					"source" : [ "obj-33", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-43", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 456.239685, 378.0, 717.0, 378.0, 717.0, 372.0, 822.0, 372.0, 822.0, 414.0, 848.260315, 414.0 ],
					"source" : [ "obj-33", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 963.260315, 663.0, 846.260315, 663.0 ],
					"source" : [ "obj-34", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-44", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 279.760315, 312.0, 279.760315, 312.0 ],
					"source" : [ "obj-35", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-44", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 176.260315, 315.0, 155.760315, 315.0 ],
					"source" : [ "obj-36", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-44", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 155.760315, 243.0, 155.760315, 243.0 ],
					"source" : [ "obj-37", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-16", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 258.0, 651.97937, 258.0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-17", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 258.0, 609.0, 258.0, 609.0, 276.0, 591.97937, 276.0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-19", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 258.0, 843.0, 258.0, 843.0, 318.0, 873.260315, 318.0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 267.0, 855.0, 267.0, 855.0, 288.0, 873.260315, 288.0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-26", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 258.0, 843.0, 258.0, 843.0, 345.0, 868.260315, 345.0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-31", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 258.0, 609.0, 258.0, 609.0, 243.0, 412.780945, 243.0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-32", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 258.0, 609.0, 258.0, 609.0, 210.0, 398.760315, 210.0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-35", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 258.0, 609.0, 258.0, 609.0, 210.0, 279.760315, 210.0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-36", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 258.0, 609.0, 258.0, 609.0, 210.0, 249.0, 210.0, 249.0, 252.0, 176.260315, 252.0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-37", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 258.0, 609.0, 258.0, 609.0, 210.0, 155.760315, 210.0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-62", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 258.0, 868.260315, 258.0 ],
					"source" : [ "obj-38", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-43", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 994.5, 411.0, 939.0, 411.0, 939.0, 414.0, 848.260315, 414.0 ],
					"source" : [ "obj-39", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 963.260315, 693.0, 846.260315, 693.0 ],
					"source" : [ "obj-40", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-47", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 958.260315, 738.0, 846.260315, 738.0 ],
					"source" : [ "obj-42", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-24", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 882.260315, 456.0, 933.260315, 456.0 ],
					"source" : [ "obj-43", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-29", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 848.260315, 438.0, 848.260315, 438.0 ],
					"source" : [ "obj-43", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-147", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 217.760315, 378.0, 149.5, 378.0 ],
					"source" : [ "obj-44", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-43", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 155.760315, 378.0, 717.0, 378.0, 717.0, 372.0, 822.0, 372.0, 822.0, 414.0, 848.260315, 414.0 ],
					"source" : [ "obj-44", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 848.260315, 852.0, 980.260315, 852.0 ],
					"source" : [ "obj-46", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-23", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 848.260315, 852.0, 933.260315, 852.0 ],
					"source" : [ "obj-46", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-50", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 848.260315, 837.0, 819.0, 837.0, 819.0, 726.0, 600.0, 726.0, 600.0, 684.0, 518.239685, 684.0 ],
					"source" : [ "obj-46", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 846.260315, 771.0, 848.260315, 771.0 ],
					"source" : [ "obj-47", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-50", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 412.780945, 663.0, 441.0, 663.0, 441.0, 684.0, 456.239685, 684.0 ],
					"source" : [ "obj-48", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-50", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 398.760315, 663.0, 441.0, 663.0, 441.0, 684.0, 456.239685, 684.0 ],
					"source" : [ "obj-49", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-50", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 625.239685, 714.0, 600.0, 714.0, 600.0, 684.0, 580.239685, 684.0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-41", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 518.239685, 726.0, 450.5, 726.0 ],
					"source" : [ "obj-50", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 456.239685, 726.0, 822.0, 726.0, 822.0, 774.0, 848.260315, 774.0 ],
					"source" : [ "obj-50", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-59", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 279.760315, 669.0, 279.760315, 669.0 ],
					"source" : [ "obj-52", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-59", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 176.260315, 672.0, 155.760315, 672.0 ],
					"source" : [ "obj-53", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-59", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 155.760315, 603.0, 155.760315, 603.0 ],
					"source" : [ "obj-54", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-28", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 633.0, 933.0, 633.0, 933.0, 618.0, 958.260315, 618.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-34", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 642.0, 963.260315, 642.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-40", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 669.0, 963.260315, 669.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-42", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 699.0, 958.260315, 699.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-48", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 624.0, 609.0, 624.0, 609.0, 582.0, 492.0, 582.0, 492.0, 594.0, 412.780945, 594.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-49", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 632.0, 633.510315, 632.0, 633.510315, 556.508301, 398.760315, 556.508301 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-52", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 726.0, 423.0, 726.0, 423.0, 648.0, 279.760315, 648.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-53", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 624.0, 609.0, 624.0, 609.0, 582.0, 492.0, 582.0, 492.0, 594.0, 249.0, 594.0, 249.0, 609.0, 176.260315, 609.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-54", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 624.0, 609.0, 624.0, 609.0, 582.0, 492.0, 582.0, 492.0, 585.0, 249.0, 585.0, 249.0, 570.0, 155.760315, 570.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 624.0, 651.97937, 624.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-8", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 624.0, 594.0, 624.0, 594.0, 636.0, 591.97937, 636.0 ],
					"source" : [ "obj-55", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1026.760254, 804.0, 834.0, 804.0, 834.0, 774.0, 848.260315, 774.0 ],
					"source" : [ "obj-56", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-75", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 913.260315, 990.0, 837.218994, 990.0 ],
					"source" : [ "obj-57", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-27", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 882.260315, 804.0, 933.260315, 804.0 ],
					"source" : [ "obj-58", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-46", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 848.260315, 795.0, 848.260315, 795.0 ],
					"source" : [ "obj-58", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-51", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 217.760315, 714.0, 147.760315, 714.0 ],
					"source" : [ "obj-59", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-58", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 155.760315, 714.0, 300.0, 714.0, 300.0, 720.0, 432.0, 720.0, 432.0, 726.0, 822.0, 726.0, 822.0, 774.0, 848.260315, 774.0 ],
					"source" : [ "obj-59", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 625.239685, 696.0, 612.0, 696.0, 612.0, 672.0, 656.239685, 672.0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 625.239685, 696.0, 625.239685, 696.0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-115", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1191.860352, 222.0, 1206.0, 222.0, 1206.0, 336.0, 1317.0, 336.0, 1317.0, 1404.0, 1050.760376, 1404.0 ],
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-39", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1191.860352, 222.0, 1206.0, 222.0, 1206.0, 336.0, 1230.0, 336.0, 1230.0, 378.0, 994.5, 378.0 ],
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-56", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1191.860352, 222.0, 1206.0, 222.0, 1206.0, 336.0, 1317.0, 336.0, 1317.0, 735.0, 1026.760254, 735.0 ],
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-84", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1191.860352, 222.0, 1206.0, 222.0, 1206.0, 336.0, 1317.0, 336.0, 1317.0, 1083.0, 1017.718994, 1083.0 ],
					"source" : [ "obj-60", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-83", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 821.748718, 933.0, 795.5, 933.0 ],
					"source" : [ "obj-61", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-84", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 821.748718, 933.0, 888.0, 933.0, 888.0, 1080.0, 1017.718994, 1080.0 ],
					"source" : [ "obj-61", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-30", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 868.260315, 288.0, 843.0, 288.0, 843.0, 390.0, 846.260315, 390.0 ],
					"source" : [ "obj-62", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-78", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 616.198364, 1056.0, 582.0, 1056.0, 582.0, 1041.0, 557.760315, 1041.0 ],
					"source" : [ "obj-63", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-63", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 616.198364, 1038.0, 603.0, 1038.0, 603.0, 1011.0, 647.198364, 1011.0 ],
					"source" : [ "obj-64", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-63", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 616.198364, 1038.0, 616.198364, 1038.0 ],
					"source" : [ "obj-64", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-64", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 642.93811, 999.0, 636.0, 999.0, 636.0, 1011.0, 633.198364, 1011.0 ],
					"source" : [ "obj-65", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-64", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 582.93811, 1011.0, 616.198364, 1011.0 ],
					"source" : [ "obj-66", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-75", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 918.260315, 1014.0, 837.218994, 1014.0 ],
					"source" : [ "obj-67", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-75", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 918.260315, 1041.0, 837.218994, 1041.0 ],
					"source" : [ "obj-68", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-75", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 913.260315, 1071.0, 837.218994, 1071.0 ],
					"source" : [ "obj-69", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 651.97937, 660.0, 645.0, 660.0, 645.0, 672.0, 642.239685, 672.0 ],
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-45", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 924.218994, 1227.0, 939.0, 1227.0, 939.0, 1272.0, 1242.0, 1272.0, 1242.0, 1599.0, 1163.974365, 1599.0 ],
					"source" : [ "obj-70", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 924.218994, 1188.0, 816.0, 1188.0, 816.0, 1182.0, 696.0, 1182.0, 696.0, 1227.0, 411.0, 1227.0, 411.0, 1086.0, 433.760315, 1086.0 ],
					"source" : [ "obj-71", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-106", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 881.218994, 1305.0, 858.0, 1305.0, 858.0, 1407.0, 870.260254, 1407.0 ],
					"source" : [ "obj-72", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-106", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 886.218994, 1329.0, 858.0, 1329.0, 858.0, 1407.0, 870.260254, 1407.0 ],
					"source" : [ "obj-73", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-70", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 839.218994, 1194.0, 971.218994, 1194.0 ],
					"source" : [ "obj-74", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-70", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 839.218994, 1194.0, 924.218994, 1194.0 ],
					"source" : [ "obj-74", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-78", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 839.218994, 1179.0, 696.0, 1179.0, 696.0, 1065.0, 582.0, 1065.0, 582.0, 1041.0, 495.760315, 1041.0 ],
					"source" : [ "obj-74", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-86", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 837.218994, 1113.0, 839.218994, 1113.0 ],
					"source" : [ "obj-75", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-78", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 403.739655, 1032.0, 433.760315, 1032.0 ],
					"source" : [ "obj-76", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-78", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 389.719025, 1002.0, 433.760315, 1002.0 ],
					"source" : [ "obj-77", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-86", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 433.760315, 1074.0, 711.0, 1074.0, 711.0, 1056.0, 813.0, 1056.0, 813.0, 1113.0, 839.218994, 1113.0 ],
					"source" : [ "obj-78", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-9", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 495.760315, 1074.0, 435.0, 1074.0, 435.0, 1086.0, 433.760315, 1086.0 ],
					"source" : [ "obj-78", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-106", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 886.218994, 1356.0, 858.0, 1356.0, 858.0, 1407.0, 870.260254, 1407.0 ],
					"source" : [ "obj-79", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 591.97937, 672.0, 625.239685, 672.0 ],
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-87", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 270.719025, 1011.0, 270.719025, 1011.0 ],
					"source" : [ "obj-80", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-87", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 176.260315, 1014.0, 146.719025, 1014.0 ],
					"source" : [ "obj-81", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-87", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 146.719025, 942.0, 146.719025, 942.0 ],
					"source" : [ "obj-82", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-57", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 795.5, 978.0, 888.0, 978.0, 888.0, 966.0, 913.260315, 966.0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-67", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 795.5, 990.0, 918.260315, 990.0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-68", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 795.5, 1020.0, 918.260315, 1020.0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-69", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 795.5, 1047.0, 913.260315, 1047.0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-76", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 795.5, 969.0, 675.0, 969.0, 675.0, 939.0, 483.0, 939.0, 483.0, 951.0, 403.739655, 951.0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-77", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 795.5, 969.0, 675.0, 969.0, 675.0, 909.0, 389.719025, 909.0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-80", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 795.5, 969.0, 600.0, 969.0, 600.0, 909.0, 366.0, 909.0, 366.0, 978.0, 276.0, 978.0, 276.0, 987.0, 270.719025, 987.0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-81", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 795.5, 969.0, 675.0, 969.0, 675.0, 909.0, 366.0, 909.0, 366.0, 939.0, 231.0, 939.0, 231.0, 951.0, 176.260315, 951.0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-82", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 795.5, 969.0, 675.0, 969.0, 675.0, 909.0, 366.0, 909.0, 366.0, 915.0, 240.0, 915.0, 240.0, 909.0, 146.719025, 909.0 ],
					"source" : [ "obj-83", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-86", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 1017.718994, 1116.0, 984.0, 1116.0, 984.0, 1113.0, 839.218994, 1113.0 ],
					"source" : [ "obj-84", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-106", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 881.218994, 1407.0, 870.260254, 1407.0 ],
					"source" : [ "obj-85", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-71", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 873.218994, 1152.0, 924.218994, 1152.0 ],
					"source" : [ "obj-86", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-74", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 839.218994, 1134.0, 839.218994, 1134.0 ],
					"source" : [ "obj-86", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-11", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 208.719025, 1077.0, 131.5, 1077.0 ],
					"source" : [ "obj-87", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-86", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 146.719025, 1074.0, 711.0, 1074.0, 711.0, 1056.0, 813.0, 1056.0, 813.0, 1113.0, 839.218994, 1113.0 ],
					"source" : [ "obj-87", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-87", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 68.5, 957.0, 153.0, 957.0, 153.0, 1020.0, 208.719025, 1020.0 ],
					"source" : [ "obj-88", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-118", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 101.54129, 1287.0, 156.0, 1287.0, 156.0, 1353.0, 241.760315, 1353.0 ],
					"source" : [ "obj-91", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-114", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 795.5, 1221.0, 764.909058, 1221.0 ],
					"source" : [ "obj-92", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-115", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 795.5, 1221.0, 801.0, 1221.0, 801.0, 1404.0, 1050.760376, 1404.0 ],
					"source" : [ "obj-92", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-109", 2 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 649.239624, 1386.0, 563.739685, 1386.0 ],
					"source" : [ "obj-94", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-94", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 649.239624, 1368.0, 636.0, 1368.0, 636.0, 1341.0, 680.239624, 1341.0 ],
					"source" : [ "obj-95", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-94", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 649.239624, 1368.0, 649.239624, 1368.0 ],
					"source" : [ "obj-95", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-95", 1 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 675.97937, 1329.0, 669.0, 1329.0, 669.0, 1341.0, 666.239624, 1341.0 ],
					"source" : [ "obj-96", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-95", 0 ],
					"disabled" : 0,
					"hidden" : 0,
					"midpoints" : [ 615.97937, 1341.0, 649.239624, 1341.0 ],
					"source" : [ "obj-97", 0 ]
				}

			}
 ]
	}

}

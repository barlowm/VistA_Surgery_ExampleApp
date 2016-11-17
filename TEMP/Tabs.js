	
	items: [
		{
			title: "Surgery Monitoring",
			xtype: "tabpanel",
			frame: true,
			items: [
				{ title: "Waiting List"},
				{ title: "Operation Requests"},
				{ title: "Scheduled Operations"}
			]
		},
		{
			title   : "Operation Requests",
			xtype: "tabpanel",
			items: [
				{ title: "Display Availability"},
				{ title: "Make Operation Requests"},
				{ title: "Delete or Update Operation Requests"},
				{ title: "Make a Request from the Waiting List"},
				{ title: "Make a Request for Concurrent Cases"},
				{ title: "Review Request Information"},
				{ title: "Operation Requests for a Day"},
				{ title: "Requests by Ward"}
			]
		},
		{
			title   : "Schedule Operations",
			xtype: "tabpanel",
			items: [
				{ title: "Display Availability"},
				{
					title: "Schedule Actions",
					xtype: "panel",
					items: [
					{
						xtype: "form",
						border: false,
						items: [
							{
								xtype: "combo",
								margin: 15,
								width: "30em",
								fieldLabel: "Select Operation",
								name: "Operation",
								valueField: "operation",
								displayField: "type",
								queryMode: "local",
								autoSelect:true,
								forceSelection:true,
						store: [
							"Schedule Requested Operations", 
							"Schedule Unrequested Operations", 
							"Schedule Unrequested Concurrent Cases", 
							"Reschedule or Update a Scheduled Operation",
							"Cancel Scheduled Operation",
							"Update Cancellation Reason",
							"Schedule Anesthesia Personnel"
						],
						listeners:{
							"select": function(combo, record, eOpts) {
								var answer = record.data.field1;
								var theGrid = Ext.ComponentQuery.query("#ScheduleActionOperations");
								theGrid[0].setTitle(answer);
								theGrid[0].getStore().load();
								theGrid[0].show();
								// debugger;
							}
						}
							}
						]
					},
					{
						xtype : "grid",
						id: "ScheduleActionOperations",
						title : "Set By Program",
						hidden: true,
						margin: 15,
						height : 200,
						columns : [{
							text : "Name",
							dataIndex : "name",
							flex : 1
						}, {
							text : "EMail",
							dataIndex : "email",
							flex : 3
						}, {
							text : "Phone",
							dataIndex : "phone",
							flex : 3
						}]
						// ,
						// store: {
						// 	type: "operations"
						// }
					}
					]		// END Schedule Actions Tab
				},

				{ title: "Schedule Unrequested Operations"},
				{ title: "Schedule Unrequested Concurrent Cases"},
				{ title: "Reschedule or Update a Scheduled Operation"},
				{ title: "Cancel Scheduled Operation"},
				{ title: "Update Cancellation Reason"},
				{ title: "Schedule Anesthesia Personnel"},
				{ title: "Create Service Blockout"},
				{ title: "Delete Service Blockout"},
				{ title: "Schedule of Operations (Prints Schedule)"}
			]
		},		// END Schedule Operations Tab



		{   title   : "Operations" },
		{   title   : "Anesthesia",
			xtype: "tabpanel",
			items: [
				{ title: "Anesthesia Data Entry Menu"},
				{ title: "Anesthesia Report"},
				{ title: "Schedule Anesthesia Personnel"}
			]
		},
		{   title   : "Perioperative Occurrences",
			xtype: "tabpanel",
			items: [
				{ title: "Intraoperative Occurrences"},
				{ title: "Postoperative Occurrences"},
				{ title: "Update Status of Returns Within 30 Days"},
				{ title: "Morbidity & Mortality Reports"}
			]
		},
		{   title   : "Non-O.R. Procedures",
			xtype: "tabpanel",
			items: [
				{ title: "Non-O.R. Procedures (Enter/Edit)"},
				{ title: "Annual Report of Non-O.R. Procedures"},
				{ title: "Report of Non-O.R. Procedures"}
			]
		},
		{   title   : "Patient Management",
			xtype: "tabpanel",
			items: [
				{ title: "Comments"},
				{ title: "Lookup Patient, Return Case, Enter Progress Note (TIU)"},
				{ title: "Laboratory Interim Report"},
				{ title: "Lookup Patient, Return Lab data"}
			]
		},
		{   title   : "Reports"},
		{   title   : "Surgery Risk Assessment Menu",
			xtype: "tabpanel",
			items: [
				{ title: "Non-Cardiac Assessment Information"},
				{ title: "Cardiac Risk Assessment Information"},
				{ title: "Print a Surgery Risk Assessment"},
				{ title: "Update Assessment Completed/Transmitted in Error"},
				{ title: "List of Surgery Risk Assessments"},
				{ title: "Print 30 Day Follow-up Letters"},
				{ title: "Exclusion Criteria"},
				{ title: "Monthly Surgical Case Workload Report"},
				{ title: "M&M Verification Report"},
				{ title: "Update 1-Liner Case"},
				{ title: "Queue Assessment Transmissions"},
				{ title: "Alert Coder Regarding Coding Issues"},
				{ title: "Risk Model Lab Test"}
			]
		},
		{   title   : "Chief of Surgery Menu",
			xtype: "tabpanel",
			items: [
				{ title: "View Patient Perioperative Occurrences"},
				{ title: "Management Reports"},
				{ title: "Unlock a Case for Editing"},
				{ title: "Update Status of Returns Within 30 Days"},
				{ title: "Update Cancelled Case"},
				{ title: "Update Operations as Unrelated/Related to Death"},
				{ title: "Update/Verify Procedure/Diagnosis Codes"}
			]
		},
		{   title   : "Surgery Package Management Menu",
			xtype: "tabpanel",
			items: [
				{ title: "Surgery Site Parameters"},
				{ title: "Operating Room Information"},
				{ title: "Surgery Utilization Menu"},
				{ title: "Person Field Restrictions Menu"},
				{ title: "Update O.R. Schedule Devices"},
				{ title: "Update Staff Surgeon Information"},
				{ title: "Flag Drugs for Use as Anesthesia Agents"},
				{ title: "Update Site Configurable Files"},
				{ title: "Backfill Order File With Surgical Cases"},
				{ title: "Surgery Interface Management Menu"},
				{ title: "Make Reports Viewable in CPRS"}
			]
		},
		{   title   : "CPT/ICD Coding Menu",
			xtype: "tabpanel",
			items: [
				{ title: "Edit Codes"}
			]
		}
	]
Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [ "firstName", "lastName", "officeLocation", "phoneNumber" ]
});

var userStore = Ext.create("Ext.data.Store", {
    model: "User",
    data: [
	    {
		    "firstName": "Jean",
		    "lastName": "Grey",
		    "officeLocation": "Lawrence, KS",
		    "phoneNumber": "(372) 792-6728"
		}, {
		    "firstName": "Phillip",
		    "lastName": "Fry",
		    "officeLocation": "Lawrence, KS",
		    "phoneNumber": "(318) 224-8644"
		}, {
		    "firstName": "Peter",
		    "lastName": "Quill",
		    "officeLocation": "Redwood City, CA",
		    "phoneNumber": "(718) 480-8560"
		}, {
		    "firstName": "Jessica",
		    "lastName": "Wright",
		    "officeLocation": "Frederick, MD",
		    "phoneNumber": "(812) 522-7104"
		}, {
		    "firstName": "Juan",
		    "lastName": "Stone",
		    "officeLocation": "Redwood City, CA",
		    "phoneNumber": "(837) 379-6432"
		}, {
		    "firstName": "Jessica",
		    "lastName": "Jones",
		    "officeLocation": "Redwood City, CA",
		    "phoneNumber": "(662) 494-7517"
		}, {
		    "firstName": "Rose",
		    "lastName": "Simpson",
		    "officeLocation": "Redwood City, CA",
		    "phoneNumber": "(857) 264-9899"
		}, {
		    "firstName": "Mildred",
		    "lastName": "Ruiz",
		    "officeLocation": "Redwood City, CA",
		    "phoneNumber": "(443) 323-9518"
		}, {
		    "firstName": "Ruth",
		    "lastName": "Murphy",
		    "officeLocation": "Lawrence, KS",
		    "phoneNumber": "(516) 884-5081"
		}, {
		    "firstName": "Alan",
		    "lastName": "Washington",
		    "officeLocation": "Frederick, MD",
		    "phoneNumber": "(725) 915-8297"
		}, {
		    "firstName": "Catherine",
		    "lastName": "Murphy",
		    "officeLocation": "Redwood City, CA",
		    "phoneNumber": "(227) 546-3855"
		}, {
		    "firstName": "Helen",
		    "lastName": "Owens",
		    "officeLocation": "Redwood City, CA",
		    "phoneNumber": "(483) 127-7184"
		}, {
		    "firstName": "Eric",
		    "lastName": "Lee",
		    "officeLocation": "Redwood City, CA",
		    "phoneNumber": "(788) 756-7666"
		}, {
		    "firstName": "Donald",
		    "lastName": "Dean",
		    "officeLocation": "Lawrence, KS",
		    "phoneNumber": "(846) 214-2178"
		}, {
		    "firstName": "Ronald",
		    "lastName": "Edwards",
		    "officeLocation": "Lawrence, KS",
		    "phoneNumber": "(342) 146-2793"
		}, {
		    "firstName": "Carlos",
		    "lastName": "Wright",
		    "officeLocation": "Redwood City, CA",
		    "phoneNumber": "(958) 869-8461"
		}, {
		    "firstName": "Rachel",
		    "lastName": "Kim",
		    "officeLocation": "Lawrence, KS",
		    "phoneNumber": "(921) 823-8187"
		}, {
		    "firstName": "Jennifer",
		    "lastName": "Day",
		    "officeLocation": "Frederick, MD",
		    "phoneNumber": "(566) 375-8600"
		}, {
		    "firstName": "Victor",
		    "lastName": "Reid",
		    "officeLocation": "Frederick, MD",
		    "phoneNumber": "(873) 846-5132"
		}, {
		    "firstName": "Charles",
		    "lastName": "Ramirez",
		    "officeLocation": "Lawrence, KS",
		    "phoneNumber": "(260) 431-1648"
		}, {
		    "firstName": "Mary",
		    "lastName": "Miller",
		    "officeLocation": "Lawrence, KS",
		    "phoneNumber": "(197) 844-8417"
		}, {
		    "firstName": "Lawrence",
		    "lastName": "Ramirez",
		    "officeLocation": "Redwood City, CA",
		    "phoneNumber": "(368) 884-2585"
		}, {
		    "firstName": "Roy",
		    "lastName": "Carroll",
		    "officeLocation": "Frederick, MD",
		    "phoneNumber": "(153) 192-7967"
		}, {
		    "firstName": "Christopher",
		    "lastName": "Rogers",
		    "officeLocation": "Lawrence, KS",
		    "phoneNumber": "(286) 360-1439"
		}, {
		    "firstName": "Phyllis",
		    "lastName": "Patterson",
		    "officeLocation": "Frederick, MD",
		    "phoneNumber": "(915) 877-4798"
		}]
});

Ext.define('VistA.Surgery.view.main.Center', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-center',

	header: false,
	id: "SurgeryCenterPanel",
	// collapsed: false,
	border: true,

	bodyPadding: 0,
	margin:0,

	layout: "fit",
	align: "stretch",

	defaults: {
		bodyPadding: 0,
		margin:0,
		frame: true
	},
	
	items: [
		{
			title: "Surgery Monitoring",
			xtype: "tabpanel",
			frame: true,
			items: [
				{ title: "Waiting List"},
				{ title: "Operation Requests"},
				{ 
					title: "Scheduled Operations"
					// ,
					// items: [
					// {
					// 	xtype: "calendar-panel"
					// }]
				}
			]
		},
		{
			title   : "Operation Requests",
			items: [
				{
					html: 
					"<div style=\"margin: 10px 0 1em 2em;\">" +
					"<a href=\"#\"> Make Operation Request</a>   "+
					"<a href=\"#\"> Delete/Update Operation Request</a>   "+
					"<a href=\"#\"> Make Request from Waiting List</a>    "+
					"<a href=\"#\"> Make Request for Current Cases</a><br>"+
					"</div>"

				},
				{
					xtype: "tabpanel",
					layout: "anchor",
					items: [
						{ title: "Waiting List",

							anchor: "100% 100%", height : 400,

							items: [
								{
									border: 0,
									html: 
					"<div style=\"margin: 10px 0 10px 10px;\">" +
					"<a href=\"#\" style=\"margin-left:2em;\"> Make Request from Waiting List</a>"+
					"</div>"								
								},
								{
									xtype : "grid",
									// id: "ScheduleActionOperations",
									title : "Availability",
									margin: 15,
									height : 600,
									columns : [{
										text : "First Name",
										dataIndex : "firstName",
										flex : 1
									}, {
										text : "Last Name",
										dataIndex : "lastName",
										flex : 3
									}, {
										text : "Office",
										dataIndex : "officeLocation",
										flex : 3
									},
									{
										text : "Phone",
										dataIndex : "phoneNumber",
										flex : 3
									}],
									store: userStore


									// {
									// 	type: "operations"
									// }
								}
							]
						},
						{ title: "Display Availability",
							layout: "fit",
							align: "stretch",

							items: [
								{
									border: 0,
									html: 
					"<div style=\"margin: 10px 0 10px 10px;\">" +
					"Helpful information goes here. The grid can be set to display information in any order desired dynamically"+
					"</div>"								
								}
							]
						},
						// { title: "Make Operation Requests"},
						// { title: "Delete or Update Operation Requests"},
						// { title: "Make a Request from the Waiting List"},
						// { title: "Make a Request for Concurrent Cases"},
						{ title: "Review Request Information"},
						{ title: "Operation Requests for a Day"},
						{ title: "Requests by Ward"}
					]
				}
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
});
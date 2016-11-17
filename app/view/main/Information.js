Ext.define('VistA.Surgery.view.main.Information', {
	extend: 'Ext.Panel',
	xtype: 'app-information',
	requires: ['VistA.Surgery.store.Facilities'],

	title: 'Information',
	id: "SurgeryInfoPanel",
	region: 'west',
	collapsible: true,
	split: true,
	width: "20%",
	margin: '0 5px 5px 10px',
	bodyPadding: 10,
	border: true,
	tools: [
		{
			itemId: "refresh",
			type: "refresh",
			handler: function () {
			// do refresh
			}
		}
	],
	items: [
		{
			border:0,
			html:
			"<table style=\"margin-left:1em;\">\
			<tbody>\
			<tr><td><i class=\"fa fa-user-md\" style=\"font-size:80px;\" aria-hidden=\"true\"><strong>⚕</strong></i></td>\
			<td><h3>User Information</h3>\
			Cobblepot IV, Oswald<br>Role: Surgeon\
			</td></tr></tbody></table>\
			Current Facility: Kodak<br><hr>"
		},
		{
			xtype: "combo",
			listWidth:'auto',
			autoWidth:true,
			width: 300,
			store: "Facilities",
			displayField: 'VHAFacilityName',
			valueField: 'StationID',			
			fieldLabel: "Select Facility",
			listeners: {
				"select" : function ( combo , record , eOpts ) {
					console.log("Got Data");
				}
			},
		    listConfig: {
		        getInnerTpl: function(displayField) {
	           return '<tpl if="xindex%2==0"><div class="odd"></tpl><tpl  if="xindex%2==1"><div class="even"></tpl> {' + displayField + '} </div>';
	        }
    },
		},
		{
			border:0,
			html: "<h3>Facility Information</h3><strong>Facility:</strong> Kodak<br>\
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		}
	]
});
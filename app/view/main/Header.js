Ext.define('VistA.Surgery.view.main.Header', {
	extend: 'Ext.Panel',
	xtype: 'app-header',

	title: "<abbr title=\"Veterans Health Information Systems & Technology Architecture\">VistA</abbr> Surgery",
	id: "SurgeryHeaderPanel",
	collapsed: true,
	margin: '0 0 5 0',
	hideCollapseTool : true,

	tools: [
		{
			type: "search",
			handler: function (panel) {
				// do search
				panel.down("#refresh").show();
			},
			 listeners: {
				 afterrender: function(me) {
					 Ext.tip.QuickTipManager.register({
						 target: me.getId(), // Target button"s ID
						 title : "Search",  // QuickTip Header
						 text  : "Brings up a modal dialog box to assist in searching" // Tip content
					 });
				 }
			 }
		},
		{
			type: "help",
			handler: function() {
				// show help here
			}
		}, 
		{
			itemId: "refresh",
			type: "refresh",
			handler: function () {
				// do refresh
			}
		}
	]	
});
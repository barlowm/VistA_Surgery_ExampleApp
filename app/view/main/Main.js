/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('VistA.Surgery.view.main.Main', {
	extend: 'Ext.Panel',
	xtype: 'app-main',

    requires: [
        'Ext.layout.container.Border'
    ],	

	layout: "border",
	bodyBorder: false,
	defaults: {
		collapsible: false,
		split: true,
		bodyPadding: 10,
		frame: true
	},
	items: [
		{
			xtype: "app-header",
			region: "north"
		},
		{
			xtype: "app-information",
			region: "west"
		},
		{
			xtype: "app-center",
			region: 'center',
			split: true,
			width: "80%"
		},
		{
			title: 'Footer Information Panel',
			id: "SurgeryFooterPanel",
			region: 'south',
			margin: '5 0 0 0',
			collapsed: true,
			hideCollapseTool : true,
			tools: [
				{
					itemId: "refresh",
					type: "refresh",
					handler: function () {
					// do refresh
					}
				}
			]			
		}
	]
});

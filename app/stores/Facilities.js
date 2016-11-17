Ext.define("VistA.Surgery.store.Facilities", {
	extend: 'Ext.data.Store',
	requires: ['VistA.Surgery.model.Facility'],

	config: {
		autoLoad: true,
		model: 'VistA.Surgery.model.Facility',
		storeId: 'Facilities',
		autoSync: true
	},

	listeners: {
		"beforeLoad" : function() {
			// debugger;
		},
		"onload": function ( store , operation , eOpts ) {
			// debugger;	
		}
	}
});
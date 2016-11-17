/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('VistA.Surgery.Application', {
    extend: 'Ext.app.Application',
    name: 'VistA.Surgery',


// create a reference in Ext.application so we can access it from multiple functions
splashscreen: {},


    models: ['Facility'],
    stores: ['Facilities'],

init: function() {
	// debugger;
    // start the mask on the body and get a reference to the mask
     splashscreen = Ext.getBody().mask('Loading AlRadio, please stand by ...', 'splashscreen');
},

launch: function() {
	// debugger;
    Ext.tip.QuickTipManager.init();
    var task = new Ext.util.DelayedTask(function() {

        // fade out the body mask
        splashscreen.fadeOut({
            duration: 500,
            remove: true
        });

        // fade out the message
        splashscreen.next().fadeOut({
            duration: 500,
            remove: true
        });

   });

   task.delay(1000);

}    
});

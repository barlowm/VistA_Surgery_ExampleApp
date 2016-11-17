Ext.define('VistA.Surgery.store.Operations', {
    extend: 'Ext.data.Store',
    alias: 'store.operations',
    model: "Operation",

    requires: [
        "VistA.Surgery.model.Operation",
    ],    
});



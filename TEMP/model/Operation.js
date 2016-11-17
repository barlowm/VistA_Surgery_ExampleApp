Ext.define("VistA.Surgery.model.Operation", {
    extend: "Ext.data.Model",
    alias: "model.Operation",
    fields: ['name', 'email', 'phone'],
    proxy: {
        type: 'rest',
        url : './Operations.json'
    } 
});

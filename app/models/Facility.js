Ext.define("VistA.Surgery.model.Facility", {
    extend: 'Ext.data.Model',
    fields: [
        "VISN",
        "StationID",
        "FacilityParentName",
        "VSSCCubeParentName",
        "Complexity",
        "State",
        "Region",
        "VHAFacilityName",
        "Integrated",
        "Size"
    ],

    proxy: {
        type: 'rest',
        url : 'http://localhost/sencha/App2/VistA_Surgery/data/FacilityInfo.json'
    }    
});

    



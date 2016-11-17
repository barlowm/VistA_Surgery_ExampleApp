Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [ "firstName", "lastName", "officeLocation", "phoneNumber" ]
});


Ext.define('VistA.Surgery.store.stdStore', {
    extend: 'Ext.data.Store',
    alias: 'store.stdStore',
// var userStore = Ext.create("Ext.data.Store", {
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



//alias: 'store.stdStore',
Ext.define('VistA.Surgery.view.main.stdGrid', {
// Ext.create('Ext.grid.Panel', {	
	xtype: 'stdGrid',	
    store: "store.stdStore",
    height: 200,

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
});
# VistA-Surgery-GUI-2
Reworked Source for the VistA-Surgery GUI using Backbone/Marionette


Dev Notes (as needed):
For forms the following is a standard JSON object to define a field:

```
    {
        "label": "<some text>",
        "field": "<fieldname from model>",
        "type": "", <-- Possible Options below...
        <select>
        <text>
        <text-area>
        <date>
        <time>
        <date-time>
        <read-only>
        <yes-no>,
        "selSrc": <if select>,
        "width": 6 <-- # of columns if left out defaults to 6 of 12 cols
    }
```

Definition of the fields for a form is in `src/js/components/form/view.js`

## Generate Alert Notification:
What is the api for creating alert notifications?

It's a Radio call.
First, put this inside the initialize method in your view:

```
    this.createNotificationChannel = 
        Backbone.Radio.channel("createNotificationChannel");    
```

Then, wherever you want to send the notification in your view, do this:

```
    this.createNotificationChannel.trigger("notification", {
        type: type,
        title: "SSLQI Release Request",
        text: data,
        action: `/admin_sslqi/reservation/${this.model.get("reservation_id")}/`,
        key: `${type}:${currentCaseId}:${currentVistaId}:${currentClassification}`,
        successMsg: "The SSLQI was successfully requested for release.",
        errorMsg: "Failed to request SSLQI release. Please try again later.",
        displayResult: true,
        users: NotificationUtil.getNotificationUsers(this.getOption("activeCase"))
    });
```

The above is an example.
Some fields are self explanatory.
*   The **"text"** field is where you enter the actual message of your
    notification.
*   The **"action"** field is where you want to put the URI of whatever page
    involves resolving (deleting) the notification. (A notification essentially involves a creation and a later deletion once its action item has been executed).
*   The **"key"** field is to support the notification's uniqueness across 
    users.
    Fill in as much as you can in the "key" field. The "type" field can be whatever you want, but preferably a letter (Note: "S", "P", "R", and "Q" are taken).
    In the **"key"** field, if you don't have a value for something, just put in null.
*   The **"displayResult"** field is for whether you want an alert box telling
    the user your notification was saved successfully.
*   And **"users"** is to determine what users this notification needs to go
    to. The getNotificationUsers function returns an array of user ien numbers associated with the passed in case (model) object.

---------------------
The Radio call, executes a "createNotification" method that is implemented inside the src/js/modules/notification/view.js with support from the src/js/modules/notification/utils.js file.


## Multiples ##
Source and comments are in: ***js/components/form/multiple.js***
*You **can** combine them*

Multiples are handled as extensions of the form system.  A multiple view creates a table, where each row is a form (made via the form system) bound the model in the collection represented.  A multipleview can be standalone, but will more likely be embedded as a subform into a parent form.

First, you define the fields of a single model in the multiple's collection, same as you do for an entity model, a list of objects,
  ex: `{ label: "Presure", field: "presure", type: "text" }` etc.

Second, instead of creating a FormView, you make a FormRow:

```
  const MyRow = FormRow.extend({
    formFields: myRowFields
  });
```

  Third, you instantiate a TableForms object, passing it the FormRow
  to use, as well as the collection:

```
  const collection = this.model.get("myRows");
  this.showChildView("MyRowsPlaceholder", new TableForms({
     childView: MyRow,
     collection: collection
  }));
```

  Last, to actually save the changes made in the TableForms object,
  you also need to do something like:

```
  this.listenTo(collection, "change", (target) => {
    model.set("timesTourniquetApplied", target.collection);
```

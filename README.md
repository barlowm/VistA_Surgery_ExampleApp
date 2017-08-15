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




# SenchaApp_Start
Step by step approach for the building of a Sencha Ext-JS 6.2 application

Let's walk through the steps of creating the app we've been working on above in
a real world environment.

## Download the Ext JS Framework

If you have not already done so, download and unpack the Ext JS framework from
either the Products section of the main Sencha website
([www.sencha.com](http://www.sencha.com)) or from the downloads section of the
Sencha Support portal.

## Download the Sample Application

You can download from Github by clicking the green "Clone or Download" button. Then
just click "Download Zip" and save the file to your machine.

Once downloaded, move the folder to wherever you'd like your application to live.

## Add Sencha Cmd to your App

Once you have your application where you want it, "cd" into its directory in your
Command Line Interface (CLI). Then, issue the following command:

    sencha -sdk /path/to/extjs/ app install
    sencha -sdk \WebRoot\ext app install <<--- Run on my machine

Sencha Cmd v6.2.0.103
[INF] Using existing workspace at D:\WebRoot\htdocs\sencha\App2\QuickStart
[INF] Workspace does not have framework ext at D:\WebRoot\htdocs\sencha\App2\QuickStart ... copying
[INF] Package is already local: ext/6.0.0.640
[INF] Extracting  : ....................



So run CMD Upgrade pointing to the desired package...
\> sencha app upgrade \WebRoot\ext
Sencha Cmd v6.2.0.103
[INF] Loading configuration for framework directory: D:\webroot\ext
[INF] Copying framework to D:\WebRoot\htdocs\sencha\App2\QuickStart\ext
[INF] Upgrading to Ext JS 6.x
[INF] Upgrading to sdk at D:\webroot\ext
[INF] Application structure already at current cmd version

Followed by an APP BUILD and APP WATCH
\> sencha app build
\> sencha app watch

Note to make debugging easier you could use the TESTING option to the build command (but you loose that feature if running with WATCH) to generate a non minified version of the app in the build/testing folder

## Note: Before running the build, check out the app.json file for the toolkit and theme being used (classic toolkit and theme-classic or theme-neptune)
    "toolkit": "classic",
    "theme": "theme-classic",




    http://localhost:1841/
    
    
    
    
    

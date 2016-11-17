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

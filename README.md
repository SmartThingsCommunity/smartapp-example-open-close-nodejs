# Open/Close Lighting Control

This SmartApp turns on and off a light when something opens and closes. It shows how to subscribe to events and execute device commands.

## Start

To get going quickly with this example, we've provided a few options for hosting below. Follow any one of them to get the app up and accepting requests before moving on to registration instructions.

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

[View logs](https://devcenter.heroku.com/articles/logging#log-retrieval-via-the-web-dashboard) in the Heroku dashboard.

Click the **Open app** button in the Heroku dashboard app page to copy the public URL for use in steps below.

### Glitch (no account required)

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/SmartThingsCommunity/smartapp-example-open-close-nodejs)

[View logs](https://support.glitch.com/t/console-log-where-to-find-it/14456) in the Glitch editor.

Copy the [Live Site URL](https://glitch.happyfox.com/kb/article/50-how-do-i-find-the-url-for-my-app/) from Glitch for use in steps below.

### Local

To make this work locally, we recommend using [ngrok](https://ngrok.com/) to create a globally available URL for fast testing.

`npm install`  
`npm start`  
`ngrok http 3001`

## Register

Follow the instructions for [registering a SmartApp](https://smartthings.developer.samsung.com/docs/smartapps/app-registration.html) with the SmartThings platform.

- The following OAuth2 scopes are required.
    - `r:devices:*` 
    - `x:devices:*` 

A `CONFIRMATION request` log should show in the log output of the server once registered. Navigate to this link to [verify your domain ownership](https://smartthings.developer.samsung.com/docs/smartapps/webhook-apps.html#Verify-your-domain-ownership) and enable the app to receive events. **This is required for successful installation.**

## Test

Follow the instructions for [testing a SmartApp](https://smartthings.developer.samsung.com/docs/testing/how-to-test.html).

## File Structure

* smartapp.js &mdash; the SmartApp implementation
* server.js &mdash; the Express server that hosts the SmartApp as a web-hook
* locales/en.json &mdash; English version of the app configuration page text
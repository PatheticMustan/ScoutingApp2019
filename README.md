# ScoutingApp
Team 2638's Scouting App for the 2019 FRC Season

## Problem
Recording the data of other teams was a real pain.
Scouters had to write the values, screenshot it, airdrop it over to a nearby Mac, and those screenshots would be transcribed into a spreadsheet... It was painful.

## Goal
Our goal was to ease the pain of scouting. We wanted to make an app that:
* Scouters could use on their school iPads.
* had forms/tickers to record the actual data, and any additional notes.
* had timers so Scouters wouldn't have to switch out of the app to log how long something took.
* could export all the data into a spreadsheet, and send it to the main computer, preferably over Bluetooth.

## Thought Process
> Scouters could use on their school iPads.

For this, we used [React Native](https://reactnative.dev/) + [Expo](https://expo.io/), so we could avoid using Xcode and Android Studio.

We also looked at [Xamarin Forms](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/). Both platforms allow us to build native apps without Xcode, which is only available on Macs. >:(

* had forms/tickers to record the actual data, and any additional notes.
* had timers so Scouters wouldn't have to switch out of the app to log how long something took.
* could export all the data into a spreadsheet, and send it to the main computer, preferably over Bluetooth.t

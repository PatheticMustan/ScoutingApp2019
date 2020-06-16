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

We also looked at [Xamarin Forms](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/). Both platforms allow us to build native apps without Xcode, which is only available on Macs. 😡

* had forms/tickers to record the actual data, and any additional notes.

React Native is based on the idea of having tons of tiny little components. Even the pages are components!
This made textboxes and tickers very easy. Once we wrote one, we could just re-use it, and pass in any custom placeholder/data-values we wanted. Kinda like a template.

* had timers so Scouters wouldn't have to switch out of the app to log how long something took.

this caused lots of pain 😭

* could export all the data into a spreadsheet, and send it to the main computer, preferably over Bluetooth.

This was actually way harder than I thought. (More below.)

## Act I, Confusion
Since we were completely new the React Native, we didn't really know the common issues/painpoints, and didn't learn about Redux in time.

We wanted the state of each and every value. It would be incredibly tedious to pass down a prop down to each and every component that has some type of value.

We needed a few things:

* Be able to edit the fields (duh).
* Be able to reset the fields.
* Be able to import an existing match with it's data filling in the forms.

## Act II, Pain

I ([PatheticMustan](https://github.com/PatheticMustan)) tried a way to get all the values into one giant object.

After lots of confusion and testing, I eventually came up with a solution; having a globally defined object that would contain all the values. I'd then update the forms with these values. If we wanted to update a form, we could just modify the global object. Simple, right?

This approach would come with a few benefits:

* When we want to load an existing match, or clear everything, we can modify the values by changing the global object.
* Easy

## Act III, Suffering

Actually, no. 
Apparently, [React doesn't update until the props/state change](https://www.w3schools.com/react/react_lifecycle.asp).

> The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component's state or props.

Well, this sucks.

A quick, naïve solution, is to have setInterval update the props, just to re-render it.
It seemed to work fine on web, so I left it alone, and worked on timers, and the rest of the UI.

A few months later...

## Act IV, Torment

Since it was a pain to test on iOS, I was mainly testing the app on Web, and hoped it would look the same on iOS.

To test the app on iOS, we could

* use an emulator (Xcode)
* use [Snack](https://snack.expo.io/), which is Expo but online
* Rent a Mac to use Xcode??????
* Try to make a hackintosh to use Xcode
* Buy a Mac
* Install an Expo app

Installing the Expo app was pretty easy, just a trip to the local IT department, and an explanation of why we needed it.

Now we have everything right? Smooth sailing!
Haha, nope! The app doesn't even start, bringing up angry red and gray error pages.

After days of more confusion AND pain, we found out it was because `<p>` and `<br>` worked on web, but not on iOS.
React Native felt pretty magical. Combining HTML, CSS, and JS into a native app, all without Xcode and Android Studio? It basically took care of everything.
In hindsight, it should have been incredibly obvious that web tags wouldn't work on non-web, but we trusted too much in the witchery that was React Native.


# SweetwaterCredits  

#### Mobile app for the Sweetwater River Conservancy. App users can calculate the amount of credits they have on a plot of land by filling out the forms in the app.

**Build Status**

Dev:
[![BuddyBuild](https://dashboard.buddybuild.com/api/statusImage?appID=5841d75786fe870100f28e47&branch=dev&build=latest)](https://dashboard.buddybuild.com/apps/5841d75786fe870100f28e47/build/latest?branch=dev)

Staging:
[![BuddyBuild](https://dashboard.buddybuild.com/api/statusImage?appID=5841d75786fe870100f28e47&branch=staging&build=latest)](https://dashboard.buddybuild.com/apps/5841d75786fe870100f28e47/build/latest?branch=staging)

Master:
[![BuddyBuild](https://dashboard.buddybuild.com/api/statusImage?appID=5841d75786fe870100f28e47&branch=master&build=latest)](https://dashboard.buddybuild.com/apps/5841d75786fe870100f28e47/build/latest?branch=master)

**Project Stack**

* **ReactNative**
* **Icons**: react-native-vector-icons/MaterialIcons
* **Store**: react-redux, redux-thunk
* **Navigation**: react-native-router-flux
* **Convenience**: lodash
* **Database**: firebase.google.com

**Project Built For**

* **iOS**: 8.0 (iPhone)
* **Layout**: Portrait Only
* **iPad Support**: (ComingSoon)
* **Android**: (Coming Soon)
* **Devices(Android)**: (TBD)

**Getting Started with ReactNative**

* Assuming you're doing this on OSX and trying to run iOS  
* Install Node and watchman

```bash
brew install node
```

```bash
brew install watchman  
```

* Install ReactNative Command Line Tools

```bash
npm install -g react-native-cli  
```

**Running the App**

```bash
cd sweetwaterCredits  
```

```bash
npm install
```

```bash
react-native run-ios   
```

### TODO:

* Anon users
* Sign Up form, make it confirmable
* Sentry Raven (HIGH)
* Explore test library options with JEST
* React Native Vector Icons Button


**Notes**

 * Reusable Components live in the src/components/common directory
 * Main Views (as defined in Router.js) live in the src/components directory

**Andrew Vogel - 2016**

###### Disclaimer: First time doing a javascript app so take it easy on me. :)

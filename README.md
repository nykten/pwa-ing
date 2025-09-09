# pwa-ing
Making a basic PWA with minimal HTML, CSS & JS elements.

## Hey, it works!
![Working demo](/demo/basic-1.jpg)
*lol*

![Installable PWA](/demo/basic-3.jpg)
*the prompt to install the basic website*

![Installed PWA](/demo/basic-4.jpg)
*the installed PWA*

## What is a PWA?

**PWA = Progressive Web Apps** btw

From my earliest understandings and introduction to it, it is basically a basic website, any kind of website, that you can 'install' and works like an application (like the regular apps on mobile devices) but just by using web technologies.

PWAs could also work offline if it was designed to, and could have access to a mobile device's functionalities such as location tracking, gyro sensors and such.

Overall, this gives more flexibility for a developer to just launch a website that could work as an app, without having to develop natively for the mobile device platforms (Android/iOS).

## What enables a website to be a PWA?
From my learnings, it's the setup of `manifest.json` and `service-worker.js` that enables it to become a PWA.

### `manifest.json` - the app settings

In this json file, we define the basics of our PWA. The name, the colours of it (will be used as the window header on Windows), the icons of how our app will be displayed. Just like how a regular mobile app would have. 

This definition would also tell the browser that our website is installable

### `service-worker.js` - the check if we can install it

Inside this JS script, we defined caches of our basic website and 2 functions: an `install` event and a `fetch` event.
The `fetch` event here is crucial as it is one of the requirements set by web browsers to give them the 'assurance' that our website can behave like an app and can be installed.

## 

I hope you enjoy my simple dimple learning process. So, try it out too guys!

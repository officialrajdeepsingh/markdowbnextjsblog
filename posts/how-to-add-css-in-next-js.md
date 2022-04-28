---
author : "Rajdeep Singh"
categories : ["Next.js", "Next", "Next.js Framework", "Next.js Tutorial", "React.js", "react.js tutorial"]
date : "2020-11-10T11:42:46Z"
description : "Easy Ways Add CSS in Next.js #SeriesPart2"
image : "images/next.js-add-css-code.jpg"
images : ["images/next.js-add-css-code.jpg"]
slug : "how-to-add-css-in-next-js"
summary : "Easy Ways Add CSS in Next.js #SeriesPart2 \n"
tags : ["Next.js", "Next", "Next.js Framework", "Next.js Tutorial", "React.js", "react.js tutorial"]
title : "How To Add CSS In Next js?"
draft : false
---

In this Next Series, we Learn How to add CSS's own Project with Easy Steps.

Good News is that Next.js provides custom CSS functionality. You Use The next.js plugin inside your project and use it.

## What's Next.js?

Make sure Read Basic Introduction About Next.js #SeriesStart 💕

[https://officialrajdeepsingh.dev/what-is-next.js/](https://officialrajdeepsingh.dev/what-is-next.js/ "https://officialrajdeepsingh.dev/what-is-next.js/")

***

## New Update:

Next.js Version 9.3 **Support CSS Global Stylesheets.** Now you add CSS directly Import `.css` files as global stylesheets.

```javascript
import './style.css'
```

***

**Go To Github Download or Use Npm:**

```cmd
npm install --save @zeit/next-css
or
yarn add @zeit/next-css
```

***

Create an `next.config.js` At the root of your project

## Default:

default config use for import CSS Global stylesheet in custom _app.js

```javascript
const withCSS = require('@zeit/next-css')
module.exports = withCSS({})
```

## Custom:

Custom config used for import CSS in other Components like header, footer like so.

```javascript
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
cssModules: true  // After true than use import statement in next.js
})
```

***

## How To add Global CSS:

When you create your app, help with npm. in the next step, you create a global app. If you npm official command the by default app create in your project and import your Global CSS file in next.js custom _app.js

```javascript
import '../styles.css'
or
import '../styles.scss'
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

***

# Demo:

<iframe width="924" height="500" src="https://codesandbox.io/embed/add-css-innextjs-8pdds?from-embed" style="border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

***

## Reference:

https://nextjs.org/docs/basic-features/built-in-css-support

https://nextjs.org/blog/next-9-2

https://nextjs.org/blog/next-10

***

# Contact me

* [https://www.facebook.com/officialrajdeepsingh/](https://www.facebook.com/officialrajdeepsingh/)
* [https://www.facebook.com/groups/JavaScriptcode/](https://www.facebook.com/groups/JavaScriptcode/)
* [https://www.facebook.com/groups/pythoncodejoin/](https://www.facebook.com/groups/pythoncodejoin/)
* [officialrajdeepsingh@gmail.com](mailto:officialrajdeepsingh@gmail.com)
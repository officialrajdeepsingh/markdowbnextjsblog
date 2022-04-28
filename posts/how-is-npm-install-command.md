---
author : "Rajdeep Singh"
categories : ["npm", "npm-cli", "npm install command"]
date : "2022-03-20T13:09:24Z"
description : "Npm install command help to install package from npmjs.org"
image : "images/npm-init-command-1.png"
images : ["images/npm-init-command-1.png"]
slug : "how-is-npm-install-command"
summary : "Npm install command help to install package from npmjs.org"
tags : ["npm", "npm-cli", "npm install command"]
title : "What is the npm install command?"
draft : false
---

Npm, install command help to install dependencies and devDependencies base on package.json and package-lock.json file.

**The simple word npm install command help to download the package from** [**npmjs.org**](https://www.npmjs.com/)**.**

```cmd
npm install <Options> <flags>

or

npm i <Options> <flags>

or

npm add <Options> <flags>
```

You can install any package base on two methods. I know there are other methods, but I created my way to quickly teach you the npm install command.

> I cover the most important options which you use every day. npm I, npm install, and npm add is one command.

1. Syntax
2. Options or Flags

## Syntax

1. npm install
2. npm package  **`<name>`**
3. npm install **`<name>@<tag>`**
4. npm install **`<name>@<version>`**
5. npm install **`<git repo URL>`**

### npm install

npm install command is the most used command in the npm world. The npm install command downloads all packages from the [npmjs](https://www.npmjs.com/) website and store them in the node_modules folder.

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "eslint": "8.11.0",
    "eslint-config-next": "12.1.0"
  }
}
```

Npm, install command install package based on package.json file. Inside the package.json file, npm checks dependencies and the devDependencies section. Then, based on dependencies and devDependencies, npm starts installing the package locally.

### npm package **`<name>`**

You can install a package based on the package name. So you mention the package name in the npm install command. Then, Npm directly installed the package into your **node_modules** folder locally.

When downloading another package or starting with a new project, the npm-cli also updates your package.json file and mentions the package name by default in the dependencies section.

```cmd
    npm install react@latest
```

***

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {},
  "dependencies": {
    "react": "17.0.2"
  },
 
}
```

### npm install `<name>@<tag>`

You can install the package base on the tag if the author defines the tags in the package on uploading to [npmjs](https://www.npmjs.com/).

In a simple word, the tag is the name of the version. The package's author gives the name of a different version, i.e., version 1.0.0, the tag name first.

By default, npm provide the latest tag for every npm package. The latest tag means the current version of the package.

```cmd
npm install react-dom@latest
```

### npm install `<name>@<version>`

you can install the package base on the version. Every package has a different version, and you can install a specific version of the npm package install in your project.

```cmd
    npm install react@16.1.1
```

### npm install `<git repo URL>`

You can install the package base on your git repo URL. npm install command helps to install the package directly from Github.

```cmd
     npm install https://github.com/facebook/react.git
```

> Firstly install code locally from GitHub and then run npm install command inside folder code folder.

## Options or Flags

1. -g option
2. -P or --save-prod option
3. -D or --save-dev option

### -g option

\-g flag or option helps the install the package globally in your machine. in Syntax ways, npm installs all packages in the working node_modules folder.

Globally means you access package cli anywhere in laptop.

```cmd
  npx -g create-react-app 
```

### -P or --save-prod option

The -P or --save-prod option helps add your package into the production or dependencies section in the package.json file.

By default, the npm install command adds the package into production.

```cmd
  npm install -P next@latest
    
    or
    
  npm install --save-prod next@latest
```

***

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  }
}
```

### -D or --save-dev option

The -D or --save-dev option helps add your package into the devDependencies section in the package.json file.

```cmd

  npm install -D eslint@latest
    
    or
    
  npm install --save-dev eslint@latest
  
```

***

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "eslint": "8.11.0",
    "eslint-config-next": "12.1.0"
  }
}
```

***

### References

https://docs.npmjs.com/cli/v6/commands/npm-install

***

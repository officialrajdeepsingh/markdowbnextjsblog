---
author : "Rajdeep Singh"
categories : ["Npm"]
date : "2022-04-18T11:00:00Z"
description : "Npm outdate command help to find old packages in your current project."
image : "images/npm-commands.png"
images : ["images/npm-commands.png"]
slug : "Learn-the-NPM-outdated-package-command"
summary : "Npm outdate command help to find old packages in your current project."
tags : ["Npm command", "NPM CLI", "Npm "]
title : "Learn the NPM outdated package command?"
draft : false
---

Npm outdated command print the list of the outdated package in your project. In the project, there are a lot of packages to check which are outdated.

There are two ways to check outdated packages

1. Manual ways
2. NPM command

## Manual ways

In manual ways, you open `package.json` files and compare every package manually.

## NPM command

Npm, provide inbuilt functionality for the outdated package. So simple, you run one npm command, and you get a list of all npm outdated packages in your terminal.

```cmd
 npm outdated <options> 
```

***

#### Output

```cmd
rajdeepsingh@officialrajdeepsingh:~/Downloads/officialstaticblog$ npm outdated
Package                     Current  Wanted             Latest  Location                                 Depended by
@next/swc-linux-arm64-gnu    12.1.4  12.1.5  11.1.3-canary.104  node_modules/@next/swc-linux-arm64-gnu   officialstaticblog
@next/swc-linux-arm64-musl   12.1.4  12.1.5  11.1.3-canary.104  node_modules/@next/swc-linux-arm64-musl  officialstaticblog
eslint                       8.12.0  8.12.0             8.13.0  node_modules/eslint                      officialstaticblog
eslint-config-next           12.1.4  12.1.4             12.1.5  node_modules/eslint-config-next          officialstaticblog
marked                       4.0.12  4.0.14             4.0.14  node_modules/marked                      officialstaticblog
next                         12.1.4  12.1.4             12.1.5  node_modules/next                        officialstaticblog
rajdeepsingh@officialrajdeepsingh:~/Downloads/officialstaticblog$
```

Npm provides lots more options or flags to improve the work experience.

You can check all options with the npm help command.

```cmd
npm outdated -help
```

#### Output

```cmd
rajdeepsingh@officialrajdeepsingh:~/Downloads/officialstaticblog$ npm outdated -help
    npm outdated
    Check for outdated packages
    Usage:
    npm outdated [[<@scope>/]<pkg> ...]
    Options:
    [-a|--all] [--json] [-l|--long] [-p|--parseable] [-g|--global]
    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
    Run "npm help outdated" for more info
```

The list of options we discuss in the articles is common, and everybody uses them daily.

## --all or -a

\-all flags or options help print all the outdated packages. The list is based on your project increase or decrease. For an indication -all flags use colour.

```cmd
    Package                                    Current        Wanted             Latest  Location                                                                                       Depended by
    @humanwhocodes/config-array                  0.9.5         0.9.5             0.10.2  node_modules/@humanwhocodes/config-array                                                       eslint
    @next/env                                   12.1.4        12.1.4             12.1.5  node_modules/@next/env                                                                         next
    @next/eslint-plugin-next                    12.1.4        12.1.4             12.1.5  node_modules/@next/eslint-plugin-next                                                          eslint-config-next
    @next/swc-android-arm-eabi                 MISSING        12.1.4    12.1.1-canary.0  -                                                                                              next
    @next/swc-android-arm64                    MISSING        12.1.4  11.1.3-canary.104  -                                                                                              next
    @next/swc-darwin-arm64                     MISSING        12.1.4             11.1.2  -   
    .....
```

## --json

\--json print the data in the terminal in json structure. It helps to visualise and debug the packages.json file more easily.

```json  rajdeepsingh@officialrajdeepsingh:~/Downloads/officialstaticblog$ npm outdated --json
    {
      "@next/swc-linux-arm64-gnu": {
        "current": "12.1.4",
        "wanted": "12.1.5",
        "latest": "11.1.3-canary.104",
        "dependent": "officialstaticblog",
        "location": "/home/rajdeepsingh/Downloads/officialstaticblog/node_modules/@next/swc-linux-arm64-gnu"
      },
      "@next/swc-linux-arm64-musl": {
        "current": "12.1.4",
        "wanted": "12.1.5",
        "latest": "11.1.3-canary.104",
        "dependent": "officialstaticblog",
        "location": "/home/rajdeepsingh/Downloads/officialstaticblog/node_modules/@next/swc-linux-arm64-musl"
      },
      "eslint": {
        "current": "8.12.0",
        "wanted": "8.12.0",
        "latest": "8.13.0",
        "dependent": "officialstaticblog",
        "location": "/home/rajdeepsingh/Downloads/officialstaticblog/node_modules/eslint"
      },
      "eslint-config-next": {
        "current": "12.1.4",
        "wanted": "12.1.4",
        "latest": "12.1.5",
        "dependent": "officialstaticblog",
        "location": "/home/rajdeepsingh/Downloads/officialstaticblog/node_modules/eslint-config-next"
      },
      "marked": {
        "current": "4.0.12",
        "wanted": "4.0.14",
        "latest": "4.0.14",
        "dependent": "officialstaticblog",
        "location": "/home/rajdeepsingh/Downloads/officialstaticblog/node_modules/marked"
      },
      "next": {
        "current": "12.1.4",
        "wanted": "12.1.4",
        "latest": "12.1.5",
        "dependent": "officialstaticblog",
        "location": "/home/rajdeepsingh/Downloads/officialstaticblog/node_modules/next"
      }
    } 
```

## --long or -l

\-l flag help to provide extendable information of very npm packages.

```cmd    rajdeepsingh@officialrajdeepsingh:~/Downloads/officialstaticblog$ npm outdated -l
    Package                     Current  Wanted             Latest  Location                                 Depended by         Package Type     Homepage
    @next/swc-linux-arm64-gnu    12.1.4  12.1.5  11.1.3-canary.104  node_modules/@next/swc-linux-arm64-gnu   officialstaticblog  dependencies
    @next/swc-linux-arm64-musl   12.1.4  12.1.5  11.1.3-canary.104  node_modules/@next/swc-linux-arm64-musl  officialstaticblog  dependencies
    eslint                       8.12.0  8.12.0             8.13.0  node_modules/eslint                      officialstaticblog  devDependencies  https://eslint.org
    eslint-config-next           12.1.4  12.1.4             12.1.5  node_modules/eslint-config-next          officialstaticblog  devDependencies  https://github.com/vercel/next.js#readme
    marked                       4.0.12  4.0.14             4.0.14  node_modules/marked                      officialstaticblog  devDependencies  https://marked.js.org
    next                         12.1.4  12.1.4             12.1.5  node_modules/next                        officialstaticblog  dependencies     https://nextjs.org
    rajdeepsingh@officialrajdeepsingh:~/Downloads/officialstaticblog$ 
```

## -g or --global

The global flag help print all the global package currently installed on your machine or laptop.

```cmd    rajdeepsingh@officialrajdeepsingh:~/Downloads/officialstaticblog$ npm outdated -g
    Package   Current  Wanted  Latest  Location               Depended by
    expo-cli  4.12.11   5.3.1   5.3.1  node_modules/expo-cli  global
    npm         8.3.0   8.7.0   8.7.0  node_modules/npm       global
    rajdeepsingh@officialrajdeepsingh:~/Downloads/officialstaticblog$ 
```

## -w or --workspace

workspace print all outdated package lists in your workspace

```cmd
  npm outdated -w
```

***

References

[https://docs.npmjs.com/cli/v8/commands/npm-outdated#synopsis](https://docs.npmjs.com/cli/v8/commands/npm-outdated#synopsis "https://docs.npmjs.com/cli/v8/commands/npm-outdated#synopsis")
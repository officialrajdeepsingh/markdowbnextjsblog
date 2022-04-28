---
author : "Rajdeep Singh"
categories : ["Raspberry", "Raspi 4", "screensshots", "capture screen shots", "Gnome Screenshot", "install gnome screenshot"]
date : "2021-01-24T12:26:07Z"
description : "Raspi does not provide screenshots functionality by default. you use software and tool to take a screenshot in raspi."
draft : false
image : "images/How-to-capture-screenshots-in-Raspberry-PI-4.png"
images : ["images/How-to-capture-screenshots-in-Raspberry-PI-4.png"]
slug : "how-to-capture-screenshots-in-raspberry-pi-4"
summary : "Raspi does not provide screenshots functionality by default. you use software and tool to take a screenshot in raspi."
tags : ["Raspberry", "Raspi 4", "screensshots", "capture screen shots", "Gnome Screenshot", "install gnome screenshot"]
title : "How to capture screenshots in Raspberry PI 4"

---



In Raspberry pi 4, you take the screenshot help of two software. The first is scort, and the second is Gnome Screenshot.

I'm personally recommended you use Gnome Screenshot. Gnome Screenshot provides a graphical interface. You use a graphical interface to take screenshots very easily.

Other hands scort is a command-line tool, and scort does not provide any graphical interface.So I'm personally again recommended you use Gnome Screenshot.

### Install Gnome Screenshot in Raspbian or Raspberry pi 4:

**let start it:**

The Raspi 4 does not provide by default Gnome Screenshot.

Firstly Update your raspberry pi 4. this is a compulsory step for installing Gnome Screenshot.

```cmd
sudo apt update && sudo apt upgrade
```

Your update and upgrade command run successfully. Now you install Gnome Screenshot following command.

```cmd
sudo apt install gnome-screenshot
```

Now you can find Gnome Screenshot in your accessories menu, listed as "Screenshot."

![sceenshot](http://localhost:3000/images/geenome.png)


Gnome interface is very easy to understand. You use Gnome to get a Screenshot, add your own image name, and after save it. By default, all pic save inside your Picture folder.

![interface look like](http://localhost:3000/images/gnome-screenshots.png)


---

### Uninstall Gnome Screenshot:

In some cases, you may uninstall the Gnome Screenshot. so follow this command

```cmd
sudo apt-get remove --purge gnome-screenshot
```

---

# Contact me

* [https://www.facebook.com/officialrajdeepsingh/](https://www.facebook.com/officialrajdeepsingh/)
* [https://medium.com/officialrajdeepsingh](https://medium.com/officialrajdeepsingh)
* [officialrajdeepsingh@gmail.com](mailto:officialrajdeepsingh@gmail.com)




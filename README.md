# NightwatchSuite
QA Development Environment

# Update Package.json or Install all Dependencies
This command install all dependencies that contans package.json
To run this command you need to extract package.json file from reporter-config Folder:
```npm install ```

# Follow the Steps to Setup Nightwatch Testing Environment
Download the repository and execute command npm install to Install all dependencies.
Requirements for Windows and Mac:
1. NodeJS
2. npm 


Note: You can install Manually all dependencies if you have nodejs already installed

# NodeJS
To install NodeJS:
```npm install nodejs --save```
npm install nodejs --save

# Nightwatch
To install Nightwatch:
```npm install nightwatch --save-dev```


# Chromedriver
To install Google Chrome driver:
```npm install --save chromedriver```

# GeckoDriver
To install Firefox Driver:
```npm install --save geckodriver```

# Reporter Config
Inside in this Folder there is config a file:
package-lock.json
package.json

# Handlebars
To run HTML reports:
```npm install --save handlebars```

# Nightwatch HTML REPORTER
Install HTML reporter:
```npm install --save nightwatch-html-reporter```

# PERSONAL INSTALL
Change page object model PATH: Search file after clone repository and change this Path
```nightwatch.json```
```"page_objects_path" :[ "/Nightwatch/NightwatchSuite/Test/page-objects"],```
### Using Grunt
Grunt is a javascript task runner that runs via nodejs.  It automates repetitive 
tasks of web development.

####Prerequisites
Admin access to computer
nodejs
grunt

#### Installation
1. Check if you have grunt installed.  
"npm grunt -v"  
If not, run the following.  
"npm install -g grunt-cli"

2. To test the site locally, run  
"grunt serve"  
This is very helpful in development when you want to test what you are working on 
before pushing it to a live site.

3. To build the site for deployment, run  
"grunt build"  
The build is located in the /dist folder and is what you would push to the web server 
using the ftp client.

#### Editing Grunt Tasks
Grunt Prefix Syntax
One of our goals is to compile *.scss & *.sass files in different subdirectories.

However, the premium version that Gruntfile.js generated includes a syntax that
is not clearly documented in Grunt README.

I found this link: http://gruntjs.com/configuring-tasks#globbing-patterns is helpful for
me to change the syntax. Basically, what I did is to change the "{,*/}*." to "**/*".

"**"  matches any number of characters, including "/", as long as it's the only thing in a path part.

#### Next Doc
[Browser Dev Tools](https://github.com/OpenPhysProject/OpenPhys/blob/master/docs/newDeveloperDocs/07_Browser_Dev_Tools.md)
### Using Grunt
Grunt is a Javascript task runner that runs via nodejs.  It automates repetitive 
tasks of web development.

####Prerequisites
Admin access to computer.  
nodejs installed.  
grunt installed.  

#### Installation
1. Check if you have grunt installed.  
"npm grunt -v"  
If not, run the following.  
"npm install -g grunt-cli"

#### Local Testing
You can fully test your web site locally, without uploading to the web server.
This is very useful.

To test the site locally, run "grunt serve" at the command line prompt. 
This is very helpful in development for testing your site locally (on your development computer) 
before pushing it to a live site.
This will produce the web site with an address like this: http://localhost:9000/

#### Prepare Files for Upload
When all files are ready for upload to the site. 
To build the site for deployment, run  
"grunt build"  
The build is located in the /dist folder. The files here are the ones that you will push to the web server 
using the ftp client.

#### Editing Grunt Tasks
The operation of the grunt tasks can be modified.

Grunt Prefix Syntax  
One of our goals is to compile *.scss & *.sass files in different subdirectories.

However, the premium version that Gruntfile.js generated includes a syntax that
is not clearly documented in Grunt README.

I found this link: http://gruntjs.com/configuring-tasks#globbing-patterns is helpful for
me to change the syntax. Basically, what I did is to change the "{,*/}*." to "**/*".

"**"  matches any number of characters, including "/", as long as it's the only thing in a path part.

#### Next Doc
[Browser Dev Tools](https://github.com/OpenPhysProject/OpenPhys/blob/master/docs/newDeveloperDocs/07_Browser_Dev_Tools.md)
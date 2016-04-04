### Install Instructions
This file explains how to set up the openphys project locally for development purposes.  
If you haven't already done so, clone the [OpenPhys repo](https://github.com/OpenPhysProject/OpenPhys.git). 
Learn more about cloning a repo [here](https://help.github.com/articles/cloning-a-repository/).

#### Setup

1. Open command prompt. Do not use powershell. Run everything in "" below from the command prompt.

2. Navigate to the project folder, for example "cd c:\dev\OpenPhys"

3. Check if you have node (at-least 0.10.x)  
"node -v"  
If you don't have node, go install it form http://nodejs.org/  
** NOTE node v 0.12.0 will not work, and there is an outstanding bug with them for it.  

4. Check if you have bower and grunt installed.  
"npm bower -v"  
"npm grunt -v"  
If not, run the following.  
"npm install -g bower grunt-cli"

5. Install NPM and Bower Dependencies from the root folder of the project  
"npm install"  
"bower install"  

#### Trouble Shooting

For windows user, you can use the following if you run into trouble:

If you have trouble with node version.

1. "npm install -g nvmw"

2. "npm install %version% around 0.10.28"

3. Run "nvmw use v0.10.28" to switch to the previous version.

4. Open up the cmd in admin mode and get to your project directory

5. Run "npm install" to set up the npm dependencies.

6. Shut down the cmd and open up git shell.

7. Run "bower install" to set up the same folder.

8. You can use "grunt server" to check if you have successfully set up the dependencies.

#### Usage
The content in the repo was generated using https://github.com/yeoman/generator-backbone

We Use Grunt to run tasks for testing and building the project
"grunt serve"
"grunt build"

For a quick walkthrough, check out http://code.tutsplus.com/tutorials/building-apps-with-the-yeoman-workflow--net-33254


#### Notes on Editing Grunt Tasks

##### Grunt Prefix Syntax

One of our goals is to compile *.scss & *.sass files in different subdirectories.

However, the premium version that Gruntfile.js generated includes a syntax that
is not clearly documented in Grunt README.

I found this link: http://gruntjs.com/configuring-tasks#globbing-patterns is helpful for
me to change the syntax. Basically, what I did is to change the "{,*/}*." to "**/*".

"**"  matches any number of characters, including "/", as long as it's the only thing in a path part.


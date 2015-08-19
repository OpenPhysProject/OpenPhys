### Setup
Run everything in "" below from the command prompt.  Do not use powershell, yeoman is not compatible.

Check if you have node (at-least 0.10.x)
"node -v"
If you don't have node, go install it form http://nodejs.org/
** NOTE node v 0.12.0 will not work, and there is an outstanding bug with them for it.

Check if you have yeoman, bower, grunt, and gulp installed.
"npm yo -v"
"npm generator -v"
"npm bower -v"
"npm grunt -v"
"npm gulp -v"

If not, run the following.
"npm install -g yo bower grunt-cli gulp"
"npm install -g generator-webapp"

http://yeoman.io/learning/ for more info

Install NPM and Bower Dependencies from the root folder of the project
"npm install"
"bower install"

###Trouble Shooting
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


### Usage
The content in the repo was generated using https://github.com/yeoman/generator-backbone
Since this has already been generated, you should be able to do things like
"yo backbone:view name"

Available Generators:
yo backbone:model blog
yo backbone:collection blog
yo backbone:router blog
yo backbone:view blog


We Use Grunt to run tasks for testing and building the project
"grunt serve"
"grunt build"

For a quick walkthrough, check out http://code.tutsplus.com/tutorials/building-apps-with-the-yeoman-workflow--net-33254

### Setup
Run everything in "" below from the command prompt

Check if you have node (at-least 0.10.x)
"node -v"
If you don't have node, go install it form http://nodejs.org/

Next we need yeoman
"npm install -g yo bower grunt-cli gulp"
"npm install -g generator-webapp"
http://yeoman.io/learning/ for more info


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
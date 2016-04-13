### Structure
This is a high level overview of the code architecture and should give an idea where to look when you want to make changes.
Note all following points exclude lesson content which is contained separately in the content folder, with authoring explained in related HowTo docs. 

The initial content in the repo was generated using https://github.com/yeoman/generator-backbone  
For a quick walkthrough, check out http://code.tutsplus.com/tutorials/building-apps-with-the-yeoman-workflow--net-33254  

1. The project follows a pseudo MVC (Model View Controller) structure which is supported by [backbonejs](http://backbonejs.org/).  
Models are represented by the data models and data from the content. 
Views are represented by the template files, the sass (css) that styles that html, and a little bit by the javascript views. 
Controllers are represented by the javascript from main.js and the views.  
2. To change page content, edit the related ejs templates.
3. To change appearance, edit the related sass (css) files.  
It is a best practice to use sass variables to store reused 
properties, such as color or font size.  
Checkout the styles/settings folder for high level variables that are used throughout the site as well 
as a [README.md](https://github.com/OpenPhysProject/OpenPhys/blob/master/app/styles/settings/README.md) with more information.
4. To change how something functions, change the related javascript view code.
5. Checkout [ProjectCodeArchitecture.png](https://github.com/OpenPhysProject/OpenPhys/blob/master/docs/ProjectCodeArchitecture.png) to get a 
better sense of what different files are responsible for and how all the files relate to each other.

####Next Doc
[Update Site Logo](https://github.com/OpenPhysProject/OpenPhys/blob/master/docs/developerDocs/03_Example.md)
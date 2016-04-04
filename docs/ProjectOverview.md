### Project Overview
OpenPhys is built on current web standards and best practices.  It is a responsive, mobile first web app. The goal of this document is
to briefly describe the tools used and the projects structure to help new developers get up to speed more quickly.

#### Tools
You will need the following:

1. An IDE to edit the files. We used [NetBeans](https://netbeans.org/)
2. [Git](https://git-scm.com/) installed, and a GUI to work with it like [SourceTree](https://www.sourcetreeapp.com/) can be useful.
3. For uploading the site, an ftp client such as [FileZilla](https://filezilla-project.org/)
4. [nodejs](https://nodejs.org/en/) installed
5. Follow [InstallInstructions.md](https://github.com/OpenPhysProject/OpenPhys/blob/master/docs/InstallInstructions.md)

#### Structure
This is a high level overview of the code architecture and should give an idea where to look when you want to make changes.
Note all following points exclude lesson content, which is contained separately in the content folder with authoring explained in related HowTo docs. 

1. The project follows a sudo MVC (Model View Controller) structure. Models are represented by the data models and data from the content. 
Views are represented by the template files, the css that styles that html, and a little bit by the javascript views. 
Controllers are represented by the javascript from main.js and the views.
2. To edit what exists on a page, change the related templates. 
3. To edit how something looks on the web site, change the related sass files. It is a best practice to use sass variables to store reused 
properties, such as color or font size.  Checkout the styles/settings folder for high level variables that are used throughout the site as well 
as a [README.md](https://github.com/OpenPhysProject/OpenPhys/blob/master/app/styles/settings/README.md) with more information.
4. To change how something functions, change the related javascript view code.
5. To help you find the related files, let me explain the naming.  The first page you see we call the tile view, meaning the related files 
are all named with LessonTile except for main.js which controls a lot of this fist views behavior.  The page you see after clicking a tile is 
called the map view.  The page you see after clicking one of the cards in the map view is a combination of the lesson base view (which contains 
all the elements and behaviors common to all content) and the content view which contains elements specific to that content (these are templates 
loaded from the content folder).
6. Checkout [ProjectCodeArchitecture.png](https://github.com/OpenPhysProject/OpenPhys/blob/master/docs/ProjectCodeArchitecture.png) to get a 
better sense of what different files are responsible for and how all the files relate to each other.
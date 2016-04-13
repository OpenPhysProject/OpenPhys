### Update Site Content
Replace Content Files With Your Own Work  
Most of the following steps can be done by your IT department, 
but you will need to create the lesson and the related text. See the 
[authorDocs](https://github.com/OpenPhysProject/OpenPhys/tree/master/docs/authorDocs).

####Remove Unwanted Lessons   
Each subfolder in app/content (except ‘Logo’) contains the files for one lesson.  
In app/content, remove all the subfolders ‘Lesson1’, ‘Lesson2’ etc.,
 but leave Intro, Logo, and sample. (‘Intro’ is the the User Guide lesson).  
In file app/index.html, remove related lesson script links (starting at line 160, everything 
after <!-- Content--> except Intro).  
In file app/scripts/main.js, remove related lessons from the loadData method (line 67).  

####Other changes
1. [New Developer Setup](https://github.com/OpenPhysProject/OpenPhys/tree/master/docs/newDeveloperDocs)
2. [Author new lessons](https://github.com/OpenPhysProject/OpenPhys/tree/master/docs/authorDocs)
3. [Add new lessons to a site](https://github.com/OpenPhysProject/OpenPhys/tree/master/docs/lessonDocs)
4. [Make changes to the base site](https://github.com/OpenPhysProject/OpenPhys/tree/master/docs/developerDocs)

####Back To Top
[newSiteDocs](https://github.com/OpenPhysProject/OpenPhys/blob/master/docs/newSiteDocs/README.md)

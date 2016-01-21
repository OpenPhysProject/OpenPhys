### How To Add an lesson to this project
1. Add File Folder To Content

2. Add data.js file to new folder

3. Add Template files to new folder

4. Add new files to Index.html

5. Load new files in main.js

6. Add any needed custom view code

7. Add any needed custom styles

#### Add File Folder to content
1. In app/content/ add a folder to store the new lesson you will be adding.  
app/content/myLesson
2. Create the following sub folders
assets
templates
views

#### Add data.js file to new folder
1. In app/content/Lesson1 you can find working data.js example.
2. In the folder you created for your lesson, create a new file named data.js, 
or copy one of the existing files.
3. Edit the properties, which are mostly self explanatory.  
  1. route is used for the subpath url and name spacing related views.
  2. primaryPathIndex is used to indicate a primary path through the content, and the
first page from this data is where people will be sent by default.
  3. In contentMapData, {title:"", image:"", route:""} creates an empty gap in the 2D navView
4. Make sure to change "scope.lesson1 = s;" to whatever you are naming the new lesson  
scope.myLesson = s;

#### Add Template files to new folder
1. go to app/content/[yourLessonFolder]/templates folder
2. copy app/scripts/templates/lessonTemplate/Row0_Col0.ejs into your new folder as a starting point
3. create templates for all of your content, which should match contentMapData.    
Note contentMapData index is row and the 2nd arrow is column.  Both start at 0 
and must be used for your file name.

Files to Change:
---------------
app/index.html
app/scripts/main.js


#### Add new files to Index.html
1. open app/index.html
2. scroll to the very bottom
3. following the existing pattern, add a reference for the data file you just created
```
<!-- lesson ## -->  
<script src="content/lesson##/data.js"></script>
```

#### Load new files in main.js
1. open app/scripts/main.js
2. Find the loadData function (line 52)
3. Follow the pattern to add the new lesson.  
For example if you added lesson3:
```
m  =  new scope.Models.lessonModel(OER.data.lesson3, {parse: true, viewPath: "lesson3"});  
this.lessons.add(m);  
```
OER.data.lesson3 is the namespace you set in your data (Add data step 4), 
and viewPath is the folder name for your lesson (Add Folder to content step 1)
4. Note that lessons tiles in the webpage are shown in the same order they are added here.

#### Add any needed custom view code
Views are programmatically generated for the templates you create at runtime, 
but if you need a view to do something more interesting (such as an interaction) 
you will need to create a new view.
For instructions on how to add a new view, see app/content/HowToAddLessonCode.md

#### Add any needed custom styles
Content will generally use the standard provided style (from styles/views/ContentView.scss)
You can add custom styles when needed if you need your content to do something 
visually different.
For instructions on how to add a new view, see app/content/HowToAddLessonStyle.md




### How to add Javascript Code to a Lesson

This document explains how to add new Javascript code to a lesson.
You will find a well documented example here: *app/content/sample/views/Row0_Col0.js*

#### Add new .js file

2. Go to *app/content/[yourLesson]/views*
3. Copy *app/scripts/views/lessonTemplate/Row0_Col0.js* into the new folder as a starting point.
4. Rename the copied file to match the template file it is associated with, for example *Row0_Col3.js*
5. Open the file in an editor
6. Change line 2, replacing *lessonRoute* with the route property of the related data file  
```
OER.Views.MoreParticles = OER.Views.MoreParticles || {};
```
7. change line 7, replace *lessonRoute* with the route property of the related data file, as above,
and changing the *MapCardRoute* with the route property of related entry in *contentMapData*.  
```
OER.Views.MoreParticles.MakeAParty = Backbone.View.extend({
```
8. change line 9 to reference the related template file  
```
JST['app/content/lesson3/templates/Row0_Col3.ejs'],
```
9. You can now add new behaviors.  This is a backbone.js view, to learn more about
what that means check out http://backbonejs.org/#View

#### Tell *index.html* about your new .js file
1. open *app/index.html*
2. scroll to the very bottom
3. following the existing pattern, add a reference for the view file you just created
above the related data file
```
<!-- lesson 3 -->  
<script src="content/lesson3/views/Row0_Col3.js"></script>
```
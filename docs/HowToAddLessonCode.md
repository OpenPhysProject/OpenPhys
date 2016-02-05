### How to add Javascript Code to a Lesson

This document explains how to add new Javascript code to a lesson. 
Let's assume that you are working with *Lesson20*.
You will find a well documented example here: *app/content/sample/views/LessonTemplate/Row0_Col0.js*

#### 1. Add a new .js file

1. Go to _**app/content/Lesson20/views**_
2. Copy *app/scripts/views/LessonTemplate/Row0_Col0.js* into the new folder as a starting point.
3. Rename the copied file to match the template file it is associated with, for example *Row0_Col3.js*
4. Open the file in an editor
5. Change line 2, replacing *lessonRoute* with the route property of the related data file:  
```
OER.Views.MyLessonRoute = OER.Views.MyLessonRoute || {};
```
Change line 7, replace *LessonRoute* with the route property of the related data file, as above,
and changing the *MapCardRoute* with the route property of related entry in *contentMapData*, 
(defined in *data.js* file for your lesson).
```
OER.Views.MyLessonRoute.MyMapCardRoute = Backbone.View.extend({
```
Change line 22 to reference the related page template file:  
```
JST['app/content/lesson20/templates/Row0_Col3.ejs'],
```
8. You can now add new behaviors.  This is a backbone.js view, to learn more about
what that means check out http://backbonejs.org/#View

#### 2. Tell *index.html* about your new .js file
1. open *app/index.html*
2. scroll to the very bottom
3. following the existing pattern, add a reference for the view file you just created
above the related data file
```
<!-- lesson 3 -->  
<script src="content/lesson3/views/Row0_Col3.js"></script>
```
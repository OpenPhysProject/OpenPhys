### How to add JavaScript Code to a Lesson

This document explains how to add new JavaScript code to a lesson. 
For instance, one reason for this might be to add an interactive animation. 

Let's assume that you are working with *Lesson20*.
You will find a well documented example here: *app/content/sample/views/LessonTemplate/Row0_Col0.js*

#### 1. Add a new .js file

1. We will create a new .js file in your lesson 'views' folder: *app/content/Lesson20/views*
2. Copy *app/scripts/views/LessonTemplate/Row0_Col0.js* into the lesson views folder as a starting point.
3. Rename the copied file to match the template file it is associated with, for example *Row0_Col3.js*
4. Open this file in an editor
5. Change line 2, replacing *lessonRoute* with the route property for your lesson:  
```
OER.Views.MyLessonRoute = OER.Views.MyLessonRoute || {};
```
Change line 7, replace *LessonRoute* with your lesson route, as above,
and changing the *MapCardRoute* with the route property of related entry in *contentMapData*, 
(defined in *data.js* file for your lesson).
```
OER.Views.MyLessonRoute.MyMapCardRoute = Backbone.View.extend({
```
Change line 22 to reference the page template file:  
```
JST['app/content/lesson20/templates/Row0_Col3.ejs'],
```
8. You can now add new behaviors to your JavaScript code.  This is a backbone.js view, to learn more about
what that means check out http://backbonejs.org/#View

#### 2. Tell *index.html* about your new .js file
1. open *app/index.html*
2. scroll to the very bottom
3. following the existing pattern, add a reference for the view file you just created
above the related data file
```
<!-- lesson 20 -->  
<script src="content/lesson20/views/Row0_Col3.js"></script>
```
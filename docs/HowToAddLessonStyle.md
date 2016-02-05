### How To Add New Styles to a Lesson 

This page explains how to add new CSS styles to a lesson.

Note that [Bootstrap](http://getbootstrap.com/css/) is included in this project. 
Bootstrap CSS provides a powerful tool to style your template files and is worth
investigating as it may already include the style you are interested in.
In particular, we use [Bootstrap grids](https://getbootstrap.com/examples/grid/) 
for responsive layouts of content with images.


#### 1. Add a new style file
You will find a well documented example in the *app/content/sample/styles/sample.scss*

1. Create folder *app/content/[yourLesson]/styles*
2. Create a scss file with a meaningful name, for example *Row0_Col3.scss*
3. Open the file in an editor and add the custom sass (css) you want.

#### 2. Add a reference to your new file in *app.scss*
1. open *app/styles/app.scss*
2. scroll to the very bottom
3. following the existing pattern, import the style file you just created
```
@import "../content/lesson1/styles/Row1_Col5.scss";
```
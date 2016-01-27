### How To Add Lesson Style to this project
1. Add new file

2. Edit file

3. Add to app.scss

#### Add new file
1. You will find a well documented example in the app/content/samples/styles/sample.scss
2. Create folder app/content/[yourLesson]/styles
3. create a scss file with a meaningful name, for example Row0_Col3.scss
4. Open the file in an editor and add the custom sass (css) you want.

#### Add to app.scss
1. open app/styles/app.scss
2. scroll to the very bottom
3. following the existing pattern, import the style file you just created
```
@import "../content/lesson1/styles/Row1_Col5.scss";
```
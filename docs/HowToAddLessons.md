### How to add a new Lesson
All the files for each lesson are found in the *app/content* folder. 
You can browse an existing lesson to get an idea of the files used.
The three main steps to create a new lesson are:

1. Create a new lesson folder to hold all your new content. 
2. Tell *index.html* about your new lesson.
3. Tell *main.js* about your new lesson.
4. (Optional) add any custom JavaScript code and CSS styles.

### 1. Create a new Lesson Folder
1. In *app/content/* add a folder to store the new lesson you will be adding.
*app/content/myLesson*
2. Create the following sub folders: assets, templates, views.

#### Add a data.js file
Each lesson has a *data.js* file which contains information, including how pages 
are arranged into the 2D map.
In the *app/content/sample* folder you will find a well documented *data.js* example.

1. In your lesson folder, create a new file named data.js, or copy an existing one.
2. Edit the lesson properties. Properties with default values are optional.
  1. *title* - title that is shown on the main page lesson tile
  2. *preview* - svg image that is shown on the main page lesson tile
  3. *route* - the subpath url and name-spacing for related views.
  4. *primaryPathIndex* is used to indicate the primary row on the map
  5. *jumpNav* - [default = false] determines if you can navigate left and right across gaps in the map
  6. *horizontalLinks* and *verticalLinks* - explained below in how to add links to navigation map
  7. *numberConnector*, *rowLeadNumber*, *rowIncrement*, *colLeadNumber*, and *colIncrement* - explained below in how to handle page numbering
  8. *contentMapData* - 2D array of MapCardCollection, used to store 2D map of content. See below for explanation.
3. Edit the lesson contentMapData properties, all of which are optional. 
Each separate entry represents a row in the 2D map of content.
  1. *startNode* - [default = false] show start node in navigation Map before first map card
  2. *endNode* - [default = false] show end node in navigation map after last map card
  3. *horizontalLinks* - explained below in how to add links to navigation map
  4. *rowNumberLabel* - explained below in how to handle page numbering
  5. *mapCards* - collection of mapCards, each representing a card or a gap on the navigation map. See below for explanation.
4. Edit the lesson contentMapData mapCards properties. Properties with default values are optional.
  1. *title* - shown on navigation cards in map view, supports \n for new lines, use "" to create an empty card sized gap in 2D map
  2. *route* - url for route handling and the namespace for the view associated with content page
  3. *group* - [default = ""] used to show a relation between various mapCards and there related content pages
  4. *icons* - [default = []] [options = ["quiz", "interaction", "video"]] used to show icons on mapCard that indicate specific content types, currently supports a visual max of 2
  5. *template* - [default = null] ejs template file name, if not set this value will default to row and col of 2d mapping, ie Row0_Col0.ejs
  6. *linkLeft* and *linkTop* - explained below in how to add links to navigation map
  7. *number* - explained below in how to handle page numbering
Note: *{title:""}* creates an empty gap in the 2D map.
5. At the end of *data.js* change *scope.lesson1 = s;* to *scope.myLesson = s;*

#### how to add links to navigation map
There are multiple ways to add links between mapCards in the navigation map, 
meant to make authoring both easy and flexible.
The expected practice is to define the general behavior for links at the lesson 
level, then define any row exceptions at the contentMapData level, and finally 
define any map card specific exceptions at the mapCard level.

1. *linkLeft* of mapCard is determined with the following priority.  
  1. *linkLeft* property of mapCard is given top priority, and will always be applied
  2. *horizontalLinks* property of contentMapData has 2nd priority, and is applied to all cards in this row
  3. *horizontalLinks* property of lesson has 3rd and lowest priority, and is applied to all rows
2. *linkTop* of mapCard is determined with the following priority.  
  1. *linkTop* property of mapCard is given top priority, and will always be applied
  2. *verticalLinks* property of lesson has 2nd and lowest priority, and is applied to all columns

#### how to handle page numbering
There are multiple ways to define page numbering that are meant to make authoring 
easier while allowing maximum flexibility.
The expected practice is to define numbering properties at the lesson level in 
most cases, and define any row exceptions at the contentMapData level, and finally 
to define any page specific exceptions at the mapCard level.

1. *numberConnector* - [default = "."] connecting character for page numbering, 
ie 200.3, defined at lesson level.
2. Row number (value before connector) is determined with the following priority.  
  1. *number* property of mapCard takes top priority, will always be shown, and 
     overrides all of row, numberConnector, and column values.
  2. *rowNumberLabel* of contentMapData has 2nd priority, and is applied to all cards in this row
  3. *rowLeadNumber* and *rowIncrement* of lesson data has 3rd and lowest priority, 
     and is applied to all rows.  Row value is determined by rowLeadNumber + rowIncrement*row (note row starts at 0)
2. Column number (value after connector) is determined with the following priority.  
  1. *number* property of mapCard takes top priority, will always be shown, and 
     overrides all of row, numberConnector, and column values.
  2. *colLeadNumber* and *colIncrement* of lesson data has 2nd priority, 
     and is applied to all columns.  Column value is determined by colLeadNumber + colIncrement*column (note column starts at 0)
  3. As a special case and with 3rd and lowest priority, if row values are defined 
     and column are not, column values will be auto populated starting at 0 and 
     incrementing by 1

#### Add a Template File for each page
A template file is needed for each content page on your website.

1. Go to *app/content/[yourLessonFolder]/templates* folder
2. Copy *app/content/sample/templates/Row0_Col0.ejs* into your new folder as a starting point
3. create templates for all of your content, which should match contentMapData.  
Note contentMapData index is row and the 2nd arrow is column. Both start at 0 
and must be used for your file name.
4. Note that [Bootstrap](http://getbootstrap.com/css/) is included in this project. 
You can use Bootstrap css as a powerful tool when styling your template files. 
In particular, we use [Bootstrap grids](https://getbootstrap.com/examples/grid/) 
for responsive layouts of content with images.

### 2. Tell *index.html* about the new lesson
1. open app/index.html
2. scroll to the very bottom
3. following the existing pattern, add a reference for the data file you just created
```
<!-- lesson ## --> 
<script src="content/lesson##/data.js"></script>
```

### 3. Tell *main.js* about the new lesson
1. open *app/scripts/main.js*
2. Find the loadData function (line 52)
3. Follow the pattern to add the new lesson.  
For example if you added lesson3:
```
m = new scope.Models.lessonModel(OER.data.lesson3, {parse: true, viewPath: "lesson3"});  
this.lessons.add(m);  
```
*OER.data.lesson3* is the namespace you set in your data (Add data step 4), 
and viewPath is the folder name for your lesson (Add Folder to content step 1).
4. Note that lessons tiles in the webpage are shown in the same order they are added here.


### 4. Add Customizations to your Lesson (Optional)

#### Add any needed custom JavaScript view code
Views are programmatically generated for the templates you create at runtime, 
but if you need a view to do something more interesting (such as an interaction) 
you will need to create a new view.
For instructions on how to add a new view, see docs/HowToAddLessonCode.md

#### Add any needed custom CSS styles
Content will generally use the standard provided style (from app/styles/views/ContentView.scss)
You can add custom styles when needed if you need your content to do something 
visually different.
For instructions on how to add a new view, see docs/HowToAddLessonStyle.md




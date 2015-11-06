### How To Add an RLO to this project
1. Add Data

2. Add Content

3. Add to Index

4. Load in main.js

5. Add any needed view code

#### Add data
1. In app/scripts/data you can find working examples like RLO1.js.
2. Create a new file with a meaningful name, or copy one of the existing files.
3. Edit the properties, which are mostly self explanatory.  
1. route is used for the subpath url and name spacing related views.
2. primaryPathIndex is used to indicate a primary path through the content, and the
first page from this data is where people will be sent by default.
3. In contentMapData, {title:"", image:"", route:""} creates an empty gap in the 2D navView
4. Make sure to change "scope.RLO1 = s;" to whatever you are naming the new lesson  
scope.RLO3 = s;

#### Add Content
1. go to app/scripts/templates folder
2. create a folder with the same name as your new data file
3. copy app/scripts/templates/RLOTemplate/Row0_Col0.ejs into your new folder as a starting point
4. create templates for all of your content, which should match contentMapData.    
Note contentMapData index is row and the 2nd arrow is column.  Both start at 0 
and must be used for your file name.

#### Add to Index
1. open app/index.html
2. scroll to the very bottom
3. following the existing pattern, add a reference for the data file you just created  
<!-- RLO ## -->  
<script src="scripts/data/RLO##.js"></script>

#### Load in main.js
1. open app/scripts/main.js
2. Find the loadData function (line 52)
3. Follow the pattern to add the new lesson.  
For example if you added RLO3:  
m  =  new scope.Models.RLOModel(OER.data.RLO3, {parse: true, viewPath: "RLO3"});  
this.RLOs.add(m);  
OER.data.RLO3 is the namespace you set in your data (Add data step 4), 
and viewPath is the folder name for your templates (Add content step 2)
4. Note that lessons tile in the webpage in the same order they are added here.

#### Add any needed view code
Views are programmatically generated for the templates you create at runtime, 
but if you need a view to do something more interesting (such as an interaction) 
you will need to create a new view.
For instructions on how to add a new view, see app/scripts/views/HowToAddRLOView.md




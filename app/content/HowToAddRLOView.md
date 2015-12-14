### How To Add an RLO to this project
1. Add new file

2. Edit file

3. Add to Index

#### Add new file
1. GoTo app/content/[yourRLO]/views
2. copy app/scripts/views/RLOTemplate/Row0_Col0.js into the new folder as a starting point.
3. renamed the copied file to match the template file it is associated with, for example Row0_Col3
4. Open the file in an editor

5. Change line 2, replacing RLORoute with the route property of the related data file  
OER.Views.MoreParticles = OER.Views.MoreParticles || {};

6. change line 7, replace RLORoute with the route property of the related data file, as above,
and changing the NavCardRoute with the route property of related entry in contentMapData.  
```
OER.Views.MoreParticles.MakeAParty = Backbone.View.extend({
```

7. change line 9 to reference the related template file  
template: JST['app/content/RLO3/templates/Row0_Col3.ejs'],

8. You can now add new behaviors.  This is a backbone.js view, to learn more about
what that means check out http://backbonejs.org/#View

#### Add to Index
1. open app/index.html
2. scroll to the very bottom
3. following the existing pattern, add a reference for the view file you just created
above the related data file
```
<!-- RLO 3 -->  
<script src="content/RLO3/views/Row0_Col3.js"></script>
```
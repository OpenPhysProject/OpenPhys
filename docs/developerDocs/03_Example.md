### Example
This is an example of how to find files to make changes.  
For example to change the size of the tiles on the first page, where should we start?  

#### Where to Start
Given what we know about naming, we know this is called LessonTile. Next, 
consider what type of thing we want to change. Size relates to appearance, 
so we look for a sass file with LessonTile in the name.

#### Finding the files
Looking in app/style folder, this isn't a control or setting, so we look in views folder. 
There we see only one file with that naming, LessonTileView.scss. There are a lot 
of classes in that file, so which do we change?

#### What to change
There are 2 ways to figure out what to change.  

1. Run grunt serve, the right click on a tile and choose inspect element. This 
opens the dev tools and lets us inspect the html elements.
2. Alternately, we can look in the scripts/templates folder where we will find 
LessonTileView.ejs. We'll have to cross reference classes here with the sass file.  

Using either approach, we will find that the size (width) is set on the top level div with 
class lesson-tile. Although it's not obvious without knowledge of css, height is 
set on the div with class lesson-tile-inner using margin-top.

#### Making changes
The final step is to adjust these values and test using grunt serve.  

####Back to Top
[developerDocs](https://github.com/OpenPhysProject/OpenPhys/blob/master/docs/developerDocs/README.md)
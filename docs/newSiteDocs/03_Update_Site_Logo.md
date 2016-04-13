### Update Site Logo
Replace Logo and related intro tile text
Most of the following steps can be done by your IT department, 
but you will need to design a logo and background.

####Replace Logo
Replace the OpenPhys logo with your own logo.  
In the app/content/logo folder, replace the following files with your own graphics:  
logo-icon.svg (image),  
logo-tagline.svg (online learning tag),  
logo-wordmark.svg (OpenPhys name)  
If you do not want one of the 3 aspects of the logo (icon, wordmark, or tagline),
 you can remove them from app/index.html in <div class=”logo”> starting at line 19.  

####Update First Page Text (Intro and Outro Tiles)
There are two special tiles on the front page. They must exist, but you can change the content. 

Intro Tile: the very first tile on the website main page (contains logo and very basic instructions)  
Outro Tile: the very last tile (it contains information such as the Licence and contact info). 

Find the Intro and Outro tiles in app/index.html in <div class=”lesson-view-container”> starting at line 36.  
They are html div elements labeled with the classes intro-tile and outro-tile.  
Replace the text inside of the lesson-tile-intro-title and lesson-tile-intro-content.  
You can include more than one pairing of title and content, but keep in mind that space for this content is
 limited.  
Replace all instances of lesson-tile-outro-title and lesson-tile-outro-content with text suitable to your site.   
Intro and Outro tiles will expand to fit all content included.  
Keep this in mind when adding content to them, as the site will start to look broken if the tiles are long  .

####Next Doc
[Google Analytics](https://github.com/OpenPhysProject/OpenPhys/blob/master/docs/newSiteDocs/04_Google_Analytics.md)

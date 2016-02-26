// data files like this one need to be loaded in app/index.html
(function (scope) {
    var s = {};
    
    s.title = "Title For Your Lesson Goes Here";            // the title that is shown on the main page lesson tile
    s.preview = "/content/sample/assets/logo-icon.svg";    //svg image that is shown on the main page lesson tile
    s.route = "sampleLesson";       //Url shown when you click on lesson tile and can be used as a link, for example this would be http://openphys.med.ualberta.ca/sampleLesson
    s.primaryPathIndex = 0;         // where in contentMapData the primary lesson path, which starts counting at 0.  This gives the user a clear starting point
    s.jumpNav = false;              // determines if you can navigate left and right across gaps in the map, default is false
    s.horizontalLinks = OER.linkType.none,  // navigation map horizontal links, can be overwritten by MapCardCollection.horizontalLinks and MapCardModel.linkLeft, default is none
    s.verticalLinks = OER.linkType.weak,   // navigation map vertical links, can be overwritten by MapCardModel.linkTop, default is weak links
    s.numberConnector =  ".",       // connecting character for page numbering, ie 200.3, default is .
    s.rowLeadNumber =  null,        // number to give to first row in content map, ie 100
    s.rowIncrement =  null,         // amount to increment row by for each row, ie 100
    s.colLeadNumber =  null,        // number to give first column in content map, ie 1
    s.colIncrement =  null,         // amount to increment each column by, ie 1
    
    // contentMapData is a collection of paths or pages shown horizontally in map view.
    // a path will show pages left to right in the same order they are listed here, and is meant to represent progress through a lesson
    // paths above another path are meant to show simplier related information, but can also indicate progress horizontally
    // paths below another path are meant to show more difficult related information, but can also indicate progress horizontally
    s.contentMapData = [
    // index 0
        {
            mapCards: [
                {   title:"sample page",    // title  shown on navigation cards in map view
                    route:"samplePage"      // url shown when visiting this page, which can be used as a link.  For example this would be http://openphys.med.ualberta.ca/sampleLesson/samplePage
                },
                {   title:"sample quiz", route:"sampleQuiz" },
                // more pages can be added to this path by adding more entries with {title, route},
                // {title:"", route:""} creates an empty gap in the 2D mapView
            ],
        },
        // more paths can be added to this lesson by adding an object with a mapCards array of pages [{title, route}, {title, route}]
    ];

    scope.sample = s;  // this is the name we give the data in our project so we can reference it in app/scripts/main.js loadData function

}(window.OER.data = window.OER.data || {}));

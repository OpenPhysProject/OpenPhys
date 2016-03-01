// data files like this one need to be loaded in app/index.html
(function (scope) {
    var s = {};
    
    s.title = "Title For Your Lesson Goes Here";            // [default = ""] the title that is shown on the main page lesson tile
    s.preview = "/content/sample/assets/logo-icon.svg";    // [default = ""] svg image that is shown on the main page lesson tile
    s.route = "sampleLesson";       // [default = ""] Url shown when you click on lesson tile and can be used as a link, for example this would be http://openphys.med.ualberta.ca/sampleLesson
    s.primaryPathIndex = 0;         // [default = null] where in contentMapData the primary lesson path, which starts counting at 0.  This gives the user a clear starting point
    s.jumpNav = false;              // [default = false] determines if you can navigate left and right across gaps in the map
    s.horizontalLinks = OER.linkType.none,  // [default = none] [OER.linkType.weak|strong|none] navigation map horizontal links, can be overwritten by MapCardCollection.horizontalLinks and MapCardModel.linkLeft
    s.verticalLinks = OER.linkType.weak,   // [default = weak] [OER.linkType.weak|strong|none] navigation map vertical links, can be overwritten by MapCardModel.linkTop
    s.numberConnector =  ".",       // [default = "."] connecting character for page numbering, ie 200.3
    s.rowLeadNumber =  null,        // [default = null] number to give to first row in content map, ie 100
    s.rowIncrement =  null,         // [default = null] amount to increment row by for each row, ie 100
    s.colLeadNumber =  null,        // [default = null] number to give first column in content map, ie 1
    s.colIncrement =  null,         // [default = null] amount to increment each column by, ie 1
    
    /** contentMapData is a collection of paths or pages shown horizontally in map view.
    *   a path will show pages left to right in the same order they are listed here, and is meant to represent progress through a lesson
    *   paths above another path are meant to show simplier related information, but can also indicate progress horizontally
    *   paths below another path are meant to show more difficult related information, but can also indicate progress horizontally
    */
    s.contentMapData = [
    // index 0
        {
            // if defined, horizontalLinks will override linkTypes set on lesson above
            //horizontalLinks: null,  // [default = null] [OER.linkType.weak|strong|none]  horizontal links between nodes, can be overridden by MapCards.linkLeft
            startNode:       false, // [default = false] show start node in navigation Map before first map card
            endNode:         false, // [default = false] show end node in navigation map after last map card
            rowNumberLabel:  null,  // [default = null] number to give this row in content map, ie 100 or "A"

            // collection of mapCards, each representing a card or a gap on the navigation map
            mapCards: [
                {   
                    title:"sample page",    // title  shown on navigation cards in map view, supports \n for new lines
                    route:"samplePage",     // url shown when visiting this page, which can be used as a link.  For example this would be http://openphys.med.ualberta.ca/sampleLesson/samplePage
                    number: "",     // [default = ""] number of content page, ie 100.1 or "A_1", if not defined can be calculated by MapCardCollection.rowNumberLabel or LessonModel.rowLeadNumber and related values
                    group:  "",     // [default = ""] used to show a relation between various mapCards/content pages
                    icons:  [],     // [default = []] [options = ["quiz", "interaction", "video"]] used to show icons on mapCard that indicate specific content types, currently supports a visual max of 2
                    // if defined, linkLeft and linkTop will override linkTypes set on MapCardCollection or lesson above
                    //linkLeft: null,    // [default = null] [OER.linkType.weak|strong|none] show this type of link to the left of this card in navigation map view
                    //linkTop:  null,    // [default = null] [OER.linkType.weak|strong|none] show this type of link on the top of this card in navigation map view
                    template: null, // [default = null] ejs template file name, if not used this value will default to row and col of 2d mapping, ie Row0_Col0.ejs
                },
                {   title:"sample quiz", route:"sampleQuiz", icons:["quiz"] },
                // more pages can be added to this path by adding more entries with {title, route},
                // {title:"", route:""} creates an empty gap in the 2D mapView
            ],
        },
        // more paths can be added to this lesson by adding an object with a mapCards array of pages [{title, route}, {title, route}]
    ];

    scope.sample = s;  // this is the name we give the data in our project so we can reference it in app/scripts/main.js loadData function

}(window.OER.data = window.OER.data || {}));

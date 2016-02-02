// data files like this one need to be loaded in app/index.html
(function (scope) {
    var s = {};
    
    s.title = "Title For Your Lesson Goes Here";    // the title that is shown on the main page lesson tile
    s.preview = "/content/sample/assets/logo-icon.svg";    //svg image that is shown on the main page lesson tile
    s.route = "sampleLesson"; //Url shown when you click on lesson tile and can be used as a link, for example this would be http://openphys.med.ualberta.ca/sampleLesson
    s.primaryPathIndex = 0; // where in contentMapData the primary lesson path, which starts counting at 0.  This gives the user a clear starting point
    
    // contentMapData is a collection of paths or pages shown horizontally in map view.
    // a path will show pages left to right in the same order they are listed here, and is meant to represent progress through a lesson
    // paths above another path are meant to show simplier related information, but can also indicate progress horizontally
    // paths below another path are meant to show more difficult related information, but can also indicate progress horizontally
    s.contentMapData = [
    // index 0
        [
            {   title:"sample page",    // title  shown on navigation cards in map view
                route:"samplePage"      // url shown when visiting this page, which can be used as a link.  For example this would be http://openphys.med.ualberta.ca/sampleLesson/samplePage
            },
            {   title:"sample quiz", route:"sampleQuiz" },
            // more pages can be added to this path by adding more entries with {title, route},
            // {title:"", image:"", route:""} creates an empty gap in the 2D mapView
        ],
        // more paths can be added to this lesson by adding an array with pages [{title, route}, {title, route}]
    ];

    scope.sample = s;  // this is the name we give the data in our project so we can reference it in app/scripts/main.js loadData function

}(window.OER.data = window.OER.data || {}));

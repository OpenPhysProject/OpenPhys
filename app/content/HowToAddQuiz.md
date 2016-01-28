### How To Add a quiz to content
1. Edit existing file

2. Add Question

3. Add Answer Options

4. Add Reveal

5. Add Answer

6. Add Reset Button

#### Add new file
1. You will find an example quiz in the app/content/sample/views/Row0_Col1.js, which can be copied as a starting point.
1. Create or edit a content template file.
2. You do not need to create a view, as quiz code is handled by the default view.

#### Add Question
1. Add an html element with the class lesson-content-question
```
<div class="lesson-content-question">Q1) In what year did Einstein invent Special Relativity?
```

#### Add Answer Options
1. For true and false or multiple choice questions, add an html element with the
 class lesson-content-question-option and a data-answer property of true or false.
```
<button type="button" class="lesson-content-question-option" data-answer="true">1905</button>
```

#### Add Reveal
1. For questions that simply reveal the answer, add an html element with the
 class lesson-content-question-reveal and a data-answer property that is the text
to be revealed.
```
<button class="lesson-content-question-reveal" type="button" data-answer="Lighter"> Answer </button>
````

#### Add Answer
1. By default, the answer will be shown next to the Reveal or Answer Option 
elements.  If you want more control over how the answer is shown, add an html 
element with  the class lesson-content-question-answer and this is where the 
answer will be shown.
```
<span class="lesson-content-question-answer">  _____________</span>
```

#### Add Reset Button
1. if you want to be able to reset the quiz, add an html element with the class
lesson-content-quiz-reset and when clicked, it will reset the page.
```
<button type="button" class="lesson-content-quiz-reset"> RESET QUIZ </button>
```
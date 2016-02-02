OER.Views = OER.Views || {};
OER.Views.LessonRoute = OER.Views.LessonRoute || {};

(function () {
    'use strict';

    /**
     * Row0_Col0 is the default view used to create new views by content creators.
     * See content/HowToAddLessonCode.md for more details
     * 
     * @class Row0_Col0
     * @constructor
    */
    // change LessonRoute and MapCardRoute to match your data
    OER.Views.LessonRoute.MapCardRoute = Backbone.View.extend({

        /**
         *  template that provides html for this view.  This should be changed to
         *  match the template from your data
         *  @property template
         */
        template: JST['app/content/lessonX/templates/Row0_Col0.ejs'],

        // can be used to set up event handling on html from template
        // see http://backbonejs.org/ to learn more
        events: {},
        
        /**
         * setup view
         * @param {backbone Model} model
         * @method initialize
         */
        initialize: function (model) {
            if (model) { this.model = model; }
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        /**
         * create the related html using the template and model
         * @method render
         */
        render: function () {
            if(this.model) {
                this.setElement(this.template(this.model.toJSON()));
            } else {
                this.setElement(this.template());
            }
            
            // check for quiz questions
            var answers = $(".lesson-content-question-option", this.$el);
            answers.on("click", this.handleAnswer.bind(this));
            
            var reveals = $(".lesson-content-question-reveal", this.$el);
            reveals.on("click", this.handleReveal.bind(this));
            
            var reset = $(".lesson-content-quiz-reset", this.$el);
            reset.on("click", this.handleQuizReset.bind(this));
        },
        
        /**
         * handle an answer being clicked
         * @method handleAnswer
         * @param {jquery event} event
         */
        handleAnswer: function(event){
            var answer = event.currentTarget.dataset.answer == "true";
            if (answer) {
                answer = "  Yes";
            } else {
                answer = "  No";
            }
            
            var question = this.findQuestionDiv(event.currentTarget);
            var target = $(".lesson-content-question-answer", question)[0];
            if (target) {
                target.innerHTML = answer;
            } else {
                event.currentTarget.insertAdjacentHTML("afterend", answer);
            }
        },
        
        /**
         * handle a reveal being clicked
         * @method handleReveal
         * @param {jquery event} event
         */
        handleReveal: function(event) {
            var answer = event.currentTarget.dataset.answer;
            var question = this.findQuestionDiv(event.currentTarget);
            var target = $(".lesson-content-question-answer", question)[0];
            if (target) {
                target.innerHTML = "  " + answer;
            } else {
                event.currentTarget.insertAdjacentHTML("afterend", "  " + answer);
            }
        },
        
        /**
         * search up node tree until we find containing qeustion
         * @method findQuestionDiv
         * @param {jquery event} event
         */
        findQuestionDiv: function(element) {
            var question = element.parentNode;
            while(!$(question).hasClass("lesson-content-question")) {
                question = question.parentNode;
            }
            return question;
        },
        
        /**
         * render view and reset
         * @method handleQuizReset
         * @param {jquery event} event
         */
        handleQuizReset: function(event) {
            this.remove();
            this.render();
            this.trigger("update");
        },
        
    });

})();

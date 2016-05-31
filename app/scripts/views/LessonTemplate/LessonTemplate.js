OER.Views = OER.Views || {};

(function () {
    'use strict';

    /**
     * LessonTemplate is the default view used by all content that does not require
     * extra behavior.  These are automatically created.
     * 
     * @class LessonTemplate
     * @constructor
    */    
    OER.Views.LessonTemplate = {

        // template that provides html for this view.  This is reset when the default views are generated.
        template: JST['app/scripts/templates/LessonTemplate/Row0_Col0.ejs'],

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
            
            
            // Code for Definition reveal: (doesnt work here, so far)
            //$("#definition1").hide();
           // $(".definition").hide(); // try it this way. nope.
            
          //  var definitionVar = $(".term", this.$el);
           // definitionVar.on("click", this.handleDefinitionClick.bind(this));
            
           // $("#term1").click(function(){
            //    $("#definition1").toggle(200);
            //    });
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
            
            var target = $(".lesson-content-question-answer.insert", event.currentTarget.parentNode)[0];
            if (!target) {
                var question = this.findQuestionDiv(event.currentTarget);
                var target = $(".lesson-content-question-answer:not(.insert)", question)[0];
            }
            if (target) {
                target.innerHTML = answer;
            } else {
                event.currentTarget.insertAdjacentHTML("afterend", '<span class="lesson-content-question-answer insert">'+ answer + '</span>');
            }
        },
        
        /**
         * handle a reveal being clicked
         * @method handleReveal
         * @param {jquery event} event
         */
        handleReveal: function(event) {
            var answer = event.currentTarget.dataset.answer;
            var target = $(".lesson-content-question-answer.insert", event.currentTarget.parentNode)[0];
            if (!target) {
                var question = this.findQuestionDiv(event.currentTarget);
                var target = $(".lesson-content-question-answer:not(.insert)", question)[0];
            }
            if (target) {
                target.innerHTML = "  " + answer;
            } else {
                event.currentTarget.insertAdjacentHTML("afterend", '<span class="lesson-content-question-answer insert">  ' + answer + '</span>');
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

    };

})();

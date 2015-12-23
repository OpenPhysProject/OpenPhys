OER.Views = OER.Views || {};

(function () {
    'use strict';

    /**
     * RLOTemplate is the default view used by all content that does not require
     * extra behavior.  These are automatically created.
     * 
     * @class RLOTemplate
     * @constructor
    */    
    OER.Views.RLOTemplate = {

        // template that provides html for this view.  This is reset when the default views are generated.
        template: JST['app/scripts/templates/RLOTemplate/Row0_Col0.ejs'],

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
            var answers = $(".rlo-content-question-option", this.$el);
            answers.on("click", this.handleAnswer.bind(this));
            
            var reveals = $(".rlo-content-question-reveal", this.$el);
            reveals.on("click", this.handleReveal.bind(this));
        },
        
        /**
         * handle an answer being clicked
         * @method handleAnswer
         * @param {jquery event} event
         */
        handleAnswer: function(event){
            console.log("answer clicked", event);
            var answer = event.currentTarget.dataset.answer == "true";
            if (answer) {
                answer = "  Yes";
            } else {
                answer = "  No";
            }
            
            var question = this.findQuestionDiv(event.currentTarget);
            var target = $(".rlo-content-question-answer", question)[0];
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
            console.log("answer clicked", event);
            var answer = event.currentTarget.dataset.answer;
            var question = this.findQuestionDiv(event.currentTarget);
            var target = $(".rlo-content-question-answer", question)[0];
            if (target) {
                target.innerHTML = "  " + answer;
            } else {
                event.currentTarget.insertAdjacentHTML("afterend", "  " + answer);
            }
        },
        
        /**
         * 
         * @param {jquery event} event
         */
        findQuestionDiv: function(element) {
            var question = element.parentNode;
            while(!$(question).hasClass("rlo-content-question")) {
                question = question.parentNode;
            }
            return question;
        },

    };

})();

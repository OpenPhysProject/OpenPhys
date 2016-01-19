OER.Views = OER.Views || {};
OER.Views.Instructions = OER.Views.Instructions || {};

(function () {
    'use strict';

    /**
     * Row0_Col0 is the default view used to create new views by content creators.
     * See content/HowToAddRLOView.md for more details
     * 
     * @class Row0_Col0
     * @constructor
    */
    // change RLORoute and NavCardRoute to match your data
    OER.Views.Instructions.Logo = Backbone.View.extend({

        /**
         *  template that provides html for this view.  This should be changed to
         *  match the template from your data
         *  @property template
         */
        template: JST['app/content/Intro/templates/Row0_Col3.ejs'],

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
            
            var inlineLogo = $(".logo", this.$el);
            inlineLogo.on("click", this.handleLogoClick.bind(this));
            
            // check for quiz questions
            var answers = $(".rlo-content-question-option", this.$el);
            answers.on("click", this.handleAnswer.bind(this));
            
            var reveals = $(".rlo-content-question-reveal", this.$el);
            reveals.on("click", this.handleReveal.bind(this));
            
            var reset = $(".rlo-content-quiz-reset", this.$el);
            reset.on("click", this.handleQuizReset.bind(this));
        },
        
        /**
        * when logo is clicked, route to homeView
        * @method handleLogoClick
        */
        handleLogoClick: function (){
          OER.router.go();  
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
         * search up node tree until we find containing qeustion
         * @method findQuestionDiv
         * @param {jquery event} event
         */
        findQuestionDiv: function(element) {
            var question = element.parentNode;
            while(!$(question).hasClass("rlo-content-question")) {
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

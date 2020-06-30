
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans,callback) {
        var sc=0;
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc=callback(true);
        } else {
            console.log('Wrong answer. Try again :)')
            sc=callback(false)
        }
        this.displayScore(sc);
    }
    Question.prototype.displayScore=function(score){
        console.log('Your score is '+ score);
        console.log('-----------------------------------');

    }
    var q1 = new Question('Is IET the best chapter in vit ?',
                          ['Yes', 'No'],
                          0);
    var q2 = new Question('Captain of indian cricket team?',
                          ['rahul', 'virat', 'rohit'],
                          2);
    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);
    var questions = [q1, q2, q3];

    function Score(){
        var sc=0
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }
    var keepScore =  Score()
    function nextQestion(){
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        

        if(answer!== 'exit'){

            questions[n].checkAnswer(parseInt(answer),keepScore);

            nextQestion();
        }
        
    }
    nextQestion();
    
  
    
    
    



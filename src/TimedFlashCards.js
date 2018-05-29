export class TimedFlashCards{
  constructor (questionId, correctAnswer ){
    this.questionId=questionId;
    this.correctAnswer=correctAnswer;
  }

  getQuestionId(){
    return this.questionId;
  }

  getCorrectAnswer(){
    return this.correctAnswer;
  }
}

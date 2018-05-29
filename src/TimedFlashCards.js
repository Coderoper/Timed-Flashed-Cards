export class TimedFlashCards{
  constructor (orderId, correctAnswer, prompt, choiceA, choiceB, choiceC, choiceD){
    this.orderId=orderId;
    this.correctAnswer=correctAnswer;
    this.prompt=prompt;
    this.choiceA=choiceA;
    this.choiceB=choiceB;
    this.choiceC=choiceC;
    this.choiceD=choiceD;
  }

  getOrderId(){
    return this.orderId;
  }

  getCorrectAnswer(){
    return this.correctAnswer;
  }

}
// var questions={
//   question1 : {"What type of language is Javascript"}
//
// }

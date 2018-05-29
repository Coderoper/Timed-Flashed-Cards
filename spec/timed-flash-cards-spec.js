import { TimedFlashCards} from './../src/TimedFlashCards.js';

describe ('TimedFlashCards', function(){
  it ('tests that it compiles', function(){
    var myFlashCard = new TimedFlashCards(1, "A");
    expect(myFlashCard.getQuestionId()).toEqual(1);
  });
});

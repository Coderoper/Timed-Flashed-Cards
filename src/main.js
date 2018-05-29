import $ from 'jquery';
import { TimedFlashCards} from './TimedFlashCards.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

$(document).ready(function(){
  var question1=new TimedFlashCards(1, "A", "What is Austin's real name?", "David", "Jim", "Bob", "Joe");
  $("#questionPrompt").text(question1.prompt);
  $("#choiceA").text(question1.choiceA);
  $("#choiceB").text(question1.choiceB);
  $("#choiceC").text(question1.choiceC);
  $("#choiceD").text(question1.choiceD);

  $('form#questionForm').submit(function(event){
    $('#questionForm').hide();
    event.preventDefault();
    var choice=$('input:radio[name=choice]:checked').val();
    if (choice==question1.correctAnswer){
      $('#congrats').toggle();
      $('#nextButton').show();
    }
    else {
      $('#failure').toggle();
      $('#nextButton').show();
    }
  });

  $('#nextButton').click(function(){
    $('#questionForm').show();
    $('#nextButton').hide();
    $('#congrats').hide();
    $('#failure').hide();
  });

});

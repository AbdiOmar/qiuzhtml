var score = 0; //set variable score to 0

var total = 5; //set total to 5 questions

var point = 1 ; // set point to 1  points per correct answer

var hihgest = total * point; // set to get the correct results


// initializer

function init(){
  // set correct answers
sessionStorage.setItem('a1','c');
sessionStorage.setItem('a2','c');
sessionStorage.setItem('a3','d');
sessionStorage.setItem('a4','a');
sessionStorage.setItem('a5','a');

}






$(document).ready(function(){
  // hide all questions
  $('.questionForm').hide();

  // show first question
  $('#q1').show();

  $('#q1 #submit').click(function(){
      $('.questionForm').hide();
      process('q1');
      $('#q2').fadeIn(150);
      return false;

  });
  $('#q2 #submit').click(function(){
      $('.questionForm').hide();
      process('q2');
      $('#q3').fadeIn(150);
      return false;

  });
  $('#q3 #submit').click(function(){
      $('.questionForm').hide();
      process('q3');
      $('#q4').fadeIn(150);
      return false;

  });
  $('#q4 #submit').click(function(){
      $('.questionForm').hide();
      process('q4');
      $('#q5').fadeIn(150);
      return false;

  });
  $('#q5 #submit').click(function(){
      $('.questionForm').hide();
      process('q5');
        $('#results').fadeIn(150);
      return false;

  });
});

//process corrects answers
function process(q){
if(q == "q1"){
  var submitted = $('input[name=q1]:checked').val();
  if(submitted == sessionStorage.a1){
    score++;
  }
}
if(q == "q2"){
  var submitted = $('input[name=q2]:checked').val();
  if(submitted == sessionStorage.a2){
    score++;
  }
}
if(q == "q3"){
  var submitted = $('input[name=q3]:checked').val();
  if(submitted == sessionStorage.a3){
    score++;
  }
}
if(q == "q4"){
  var submitted = $('input[name=q4]:checked').val();
  if(submitted == sessionStorage.a4){
    score++;
  }
}
if(q == "q5"){
  var submitted = $('input[name=q5]:checked').val();
  if(submitted == sessionStorage.a5){
    score++;
  }
 $('#results').html('<h3>Your Final Score is: '+score+' out of 5</h3><a href="index.html">Take The Quiz Again</a>');

}
return false;

}


// add event addEventListener
window.addEventListener('load',init,false);

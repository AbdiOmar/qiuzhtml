var score= 0; // variable score set to 0

var total=5; // total number of Questions

var point=1; // points per correct answer

var hieghest= total * point; /// total points

     // initializer

function init(){
  // set correct answers here:
  sessionStorage.setItem('a1','c');
  sessionStorage.setItem('a2','c');
  sessionStorage.setItem('a3','d');
  sessionStorage.setItem('a4','a');
  sessionStorage.setItem('a5','a');
}





$(document).ready(function(){


  //Hide all questions

  $('.questionForm').hide();

  //show first question
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
    $('#q5').fadeIn(150);
    return false;

  });

});

// process the answers

function('q'){
if(q == "q1") (
  var submitted == $('input (name = q1):checked').val();
  if (submitted == sessionStorage.a1)(
    score++;
  )
)

if(q == "q2") (
  var submitted == $('input (name = q2):checked').val();
  if (submitted == sessionStorage.a2)(
    score++;
  )
)

if(q == "q3") (
  var submitted == $('input (name = q3):checked').val();
  if (submitted == sessionStorage.a3)(
    score++;
  )
)

if(q == "q4") (
  var submitted == $('input (name = q4):checked').val();
  if (submitted == sessionStorage.a4)(
    score++;
  )
)

if(q == "q5") (
  var submitted == $('input (name = q5):checked').val();
  if (submitted == sessionStorage.a5)(
    score++;
  )
  $('#results').html('<h3>Your final score is: '+score+' out of 5</h3><a href ="index.html">Take Take Quiz again</a>');
)

}

// add an event addEventListener

window.addEventListener('load',init,false);

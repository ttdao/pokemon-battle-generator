//dying on the inside e
$(document).ready(function() {

$('.start-button').click(function(e) {
  e.preventDefault();
  var nameInput1 = $('#user-input1').val();
  var nameInput2 = $('#user-input2').val();
  var betInput = $('#bet').val();
  var $area = $('<h2>' + nameInput1 + ' vs ' + nameInput2 + '</h2>');
  var $area2 = $('<p>' + betInput + '</p>');
  if (nameInput1 === '' && nameInput2 === '' && betInput === '') {
    alert("You must fill out all boxes!");
  } 
    else if($(".user-inputs").find("h2").text()=== '')
  {
      $('.user-inputs').append($area);
      $('#user-input1').val('');
      $('.user-inputs').append($area2);
      $('#user-input2').val('');
      $('#bet').val('');
  }
  else {   
    $('.user-inputs').html($area);
    $('.user-inputs').append($area2);
    $('#user-input1').val('');    
    $('#user-input2').val('');
    $('#bet').val('');
  }
    gamePlay();
    results();
});
});

function gamePlay() { //outer most function to contain the whole game

/////// RUNS IMMEDIATELY ////////
var pkmnUser1 = {
  id: rollPkmn(),
  moves: [],
  num_moves: 0,
  name: "",
  image: "",
  move: "",
  movePower: 0,
  moveAccuracy: 0
};

var pkmnUser2 = {
  id: rollPkmn(),
  moves: [],
  num_moves: 0,
  name: "",
  image: "",
  move: "",
  movePower: 0,
  moveAccuracy: 0
};

var pokemon = [pkmnUser1, pkmnUser2];

pokemon.forEach(function(pokemon) {

  getPkmn(pokemon);
  getPkmnMoves(pokemon);
  getPkmnImage(pokemon);
});

// console.log(pokemon); 
}

///////////// FUNCTION DEFINTIONS ///////

function rollPkmn() {
  var result = Math.floor((Math.random() * 151) + 1);
  return result;
}


function getPkmn(pokemon) {
  $.get('http://pokeapi.co/api/v2/pokemon/' + pokemon.id, function(response) {
    getPkmnCallBack(response, pokemon);
  })
}

function getPkmnCallBack(response, pokemon) {
  pokemon.image = response.sprites.front_default
  pokemon.name = response.name
}

// function showPokemonName(pokemon){
// $(".pokeball").attr("src","pokemon.name");
// }
// function showPokemonMove(pokemon){
// $(".pokeball").attr("src","pokemon.move");
// }
function getPkmnImage(pokemon){
  $(".pokeball").after('<img>' + pokemon.image + '</img>');
  $(".pokeball").after('<h2>' + pokemon.name + '</h2>');
  $(".pokeball").after('<p>' + pokemon.move + '</p>');
} //work on this again. using .after

function getPkmnMoves(pokemon) {
  $.get('http://pokeapi.co/api/v2/pokemon/' + pokemon.id, function(response) {
    getPkmnMovesCallBack(response, pokemon);
  })

};

function getPkmnMovesCallBack(response, pokemon) {

  response.moves.forEach(function(pokeMove) {
    pokemon.moves.push(pokeMove.move.name)
  })

  // pokemon.moves = response.moves.map(function(pokeMove) {
  //     return pokeMove.move.name; 
  // })

  pokemon.num_moves = response.moves.length;

  rollMove(pokemon.moves, pokemon);
};


function rollMove(moveList, pokemon) {
  var last = moveList.length - 1;
  var moveRoll = Math.floor((Math.random() * last) + 1);
  moveCallBack(moveList[moveRoll], pokemon);
}

function moveCallBack(move, pokemon) {
  $.get('http://pokeapi.co/api/v2/move/' + move, function(response) {
    pokemon.move = response.name;
    pokemon.movePower = response.power || 0;
    pokemon.moveAccuracy = response.accuracy || 0;
  compareStat(pokemon[0].movePower,pokemon[1].movePower);
  compareStat(pokemon[0].moveAccuracy, pokemon[1].moveAccuracy);
   });
}



function compareStat(userOneStat, userTwoStat) {
  var nameScore1 = 0;
  var nameScore2 = 0;
  if (userOneStat === userTwoStat) {
    nameScore1++;
    nameScore2++;
  } else if (nameScore1 > nameScore2) {
    nameScore1++;
  } else {
    nameScore2++;
  }
}


 function results() {
   var nameScore1 = 0;
   var nameScore2 = 0;
   while (nameScore1 || nameScore2 <= 2)
   {
     if (nameScore1 > nameScore2) {
     var name1 = $('#user-input1').val();
     $('.user-inputs').append('<h2>' + name1 + ' wins the bet!</h2>');
   } else if (nameScore1 < nameScore2){
     var name2 = $('#user-input2').val();
     $('.user-inputs').append('<h2>' + name2 + ' wins the bet!</h2>');
   } else {
     alert("So close! Try again!");
   } 
   }
 }
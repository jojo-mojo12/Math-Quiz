var player1_score = 0; 
var player2_score = 0; 

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

var answer_turn = "player_2"; 
var question_turn = "player_1";

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name  + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById( "player2_score" ).innerHTML = player2_score ;

document.getElementById("player_question").innerHTML  = "Question turn - " +  player1_name ;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name;


function send()
{
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) + parseInt(number2);
    console.log(actual_answer);

    question_number = "<h4 float = 'left' id = 'question'>" + number1 + " X " + number2 + "</h4>";
    input_box = "<label>Answer:</label><br><input type = 'text' id = 'input_check_box' placeholder = 'Enter your answer here...'><i class='bx bxs-badge-check' style = 'font-size:20px'></i><br> <br>";
	check_button  = "<center><button id = 'subbtn' onclick = 'check()' class = 'btn btn-danger'> Submit <i class='bx bxs-check-square'style = 'font-size:20px'></i></button></center>";		
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "" ;
    document.getElementById("fun_quote").innerHTML = ""; 
}



function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer===actual_answer){
        if (answer_turn == "player_1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }

        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }       
    }

    if  (question_turn=="player_1")
    {
        question_turn ="player_2";
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;
    }
    else
    {
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML  = "Question turn - " +  player1_name ;
    }

    if (answer_turn == "player_1")
    {
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML  = "Answer turn - " + player2_name;
    }
    else {
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "<center><label id = 'fun_quote'>Time to exercise those brain cells! What's your challenge for your friend?</label></center>";

}

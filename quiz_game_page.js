player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name  + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById( "player2_score" ).innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - "+ player2_name;

function send()
{
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) + parseInt(number2);
    question_number = "<h4 float = 'left' id = 'question'>" + number1 + " X " + number2 + "</h4>";
    input_box = "<label>Answer:</label><br><input type = 'text' id = 'ansbox' placeholder = 'Enter your answer here...'><i class='bx bxs-badge-check' style = 'font-size:20px'></i><br> <br>";
	check_button  = "<center><button id = 'subbtn' onclick = 'check()' class = 'btn btn-primary'> Submit <i class='bx bxs-check-square'style = 'font-size:20px'></i></button></center>";		
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "" ;
}
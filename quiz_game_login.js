function addName()
{
   var username1 = document.getElementById("input1").value;
   var username2 = document.getElementById("input2").value;
   localStorage.setItem("name1",username1);
   localStorage.setItem("name2",username2);
   window.location = "quiz_game_page.html";
   }
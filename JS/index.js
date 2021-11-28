var flag = true;

function boardStatus()
{
  var board = "";
  if($(".tl").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".tl").text();
  }

  if($(".tm").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".tm").text();
  }

  if($(".tr").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".tr").text();
  }

  if($(".ml").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".ml").text();
  }

  if($(".mm").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".mm").text();
  }

  if($(".mr").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".mr").text();
  }

  if($(".bl").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".bl").text();
  }

  if($(".bm").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".bm").text();
  }

  if($(".br").text() === "")
  {
    board += "-";
  }
  else
  {
    board += $(".br").text();
  }

  return board;
}

function winOrLose(board)
{
  if(board.charAt(0) !== "-" && board.charAt(0) === board.charAt(1) && board.charAt(0) === board.charAt(2))
  {
    return board.charAt(0);
  }
  else if(board.charAt(3) !== "-" && board.charAt(3) === board.charAt(4) && board.charAt(3) === board.charAt(5))
  {
    return board.charAt(3);
  }
  else if(board.charAt(6) !== "-" && board.charAt(6) === board.charAt(7) && board.charAt(6) === board.charAt(8))
  {
    return board.charAt(6);
  }
  else if(board.charAt(0) !== "-" && board.charAt(0) === board.charAt(3) && board.charAt(0) === board.charAt(6))
  {
    return board.charAt(0);
  }
  else if(board.charAt(1) !== "-" && board.charAt(1) === board.charAt(4) && board.charAt(1) === board.charAt(7))
  {
    return board.charAt(1);
  }
  else if(board.charAt(2) !== "-" && board.charAt(2) === board.charAt(5) && board.charAt(2) === board.charAt(8))
  {
    return board.charAt(2);
  }
  else if(board.charAt(0) !== "-" && board.charAt(0) === board.charAt(4) && board.charAt(0) === board.charAt(8))
  {
    return board.charAt(0);
  }
  else if(board.charAt(2) !== "-" && board.charAt(2) === board.charAt(4) && board.charAt(2) === board.charAt(6))
  {
    return board.charAt(2);
  }
  else if(board.charAt(0) !== '-' && board.charAt(1) !== '-' && board.charAt(2) !== '-' && board.charAt(3) !== '-' && board.charAt(4) !== '-' && board.charAt(5) !== '-' && board.charAt(6) !== '-' && board.charAt(7) !== '-' && board.charAt(8) !== '-')
  {
    return "XO";
  }

  return "-";

}

function minMax(board,turn)
{
  var v = winOrLose(board);
  if(v === "X")
  {
    return turn-10;
  }
  else if(v === "O")
  {
    return 10-turn;
  }
  else if(v === "XO")
  {
    return 0;
  }
  else
  {
    var mi = Infinity,ma = -Infinity,ind = -1;
    for(var i=0;i<board.length;i++)
    {
      if(board.charAt(i) === "-")
      {
        if(turn%2 === 0)
        {
          var b = board.slice(0,i)+"O"+board.slice(i+1,board.length);
          var s = minMax(b,turn+1);

          if(s < mi)
          {
            mi = s;
          }

          if(s > ma)
          {
            ma = s;
            ind = i;
          }
        }
        else
        {
          var b = board.slice(0,i)+"X"+board.slice(i+1,board.length);
          var s = minMax(b,turn+1);

          if(s < mi)
          {
            mi = s;
          }

          if(s > ma)
          {
            ma = s;
          }
        }
      }
    }

    if(turn%2 === 0)
    {
      if(turn == 0)
      {
        return ind;
      }
      return ma;
    }
    else
    {
      return mi;
    }
  }
}

function nextMove()
{
  var v = winOrLose(boardStatus());
  if(v === "X")
  {
    $("p").text("X WINS");
    flag = false;
  }
  else if(v === "O")
  {
    $("p").text("O WINS");
    flag = false;
  }
  else if(v === "XO")
  {
    $("p").text("DRAW");
    flag = false;
  }
  else
  {
    var ind = minMax(boardStatus(),0);

    if(ind === 0)
    {
      $(".tl").text("O");
    }
    else if(ind === 1)
    {
      $(".tm").text("O");
    }
    else if(ind === 2)
    {
      $(".tr").text("O");
    }
    else if(ind === 3)
    {
      $(".ml").text("O");
    }
    else if(ind === 4)
    {
      $(".mm").text("O");
    }
    else if(ind === 5)
    {
      $(".mr").text("O");
    }
    else if(ind === 6)
    {
      $(".bl").text("O");
    }
    else if(ind === 7)
    {
      $(".bm").text("O");
    }
    else if(ind === 8)
    {
      $(".br").text("O");
    }

    v = winOrLose(boardStatus());
    if(v === "X")
    {
      $("p").text("X WINS");
      flag = false;
    }
    else if(v === "O")
    {
      $("p").text("O WINS");
      flag = false;
    }
    else if(v === "XO")
    {
      $("p").text("DRAW");
      flag = false;
    }
  }
}

$(".tl").click(function(){
  if(flag === false)
  {
    location.href="/";
  }
  else if($(".tl").text() === "" )
  {
    $(".tl").text("X");
    nextMove();
  }
});

$(".tm").click(function(){
  if(flag === false)
  {
    location.href="/";
  }
  else if($(".tm").text() === "")
  {
    $(".tm").text("X");
    nextMove();
  }
});

$(".tr").click(function(){
  if(flag === false)
  {
    location.href="/";
  }
  else if($(".tr").text() === "")
  {
    $(".tr").text("X");
    nextMove();
  }
});

$(".ml").click(function(){
  if(flag === false)
  {
    location.href="/";
  }
  else if($(".ml").text() === "")
  {
    $(".ml").text("X");
    nextMove();
  }
});

$(".mm").click(function(){
  if(flag === false)
  {
    location.href="/";
  }
  else if($(".mm").text() === "")
  {
    $(".mm").text("X");
    nextMove();
  }
});

$(".mr").click(function(){
  if(flag === false)
  {
    location.href="/";
  }
  else if($(".mr").text() === "")
  {
    $(".mr").text("X");
    nextMove();
  }
});

$(".bl").click(function(){
  if(flag === false)
  {
    location.href="/";
  }
  else if($(".bl").text() === "")
  {
    $(".bl").text("X");
    nextMove();
  }
});

$(".bm").click(function(){
  if(flag === false)
  {
    location.href="/";
  }
  else if($(".bm").text() === "")
  {
    $(".bm").text("X");
    nextMove();
  }
});

$(".br").click(function(){
  if(flag === false)
  {
    location.href="/";
  }
  else if($(".br").text() === "")
  {
    $(".br").text("X");
    nextMove();
  }
});

$("h5").click(function(){
  location.href="/";
});

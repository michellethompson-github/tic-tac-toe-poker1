var board = [];

function play(clickedId){
   // console.log(clickedId);
    var clickedElement = document.getElementById(clickedId); //td with id = 0
    var playerSpan = document.getElementById('player'); //
    //sconsole.log(playerSpan.innerText); //Displaying the text  of id ='player' span
    if(playerSpan.innerText === 'X'){ //innerText is used to display the text inside a tag
        if(clickedElement.innerText === ''){
            clickedElement.innerText = 'X';  //Block that is clicked
            clickedElement.style.color = 'Red'; //Changing the X color to Red
        }
      
        board[clickedId] = 'X';
        playerSpan.innerText = 'O';
        
    }
    else {
        if(clickedElement.innerText === ''){
            clickedElement.innerText = 'O';
            clickedElement.style.color = 'Green'; //Changing the O Color to Green
        }
       
        board[clickedId] = 'O';
        playerSpan.innerText = 'X';
        
    }


    //Code will go here
    var topLeft = board[0]; //First Location
    var topCenter = board[1];
    var topRight = board[2];
    var centerLeft = board[3];
    var center = board[4];
    var centerRight = board[5];
    var bottomLeft = board[6];
    var bottomCenter = board[7];
    var bottomRight = board[8];

    console.log(board);
    //Conditions for Rows Start
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        window.alert('We have a Winner,' + topLeft);
        reset(); //Triggering/invoking/calling the function
    // console.log('We have a Winner, ' + topLeft);

    }
    if (centerLeft !== undefined && centerLeft === center && centerLeft === centerRight){
        window.alert('We have a Winner, ' + centerLeft);
        reset();
        // console.log('We have a Winner, ' + centerLeft);
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        window.alert('We have a Winner, ' + bottomLeft);
        reset();
        // console.log('We have a Winner, ' + centerLeft);
    }
    //Conditions for Rows End

    //Conditions for Columns Start
    if (topLeft !== undefined && topLeft === centerLeft && topLeft === bottomLeft){
        window.alert('We have a Winner, ' + topLeft);
        reset();
        // console.log('We have a Winner, ' + topLeft);
    }
    if (topCenter !== undefined && topCenter === center && topCenter === bottomCenter){
        window.alert('We have a Winner,' + topCenter);
        reset();
        // console.log('We have a Winner,' + centerLeft);
    }
    if (topRight !== undefined && topRight === centerRight && topRight === bottomRight){
        window.alert('We have a Winner,' + topRight);
        reset();
        // console.log('We have a Winner,' + topRight);
    }
    //Conditions for Columns End

    //Conditions for Diagonal Dtart
    if (topLeft !== undefined && topLeft === center && topLeft === bottomRight){
        window.alert('We have a Winner, '+ topLeft);
        reset();
        // console.log('We have a Winner,' + topLeft);
    }
    if (topRight !== undefined && topRight === center && topRight === bottomLeft){
        window.alert('We have a Winner,' + topRight);
        reset();
        // console.log('We have a Winner,' + topRight);
    }
    //Conditions for Diagonal End

    if(topLeft !== undefined && topCenter !== undefined && topRight !== undefined && centerLeft !== undefined && 
        center !== undefined && centerRight !== undefined && bottomLeft !== undefined && bottomCenter !== undefined && bottomRight !== undefined){
            window.alert('Woohoo! We ended up in a draw!')
            reset();
        }

}

function reset(){
    console.log('Reset function called!')
    for(let i=0; i< 9; i++){
        document.getElementById(i).innerText = ''; //Erasing data on the game
            board[i] = undefined; //Emptying the board array
    }

}
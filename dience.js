var p1=Math.floor(Math.random()*6)+1;
var p2 = Math.floor(Math.random() * 6) + 1;

var iP1="images/dice"+p1+".png";
var iP2 = 'images/dice' + p2 + '.png';


document.querySelector('.img1').setAttribute('src', iP1);
document.querySelector('.img2').setAttribute('src', iP2);

winner(p1,p2);


function winner(p1,p2){
    if(p1>p2){
        document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
    }else if(p2>p1){
        document.querySelector('h1').innerHTML ='🚩 Player 2 Wins!';
    }else{
        document.querySelector("h1").innerHTML="⚒ Draw!";
    }
}
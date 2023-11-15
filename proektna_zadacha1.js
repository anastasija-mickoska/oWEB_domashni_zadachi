var likebtn1=document.getElementById("like_button1");
var likecount1=document.getElementById("like_counter1");
var likebtn2=document.getElementById("like_button2");
var likecount2=document.getElementById("like_counter2");
var likebtn3=document.getElementById("like_button3");
var likecount3=document.getElementById("like_counter3");
var commentbtn1=document.getElementById("comment_button1");
var commentcount1=document.getElementById("comment_counter1");
var commentbtn2=document.getElementById("comment_button2");
var commentcount2=document.getElementById("comment_counter2");
var commentbtn3=document.getElementById("comment_button3");
var commentcount3=document.getElementById("comment_counter3");

function like1() {
    if(likebtn1.style.backgroundColor=='lightgrey') {
        likebtn1.style.backgroundColor='crimson';
        likecount1.innerHTML=parseInt(likecount1.innerHTML)+1;
    }
    else {
        likebtn1.style.backgroundColor='lightgrey'
        likecount1.innerHTML=parseInt(likecount1.innerHTML)-1;
    }
}
function like2() {
    if(likebtn2.style.backgroundColor=='lightgrey') {
        likebtn2.style.backgroundColor='crimson';
        likecount2.innerHTML=parseInt(likecount2.innerHTML)+1;
    }
    else {
        likebtn2.style.backgroundColor='lightgrey'
        likecount2.innerHTML=parseInt(likecount2.innerHTML)-1;
    }
}
function like3() {
    if(likebtn3.style.backgroundColor=='lightgrey') {
        likebtn3.style.backgroundColor='crimson';
        likecount3.innerHTML=parseInt(likecount3.innerHTML)+1;
    }
    else {
        likebtn3.style.backgroundColor='lightgrey'
        likecount3.innerHTML=parseInt(likecount3.innerHTML)-1;
    }
}

function comment1() {
    if(commentbtn1.style.backgroundColor=='lightgrey') {
        window.prompt("Add comment.");
        commentbtn1.style.backgroundColor='crimson';
        commentcount1.innerHTML=parseInt(commentcount1.innerHTML)+1;
    }
    else {
        commentbtn1.style.backgroundColor='lightgrey'
        commentcount1.innerHTML=parseInt(commentcount1.innerHTML)-1;
        alert("Comment deleted.");
    }
}

function comment2() {
    if(commentbtn2.style.backgroundColor=='lightgrey') {
        window.prompt("Add comment.");
        commentbtn2.style.backgroundColor='crimson';
        commentcount2.innerHTML=parseInt(commentcount2.innerHTML)+1;
    }
    else {
        commentbtn2.style.backgroundColor='lightgrey'
        commentcount2.innerHTML=parseInt(commentcount2.innerHTML)-1;
        alert("Comment deleted.");
    }
}

function comment3() {
    if(commentbtn3.style.backgroundColor=='lightgrey') {
        window.prompt("Add comment.");
        commentbtn3.style.backgroundColor='crimson';
        commentcount1.innerHTML=parseInt(commentcount1.innerHTML)+1;
    }
    else {
        commentbtn3.style.backgroundColor='lightgrey';
        commentcount3.innerHTML=parseInt(commentcount3.innerHTML)-1;
        alert("Comment deleted.");
    }
}

var buttons=document.getElementsByClassName("opis");
var buttons2=document.getElementsByTagName("button");

function description() {
    for(var i=0;i<6;i++) {
        buttons[i].innerHTML="Опис на производот";
    }
}
function product_name() {
    for(var i=0;i<6;i++) {
        buttons[i].innerHTML=" "; 
    }
}

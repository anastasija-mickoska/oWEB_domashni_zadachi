/*const like=document.getElementsByClassName("like_counter"); //site brojaci za lajkovi
const comment=document.getElementsByClassName("comment_counter"); //site brojaci za komentari

const like_button1=document.getElementById("like_button1"); //slika
const likeCount1=document.getElementById("like_counter1"); //broj

*/
var likebtn1=document.getElementById("like_button1");
var likecount1=document.getElementById("like_counter1");
function like1() {
    if(likebtn1.style.backgroundColor=='lightgrey') {
        likebtn1.style.backgroundColor='red';
        likecount1++;

    }
    else if(likebtn1.getElementsByTagName("img")[0].src=="Sliki/like2.jpg") {
        likebtn1.getElementsByTagName("img")[0].src=="Sliki/like1.jpg";
        likecount1.innerHTML=likecount1-1;
    }
}
/*
function image_change() {
    if(like_button1.src="Sliki/like1.jpg") {
        like_button1.src="Sliki/like2.jpg";
    }
    else if(like_button1.src="Sliki/like2.jpg") {
        like_button1.src="Sliki/like1.jpg";
    }
}
function like_count1() {
    likeCount1.innerHTML=likeCount1.innerHTML+1;
}

function setRandom() { //funkcija za setiranje na brojot na lajkovi i komentari pri vcituvanje na stranata
    for(var i=0;i<like.length;i++) {
        like[i].innerHTML=Math.floor(Math.random()*1000);
    }
    for(var i=0;i<like.length;i++) {
        comment[i].innerHTML=Math.floor(Math.random()*100);
    }
}
function like_count() { 
    let image=document.getElementsByClassName("likes");
    for(var i=0;i<image.length;i++) {
        if(image[i].src=="Sliki/like1.jpg") {
            image[i].setAttribute("src","Sliki/like2.jpg");
            like[i].innerHTML=like[i].value+1;
        }
        else if(image[i].src=="Sliki/like2.jpg") {
            image[i].setAttribute("src","Sliki/like1.jpg");
            like[i].innerHTML=like[i].value-1;
        }
    } 
}
function add_comment() {
    window.prompt("Enter a comment.");
    return comment_count();
}
function comment_count() {
    let image=document.getElementsByClassName("comments");
    for(var i=0;i<image.length;i++) {
        if(image[i].src=="Sliki/comment1.jpg") {
            image[i].setAttribute("src","Sliki/comment2.jpg");
            comment[i].value=comment[i].value+1;
        }
        else if(image[i].src=="Sliki/comment2.jpg") {
            image[i].setAttribute("src","Sliki/comment1.jpg");
            comment[i].value=comment[i].value-1;
        }
    }
} 
var products=document.getElementsByClassName("product"); //site proizvodi
var product_button=products.getElementsByTagName("button"); //site kopcinja kaj proizvodite (ovie vrednosti ke se menuvaat pri opisot)
var product_button2=products.getElementsByTagName("button") //vo ovaa niza ke se zacuvaat vrednostite bez da se promenat vrednostite na button (ke ni koristat za product_name())
function description() {
    for(var i=0;i<product_button.length;i++) {
        product_button[i].innerHTML="Опис на производ "+product_button[i];
    }    
}
function product_name() {
    for(var i=0;i<product_button.length;i++) {
        product_button[i].innerHTML=product_button2[i];
    }
}*/
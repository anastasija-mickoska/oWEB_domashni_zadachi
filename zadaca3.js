let words=["apple","banana","cherry","pear","peach","apricot","grape","cabbage","cucumber","tomato","potato","pepper","onion","spinach","lettuce"];
let random=Math.floor(Math.random()*words.length); //se bira random index koj zbor da se zeme
let zbor=words[random]; //izbraniot zbor
let pogodeni_bukvi=[]; 
let zbor1=""; 
let random2=Math.floor(Math.random()*zbor.length)+1; //ke se prikaze bukva od zborot so indeks random2 
function prikazhiZbor() {  
    zbor1+=zbor.charAt(0); //ke se prikaze prvata bukva
    for(var i=1;i<zbor.length-1;i++) 
    {
            if(random2==i) {
                zbor1+=zbor.charAt(i);
            }
            else {
                zbor1+='_ ';
            }
    }
    zbor1+=zbor.charAt(zbor.length-1); //ke se prikaze poslednata bukva
    document.getElementById("prikaziZbor").innerHTML=zbor1;   
}
function proveriBukva()
{
    let obidi=5; 
    let attempts=document.getElementById("attempt");
    if(obidi==0)
    {
        window.alert("Game not successful.");
    }
    while(obidi>0) { 
        let bukva=document.getElementById("bukva").value; //se zema bukvata koja e vnesena 
        if(bukva==" ") {
            window.alert("You haven't entered a letter. Try again.");
            continue;
        }
       if(bukva.toLowerCase() in pogodeni_bukvi) { 
            window.alert("You have already guessed the letter.");
            continue;
        } 
        else if(!(bukva.toLowerCase() in pogodeni_bukvi) && (bukva.toLowerCase() in zbor)) {
            pogodeni_bukvi.push(bukva.toLowerCase()); 
            obidi--;
        }
        else if(!(bukva.toLowerCase() in pogodeni_bukvi) && !(bukva.toLowerCase() in zbor)) {
            window.alert("This letter is not in the word. Try again.");
            obidi--;
        }  
        bukva.value=" "; //se resetira input
        let azuriraj=""; 
        let pogodeni=true;
        azuriraj+=zbor.charAt(0);
        for(var i=1;i<zbor.length-1;i++) 
        {
            if(random2==i) {
                azuriraj+=zbor.charAt(i)+" ";
            }
            if(zbor.charAt(i) in pogodeni_bukvi) {
                azuriraj+=zbor.charAt(i)+" ";
            }
            else {
                azuriraj+="_ ";
                pogodeni=false;
            }
        }
        azuriraj+=zbor.charAt(zbor.length-1);
        document.getElementById("prikaziZbor").innerHTML=azuriraj;
        if(pogodeni==true) {
            window.alert("Congratulations! You have guessed the word!");
        }
    }   
}


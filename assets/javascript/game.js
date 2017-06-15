var words = new Array();
	words[1] = "escapologist";
	words[2] = "witchcraft";
	words[3] = "philanthropy";
	words[4] = "protectrix";
	words[5] = "motorcycles";
	words[6] = "grandchilderen";
	words[7] = "newfangled";
	words[8] = "cryptogram";
	words[9] = "mythologer";
	words[10] = "pluperfect";
	words[11] = "jellygraph";
	words[12] = "thumbprints";
	words[13] = "labrador";
	words[14] = "technical";
	words[15] = "cowpuncher";
	words[16] = "bankruptcy";
	words[17] = "jackhammer";
	words[18] = "jabberwock";
	words[19] = "wonderful";
	words[20] = "dazzlement";

var selectors = ["#manone","#mantwo","#manthree","#manfour","#manfive","#mansix","#manseven"];

var word = words[Math.round((Math.random() * 20))];

var spaces = []

var guesses = []

var hint = []

var spaceGen = function spaceGen(){
	for (var i = 0; i < word.length; i++) {
		spaces.push(" _")
	}
	spaces.concat()
}

spaceGen()

var spaceChanger = function spaceChanger() {
	
	    var newHTML = 
	    
	    "Word: " + spaces;

        document.querySelector("#word").innerHTML = newHTML;
}

spaceChanger()

document.onkeypress = function(event) {

	var userInput = event.key;

	var guessLogger = function guessLogger(){



	    if (word.indexOf(userInput) > -1){

	    	spaces.splice(word.indexOf(userInput),1,word[word.indexOf(userInput)])

	    	var newHTML = 
	    
	    	"Word: " + spaces ;

        	document.querySelector("#word").innerHTML = newHTML;

	    }

	    else if (guesses.indexOf(userInput) > -1){
	    	alert("Pay Attention")
	    }

	    else{
	    	guesses.push(userInput)

	    	var newHTML = 
	    
	    	"Guesses: " + guesses ;

        	document.querySelector("#guesses").innerHTML = newHTML;

        	document.querySelector("#manone").style.display = "none"
        	document.querySelector("#mantwo").style.display = "none"
        	document.querySelector("#manthree").style.display = "none"
        	document.querySelector("#manfour").style.display = "none"
        	document.querySelector("#manfive").style.display = "none"
        	document.querySelector("#mansix").style.display = "none"
        	document.querySelector("#manseven").style.display = "none"

        	document.querySelector(selectors[guesses.length]).style.display = "block"
        }    
	}
	guessLogger();
}













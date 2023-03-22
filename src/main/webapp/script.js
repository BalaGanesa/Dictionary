function search(){
	console.log("aa");
	var word = document.getElementById("search").value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST","dictionary");
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("word="+word);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4){
			console.log(xhr.responseText);
			var json = JSON.parse(xhr.responseText);
			console.log(json);
			var word = json["response1"][0]["word"];
			document.getElementById("word").innerText = word;
			var phonetics = json["response1"][0]["phonetics"];
			var a = null;
			console.log(phonetics.length);
			for(var i =0 ;i<phonetics.length;i++){
				if(phonetics[i]!=""){
					a = phonetics[i]["audio"];
				}
			}
			console.log(a);
			var audio = document.getElementById("audio");
			audio.src = a;
			const myDiv = document.getElementById("playBut");
			const myAudio = document.getElementById("audio");
			myDiv.addEventListener("click", function() {
			myAudio.play();
});
			var def = "";
			var definitionLength = json["response1"][0]["meanings"][0]["definitions"]; 
			console.log(definitionLength.length);
			if(definitionLength.length>2){
			for(var i=0;i<=2;i++){
				def += definitionLength[i]["definition"]
			}
			}
			else{
				for(var i=0;i<=definitionLength.length;i++){
				def += definitionLength[i]["definition"]
				}
				}
				console.log(def)
			document.getElementById("mean").innerHTML = def;
			
			var def1 = "";
			var definitionLength1 = json["response1"][0]["meanings"][1]["definitions"]; 
			console.log(definitionLength1.length);
			if(definitionLength1.length>2){
			for(var i=0;i<=2;i++){
				def1 += definitionLength1[i]["definition"]
			}
			}
			else{
				for(var i=0;i<=definitionLength1.length;i++){
				def1 += definitionLength1[i]["definition"]
				}
				console.log(def1)
				}
			document.getElementById("mean1").innerHTML = def1;
			
			var source = json["response1"][0]["sourceUrls"];
			console.log(source);
			var temp = document.getElementById("Source");
			temp.innerHTML = `<a href = ${source}>${source}</a>`
			
			}
			}
}


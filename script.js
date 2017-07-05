alert("Hello, welcom to film database")
var filmDatabase = [];
do{
	const cmd = prompt("You can 'add', 'review','find', ask for 'help', see 'amount' of films or 'exit' ") 
	if (cmd == "exit") break
	switch(cmd){
		case "add":{
					var filmName = prompt("Please, enter film name")
					 filmN = !!filmName
						if  (filmN==false){
							do{
								if (filmN == true) break
									filmN = !!prompt("rewrite")}
							while(true)}
						if(filmN == true){
								console.log(filmN)
					}
			
					var filmY = +prompt("Please, enter film year")
						 if  (filmY<1895){
							do{
							if (filmY >=1895) break	 		
								filmY = prompt("rewrite")}
								while(true)}

						if(filmY >=1895){
						console.log(filmY)	}
					const film = {
						'name': filmName,
						'year': filmY
					}
					filmDatabase.push(film); 
		}break
		case "review":{
			var message = "";
				for (let f=0; f<filmDatabase.length;++f){
				message = message + "name: " + filmDatabase[f].name + ", year: " + filmDatabase[f].year + "\n";}
				alert(message);}
		break
		case "help":{
			alert("Comand 'add' can add new films in film database. \nReview - gives you opportunity to review films. \nAmount shows you amount of films.")
		}break
		case "amount":{
			alert("Amount: " + filmDatabase.length)
		}break
	}
}while(true)



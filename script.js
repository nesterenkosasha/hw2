alert("Hello, welcom to film database")
var filmDatabase = [];
do{
	const cmd = prompt("You can 'add', 'review','find', ask for 'help', see 'amount' of films or 'exit' ") 
	if (cmd == "exit") break
	switch(cmd){
		case "add":{
					var filmName = prompt("Please, enter film name")
					var filmY = +prompt("Please, enter film year")
					const film = {
						'name': filmName,
						'year': filmY
					}
					filmDatabase.push(film); 
		}break
	}
}while(true)



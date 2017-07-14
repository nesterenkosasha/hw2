alert(hello)
var filmDatabase = [];
do{
	const cmd = prompt(cmd_) 
	if (cmd == "exit") break
	switch(cmd){
		case "add":{
					var filmName = prompt(film_Name)
					 filmN = !!filmName
						if  (filmN==false){
							do{
								if (filmN == true) break
									filmN = prompt(wrong)}
							while(true)}
						if(filmN == true){
								console.log(filmN)
					}
			
					let filmY = +prompt(filmY_)
						const da = new Date().getFullYear()
						console.log(da, filmY)
						do{
						let n = filmY <= da ? (filmY>=1895?1:0):0
						console.log(typeof n, n)
							
								if(n == 1)break

							filmY = prompt(wrong)}
					 	while(true)

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
				alert(message);
		}break
		
		case "help":{ alert(help)
			}break 
		case "amount":{
			alert("Amount: " + filmDatabase.length)
		}break
	case "find":{

const searchMovie = function (data, filmDatabase) {
  let result = []
  for (let movie of filmDatabase) {
    switch (data.criteria) {
      case "year": 
        if (movie.year == data.year) result.push(movie)
        break
      case "name":
        if (movie.name == data.name) result.push(movie)
        break
      default:
        result = null
        break
    }
  }
  return result
}

const showResult = function (data) {
  const result = []
  if (data && data.length)
    for (let movie of data) {
      result.push(movie.name + " " + movie.year)
    }
  alert("List of movies:\n" + result.join("\n"))
  return result
}

      const criterias = {}
      criterias["criteria"] = prompt(SEARCH_MOVIE)
      criterias[criterias["criteria"]] = prompt(SEARCH_MOVIE_BY)
      showResult(searchMovie(criterias, filmDatabase))
     


}break
		default:
			alert(cmd  + " no founded")
			break		
	}
}while(true)





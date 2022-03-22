const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    pokeType.innerHTML = "";
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.home.front_default;
            pokeImage(pokeImg);
            let types = data.types;
            let type1 = data.types[0].type.name
            
            if (types.length == 1){
                console.log(type1);
                types=type1; 
                document.getElementById("pokeType").innerHTML = `${types}`;
            }
            
            else  {
                let type2 = data.types[1].type.name
                console.log(type1,type2);
                types=(type1 + " " + type2);
                document.getElementById("pokeType").innerHTML = `${types}`;
            } 
            let hp = data.stats[0].base_stat;
            let attack = data.stats[1].base_stat;
            let defense = data.stats[2].base_stat;
            let specialAttack = data.stats[3].base_stat;
            let specialDefense = data.stats[4].base_stat;
            let speed = data.stats[5].base_stat;
               
                stats = ("HP: " + hp + "&nbsp" + "ATK: " + attack + "&nbsp" + "DFS: " + defense + "&nbsp" + "SPATK: " + specialAttack + "&nbsp" + "SPDFS: " + specialDefense + "&nbsp" + "SP: " + speed);
                console.log(hp, attack, defense,specialAttack, specialDefense,speed);
                document.getElementById("stats").innerHTML=`${stats}`;
                
            
            
            let moves = data.moves;
             for (let i = 0; i < moves.length; i++){
                 pokemoves=moves[i].move.name;
             
             
            const moveList = document.createElement("li");
            moveList.innerText = `${pokemoves}`;
            document.getElementById("pokeMoves").appendChild(moveList);
             }  

        }

    })
    
    }

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}







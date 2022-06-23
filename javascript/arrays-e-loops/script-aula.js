var videoGames = ['Switch', 'Xbox', 'Playstation'];

videoGames.push('3DS')

for(var i = 0; i <= 10; i++){
  console.log(i)
}

var j = 0
while(j <= 10){
    console.log(j)
    j = j + 5;
}

for(var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item]);
    if(videoGames[item] === 'Playstation'){
        break;
    }
}

videoGames.forEach(function(item, index, array){
    console.log(item, index, array)
})
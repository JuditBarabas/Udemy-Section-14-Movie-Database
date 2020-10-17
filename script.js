const movieDB = [
    {
      title: 'Onward',
      rating: '4.8',
      hasWatched: true
    },
    {
      title: 'The biggest little farm',
      rating: '4',
      hasWatched: false
    },
    {
      title: 'The black panther',
      rating: '3.5',
      hasWatched: true
    },
    {
      title: 'RBG',
      rating: '5',
      hasWatched: false
    }
  ];
  
  
  for(i = 0; i < movieDB.length; i++) {
    if(movieDB[i].hasWatched) {
        console.log(`You have watched "${movieDB[i].title}" - ${movieDB[i].rating} stars`);
      } else {
         console.log(`You have not seen "${movieDB[i].title}" - ${movieDB[i].rating} stars`);
      }
    }

// with forEach
/*
movieDB.forEach(function(item) {
    if(item.hasWatched) {
        console.log(`You have watched "${item.title}" - ${item.rating} stars`);
    } else {
        console.log(`You have not seen "${item.title}" - ${item.rating} stars`);
    }
});
*/
  
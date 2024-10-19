let songs = ["Imagine","Bohemian Rhapsody","Stairway to Heaven","Hotel California","Viva la Vida","Sweet Child O' Mine","Imagine","Blackbird","Back in Black","Smells Like Teen Spirit"];

let artists = ["John Lennon","Queen","Led Zeppelin","Eagles","Coldplay","Guns N' Roses","John Lennon","The Beatles","AC/DC","Nirvana"];

// Function 1: Add Song 
function addSong(title, singer) { // Parameters: title, singer
  songs.push(title);
  artists.push(singer);
}

// Function 2: Add Multiple Songs 
function addMultipleSongs() { // Parameters: None
  let numSongs = parseInt(prompt("Enter the number of songs:"));
  for (let i = 0; i < numSongs; i++) {
    let title = prompt(`Enter the title of song ${i + 1}:`);
    let singer = prompt(`Enter the singer of song ${i + 1}:`);
    addSong(title, singer);
  }
}

// Function 3: Delete Song 
function deleteSong(title) { // Parameters: title
  const index = songs.indexOf(title);
  if (index !== -1) {
    songs.splice(index, 1);
    artists.splice(index, 1);
    console.log(`Song "${title}" deleted.`);
  } else {
    console.log(`Song "${title}" not found.`);
  }
}


// Function 4: Update Song Title
function updateSongTitle(currentTitle, newTitle) { // Parameters: currentTitle, newTitle
  const index = songs.indexOf(currentTitle);
  if (index !== -1) {
    songs[index] = newTitle;
    console.log(`Title updated from "${currentTitle}" to "${newTitle}".`);
  } else {
    console.log(`Song "${currentTitle}" not found.`);
  }
}

// Function 5: Display All Songs 
function displayAllSongs(songs, artists) { 
  for (let i = 0; i < songs.length; i++) {
    console.log(`${songs[i]} : ${artists[i]}`);
  }
}

// Function 6: Display Artist Songs 
function displayArtistSongs(singer) {
  let found = false;
  console.log(`Songs by ${singer}:`);
  for (let song of songs) {
    if (song.singer === singer) {
      console.log(`- ${song.title}`);
      found = true;
    }
  }
  if (!found) {
    console.log(`No songs found for artist "${singer}".`);
  }
}

// Function 7: Count Artist Songs 
function countArtistSongs(singer) {
  let count = 0;
  for (let song of songs) {
    if (song.singer === singer) {
      count++;
    }
  }
  console.log(`Number of songs for ${singer}: ${count}`);
}


// Function 8: Play Game 
function playGame() {
  let score = 0;
  const songIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
  for (let i = 0; i < songIndices.length; i++) {
    let songIndex = songIndices[i];
    let songTitle = songs[songIndex];
    let correctArtist = artists[songIndex];
    let userAnswer = prompt(`What is the artist of the song "${songTitle}"?`);
    if ((userAnswer == correctArtist)) {
      score += 10; 
      console.log(`Correct! You earn ${score} points.`);
    } else {
      console.log(`Incorrect. The correct answer is ${correctArtist}.`);
    }
  }
  console.log(`Your final score is ${score} points.`);
  let playAgain = prompt("Do you want to play again? (yes/no)");
  if (playAgain.toLowerCase() === "yes") {
    playGame();
  }
}



// Main Function 
function userInterface() { 
  while (true) {
    let choice = prompt(
      "Enter 1 to add a song.\n" +
      "Enter 2 to add multiple songs.\n" +
      "Enter 3 to delete a song.\n" +
      "Enter 4 to update a song title.\n" +
      "Enter 5 to display all songs.\n" +
      "Enter 6 to display artist songs.\n" +
      "Enter 7 to count artist songs.\n" +
      "Enter 8 to play game.\n" +
      "Enter 0 to exit:"
    );
    if (choice === "0") {
      break;
    } else if (choice === "1") {
      let title = prompt("Enter the title of the song:");
      let singer = prompt("Enter the name of the singer:");
      addSong(title, singer);
    } else if (choice === "2") {
      addMultipleSongs();
    } else if (choice === "3") {
      let title = prompt("Enter the title of the song to delete:");
      deleteSong(title);
    } else if (choice === "4") {
      let currentTitle = prompt("Enter the current title of the song:");
      let newTitle = prompt("Enter the new title of the song:");
      updateSongTitle(currentTitle, newTitle);
    } else if (choice === "5") {
      displayAllSongs();
    } else if (choice === "6") {
      let singer = prompt("Enter the artist's name:");
      displayArtistSongs(singer);
    } else if (choice === "7") {
      let singer = prompt("Enter the artist's name:");
      countArtistSongs(singer);
    } else if (choice === "8"){
      playGame(songs); 
    }
  }
}

userInterface();
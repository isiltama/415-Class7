let moviePosterIndex = 0;
let tvPosterIndex = 0;

function updatePoster() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based
  const year = currentDate.getFullYear();
  const dateString = year + "-" + month + "-" + day;

  const moviePosters = [
    "moviePosters/1917_film_poster.jpg",
    "moviePosters/Guardians_of_the_Galaxy_Vol._3_poster.jpg",
    "moviePosters/LOTR.jpg",
    "moviePosters/Elvis_2022_poster.jpg",
    "moviePosters/Avengers_Endgame_poster.jpg",
    "moviePosters/Bohemian_Rhapsody_poster.png",
    "moviePosters/Rocketman_(film).png",
    "moviePosters/Walk_the_line_poster.jpg",
    "moviePosters/Wonder_Woman_(2017_film)_poster.jpg",
    "moviePosters/A_Star_is_Born.png"
  ];

  const tvShowPosters = [
    "tvShows/Band_of_Brothers_poster.jpg",
    "tvShows/blacksails.jpg",
    "tvShows/Gravity_Falls,_Vol._1_cover_art.jpg",
    "tvShows/merlin_bbc.jpg",
    "tvShows/Our_Flag_Means_Death_Season_1_Poster.jpg",
    "tvShows/Narcos_season_1.png",
    "tvShows/resDogs.jpg",
    "tvShows/Stranger_Things_season_4.jpg",
    "tvShows/The_Last_of_Us_season_1_Blu-ray.png",
    "tvShows/The_Mandalorian_season_2_poster.jpg"
  ];

  if (day !== moviePosterIndex) {
    moviePosterIndex = day;
    const randomMovieIndex = day % moviePosters.length;
    document.getElementById("movie-poster-image").src = moviePosters[randomMovieIndex];
    document.getElementById("movie-poster-title").innerText = "Movie of the Day - " + dateString;
  }

  if (day !== tvPosterIndex) {
    tvPosterIndex = day;
    const randomTvIndex = day % tvShowPosters.length;
    document.getElementById("tv-poster-image").src = tvShowPosters[randomTvIndex];
    document.getElementById("tv-poster-title").innerText = "TV Show of the Day - " + dateString;
  }
}

// Call the function to initially set the poster
updatePoster();

// Call the function every 24 hours to update the poster
setInterval(updatePoster, 24 * 60 * 60 * 1000);

  
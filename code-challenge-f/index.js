document.addEventListener('DOMContentLoaded', () => {
    const filmsMenu = document.getElementById('films-menu');
    const movieDetails = document.getElementById('movie-details');
  
    // Fetch movie data
    fetch('http://localhost:3000/films')
      .then(response => response.json())
      .then(data => {
        // Display movie menu
        data.forEach(movie => {
          const li = document.createElement('li');
          li.textContent = movie.title;
          filmsMenu.appendChild(li);
  
          li.addEventListener('click', () => {
            // Display movie details
            movieDetails.innerHTML = `
              <img src="${movie.poster}" alt="${movie.title}">
              <h3>${movie.title}</h3>
              <p>Runtime: ${movie.runtime} minutes</p>
              <p>Showtime: ${movie.showtime}</p>
              <p>Available Tickets: ${movie.capacity - movie.tickets_sold}</p>
            `;
          });
        });
      });
  });
  
  
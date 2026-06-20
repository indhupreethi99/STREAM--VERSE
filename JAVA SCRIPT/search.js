 alert("Connected")
 
 const movies = [
  {
    title: "Ratsasan",
    genre: "thriller",
    year: 2018,
    image:"../priya/thriller6.jpg"

  },
  {
    title: "naan",
    genre: "Action",
    year: 2023,
    image:"../priya/thriller__1.jpg"

  },
  {
    title: "the wolf and the goat",
    genre: "Drama",
    year: 2018,
    image:"../priya/thriller2.jpg"
  },
  {
    title: "dridam",
    genre: "Comedy",
    year: 2022,
    image: "../priya/thriller3.jpg"

  },
{
    title: "sookshma dharshini",
    genre: "Comedy",
    year: 2022,
    image: "../priya/thriller4.jpg"

  },

];

const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const sortOption = document.getElementById("sortOption");
const results = document.getElementById("results");

function displayMovies(movieList) {

  results.innerHTML = "";

  if (movieList.length === 0) {
    results.innerHTML = `
      <div class="col-span-full text-center">
        <p class="text-xl font-semibold">
          No Results Found
        </p>
      </div>
    `;
    return;
  }

  movieList.forEach(movie => {

    results.innerHTML += `
      <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition duration-300">

        <img
          src="${movie.image}"
          alt="${movie.title}"
          class="w-full h-48 object-cover"
        >

        <div class="p-4">

          <h2 class="text-lg md:text-xl font-bold">
            ${movie.title}
          </h2>

          <p class="text-gray-300 mt-1">
            Genre: ${movie.genre}
          </p>

          <p class="text-gray-400 text-sm">
            Year: ${movie.year}
          </p>

          <!-- Priyadharshini details page file name vandha href maathu -->
          <a
            href="../HTML/movie.html"
            class="inline-block mt-3 text-red-400 hover:text-red-500 font-medium"
          >
            View Details
          </a>

        </div>

      </div>
    `;
  });
}

function filterMovies() {

  let filteredMovies = movies.filter(movie =>
    movie.title
      .toLowerCase()
      .includes(searchInput.value.toLowerCase())
  );

  if (genreFilter.value !== "all") {
    filteredMovies = filteredMovies.filter(movie =>
      movie.genre === genreFilter.value
    );
  }

  if (sortOption.value === "az") {
    filteredMovies.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (sortOption.value === "za") {
    filteredMovies.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  displayMovies(filteredMovies);
}

searchInput.addEventListener("input", filterMovies);
genreFilter.addEventListener("change", filterMovies);
sortOption.addEventListener("change", filterMovies);

displayMovies(movies);
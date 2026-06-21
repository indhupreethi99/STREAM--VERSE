//Trending Now Section//

const movies = [
  {
    title: "Leo",
    rating: "9.5/10",
    image: "../Images/leo.jpeg",
  },
  {
    title: "Interestellar",
    rating: "9.3/10",
    image: "../Images/interestellar.jpg",
  },
  {
    title: "29",
    rating: "9.1/10",
    image: "../Images/29.jpeg",
  },
  {
    title: "Beast",
    rating: "8.9/10",
    image: "../Images/beast.jpeg",
  },
  {
    title: "50 Shades darker",
    rating: "9.0/10",
    image: "../Images/50 shades of gray.jpg",
  },
  {
    title: "Bison",
    rating: "9.0/10",
    image: "../Images/bison.jpeg",
  },
  {
    title: "Jailer",
    rating: "7.5/10",
    image: "../Images/jailer.jpg",
  },
  {
    title: "Master",
    rating: "9.2/10",
    image: "../Images/master.jpg",
  },
  {
    title: "Breaking bad",
    rating: "8.4/10",
    image: "../Images/breaking-bad.jpeg",
  },
  {
    title: "Vikram",
    rating: "9.0/10",
    image: "../Images/vikram.jpeg",
  },
];

const container = document.getElementById("movie-container");

movies.forEach((movie) => {
  container.innerHTML += `
    <div class="p-3 border border-gray-600 rounded-md w-fit flex-shrink-0">
      <img src="${movie.image}" alt="${movie.title}" class="h-60 rounded">
      <p class="text-white font-bold text-md mt-2">${movie.title}</p>
      <p class="text-gray-400">${movie.rating} ⭐</p>
    </div>
  `;
});

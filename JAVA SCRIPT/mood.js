function showMovies(mood){

    var movies = "";

    if(mood == "happy"){
        movies =
        `
        <div class="card">
            <img src="https://i0.wp.com/indiacurrents.com/wp-content/uploads/2025/01/Meiyazhagan.jpg?fit=1200%2C675&ssl=1">
            <h3>Meiyazhagan</h3>
            <p>Feel Good Movie</p>
        </div>

        <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IkA6jNIxlMcxxpGk55DNNu_oUmCvfp4k1bhNcDGBFA&s=10">
            <h3>Good Night</h3>
            <p>Family Fun</p>
        </div>
        `;
    }

    else if(mood == "sad"){
        movies =
        `
        <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbqbF98qWqdDIqN4fbpP098d9Bt7ysaOReZMtOFhdPwg&s=10">
            <h3>Vazhai</h3>
            <p>Inspirational Drama</p>
        </div>

        <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzM4i7Usk-zYpDp1VoSrQ-uz7gZ6v7fzIZ-DLYXjurhg&s=10">
            <h3>Viduthalai</h3>
            <p>Emotional Story</p>
        </div>
        `;
    }

    else if(mood == "action"){
        movies =
        `
        <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSqd3tKCw85VGgI34SpScR_ecKRIgJ4SuBMmHO1qBZg&s=10">
            <h3>Amaran</h3>
            <p>Action Thriller</p>
        </div>

        <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdybTM_DsNZHPJOjKY6cWtLl7t8fxG9vXZ_EmvY479ug&s=10">
            <h3>Rayaan</h3>
            <p>Superhero Action</p>
        </div>
        `;
    }

    else if(mood == "romantic"){
        movies =
        `
        <div class="card">
            <img src="https://varnam.my/wp-content/uploads/2024/03/1433967-true-lover.webp">
            <h3>Lover</h3>
            <p>Romantic Drama</p>
        </div>

        <div class="card">
            <img src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-128630663/128630663.jpg">
            <h3>With Love/h3>
            <p>Love Story</p>
        </div>
        `;
    }

    else if(mood == "comedy"){
        movies =
        `
        <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDSGRamJijl7o4rYhDO6yX4MW4VukmACfYZmxWvA6Jw&s=10">
            <h3>Thai Kizhavi</h3>
            <p>Family Comedy</p>
        </div>

        <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJq1eg5XwmEyMZuY2YX8QZhSzyiHqYSugAFOkl2fdtkQ&s=10">
            <h3>Dude</h3>
            <p>Comedy</p>
        </div>
        `;
    }

    document.getElementById("movieList").innerHTML = movies;
}
function createMovieCards(movies, sectionId) {
    const container = document.getElementById(sectionId);

    movies.forEach(movie => {
        const card = document.createElement("div");

        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">

            <div class="overlay">
                <h3>${movie.title}</h3>
                <p class="rating">⭐ IMDb ${movie.rating}</p>
                <p>${movie.desc}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// MORNING MOVIES

const morningMovies = [

{title:"3 Idiots",rating:"8.4",desc:"Fun and inspiring college journey",image:"https://www.themoviedb.org/t/p/w1280/66A9MqXOyVFCssoloscw79z8Tew.jpg"},
{title:"The Pursuit of Happyness",rating:"8.0",desc:"Never give up on dreams",image:"https://www.themoviedb.org/t/p/w1280/lBYOKAMcxIvuk9s9hMuecB9dPBV.jpg"},
{title:"Zindagi Na Milegi Dobara",rating:"8.2",desc:"Life changing road trip",image:"https://www.themoviedb.org/t/p/w1280/hKO9O715wYxjkQSEv47giCYcyO8.jpg"},
{title:"Forrest Gump",rating:"8.8",desc:"Heartwarming life story",image:"https://www.themoviedb.org/t/p/w1280/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg"},
{title:"Secret Life of Walter Mitty",rating:"7.3",desc:"Adventure begins unexpectedly",image:"https://www.themoviedb.org/t/p/w1280/iAo1hlzsPV9XpYcLQp6Ud065tGO.jpg"},
{title:"The Intern",rating:"7.1",desc:"Inspiration at any age",image:"https://www.themoviedb.org/t/p/w1280/d1oAtTARe4o0K595w57mFuNBcLL.jpg"},
{title:"Chef",rating:"7.3",desc:"Food and self discovery",image:"https://www.themoviedb.org/t/p/w1280/hyp8EXDmO4dSC8V6Q5jU7gD1kcg.jpg"},
{title:"Soul",rating:"8.0",desc:"Finding purpose in life",image:"https://www.themoviedb.org/t/p/w1280/1ZvojPXy53WjnvpDCTgCAdt8L3X.jpg"},
{title:"Up",rating:"8.3",desc:"Adventure and emotions",image:"https://www.themoviedb.org/t/p/w1280/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg"},
{title:"The Terminal",rating:"7.4",desc:"Unexpected airport life",image:"https://www.themoviedb.org/t/p/w1280/cPB3ZMM4UdsSAhNdS4c7ps5nypY.jpg"},
{title:"A Beautiful Mind",rating:"8.2",desc:"Brilliance and perseverance",image:"https://www.themoviedb.org/t/p/w1280/rEIg5yJdNOt9fmX4P8gU9LeNoTQ.jpg"},
{title:"The Bucket List",rating:"7.4",desc:"Live before it's late",image:"https://www.themoviedb.org/t/p/w1280/idbNSe8zsYKQL97dJApfOrDSdya.jpg"},
{title:"Gifted",rating:"7.6",desc:"A child prodigy story",image:"https://www.themoviedb.org/t/p/w1280/nshCqszjTNuqhrB53vrSqWO18sE.jpg"},
{title:"Wonder",rating:"8.0",desc:"Choose kindness always",image:"https://www.themoviedb.org/t/p/w1280/sONh3LYGFcVDTy8pm1tbSOB13Li.jpg"},
{title:"The Blind Side",rating:"7.6",desc:"Power of compassion",image:"https://www.themoviedb.org/t/p/w1280/bMgq7VBriuBFknXEe9E9pVBYGZq.jpg"}

];

// AFTERNOON MOVIES

const afternoonMovies = [

{title:"The Hangover",rating:"7.7",desc:"Crazy bachelor adventure",image:"https://www.themoviedb.org/t/p/w1280/A0uS9rHR56FeBtpjVki16M5xxSW.jpg"},
{title:"Jumanji",rating:"6.9",desc:"Game comes alive",image:"https://www.themoviedb.org/t/p/w1280/iWV47r6kFneCiApgrMII5HSkfHw.jpg"},
{title:"Free Guy",rating:"7.1",desc:"NPC becomes hero",image:"https://www.themoviedb.org/t/p/w1280/dxraF0qPr1OEgJk17ltQTO84kQF.jpg"},
{title:"Yes Man",rating:"6.8",desc:"Say yes to life",image:"https://www.themoviedb.org/t/p/w1280/8Vk2nQF1kY34x53YnWd5zDaTht.jpg "},
{title:"The Proposal",rating:"6.7",desc:"Unexpected romance",image:"https://www.themoviedb.org/t/p/w1280/6stnAm1wSek8ZrislwK4xGTyCnt.jpg"},
{title:"We're The Millers",rating:"7.0",desc:"Fake family mission",image:"https://www.themoviedb.org/t/p/w1280/qF2LJ0jwWrtXSuT4AFD5OS2IqaT.jpg"},
{title:"Crazy Rich Asians",rating:"6.9",desc:"Luxury and love",image:"https://www.themoviedb.org/t/p/w1280/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg"},
{title:"Red Notice",rating:"6.3",desc:"Action and comedy",image:"https://www.themoviedb.org/t/p/w1280/lAXONuqg41NwUMuzMiFvicDET9Y.jpg"},
{title:"Central Intelligence",rating:"6.3",desc:"Unexpected partnership",image:"https://www.themoviedb.org/t/p/w1280/hXQVMbRNpf7c93e8clMY4W5DRm6.jpg"},
{title:"The Other Guys",rating:"6.7",desc:"Funny detectives",image:"https://www.themoviedb.org/t/p/w1280/wNEHNqo3MgHmj3BUiPSqqq5czcm.jpg"},
{title:"Murder Mystery",rating:"6.0",desc:"Vacation turns chaotic",image:"https://www.themoviedb.org/t/p/w1280/bSMSO9xupd4R4vwTPqigHn2quLN.jpg"},
{title:"The Adam Project",rating:"6.7",desc:"Time travel fun",image:"https://www.themoviedb.org/t/p/w1280/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"},
{title:"Night at the Museum",rating:"6.5",desc:"Museum comes alive",image:"https://www.themoviedb.org/t/p/w1280/pDsAAYf6Zn0yiAGJ6lYGs6hoZ4E.jpg"},
{title:"School of Rock",rating:"7.2",desc:"Rock and comedy",image:"https://www.themoviedb.org/t/p/w1280/zXLXaepIBvFVLU25DH3wv4IPSbe.jpg"},
{title:"Pitch Perfect",rating:"7.1",desc:"Music and friendship",image:"https://www.themoviedb.org/t/p/w1280/gsFoJk9g8W3zgaipRrrURk7LbiF.jpg"}

];

// EVENING MOVIES

const eveningMovies = [

{title:"Avengers Endgame",rating:"8.4",desc:"Epic superhero finale",image:"https://www.themoviedb.org/t/p/w1280/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg"},
{title:"Interstellar",rating:"8.7",desc:"Journey through space",image:"https://www.themoviedb.org/t/p/w1280/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg"},
{title:"Inception",rating:"8.8",desc:"Dreams within dreams",image:"https://www.themoviedb.org/t/p/w1280/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg"},
{title:"The Dark Knight",rating:"9.0",desc:"Legendary Batman story",image:"https://www.themoviedb.org/t/p/w1280/xQPgyZOBhaz1GdCQIPf5A5VeFzO.jpg"},
{title:"Top Gun Maverick",rating:"8.3",desc:"Thrilling aerial action",image:"https://www.themoviedb.org/t/p/w1280/n0YuM4f5lvGAP6MAW2kBIzugXnc.jpg"},
{title:"John Wick",rating:"7.5",desc:"Relentless revenge",image:"https://www.themoviedb.org/t/p/w1280/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg"},
{title:"Mad Max Fury Road",rating:"8.1",desc:"Post-apocalyptic chase",image:"https://www.themoviedb.org/t/p/w1280/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg"},
{title:"Dune",rating:"8.0",desc:"Epic sci-fi adventure",image:"https://www.themoviedb.org/t/p/w1280/gDzOcq0pfeCeqMBwKIJlSmQpjkZ.jpg"},
{title:"The Martian",rating:"8.0",desc:"Survival on Mars",image:"https://www.themoviedb.org/t/p/w1280/3ndAx3weG6KDkJIRMCi5vXX6Dyb.jpg"},
{title:"Gladiator",rating:"8.5",desc:"Roman warrior tale",image:"https://www.themoviedb.org/t/p/w1280/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg"},
{title:"Ford v Ferrari",rating:"8.1",desc:"Racing rivalry",image:"https://www.themoviedb.org/t/p/w1280/dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg"},
{title:"The Batman",rating:"7.8",desc:"Dark detective mystery",image:"https://www.themoviedb.org/t/p/w1280/74xTEgt7R36Fpooo50r9T25onhq.jpg"},
{title:"Mission Impossible",rating:"7.8",desc:"Impossible missions",image:"https://www.themoviedb.org/t/p/w1280/l5uxY5m5OInWpcExIpKG6AR3rgL.jpg"},
{title:"Spider-Man NWH",rating:"8.2",desc:"Multiverse adventure",image:"https://www.themoviedb.org/t/p/w1280/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"},
{title:"Guardians Galaxy",rating:"8.0",desc:"Fun space team",image:"https://www.themoviedb.org/t/p/w1280/ufaQyyzSUnQiqUzl4d4HmX9SoPJ.jpg"}

];

// NIGHT MOVIES

const nightMovies = [

{title:"Shutter Island",rating:"8.2",desc:"Mind-bending mystery",image:"https://www.themoviedb.org/t/p/w1280/lAH2HXxIjRWOrFVjwhBSsNr7yGW.jpg"},
{title:"Se7en",rating:"8.6",desc:"Dark serial killer case",image:"https://www.themoviedb.org/t/p/w1280/2xbPhHkDYl26kRspYSAbL4WSYR3.jpg"},
{title:"Prisoners",rating:"8.1",desc:"Kidnapping investigation",image:"https://www.themoviedb.org/t/p/w1280/jsS3a3ep2KyBVmmiwaz3LvK49b1.jpg"},
{title:"The Conjuring",rating:"7.5",desc:"Terrifying paranormal events",image:"https://www.themoviedb.org/t/p/w1280/wVYREutTvI2tmxr6ujrHT704wGF.jpg"},
{title:"Insidious",rating:"6.8",desc:"Supernatural horror",image:"https://www.themoviedb.org/t/p/w1280/1egpmVXuXed58TH2UOnX1nATTrf.jpg"},
{title:"Hereditary",rating:"7.3",desc:"Disturbing family horror",image:"https://www.themoviedb.org/t/p/w1280/4GFPuL14eXi66V96xBWY73Y9PfR.jpg"},
{title:"The Nun",rating:"5.3",desc:"Demonic mystery",image:"https://www.themoviedb.org/t/p/w1280/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg"},
{title:"Get Out",rating:"7.8",desc:"Psychological horror",image:"https://www.themoviedb.org/t/p/w1280/mE24wUCfjK8AoBBjaMjho7Rczr7.jpg"},
{title:"A Quiet Place",rating:"7.5",desc:"Silence means survival",image:"https://www.themoviedb.org/t/p/w1280/pZunUFew9ge4HFT2XYxjIVJXq1o.jpg"},
{title:"Bird Box",rating:"6.6",desc:"Don't look outside",image:"https://www.themoviedb.org/t/p/w1280/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg"},
{title:"The Invisible Man",rating:"7.1",desc:"Invisible terror",image:"https://www.themoviedb.org/t/p/w1280/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg"},
{title:"Smile",rating:"6.5",desc:"Psychological nightmare",image:"https://www.themoviedb.org/t/p/w1280/szII7Fo0TWePGNI7CoWnAdESdZ5.jpg"},
{title:"Midsommar",rating:"7.1",desc:"Cult horror experience",image:"https://www.themoviedb.org/t/p/w1280/yweC2s3UgtSTWp681ZUR2SWs4it.jpg"},
{title:"The Others",rating:"7.6",desc:"Ghostly mystery",image:"https://www.themoviedb.org/t/p/w1280/p8g1vlTvpM6nr2hMMiZ1fUlKF0D.jpg"},
{title:"The Sixth Sense",rating:"8.2",desc:"Iconic supernatural twist",image:"https://www.themoviedb.org/t/p/w1280/vOyfUXNFSnaTk7Vk5AjpsKTUWsu.jpg"}

];

createMovieCards(morningMovies,"morning");
createMovieCards(afternoonMovies,"afternoon");
createMovieCards(eveningMovies,"evening");
createMovieCards(nightMovies,"night");
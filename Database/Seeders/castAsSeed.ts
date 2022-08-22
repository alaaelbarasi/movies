import {Knex} from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("movie_actors").del();

    const movie_casts = [
        {title: "The Shawshank Redemption", actor: "Tim Robbins", as: "Andy Dufresne"},
        {title: "The Shawshank Redemption", actor: "Morgan Freeman", as: "Ellis Boyd 'Red' Redding"},
        {title: "The Shawshank Redemption", actor: "Bob Gunton", as: "Warden Norton"},
        {title: "The Godfather", actor: "Marlon Brando", as: "Don Vito Corleone"},
        {title: "The Godfather", actor: "Al Pacino", as: "Michael"},
        {title: "The Godfather", actor: "James Caan", as: "Sonny"},
        {title: "The Godfather Part II", actor: "Al Pacino", as: "Michael"},
        {title: "The Godfather Part II", actor: "Robert De Niro", as: "Young Vito Corleone"},
        {title: "The Godfather Part II", actor: "Robert Duvall", as: "Tom Hagen"},
        {title: "The Godfather Part III", actor: "Al Pacino", as: "Michael Corleone"},
        {title: "The Godfather Part III", actor: "Diane Keaton", as: "Kay Adams"},
        {title: "The Godfather Part III", actor: "Andy Garcia", as: "Vincent Mancini"},
        {title: "Batman Begins", actor: "Christian Bale", as: "Bruce Wayne"},
        {title: "Batman Begins", actor: "Michael Caine", as: ""},
        {title: "Batman Begins", actor: "Ken Watanabe", as: ""},
        {title: "The Dark Knight", actor: "Christian Bale", as: "Bruce Wayne"},
        {title: "The Dark Knight", actor: "Heath Ledger", as: "Joker"},
        {title: "The Dark Knight", actor: "Aaron Eckhart", as: "Harvey Dent"},
        {title: "The Dark Knight Rises", actor: "Christian Bale", as: "Bruce Wayne"},
        {title: "The Dark Knight Rises", actor: "Tom Hardy", as: "Bane"},
        {title: "The Dark Knight Rises", actor: "Anne Hathaway", as: "Selina"},
        {title: "The Lord of the Rings: The Two Towers", actor: "Elijah Wood", as: "Frodo"},
        {title: "The Lord of the Rings: The Two Towers", actor: "Ian McKellen", as: "Gandalf"},
        {title: "The Lord of the Rings: The Two Towers", actor: "Viggo Mortensen", as: "Aragorn"},
        {title: "The Lord of the Rings: The Fellowship of the Ring", actor: "Elijah Wood", as: "Frodo"},
        {title: "The Lord of the Rings: The Fellowship of the Ring", actor: "Ian McKellen", as: "Gandalf"},
        {title: "The Lord of the Rings: The Fellowship of the Ring", actor: "Orlando Bloom", as: "Legolas"},
        {title: "The Lord of the Rings: The Return of the King", actor: "Elijah Wood", as: "Frodo"},
        {title: "The Lord of the Rings: The Return of the King", actor: "Viggo Mortensen", as: "Aragorn"},
        {title: "The Lord of the Rings: The Return of the King", actor: "Ian McKellen", as: "Gandalf"},
        {title: "The Good, the Bad and the Ugly", actor: "Clint Eastwood", as: "Blondie"},
        {title: "The Good, the Bad and the Ugly", actor: "Eli Wallach", as: "Tuco"},
        {title: "The Good, the Bad and the Ugly", actor: "Lee Van Cleef", as: "Sentenza"},
        {title: "Forrest Gump", actor: "Tom Hanks", as: "Forrest Gump"},
        {title: "Forrest Gump", actor: "Robin Wright", as: "Jenny Curran"},
        {title: "Forrest Gump", actor: "Gary Sinise", as: "Lieutenant Dan Taylor"},
        {title: "Fight Club", actor: "Brad Pitt", as: "Tyler Durden"},
        {title: "Fight Club", actor: "Edward Norton", as: "Narrator"},
        {title: "Fight Club", actor: "Meat Loaf", as: "Robert Paulsen"},
        {title: "Inception", actor: "Leonardo DiCaprio", as: "Cobb"},
        {title: "Inception", actor: "Joseph Gordon-Levitt", as: "Arthur"},
        {title: "Inception", actor: "Elliot Page", as: "Ariadne(as Ellen Page)"},
        {title: "Goodfellas", actor: "Robert De Niro", as: "James Conway"},
        {title: "Goodfellas", actor: "Ray Liotta", as: "Henry Hill"},
        {title: "Goodfellas", actor: "Joe Pesci", as: "Tommy DeVito"},
        {title: "The Matrix", actor: "Keanu Reeves", as: "Neo"},
        {title: "The Matrix", actor: "Laurence Fishburne", as: "Morpheus"},
        {title: "The Matrix", actor: "Carrie-Anne Moss", as: "Trinity"},
        {title: "The Matrix Reloaded", actor: "Keanu Reeves", as: "Neo"},
        {title: "The Matrix Reloaded", actor: "Laurence Fishburne", as: "Morpheus"},
        {title: "The Matrix Reloaded", actor: "Carrie-Anne Moss", as: "Trinity"},
        {title: "The Matrix Revolutions", actor: "Keanu Reeves", as: "Neo"},
        {title: "The Matrix Revolutions", actor: "Laurence Fishburne", as: "Morpheus"},
        {title: "The Matrix Revolutions", actor: "Carrie-Anne Moss", as: "Trinity"},
        {title: "The Matrix Resurrections", actor: "Keanu Reeves", as: "Neo"},
        {title: "The Matrix Resurrections", actor: "Carrie-Anne Moss", as: "Trinity"},
        {title: "The Matrix Resurrections", actor: "Yahya Abdul-Mateen II", as: "Morpheus"},
        {title: "The Silence of the Lambs", actor: "Jodie Foster", as: "Clarice Starling"},
        {title: "The Silence of the Lambs", actor: "Anthony Hopkins", as: "Dr. Hannibal Lecter"},
        {title: "The Silence of the Lambs", actor: "Lawrence A. Bonney", as: "FBI Instructor"},
        {title: "Saving Private Ryan", actor: "Tom Hanks", as: "Captain Miller"},
        {title: "Saving Private Ryan", actor: "Matt Damon", as: "Private Ryan"},
        {title: "Saving Private Ryan", actor: "Tom Sizemore", as: "Sergeant Horvath"},
        {title: "The Green Mile", actor: "Tom Hanks", as: "Paul Edgecomb"},
        {title: "The Green Mile", actor: "Michael Clarke Duncan", as: "John Coffey"},
        {title: "The Green Mile", actor: "David Morse", as: "Brutus 'Brutal' Howell"},
        {title: "Interstellar", actor: "Matthew McConaughey", as: "Cooper"},
        {title: "Interstellar", actor: "Anne Hathaway", as: "Brand"},
        {title: "Interstellar", actor: "Jessica Chastain", as: "Murph"},
        {title: "Spirited Away", actor: "Daveigh Chase", as: "Chihiro(English version)"},
        {title: "Spirited Away", actor: "Suzanne Pleshette", as: "Yubaba(English version)"},
        {title: "Spirited Away", actor: "Miyu Irino", as: "Haku(voice)"},
        {title: "The Lion King", actor: "Matthew Broderick", as: "Simba(voice)"},
        {title: "The Lion King", actor: "Jeremy Irons", as: "Scar(voice)"},
        {title: "The Lion King", actor: "James Earl Jones", as: "Mufasa(voice)"},
        {title: "Gladiator", actor: "Russell Crowe", as: "Maximus"},
        {title: "Gladiator", actor: "Joaquin Phoenix", as: "Commodus"},
        {title: "Gladiator", actor: "Connie Nielsen", as: "Lucilla"},
        {title: "The Departed", actor: "Leonardo DiCaprio", as: "Billy"},
        {title: "The Departed", actor: "Matt Damon", as: "Colin"},
        {title: "The Departed", actor: "Jack Nicholson", as: "Costello"},
        {title: "The Prestige", actor: "Christian Bale", as: "Alfred Borden"},
        {title: "The Prestige", actor: "Hugh Jackman", as: "Robert Angier"},
        {title: "The Prestige", actor: "Scarlett Johansson", as: "Olivia Wenscombe"},
        {title: "Grave of the Fireflies", actor: "Tsutomu Tatsumi", as: "Seita(voice)"},
        {title: "Grave of the Fireflies", actor: "Ayano Shiraishi", as: "Setsuko(voice)"},
        {title: "Grave of the Fireflies", actor: "Akemi Yamaguchi", as: "Aunt(voice)"},
        {title: "Top Gun: Maverick", actor: "Tom Cruise", as: "Capt. Pete 'Maverick' Mitchell"},
        {title: "Top Gun: Maverick", actor: "Jennifer Connelly", as: "Penny Benjamin"},
        {title: "Top Gun: Maverick", actor: "Miles Teller", as: "Lt. Bradley 'Rooster' Bradshaw"},
        {title: "Memento", actor: "Guy Pearce", as: "Leonard"},
        {title: "Memento", actor: "Carrie-Anne Moss", as: "Natalie"},
        {title: "Memento", actor: "Joe Pantoliano", as: "Teddy"},
        {title: "WALL·E", actor: "Ben Burtt", as: "WALL·E(voice)"},
        {title: "WALL·E", actor: "Elissa Knight", as: "EVE(voice)"},
        {title: "WALL·E", actor: "Jeff Garlin", as: "Captain(voice)"},
        {title: "Avengers: Infinity War", actor: "Robert Downey Jr.", as: "Tony Stark"},
        {title: "Avengers: Infinity War", actor: "Chris Hemsworth", as: "Thor"},
        {title: "Avengers: Infinity War", actor: "Mark Ruffalo", as: "Bruce Banner"},
        {title: "Spider-Man: Into the Spider-Verse", actor: "Shameik Moore", as: "Miles Morales(voice)"},
        {title: "Spider-Man: Into the Spider-Verse", actor: "Jake Johnson", as: "Peter B. Parker(voice)"},
        {title: "Spider-Man: Into the Spider-Verse", actor: "Hailee Steinfeld", as: "Gwen Stacy(voice)"},
        {title: "Braveheart", actor: "Mel Gibson", as: "William Wallace"},
        {title: "Braveheart", actor: "Sophie Marceau", as: "Princess Isabelle"},
        {title: "Braveheart", actor: "Patrick McGoohan", as: "Longshanks - King Edward I"},
        {title: "Toy Story", actor: "Tom Hanks", as: "Woody(voice)"},
        {title: "Toy Story", actor: "Tim Allen", as: "Buzz Lightyear(voice)"},
        {title: "Toy Story", actor: "Don Rickles", as: "Mr. Potato Head(voice)"},
        {title: "Inglourious Basterds", actor: "Brad Pitt", as: "Lt. Aldo Raine"},
        {title: "Inglourious Basterds", actor: "Diane Kruger", as: "Bridget von Hammersmark"},
        {title: "Inglourious Basterds", actor: "Eli Roth", as: "Sgt. Donny Donowitz"},
        {title: "Princess Mononoke", actor: "Yôji Matsuda", as: "Ashitaka(voice)"},
        {title: "Princess Mononoke", actor: "Yuriko Ishida", as: "San(voice)"},
        {title: "Princess Mononoke", actor: "Yûko Tanaka", as: "Eboshi-gozen(voice)"},
        {title: "Avengers: Endgame", actor: "Robert Downey Jr.", as: "Tony Stark"},
        {title: "Avengers: Endgame", actor: "Chris Evans", as: "Steve Rogers"},
        {title: "Avengers: Endgame", actor: "Mark Ruffalo", as: "Bruce Banner"},
        {title: "Good Will Hunting", actor: "Robin Williams", as: "Sean"},
        {title: "Good Will Hunting", actor: "Matt Damon", as: "Will"},
        {title: "Good Will Hunting", actor: "Ben Affleck", as: "Chuckie"},
        {title: "Your Name.", actor: "Ryûnosuke Kamiki", as: "Taki Tachibana(voice)"},
        {title: "Your Name.", actor: "Mone Kamishiraishi", as: "Mitsuha Miyamizu(voice)"},
        {title: "Your Name.", actor: "Ryô Narita", as: "Katsuhiko Teshigawara(voice)"},
        {title: "Requiem for a Dream", actor: "Ellen Burstyn", as: "Sara Goldfarb"},
        {title: "Requiem for a Dream", actor: "Jared Leto", as: "Harry Goldfarb"},
        {title: "Requiem for a Dream", actor: "Jennifer Connelly", as: "Marion Silver"},
        {title: "A Beautiful Mind", actor: "Russell Crowe", as: "John Nash"},
        {title: "A Beautiful Mind", actor: "Ed Harris", as: "Parcher"},
        {title: "A Beautiful Mind", actor: "Jennifer Connelly", as: "Alicia Nash"},
        {title: "Catch Me If You Can", actor: "Leonardo DiCaprio", as: "Frank Abagnale Jr."},
        {title: "Catch Me If You Can", actor: "Tom Hanks", as: "Carl Hanratty"},
        {title: "Catch Me If You Can", actor: "Christopher Walken", as: "Frank Abagnale"},
        {title: "Blade Runner", actor: "Harrison Ford", as: "Deckard"},
        {title: "Blade Runner", actor: "Rutger Hauer", as: "Batty"},
        {title: "Blade Runner", actor: "Sean Young", as: "Rachael"},
        {title: "Blade Runner 2049", actor: "Harrison Ford", as: "Rick Deckard"},
        {title: "Blade Runner 2049", actor: "Ryan Gosling", as: "'K'"},
        {title: "Blade Runner 2049", actor: "Ana de Armas", as: "Joi"},
        {title: "My Neighbor Totoro", actor: "Hitoshi Takagi", as: "Totoro(voice)"},
        {title: "My Neighbor Totoro", actor: "Noriko Hidaka", as: "Satsuki(voice)"},
        {title: "My Neighbor Totoro", actor: "Chika Sakamoto", as: "Mei(voice)"},
        {title: "Klaus", actor: "Jason Schwartzman", as: "Jesper(voice)"},
        {title: "Klaus", actor: "J.K. Simmons", as: "Klaus(voice)"},
        {title: "Klaus", actor: "Rashida Jones", as: "Alva(voice)"},
        {title: "Ford v Ferrari", actor: "Matt Damon", as: "Carroll Shelby"},
        {title: "Ford v Ferrari", actor: "Christian Bale", as: "Ken Miles"},
        {title: "Ford v Ferrari", actor: "Jon Bernthal", as: "Lee Iacocca"},
        {title: "Howl's Moving Castle", actor: "Chieko Baishô", as: "Sofî(voice)"},
        {title: "Howl's Moving Castle", actor: "Takuya Kimura", as: "Hauru(voice)"},
        {title: "Howl's Moving Castle", actor: "Tatsuya Gashûin", as: "Karushifâ(voice)"}
    ]

    const movies = await knex('movies').select('id', 'title')
    const actors = await knex('actors').select('id', 'name')

    let cast_arr: any = []

    for (let movie_cast of movie_casts) {

        let movie = movies.filter(m => m.title == movie_cast.title)[0]
        let actor = actors.filter(a => a.name == movie_cast.actor)[0]

        if (movie && actor) {
            cast_arr.push({
                movie_id: movie.id,
                actor_id: actor.id,
                as: movie_cast.as
            })
        }
    }

    // Inserts seed entries
    await knex("movie_actors").insert(cast_arr)
}
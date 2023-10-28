
// http://www.omdbapi.com/?s=[]&apikey=[yourkey]

var searchButton = $("#search-button")
var API_KEY = "1e7145af";

// --------------------------------------------------------------------------
// PRACTISING WITH ASYNC-AWAIT APPROACH OF FETCH
// var movie = "Blade"
// var queryURL = "http://www.omdbapi.com/?s=" + movie + "&plot=short&apikey=" + API_KEY;    

// // console.log(queryURL);

// var seek = async() => {
//     var res = await fetch(queryURL);
//     var data = await res.json();
//     console.log(queryURL);
//     return data
// }

// const displayMovies = async() => {
//     const moviedata = await seek();
    
//     let movieReel = moviedata.map((object) => {
//         console.log(object);
//     })
// } 
// displayMovies()
// //-------------;--------------------------------------------------------------


searchButton.on("click", play)


function def() {
    var movie = "Robin Hood"
    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=" + API_KEY;       
        
    fetch(queryURL)
        .then(function(response){
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            $(".poster").attr("src", data.Poster);
            $(".title").text(data.Title);
            $(".plot").text(data.Plot);
            $(".released").text(data.Released);
            $(".rating").text(data.Rated);
            $(".genre").text(data.Genre);
            $(".type").text(data.Type);
            $(".actors").text(data.Actors);
            $(".box-office").text(data.BoxOffice);
            $(".rotten").text(data.Ratings[1].Value);


        })
    }
    
def()

function play() {
var movie = $("#movie").val().trim();
    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=" + API_KEY;
    // console.log(movie);
    console.log(queryURL);
    fetch(queryURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {

        // data.Search.forEach(element => {
        // var imgEl = $("<img>").attr("src", element.Poster);
        // var titleEl = $("<h1>").text(element.Title);
        // var typeEl = $("<h3>").text(element.Type);
        // $("body").append(imgEl, titleEl, typeEl);
        
        // });
        console.log(data);
        $(".poster").empty()
        $(".poster").attr("src", data.Poster);
        $(".title").empty()
        $(".title").text(data.Title);
        $(".plot").empty()
        $(".plot").text(data.Plot);
        $(".released").empty()
        $(".released").text(data.Released);
        $(".rating").empty()
        $(".rating").text(data.Rated);
        $(".genre").empty()
        $(".genre").text(data.Genre);
        $(".type").empty()
        $(".type").text(data.Type);
        $(".actors").empty()
        $(".actors").text(data.Actors);
        $(".box-office").empty()
        $(".box-office").text(data.BoxOffice);
        $(".rotten").empty()
        $("#movie").val("");
        $(".rotten").text(data.Ratings[1].Value);


    })
}


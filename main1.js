// for ID as parameter
$(document).ready(() => {
  $('#button').click(() => {
    // input left blank
    if ($('#search').val() == '') {
      $('.contentDetail').addClass('hide')
    } else {
      getId()
      $('.contentDetail').addClass('show')
    }
  })
})
let getId = () => {
  var id = document.getElementById('search').value
  console.log(id)
  $.ajax({
    type: 'GET',
    datatype: 'JSON',
    async: true,
    url: `https://www.omdbapi.com/?i=${id}&apikey=980a796e`,
    success: (response) => {
      $('#display').append(response.Title)
      $('.title').append(response.Title)
      $('.runtime').append(response.Runtime)
      $('.language').append(response.Language)
      if (response.Poster !== 'N/A') {
        $('.poster').attr('src', response.Poster)
      }
      $('.plot').append(response.Plot)
      $('.year').append(response.Year)
      $('.rating').append(response.Rating)
      $('.release').append(response.Released)
      $('.actors').append(response.Actors)
      $('.awards').append(response.Awards)
      $('.boxoffice').append(response.BoxOffice)
      $('.production').append(response.Production)
      $('.website').append(response.Website)
      $('.country').append(response.Country)
      $('.director').append(response.Director)
      $('.genre').append(response.Genre)
      $('.writer').append(response.Writer)
      $('.imdbid').append(response.imdbID)
      $('.imdbvote').append(response.imdbVotes)
      $('.imdbrating').append(response.imdbRating)
      console.log(response)
    },
    beforeSend: (response) => {
      $('.loader').addClass('loaderShow')
    },
    complete: (response) => {
      $('.loader').removeClass('loaderShow')
    },
    error: (response) => {
      alert("Request Timed Out(Id)")
    },
    timeout: 5000
  })
}

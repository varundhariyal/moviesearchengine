// for title as parameter
$(document).ready(() => {
  $('#button').click(() => {
    // input left blank
    if ($('search1').val() == '') {
      alert('Year cannot be left blank')
    }
    if ($('#search').val() == '') {
      $('.contentDetail').addClass('hide')
      alert('Title/Id cannot be left empty')
    } else {
      // show card on success response
      getAllData()
      $('.contentDetail').addClass('show')
      $('.mainView').addClass('hide')
    }
  })
})
let getAllData = () => {
  var title = document.getElementById("search").value
  var id = document.getElementById('search').value
  var year = document.getElementById("search1").value
  console.log(title)
  $.ajax({
    type: 'GET',
    datatype: 'JSON',
    async: true,
    url: `https://www.omdbapi.com/?t=${title}&y=${year}&apikey=980a796e`,
    success: (response) => {
      $('#display').append(response.Title)
      $('.title').append(response.Title)
      $('.runtime').append(response.Runtime)
      $('.language').append(response.Language)
      if (response.Poster !== 'N/A') {
        // for displaying default image if poster is not available
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
      $('.lds-hourglass').addClass('loaderShow')
    },
    complete: (response) => {
      $('.lds-hourglass').removeClass('loaderShow')
    },
    error: (response) => {
      alert("Request Timed Out")
    },
    timeout: 5000
  })
}


// Get random color
  $('#randomizer').on('click', function() {
    $.get('http://localhost:3000/colors', function(data) {
      console.log(data)
      $('#grid-'+data.num).css('background-color', `${data.color}`)
    })
  })

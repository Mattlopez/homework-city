$(document).ready(function() {


  $('#submit-btn').click(function(){
    event.preventDefault();

    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();

    if (city == 'new york' || "nyc") {
      $('body').attr('class','nyc');
  }

    else if (city == "san fransisco") {
      $('body').attr('class','sf');
    }

  });

});

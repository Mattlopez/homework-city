$(document).ready(function() {


  $('#submit-btn').click(function(){
    event.preventDefault();

    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();

    if (city == 'new york' || city == 'nyc') {
      $('body').attr('class','nyc');
  }
      else if (city == "san francisco" || city == 'sf') {
      $('body').attr('class','sf');
      console.log('sf chosen')
  }
      else if (city == "sydney") {
        $('body').attr('class', 'sydney')
      }

      else if (city == "los angeles" || city == 'la') {
        $('body').attr('class', 'la')
      }

      else if (city == "austin") {
        $('body').attr('class', 'austin')
      }

  });

});

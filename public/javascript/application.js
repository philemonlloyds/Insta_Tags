var index = 0;
function rotateImage(images,stop){
  $('#img_id').fadeOut('fast', function()
  {
    $(this).attr('src', images[index]);
    $(this).fadeIn('fast', function()
    {
      if (index == images.length-1)
      {
        index = 0
        clearInterval(stop);
      }
      else
      {
        index++;
      }
    });
  });
}

  var search = function(query)
  {
  var url = "https://api.instagram.com/v1/tags/"+ query +"/media/recent?access_token="+ access_token +"&callback=callbackFunction";
    $.ajax({
        url: url,
        dataType: "jsonp",
        success: function(index,response)
        {
          var images = [];
          for(i=0;i<index.data.length;i++)
          {
            images.push(index.data[i].images.standard_resolution.url);
          }

          alert(images.length);
          var refreshIntervalId = setInterval(function () {
          rotateImage(images,refreshIntervalId)
            }, 1000);
        },
      });
  }

// same as dom ready
$(function(){
  $("#submitform").submit(function(ev) {
  ev.preventDefault();
  var query = $('input[name="queryinput"]').val();
  search(query);
  });
});

  var search = function(query) {

  // var url = "https://api.instagram.com/v1/tags/search?q="+ query +"&access_token="+'<%= session[:access_token] %>'+"&callback=callbackFunction";
  // $("#results").html("");

  // var url = "https://api.instagram.com/v1/tags/"+ query +"/media/recent?access_token="+'<%= session[:access_token] %>'+"&callback=callbackFunction";
  var url = "https://api.instagram.com/v1/tags/"+ query +"/media/recent?access_token="+ access_token +"&callback=callbackFunction";

    $.ajax({
        url: url,
        dataType: "jsonp",
        success: function(index,response)
        {
          for(i=0;i<index.data.length;i++)
          {
            // var img = $('<img id="dynamic">');
            var img = $('#img_id');
            img.attr('src', index.data[i].images.standard_resolution.url);
            // img.appendTo('#id_div');
          }
        },
      });
  }

// same as dom ready
$(function(){
  $("#submitbutton").click(function(ev) {
  ev.preventDefault();
  var query = $('input[name="queryinput"]').val();
  search(query);
  });
});

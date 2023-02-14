var len;
var results = '';

function apiSearch() {
    console.log(document.getElementById("query").value)
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "026180caed99490f851e67821e4e4b2f");
      },
      type: "GET",
    })
    .done(function (data) {
        len = data.webPages.value.length;
        results = ""
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }
      $('#searchResults').html(results);
        $("#searchResults").dialog({
            title: "Spooky Search Results",
            height: 500,
            width: 500
        });
        
    })
    .fail(function () {
      alert("error");
    });
}

function imFeelingLucky() {
    var params = {
        "q": $("#query").val(),
        "count": "1",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "026180caed99490f851e67821e4e4b2f");
        },
        type: "GET",
    })
        .done(function (data) {
            window.open(data.webPages.value[0].url, '_blank')
        })
        .fail(function () {
            alert("error");
        });
}


function searcher() {
    apiSearch()
}

var backgroundimageindex = 1;

function backgroundchanger() {
    if (backgroundimageindex === 1) {
        document.getElementById("htmlBody").style.backgroundImage = "url('/Images/spookybackground2.jpg')"
        backgroundimageindex = 2
    }
    else {
        document.getElementById("htmlBody").style.backgroundImage = "url('/Images/spookybackground.jpg')"
        backgroundimageindex = 1
    }
}


const timebtn = document.getElementById("timebtn")
function gettime() {
    const timeblock = document.getElementById("time")
    var now = moment()
    timeblock.prepend("<h1>Current Local Time</h1>")
    timeblock.textContent = now.format("hh:mm A")
    timeblock.style = "color: white"
    $("#time").dialog({
        title: "Current Local Time"
    });
}
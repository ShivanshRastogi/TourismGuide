const instanceUrl = window.location.origin;

$(()=>{
    populateIndiaGate();
    populateLodhiGarden();
    populateCalanguteBeach();
    populateTajMahal();
})

function populateIndiaGate(){
    var htmlStr = '<p align="left"><b><h3>Reviews</h3></b></p>';
    fetch(instanceUrl + "/places", {
        method: "GET", // POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status == 200) {
            response.json().then((data) => {
              if(data != null && data != undefined && data.length > 0){
                  data.forEach((result) =>{
                      if(result.place === 'India Gate'){
                          htmlStr += '<div class=\"sub-container2\">';
                          htmlStr += '<p class="place-text"><span>'+result.name+'</span></p>';
                          htmlStr += '<p class="place-text">'+result.review+'</p></div>';
                      }
                  });
                  $('#indiagatediv').html(htmlStr);
              }
            });
          }
        })
        .catch((err) => {});
}

function populateLodhiGarden(){
    var htmlStr = '<p align="left"><b><h3>Reviews</h3></b></p>';
    fetch(instanceUrl + "/places", {
        method: "GET", // POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status == 200) {
            response.json().then((data) => {
              if(data != null && data != undefined && data.length > 0){
                  data.forEach((result) =>{
                      if(result.place === 'Lodhi Garden'){
                          htmlStr += '<div class=\"sub-container2\">';
                          htmlStr += '<p class="place-text"><span>'+result.name+'</span></p>';
                          htmlStr += '<p class="place-text">'+result.review+'</p></div>';
                      }
                  });
                  $('#lodhidiv').html(htmlStr);
              }
            });
          }
        })
        .catch((err) => {});
}

function populateCalanguteBeach(){
    var htmlStr = '<p align="left"><b><h3>Reviews</h3></b></p>';
    fetch(instanceUrl + "/places", {
        method: "GET", // POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status == 200) {
            response.json().then((data) => {
              if(data != null && data != undefined && data.length > 0){
                  data.forEach((result) =>{
                      if(result.place === 'Calangute Beach'){
                          htmlStr += '<div class=\"sub-container2\">';
                          htmlStr += '<p class="place-text"><span>'+result.name+'</span></p>';
                          htmlStr += '<p class="place-text">'+result.review+'</p></div>';
                      }
                  });
                  $('#calangutebeachdiv').html(htmlStr);
              }
            });
          }
        })
        .catch((err) => {});
}

function populateTajMahal(){
    var htmlStr = '<p align="left"><b><h3>Reviews</h3></b></p>';
    fetch(instanceUrl + "/places", {
        method: "GET", // POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.status == 200) {
            response.json().then((data) => {
              if(data != null && data != undefined && data.length > 0){
                  data.forEach((result) =>{
                      if(result.place === 'Taj Mahal'){
                          htmlStr += '<div class=\"sub-container2\">';
                          htmlStr += '<p class="place-text"><span>'+result.name+'</span></p>';
                          htmlStr += '<p class="place-text">'+result.review+'</p></div>';
                      }
                  });
                  $('#tajmahaldiv').html(htmlStr);
              }
            });
          }
        })
        .catch((err) => {});
}

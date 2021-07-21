const instanceUrl = window.location.origin;

$(document).ready(doInit);

$(function () {
    $("form[name='review-data']").validate({
      rules: {
        userFname: {
          required: true,
        },
        place: {
          required: true,
        },
        reviewStr: {
          required: true,
        },
      },
      messages: {
        userFname: {
          required: "Please provide a Name",
        },
        place: {
          required: "Please provide a Place",
        },        
        reviewStr: {
            required: "Please provide a Review",
          },
      },
      submitHandler: function (form, event) {
        event.preventDefault();
        var userData = $(".review").serializeArray();
        addReview(userData);
      },
    });
  });

function doInit() {
  let sessionUserName = localStorage.getItem("userName");
  if (sessionUserName === null) {
    location.href = "./404.html";
  } else {
    fetch(instanceUrl + "/user_credentials/" + sessionUserName, {
      method: "GET", // POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status == 200) {
          response.json().then((data) => {
            $("#input-username").val(data.username);
            $("#input-email").val(data.email);
            $("#input-first-name").val(data.fName);
            $("#input-last-name").val(data.lName);
            $("#usernameHeading").html('Hello '+ data.username);
            $("#fullNameHeading").html(data.fName + ' ' + data.lName + '<span class="font-weight-light">, ' +data.dob+ '</span>')
          });
        }
      })
      .catch((err) => {});
  }
}

function logout() {
  localStorage.clear();
  location.href = "./index.html";
}

function addReview(userData){
    console.log(userData);
    var body = {
        place : userData[1].value,
        name : userData[0].value,
        review : userData[2].value
    }
    fetch(instanceUrl + "/places", {
        method: "POST", // POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(body)
      })
        .then((response) => {
          if (response.status == 201) {
            response.json().then((data) => {
              if(data.success === true){
                  alert('Review Added');
                  $('.review').trigger("reset");
              }
            });
          }
        })
        .catch((err) => {});
}
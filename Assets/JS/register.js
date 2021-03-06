const instanceUrl = window.location.origin;

$(function () {
  $("form[name='userForm']").validate({
    rules: {
      fName: "required",
      lName: "required",
      username: "required",
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      first_name: "Please enter your firstname",
      last_name: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
      },
      email: "Please enter a valid email address",
    },
    submitHandler: function (form, event) {
      event.preventDefault();
      var userData = $("#user").serializeArray();
      registerUser(userData);
    },
  });
});

function registerUser(userData) {
  console.log(userData);
  var userObj = {
    username: userData[6].value,
    password: userData[7].value,
    email: userData[2].value,
    fName: userData[0].value,
    lName: userData[1].value,
    phone: userData[3].value,
    dob: userData[4].value,
    gender: userData[5].value,
  };
  console.log(userObj);
  fetch(instanceUrl + "/user_credentials", {
    method: "POST", // POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  })
    .then((response) => {
      if (response.status == 201) {
        response.json().then((data) => {
          if (data.success === true) {
            location.href = "./Login_Page.html";
          }
        });
      } else {
        console.log(response.status);
        response.json().then((data) => {
          console.log(data);
          if (data.success === false) {
            alert("User Name or Email Already Exists.");
            $("#user").trigger("reset");
          }
        });
      }
    })
    .catch((err) => {
      alert("Fetch Failed");
    });
}

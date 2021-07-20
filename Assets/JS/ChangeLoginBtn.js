$(function () {
    changeloginBtn();
})

function changeloginBtn(){
    if(localStorage.getItem('userId') != null){
        $('#login-profile').html('My Profile');
        $('#login-profile').attr("href","Profile.html");
    }else{
        $('#login-profile').html('Login/Sign Up');
        $('#login-profile').attr("href","Login_Page.html");
    }
}
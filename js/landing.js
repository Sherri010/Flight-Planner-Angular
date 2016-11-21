$(document).ready(function(){

 $('.modal').modal();
 $('#login').on("submit",function(e){
   e.preventDefault();
   var form_data = $("#login").serialize();
   $.ajax({
     method:"post",
     url:"http://localhost:3000/users/sign_in.json",
     data:{user:{email:"sherri@gmail.com",password:"asdfgh"}},
     success:function(data){
       $('#modal1').modal('close');
        console.log(data);
        sessionStorage.setItem("auth_token", data.auth_token);
        sessionStorage.setItem("current_user", data);
        window.location.replace("dashboard.html");
     },
     error:function(err){
       console.log(err);
     }
   });
  });

  $('#signup').on("submit",function(e){
    e.preventDefault();
    $.ajax({
      method:"POST",
      url:"http://localhost:3000/users",
      data:{name:$("#new_name").val(),email:$("#new_email").val(),password:$("#new_password").val()},
      success:function(data){
        $('#modal2').modal('close');
         console.log(data)
      }
    });
   });

});

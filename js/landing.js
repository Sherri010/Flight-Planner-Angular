$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
$('.modal').modal();
$('#login').on("submit",function(e){
 e.preventDefault();
 var form_data = $("#login").serialize();
 $.ajax({
   method:"post",
   url:"http://localhost:3000/users/sign_in.json",
   data:{email:"sherri@gmail.com",password:"asdfgh"},
   success:function(data){
     $('#modal1').modal('close');
      console.log(data)
   },
   error:function(err){
     console.log(err);
   }
 });

})
});

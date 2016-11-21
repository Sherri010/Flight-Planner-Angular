$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
// $("#login").on('click',function(){
//    $.ajax({
//      method:"GET",
//      url:"http://localhost:3000/users/sign_in",
//      success:function(data){
//        console.log(data);
//
//      }
//    });
//
//
// })


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
      console.log(data)
   },
   error:function(err){
     console.log(err);
   }
 });

});
});

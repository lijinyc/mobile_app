$(function(){
   $('.zc').click(function(){
   	  $('.land').slideUp('slow');  //slideUp由下至上隐藏
   	  $('.register').slideDown('slow'); //slideDown由上至下显示
   })
   //登陆   
   $('.btntLand').click(function(){ 
       var name=$('.name').val();
       var password=$('.password').val();       
       if(name==''){
        alert('请输入手机号');
        return false;
       }
       if(password==''){
        alert('请输入密码');
        return false;
       }
       if(!partten.test(name)){
        alert("您输入的手机号有误，请重新输入");
        return false;
       }
       if(password.length<6 || password.length>12){
        alert("密码最少6位，最多12位");
        return false;
       }

   })
   //注册
   $('.btntRegister').click(function(){
      var telephone=$('.telephone').val();
      var telephoneVerification=$('.telephoneVerification').val();
      var setUp=$('.setUp').val();
      var confirm=$('.confirm').val();
      if(telephone==''){
        alert('请输入手机号');
        return false;
      }
      if(telephoneVerification==''){
        alert('请输入手机验证码');
        return false;
      }
      if(setUp==''){
        alert('请输入设置密码');
        return false; 
      }
      if(confirm==''){
        alert('请输入确认密码');
        return false; 
      }
      if(!partten.test(telephone)){
        alert("您输入的手机号有误，请重新输入");
        return false;
      }
      if(telephoneVerification.length!==4){
        alert("您输入的验证码有误，请重新输入");
        return false;
      }
      if(setUp.length<6 || setUp.length>12 || confirm.length<6 || confirm.length>12){
        alert("密码最少6位，最多12位");
        return false;
      }
      if(setUp!=confirm){
        alert("您两次输入的密码不一样，请重新输入");
        return false;
      }
   })
   //倒计时
   var wait=60;
   function time(o) {
      if (wait == 0) {
          o.removeAttribute("disabled");          
          o.value="获取验证码";
          o.className="but1";
          wait = 60;
      } else {
          o.setAttribute("disabled", true);
          o.value="重新发送(" + wait + ")";
          o.className="but2";
          wait--;
          setTimeout(function() {
              time(o)
          },
          1000)
      }
    }
   //获取验证码
   partten = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
   $('.verificationCode').click(function(){
      var number=$(".telephone").val();      
      if(!partten.test(number)){
        alert("请您输入手机号");
        return false;
      }    
   	 $.ajax({
   	 	url:'', //地址
        type:'post',
        data:{mobile:$(".telephone").val()}, //向后台传手机号
        success: function(e) {
           time(document.getElementById("verificationCode"));         
        }
   	 })
   })
});
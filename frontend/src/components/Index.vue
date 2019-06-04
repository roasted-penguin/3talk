<template>
	<div class="body-center">
		<img id="logo" src="../assets/logo.png">
		<div class="center container">
			<div class="center">
				<form action = "/api/users/" method="post">
					<label for="id" class = "a11y-hidden">아이디</label>
					<input type="text" placeholder="user_id" id="id">
					<label for="password" class = "a11y-hidden">아이디</label>
					<input type="password" placeholder="user_password" id="password">
					<button type="submit" id="button_is_next">Sign in</button>
				</form>
				<div class = "center container-footer">
					<span><a href="#">Sign up</a></span>
					<span><a href="#">Find ID/PassWord</a></span>
				</div>
		</div>
		</div>
		</div>
</template>

<script>
var userid = "userid";
</script>

<style>
.body-center {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(224,41,41,0.4);
  }


  #logo{
  	margin-top: 75px;
  	margin-bottom: 30px;
  }

  .container{
  	position: relative;
  	margin-top: 25px;
  	background-color: #c33;
  	border : 1px solid #fff;
  	border-radius: 10px;
  	height : 150px;
  	width : 500px;
  	padding : 10px;
  	box-sizing: border-box;
  	align-items: center;
  }

  form{
  	display: flex;
  	height : 100px;
  	justify-content: space-around;
  	flex-direction: column;
  	align-items: center;
  }
  input{
  	background-color: rgba(255,255,255,1);
  	border-radius: 5px;
  	border :0px;
  }
  form > *{
  	width: 300px;
  	height: 25px;
  	display: block;
  }
  button{
  	border : 0px;
  	border-radius: 5px;
  	width: 200px;
  	background-color: #993333;
  	color: #fff;
  }
  .container-footer{
  	display : flex;
  	flex-direction: row;
  	justify-content: center;
  	position: absolute;
  	width: 480px;
  	bottom: 10px;
  }
  .container-footer > *{
  	font-size: 10pt;
  	text-decoration: none;
  	margin-left: 15px;
  }

  .a11y-hidden{
	position: absolute !important;
    height: 1px; width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); 
}
</style>

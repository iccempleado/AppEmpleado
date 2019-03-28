 $( document ).ready(function() {
	$("#login-button").click(function(event){
		event.preventDefault();
		var username = $('#inputEmail').val();
		var passw = $('#inputPassword').val();
		if (passw != '' && username != ''){
			$.ajax({ 
				type: 'POST', 
				url: '../../APP_ICC_CONTROL/log_user.php',
				data: {
					"ICCUser" : username,
					"ICCPass" : passw
				},
				success: function (data) { 
					if (data == 'USER NOT FOUND'){
						alert(data);
					}else{
						setTimeout("redireccionarPagina("+data+")", 2000);
					}
				}
			});
			
		}else{
			alert("Campos Null");
		}
	});
	$('#clearUser').on('click', function() {
		localStorage.clear();
		$('#inputEmail').val('');
		$('#inputPassword').val('');
   });
 });
function redireccionarPagina(docum1) {
	var user1=document.getElementById("inputEmail").value;
	var pass1=document.getElementById("inputPassword").value;
	$('form').fadeOut(300);
	$('.wrapper').addClass('form-success');
	window.location = "controlICC.html?user="+user1+"&pass="+pass1+"&docum="+docum1;
}

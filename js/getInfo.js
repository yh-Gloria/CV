let userName = document.getElementById("name");
userName.innerHTML = "杨欢";
let URL = "http://127.0.0.1:4523/mock/1014515/user/1";
let xhr = new XMLHttpRequest();
let data;
let bornDate = document.getElementById("date");
let email = document.getElementById("email");
let address = document.getElementById("address");
let phone = document.getElementById("phone");
addURLParam(URL);
xhr.open("GET",URL,false);
xhr.send(null);
if(xhr.readyState == 4){
		if((xhr.status >= 200 && xhr.status < 300)||xhr.status == 304){
			data = JSON.parse(xhr.responseText);
			console.log(data);
		}else{
			alert("Request was unsuccessful:"+xhr.status);
		}
	}
bornDate.innerHTML+=data.data.date;
email.innerHTML+=data.data.email;
address.innerHTML+=data.data.address;
phone.innerHTML+=data.data.phone;
function addURLParam(url,name,value){
	url += (url.indexOf("?") == -1? "?":"&");
	url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
}
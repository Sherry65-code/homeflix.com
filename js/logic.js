var submit = document.querySelector(".submit");
// var header = document.getElementById('header')
var ad = document.getElementById('ad');
let user = document.getElementById('user').value;

function myEnd() {
  document.getElementById("dark").style.visibility = "collapse";
  document.getElementById("main").style.visibility = "visible";
  console.info("User name "+user+"joined !")
}

submit.addEventListener("click", () => {
//   var name = document.getElementById("name").value;
  document.getElementById("splash").innerHTML = " ";
  document.getElementById("dark").style.visibility = "visible";
  console.warn("User connected to C++ Server")
  setTimeout(myEnd, 2000);
});

ad.addEventListener('click',()=>{
  document.body.innerHTML = "<span class='info'>Thank you for your video. It will be added soon by the permission of Parambir Singh. Thank you.</span>";
})
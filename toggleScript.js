function togglePassword() {
    var x = document.getElementById("input1");
    var image = document.getElementById('myImage');
    if (x.type === "password") {
      x.type = "text";  
      image.src = "img1.png";  
    } else {
      x.type = "password";
      image.src = "img2.png";
    }
  }
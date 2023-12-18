function updateSliderValue() {
  var slider = document.getElementById("volume");

  var passlength = slider.value;

  document.getElementById("pass").textContent =
    "Password Length - " + passlength;
}

function decrementSlider() {
  var slider = document.getElementById("volume");
  var currentValue = parseInt(slider.value);
  if (currentValue > parseInt(slider.min)) {
    slider.value = currentValue - 1;
    updateSliderValue();
  }
}

function incrementSlider() {
  var slider = document.getElementById("volume");
  var currentValue = parseInt(slider.value);
  if (currentValue < parseInt(slider.max)) {
    slider.value = currentValue + 1;
    updateSliderValue();
  }
}

function generatepassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbolChars = "!@#$%^&*()_-+=<>?/{}";
  var numberChars = "0123456789";

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var allChars = "";
  var flag1 = 0;
  var flag2 = 0;
  var flag3 = 0;
  var flag4 = 0;

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      switch (checkbox.name) {
        case "uppercaseChars":
          allChars += uppercaseChars;
          flag1=1;
          break;
        case "lowercaseChars":
          allChars += lowercaseChars;
          flag2=1;
          break;
        case "symbolChars":
          allChars += symbolChars;
          flag3=1;
          break;
        case "numberChars":
          allChars += numberChars;
          flag4=1;
          break;
      }
    }
  });


  var slider1 = document.getElementById("volume");
  var passlength = slider1.value;

  var password = "";

  for (var i = 0; i < passlength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars.charAt(randomIndex);
  }

  document.getElementById("final").value = password;

  
  
  if (passlength<8 && ( flag1==1 || flag2==1)) {
    document.getElementById("photo").src="worst.png"
  }

  if ((passlength>=8 && (flag1==1 && flag2==1))) {
    document.getElementById("photo").src="good.png"    
  }
  if ((passlength>=8 && flag1==1) || (passlength>=8 && flag1==2)) {
    document.getElementById("photo").src="good.png"    
  }
  if ((passlength>=8 && ((flag1==1 || flag2==1) && flag4==1))) {
    document.getElementById("photo").src="better.png"    
  }
  if ((passlength>=8 && ((flag1==1 || flag2==1) && flag3==1))) {
    document.getElementById("photo").src="better.png"    
  }
  if ((passlength>=8 && (flag1==1 && flag2==1 && flag3==1 && flag4==1))) {
    document.getElementById("photo").src="best.png"    
  }



}
window.onload = function () {
  generatepassword();
};

function copyp() {
  var passwordInput = document.getElementById("final");
  passwordInput.select();
  navigator.clipboard.writeText(passwordInput.value);
}

function pinmode() {
  var selectElement = document.getElementById("Passtype");
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  if (selectElement.value === "Pin") {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
      checkbox.disabled = true;
    });
    document.getElementById("Numbers").disabled = false;
    document.getElementById("Numbers").checked = true;

  } else {
    checkboxes.forEach(function (checkbox) {
      checkbox.disabled = false;
      checkbox.checked = true;
    });
  }
  document.getElementById("photo").src="best.png" 
  generatepassword();
}

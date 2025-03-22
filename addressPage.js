function openSendForm() {
    document.getElementById("sendForm").style.display = "block";
  }
  
  function closeSendForm() {
    document.getElementById("sendForm").style.display = "none";
  }

  function openBillForm() {
    document.getElementById("billForm").style.display = "block";
  }
  
  function closeBillForm() {
    document.getElementById("billForm").style.display = "none";
  }


  function updateSendAddress() {

    document.getElementById("sendForm").style.display = "none";

    var name = document.getElementById("name1").value;
    var phone = document.getElementById("phone1").value;
    var country = document.getElementById("region1").value;
    var address1 = document.getElementById("address1Recip").value;
    var address2 = document.getElementById("address2Recip").value;
    var city = document.getElementById("city1").value;
    var zipcode = document.getElementById("zip1").value;

    if (!address2.trim()) {
      var formattedAddress = "Name: " + name + "<br>" + "Phone Number: " + phone + "<br><br>" + country + "<br>" + address1 + "<br>" + city + "<br>" + zipcode;
    } else {
      var formattedAddress = "Name: " + name + "<br>" + "Phone Number: " + phone + "<br><br>" + country + "<br>" + address1 + " (" + address2 + ")<br>" + city + "<br>" + zipcode;

    }
    
    console.log(formattedAddress);
    document.getElementById("sendAddressVal").innerHTML = formattedAddress;

    const checkbox = document.getElementById("same-address");
    if (checkbox.checked) {
      document.getElementById("billAddressVal").innerHTML = formattedAddress;
    }
  }

  function updateBillAddress() {

    document.getElementById("billForm").style.display = "none";

    var name = document.getElementById("name2").value;
    var phone = document.getElementById("phone2").value;
    var country = document.getElementById("region2").value;
    var address1 = document.getElementById("address1Bill").value;
    var address2 = document.getElementById("address2Bill").value;
    var city = document.getElementById("city2").value;
    var zipcode = document.getElementById("zip2").value;

    if (!address2.trim()) {
      var formattedAddress = "Name: " + name + "<br>" + "Phone Number: " + phone + "<br><br>" + country + "<br>" + address1 + "<br>" + city + "<br>" + zipcode;
    } else {
      var formattedAddress = "Name: " + name + "<br>" + "Phone Number: " + phone + "<br><br>" + country + "<br>" + address1 + " (" + address2 + ")<br>" + city + "<br>" + zipcode;

    }
  
    console.log(formattedAddress);
    document.getElementById("billAddressVal").innerHTML = formattedAddress;

  }

/*
function displayValue() {
            // Get the value from the dropdown
            const selectedValue = document.getElementById("location").value;

            // Print the value on the screen
            if (selectedValue) {
                document.getElementById("output").innerText = `You selected: ${selectedValue}`;
            } else {
                document.getElementById("output").innerText = "Please select a country/region.";
            }
        }
*/
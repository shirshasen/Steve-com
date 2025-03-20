function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function updateAddress() {

    document.getElementById("myForm").style.display = "none";

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var country = document.getElementById("region").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var city = document.getElementById("city").value;
    var zipcode = document.getElementById("zip").value;

    var formattedAddress = name + "<br>" + phone + "<br><br>" + country + "<br>" + address1 + address2 + "<br>" + city + "<br>" + zipcode;

    console.log(formattedAddress);
    document.getElementById("addressVal").innerHTML = formattedAddress;

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
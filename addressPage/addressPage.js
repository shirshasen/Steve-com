// backend for entering addresses for recipient and billing
// Humna Sultan ; CS55 Final Proj. Steve-Con

function openSendForm() {
    document.getElementById("sendForm").style.display = "block";
}
// opens form for recipient address for order
  
function closeSendForm() {
  document.getElementById("sendForm").style.display = "none";
}
// closes form for recipient address for order

function openBillForm() {
  document.getElementById("billForm").style.display = "block";
}
// opens form for billing address for order
  
function closeBillForm() {
  document.getElementById("billForm").style.display = "none";
}
// closes form for recipient address for order


function updateSendAddress() {
  // updates recipient address when the user submits the associated form

    document.getElementById("sendForm").style.display = "none"; // closes form

    var name = document.getElementById("name1").value;
    var phone = document.getElementById("phone1").value;
    var country = document.getElementById("region1").value;
    var address1 = document.getElementById("address1Recip").value;
    var address2 = document.getElementById("address2Recip").value;
    var city = document.getElementById("city1").value;
    var zipcode = document.getElementById("zip1").value;
    // all values with "1" after them refer to the recipient value

    if (!address2.trim()) { // if user did not include additional address info (apartment building etc.)
      var formattedAddress = "Name: " + name + "<br>" + "Phone Number: " + phone + "<br><br>" + country + "<br>" + address1 + "<br>" + city + "<br>" + zipcode;
    } else { // if the user did include additional address info
      var formattedAddress = "Name: " + name + "<br>" + "Phone Number: " + phone + "<br><br>" + country + "<br>" + address1 + " (" + address2 + ")<br>" + city + "<br>" + zipcode;
    }
    
    document.getElementById("sendAddressVal").innerHTML = formattedAddress;
    // update the current displayed address with information entered in the form

    const checkbox = document.getElementById("same-address"); // whether the user said that recipient address is same as billing address
    if (checkbox.checked) { // if user said that recipient address = billing address, set the billing address to be the same
      document.getElementById("billAddressVal").innerHTML = formattedAddress;
    }
}

function updateBillAddress() {
  // updates billing address when the user submits the associated form

    document.getElementById("billForm").style.display = "none"; // closes form

    var name = document.getElementById("name2").value;
    var phone = document.getElementById("phone2").value;
    var country = document.getElementById("region2").value;
    var address1 = document.getElementById("address1Bill").value;
    var address2 = document.getElementById("address2Bill").value;
    var city = document.getElementById("city2").value;
    var zipcode = document.getElementById("zip2").value;
    // all values with "2" after them refer to the billing value

    if (!address2.trim()) { // if user did not include additional address info (apartment building etc.)
      var formattedAddress = "Name: " + name + "<br>" + "Phone Number: " + phone + "<br><br>" + country + "<br>" + address1 + "<br>" + city + "<br>" + zipcode;
    } else { // if the user did include additional address info
      var formattedAddress = "Name: " + name + "<br>" + "Phone Number: " + phone + "<br><br>" + country + "<br>" + address1 + " (" + address2 + ")<br>" + city + "<br>" + zipcode;

    }

    document.getElementById("billAddressVal").innerHTML = formattedAddress;
    // update the current displayed address with information entered in the form
}
function total() {
    let parent = document.querySelector(".display");
    let heading2 = document.createElement("h2");
    let heading3 = document.createElement("h2")
    let heading4 = document.createElement("h2");
    let heading5 = document.createElement("h2")
    let heading = document.createElement("h2");
    let heading1 = document.createElement("h2");
    parent.appendChild(heading2);
    parent.appendChild(heading3);
    parent.appendChild(heading4);
    parent.appendChild(heading5);
    parent.appendChild(heading);
    parent.appendChild(heading1);
   
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let place = document.getElementById("place").value;
    
    let starters = document.getElementById("n1").value;
    let chicken = document.getElementById("n2").value;
    let burger = document.getElementById("n3").value;
    let chinese = document.getElementById("n4").value;
    let biryani = document.getElementById("n5").value;
    let gstpercent = document.getElementById("n6").value;
    let button = document.getElementById("btn");
  
    let amount = parseInt(starters)+parseInt(chicken)+parseInt(burger)+parseInt(chinese)+parseInt(biryani)
    let totalAmount = amount + ((gstpercent / 100)*amount);
  
    button.addEventListener("click", () => {
      heading2.innerHTML = `Name:${name}`;
      heading3.innerHTML = `phone:${phone}`;
      heading4.innerHTML = `email:${email}`;
      heading5.innerHTML = `place:${place}`;
      heading.innerHTML = `The total amount is:${amount}`;
      heading1.innerHTML = `The total bill payment with ${gstpercent}% GST is ${totalAmount}`;
      heading4.style.cssText = "color:yellow; text-transform:Titlecase; font-family: 'Poppins', sans-serif; text-align:center"
      heading3.style.cssText = "color:yellow; text-transform:Titlecase; font-family: 'Poppins', sans-serif; text-align:center"
      heading2.style.cssText = "color:yellow; text-transform:Titlecase; font-family: 'Poppins', sans-serif; text-align:center"
      heading5.style.cssText = "color:yellow; text-transform:Titlecase; font-family: 'Poppins', sans-serif; text-align:center"
      heading.style.cssText  = "color:yellow; text-transform:Titlecase; font-family: 'Poppins', sans-serif; text-align:center"
      heading1.style.cssText = "color:yellow; text-transform:Titlecase; font-family: 'Poppins', sans-serif; text-align:center"
     
    });
  }
  
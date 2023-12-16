let cafeContainer = document.getElementById("cafe-container");

for (idx in cafes) {
  let cafe = cafes[idx];
  let cafeDiv = document.createElement("div"); // outermost div for the cafe card
  cafeDiv.className = "cafe-item";

  // Cafe image
  let cafe_img = document.createElement("img");
  cafe_img.src = cafe.getImagePath();
  cafe_img.className = "cafe-img";
  cafeDiv.appendChild(cafe_img);

  // Cafe name and address
  let details_div = document.createElement("div");
  details_div.className = "cafe-details";
  let details_text = document.createElement("p");
  details_text.innerHTML=`${cafe.name}<br />${cafe.address}`;
  details_div.appendChild(details_text);
  cafeDiv.appendChild(details_div);
  
  // Add the cafe card to the main container
  cafeContainer.append(cafeDiv);
}

function showReview(idName) {
  let cafe_item = document
    .getElementById(idName)
    .getElementsByClassName("cafe-details");
  console.log(cafe_item[0].innerHTML);
  let newHTML = "<p>I change this</p>";
  cafe_item[0].innerHTML = newHTML;
}


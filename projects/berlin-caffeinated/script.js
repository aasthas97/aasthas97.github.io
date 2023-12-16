function createCafeCard(cafeObject){
  let cafeDiv = document.createElement("div"); // outermost div for the cafe card
  cafeDiv.className = "cafe-item";
  cafeDiv.id = idx;
  cafeDiv.addEventListener("click", showReview);
  
  // Cafe image
  let cafeImg = document.createElement("img");
  cafeImg.src = cafeObject.getImagePath();
  cafeImg.className = "cafe-img";

  // Cafe name and address
  let detailsDiv = document.createElement("div");
  detailsDiv.className = "cafe-details";
  let details_text = document.createElement("p");
  details_text.innerHTML=`${cafeObject.name}<br />${cafeObject.address}`;
  detailsDiv.appendChild(details_text);

  cafeDiv.appendChild(cafeImg);
  cafeDiv.appendChild(detailsDiv);
  return cafeDiv;
}

// TODO: Convert these cards into grids instead of using paragraphs
function createReviewCard(cafeObject){
  // Cafe Rating and Review
  let reviewDiv = document.createElement("div");
  reviewDiv.className = "cafe-review";
  let reviewText = document.createElement("p");
  reviewText.innerHTML=`<b>Rating:</b> ${cafeObject.rating}<br /><b>Review:</b>${cafeObject.review}`;
  reviewDiv.appendChild(reviewText);
  return reviewDiv;
}

let cafeContainer = document.getElementById("cafe-container");


for (idx in cafes) {
  let cafe = cafes[idx];
  let cafeDiv = createCafeCard(cafe); 
  // Add the cafe card to the main container
  cafeContainer.append(cafeDiv);
}

function showReview() {
  const matchedCafe = cafes[this.id];
  if (matchedCafe.reviewDisplayed == false){
    // Show review 
    this.innerHTML = "";
    this.appendChild(createReviewCard(matchedCafe));
    matchedCafe.reviewDisplayed = true;
  }
  else{
    // Hide review 
    this.innerHTML = "";
    this.appendChild(createCafeCard(matchedCafe));
    matchedCafe.reviewDisplayed = false;
  }
}


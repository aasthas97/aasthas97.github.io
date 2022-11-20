function showReview(idName) {
  let cafe_item = document
    .getElementById(idName)
    .getElementsByClassName("cafe-details");
  console.log(cafe_item[0].innerHTML);
  let newHTML = "<p>I change this</p>";
  cafe_item[0].innerHTML = newHTML;
}

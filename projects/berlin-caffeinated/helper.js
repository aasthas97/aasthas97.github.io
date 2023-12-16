class Cafe {
    constructor(name, address, rating, review, img=null) {
      this.name = name,
      this.address = address,
      this.imageSrc = img,
      this.rating = rating,
      this.review = review
    }

    getImagePath(){
        if (this.imageSrc == null){
            return `./images/no_photo.jpg`;
        }
    return `./images/${this.imageSrc}`;
    }
  }

// I am writing whole reviews in here. maybe put them in a db?
cafes = [new Cafe("Cafe Nook", address="Hans-Otto-Straße 6, 10407", rating=5, review="Perfect for hanging out with a friend or a coffee date. Had two flat whites and a chocolate cake. The latter was delicious. Great service, great coffee, definitely recommended.", img="cafeNook.jpeg", ),
new Cafe("Zazza Moabit", address="Lehrter Straße 24e, 10557", rating=4, review="Was my regular haunt for some time. Nice croissants and sandwiches. I personally find the beans a bit overpriced. Good service and the outdoor seating is amazing in the summer.", img="zazza.jpeg",),
new Cafe("Kala Cafe", address="Warschauer Straße 71, 10243", rating=3, review="I'm not a fan of the coffee here. But the cakes and the food are fresh and really tasty, albeit overpriced. Stays pretty crowded throughout the day due to its location."),
new Cafe("K Lieblings", address="Karl-Marx-Allee 136, 10243", rating=3.5, review="Unfortunately shut down recently and replaced by another cafe which I am absolutely not a fan of."),
new Cafe("Bonpland Coffee", address="Proskauer Straße 34, 10247", rating=3.5, review="Quite tiny and not a lot of seating. Good sandwiches, decent coffee.", img="bonpland.jpeg"),
new Cafe("Boxi Espresso", address="Boxhagener Straße 12, 10245", rating=4, review="Cool design, great coffee, the chocolate cake was too dry and too sweet for me.", img="boxi.jpeg"),
new Cafe("Shakespeare & Sons", address="Warschauer Straße 74, 10243", rating=2.5, review="Nope, nope, nope. The flat white was not a flat white. The bagels are overpriced. It's a nice spot if you want to browse or even read the books, but I would not go for the coffee.", img="s_and_s.jpeg"),
new Cafe("19Grams Alexanderplatz", address="Karl-Liebknecht-Straße 13, 10178", rating=3.5, review="Unfortunately, I went there right before closing time so we had to take the coffees in take-away cups and they got pretty cold. I have tried their whole bean blends and they were quite nice. Worth a try.", img="19grams.jpeg"),
new Cafe("Pretty Cafe Deli", address="Karl-Marx-Allee 110, 10243", rating=4.5, review="Their coffees are not that great, but the food is delicious. The seating is cozy, but not very big. Reccommended for laid-back weekend brunches.", img="prettydeli.jpg"),
new Cafe("Black and White Coffee Shop", address="R. Marreiros Netto 40, 8600-754 Portugal", rating=5, review="Went here thrice and it came through each time. Great coffee, great smoothies and great food.", img="blackwhite.jpg"),
new Cafe("Blue Tokai Coffee Roasters", address="Netaji Subhash Place, Wazirpur, 110034 India", rating=4.5, review="Blue Tokai is synonymous with the Indian third wave coffee scene. Their newest NSP branch is cozy and quiet, with a great iced Vietnamese coffee.", img="bt.jpg"),
new Cafe("London Tiger Coffee", address="R. Marreiros Netto 14, 8600-754 Portugal", rating=1, review="Lukewarm coffee and it had no flavour, either. Not recommended.", img="londontiger.jpg"),
new Cafe("Mama Coffee", address="6, Vodičkova 674, Nové Město, 110 00 Czechia", rating=4, review="Nice space with gorgeous lighting in the afternoon. Strong, bold coffee.", img="mamacoffee.jpg"),
new Cafe("The Miners Coffee", address="Železná 490/14, 110 00 Staré Město, Czechia", rating=3.5, review="I went in very early and they only had breakfast bagels available. The salmon bagel was very dry, the coffee was good. I also tried their medium-roasted decaf beans, which were not worth the exorbitant price.", img="miners.jpg"),
new Cafe("Cafe Morgenduft", address="Warschauer Str. 60, 10243 Berlin", rating=1.5, review="Went in after seeing the raving Google reviews and was sorely disappointing. The milk was scalding hot and boiled (as opposed to steamed). The cakes were way too sweet and the breakfast was too oily.", img="morgenduft.jpg"),
new Cafe("Pauseteria", address="U Radnice 11/2, 110 00 Josefov, Czechia", rating=3.5, review="Me and cakes. The waiter recommended their mango coconut cake for the hot day and it was mild yet flavourful. I asked for a flat white but got a light-roast cappucino. This space is quite big but still quiet and lovely.", img="pause.jpg"),
new Cafe("Zeitlos das Brunnen & Keller Cafe", address="Ehm-Welk-Straße 37, 03222 Lübbenau", rating=4, review="Very standard Kaffee mit milch, but their special cake is something I dream of to this day. I will go to Spreewald again just for this.", img="zeitlos.jpg")
]
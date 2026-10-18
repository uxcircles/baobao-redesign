/* Menu content. Dish names & Chinese names from baobaolondon.co.uk; prices follow the Figma design. */
window.BAOBAO_MENU = [
  {
    id: "bao",
    title: "Bao",
    bg: "assets/img/bao-dark.jpg",
    plate: "assets/img/dishes/chicken.jpg",
    items: [
      { name: "Classic Braised Pork", zh: "經典豬肉包", price: 10, img: "assets/img/dishes/braised-pork.jpg",
        desc: "Fluffy bao filled with tender braised pork belly, simmered in a savoury soy-based sauce, and topped with fresh pickles for a perfect bite." },
      { name: "Fried Chicken", zh: "香酥雞包", price: 10, img: "assets/img/dishes/chicken.jpg",
        desc: "Crispy fried chicken served in a soft bao bun, paired with fresh veggies and a tangy sauce for a delightful crunch and flavour." },
      { name: "Teriyaki Mushroom", zh: "照燒蘑菇包", price: 10, veg: true, img: "assets/img/dishes/teriyaki.jpg",
        desc: "Savoury teriyaki-glazed mushrooms nestled in a fluffy bao bun, complemented with fresh greens for a rich, umami-packed bite." },
      { name: "Crispy Tofu", zh: "酥炸豆腐包", price: 10, veg: true, img: "assets/img/dishes/tofu.jpg",
        desc: "Golden crispy tofu paired with vibrant veggies and a tangy sauce, all wrapped in a soft, pillowy bao bun." },
      { name: "Prawn Cake", zh: "蝦餅包", price: 10, img: "assets/img/dishes/prawn-cake.jpg",
        desc: "Deliciously golden prawn cake paired with crisp lettuce, tangy mayo, and a hint of fresh herbs, all perfectly tucked into a soft, pillowy bao bun." }
    ]
  },
  {
    id: "mains",
    title: "Mains",
    bg: "assets/img/mains-dark.jpg",
    plate: "assets/img/dishes/noodle-soup.jpg",
    items: [
      { name: "Signature Braised and Minced Pork Rice", zh: "經典滷肉飯", price: 16, img: "assets/img/dishes/pork-rice.jpg",
        desc: "Tender braised and minced pork served on rice, topped with a savoury sauce for a comforting, hearty meal." },
      { name: "Authentic Taiwanese Beef Noodle Soup", zh: "正宗台灣紅燒牛肉麵", price: 16, img: "assets/img/dishes/beef-noodle-soup.jpg",
        desc: "Tender beef, hearty noodles, and rich broth infused with star anise, soy, and spices, creating a comforting and flavourful Taiwanese classic." },
      { name: "Taiwanese Chicken Rice", zh: "台式家鄉雞肉飯", price: 16, img: "assets/img/dishes/chicken-rice.jpg",
        desc: "Tender poached chicken served on fragrant rice, drizzled with a light soy-based sauce for a simple yet flavourful dish." },
      { name: "Chicken with Sesame Oil Noodle Soup", zh: "麻油雞湯麵", price: 16, img: "assets/img/dishes/noodle-soup.jpg",
        desc: "Tender chicken in a fragrant sesame oil broth, served with noodles and a hint of ginger, garlic, and scallions for a comforting, flavourful dish." }
    ]
  },
  {
    id: "xiaochi",
    title: "Xiaochi",
    bg: "assets/img/xiaochi-dark.jpg",
    plate: "assets/img/dishes/dumplings.jpg?v=2",
    items: [
      { name: "Three-Cup Chicken", zh: "三杯雞", price: 14, img: "assets/img/dishes/three-cup-chicken.jpg",
        desc: "A classic Taiwanese dish, featuring tender chicken cooked in a savoury blend of soy sauce, sesame oil, and rice wine, with fresh basil for an aromatic finish." },
      { name: "Taiwanese Fried Chicken", zh: "台灣鹹酥雞", price: 12, img: "assets/img/dishes/xiaochi.jpg",
        desc: "Crispy, golden-brown chicken, seasoned with a special blend of spices and herbs, delivering a crunchy, flavour-packed bite that's a Taiwanese street food favourite." },
      { name: "Salt and Pepper Tofu", zh: "椒鹽豆腐", price: 10, veg: true, img: "assets/img/dishes/salt-pepper-tofu.jpg",
        desc: "Crispy fried tofu, seasoned with a savoury mix of salt, pepper, and aromatic spices, offering a perfect balance of crunch and flavour in every bite." },
      { name: "Agedashi Tofu", zh: "揚出豆腐", price: 10, veg: true, img: "assets/img/dishes/agedashi-tofu.jpg",
        desc: "Crispy tofu in savoury dashi broth, topped with bonito flakes and spring onions for a delicious umami flavour." },
      { name: "Chive and Chicken Dumplings", zh: "韭菜餃", price: 10, img: "assets/img/dishes/dumplings.jpg?v=2",
        desc: "Tender chicken and aromatic chives wrapped in a soft dumpling skin, served with XO sauce or Sichuan chilli oil." },
      { name: "Hakka Salted Pork", zh: "客家鹹豬肉", price: 12, img: "assets/img/dishes/hakka.jpg",
        desc: "A famous Hakka market snack: pork belly cured with salt and spices, roasted and sliced, best enjoyed with rice." }
    ]
  },
  {
    id: "sides",
    title: "Sides",
    bg: "assets/img/tile-edamame.jpg",
    plate: "assets/img/dishes/edamame.jpg",
    items: [
      { name: "Sesame Spinach", zh: "芝麻醬菠菜", price: 5, veg: true, img: "assets/img/dishes/sesame-spinach.jpg",
        desc: "Blanched spinach dressed in a nutty sesame sauce." },
      { name: "Edamame", zh: "毛豆", price: 5, veg: true, img: "assets/img/dishes/edamame.jpg",
        desc: "Steamed soy beans tossed with sea salt and chilli." },
      { name: "Golden Kimchi", zh: "黃金泡菜", price: 5, veg: true, img: "assets/img/dishes/golden-kimchi.jpg",
        desc: "Taiwanese-style pickled cabbage, sweet, tangy and gently spiced, with crispy wonton crackers." },
      { name: "Classic Kimchi", zh: "韓式泡菜", price: 5, veg: true, img: "assets/img/dishes/classic-kimchi.jpg",
        desc: "Fermented napa cabbage with chilli and garlic, served with crispy wonton crackers." },
      { name: "Bao S'more", zh: "包斯摩爾", price: 6, veg: true, img: "assets/img/dishes/smore.jpg",
        desc: "Our East-meets-West dessert: toasted marshmallow and chocolate tucked into a soft, warm bao." }
    ]
  }
];

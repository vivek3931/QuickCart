import iphone14pro from "/src/assets/iphone14pro.png"
import samsungs23ultra from "/src/assets/samsungs23ultra.png"
import oneplus12 from "/src/assets/oneplus12.png"
import pixel8pro from "/src/assets/pixel8pro.png"
import realmegt from "/src/assets/realmegt.png"
import redminote13 from "/src/assets/redminote13.png"
import motoedge40 from "/src/assets/motoedge40.png"
import vivox100 from "/src/assets/vivox100.png"
import opporeno11pro from "/src/assets/opporeno11pro.png"
import nothingphone2 from "/src/assets/nothingphone2.png"
import iphone13 from "/src/assets/iphone13.png"
import samsunga54 from "/src/assets/samsunga54.png"
import pocox5pro from "/src/assets/pocox5pro.png"
import asusrog7 from "/src/assets/asusrog7.png"
import iqooneo7 from "/src/assets/iqooneo7.png"
import honormagic6 from "/src/assets/honormagic6.png"
import sony from "/src/assets/sony.png"
import lava from "/src/assets/lava.png"
import moto from "/src/assets/moto.png"
import infinix from "/src/assets/infinix.png"




const products = [
  {
    "id": "1",
    "name": "iPhone 14 Pro",
    "price": 999,
    "offerPrice": 899,
    "img": iphone14pro,
    "des": "Experience the power of the iPhone 14 Pro. Featuring the groundbreaking A16 Bionic chip, a stunning ProMotion display, and a versatile pro camera system for exceptional photos and videos. 1",
    "camera": "48MP Main, 12MP Ultra Wide, 12MP Telephoto",
    "ram": "6GB",
    "battery": "3200 mAh"
  },
  {
    "id": "2",
    "name": "Samsung Galaxy S23 Ultra",
    "price": 1199,
    "offerPrice": 1099,
    "img": samsungs23ultra,
    "des": "The Samsung Galaxy S23 Ultra: Epic performance, a revolutionary camera with incredible zoom, and the integrated S Pen for ultimate productivity.",
    "camera": "200MP Wide, 12MP Ultra Wide, 10MP Telephoto (3x), 10MP Telephoto (10x)",
    "ram": "8GB/12GB",
    "battery": "5000 mAh"
  },
  {
    "id": "3",
    "name": "OnePlus 12",
    "price": 749,
    "offerPrice": 699,
    "img": oneplus12,
    "des": "The OnePlus 12: Experience blazing-fast performance, a stunningly bright display, and a powerful camera system co-engineered with Hasselblad. Unleash smooth performance and immerse yourself in a vibrant display with the OnePlus 12. Designed for speed and visual excellence.",
    "camera": "50MP Wide (OIS), 48MP Ultra Wide, 64MP Telephoto (3x Optical Zoom)",
    "ram": "8GB/12GB/16GB",
    "battery": "5400 mAh"
  },
  {
    "id": "4",
    "name": "Google Pixel 8 Pro",
    "price": 999,
    "offerPrice": 949,
    "img": pixel8pro,
    "des": "The Google Pixel 8 Pro: Experience the best of Google AI with a powerful camera, enhanced security, and a brilliant, smooth display.Capture stunning photos and videos with Google's advanced camera technology, powered by AI, on the secure and intelligent Pixel 8 Pro.",
    "camera": "50MP Wide (OIS), 48MP Ultra Wide, 48MP Telephoto (5x Optical Zoom)",
    "ram": "12GB",
    "battery": "5050 mAh"
  },
  {
    "id": "5",
    "name": "Realme GT Neo 5",
    "price": 499,
    "offerPrice": 459,
    "img":realmegt,
    "des": "The Realme GT Neo 5: Experience a smooth 144Hz display, powerful Snapdragon 8+ Gen 1 performance, and incredibly fast 150W charging.Enjoy blazing-fast performance and a fluid 144Hz AMOLED display on the Realme GT Neo 5, designed for smooth gaming and everyday use.",
    "camera": "50MP Wide (OIS), 8MP Ultra Wide, 2MP Macro",
    "ram": "8GB/12GB/16GB",
    "battery": "5000 mAh"
  },
  {
    "id": "6",
    "name": "Redmi Note 13 Pro",
    "price": 349,
    "offerPrice": 329,
    "img": redminote13,
    "des": "The Redmi Note 13 Pro: Capture stunning photos with its high-resolution camera, enjoy a smooth and vibrant display, and experience reliable performance.Experience detailed photography with the Redmi Note 13 Pro's impressive camera, complemented by a vibrant display for immersive viewing.",
    "camera": "200MP Wide (OIS), 8MP Ultra Wide, 2MP Macro",
    "ram": "8GB/12GB",
    "battery": "5000 mAh"
  },
  {
    "id": "7",
    "name": "Motorola Edge 40",
    "price": 699,
    "offerPrice": 649,
    "img": motoedge40,
    "des": "The Moto Edge 40: Experience a sleek design, a vibrant pOLED display with a high refresh rate, and a capable camera system for great photos and videos.Sleek and stylish, the Moto Edge 40 features a stunning pOLED display with smooth scrolling and a comfortable in-hand feel. ",
    "camera": "50MP Wide (OIS), 13MP Ultra Wide (Macro)",
    "ram": "8GB",
    "battery": "4400 mAh"
  },
  {
    "id": "8",
    "name": "Vivo X100",
    "price": 799,
    "offerPrice": 749,
    "img": vivox100,
    "des": "The Vivo X100: Capture stunning photos with its ZEISS-engineered camera system, enjoy powerful Dimensity 9300 performance, and a vibrant 120Hz AMOLED display.Elevate your mobile photography with the Vivo X100's versatile ZEISS triple-camera setup, featuring a telephoto lens for impressive zoom capabilities. ",
    "camera": "50MP Wide (OIS), 50MP Ultra Wide, 64MP Telephoto (3x Optical Zoom)",
    "ram": "12GB/16GB",
    "battery": "5000 mAh"
  },
  {
    "id": "9",
    "name": "Oppo Reno 11 pro",
    "price": 599,
    "offerPrice": 549,
    "img": opporeno11pro,
    "des": "The Oppo Reno 11: Capture stunning portraits with its advanced camera system, enjoy a sleek and stylish design, and a vibrant AMOLED display for immersive visuals.Elevate your portrait game with the Oppo Reno 11's specialized camera features, designed to capture beautiful and natural-looking photos of people.",
    "camera": "50MP Wide (OIS), 8MP Ultra Wide, 32MP Telephoto (2x Optical Zoom)",
    "ram": "12GB",
    "battery": "4700 mAh"
  },
  {
    "id": "10",
    "name": "Nothing Phone 2",
    "price": 649,
    "offerPrice": 599,
    "img": nothingphone2,
    "des": "The Nothing Phone (2): Experience a unique Glyph Interface, powerful Snapdragon 8+ Gen 1 performance, and a versatile dual-lens camera system.Stand out with the Nothing Phone (2)'s innovative Glyph Interface, offering a new way to interact with notifications and more, alongside flagship-level performance.",
    "camera": "50MP Wide (OIS), 50MP Ultra Wide",
    "ram": "8GB/12GB",
    "battery": "4700 mAh"
  },
  {
    "id": "11",
    "name": "iPhone 13",
    "price": 699,
    "offerPrice": 629,
    "img": iphone13,
    "des": "The iPhone 13: Featuring a powerful A15 Bionic chip, a bright and vibrant Super Retina XDR display, and an advanced dual-camera system for stunning photos and videos.Experience fast performance and capture incredible photos and videos with the iPhone 13's A15 Bionic chip and advanced dual-camera system.",
    "camera": "12MP Wide (OIS), 12MP Ultra Wide",
    "ram": "4GB",
    "battery": "3240 mAh"
  },
  {
    "id": "12",
    "name": "Samsung Galaxy A54",
    "price": 499,
    "offerPrice": 459,
    "img": samsunga54,
    "des": "The Samsung Galaxy A54 5G: Enjoy a vibrant Super AMOLED display, a versatile camera system for great photos and videos, and reliable 5G connectivity. Immerse yourself in the Galaxy A54 5G's bright and smooth Super AMOLED display, and capture stunning moments with its versatile camera setup.",
    "camera": "50MP Wide (OIS), 12MP Ultra Wide, 5MP Macro",
    "ram": "6GB/8GB",
    "battery": "5000 mAh"
  },
  {
    "id": "13",
    "name": "Poco X5 Pro",
    "price": 379,
    "offerPrice": 349,
    "img": pocox5pro,
    "des": "The Poco X5 5G: Enjoy a smooth 120Hz AMOLED display, reliable Snapdragon performance, and 5G connectivity for fast downloads and streaming.Experience smooth visuals on the Poco X5 5G's 120Hz AMOLED display, powered by a capable Snapdragon processor for everyday tasks and gaming.",
    "camera": "108MP Wide, 8MP Ultra Wide, 2MP Macro",
    "ram": "6GB/8GB",
    "battery": "5000 mAh"
  },
  {
    "id": "14",
    "name": "Asus ROG Phone 7",
    "price": 1099,
    "offerPrice": 999,
    "img": asusrog7,
    "des": "The Asus ROG Phone 7: Engineered for ultimate gaming performance with a powerful Snapdragon processor, a smooth high-refresh-rate display, and advanced cooling technology.Immerse yourself in the game with the Asus ROG Phone 7's responsive display, powerful audio, and dedicated gaming features for a competitive edge.",
    "camera": "50MP Wide (OIS), 13MP Ultra Wide, 5MP Macro",
    "ram": "12GB/16GB",
    "battery": "6000 mAh"
  },
  {
    "id": "15",
    "name": "iQOO Neo 7",
    "price": 499,
    "offerPrice": 479,
    "img": iqooneo7,
    "des": "The iQOO Neo 7: Experience smooth gaming with its 120Hz AMOLED display, powerful Dimensity 8200 processor, and incredibly fast 120W FlashCharge. Unleash smooth performance and vibrant visuals on the iQOO Neo 7's 120Hz AMOLED display, powered by a capable Dimensity 8200 chipset and featuring rapid 120W charging.",
    "camera": "64MP Wide (OIS), 8MP Ultra Wide, 2MP Macro",
    "ram": "8GB/12GB",
    "battery": "5000 mAh"
  },
  {
    "id": "16",
    "name": "Honor Magic 6",
    "price": 899,
    "offerPrice": 849,
    "img": honormagic6,
    "des": "The Honor Magic 6: Experience a vibrant 120Hz OLED display, powerful Snapdragon 8 Gen 3 performance, and a versatile triple-camera system for impressive photography.Immerse yourself in the Honor Magic 6's smooth 120Hz OLED display, driven by the flagship Snapdragon 8 Gen 3 for exceptional speed and responsiveness.",
    "camera": "50MP Wide (OIS), 50MP Ultra Wide, 32MP Telephoto (2.5x Optical Zoom)",
    "ram": "8GB/12GB",
    "battery": "5450 mAh"
  },
  {
    "id": "17",
    "name": "Sony Xperia 5 V",
    "price": 999,
    "offerPrice": 949,
    "img": sony,
    "des": "The Sony Xperia 5 V: Compact yet powerful, featuring a bright OLED display, exceptional battery life, and Sony's renowned camera technology for stunning photos and videos. Capture professional-quality photos and enjoy all-day battery life with the Sony Xperia 5 V, all in a sleek and pocketable design.",
    "camera": "48MP Wide (OIS), 12MP Ultra Wide",
    "ram": "8GB",
    "battery": "5000 mAh"
  },
  {
    "id": "18",
    "name": "Lava Blaze 5G",
    "price": 199,
    "offerPrice": 179,
    "img": lava,
    "des": "The Lava Blaze 5G: Experience affordable 5G connectivity, a smooth 90Hz display, and a capable 50MP AI triple camera for everyday use. Get into the 5G era with the Lava Blaze 5G, featuring a smooth 90Hz display for fluid scrolling and fast network speeds.",
    "camera": "50MP Wide, 2MP Macro, VGA",
    "ram": "4GB/8GB",
    "battery": "5000 mAh"
  },
  {
    "id": "19",
    "name": "Moto g85",
    "price": 249,
    "offerPrice": 229,
    "img": moto,
    "des": "The Moto G85: Anticipate a smooth, vibrant display, a capable camera system for great photos, and reliable performance with 5G connectivity. Get ready for an immersive viewing experience and capture detailed photos with the Moto G85's expected upgraded display and camera capabilities, along with fast 5G.",
    "camera": "50MP Wide (OIS), 8MP Ultra Wide",
    "ram": "8GB",
    "battery": "5000 mAh"
  },
  {
    "id": "20",
    "name": "Infinix Zero Ultra",
    "price": 399,
    "offerPrice": 359,
    "img": infinix,
    "des": "The Infinix Zero Ultra: Boasting a stunning 120Hz curved AMOLED display, a groundbreaking 200MP OIS camera, and ultra-fast 180W Thunder Charge. Capture incredible detail with the 200MP OIS camera and power up in minutes with the blazing-fast 180W charging on the Infinix Zero Ultra.",
    "camera": "200MP Wide (OIS), 13MP Ultra Wide, 2MP Depth",
    "ram": "8GB",
    "battery": "4500 mAh"
  }
];

export default products;
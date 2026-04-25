const trips = [
  {
    id: "sea-yacht-snorkeling",
    title: {
      en: "Luxury Yacht & Snorkeling",
      ar: "يخت فاخر وسنوركلينج"
    },
    description: {
      en: "Enjoy a day of luxury on a private yacht. Discover the vibrant coral reefs and exotic fish of the Red Sea. Includes lunch and snorkeling gear.",
      ar: "استمتع بيوم من الفخامة على متن يخت خاص. اكتشف الشعاب المرجانية النابضة بالحياة والأسماك الغريبة في البحر الأحمر. يشمل الغداء ومعدات السنوركلينج."
    },
    category: "Sea",
    isVIP: true,
    price: 80,
    duration: "8 Hours",
    images: [
      "/images/seatravel/young-woman-walking-white-yacht.jpg",
      "/images/seatravel/boat-floating-water-cliff.jpg",
      "/images/seatravel/sail-boats-sea-shore-lifesaver-flotation-life-buoy-rock-formation-concept.jpg"
    ]
  },
  {
    id: "desert-safari-adventure",
    title: {
      en: "Desert Safari Adventure",
      ar: "مغامرة سفاري صحراوية"
    },
    description: {
      en: "Experience the thrill of quad biking through the desert, followed by a traditional Bedouin dinner under the stars.",
      ar: "جرب إثارة ركوب الدراجات الرباعية عبر الصحراء، يليه عشاء بدوي تقليدي تحت النجوم."
    },
    category: "Safari",
    isVIP: false,
    price: 45,
    duration: "6 Hours",
    images: [
      "/images/sfarytravel/sunset-adventure.jpg",
      "/images/sfarytravel/traveling-with-off-road-car.jpg",
      "/images/sfarytravel/indian-men-resting-by-bonfire-with-their-camel.jpg"
    ]
  },
  {
    id: "giza-pyramids-tour",
    title: {
      en: "Giza Pyramids & Sphinx",
      ar: "أهرامات الجيزة وأبو الهول"
    },
    description: {
      en: "Visit the world-famous Giza Pyramids and the Great Sphinx. Learn about the ancient Egyptian civilization from our expert guides.",
      ar: "قم بزيارة أهرامات الجيزة المشهورة عالميًا وأبو الهول العظيم. تعرف على الحضارة المصرية القديمة من مرشدينا الخبراء."
    },
    category: "Pyramids",
    isVIP: true,
    price: 120,
    duration: "10 Hours",
    images: [
      "/images/primadstravel/pyramid-giza.jpg",
      "/images/primadstravel/shot-historic-sphinx-middle-typical-egyptian-scenery-clear-sky.jpg",
      "/images/primadstravel/young-man-walking-towards-great-sphinx-giza.jpg"
    ]
  },
  {
    id: "luxor-temples-day-trip",
    title: {
      en: "Luxor Temples Day Trip",
      ar: "رحلة يوم لمعابد الأقصر"
    },
    description: {
      en: "Explore the magnificent temples of Luxor, including Karnak and Luxor Temple. A journey through history that you will never forget.",
      ar: "استكشف معابد الأقصر الرائعة، بما في ذلك معبد الكرنك ومعبد الأقصر. رحلة عبر التاريخ لن تنساها أبدًا."
    },
    category: "History",
    isVIP: false,
    price: 95,
    duration: "12 Hours",
    images: [
      "/images/aswantravel/statues-karnak-temple.jpg",
      "/images/aswantravel/egyptian-hieroglyphs-wall.jpg",
      "/images/aswantravel/view-ancient-temple-tomb-from-ancient-egyptian-times.jpg"
    ]
  },
  {
    id: "diving-red-sea",
    title: {
      en: "Red Sea Scuba Diving",
      ar: "الغوص في البحر الأحمر"
    },
    description: {
      en: "Dive into the depths of the Red Sea and explore its world-renowned dive sites. Suitable for all levels, from beginners to pros.",
      ar: "اغطس في أعماق البحر الأحمر واستكشف مواقع الغوص المشهورة عالميًا. مناسب لجميع المستويات، من المبتدئين إلى المحترفين."
    },
    category: "Sea",
    isVIP: false,
    price: 60,
    duration: "5 Hours",
    images: [
      "/images/seatravel/boat-floating-water-cliff (1).jpg",
      "/images/seatravel/wooden-handmade-boat-sea-sunlight-cloudy-sky.jpg"
    ]
  },
  {
    id: "aswan-nile-experience",
    title: {
      en: "Aswan Nile Experience",
      ar: "تجربة النيل في أسوان"
    },
    description: {
      en: "Sail on a traditional Felucca in Aswan and enjoy the serene beauty of the Nile River at sunset.",
      ar: "أبحر على متن فلوكة تقليدية في أسوان واستمتع بالجمال الهادئ لنهر النيل عند غروب الشمس."
    },
    category: "Nile",
    isVIP: true,
    price: 70,
    duration: "4 Hours",
    images: [
      "/images/aswantravel/beautiful-shot-rocky-cliffs-sea-sunny-day.jpg",
      "/images/aswantravel/view-ancient-temple-tomb-from-ancient-egyptian-times (1).jpg"
    ]
  }
];

export default trips;

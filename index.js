let languages = {
  en: {
    home: "Home",
    about: "About",
    agents: "Agents",
    blog: "Blog",
    contact: "Contact",
    buy: "Buy",
    sale: "Sale",
    rent: "Rent",
    title: "2 Bed Rooms and 1 Dinning Room Aparment on Sale",
    location: "1890 Syndey, Australia",
    pharagraph: "Until he extends the circle of his compassion to all living things, man will not himself find peace.",
    buyAndSaleTitle: "Buy, Sale & Rent",
    login: "Login",
    price: "Price",
    above: "above",
    property: "Property",
    apartment: "Apartment",
    buliding: "Buliding",
    officeSpace: "Office Space",
    findNow: "find Now",
    join: "Join now and get updated with all the properties deals.",
    featuredProperties: "Featured Properties",
    viewAllListing: "View All Listing",
    sold: "Sold",
    royalInn: "Royal Inn",
    boxPrice: "Price $234,900",
    viewDetails: "View Details",
    theStandard: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    learnMore: "Learn More",
    recommendedProperties: "Recommended Properties",
    integer: "Integer sed porta quam",
    moreDetails: "More Details",
    information: "Information",
    newsletter: "Newsletter",
    get: "Get notified about the latest properties in our marketplace.",
    notify: "Notify Me!",
    follow: "Follow Us",
    copyright: "Copyright. All rights reserved.",
  },
  ar: {
    home: "الصفحة الرئيسية",
    about: "من نحن",
    agents: "الزبائن",
    blog: "المقالات",
    contact: "تواصل معنا",
    buy: "بيع",
    sale: "شراء",
    rent: "تأجير",
    title: "شقة غرفتين نوم وغرفة طعام واحدة للبيع",
    location: "1890 Syndey, Australia",
    pharagraph: "ما لم يوسع الإنسان دائرة شفقته إلى كل الكائنات الحية ، فلن يجد الإنسان السلام نفسه.",
    buyAndSaleTitle: "بيع وشراء وتأجير",
    login: "تسجيل الدخول",
    price: "السعر",
    above: "فما فوق",
    property: "ملكية",
    apartment: "شقة",
    buliding: "المبنى",
    officeSpace: "مساحة المكتب",
    findNow: "ابحث الان",
    join: "انضم الآن واطلع على جميع صفقات العقارات.",
    featuredProperties: "خصائص مميزة",
    viewAllListing: "عرض كل القوائم",
    sold: "تم البيع",
    royalInn: "Royal Inn",
    boxPrice: "السعر $234,900",
    viewDetails: "عرض التفاصيل",
    theStandard: `الجزء القياسي من لوريم إيبسوم المستخدم منذ القرن الخامس عشر مستنسخ أدناه للمهتمين. تم أيضًا نسخ الأقسام 1.10.32 و 1.10.33 من "de Finibus Bonorum et Malorum" بواسطة Cicero في شكلها الأصلي الدقيق ، مصحوبة بنسخ باللغة الإنجليزية من ترجمة عام 1914 بواسطة H. Rackham.`,
    learnMore: "عرض المزيد",
    moreDetails: "المزيد من التفاصيل",
    information: "المعلومات",
    newsletter: "الاخبار",
    get: "احصل على اشعارات حول أحدث العقارات في سوقنا.",
    notify: "ابلغني!",
    follow: "تابعنا",
    recommendedProperties: "عقارات مقترحة",
    integer: "Integer sed porta quam",
    copyright: "حقوق النشر. كل الحقوق محفوظة.",
  },
};

const selector = document.querySelector(".header select");

selector.addEventListener("change", (event) => {
  updateLanguage(event.target.value);
  // localStorage.setItem("lang", event.target.value);
});


// document.addEventListener("DOMContentLoaded", () => {
//   const language = localStorage.getItem("lang") || "en";
//   updateLanguage(language);
// });


function updateLanguage(language) {
  let elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    let key = element.getAttribute("data-lang");
    element.textContent = languages[language][key];
  });
  if (language === "ar") {
    document.dir = "rtl";
    let topHeaderListsA = document.querySelectorAll(".top-header ul li a");
    topHeaderListsA.forEach((listA) => {
      function myFunction(mediaQuery) {
        if (mediaQuery.matches) {
          let topHeaderLists = document.querySelectorAll(".top-header ul li");
          topHeaderLists.forEach((list) => {
            list.style.padding = "5px";
          });
          listA.style.fontSize = "10px";
        } else {
          let topHeaderLists = document.querySelectorAll(".top-header ul li");
          topHeaderLists.forEach((list) => {
            list.style.padding = "15px";
          });
          listA.style.fontSize = "15px";
        };
      };
      let mediaQuery = window.matchMedia('(max-width: 546px)');
      myFunction(mediaQuery);
      mediaQuery.addListener(myFunction);
    });
    let input = document.querySelector(".first-input");
    input.placeholder = "البحث عن عقارات";
    let secondInput = document.querySelector(".second-input")
    secondInput.placeholder = "أدخل عنوان بريدك الالكتروني";
  } else {
    let secondInput = document.querySelector(".second-input")
    let input = document.querySelector(".first-input");
    secondInput.placeholder = "Enter Your Email Address";
    input.placeholder = "Search Of Properties";
    document.dir = "ltr";
  }
};


// const languages = {
//   en: {
//     home: "Home",
//     about: "About",
//   },
//   ar: {
//     home: "الصفحة الرئيسية",
//     about: "من نحن",
//   },
// };

// let selector = document.querySelector(".top-header select");

// selector.addEventListener("change", (event) => {
//   updateLanguage(event.target.value);
// });

// function updateLanguage(language) {
//   let elements = document.querySelectorAll("[data-lang]");
//   elements.forEach((element) => {
//     let key = element.getAttribute("data-lang");
//     console.log(key);
//     element.textContent = languages[language][key];
//   });
//   if (language === "en") {
//     document.dir = "ltr";
//   } else {
//     document.dir = "rtl";
//   };
// };

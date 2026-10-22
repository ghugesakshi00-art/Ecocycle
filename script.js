/**
 * ============================================================================
 * EcoCycle - Rural E-Waste Management Platform
 * Pure Vanilla JavaScript (No frameworks, no external libraries)
 * ============================================================================
 */

// ============================================================================
// 1. CONFIGURATION & CONSTANTS
// Change the WhatsApp phone number here (Country code + 10 digits without + sign)
// ============================================================================
const WHATSAPP_PHONE = "919876543210";
const HELPLINE_PHONE = "18002673262";

// Storage Keys
const LANG_STORAGE_KEY = "ecocycle_user_lang";
const THEME_STORAGE_KEY = "ecocycle_user_theme";

// Device Values for Points & Cash Calculator
const DEVICE_RATES = {
  mobile: { cash: 400, points: 80, label: "Smartphone / Android" },
  featurePhone: { cash: 120, points: 25, label: "Basic Keypad Phone" },
  laptop: { cash: 1100, points: 220, label: "Laptop / Computer" },
  tv: { cash: 450, points: 90, label: "Old TV / Screen" },
  battery: { cash: 850, points: 170, label: "Lead Battery (Inverter/Auto)" },
  charger: { cash: 40, points: 10, label: "Charger & Wires" },
  fridge: { cash: 950, points: 190, label: "Refrigerator / Cooler" },
  appliance: { cash: 180, points: 35, label: "Mixer / Fan / Radio" }
};

// ============================================================================
// 2. COMPLETE TRANSLATIONS OBJECT (English, Hindi, Marathi)
// ============================================================================
const translations = {
  // --------------------------------------------------------------------------
  // MARATHI (मराठी) - Default language for rural Maharashtra
  // --------------------------------------------------------------------------
  mr: {
    // Header & Meta
    appName: "EcoCycle",
    appSub: "ग्रामीण ई-कचरा व्यवस्थापन",
    langSelect: "भाषा निवडा:",

    // Hero Section
    heroBadge: "🌱 स्वच्छ शेती आणि सुरक्षित गाव मोहीम",
    heroTitle: "जुन्या मोबाईल आणि इलेक्ट्रॉनिक भंगारातून मिळवा रोख रक्कम!",
    heroTagline: "जुने मोबाईल, बॅटरी किंवा तारा शेतात किंवा उकिरड्यावर टाकू नका. गावातून मोफत पिकअप बुक करा, रोख पैसे आणि बक्षिसे मिळवा.",
    heroCtaBtn: "पिकअपसाठी अर्ज करा 🚚",
    heroCalcBtn: "किंमत तपासा 💰",
    heroPill1: "✅ १००% मोफत पिकअप",
    heroPill2: "✅ रोख रक्कम व गुण",
    heroPill3: "✅ सुरक्षित पुनर्प्रक्रिया",
    heroListenText: "इकोसायकलमध्ये आपले स्वागत आहे. जुने मोबाईल, बॅटऱ्या आणि इलेक्ट्रॉनिक भंगार शेतात न टाकता सुरक्षितपणे द्या आणि रोख रक्कम मिळवा.",

    // What is E-Waste Section
    whatTag: "ओळख",
    whatTitle: "ई-कचरा म्हणजे नक्की काय?",
    whatSubtitle: "विजेवर किंवा बॅटरीवर चालणारी कोणतीही जुनी, नादुरुस्त किंवा बंद वस्तू",
    whatDesc: "बंद पडलेले मोबाईल, जुने टीव्ही, जळालेले चार्जर, खराब बॅटऱ्या, जुन्या मिक्सर आणि वायर्स हा सर्व इलेक्ट्रॉनिक कचरा (ई-कचरा) आहे.",
    whatListenText: "ई-कचरा म्हणजे काय? बंद पडलेले मोबाईल, जुने टीव्ही, जळालेले चार्जर, खराब बॅटऱ्या आणि जुन्या वायर्स हा सर्व ई-कचरा आहे.",
    ewMobile: "मोबाईल व टॅबलेट",
    ewTv: "जुना टीव्ही व स्क्रीन",
    ewBattery: "सर्व प्रकारच्या बॅटऱ्या",
    ewCharger: "चार्जर व वायर्स",
    ewLaptop: "संगणक व लॅपटॉप",
    ewRadio: "रेडिओ, फॅन व मिक्सर",

    // Why it Matters Section
    mattersTag: "महत्त्व",
    mattersTitle: "ई-कचऱ्याची योग्य विल्हेवाट का महत्त्वाची आहे?",
    mattersSubtitle: "आपल्या गावची सुपीक जमीन, पिण्याचे पाणी आणि जनावरांचे रक्षण करा",
    mattersListenText: "ई-कचरा शेतात किंवा विहिरीजवळ टाकल्यास त्यातील शिसे आणि पारा जमिनीत मुरून पाणी विषारी होते. वायर्स जाळल्यास कर्करोग निर्माण करणारा धूर पसरतो.",
    mCard1Title: "पाणी आणि मातीचे रक्षण",
    mCard1Desc: "बॅटऱ्यांमधील शिसे व पारा शेतात मुरल्यास पिण्याच्या विहिरीचे पाणी विषारी होते. सुरक्षित विल्हेवाटीने शेतजमीन निरोगी राहते.",
    mCard2Title: "विषारी धुरापासून बचाव",
    mCard2Desc: "तांबे काढण्यासाठी वायर्स चुलीत किंवा उघड्यावर जाळू नका. त्यामुळे लहान मुलांच्या व वृद्धांच्या फुफ्फुसांना हानी पोहोचते.",
    mCard3Title: "मौल्यवान धातूंची प्राप्ती",
    mCard3Desc: "१ टन मोबाईल सर्किट बोर्डमधून सोन्याच्या खाणीपेक्षा जास्त सोने आणि तांबे मिळते. याचा देशाला व शेतकर्‍यांना फायदा होतो.",
    mCard4Title: "गावासाठी रोख उत्पन्न",
    mCard4Desc: "प्रत्येक भंगार उपकरणावर रोख रक्कम आणि ग्रामपंचायतीसाठी विकास गुण मिळतात.",

    // Counters
    counter1: "पुनर्प्रक्रिया उपकरणे",
    counter2: "सहभागी गावे",
    counter3: "शेतकऱ्यांना दिलेले पैसे (₹)",
    counter4: "वाचवलेले कार्बन (कि.ग्रा.)",

    // Do's and Don'ts
    rulesTag: "नियम",
    rulesTitle: "काय करावे आणि काय करू नये?",
    rulesSubtitle: "सुरक्षित ई-कचरा हाताळणीसाठी सोप्या आणि महत्त्वाच्या सवयी",
    rulesListenText: "काय करावे: जुने फोन घरात सुक्या खोक्यात ठेवा आणि अधिकृत गाडीतच द्या. काय करू नये: बॅटऱ्या शेतात फेकू नका आणि तारा जाळू नका.",
    dosTitle: "काय करावे (योग्य सवयी) ✅",
    dontsTitle: "काय करू नये (धोकादायक) ❌",
    do1: "जुने फोन आणि बॅटऱ्या घरात एका सुक्या खोक्यात वेगळ्या साठवून ठेवा.",
    do2: "ई-कचरा फक्त अधिकृत इकोसायकल गाडी किंवा ग्रामपंचायत शिबिरातच द्या.",
    do3: "वस्तू देताना शक्य असल्यास मोबाईलमधून बॅटरी सुरक्षित वेगळी ठेवा.",
    dont1: "बॅटऱ्या किंवा वायर्स चुकूनही शेतात, ओढ्यात किंवा उकिरड्यावर फेकू नका.",
    dont2: "विजेच्या तारा किंवा प्लास्टिकचे कव्हर कधीही चुलीत किंवा उघड्यावर जाळू नका.",
    dont3: "जुन्या टीव्हीच्या काचा किंवा स्क्रीन्स घराबाहेर उघड्यावर फोडू नका.",

    // How It Works
    stepsTag: "कार्यपद्धती",
    stepsTitle: "४ सोप्या टप्प्यांत काम कसे होते?",
    stepsSubtitle: "अत्यंत सोपी प्रक्रिया - कोणताही तांत्रिक त्रास नाही",
    stepsListenText: "पायरी १: वस्तू निवडा. पायरी २: फॉर्म भरा किंवा बोला. पायरी ३: प्रतिनिधीकडे वस्तू द्या. पायरी ४: जागेवर रोख रक्कम मिळवा.",
    step1Title: "१. वस्तू निवडा",
    step1Desc: "घरातील जुने मोबाईल, बॅटरी किंवा टीव्ही एकत्र करा.",
    step2Title: "२. वेळ ठरवा",
    step2Desc: "खालील फॉर्ममध्ये बोलून किंवा लिहून आपले गाव सांगा.",
    step3Title: "३. गाडीत द्या",
    step3Desc: "आमची इकोसायकल गाडी ठरलेल्या दिवशी दारात येईल.",
    step4Title: "४. रोख पैसे मिळवा",
    step4Desc: "जागेवर रोख पैसे आणि फोनवर गुण मिळवा.",

    // Form
    formTag: "बुकिंग",
    formTitle: "मोफत ई-कचरा पिकअप विनंती",
    formSubtitle: "माइकचे बटण दाबून बोलूनही माहिती भरू शकता",
    formListenText: "पिकअप फॉर्म: आपले नाव, मोबाईल, गाव, तालुका आणि वस्तू निवडून व्हॉट्सॲपवर पाठवा. गाडी आपल्या दारात येईल.",
    lblName: "आपले पूर्ण नाव:",
    phName: "उदा. रमेश तुकाराम पाटील",
    lblPhone: "मोबाईल नंबर (१० अंकी):",
    phPhone: "उदा. 9822XXXXXX",
    lblDistrict: "जिल्हा निवडा:",
    lblTaluka: "तालुका:",
    phTaluka: "उदा. बारामती / जुन्नर / कराड",
    lblVillage: "गाव (ग्राम):",
    phVillage: "उदा. माळेगाव / नारायणगाव",
    lblDevice: "उपकरणाचा प्रकार:",
    lblQty: "वस्तूंची संख्या:",
    lblDate: "पिकअपची सोयीची तारीख:",
    btnSubmit: "व्हॉट्सॲपवर पाठवा व पिकअप नोंदवा 💬",
    formHelp: "💡 टीप: वरील बटण दाबल्यावर व्हॉट्सॲप उघडेल. संदेश पाठवून नोंदणी पूर्ण करा.",

    // Calculator
    calcTag: "अंदाज",
    calcTitle: "भंगार किंमत आणि गुण कॅल्क्युलेटर",
    calcSubtitle: "आपल्या उपकरणाची अंदाजे रोख रक्कम आणि गुण तपासा",
    calcListenText: "कॅल्क्युलेटर: आपले साधन आणि संख्या निवडून लगेच रोख रक्कम आणि इकोपॉइंट्स तपासा.",
    calcDevice: "उपकरण निवडा:",
    calcQty: "संख्या:",
    calcCashLabel: "अंदाजे रोख रक्कम",
    calcPointsLabel: "मिळणारे इकोपॉइंट्स",

    // Collection Centers
    centersTag: "केंद्रे",
    centersTitle: "गाव संकलन केंद्रे व शिबिरे",
    centersSubtitle: "आपण स्वतः जाऊनही खालील केंद्रांवर ई-कचरा देऊ शकता",
    centersListenText: "संकलन केंद्रे: बारामती, जुन्नर, सिन्नर, कराड आणि राळेगण सिद्धी येथील केंद्रांवर आपण ई-कचरा देऊ शकता.",
    searchPlaceholder: "गाव किंवा तालुक्याचे नाव शोधा...",
    thVillage: "गाव / ठिकाण",
    thCenter: "केंद्राचे नाव",
    thContact: "संपर्क व्यक्ती",
    thTiming: "वेळ व दिवस",

    // FAQ
    faqTag: "प्रश्न उत्तरे",
    faqTitle: "नेहमी विचारले जाणारे प्रश्न (FAQ)",
    faqSubtitle: "आपल्या शंकांचे सोपे आणि स्पष्ट निरसन",
    faqListenText: "नेहमीचे प्रश्न: गावांसाठी पिकअप १०० टक्के मोफत आहे. रोख रक्कम जागेवर मिळते. आमचे प्रतिनिधी सुरक्षित डेटा नष्ट करतात.",
    faq1Q: "गावांसाठी पिकअप खरोखर मोफत आहे का?",
    faq1A: "होय! ग्रामपंचायतींच्या सहकार्याने घरातून पिकअप आणि शिबिर संकलन १००% पूर्णपणे मोफत आहे. कोणतेही शुल्क आकारले जात नाही.",
    faq2Q: "मला रोख पैसे जागेवरच मिळतात का?",
    faq2A: "होय! वस्तू तपासल्यानंतर आमचे प्रतिनिधी जागेवरच रोख रक्कम किंवा थेट Google Pay / PhonePe द्वारे पैसे देतात.",
    faq3Q: "माझ्या जुन्या मोबाईलमधील फोटो किंवा डेटा सुरक्षित राहील का?",
    faq3A: "होय! आमचे अधिकृत प्रतिनिधी जागेवरच मोबाईलचा डेटा पूर्णपणे नष्ट (Wipe) करतात, त्यामुळे कोणतीही माहिती गैरवापर होत नाही.",
    faq4Q: "आमच्या गावात संकलन शिबिर कसे आयोजित करावे?",
    faq4A: "गावचे सरपंच किंवा ग्रामपंचायत सदस्य आमच्या टोल-फ्री नंबरवर फोन करू शकतात किंवा व्हॉट्सॲपवर संदेश पाठवून तारीख ठरवू शकतात.",

    // Audio & General
    btnListen: "🔊 ऐका",
    btnStop: "⏹️ थांबवा",
    nowSpeaking: "वाचून दाखवत आहे...",
    micListening: "ऐकत आहे, कृपया बोला...",
    fallbackVoiceNotice: "ℹ️ आपल्या फोनमध्ये मराठी आवाज उपलब्ध नसल्यामुळे हिंदी आवाजात ऐकवले जात आहे.",
    valRequired: "कृपया सर्व आवश्यक माहिती भरा!",
    valPhone: "कृपया १० अंकी योग्य मोबाईल नंबर टाका!",

    // Footer
    footDesc: "ग्रामीण महाराष्ट्रातील प्रत्येक गावातील शेती आणि पाणी सुरक्षित ठेवण्यासाठी समर्पित.",
    footCall: "हेल्पलाइन:",
    footTime: "सकाळी ८ ते रात्री ८ (सोम-शनि)",
    footRights: "सर्व हक्क राखीव. स्वच्छ भारत आणि ग्राम विकास उपक्रम."
  },

  // --------------------------------------------------------------------------
  // HINDI (हिंदी) - For rural communities across India
  // --------------------------------------------------------------------------
  hi: {
    // Header & Meta
    appName: "EcoCycle",
    appSub: "ग्रामीण ई-कचरा प्रबंधन",
    langSelect: "भाषा चुनें:",

    // Hero Section
    heroBadge: "🌱 स्वच्छ खेत और सुरक्षित गांव अभियान",
    heroTitle: "पुराने मोबाइल और इलेक्ट्रॉनिक कबाड़ से पाएं नकद पैसे!",
    heroTagline: "पुराने मोबाइल, बैटरी या तार खेतों या कूड़े में न फेंकें। गांव से मुफ्त पिकअप बुक करें, नकद पैसे और इनाम पाएं।",
    heroCtaBtn: "पिकअप का अनुरोध करें 🚚",
    heroCalcBtn: "कीमत जानें 💰",
    heroPill1: "✅ १००% मुफ्त पिकअप",
    heroPill2: "✅ नकद भुगतान व अंक",
    heroPill3: "✅ सुरक्षित रीसाइक्लिंग",
    heroListenText: "इकोसाइकिल में आपका स्वागत है। पुराने मोबाइल, बैटरी और इलेक्ट्रॉनिक कबाड़ को खेतों में न फेंकें, सुरक्षित रीसायकल कराएं और नकद राशि पाएं।",

    // What is E-Waste Section
    whatTag: "पहचान",
    whatTitle: "ई-कचरा (इलेक्ट्रॉनिक कचरा) क्या है?",
    whatSubtitle: "कोई भी पुरानी, खराब या बंद पड़ी बिजली या बैटरी की वस्तु",
    whatDesc: "खराब मोबाइल, पुराने टीवी, जले चार्जर, पुरानी बैटरियां, मिक्सी और तार यह सब इलेक्ट्रॉनिक कचरा (ई-कचरा) कहलाता है।",
    whatListenText: "ई-कचरा क्या है? बंद पड़े मोबाइल, पुराने टीवी, जले चार्जर, पुरानी बैटरियां और तार यह सब ई-कचरा हैं।",
    ewMobile: "मोबाइल व टैबलेट",
    ewTv: "पुराना टीवी व स्क्रीन",
    ewBattery: "सभी प्रकार की बैटरियां",
    ewCharger: "चार्जर व तार",
    ewLaptop: "कंप्यूटर व लैपटॉप",
    ewRadio: "रेडियो, पंखा व मिक्सी",

    // Why it Matters Section
    mattersTag: "महत्व",
    mattersTitle: "ई-कचरे का सही निस्तारण क्यों जरूरी है?",
    mattersSubtitle: "अपने गांव की उपजाऊ मिट्टी, पीने के पानी और मवेशियों की रक्षा करें",
    mattersListenText: "ई-कचरे को खेतों या कुओं के पास फेंकने से सीसा और पारा रिसकर पानी को जहरीला बना देता है। तारों को जलाने से जानलेवा धुआं फैलता है।",
    mCard1Title: "पानी और मिट्टी की सुरक्षा",
    mCard1Desc: "बैटरियों का सीसा और पारा जमीन में रिसने से पीने के कुएं का पानी जहरीला होता है। सही निस्तारण से खेत सुरक्षित रहते हैं।",
    mCard2Title: "जहरीले धुएं से बचाव",
    mCard2Desc: "तांबा निकालने के लिए तारों को आग में न जलाएं। इससे बच्चों और बुजुर्गों के फेफड़ों को भारी नुकसान पहुंचता है।",
    mCard3Title: "कीमती धातुओं की प्राप्ति",
    mCard3Desc: "१ टन पुराने मोबाइल सर्किट बोर्ड से सोने की खदान से भी ज्यादा सोना और तांबा निकलता है।",
    mCard4Title: "गांव के लिए आमदनी",
    mCard4Desc: "हर बेकार उपकरण पर तुरंत नकद राशि और ग्राम पंचायत के लिए स्वच्छता अंक मिलते हैं।",

    // Counters
    counter1: "पुनर्चक्रित उपकरण",
    counter2: "सेवा प्राप्त गांव",
    counter3: "किसानों को भुगतान (₹)",
    counter4: "बचाया गया कार्बन (कि.ग्रा.)",

    // Do's and Don'ts
    rulesTag: "नियम",
    rulesTitle: "क्या करें और क्या न करें?",
    rulesSubtitle: "सुरक्षित ई-कचरा प्रबंधन के लिए आसान नियम",
    rulesListenText: "क्या करें: पुराने फोन घर में सूखे डिब्बे में रखें और अधिकृत वैन को दें। क्या न करें: बैटरियों को खेतों में न फेंकें और तारों को कभी न जलाएं।",
    dosTitle: "क्या करें (सही आदतें) ✅",
    dontsTitle: "क्या न करें (खतरनाक) ❌",
    do1: "पुराने फोन और बैटरियों को घर में सूखे गत्ते के डिब्बे में अलग रखें।",
    do2: "ई-कचरा केवल अधिकृत इकोसाइकिल वैन या ग्राम पंचायत शिविर में ही दें।",
    do3: "उपकरण देते समय यदि संभव हो तो रिचार्जेबल बैटरी को अलग रखें।",
    dont1: "बैटरी या तार कभी भी खेतों, नालों या कूड़े के ढेर में न फेंकें।",
    dont2: "बिजली के तारों या प्लास्टिक के हिस्सों को कभी आग में न जलाएं।",
    dont3: "पुराने टीवी के कांच या स्क्रीन को खुले में कभी न तोड़ें।",

    // How It Works
    stepsTag: "प्रक्रिया",
    stepsTitle: "४ आसान चरणों में कैसे काम करता है?",
    stepsSubtitle: "सरल प्रक्रिया - कोई तकनीकी परेशानी नहीं",
    stepsListenText: "चरण १: उपकरण चुनें। चरण २: फॉर्म भरें या बोलें। चरण ३: वैन में सामान सौंपें। चरण ४: मौके पर नकद पैसे पाएं।",
    step1Title: "१. उपकरण चुनें",
    step1Desc: "घर के पुराने मोबाइल, बैटरी या टीवी एकत्र करें।",
    step2Title: "२. समय तय करें",
    step2Desc: "नीचे दिए फॉर्म में बोलकर या लिखकर अपना गांव बताएं।",
    step3Title: "३. वैन को सौंपें",
    step3Desc: "हमारी इकोसाइकिल वैन तय दिन पर आपके दरवाजे पर आएगी।",
    step4Title: "४. नकद राशि पाएं",
    step4Desc: "मौके पर नकद भुगतान और मोबाइल पर इकोपॉइंट्स पाएं।",

    // Form
    formTag: "बुकिंग",
    formTitle: "मुफ्त ई-कचरा पिकअप अनुरोध",
    formSubtitle: "माइक का बटन दबाकर बोलकर भी जानकारी भर सकते हैं",
    formListenText: "पिकअप फॉर्म: अपना नाम, मोबाइल, गांव, तहसील और उपकरण चुनकर व्हाट्सएप पर भेजें। गाड़ी आपके घर पहुंचेगी।",
    lblName: "आपका पूरा नाम:",
    phName: "उदा. रमेश पाटिल",
    lblPhone: "मोबाइल नंबर (१० अंक):",
    phPhone: "उदा. 9822XXXXXX",
    lblDistrict: "जिला चुनें:",
    lblTaluka: "तहसील (तालुका):",
    phTaluka: "उदा. बारामती / जुन्नर / कराड",
    lblVillage: "गांव (ग्राम):",
    phVillage: "उदा. मालेगांव / नारायणगांव",
    lblDevice: "उपकरण का प्रकार:",
    lblQty: "उपकरणों की संख्या:",
    lblDate: "पिकअप की पसंदीदा तारीख:",
    btnSubmit: "व्हाट्सएप पर भेजें व पिकअप बुक करें 💬",
    formHelp: "💡 सूचना: ऊपर दिए बटन पर क्लिक करने पर व्हाट्सएप खुलेगा। संदेश भेजकर बुकिंग पूरी करें।",

    // Calculator
    calcTag: "अनुमान",
    calcTitle: "कबाड़ मूल्य व अंक कैलकुलेटर",
    calcSubtitle: "अपने उपकरण का अनुमानित नकद मूल्य और अंक जानें",
    calcListenText: "कैलकुलेटर: अपने उपकरण और संख्या को चुनकर तुरंत नकद राशि और इकोपॉइंट्स जानें।",
    calcDevice: "उपकरण चुनें:",
    calcQty: "संख्या:",
    calcCashLabel: "अनुमानित नकद मूल्य",
    calcPointsLabel: "मिलने वाले इकोपॉइंट्स",

    // Collection Centers
    centersTag: "केंद्र",
    centersTitle: "ग्राम संग्रह केंद्र व शिविर",
    centersSubtitle: "आप स्वयं जाकर भी इन केंद्रों पर ई-कचरा जमा कर सकते हैं",
    centersListenText: "संग्रह केंद्र: बारामती, जुन्नर, सिन्नर और कराड केंद्रों पर आप स्वयं जाकर ई-कचरा जमा कर सकते हैं।",
    searchPlaceholder: "गांव या तहसील का नाम खोजें...",
    thVillage: "गांव / स्थान",
    thCenter: "केंद्र का नाम",
    thContact: "संपर्क व्यक्ति",
    thTiming: "समय व दिन",

    // FAQ
    faqTag: "सवाल जवाब",
    faqTitle: "अक्सर पूछे जाने वाले सवाल (FAQ)",
    faqSubtitle: "आपकी शंकाओं का सरल और स्पष्ट समाधान",
    faqListenText: "सामान्य सवाल: गांवों के लिए पिकअप मुफ्त है। नकद भुगतान मौके पर मिलता है। डेटा पूरी तरह सुरक्षित रूप से मिटाया जाता है।",
    faq1Q: "क्या गांवों के लिए पिकअप सचमुच मुफ्त है?",
    faq1A: "हां! ग्राम पंचायतों के सहयोग से घर से पिकअप और शिविर संग्रह १००% बिल्कुल मुफ्त हैं। कोई शुल्क नहीं लिया जाता।",
    faq2Q: "क्या मुझे तुरंत नकद पैसे मिलते हैं?",
    faq2A: "हां! उपकरणों की जांच के तुरंत बाद हमारे प्रतिनिधि नकद या Google Pay / PhonePe द्वारा भुगतान करते हैं।",
    faq3Q: "क्या मेरे पुराने मोबाइल का डेटा सुरक्षित रहेगा?",
    faq3A: "हां! हमारे प्रमाणित प्रतिनिधि मौके पर ही फोन का डेटा सुरक्षित तरीके से मिटा (Wipe) देते हैं।",
    faq4Q: "हमारे गांव में शिविर कैसे आयोजित करें?",
    faq4A: "सरपंच या ग्राम पंचायत सदस्य हमारे टोल-फ्री नंबर पर कॉल कर सकते हैं या व्हाट्सएप पर संदेश भेज सकते हैं।",

    // Audio & General
    btnListen: "🔊 सुनें",
    btnStop: "⏹️ रोकें",
    nowSpeaking: "पढ़कर सुनाया जा रहा है...",
    micListening: "सुन रहा हूँ, कृपया बोलें...",
    fallbackVoiceNotice: "ℹ️ आपके फोन में हिंदी आवाज में सुनाया जा रहा है।",
    valRequired: "कृपया सभी आवश्यक जानकारी भरें!",
    valPhone: "कृपया सही १० अंकों का मोबाइल नंबर दर्ज करें!",

    // Footer
    footDesc: "ग्रामीण भारत के खेतों और पानी को सुरक्षित रखने के लिए समर्पित हरित पहल।",
    footCall: "हेल्पलाइन:",
    footTime: "सुबह ८ से रात ८ बजे (सोम-शनि)",
    footRights: "सर्वाधिकार सुरक्षित। स्वच्छ भारत और ग्राम विकास अभियान।"
  },

  // --------------------------------------------------------------------------
  // ENGLISH - Clear, simple international interface
  // --------------------------------------------------------------------------
  en: {
    // Header & Meta
    appName: "EcoCycle",
    appSub: "Rural E-Waste Management",
    langSelect: "Choose Language:",

    // Hero Section
    heroBadge: "🌱 Clean Soil & Safe Village Initiative",
    heroTitle: "Turn Old Mobiles & Electronic Scrap into Instant Cash!",
    heroTagline: "Don't throw old mobiles, batteries or wires in fields or garbage. Schedule free doorstep village pickup and earn cash and reward points.",
    heroCtaBtn: "Request Free Pickup 🚚",
    heroCalcBtn: "Check Scrap Value 💰",
    heroPill1: "✅ 100% Free Doorstep Pickup",
    heroPill2: "✅ Instant Cash & Rewards",
    heroPill3: "✅ Safe Certified Recycling",
    heroListenText: "Welcome to EcoCycle. Recycle your old mobile phones, batteries, and electronic scrap safely instead of throwing them in fields. Earn cash and rewards.",

    // What is E-Waste Section
    whatTag: "Basics",
    whatTitle: "What is Electronic Waste (E-Waste)?",
    whatSubtitle: "Any broken, discarded, or unused item powered by electricity or battery",
    whatDesc: "Dead smartphones, old televisions, burnt phone chargers, discharged batteries, mixer grinders, and wires are all classified as e-waste.",
    whatListenText: "What is e-waste? Discarded phones, old TVs, burnt chargers, broken batteries, and scrap wires are all e-waste.",
    ewMobile: "Mobiles & Tablets",
    ewTv: "Old TVs & Monitors",
    ewBattery: "All Types of Batteries",
    ewCharger: "Chargers & Cables",
    ewLaptop: "Computers & Laptops",
    ewRadio: "Radios, Fans & Mixers",

    // Why it Matters Section
    mattersTag: "Impact",
    mattersTitle: "Why Proper E-Waste Recycling Matters",
    mattersSubtitle: "Protect our village soil, groundwater, cattle, and families",
    mattersListenText: "Dumping e-waste near wells or fields poisons groundwater with lead and mercury. Burning wires releases cancer-causing fumes.",
    mCard1Title: "Protects Water & Soil",
    mCard1Desc: "Lead and cadmium from batteries leach into well water, causing severe poisoning in cattle and villagers.",
    mCard2Title: "Prevents Toxic Fumes",
    mCard2Desc: "Never burn plastic wires to extract copper. The toxic smoke causes lung diseases in children and elderly villagers.",
    mCard3Title: "Recovers Precious Metals",
    mCard3Desc: "1 ton of mobile circuit boards contains more gold and copper than 1 ton of raw gold ore.",
    mCard4Title: "Generates Village Income",
    mCard4Desc: "Every piece of electronic scrap earns cash and EcoPoints for Gram Panchayat village development.",

    // Counters
    counter1: "Devices Recycled",
    counter2: "Villages Served",
    counter3: "Rupees Paid (₹)",
    counter4: "CO₂ Saved (kg)",

    // Do's and Don'ts
    rulesTag: "Guidelines",
    rulesTitle: "Do's and Don'ts for Safe Handling",
    rulesSubtitle: "Simple daily habits to keep your village safe from toxic metals",
    rulesListenText: "DO store old phones in a dry box and hand over to EcoCycle vans. DON'T throw batteries in fields or burn plastic wires.",
    dosTitle: "DO's (Safe Practices) ✅",
    dontsTitle: "DON'Ts (Hazardous) ❌",
    do1: "Store old phones and batteries in a dry cardboard box at home.",
    do2: "Hand over e-waste only to authorized EcoCycle vans or Gram Panchayat camps.",
    do3: "Keep rechargeable batteries detached from gadgets when handing over.",
    dont1: "NEVER throw batteries or wires into agricultural fields or garbage pits.",
    dont2: "NEVER burn electronic wires or plastic casings in open fires or stoves.",
    dont3: "NEVER break old CRT television screens or glass tubes outdoors.",

    // How It Works
    stepsTag: "Process",
    stepsTitle: "How It Works in 4 Simple Steps",
    stepsSubtitle: "Zero technical confusion - easy and transparent for everyone",
    stepsListenText: "Step 1: Select your device. Step 2: Book pickup. Step 3: Hand over to our van. Step 4: Get instant cash.",
    step1Title: "1. Select Device",
    step1Desc: "Gather your old phones, batteries, or TVs at home.",
    step2Title: "2. Book Pickup",
    step2Desc: "Fill the simple form below or tap the mic to speak your village.",
    step3Title: "3. Hand Over",
    step3Desc: "Our green EcoCycle van arrives at your doorstep on the scheduled day.",
    step4Title: "4. Get Instant Cash",
    step4Desc: "Receive immediate cash or UPI payment plus EcoPoints on your mobile.",

    // Form
    formTag: "Booking",
    formTitle: "Free E-Waste Doorstep Pickup Request",
    formSubtitle: "Tap the microphone icon next to fields to fill by voice",
    formListenText: "Pickup form: Enter your name, mobile, village, taluka, and select your devices to send directly via WhatsApp.",
    lblName: "Full Name:",
    phName: "e.g. Ramesh Patil",
    lblPhone: "Mobile Number (10 digits):",
    phPhone: "e.g. 9822XXXXXX",
    lblDistrict: "Select District:",
    lblTaluka: "Taluka:",
    phTaluka: "e.g. Baramati / Junnar / Karad",
    lblVillage: "Village (Gram):",
    phVillage: "e.g. Malegaon / Narayangaon",
    lblDevice: "Device Type:",
    lblQty: "Quantity:",
    lblDate: "Preferred Pickup Date:",
    btnSubmit: "Send on WhatsApp & Confirm Pickup 💬",
    formHelp: "💡 Note: Clicking the button opens WhatsApp. Send the prefilled message to confirm your booking.",

    // Calculator
    calcTag: "Estimate",
    calcTitle: "Scrap Value & EcoPoints Calculator",
    calcSubtitle: "Check instant estimated cash value and rewards for your devices",
    calcListenText: "Calculator: Select your device and quantity to see estimated cash and EcoPoints.",
    calcDevice: "Select Device:",
    calcQty: "Quantity:",
    calcCashLabel: "Estimated Cash Value",
    calcPointsLabel: "EcoPoints Earned",

    // Collection Centers
    centersTag: "Locations",
    centersTitle: "Village Collection Centers & Camps",
    centersSubtitle: "You can also drop off your e-waste directly at these local hubs",
    centersListenText: "Collection centers: Visit our centers in Baramati, Junnar, Sinnar, Karad, and Ralegan Siddhi.",
    searchPlaceholder: "Search village or taluka...",
    thVillage: "Village / Location",
    thCenter: "Center Name",
    thContact: "Contact Person",
    thTiming: "Timings & Days",

    // FAQ
    faqTag: "Help & FAQ",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Clear answers to common questions about village e-waste collection",
    faqListenText: "FAQ: Doorstep pickup is 100 percent free. Instant cash is paid on the spot. All personal data is wiped safely.",
    faq1Q: "Is doorstep pickup really free for rural villages?",
    faq1A: "Yes! Doorstep pickup organized in coordination with Gram Panchayats is 100% free of charge. No fees are ever taken.",
    faq2Q: "Do I receive cash payment immediately?",
    faq2A: "Yes! Following quick inspection, our pickup agent provides instant cash or direct UPI payment (Google Pay / PhonePe).",
    faq3Q: "What about photos and private data on my old smartphone?",
    faq3A: "Our certified agents carry data-wipe tools and sanitize device memory on the spot before safe processing.",
    faq4Q: "Can our Gram Panchayat host a special Sunday collection camp?",
    faq4A: "Yes! Village Sarpanch or Panchayat members can call our toll-free helpline or message us on WhatsApp to schedule a camp.",

    // Audio & General
    btnListen: "🔊 Listen",
    btnStop: "⏹️ Stop",
    nowSpeaking: "Reading aloud...",
    micListening: "Listening, please speak...",
    fallbackVoiceNotice: "ℹ️ Playing in Hindi voice as Marathi voice is not installed on this device.",
    valRequired: "Please fill in all required fields!",
    valPhone: "Please enter a valid 10-digit mobile number!",

    // Footer
    footDesc: "Dedicated to keeping rural soil and water clean across Indian villages.",
    footCall: "Helpline:",
    footTime: "8:00 AM - 8:00 PM (Mon-Sat)",
    footRights: "All rights reserved. Swachh Bharat & Village Development Initiative."
  }
};

// ============================================================================
// 3. SAMPLE COLLECTION CENTERS DATA
// ============================================================================
const COLLECTION_CENTERS = [
  {
    village: "Malegaon Khurd (माळेगाव खुर्द)",
    taluka: "Baramati (बारामती)",
    center: "Krishi Vigyan Kendra E-Waste Hub",
    contact: "Anil More (9822012345)",
    timing: "Mon - Sat: 9:00 AM - 5:00 PM"
  },
  {
    village: "Narayangaon (नारायणगाव)",
    taluka: "Junnar (जुन्नर)",
    center: "Gram Panchayat Seva Kendra",
    contact: "Santosh Gunjal (9423187654)",
    timing: "Daily: 10:00 AM - 4:00 PM"
  },
  {
    village: "Ralegan Siddhi (राळेगण सिद्धी)",
    taluka: "Parner (पारनेर)",
    center: "Adarsh Gram EcoCenter",
    contact: "Bhausaheb Pathare (9850234567)",
    timing: "All 7 Days: 8:00 AM - 6:00 PM"
  },
  {
    village: "Wavi (वावी)",
    taluka: "Sinnar (सिन्नर)",
    center: "Weekly Bazaar Collection Camp",
    contact: "Ganesh Pawar (9765432109)",
    timing: "Wednesdays & Saturdays: 9:30 AM - 4:30 PM"
  },
  {
    village: "Kale (काळे)",
    taluka: "Karad (कराड)",
    center: "Krishna Valley Farmers Center",
    contact: "Vijay Shinde (9922110044)",
    timing: "Mon - Fri: 9:00 AM - 6:00 PM"
  },
  {
    village: "Deolali Pravara (देवळाली प्रवरा)",
    taluka: "Rahuri (राहुरी)",
    center: "Kisan Vikas Mandal Hall",
    contact: "Mahesh Vikhe (9822445566)",
    timing: "Mon - Sat: 10:00 AM - 5:00 PM"
  }
];

// ============================================================================
// 4. APPLICATION STATE
// ============================================================================
let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || "mr"; // Default Marathi
let currentUtterance = null;
let activeMicRecognition = null;

// ============================================================================
// 5. INITIALIZATION ON DOM READY
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Theme (Dark/Light)
  initTheme();

  // 2. Initialize Language (Apply translated strings)
  setLanguage(currentLang);

  // 3. Attach Event Listeners to Language Buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      if (selected && translations[selected]) {
        setLanguage(selected);
      }
    });
  });

  // 4. Initialize Points & Cash Calculator
  initCalculator();

  // 5. Initialize Centers Table & Filter
  renderCentersTable(COLLECTION_CENTERS);
  const searchInput = document.getElementById("center-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      const filtered = COLLECTION_CENTERS.filter(
        (c) =>
          c.village.toLowerCase().includes(term) ||
          c.taluka.toLowerCase().includes(term) ||
          c.center.toLowerCase().includes(term)
      );
      renderCentersTable(filtered);
    });
  }

  // 6. Initialize Form Handlers & Quantity Steppers
  initFormControls();

  // 7. Initialize Speech-to-Text (Microphone)
  initSpeechRecognition();

  // 8. Initialize Text-to-Speech (Listen Buttons)
  initSpeechSynthesis();

  // 9. Initialize FAQ Accordion
  initFaqAccordion();

  // 10. Initialize Animated Impact Counters
  initCounters();
});

// ============================================================================
// 6. LANGUAGE SYSTEM (data-i18n Attribute Binding)
// ============================================================================
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem(LANG_STORAGE_KEY, lang);

  // Stop any currently playing audio when switching language
  stopSpeech();

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  const t = translations[lang];

  // Update text content of all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update placeholder attributes
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (t[key] !== undefined) {
      el.setAttribute("placeholder", t[key]);
    }
  });

  // Update active state on language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Recalculate calculator display in the new language
  updateCalculatorResult();
}

// ============================================================================
// 7. THEME SYSTEM (Dark / Light Mode)
// ============================================================================
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    if (toggleBtn) toggleBtn.textContent = "🌙";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
      toggleBtn.textContent = isDark ? "☀️" : "🌙";
    });
  }
}

// ============================================================================
// 8. TEXT-TO-SPEECH (Voice Output - window.speechSynthesis)
// ============================================================================
function initSpeechSynthesis() {
  const stopButtons = document.querySelectorAll(".btn-stop-audio");
  const floatingBar = document.getElementById("floating-audio-bar");
  const floatingStop = document.getElementById("floating-stop-btn");

  // Global stop button triggers
  stopButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      stopSpeech();
    });
  });

  if (floatingStop) {
    floatingStop.addEventListener("click", stopSpeech);
  }

  // Listen buttons on each section
  document.querySelectorAll(".btn-listen").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sectionKey = btn.getAttribute("data-speech-key");
      const t = translations[currentLang];
      let textToRead = "";

      if (sectionKey && t[sectionKey]) {
        textToRead = t[sectionKey];
      } else {
        // Fallback: read text inside parent section
        const parentSec = btn.closest(".section") || btn.closest(".hero-section");
        if (parentSec) {
          const title = parentSec.querySelector(".section-title, .hero-title");
          const sub = parentSec.querySelector(".section-subtitle, .hero-tagline");
          textToRead = `${title ? title.textContent : ""} ${sub ? sub.textContent : ""}`;
        }
      }

      if (textToRead) {
        speakText(textToRead);
      }
    });
  });
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    alert("Speech Synthesis is not supported in this browser.");
    return;
  }

  // Stop any currently running speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  currentUtterance = utterance;

  // Language Code mapping
  let langCode = "mr-IN";
  if (currentLang === "hi") langCode = "hi-IN";
  if (currentLang === "en") langCode = "en-IN";

  // Check available voices
  const voices = window.speechSynthesis.getVoices();
  let selectedVoice = null;
  const noticeBanner = document.getElementById("speech-notice-banner");

  if (currentLang === "mr") {
    // Try to find Marathi voice
    selectedVoice = voices.find(
      (v) => v.lang.toLowerCase() === "mr-in" || v.lang.toLowerCase().startsWith("mr")
    );

    // If Marathi voice not found, fall back to Hindi voice
    if (!selectedVoice) {
      selectedVoice = voices.find(
        (v) => v.lang.toLowerCase() === "hi-in" || v.lang.toLowerCase().startsWith("hi")
      );
      if (noticeBanner) {
        noticeBanner.classList.add("show");
        setTimeout(() => noticeBanner.classList.remove("show"), 5000);
      }
    }
  } else if (currentLang === "hi") {
    selectedVoice = voices.find(
      (v) => v.lang.toLowerCase() === "hi-in" || v.lang.toLowerCase().startsWith("hi")
    );
  } else {
    // English (India preferred)
    selectedVoice = voices.find(
      (v) => v.lang.toLowerCase() === "en-in" || v.lang.toLowerCase().startsWith("en")
    );
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  utterance.lang = selectedVoice ? selectedVoice.lang : langCode;
  utterance.rate = 0.95; // Slightly slower for clear rural comprehension
  utterance.pitch = 1.0;

  // UI state updates
  const floatingBar = document.getElementById("floating-audio-bar");
  const floatingStatus = document.getElementById("floating-audio-status");

  utterance.onstart = () => {
    if (floatingBar) floatingBar.classList.add("active");
    if (floatingStatus) {
      floatingStatus.textContent = translations[currentLang].nowSpeaking;
    }
  };

  utterance.onend = () => {
    if (floatingBar) floatingBar.classList.remove("active");
  };

  utterance.onerror = () => {
    if (floatingBar) floatingBar.classList.remove("active");
  };

  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  const floatingBar = document.getElementById("floating-audio-bar");
  if (floatingBar) {
    floatingBar.classList.remove("active");
  }
}

// ============================================================================
// 9. SPEECH-TO-TEXT (Microphone Input - SpeechRecognition)
// ============================================================================
function initSpeechRecognition() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const micButtons = document.querySelectorAll(".mic-btn");

  // If SpeechRecognition is not supported, hide the mic buttons gracefully
  if (!SpeechRecognition) {
    micButtons.forEach((btn) => {
      btn.style.display = "none";
    });
    return;
  }

  micButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetInputId = btn.getAttribute("data-target");
      const targetInput = document.getElementById(targetInputId);
      if (!targetInput) return;

      // If already listening, stop
      if (btn.classList.contains("listening")) {
        if (activeMicRecognition) {
          activeMicRecognition.abort();
          activeMicRecognition = null;
        }
        btn.classList.remove("listening");
        return;
      }

      // Reset any other mic buttons
      micButtons.forEach((b) => b.classList.remove("listening"));

      const recognition = new SpeechRecognition();
      activeMicRecognition = recognition;

      // Set language code
      let langCode = "mr-IN";
      if (currentLang === "hi") langCode = "hi-IN";
      if (currentLang === "en") langCode = "en-IN";
      recognition.lang = langCode;

      recognition.continuous = false;
      recognition.interimResults = false;

      btn.classList.add("listening");

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          // If the target is a number (quantity), try to parse digits
          if (targetInput.type === "number") {
            const numMatch = transcript.match(/\d+/);
            if (numMatch) {
              targetInput.value = numMatch[0];
            } else {
              targetInput.value = transcript.trim();
            }
          } else {
            targetInput.value = transcript.trim();
          }
        }
        btn.classList.remove("listening");
      };

      recognition.onerror = () => {
        btn.classList.remove("listening");
      };

      recognition.onend = () => {
        btn.classList.remove("listening");
      };

      try {
        recognition.start();
      } catch (err) {
        btn.classList.remove("listening");
      }
    });
  });
}

// ============================================================================
// 10. FORM VALIDATION & WHATSAPP GENERATION
// ============================================================================
function initFormControls() {
  // Quantity Plus & Minus Steppers
  const qtyInput = document.getElementById("pickup-qty");
  const minusBtn = document.getElementById("qty-minus");
  const plusBtn = document.getElementById("qty-plus");

  if (qtyInput && minusBtn && plusBtn) {
    minusBtn.addEventListener("click", () => {
      let val = parseInt(qtyInput.value, 10) || 1;
      if (val > 1) qtyInput.value = val - 1;
    });

    plusBtn.addEventListener("click", () => {
      let val = parseInt(qtyInput.value, 10) || 1;
      qtyInput.value = val + 1;
    });
  }

  // Set default preferred date to tomorrow
  const dateInput = document.getElementById("pickup-date");
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split("T")[0];
  }

  // Pickup Form Submit -> WhatsApp Link
  const form = document.getElementById("pickup-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("pickup-name").value.trim();
      const phone = document.getElementById("pickup-phone").value.trim();
      const district = document.getElementById("pickup-district").value.trim();
      const taluka = document.getElementById("pickup-taluka").value.trim();
      const village = document.getElementById("pickup-village").value.trim();
      const device = document.getElementById("pickup-device").value;
      const qty = document.getElementById("pickup-qty").value;
      const date = document.getElementById("pickup-date").value;

      // Validation
      const t = translations[currentLang];
      if (!name || !phone || !village || !taluka || !date) {
        alert(t.valRequired);
        return;
      }

      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone.replace(/\D/g, ""))) {
        alert(t.valPhone);
        return;
      }

      // Generate localized WhatsApp text
      let msgHeader = "🌱 *EcoCycle - E-Waste Pickup Request*";
      let lblN = "Name / नाव";
      let lblP = "Mobile / फोन";
      let lblV = "Village / गाव";
      let lblT = "Taluka / तालुका";
      let lblD = "District / जिल्हा";
      let lblDev = "Device / उपकरण";
      let lblQ = "Quantity / संख्या";
      let lblDt = "Date / तारीख";
      let msgFooter = "Please confirm my doorstep pickup. Thank you!";

      if (currentLang === "mr") {
        msgHeader = "🌱 *इकोसायकल - ई-कचरा पिकअप नोंदणी*";
        lblN = "पूर्ण नाव";
        lblP = "मोबाईल";
        lblV = "गाव";
        lblT = "तालुका";
        lblD = "जिल्हा";
        lblDev = "उपकरण";
        lblQ = "संख्या";
        lblDt = "पिकअप तारीख";
        msgFooter = "कृपया आमच्या दारात येऊन वस्तू गोळा करण्याची वेळ निश्चित करा. धन्यवाद!";
      } else if (currentLang === "hi") {
        msgHeader = "🌱 *इकोसाइकिल - ई-कचरा पिकअप अनुरोध*";
        lblN = "पूरा नाम";
        lblP = "मोबाइल";
        lblV = "गांव";
        lblT = "तहसील";
        lblD = "जिला";
        lblDev = "उपकरण";
        lblQ = "संख्या";
        lblDt = "पिकअप तारीख";
        msgFooter = "कृपया हमारे घर से ई-कचरा संग्रह की पुष्टि करें। धन्यवाद!";
      }

      const deviceLabel = DEVICE_RATES[device] ? DEVICE_RATES[device].label : device;

      const message = `${msgHeader}
---------------------------------
👤 *${lblN}:* ${name}
📱 *${lblP}:* ${phone}
📍 *${lblV}:* ${village}
🏛 *${lblT}:* ${taluka}
🗺 *${lblD}:* ${district}
📦 *${lblDev}:* ${deviceLabel}
🔢 *${lblQ}:* ${qty}
📅 *${lblDt}:* ${date}
---------------------------------
${msgFooter}`;

      const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp in a new tab / app
      window.open(waUrl, "_blank");
    });
  }
}

// ============================================================================
// 11. POINTS & CASH VALUE CALCULATOR
// ============================================================================
function initCalculator() {
  const deviceSelect = document.getElementById("calc-device");
  const qtyInput = document.getElementById("calc-qty");

  if (deviceSelect && qtyInput) {
    deviceSelect.addEventListener("change", updateCalculatorResult);
    qtyInput.addEventListener("input", updateCalculatorResult);
  }

  updateCalculatorResult();
}

function updateCalculatorResult() {
  const deviceSelect = document.getElementById("calc-device");
  const qtyInput = document.getElementById("calc-qty");
  const cashDisplay = document.getElementById("calc-cash-result");
  const pointsDisplay = document.getElementById("calc-points-result");

  if (!deviceSelect || !qtyInput || !cashDisplay || !pointsDisplay) return;

  const selectedDevice = deviceSelect.value;
  const qty = parseInt(qtyInput.value, 10) || 1;

  const rate = DEVICE_RATES[selectedDevice] || DEVICE_RATES.mobile;
  const totalCash = rate.cash * qty;
  const totalPoints = rate.points * qty;

  cashDisplay.textContent = `₹${totalCash.toLocaleString()}`;
  pointsDisplay.textContent = `${totalPoints.toLocaleString()} Pts`;
}

// ============================================================================
// 12. COLLECTION CENTERS TABLE RENDERING
// ============================================================================
function renderCentersTable(centers) {
  const tbody = document.getElementById("centers-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";

  if (centers.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="4" style="text-align:center; padding: 20px; color: var(--text-muted);">माहिती उपलब्ध नाही / No centers found</td>`;
    tbody.appendChild(tr);
    return;
  }

  centers.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${item.village}</strong><br><small style="color: var(--text-muted);">${item.taluka}</small></td>
      <td>${item.center}</td>
      <td>📞 ${item.contact}</td>
      <td>🕒 ${item.timing}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ============================================================================
// 13. FAQ ACCORDION
// ============================================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    if (questionBtn) {
      questionBtn.addEventListener("click", () => {
        // Toggle current
        const isOpen = item.classList.contains("open");
        // Close others
        faqItems.forEach((other) => other.classList.remove("open"));
        if (!isOpen) {
          item.classList.add("open");
        }
      });
    }
  });
}

// ============================================================================
// 14. ANIMATED IMPACT COUNTERS
// ============================================================================
function initCounters() {
  const counters = document.querySelectorAll(".counter-num");
  let hasAnimated = false;

  const runAnimation = () => {
    if (hasAnimated) return;

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const increment = Math.ceil(target / 40);

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.textContent = count.toLocaleString();
          setTimeout(updateCount, 30);
        } else {
          counter.textContent = target.toLocaleString() + "+";
        }
      };
      updateCount();
    });
    hasAnimated = true;
  };

  // IntersectionObserver to start counting when scrolled into view
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const strip = document.querySelector(".counters-strip");
    if (strip) observer.observe(strip);
  } else {
    // Fallback: run immediately
    runAnimation();
  }
}

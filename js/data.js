/**
 * بيانات الموقع الرسمي - الشركة الهندسية للألوميتال (عرب المعادي، القاهرة)
 * جميع النصوص والأرقام والخدمات والمناطق مجمعة هنا لتسهيل التعديل والإدارة.
 */

const SITE_DATA = {
  // بيانات أرقام التواصل الرسمية
  // الرقم الأساسي (مكالمات + واتساب)
  PHONE_1_DISPLAY: '01141633199',
  PHONE_1_TEL: 'tel:+201141633199',
  WHATSAPP_NUMBER: 'wa.me/201141633199',
  WHATSAPP_BASE_URL: 'https://wa.me/201141633199',

  // الرقم الإضافي (مكالمات فقط)
  PHONE_2_DISPLAY: '01128482761',
  PHONE_2_TEL: 'tel:+201128482761',

  // الإدارة الرسمية للورشة
  MANAGEMENT: [
    {
      ar: 'وائل رمضان لغا',
      en: 'Wael Ramadan Lagha'
    },
    {
      ar: 'م/ عمار وائل لغا',
      en: 'Eng. Ammar Wael Lagha'
    },
    {
      ar: 'م/ عبد الرحمن لغا',
      en: 'Eng. Abdul Rahman Lagha'
    }
  ],

  // العنوان الرسمي
  ADDRESS_STREET_AR: '9 شارع [اسم الشارع]، فرع شارع محمد نور الدين',
  ADDRESS_STREET_EN: '9 [Street Name], off Mohamed Nour El-Din St',
  ADDRESS_AREA_AR: 'عرب المعادي، القاهرة',
  ADDRESS_AREA_EN: 'Arab El-Maadi, Cairo',

  // خرائط جوجل
  MAP_EMBED_URL: 'https://www.google.com/maps?q=Mohamed+Nour+El+Din+St,+Arab+El-Maadi,+Cairo,+Egypt&output=embed',
  MAP_URL: 'https://www.google.com/maps/search/?api=1&query=Mohamed+Nour+El+Din+St%2C+Arab+El-Maadi%2C+Cairo%2C+Egypt',
  MAP_IMAGE: './images/location-map.jpg',

  // نموذج التواصل (Formspree)
  FORMSPREE_URL: 'https://formspree.io/f/xbjnyqzk',

  // وسائط الهيرو
  HERO_VIDEO: './videos/hero-video.mp4',
  HERO_POSTER: './images/hero-main.jpg',

  // الخدمات الست
  SERVICES: [
    {
      id: 'windows',
      slug: 'windows',
      image: './images/service-windows.jpg',
      title: {
        ar: 'شبابيك ألوميتال',
        en: 'Aluminum Windows'
      },
      shortDesc: {
        ar: 'تصنيع وتركيب شبابيك جرار ومفصلي وقلاب بقطاعات متينة وعزل عالي للصوت والأتربة. تفصيل دقيق حسب مقاسات فتحات المبنى مع زجاج مفرد أو مزدوج.',
        en: 'Fabrication and installation of sliding, casement, and tilt windows with durable profiles and strong sound and dust insulation. Custom-sized with single or double glazing.'
      },
      features: {
        ar: [
          'أنظمة جرار ومفصلي وقلاب بمختلف المقاسات',
          'زجاج دبل عازل للصوت والحرارة وسيكوريت',
          'إكسسوارات ومقابض أصلية محكمة الإغلاق',
          'سلك مانع للحشرات متين وسهل الفك والتنظيف'
        ],
        en: [
          'Sliding, hinged, and tilt systems in custom sizes',
          'Double glazed sound and thermal insulation options',
          'High-grade tight-sealing hardware and handles',
          'Durable insect screens with easy maintenance'
        ]
      }
    },
    {
      id: 'doors',
      slug: 'doors',
      image: './images/service-doors.jpg',
      title: {
        ar: 'أبواب ألوميتال',
        en: 'Aluminum Doors'
      },
      shortDesc: {
        ar: 'أبواب غرف وبلكونات وحمامات ومداخل من قطاعات الألوميتال المقاومة للرطوبة والمياه. تشطيبات متعددة وألوان ثابتة تدوم طويلاً مع حركة فتح وإغلاق سلسة.',
        en: 'Doors for rooms, balconies, bathrooms, and entrances crafted from moisture- and water-resistant aluminum profiles. Multi-finish options with smooth, durable operation.'
      },
      features: {
        ar: [
          'مقاومة كاملة للمياه وبخار الماء وسهلة التنظيف',
          'أبواب مفصلية وجرار وفولدينج للفلل والشقق',
          'حشوات شيت ألوميتال وزجاج ملون أو مثلج',
          'كوالين وأقفال متينة لأعلى درجات الأمان'
        ],
        en: [
          '100% moisture resistant and easy to clean',
          'Hinged, sliding, and folding configurations',
          'Solid aluminum sheets or frosted/tinted glass panels',
          'Reliable security locks and heavy-duty hinges'
        ]
      }
    },
    {
      id: 'facades',
      slug: 'facades',
      image: './images/service-facades.jpg',
      title: {
        ar: 'واجهات ألوميتال',
        en: 'Aluminum Facades'
      },
      shortDesc: {
        ar: 'تنفيذ واجهات معمارية كرتن وول وكلادينج للمباني والشركات والمحلات التجارية. مظهر معماري راقٍ مع مقاومة فائقة للعوامل الجوية وحرارة الشمس.',
        en: 'Execution of curtain wall and cladding architectural facades for commercial and residential buildings. Sleek aesthetics engineered for harsh weather resistance.'
      },
      features: {
        ar: [
          'أنظمة واجهات زجاجية كرتن وول واستركشر',
          'تكسيات كلادينج مقاومة للحريق والعوامل الجوية',
          'توزيع مدروس للأحمال ومقاومة الرياح',
          'تشطيب معماري حديث يناسب الهوية البصرية'
        ],
        en: [
          'Curtain wall and structural glazing facade systems',
          'Fire-retardant exterior aluminum cladding panels',
          'Engineered load distribution and wind resistance',
          'Modern architectural aesthetics tailored to each project'
        ]
      }
    },
    {
      id: 'kitchens',
      slug: 'kitchens',
      image: './images/service-kitchens.jpg',
      title: {
        ar: 'مطابخ ألوميتال',
        en: 'Aluminum Kitchens'
      },
      shortDesc: {
        ar: 'تصميم وتنفيذ وحدات مطابخ ألوميتال وخشمونيوم بمقاومة تامة للحشرات والرطوبة ودرجات الحرارة. استغلال ذكي للمساحات مع وحدات تخزين مريحة وأرفف متينة.',
        en: 'Design and fabrication of aluminum and wood-look kitchens fully resistant to insects, heat, and moisture. Smart space optimization with durable shelving.'
      },
      features: {
        ar: [
          'مقاومة 100% للحشرات والرطوبة والمياه وسهولة الغسيل',
          'تشكيلات ألوان واسعة ودرجات الخشمونيوم الراقية',
          'مفصلات هيدروليك وسحابات أدراج ناعمة الحركة',
          'تفصيل داخلي عملي يستغل كامل المساحة المتاحة'
        ],
        en: [
          '100% insect and moisture proof, washable surface',
          'Wide color palette and realistic wood-grain finishes',
          'Soft-close hydraulic hinges and smooth drawer slides',
          'Functional internal layout tailored to your layout'
        ]
      }
    },
    {
      id: 'awnings-shutters',
      slug: 'awnings',
      image: './images/service-awnings-shutters.jpg',
      title: {
        ar: 'تندات وشيش حصيرة',
        en: 'Awnings & Roller Shutters'
      },
      shortDesc: {
        ar: 'تركيب شيش حصيرة حماية وعزل للشبابيك والبلكونات بمحركات كهربائية أو يدوي، مع تندات ألوميتال متينة للتظليل والحماية من أشعة الشمس والأمطار.',
        en: 'Installation of manual or motorized security roller shutters for windows and balconies, plus sturdy aluminum awnings for shade and rain protection.'
      },
      features: {
        ar: [
          'شيش حصيرة ألومنيوم محقون فوم لعزل الحرارة والصوت',
          'شرائح زنكاليوم مصفحة لأقصى درجات الأمان والحماية',
          'محركات إيطالية وفرنسية بريموت كنترول أو مفتاح',
          'تندات متحركة وثابتة بتغطيات مقاومة للشمس والأمطار'
        ],
        en: [
          'Foam-injected aluminum slats for noise and thermal insulation',
          'Armored extruded slats for maximum property security',
          'Motorized systems with remote controls or manual override',
          'Fixed and retractable awnings built for outdoor endurance'
        ]
      }
    },
    {
      id: 'profiles',
      slug: 'profiles',
      image: './images/service-profiles.jpg',
      title: {
        ar: 'بيع قطاعات الألوميتال',
        en: 'Aluminum Profiles Supply'
      },
      shortDesc: {
        ar: 'توريد وبيع قطاعات الألوميتال المعتمدة لمختلف الأنظمة والورش والفنيين بأسعار تنافسية. توفير قطاعات شريف علي الجامبو والتانجو والبي أس بكافة المقاسات والألوان.',
        en: 'Supply and distribution of certified aluminum extrusion profiles for fabricators and workshops. Providing leading systems in diverse specifications and finishes.'
      },
      features: {
        ar: [
          'أنظمة معتمدة (جامبو، تانجو، بي إس صغير وكبير، فالف)',
          'دهانات إلكتروستاتيك معتمدة ودرجات خشبية ثابتة',
          'توفير إكسسوارات التجميع والجوانات والمسامير الأصلية',
          'إمكانية التوريد والتحميل لجميع المحافظات'
        ],
        en: [
          'Certified architectural profiles (Jumbo, Tango, PS, Valve)',
          'Electrostatic powder-coated and wood-grain finishes',
          'Original assembly accessories, gaskets, and hardware',
          'Wholesale supply and shipping across all governorates'
        ]
      }
    }
  ],

  // معرض الأعمال (4 أعمال أولية بالصور المتاحة)
  WORKS: [
    {
      id: 'work-1',
      image: './images/work-windows-1.jpg',
      type: 'windows',
      area: 'arab-maadi',
      title: {
        ar: 'شبابيك ألوميتال أنثراسيت',
        en: 'Anthracite Aluminum Windows'
      }
    },
    {
      id: 'work-2',
      image: './images/work-kitchen-1.jpg',
      type: 'kitchens',
      area: 'zahraa',
      title: {
        ar: 'مطبخ ألوميتال أبيض بتشطيب خشبي',
        en: 'White Aluminum Kitchen with Wood-touch Finish'
      }
    },
    {
      id: 'work-3',
      image: './images/work-facade-1.jpg',
      type: 'facades',
      area: 'degla',
      title: {
        ar: 'واجهة ألوميتال برونزي',
        en: 'Bronze Aluminum Facade'
      }
    },
    {
      id: 'work-4',
      image: './images/work-doors-1.jpg',
      type: 'doors',
      area: 'maadi',
      title: {
        ar: 'باب بلكونة ألوميتال شامبانيا',
        en: 'Champagne Aluminum Balcony Door'
      }
    }
  ],

  // النطاق الجغرافي بالترتيب الملزم (عرب المعادي أولاً)
  AREAS: [
    {
      id: 'arab-maadi',
      title: {
        ar: 'عرب المعادي',
        en: 'Arab El-Maadi'
      },
      badge: {
        ar: 'مقر الورشة',
        en: 'Workshop Location'
      },
      desc: {
        ar: 'خدمة سريعة ومباشرة من مقر ورشتنا في شارع محمد نور الدين بعرب المعادي. معاينات فورية وتصنيع وتركيب الشبابيك والأبواب والمطابخ والواجهات بأعلى دقة.',
        en: 'Direct, prompt service from our workshop off Mohamed Nour El-Din St in Arab El-Maadi. On-site inspections, precision fabrication, and swift installation.'
      }
    },
    {
      id: 'maadi',
      title: {
        ar: 'المعادي',
        en: 'Maadi'
      },
      badge: {
        ar: 'المنطقة الأساسية',
        en: 'Primary Hub'
      },
      desc: {
        ar: 'خدمة مباشرة وسريعة لكافة أحياء المعادي القديمة والسرايات والميدان والحرية. معاينة للموقع وتفصيل وتركيب الشبابيك والأبواب والواجهات والمطابخ.',
        en: 'Prompt on-site service across Old Maadi, Sarayat, and surrounding quarters. Accurate site inspection, custom fabrication, and seamless installation.'
      }
    },
    {
      id: 'zahraa',
      title: {
        ar: 'زهراء المعادي',
        en: 'Zahraa El Maadi'
      },
      badge: {
        ar: 'خدمة سريعة',
        en: 'Fast Response'
      },
      desc: {
        ar: 'تغطية منتظمة لمنطقة زهراء المعادي والشطر العاشر والمناطق المحيطة. تصنيع شبابيك عازلة للصوت والغبار ومطابخ ألوميتال حديثة للشقق والوحدات السكنية.',
        en: 'Regular coverage throughout Zahraa El Maadi and residential sectors. Custom sound-dampening windows and modern moisture-proof kitchens.'
      }
    },
    {
      id: 'degla',
      title: {
        ar: 'دجلة المعادي',
        en: 'Degla El Maadi'
      },
      badge: {
        ar: 'خدمة سريعة',
        en: 'Fast Response'
      },
      desc: {
        ar: 'أعمال ألوميتال دقيقة للمباني والفلل والشقق في دجلة المعادي. تركيب قطاعات معمارية عازلة وشيش حصيرة وتندات بتشطيبات راقية تتوافق مع واجهات الحي.',
        en: 'Precision architectural aluminum work for villas and apartments in Degla. Insulated profiles, shutters, and awnings matching the neighbourhood aesthetic.'
      }
    },
    {
      id: 'cairo',
      title: {
        ar: 'جميع مناطق القاهرة',
        en: 'All Cairo Areas'
      },
      badge: {
        ar: 'تغطية شاملة',
        en: 'Greater Cairo'
      },
      desc: {
        ar: 'نلبي طلبات المعاينة والتنفيذ في مختلف مناطق القاهرة الكبرى (المقطم، التجمع، نصر، مصر الجديدة، وغيرها) مع الالتزام التام بجودة التركيب والتسليم.',
        en: 'Serving residential and commercial inquiries across Greater Cairo (Mokattam, New Cairo, Nasr City, Heliopolis, etc.) with strict installation standards.'
      }
    },
    {
      id: 'governorates',
      title: {
        ar: 'كل محافظات مصر',
        en: 'All Egypt Governorates'
      },
      badge: {
        ar: 'توريد وتنفيذ',
        en: 'Nationwide'
      },
      desc: {
        ar: 'توريد قطاعات الألوميتال وتنفيذ المشروعات والواجهات والوحدات الجاهزة لجميع محافظات الجمهورية مع شحن وتوصيل آمن حسب المقاسات المتفق عليها.',
        en: 'Supply of aluminum profiles and on-site project execution for commercial and residential developments across all Egyptian governorates.'
      }
    }
  ],

  // دوال مساعدة للعنوان
  getAddress(lang = 'ar') {
    const isAr = (lang === 'ar');
    const street = isAr ? this.ADDRESS_STREET_AR : this.ADDRESS_STREET_EN;
    const area = isAr ? this.ADDRESS_AREA_AR : this.ADDRESS_AREA_EN;

    // فحص ما إذا كان الشارع يحتوي على نص بين قوسين لم يكتمل بعد
    const hasUnresolvedPlaceholder = street && (street.includes('[') || street.includes(']'));

    if (!street || hasUnresolvedPlaceholder) {
      return area;
    }
    return `${street}، ${area}`;
  },

  getAreaOnly(lang = 'ar') {
    return (lang === 'ar') ? this.ADDRESS_AREA_AR : this.ADDRESS_AREA_EN;
  },

  // القاموس اللغوي I18N
  I18N: {
    ar: {
      siteName: 'الشركة الهندسية للألوميتال',
      tagline: 'ألوميتال بإتقان في عرب المعادي وكل القاهرة',
      managementTitle: 'الإدارة',
      callNow: 'اتصل الآن',
      callPrimary: 'الاتصال بالرقم الأول',
      callSecondary: 'الاتصال بالرقم الثاني',
      chooseCallNumber: 'اختر رقم الاتصال',
      callPrompt: 'اتصال مباشر',
      whatsapp: 'واتساب',
      requestInspection: 'اطلب معاينة',
      requestQuoteWhatsapp: 'اطلب عرض سعر عبر واتساب',
      viewWorks: 'شاهد الأعمال',
      allWorks: 'كل الأعمال',
      servingSummary: 'نخدم: عرب المعادي - المعادي - زهراء المعادي - دجلة المعادي - القاهرة - كل المحافظات',
      locationOnMap: 'موقعنا على الخريطة',
      openGoogleMaps: 'افتح الموقع على خريطة جوجل',
      mapImageAlt: 'موقع ورشة الشركة الهندسية للألوميتال في عرب المعادي، القاهرة على الخريطة',
      nav: {
        home: 'الرئيسية',
        services: 'خدماتنا',
        gallery: 'معرض الأعمال',
        areas: 'مناطق الخدمة',
        about: 'من نحن',
        contact: 'تواصل معنا'
      },
      hero: {
        title: 'ألوميتال بإتقان في عرب المعادي وكل القاهرة',
        subtitle: 'شبابيك وأبواب وواجهات ومطابخ ألوميتال، توريد وتركيب في عرب المعادي والمعادي وزهراء المعادي ودجلة المعادي وباقي المناطق.',
        badge: 'عرب المعادي، القاهرة'
      },
      sections: {
        servicesTitle: 'خدماتنا المتخصصة',
        servicesSubtitle: 'توريد وتركيب الألوميتال في عرب المعادي وكل القاهرة وتفصيل حسب المقاس والمكان',
        latestWorksTitle: 'أحدث الأعمال',
        latestWorksSubtitle: 'نماذج من أعمالنا المنفذة في عرب المعادي والمعادي والمناطق المجاورة',
        areasTitle: 'نطاق الخدمة والتغطية',
        areasSubtitle: 'توريد وتركيب الألوميتال في عرب المعادي والمعادي وكل القاهرة، ونوصل لكل محافظات مصر',
        ctaTitle: 'جاهز لبدء مشروعك أو تجديد منزلك؟',
        ctaText: 'نعمل معاينة ونرد على استفسارك بسرعة عبر واتساب. تواصل معنا لتحديد موعد المعاينة وتفصيل المقاسات المناسبة.',
        aboutTitle: 'عن الشركة الهندسية للألوميتال',
        aboutSubtitle: 'ورشة متخصصة في أعمال الألوميتال بعرب المعادي، القاهرة',
        mapSectionTitle: 'موقع ورشتنا في عرب المعادي',
        mapSectionSubtitle: 'تفضل بزيارتنا في مقر الورشة أو اطلب معاينة فورية في موقعك'
      },
      gallery: {
        filterAll: 'الكل',
        filterType: 'نوع العمل',
        filterArea: 'المنطقة',
        types: {
          all: 'جميع الأعمال',
          windows: 'شبابيك',
          doors: 'أبواب',
          facades: 'واجهات',
          kitchens: 'مطابخ',
          awnings: 'تندات وشيش'
        },
        areas: {
          all: 'جميع المناطق',
          'arab-maadi': 'عرب المعادي',
          maadi: 'المعادي',
          zahraa: 'زهراء المعادي',
          degla: 'دجلة المعادي',
          cairo: 'القاهرة',
          governorates: 'المحافظات'
        },
        counter: 'عرض {count} من إجمالي {total} أعمال',
        empty: 'لا توجد أعمال تطابق الفلاتر المحددة حالياً.'
      },
      contact: {
        formTitle: 'طلب معاينة أو عرض سعر',
        formDesc: 'املأ النموذج وسنتواصل معك سريعاً لترتيب المعاينة والرد على كافة استفساراتك.',
        nameLabel: 'الاسم بالكامل',
        phoneLabel: 'رقم الموبايل',
        areaLabel: 'المنطقة أو الحي',
        serviceLabel: 'نوع الخدمة المطلوبة',
        messageLabel: 'تفاصيل الطلب أو المقاسات إن وُجدت',
        submitButton: 'إرسال الطلب',
        sending: 'جاري الإرسال...',
        successMsg: 'تم استلام طلبك بنجاح! سنتواصل معك في أقرب وقت عبر الهاتف أو واتساب.',
        errorMsg: 'عذراً، حدث خطأ أثناء الإرسال. يمكنك التواصل معنا مباشرة عبر واتساب أو الهاتف.',
        mapHeading: 'موقعنا في عرب المعادي',
        selectServicePlaceholder: 'اختر نوع الخدمة',
        selectAreaPlaceholder: 'اختر المنطقة'
      },
      footer: {
        aboutText: 'ورشة متخصصة في توريد وتركيب وتفصيل أعمال الألوميتال للشبابيك والأبواب والواجهات والمطابخ في عرب المعادي والمعادي، القاهرة.',
        quickLinks: 'روابط سريعة',
        contactInfo: 'بيانات التواصل',
        rights: 'جميع الحقوق محفوظة'
      }
    },
    en: {
      siteName: 'Al Handasiya Aluminum',
      tagline: 'Aluminum Work Done Right in Arab El-Maadi & Cairo',
      managementTitle: 'Management',
      callNow: 'Call Now',
      callPrimary: 'Call Primary Number',
      callSecondary: 'Call Secondary Number',
      chooseCallNumber: 'Choose Phone Number',
      callPrompt: 'Direct Call',
      whatsapp: 'WhatsApp',
      requestInspection: 'Request an Inspection',
      requestQuoteWhatsapp: 'Request Quote via WhatsApp',
      viewWorks: 'View Projects',
      allWorks: 'All Projects',
      servingSummary: 'Serving: Arab El-Maadi - Maadi - Zahraa El Maadi - Degla El Maadi - Cairo - All Governorates',
      locationOnMap: 'Our location on map',
      openGoogleMaps: 'Open Location on Google Maps',
      mapImageAlt: 'Al Handasiya Aluminum workshop location on Google Maps in Arab El-Maadi, Cairo',
      nav: {
        home: 'Home',
        services: 'Services',
        gallery: 'Projects Gallery',
        areas: 'Service Areas',
        about: 'About Us',
        contact: 'Contact Us'
      },
      hero: {
        title: 'Aluminum Work Done Right in Arab El-Maadi & Cairo',
        subtitle: 'Aluminum windows, doors, facades, and kitchens. Supply and installation in Arab El-Maadi, Maadi, Zahraa El Maadi, Degla El Maadi, and all areas.',
        badge: 'Arab El-Maadi, Cairo'
      },
      sections: {
        servicesTitle: 'Our Specialized Services',
        servicesSubtitle: 'Supply and installation of aluminum in Arab El-Maadi and Cairo, custom fabricated to your exact measurements',
        latestWorksTitle: 'Recent Projects',
        latestWorksSubtitle: 'Selected executed works across Arab El-Maadi, Maadi, and neighboring areas',
        areasTitle: 'Service Coverage Areas',
        areasSubtitle: 'Supply and installation in Arab El-Maadi, Maadi, and all Cairo, with delivery to all Egyptian governorates',
        ctaTitle: 'Ready to upgrade your home or commercial space?',
        ctaText: 'We arrange on-site inspections and respond quickly via WhatsApp. Contact us today to schedule your visit.',
        aboutTitle: 'About Al Handasiya Aluminum',
        aboutSubtitle: 'Specialized aluminum workshop based in Arab El-Maadi, Cairo',
        mapSectionTitle: 'Our Workshop Location in Arab El-Maadi',
        mapSectionSubtitle: 'Visit us at our workshop or request an immediate on-site inspection'
      },
      gallery: {
        filterAll: 'All',
        filterType: 'Project Type',
        filterArea: 'Area',
        types: {
          all: 'All Projects',
          windows: 'Windows',
          doors: 'Doors',
          facades: 'Facades',
          kitchens: 'Kitchens',
          awnings: 'Awnings & Shutters'
        },
        areas: {
          all: 'All Areas',
          'arab-maadi': 'Arab El-Maadi',
          maadi: 'Maadi',
          zahraa: 'Zahraa El Maadi',
          degla: 'Degla El Maadi',
          cairo: 'Cairo',
          governorates: 'Governorates'
        },
        counter: 'Showing {count} of {total} projects',
        empty: 'No projects match the selected filters.'
      },
      contact: {
        formTitle: 'Request an Inspection or Quote',
        formDesc: 'Fill out the form below and we will get back to you promptly to arrange an inspection and answer your questions.',
        nameLabel: 'Full Name',
        phoneLabel: 'Mobile Phone',
        areaLabel: 'Area / District',
        serviceLabel: 'Service Requested',
        messageLabel: 'Project details or rough measurements',
        submitButton: 'Send Request',
        sending: 'Sending...',
        successMsg: 'Thank you! Your request has been received. We will contact you shortly by phone or WhatsApp.',
        errorMsg: 'Sorry, there was an issue sending your request. Please reach out to us directly via WhatsApp or phone.',
        mapHeading: 'Our Location in Arab El-Maadi',
        selectServicePlaceholder: 'Select a service',
        selectAreaPlaceholder: 'Select an area'
      },
      footer: {
        aboutText: 'Specialized aluminum fabrication and installation workshop for windows, doors, facades, and kitchens based in Arab El-Maadi, Cairo.',
        quickLinks: 'Quick Links',
        contactInfo: 'Contact Information',
        rights: 'All rights reserved'
      }
    }
  }
};

// إتاحة البيانات عالمياً على مستوى المتصفح وبيئة Node
if (typeof window !== 'undefined') {
  window.SITE_DATA = SITE_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}

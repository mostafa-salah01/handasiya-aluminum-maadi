/**
 * كود JavaScript الرئيسي التفاعلي - الشركة الهندسية للألوميتال
 * يدعم اللغتين (عربي / إنجليزي)، التوليد التلقائي للهيدر والفوتر،
 * التصفية في المعرض، اللايت بوكس، نافذة أرقام الاتصال، وخريطة الموقع.
 */

(function () {
  'use strict';

  // الحصول على البيانات من ملف data.js
  const DATA = window.SITE_DATA;
  if (!DATA) {
    console.error('SITE_DATA is not loaded. Please ensure js/data.js is loaded first.');
    return;
  }

  // إدارة اللغة (عربي افتراضي)
  let currentLang = 'ar';
  try {
    const savedLang = localStorage.getItem('site_lang');
    if (savedLang === 'en' || savedLang === 'ar') {
      currentLang = savedLang;
    }
  } catch (e) {
    currentLang = 'ar';
  }

  function getI18n() {
    return DATA.I18N[currentLang] || DATA.I18N.ar;
  }

  function setLanguage(lang) {
    currentLang = (lang === 'en') ? 'en' : 'ar';
    try {
      localStorage.setItem('site_lang', currentLang);
    } catch (e) {
      // تجاهل إذا كان التخزين مقيداً
    }

    document.documentElement.lang = currentLang;
    document.documentElement.dir = (currentLang === 'ar') ? 'rtl' : 'ltr';

    // تحديث كافة النصوص التي تحمل data-i18n
    updateStaticI18n();

    // إعادة رسم المكونات الديناميكية
    renderHeader();
    renderFooter();
    initHeroVideo();
    initServicesCards();
    initLatestWorks();
    initAreasSection();
    initGalleryPage();
    initContactPage();
    initAboutPage();
    initHomeMapSection();
    setupCallModal();
  }

  window.toggleLanguage = function () {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
  };

  // ترجمة النصوص الثابتة
  function updateStaticI18n() {
    const dict = getI18n();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const parts = key.split('.');
      let val = dict;
      for (const p of parts) {
        if (val && val[p] !== undefined) {
          val = val[p];
        } else {
          val = null;
          break;
        }
      }
      if (val && typeof val === 'string') {
        el.textContent = val;
      }
    });

    // ترجمة placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const parts = key.split('.');
      let val = dict;
      for (const p of parts) {
        if (val && val[p] !== undefined) {
          val = val[p];
        } else {
          val = null;
          break;
        }
      }
      if (val && typeof val === 'string') {
        el.setAttribute('placeholder', val);
      }
    });
  }

  // --------------------------------------------------------------------------
  // نافذة اختيار رقم الاتصال (Call Modal)
  // --------------------------------------------------------------------------
  function setupCallModal() {
    let overlay = document.getElementById('call-modal-overlay');
    const dict = getI18n();

    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'call-modal-overlay';
      overlay.className = 'call-modal-overlay';
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-modal', 'true');
      document.body.appendChild(overlay);

      overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
          closeCallModal();
        }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
          closeCallModal();
        }
      });
    }

    overlay.innerHTML = `
      <div class="call-modal">
        <div class="call-modal-header">
          <h3 class="call-modal-title">${dict.chooseCallNumber}</h3>
          <button type="button" class="call-modal-close" onclick="closeCallModal()" aria-label="إغلاق">&times;</button>
        </div>
        <div class="call-modal-list">
          <a href="${DATA.PHONE_1_TEL}" class="call-modal-item">
            <div class="call-modal-item-info">
              <span class="call-modal-item-name">${currentLang === 'ar' ? 'الرقم الأساسي (مكالمات وواتساب)' : 'Primary (Calls & WhatsApp)'}</span>
              <span class="call-modal-item-phone" dir="ltr">${DATA.PHONE_1_DISPLAY}</span>
            </div>
            <svg class="call-modal-item-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
            </svg>
          </a>

          <a href="${DATA.PHONE_2_TEL}" class="call-modal-item">
            <div class="call-modal-item-info">
              <span class="call-modal-item-name">${currentLang === 'ar' ? 'الرقم الثاني (مكالمات فقط)' : 'Secondary (Calls Only)'}</span>
              <span class="call-modal-item-phone" dir="ltr">${DATA.PHONE_2_DISPLAY}</span>
            </div>
            <svg class="call-modal-item-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
            </svg>
          </a>
        </div>
      </div>
    `;

    // ربط كافة أزرار "اتصل الآن" لتفتح هذه النافذة
    document.querySelectorAll('[data-action="call"]').forEach(btn => {
      btn.onclick = function (e) {
        e.preventDefault();
        openCallModal();
      };
    });
  }

  window.openCallModal = function () {
    const overlay = document.getElementById('call-modal-overlay');
    if (overlay) {
      overlay.classList.add('active');
    }
  };

  window.closeCallModal = function () {
    const overlay = document.getElementById('call-modal-overlay');
    if (overlay) {
      overlay.classList.remove('active');
    }
  };

  // --------------------------------------------------------------------------
  // توليد الهيدر والشريط العلوي
  // --------------------------------------------------------------------------
  function renderHeader() {
    const headerContainer = document.getElementById('site-header');
    if (!headerContainer) return;

    const dict = getI18n();
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const activePage = currentPath.toLowerCase();

    // في الشريط العلوي نعرض المنطقة دائماً
    const topBarAddress = DATA.getAreaOnly(currentLang);

    const langBtnText = (currentLang === 'ar') ? 'EN' : 'ع';
    const langBtnLabel = (currentLang === 'ar') ? 'Switch to English' : 'التحويل للغة العربية';

    const navItems = [
      { id: 'home', file: 'index.html', label: dict.nav.home },
      { id: 'services', file: 'services.html', label: dict.nav.services },
      { id: 'gallery', file: 'gallery.html', label: dict.nav.gallery },
      { id: 'areas', file: 'areas.html', label: dict.nav.areas },
      { id: 'about', file: 'about.html', label: dict.nav.about },
      { id: 'contact', file: 'contact.html', label: dict.nav.contact }
    ];

    const isCurrent = (file) => {
      if (file === 'index.html' && (activePage === '' || activePage === 'index.html')) return true;
      return activePage === file;
    };

    headerContainer.innerHTML = `
      <!-- الشريط العلوي (Top Bar) يعرض الرقمين وعرب المعادي -->
      <div class="top-bar">
        <div class="container">
          <div class="top-bar-items">
            <!-- الرقم الأول -->
            <a href="${DATA.PHONE_1_TEL}" class="top-bar-item" aria-label="الرقم الأساسي">
              <svg class="top-bar-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>${DATA.PHONE_1_DISPLAY}</span>
            </a>
            
            <span class="top-bar-divider">|</span>

            <!-- الرقم الثاني -->
            <a href="${DATA.PHONE_2_TEL}" class="top-bar-item" aria-label="الرقم الثاني">
              <svg class="top-bar-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>${DATA.PHONE_2_DISPLAY}</span>
            </a>

            <span class="top-bar-divider">|</span>

            <!-- العنوان -->
            <div class="top-bar-item">
              <svg class="top-bar-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
              </svg>
              <span>${topBarAddress}</span>
            </div>
          </div>
          <div class="top-bar-badge">
            ${currentLang === 'ar' ? 'توريد وتركيب ألوميتال' : 'Supply & Installation'}
          </div>
        </div>
      </div>

      <!-- شريط التنقل الأساسي -->
      <header class="site-header">
        <div class="container header-container">
          <a href="./index.html" class="brand-link" aria-label="${dict.siteName}">
            <img src="./images/logo-icon.png" alt="شعار الشركة الهندسية للألوميتال" class="brand-logo" width="36" height="36" onerror="this.style.display='none'">
            <span class="brand-name">${dict.siteName}</span>
          </a>

          <nav class="nav-menu" id="nav-menu" aria-label="قائمة الموقع">
            ${navItems.map(item => `
              <a href="./${item.file}" class="nav-link ${isCurrent(item.file) ? 'active' : ''}">${item.label}</a>
            `).join('')}
          </nav>

          <div class="header-actions">
            <button type="button" class="lang-switch-btn" onclick="toggleLanguage()" aria-label="${langBtnLabel}" title="${langBtnLabel}">
              ${langBtnText}
            </button>
            <button type="button" class="menu-toggle-btn" id="menu-toggle-btn" aria-label="فتح القائمة" aria-expanded="false" aria-controls="nav-menu">
              <svg class="menu-toggle-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
    `;

    // تفعيل زر القائمة في الموبايل
    const toggleBtn = document.getElementById('menu-toggle-btn');
    const menuEl = document.getElementById('nav-menu');
    if (toggleBtn && menuEl) {
      toggleBtn.addEventListener('click', function () {
        const isOpen = menuEl.classList.toggle('open');
        toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
  }

  // --------------------------------------------------------------------------
  // توليد الفوتر العام
  // --------------------------------------------------------------------------
  function renderFooter() {
    const footerContainer = document.getElementById('site-footer');
    if (!footerContainer) return;

    const dict = getI18n();
    const currentYear = new Date().getFullYear();
    const footerAddress = DATA.getAddress(currentLang);

    // قائمة الإدارة
    const managementListHtml = DATA.MANAGEMENT.map(m => {
      const name = (currentLang === 'ar') ? m.ar : m.en;
      return `<li class="footer-management-item">• ${name}</li>`;
    }).join('');

    footerContainer.innerHTML = `
      <footer class="site-footer">
        <div class="footer-top">
          <div class="container">
            <div class="footer-grid">
              
              <!-- نبذة سريعة والإدارة -->
              <div class="footer-brand">
                <h3>${dict.siteName}</h3>
                <p>${dict.footer.aboutText}</p>
                <div style="margin-block-start: 14px;">
                  <strong style="color: var(--accent);">${dict.managementTitle}:</strong>
                  <ul class="footer-management-list">
                    ${managementListHtml}
                  </ul>
                </div>
              </div>

              <!-- روابط سريعة -->
              <div class="footer-links">
                <h4 class="footer-heading">${dict.footer.quickLinks}</h4>
                <ul class="footer-links-list">
                  <li><a href="./index.html">${dict.nav.home}</a></li>
                  <li><a href="./services.html">${dict.nav.services}</a></li>
                  <li><a href="./gallery.html">${dict.nav.gallery}</a></li>
                  <li><a href="./areas.html">${dict.nav.areas}</a></li>
                  <li><a href="./about.html">${dict.nav.about}</a></li>
                  <li><a href="./contact.html">${dict.nav.contact}</a></li>
                </ul>
              </div>

              <!-- بيانات التواصل الرسمية بالرقمين -->
              <div class="footer-contact">
                <h4 class="footer-heading">${dict.footer.contactInfo}</h4>
                <ul class="footer-contact-list">
                  <!-- الرقم الأول -->
                  <li>
                    <svg class="footer-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <a href="${DATA.PHONE_1_TEL}" dir="ltr">${DATA.PHONE_1_DISPLAY}</a>
                    <span style="font-size: 0.75rem; color: #9A9591;">(${currentLang === 'ar' ? 'مكالمات وواتساب' : 'Calls & WA'})</span>
                  </li>

                  <!-- الرقم الثاني -->
                  <li>
                    <svg class="footer-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <a href="${DATA.PHONE_2_TEL}" dir="ltr">${DATA.PHONE_2_DISPLAY}</a>
                    <span style="font-size: 0.75rem; color: #9A9591;">(${currentLang === 'ar' ? 'مكالمات' : 'Calls'})</span>
                  </li>

                  <!-- العنوان الرسمي -->
                  <li>
                    <svg class="footer-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
                    </svg>
                    <span>${footerAddress}</span>
                  </li>

                  <!-- موقعنا على الخريطة -->
                  ${DATA.MAP_URL ? `
                  <li>
                    <svg class="footer-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                      <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
                    </svg>
                    <a href="${DATA.MAP_URL}" target="_blank" rel="noopener">${dict.locationOnMap}</a>
                  </li>
                  ` : ''}
                </ul>
              </div>

            </div>
          </div>
        </div>

        <!-- شريط النطاق الجغرافي الملزم (عرب المعادي أولاً) -->
        <div class="footer-serving-bar">
          <div class="container">
            ${dict.servingSummary}
          </div>
        </div>

        <!-- حقوق النشر -->
        <div class="footer-bottom">
          <div class="container">
            <p>© ${currentYear} ${dict.siteName}. ${dict.footer.rights}.</p>
          </div>
        </div>
      </footer>
    `;
  }

  // --------------------------------------------------------------------------
  // زر واتساب العائم الثابت (على الرقم 01141633199 فقط)
  // --------------------------------------------------------------------------
  function initFloatingWhatsApp() {
    let btn = document.getElementById('floating-whatsapp-btn');
    if (!btn) {
      btn = document.createElement('a');
      btn.id = 'floating-whatsapp-btn';
      btn.className = 'floating-whatsapp-btn';
      btn.target = '_blank';
      btn.rel = 'noopener';
      btn.setAttribute('aria-label', currentLang === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp');
      btn.innerHTML = `
        <svg class="floating-whatsapp-icon" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 012.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.81-.37-4.04-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.15 8.15 0 01-1.25-4.48c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
        </svg>
      `;
      document.body.appendChild(btn);
    }

    const defaultMsg = (currentLang === 'ar') 
      ? 'أهلاً، أود الاستفسار عن أعمال الألوميتال في عرب المعادي.'
      : 'Hello, I would like to inquire about aluminum services in Arab El-Maadi.';
    btn.href = `${DATA.WHATSAPP_BASE_URL}?text=${encodeURIComponent(defaultMsg)}`;
  }

  // --------------------------------------------------------------------------
  // منطق فيديو الهيرو (Hero Video vs Fallback)
  // --------------------------------------------------------------------------
  function initHeroVideo() {
    const heroSection = document.querySelector('.hero-section');
    const heroVideo = document.getElementById('hero-video');
    if (!heroSection || !heroVideo) return;

    // فحص وضع حفظ البيانات أو تفضيل تقليل الحركة
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isSaveData = navigator.connection && navigator.connection.saveData;

    if (prefersReducedMotion || isSaveData) {
      heroSection.classList.add('fallback-active');
      heroVideo.pause();
      return;
    }

    // استماع لأي خطأ في تحميل الفيديو لتفعيل الصورة الاحتياطية
    heroVideo.addEventListener('error', function () {
      heroSection.classList.add('fallback-active');
    });

    // محاولة التشغيل مع كتم الصوت
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        heroSection.classList.add('fallback-active');
      });
    }
  }

  // --------------------------------------------------------------------------
  // كروت الخدمات (الرئيسية وصفحة الخدمات)
  // --------------------------------------------------------------------------
  function initServicesCards() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    const dict = getI18n();

    grid.innerHTML = DATA.SERVICES.map(srv => {
      const title = srv.title[currentLang] || srv.title.ar;
      const desc = srv.shortDesc[currentLang] || srv.shortDesc.ar;
      const waMsg = (currentLang === 'ar') 
        ? `أهلاً، أود الاستفسار وطلب عرض سعر عن: ${title}`
        : `Hello, I would like to request a quote for: ${title}`;

      return `
        <article class="service-card">
          <div class="service-card-media">
            <img src="${srv.image}" alt="${title}" loading="lazy" width="400" height="300" onerror="this.parentElement.classList.add('img-fallback')">
          </div>
          <div class="service-card-body">
            <h3 class="service-card-title">${title}</h3>
            <p class="service-card-desc">${desc}</p>
            <div class="service-card-actions">
              <a href="${DATA.WHATSAPP_BASE_URL}?text=${encodeURIComponent(waMsg)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">
                <svg class="btn-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 012.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.81-.37-4.04-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.15 8.15 0 01-1.25-4.48c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                </svg>
                <span>${dict.requestQuoteWhatsapp}</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // --------------------------------------------------------------------------
  // أحدث الأعمال في الصفحة الرئيسية
  // --------------------------------------------------------------------------
  function initLatestWorks() {
    const container = document.getElementById('latest-works-grid');
    const section = document.getElementById('latest-works-section');
    if (!container || !section) return;

    if (!DATA.WORKS || DATA.WORKS.length === 0) {
      section.style.display = 'none';
      return;
    }
    section.style.display = '';

    const latest3 = DATA.WORKS.slice(0, 3);
    const dict = getI18n();

    container.innerHTML = latest3.map(w => {
      const title = w.title[currentLang] || w.title.ar;
      const typeLabel = dict.gallery.types[w.type] || w.type;
      const areaLabel = dict.gallery.areas[w.area] || w.area;

      return `
        <div class="work-card" onclick="location.href='./gallery.html?type=${w.type}'">
          <div class="work-card-media">
            <img src="${w.image}" alt="${title}" loading="lazy" width="400" height="267" onerror="this.parentElement.classList.add('img-fallback')">
          </div>
          <div class="work-card-body">
            <div class="work-card-badges">
              <span class="badge-tag">${typeLabel}</span>
              <span class="badge-area">${areaLabel}</span>
            </div>
            <h3 class="work-card-title">${title}</h3>
          </div>
        </div>
      `;
    }).join('');
  }

  // --------------------------------------------------------------------------
  // قسم مناطق الخدمة (عرب المعادي أولاً)
  // --------------------------------------------------------------------------
  function initAreasSection() {
    const grid = document.getElementById('areas-grid');
    if (!grid) return;

    grid.innerHTML = DATA.AREAS.map(area => {
      const title = area.title[currentLang] || area.title.ar;
      const badge = area.badge[currentLang] || area.badge.ar;
      const desc = area.desc[currentLang] || area.desc.ar;
      const waMsg = (currentLang === 'ar')
        ? `أهلاً، أود الاستفسار وطلب معاينة في منطقة: ${title}`
        : `Hello, I would like to request an inspection in: ${title}`;

      return `
        <div class="area-card">
          <div class="area-card-head">
            <h3 class="area-card-title">${title}</h3>
            <span class="area-card-badge">${badge}</span>
          </div>
          <p class="area-card-desc">${desc}</p>
          <div>
            <a href="${DATA.WHATSAPP_BASE_URL}?text=${encodeURIComponent(waMsg)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">
              <svg class="btn-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 012.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.81-.37-4.04-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.15 8.15 0 01-1.25-4.48c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
              </svg>
              <span>${currentLang === 'ar' ? 'طلب معاينة في ' + title : 'Request Inspection in ' + title}</span>
            </a>
          </div>
        </div>
      `;
    }).join('');
  }

  // --------------------------------------------------------------------------
  // صفحة معرض الأعمال والفلترة (gallery.html)
  // --------------------------------------------------------------------------
  function initGalleryPage() {
    const galleryGrid = document.getElementById('gallery-works-grid');
    if (!galleryGrid) return;

    const dict = getI18n();

    // استخراج الفلاتر من الـ URL
    const urlParams = new URLSearchParams(window.location.search);
    let selectedType = urlParams.get('type') || 'all';
    let selectedArea = urlParams.get('area') || 'all';

    const filterBar = document.getElementById('gallery-filter-bar');
    if (filterBar) {
      filterBar.innerHTML = `
        <div class="filter-group">
          <span class="filter-label">${dict.gallery.filterType}:</span>
          <button type="button" class="filter-btn ${selectedType === 'all' ? 'active' : ''}" data-type="all">${dict.gallery.types.all}</button>
          <button type="button" class="filter-btn ${selectedType === 'windows' ? 'active' : ''}" data-type="windows">${dict.gallery.types.windows}</button>
          <button type="button" class="filter-btn ${selectedType === 'doors' ? 'active' : ''}" data-type="doors">${dict.gallery.types.doors}</button>
          <button type="button" class="filter-btn ${selectedType === 'facades' ? 'active' : ''}" data-type="facades">${dict.gallery.types.facades}</button>
          <button type="button" class="filter-btn ${selectedType === 'kitchens' ? 'active' : ''}" data-type="kitchens">${dict.gallery.types.kitchens}</button>
          <button type="button" class="filter-btn ${selectedType === 'awnings' ? 'active' : ''}" data-type="awnings">${dict.gallery.types.awnings}</button>
        </div>

        <div class="filter-group">
          <span class="filter-label">${dict.gallery.filterArea}:</span>
          <button type="button" class="filter-btn ${selectedArea === 'all' ? 'active' : ''}" data-area="all">${dict.gallery.areas.all}</button>
          <button type="button" class="filter-btn ${selectedArea === 'arab-maadi' ? 'active' : ''}" data-area="arab-maadi">${dict.gallery.areas['arab-maadi']}</button>
          <button type="button" class="filter-btn ${selectedArea === 'maadi' ? 'active' : ''}" data-area="maadi">${dict.gallery.areas.maadi}</button>
          <button type="button" class="filter-btn ${selectedArea === 'zahraa' ? 'active' : ''}" data-area="zahraa">${dict.gallery.areas.zahraa}</button>
          <button type="button" class="filter-btn ${selectedArea === 'degla' ? 'active' : ''}" data-area="degla">${dict.gallery.areas.degla}</button>
        </div>

        <div class="results-counter" id="gallery-counter"></div>
      `;

      // ربط أزرار الفلترة
      filterBar.querySelectorAll('[data-type]').forEach(btn => {
        btn.addEventListener('click', () => {
          filterBar.querySelectorAll('[data-type]').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectedType = btn.getAttribute('data-type');
          updateGallery();
        });
      });

      filterBar.querySelectorAll('[data-area]').forEach(btn => {
        btn.addEventListener('click', () => {
          filterBar.querySelectorAll('[data-area]').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectedArea = btn.getAttribute('data-area');
          updateGallery();
        });
      });
    }

    function updateGallery() {
      const filtered = DATA.WORKS.filter(item => {
        const matchType = (selectedType === 'all') || (item.type === selectedType);
        const matchArea = (selectedArea === 'all') || (item.area === selectedArea);
        return matchType && matchArea;
      });

      const counterEl = document.getElementById('gallery-counter');
      if (counterEl) {
        counterEl.textContent = dict.gallery.counter
          .replace('{count}', filtered.length)
          .replace('{total}', DATA.WORKS.length);
      }

      if (filtered.length === 0) {
        galleryGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #fff; border-radius: 8px; border: 1px solid var(--border-color);">
            <p style="color: var(--text-muted); font-size: 1.1rem;">${dict.gallery.empty}</p>
          </div>
        `;
        return;
      }

      galleryGrid.innerHTML = filtered.map(w => {
        const title = w.title[currentLang] || w.title.ar;
        const typeLabel = dict.gallery.types[w.type] || w.type;
        const areaLabel = dict.gallery.areas[w.area] || w.area;

        return `
          <div class="work-card" data-work-id="${w.id}" role="button" tabindex="0" aria-label="${title}">
            <div class="work-card-media">
              <img src="${w.image}" alt="${title}" loading="lazy" width="400" height="267" onerror="this.parentElement.classList.add('img-fallback')">
            </div>
            <div class="work-card-body">
              <div class="work-card-badges">
                <span class="badge-tag">${typeLabel}</span>
                <span class="badge-area">${areaLabel}</span>
              </div>
              <h3 class="work-card-title">${title}</h3>
            </div>
          </div>
        `;
      }).join('');

      // تفعيل النقر لفتح اللايت بوكس
      galleryGrid.querySelectorAll('.work-card').forEach(card => {
        const id = card.getAttribute('data-work-id');
        const item = DATA.WORKS.find(x => x.id === id);
        const openHandler = () => {
          if (item) openLightbox(item);
        };
        card.addEventListener('click', openHandler);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openHandler();
          }
        });
      });
    }

    updateGallery();
  }

  // --------------------------------------------------------------------------
  // النافذة المكبرة (Lightbox)
  // --------------------------------------------------------------------------
  function openLightbox(work) {
    let lb = document.getElementById('gallery-lightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'gallery-lightbox';
      lb.className = 'lightbox';
      lb.innerHTML = `
        <div class="lightbox-content" role="dialog" aria-modal="true">
          <button type="button" class="lightbox-close-btn" id="lightbox-close" aria-label="إغلاق">&times;</button>
          <div class="lightbox-media">
            <img id="lightbox-img" src="" alt="">
          </div>
          <div class="lightbox-details">
            <div id="lightbox-badges" class="work-card-badges"></div>
            <h3 id="lightbox-title" class="lightbox-title"></h3>
          </div>
        </div>
      `;
      document.body.appendChild(lb);

      const closeHandler = () => lb.classList.remove('active');
      document.getElementById('lightbox-close').addEventListener('click', closeHandler);
      lb.addEventListener('click', (e) => {
        if (e.target === lb) closeHandler();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lb.classList.contains('active')) {
          closeHandler();
        }
      });
    }

    const dict = getI18n();
    const title = work.title[currentLang] || work.title.ar;
    const typeLabel = dict.gallery.types[work.type] || work.type;
    const areaLabel = dict.gallery.areas[work.area] || work.area;

    document.getElementById('lightbox-img').src = work.image;
    document.getElementById('lightbox-img').alt = title;
    document.getElementById('lightbox-title').textContent = title;
    document.getElementById('lightbox-badges').innerHTML = `
      <span class="badge-tag">${typeLabel}</span>
      <span class="badge-area">${areaLabel}</span>
    `;

    lb.classList.add('active');
  }

  // --------------------------------------------------------------------------
  // مكون الخريطة المشترك (يُستخدم في contact.html وفي index.html)
  // --------------------------------------------------------------------------
  function renderMapComponent(containerEl) {
    if (!containerEl) return;
    const dict = getI18n();

    if (!DATA.MAP_EMBED_URL && !DATA.MAP_URL) {
      containerEl.style.display = 'none';
      return;
    }
    containerEl.style.display = '';

    const mapTitle = currentLang === 'ar' ? 'موقع الشركة الهندسية للألوميتال في عرب المعادي، القاهرة' : 'Al Handasiya Aluminum location in Arab El-Maadi, Cairo';

    containerEl.innerHTML = `
      <!-- كارت صورة الخريطة القابل للضغط -->
      ${DATA.MAP_URL ? `
      <a href="${DATA.MAP_URL}" target="_blank" rel="noopener" class="map-visual-card" id="map-visual-link" aria-label="${dict.openGoogleMaps}">
        <img src="${DATA.MAP_IMAGE}" alt="${dict.mapImageAlt}" loading="lazy" width="800" height="450" onerror="this.closest('.map-visual-card').style.display='none'">
        <div class="map-card-btn-overlay">
          <span class="map-card-btn">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
            </svg>
            <span>${dict.openGoogleMaps}</span>
          </span>
        </div>
      </a>
      ` : ''}

      <!-- iframe خريطة جوجل -->
      ${DATA.MAP_EMBED_URL ? `
      <div class="map-wrapper">
        <iframe
          src="${DATA.MAP_EMBED_URL}"
          loading="lazy"
          title="${mapTitle}"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      ` : ''}

      <!-- زرار الرابط النصي الإضافي -->
      ${DATA.MAP_URL ? `
      <div class="map-action-bar">
        <a href="${DATA.MAP_URL}" target="_blank" rel="noopener" class="btn btn-secondary">
          <svg class="btn-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
          </svg>
          <span>${dict.openGoogleMaps}</span>
        </a>
      </div>
      ` : ''}
    `;
  }

  // قسم الخريطة المصغر بالرئيسية
  function initHomeMapSection() {
    const homeMapContainer = document.getElementById('home-map-container');
    if (homeMapContainer) {
      renderMapComponent(homeMapContainer);
    }
  }

  // --------------------------------------------------------------------------
  // صفحة التواصل والخريطة ونموذج Formspree (contact.html)
  // --------------------------------------------------------------------------
  function initContactPage() {
    // كروت الإدارة في صفحة التواصل
    const mgmtContainer = document.getElementById('contact-management-grid');
    if (mgmtContainer) {
      mgmtContainer.innerHTML = DATA.MANAGEMENT.map(m => {
        const name = (currentLang === 'ar') ? m.ar : m.en;
        return `
          <div class="management-card">
            <div class="management-card-name">${name}</div>
          </div>
        `;
      }).join('');
    }

    // العنوان في صفحة التواصل
    const addressEl = document.getElementById('contact-address-display');
    if (addressEl) {
      addressEl.textContent = DATA.getAddress(currentLang);
    }

    // أرقام الهاتف في صفحة التواصل
    const phone1El = document.getElementById('contact-phone-1');
    const phone2El = document.getElementById('contact-phone-2');
    if (phone1El) {
      phone1El.textContent = DATA.PHONE_1_DISPLAY;
      phone1El.href = DATA.PHONE_1_TEL;
    }
    if (phone2El) {
      phone2El.textContent = DATA.PHONE_2_DISPLAY;
      phone2El.href = DATA.PHONE_2_TEL;
    }

    // خريطة صفحة التواصل
    const contactMapContainer = document.getElementById('contact-map-container');
    if (contactMapContainer) {
      renderMapComponent(contactMapContainer);
    }

    // نموذج المراسلة
    const contactForm = document.getElementById('inspection-form');
    if (contactForm) {
      const dict = getI18n();
      const alertBox = document.getElementById('form-feedback');

      if (DATA.FORMSPREE_URL) {
        contactForm.action = DATA.FORMSPREE_URL;
      }

      contactForm.onsubmit = async function (e) {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.textContent = dict.contact.sending;
        if (alertBox) {
          alertBox.className = 'form-alert';
          alertBox.style.display = 'none';
        }

        const formData = new FormData(contactForm);

        try {
          const res = await fetch(DATA.FORMSPREE_URL, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });

          if (res.ok) {
            contactForm.reset();
            if (alertBox) {
              alertBox.className = 'form-alert success';
              alertBox.textContent = dict.contact.successMsg;
            }
          } else {
            throw new Error('Formspree responded with error');
          }
        } catch (err) {
          if (alertBox) {
            alertBox.className = 'form-alert error';
            alertBox.textContent = dict.contact.errorMsg;
          }
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      };
    }
  }

  // --------------------------------------------------------------------------
  // صفحة من نحن والإدارة (about.html)
  // --------------------------------------------------------------------------
  function initAboutPage() {
    const mgmtContainer = document.getElementById('about-management-grid');
    if (mgmtContainer) {
      mgmtContainer.innerHTML = DATA.MANAGEMENT.map(m => {
        const name = (currentLang === 'ar') ? m.ar : m.en;
        return `
          <div class="management-card">
            <div class="management-card-name">${name}</div>
          </div>
        `;
      }).join('');
    }

    // إخفاء أي قسم إحصاءات إن لم تكن هناك بيانات معتمدة
    const statsContainer = document.getElementById('about-stats');
    if (statsContainer && (!DATA.STATS || DATA.STATS.length === 0)) {
      statsContainer.style.display = 'none';
    }
  }

  // --------------------------------------------------------------------------
  // تشغيل التهيئة عند تحميل المستند
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    initFloatingWhatsApp();
  });

})();

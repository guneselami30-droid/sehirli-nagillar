/**
 * Sehrli Nağıllar (Magic Fairy Tales & Stories) - World-Class Children's Portal Engine
 * 1. Pure Child-Friendly SVG Artworks (Zero scary elements, Zero anatomical visuals)
 * 2. Dedicated Tailored Story per Age Tier (3-6 yaş, 7-10 yaş, 11+ yaş, Yuxu nağılları)
 * 3. Expressive Azerbaijani Storyteller Voice Engine (Natural intonation, speech synthesis, sentence karaoke highlight)
 * 4. Multi-language Support (AZ / EN / RU)
 * 5. Web Audio API Soothing Lullaby & Fairytale Chimes
 * 6. Live Global Search & Filter System
 * 7. Interactive Quiz & Riddles with instant cheer feedback
 * 8. Day Magical Library / Night Starry Slumber Theme
 * 9. 100% Active Buttons & Zero Dead Links
 */

// ============================================================
// 1. INJECT STYLES, SPARKLE PARTICLES & ANIMATIONS
// ============================================================
(function injectFairytaleStyles() {
  const styleEl = document.createElement('style');
  styleEl.id = 'nagillar-core-styles';
  styleEl.textContent = `
    @keyframes magicFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-8px) rotate(1deg); }
    }
    @keyframes magicTwinkle {
      0%, 100% { opacity: 0.4; transform: scale(0.85); }
      50% { opacity: 1; transform: scale(1.15); filter: drop-shadow(0 0 6px gold); }
    }
    @keyframes storyModalSlide {
      from { opacity: 0; transform: translateY(32px) scale(0.96); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes sentenceGlow {
      0% { background-color: rgba(255, 215, 0, 0.35); }
      100% { background-color: rgba(255, 215, 0, 0.15); }
    }

    .magic-float {
      animation: magicFloat 5s ease-in-out infinite;
    }
    .magic-twinkle {
      animation: magicTwinkle 2.5s ease-in-out infinite;
    }
    .story-modal-box {
      animation: storyModalSlide 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .story-card-hover {
      transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    .story-card-hover:hover {
      transform: translateY(-8px) scale(1.01);
      box-shadow: 0 20px 40px -10px rgba(122, 78, 29, 0.2);
    }
    .highlighted-sentence {
      background-color: rgba(255, 215, 0, 0.28);
      border-radius: 6px;
      padding: 2px 4px;
      transition: background-color 0.25s ease;
      animation: sentenceGlow 1s infinite alternate;
    }

    /* Bedtime Mode (Yuxu İşığı) */
    .bedtime-mode {
      background-color: #1A162B !important;
      color: #E2D9F3 !important;
    }
    .bedtime-mode .bg-surface-cream,
    .bedtime-mode .bg-surface-ivory {
      background-color: #241E3A !important;
      color: #E2D9F3 !important;
    }

    /* Dark Mode (Gecə Nağılları) */
    html.dark body {
      background-color: #120F24 !important;
      color: #EDE8F5 !important;
    }
    html.dark header, html.dark footer, html.dark main, html.dark section {
      background-color: #120F24 !important;
      color: #EDE8F5 !important;
    }
    html.dark header {
      background-color: rgba(18, 15, 36, 0.94) !important;
      border-bottom: 1px solid rgba(255, 215, 0, 0.12) !important;
    }
    html.dark .bg-surface,
    html.dark .bg-surface-ivory {
      background-color: #1B1633 !important;
    }
    html.dark .bg-surface-cream {
      background-color: #231C42 !important;
    }
    html.dark .bg-surface-container-lowest {
      background-color: #1E1838 !important;
    }
    html.dark .text-text-ink,
    html.dark .text-on-surface {
      color: #EDE8F5 !important;
    }
    html.dark .text-on-surface-variant {
      color: #B5AAC9 !important;
    }
    html.dark .border-border-parchment,
    html.dark .border-parchment {
      border-color: rgba(255, 255, 255, 0.1) !important;
    }
  `;
  document.head.appendChild(styleEl);
})();

// ============================================================
// 2. MULTI-LANGUAGE TRANSLATION DICTIONARY
// ============================================================
const NAGILLAR_TRANSLATIONS = {
  az: {
    brand_title: "SEHRLİ NAĞILLAR",
    brand_subtitle: "Uşaq Hekayə və Nağıl Portalı",
    hero_badge_daily: "Günün Sehrli Nağılı ✨",
    nav_home: "Nağıllar Dünyası",
    nav_azerbaijani: "Azərbaycan",
    nav_world: "Dünya",
    nav_hero_meals: "Yeməklər",
    nav_nature: "Heyvan",
    nav_lullabies: "Laylalar",
    nav_quiz: "Tapmacalar",
    quiz_reset_btn: "Sıfırla",
    nav_andersen: "Qar Kraliçası (Andersen)",
    search_placeholder: "Nağıl adı, sevimli qəhrəman (Cırtdan, Tıq-tıq, Məlikməmməd) axtar...",
    search_btn: "Axtar",
    all_stories: "Bütün Nağıllar",
    cat_az: "Azərbaycan Nağılları",
    cat_world: "Dünya Nağılları",
    cat_nature: "Heyvan Hekayələri",
    cat_bedtime: "Yuxu Nağılları",
    read_story: "Nağılı Oxu",
    listen_story: "Səsli Dinlə (İntonasiyalı)",
    pause_audio: "Fasilə",
    stop_audio: "Dayandır",
    resume_audio: "Davam et",
    speed_normal: "Normal Sürət (1x)",
    speed_slow: "Yavaş və Aydın (0.85x)",
    bedtime_mode_on: "Yuxu İşığı: Aktiv 🌙",
    bedtime_mode_off: "Yuxu İşığı: Söndür",
    moral_title: "💡 Nağıldan Çıxan İbrət Dərsi",
    quiz_title: "🌟 Sehrli Sual: Sən Olsaydın Nə Edərdin?",
    bookmark_added: "Nağıl sevimlilərə əlavə edildi! ⭐",
    bookmark_removed: "Nağıl sevimlilərdən çıxarıldı",
    toast_lang: "Dil dəyişdirildi: Azərbaycan dili",
    toast_theme_night: "Gecə Ulduzları rejimi aktivləşdirildi 🌙",
    toast_theme_day: "Gündüz Sehrli Kitabxana rejimi aktivləşdirildi ☀️",
    no_results: "Axtarışınıza uyğun heç bir nağıl tapılmadı.",
    no_results_desc: "Zəhmət olmasa başqa sevimli qəhrəmanın adını yazın və ya yuxarıdakı kateqoriyalardan seçin.",
    reading_time: "Oxuma müddəti",
    age_toddler: "Balacalar (3–6 yaş)",
    age_explorer: "Kəşfiyyatçılar (7–10 yaş)",
    age_hero: "Qəhrəmanlar (11+ yaş)",
    lullaby_playing: "Sehrli layla çalınır... Şirin yuxular! 🎶",
    lullaby_stopped: "Layla dayandırıldı",
    close: "Bağla",
    share: "Paylaş",
    hero_meals_subtitle: "UŞAQ SAĞLAMLIĞI VƏ SEHRLİ MƏTBƏX",
    hero_meals_title: "Qəhrəman Yeməkləri",
    hero_meals_desc: "Nağıl qəhrəmanlarımız kimi güclü, cəsur və ağıllı böyümək üçün sehrli, dadlı və vitaminlə zəngin uşaq yeməkləri və reseptləri!",
    hero_meals_badge: "Uşaqlar Üçün 100% Təbii və Faydalı",
    view_recipe: "Sehrli Reseptə Bax",
    recipe_bonus_tag: "⚡ Qəhrəman Bonusu:",
    recipe_cirtdan_hero: "Cırtdan",
    recipe_cirtdan_name: "Cırtdanın Təndir Çörəyi və Dağ Balı",
    recipe_cirtdan_desc: "Kənd balı, kərə yağı, qoz ləpəsi və təndir lavaşı. Divlərlə zəka yarışında Cırtdanın səhər gücü!",
    recipe_cirtdan_bonus: "Zəka +100 • Zirəklik +90",
    recipe_cirtdan_time: "Hazırlanma: 5 dəqiqə",
    recipe_melik_hero: "Məlikməmməd",
    recipe_melik_name: "Məlikməmmədin Qızıl Alma Sıyığı",
    recipe_melik_desc: "Şirin qızıl alma, ətirli darçın, bal və buxarda bişmiş yulaf. Qaranlıq dünyaya enən qəhrəmana tükənməz cəsarət!",
    recipe_melik_bonus: "Cəsarət +100 • Güc +95",
    recipe_melik_time: "Hazırlanma: 10 dəqiqə",
    recipe_zumrud_hero: "Zümrüd Quşu",
    recipe_zumrud_name: "Zümrüd Quşunun Giləmeyvə Şirəsi",
    recipe_zumrud_desc: "Təzə meşə böyürtkəni, dağ moruğu, banan və qatıq. Qanadlarını 7 qat göyə qaldıran canlı vitamin partlayışı!",
    recipe_zumrud_bonus: "Göz İtiyi +90 • Uçuş +100",
    recipe_zumrud_time: "Hazırlanma: 3 dəqiqə",
    recipe_gerda_hero: "Balaca Gerda",
    recipe_gerda_name: "Gerdanın Qəlbi İsidən Südlü Şərbəti",
    recipe_gerda_desc: "İsti kənd südü, kərə yağı, çiçək balı və darçın. Qarlı şimal şaxtasını əridən saf sevgi və mehribanlıq!",
    recipe_gerda_bonus: "İsti Ürək +100 • Şaxta +95",
    recipe_gerda_time: "Hazırlanma: 6 dəqiqə",
    footer_sections_title: "Bölmələr",
    footer_pedagogical_title: "Pedaqoji İrs & Klassika",
    footer_contact_title: "Əlaqə & Maarif",
    age_tiers_title: "Yaşa Uyğun Hekayələr",
    age_tiers_desc: "Hər bir hekayə uşağın inkişaf mərhələsinə,<br>söz ehtiyatına və xəyal gücünə uyğun təqdim olunur.",
    tier_toddler_age: "3 – 6 YAŞ",
    tier_toddler_name: "Balacalar",
    tier_toddler_desc: "Rəngarəng şəkillər, mehriban heyvan nağılları, təkrar olunan şən qafiyələr və sakitləşdirici yuxu laylaları.",
    tier_toddler_f1: "Sadə dialoqlar və səsli nağıllar",
    tier_toddler_f2: "Şirin yuxuya hazırlıq rejimi",
    tier_toddler_btn: "3–6 Yaş Nağılını Oxu",
    tier_explorer_age: "7 – 10 YAŞ",
    tier_explorer_badge: "Ən Çox Sevilən ⭐",
    tier_explorer_name: "Kəşfiyyatçılar",
    tier_explorer_desc: "Klassik xalq nağılları, sirli meşə macəraları, qəhrəmanın ağıllı qərarları və interaktiv sual-tapmacalar.",
    tier_explorer_f1: "Ağıl və zəka sınaqları",
    tier_explorer_f2: "Dostluq və əməksevərlik dərsləri",
    tier_explorer_btn: "7–10 Yaş Nağılını Oxu",
    tier_hero_age: "11+ YAŞ",
    tier_hero_name: "Qəhrəmanlar",
    tier_hero_desc: "Qədim dastanlar, mifik əjdahalar, dərin mənəvi dərslər və fəlsəfi dünya klassikləri.",
    tier_hero_f1: "Dastan və əfsanə qatları",
    tier_hero_f2: "Böyük xarakter və cəsarət təhlilləri",
    tier_hero_btn: "11+ Yaş Nağılını Oxu",
    catalog_title: "Nağıllar və Hekayələr",
    catalog_subtitle: "İstədiyiniz kateqoriyanı seçərək nağılları<br>süzgəcdən keçirin və oxumağa başlayın.",
    lullaby_tag: "LAYLALAR VƏ GECƏ İŞIĞI",
    lullaby_title: "Sehrli Layla və Yuxuya Hazırlıq Guşəsi",
    lullaby_desc: "Balacaların rahat və dərin yuxuya getməsi üçün qədim beşik nəğmələri, yumşaq arfa və külək zənglərinin harmonik melodiyası. Heç bir internet bağlantısı tələb etmir, bir toxunuşla canlı çalınır.",
    lullaby_start_btn: "Sehrli Laylanı Başlat",
    lullaby_stop_btn: "Laylanı Dayandır",
    lullaby_read_btn: "Yuxu Nağılını Oxu",
    lullaby_card_tag: "Şirin Yuxular",
    lullaby_card_title: "Sehrli Layla",
    quiz_section_tag: "ZƏKA VƏ TAPMACALAR",
    quiz_section_title: "Sehrli Nağıl Tapmacası",
    quiz_section_desc: "Öyrəndiyin nağılları nə dərəcədə yaxşı xatırlayırsan? Düzgün cavabı taparaq balaca xəzinə xalları qazan!",
    quiz_hint_label: "İpucu:",
    quiz_points_unit: "Xal",
    quiz_modal_score_label: "Toplanan Xal:",
    quiz_modal_success_title: "Möhtəşəm nəticə, balaca qəhrəman!",
    quiz_modal_success_desc: "Sən bütün nağıl tapmacalarını uğurla tapdın! Biliklərini daha da artırmaq üçün yenidən sına!",
    quiz_modal_effort_title: "Əla cəhd idi, balaca qəhrəman!",
    quiz_modal_effort_desc: "Biliklərini daha da artırmaq üçün yenidən sına! Hər cəhd səni əsl nağıl ustasına çevirir.",
    hero_chest_cycle_hint: "✨ Sandığa toxun • Növbəti Nağıl 🎲",
    hero_stage_note_title: "İnteraktiv 3D Pop-Up Kitab Səhnəsi",
    hero_stage_note_desc: "Qəhrəmanların sehrli dünyasını canlı kəşf et",
    hero_stage_open_btn: "Aç və Oxu",
    hero_ctrl_zoom: "Yaxınlaşdır",
    hero_ctrl_rotate: "360° Baxış",
    hero_ctrl_archive: "Təsviri İncəsənət Arxivi",
    footer_brand_desc: "Klassik və müasir uşaq ədəbiyyatı, səsli nağıllar və ailəvi oxu mədəniyyətini təşviq edən xüsusi təhsil guşəsi.",
    footer_contact_desc: "Sehrli uşaq nağılları fondu və məktəbəqədər nağıl laboratoriyası.",
    footer_safe_badge: "Uşaqlar Üçün Təhlükəsiz Nağıl Portalı",
    footer_copyright: "© 2025–2026 Sehrli Nağıllar. Bütün hüquqlar qorunur. Uşaq Ədəbiyyatı və Nağıl Portalı."
  },
  en: {
    brand_title: "MAGIC FAIRY TALES",
    brand_subtitle: "Children's Story & Fable Portal",
    hero_badge_daily: "Daily Magic Fairytale ✨",
    nav_home: "Tales Wonderland",
    nav_azerbaijani: "Azerbaijan",
    nav_world: "World",
    nav_hero_meals: "Meals",
    nav_nature: "Animals",
    nav_lullabies: "Lullabies",
    nav_quiz: "Riddles",
    quiz_reset_btn: "Reset",
    nav_andersen: "The Snow Queen (Andersen)",
    search_placeholder: "Search story title, favorite hero (Jirtdan, Aladdin, Prince)...",
    search_btn: "Search",
    all_stories: "All Stories",
    cat_az: "Azerbaijani Tales",
    cat_world: "World Fairy Tales",
    cat_nature: "Animal Stories",
    cat_bedtime: "Bedtime Stories",
    read_story: "Read Story",
    listen_story: "Listen Voice (Expressive)",
    pause_audio: "Pause",
    stop_audio: "Stop",
    resume_audio: "Resume",
    speed_normal: "Normal (1x)",
    speed_slow: "Gentle (0.85x)",
    bedtime_mode_on: "Bedtime Mode: On 🌙",
    bedtime_mode_off: "Bedtime Mode: Off",
    moral_title: "💡 Moral of the Story",
    quiz_title: "🌟 Magic Riddle: What Would You Do?",
    bookmark_added: "Story added to favorites! ⭐",
    bookmark_removed: "Story removed from favorites",
    toast_lang: "Language changed to English",
    toast_theme_night: "Night Starry mode enabled 🌙",
    toast_theme_day: "Day Magical Library mode enabled ☀️",
    no_results: "No fairy tales found matching your search.",
    no_results_desc: "Please try another friendly character or browse the category filters above.",
    reading_time: "Reading time",
    age_toddler: "Toddlers (Ages 3–6)",
    age_explorer: "Explorers (Ages 7–10)",
    age_hero: "Heroes (Ages 11+)",
    lullaby_playing: "Magical lullaby playing... Sweet dreams! 🎶",
    lullaby_stopped: "Lullaby stopped",
    close: "Close",
    share: "Share",
    hero_meals_subtitle: "CHILD HEALTH & MAGICAL KITCHEN",
    hero_meals_title: "Hero Meals",
    hero_meals_desc: "Magical, delicious and vitamin-rich healthy meals and recipes to grow strong, brave and smart like fairy tale heroes!",
    hero_meals_badge: "100% Natural & Healthy for Kids",
    view_recipe: "View Magic Recipe",
    recipe_bonus_tag: "⚡ Hero Bonus:",
    recipe_cirtdan_hero: "Cirtdan",
    recipe_cirtdan_name: "Cirtdan's Power Bread & Mountain Honey",
    recipe_cirtdan_desc: "Pure honey, fresh butter, crushed walnuts and warm lavash bread. Cirtdan's breakfast power against the giant!",
    recipe_cirtdan_bonus: "Intelligence +100 • Agility +90",
    recipe_cirtdan_time: "Prep time: 5 mins",
    recipe_melik_hero: "Malikmammad",
    recipe_melik_name: "Malikmammad's Golden Apple Porridge",
    recipe_melik_desc: "Sweet golden apple, aromatic cinnamon, honey and steamed oats. Limitless courage for the hero descending into the dark realm!",
    recipe_melik_bonus: "Bravery +100 • Strength +95",
    recipe_melik_time: "Prep time: 10 mins",
    recipe_zumrud_hero: "Simurgh Bird",
    recipe_zumrud_name: "Simurgh's Forest Berry Smoothie",
    recipe_zumrud_desc: "Fresh blackberries, mountain raspberries, banana and organic yogurt. A burst of vibrant vitamins that lifts wings to the heavens!",
    recipe_zumrud_bonus: "Sharp Eyesight +90 • Flight +100",
    recipe_zumrud_time: "Prep time: 3 mins",
    recipe_gerda_hero: "Little Gerda",
    recipe_gerda_name: "Gerda's Warm Heart Herbal Milk",
    recipe_gerda_desc: "Warm country milk, fresh butter, floral honey and cinnamon. Pure love and kindness that melts any frozen northern frost!",
    recipe_gerda_bonus: "Warm Heart +100 • Frost Immunity +95",
    recipe_gerda_time: "Prep time: 6 mins",
    footer_sections_title: "Sections",
    footer_pedagogical_title: "Pedagogical Heritage & Classics",
    footer_contact_title: "Contact & Education",
    age_tiers_title: "Age-Appropriate Stories",
    age_tiers_desc: "Each story is tailored to the child's development stage,<br>vocabulary, and imagination.",
    tier_toddler_age: "AGES 3 – 6",
    tier_toddler_name: "Toddlers",
    tier_toddler_desc: "Vibrant pictures, friendly animal tales, fun recurring rhymes, and soothing bedtime lullabies.",
    tier_toddler_f1: "Simple dialogues & expressive voice",
    tier_toddler_f2: "Sweet slumber bedtime mode",
    tier_toddler_btn: "Read Ages 3–6 Stories",
    tier_explorer_age: "AGES 7 – 10",
    tier_explorer_badge: "Most Popular ⭐",
    tier_explorer_name: "Explorers",
    tier_explorer_desc: "Classic folk tales, mystical forest adventures, wise hero choices, and interactive riddles.",
    tier_explorer_f1: "Wit & intelligence trials",
    tier_explorer_f2: "Lessons in friendship & diligence",
    tier_explorer_btn: "Read Ages 7–10 Stories",
    tier_hero_age: "AGES 11+",
    tier_hero_name: "Heroes",
    tier_hero_desc: "Ancient epics, mythical dragons, deep moral lessons and philosophical world classics.",
    tier_hero_f1: "Epic tales and folklore legends",
    tier_hero_f2: "Character and courage building",
    tier_hero_btn: "Read Ages 11+ Stories",
    catalog_title: "Fairy Tales & Stories",
    catalog_subtitle: "Select your favorite category to filter<br>and begin reading magical stories.",
    lullaby_tag: "LULLABIES & NIGHT LIGHT",
    lullaby_title: "Magical Lullaby & Bedtime Corner",
    lullaby_desc: "Ancient cradle songs, soft harp and wind chimes harmony for deep, soothing slumber. No internet needed, plays live at a gentle touch.",
    lullaby_start_btn: "Play Magic Lullaby",
    lullaby_stop_btn: "Stop Lullaby",
    lullaby_read_btn: "Read Bedtime Story",
    lullaby_card_tag: "Sweet Dreams",
    lullaby_card_title: "Magic Lullaby",
    quiz_section_tag: "BRAIN & RIDDLES",
    quiz_section_title: "Magical Fairytale Riddle",
    quiz_section_desc: "How well do you remember the fairy tales? Find the right answer and earn magic treasure points!",
    quiz_hint_label: "Hint:",
    quiz_points_unit: "Pts",
    quiz_modal_score_label: "Total Score:",
    quiz_modal_success_title: "Magnificent result, little hero!",
    quiz_modal_success_desc: "You solved all fairytale riddles successfully! Try again to boost your wisdom even further!",
    quiz_modal_effort_title: "Great effort, little hero!",
    quiz_modal_effort_desc: "Try again to boost your fairytale wisdom! Every try turns you into a true story master.",
    hero_chest_cycle_hint: "✨ Tap Chest • Next Tale 🎲",
    hero_stage_note_title: "Interactive 3D Pop-Up Stage",
    hero_stage_note_desc: "Explore the heroes' magic world live",
    hero_stage_open_btn: "Open & Read",
    hero_ctrl_zoom: "Zoom",
    hero_ctrl_rotate: "360° View",
    hero_ctrl_archive: "Visual Art Archive",
    footer_brand_desc: "Classic & modern children's literature, audio fairy tales, and a warm educational family reading realm.",
    footer_contact_desc: "Magic fairy tales foundation and preschool storytelling laboratory.",
    footer_safe_badge: "100% Safe Portal for Kids",
    footer_copyright: "© 2025–2026 Magic Fairy Tales. All rights reserved. Children's Literature & Story Portal."
  },
  ru: {
    brand_title: "ВОЛШЕБНЫЕ СКАЗКИ",
    brand_subtitle: "Портал детских сказок и историй",
    hero_badge_daily: "Волшебная Сказка Дня ✨",
    nav_home: "Мир сказок",
    nav_azerbaijani: "Азербайджан",
    nav_world: "Мир",
    nav_hero_meals: "Блюда",
    nav_nature: "Животные",
    nav_lullabies: "Колыбельные",
    nav_quiz: "Загадки",
    quiz_reset_btn: "Сбросить",
    nav_andersen: "Снежная Королева (Андерсен)",
    search_placeholder: "Поиск сказки, любимого героя (Джиртдан, Аладдин, Принц)...",
    search_btn: "Поиск",
    all_stories: "Все сказки",
    cat_az: "Азербайджанские сказки",
    cat_world: "Сказки мира",
    cat_nature: "Сказки о животных",
    cat_bedtime: "Сказки на ночь",
    read_story: "Читать сказку",
    listen_story: "Слушать аудиосказку",
    pause_audio: "Пауза",
    stop_audio: "Остановить",
    resume_audio: "Продолжить",
    speed_normal: "Обычная скорость (1x)",
    speed_slow: "Мягкая скорость (0.85x)",
    bedtime_mode_on: "Ночной свет: Вкл 🌙",
    bedtime_mode_off: "Ночной свет: Выкл",
    moral_title: "💡 Главный урок сказки",
    quiz_title: "🌟 Волшебный вопрос: А как бы поступил ты?",
    bookmark_added: "Сказка добавлена в избранное! ⭐",
    bookmark_removed: "Сказка удалена из избранного",
    toast_lang: "Язык переключен: Русский",
    toast_theme_night: "Ночной режим звёзд активирован 🌙",
    toast_theme_day: "Дневной режим библиотеки активирован ☀️",
    no_results: "По вашему запросу сказок не найдено.",
    no_results_desc: "Попробуйте ввести имя другого персонажа или выберите категорию выше.",
    reading_time: "Время чтения",
    age_toddler: "Малыши (3–6 лет)",
    age_explorer: "Исследователи (7–10 лет)",
    age_hero: "Герои (11+ лет)",
    lullaby_playing: "Звучит волшебная колыбельная... Сладких снов! 🎶",
    lullaby_stopped: "Колыбельная остановлена",
    close: "Закрыть",
    share: "Поделиться",
    hero_meals_subtitle: "ЗДОРОВЬЕ ДЕТЕЙ И ВОЛШЕБНАЯ КУХНЯ",
    hero_meals_title: "Блюда Героев",
    hero_meals_desc: "Волшебные, вкусные и богатые витаминами блюда и рецепты, чтобы расти сильными, смелыми и умными, как герои сказок!",
    hero_meals_badge: "100% Натурально и полезно для детей",
    view_recipe: "Посмотреть рецепт",
    recipe_bonus_tag: "⚡ Бонус Героя:",
    recipe_cirtdan_hero: "Джиртдан",
    recipe_cirtdan_name: "Хлеб Силы и Горный Мед Джиртдана",
    recipe_cirtdan_desc: "Горный мед, сливочное масло, грецкие орехи и лаваш. Завтрак Джиртдана для победы над Дивом!",
    recipe_cirtdan_bonus: "Интеллект +100 • Ловкость +90",
    recipe_cirtdan_time: "Приготовление: 5 минут",
    recipe_melik_hero: "Меликмамед",
    recipe_melik_name: "Золотая Яблочная Каша Меликмамеда",
    recipe_melik_desc: "Сладкое яблоко, корица, мед и паровая овсянка. Неиссякаемая смелость для героя, спускающегося в подземный мир!",
    recipe_melik_bonus: "Храбрость +100 • Сила +95",
    recipe_melik_time: "Приготовление: 10 минут",
    recipe_zumrud_hero: "Птица Симург",
    recipe_zumrud_name: "Ягодный Смузи Птицы Симург",
    recipe_zumrud_desc: "Свежая ежевика, малина, банан и йогурт. Витаминный заряд, поднимающий крылья до седьмого неба!",
    recipe_zumrud_bonus: "Острое Зрение +90 • Полет +100",
    recipe_zumrud_time: "Приготовление: 3 минуты",
    recipe_gerda_hero: "Маленькая Герда",
    recipe_gerda_name: "Согревающее Молоко Герды",
    recipe_gerda_desc: "Теплое деревенское молоко, масло, мед и корица. Искренняя любовь и теплота, растапливающая любой северный лед!",
    recipe_gerda_bonus: "Теплое Сердце +100 • Стойкость к Морозу +95",
    recipe_gerda_time: "Приготовление: 6 минут",
    footer_sections_title: "Разделы",
    footer_pedagogical_title: "Педагогическое Наследие и Классика",
    footer_contact_title: "Контакты и Просвещение",
    age_tiers_title: "Сказки по Возрасту",
    age_tiers_desc: "Каждая сказка подобрана с учётом развития ребёнка,<br>его словарного запаса и воображения.",
    tier_toddler_age: "3 – 6 ЛЕТ",
    tier_toddler_name: "Малыши",
    tier_toddler_desc: "Красочные картинки, добрые сказки о животных, весёлые рифмы и убаюкивающие колыбельные.",
    tier_toddler_f1: "Простые диалоги и аудиосказки",
    tier_toddler_f2: "Подготовка к сладкому сну",
    tier_toddler_btn: "Читать сказки 3–6 лет",
    tier_explorer_age: "7 – 10 ЛЕТ",
    tier_explorer_badge: "Самое Популярное ⭐",
    tier_explorer_name: "Исследователи",
    tier_explorer_desc: "Классические народные сказки, лесные приключения, мудрые поступки героев и загадки.",
    tier_explorer_f1: "Испытания ума и смекалки",
    tier_explorer_f2: "Уроки дружбы и трудолюбия",
    tier_explorer_btn: "Читать сказки 7–10 лет",
    tier_hero_age: "11+ ЛЕТ",
    tier_hero_name: "Герои",
    tier_hero_desc: "Древние сказания, мифические драконы, глубокие уроки и мировая классика.",
    tier_hero_f1: "Сказания и легенды",
    tier_hero_f2: "Формирование характера и смелости",
    tier_hero_btn: "Читать сказки 11+ лет",
    catalog_title: "Сказки и Истории",
    catalog_subtitle: "Выберите желаемую категорию для фильтрации<br>и начните читать волшебные сказки.",
    lullaby_tag: "КОЛЫБЕЛЬНЫЕ И НОЧНОЙ СВЕТ",
    lullaby_title: "Волшебная Колыбельная и Уголок Сна",
    lullaby_desc: "Старинные колыбельные, нежная арфа и музыка ветра для крепкого и спокойного сна малышей. Работает мгновенно в один клик без интернета.",
    lullaby_start_btn: "Включить колыбельную",
    lullaby_stop_btn: "Остановить колыбельную",
    lullaby_read_btn: "Читать сказку на ночь",
    lullaby_card_tag: "Сладких снов",
    lullaby_card_title: "Волшебная колыбельная",
    quiz_section_tag: "СМЕКАЛКА И ЗАГАДКИ",
    quiz_section_title: "Загадки Волшебных Сказок",
    quiz_section_desc: "Насколько хорошо ты помнишь любимые сказки? Найди правильный ответ и заработай очки сокровищ!",
    quiz_hint_label: "Подсказка:",
    quiz_points_unit: "Очков",
    quiz_modal_score_label: "Набранные очки:",
    quiz_modal_success_title: "Великолепный результат, юный герой!",
    quiz_modal_success_desc: "Ты успешно отгадал все сказочные загадки! Чтобы закрепить знания, попробуй сыграть снова!",
    quiz_modal_effort_title: "Отличная попытка, юный герой!",
    quiz_modal_effort_desc: "Попробуй снова, чтобы закрепить свои знания! Каждая попытка делает тебя мастером сказок.",
    hero_chest_cycle_hint: "✨ Нажми сундучок • След. Сказка 🎲",
    hero_stage_note_title: "Интерактивная 3D Сцена",
    hero_stage_note_desc: "Открой для себя мир героев",
    hero_stage_open_btn: "Открыть и читать",
    hero_ctrl_zoom: "Приблизить",
    hero_ctrl_rotate: "Обзор 360°",
    hero_ctrl_archive: "Архив Искусств",
    footer_brand_desc: "Классическая и современная детская литература, аудиосказки и семейное чтение для развития воображения.",
    footer_contact_desc: "Фонд волшебных сказок и лаборатория дошкольного чтения.",
    footer_safe_badge: "Безопасный портал для детей",
    footer_copyright: "© 2025–2026 Волшебные Сказки. Все права защищены. Портал детской литературы."
  }
};

// ============================================================
// 3. TAILORED CHILD-FRIENDLY STORIES (1 STORY PER AGE TIER + BEDTIME)
// ============================================================
const NAGILLAR_DB = [
  // 7. ANDERSEN: QAR KRALİÇASI VƏ GERDANIN İSTİ ÜRƏYİ
  {
    id: "qar-kralicasi",
    category: "world",
    ageGroup: "explorer",
    readingTime: { az: "6 dəq", en: "6 min", ru: "6 мин" },
    badge: { az: "DÜNYA ƏDƏBİYYATI • ANDERSEN", en: "WORLD CLASSIC • ANDERSEN", ru: "МИРОВАЯ КЛАССИКА • АНДЕРСЕН" },
    image: "assets/qar-kralicasi.svg",
    title: {
      az: "Qar Kraliçası və Gerdanın İsti Ürəyi",
      en: "The Snow Queen and Gerda's Warm Heart",
      ru: "Снежная Королева и горячее сердце Герды"
    },
    summary: {
      az: "Hans Xristian Andersenin ən məşhur şah əsəri: Qəlbinə buz zərrəsi düşmüş dostu Qayı qarlı şimal diyarında axtaran cəsur balaca Gerdanın, sadiq maralın və saf sevginin buzu əritməsi haqqında nağıl.",
      en: "Hans Christian Andersen's timeless classic: Brave little Gerda travelling through snowy northern realms with a gentle reindeer to rescue Kay, proving that a warm loving heart can melt any ice.",
      ru: "Знаменитая сказка Ганса Христиана Андерсена об отважной Герде, верном северном олене и горячем любящем сердце, способном растопить любые льды."
    },
    contentHtml: {
      az: `
        <p class="lead font-medium text-lg text-primary">Biri var idi, biri yox idi. Böyük və qədim bir şəhərdə iki mehriban uşaq — balaca Gerda və onun ən yaxın dostu Qay yaşayırdı. Onların pəncərələrinin önündə ətirli qırmızı qızılgüllər açardı.</p>
        <p>Qış gələndə pəncərələrdə gümüşü naxışlar parıldayardı. Bir gün soyuq şimal küləyi əsdi və sehrli buz güzgüsünün kiçicik bir qəlpəsi Qayın qəlbinə düşdü. Qayın ürəyi buz kimi soyudu və o, Qar Kraliçasının buz sarayına getdi.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Gerdanın Cəsur Səyahəti və Şimal Maralı</h4>
        <p>Balaca Gerda dostunu tək qoya bilməzdi. O, qırmızı isti paltosunu geyinib yola düşdü. Yolda ona qızılı buynuzları olan çox mehriban bir Şimal Maralı rast gəldi. Maral gülümsəyərək dedi: <em>"Qorxma, cəsur qızcığaz! Mən səni qarlı şimal diyarına, Qar Kraliçasının buz sarayına apararam!"</em></p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">2. Qütb İşıqları Altında İsti Ürəyin Qələbəsi</h4>
        <p>Onlar mavi və yaşıl qütb işıqlarının parıldadığı buz sarayına çatdılar. Qay orada buz parçalarından tapmacalar yığırdı. Gerda qaçıb dostunu qucaqladı və sevincdən göz yaşları axıtdı. Gerdanın isti, saf məhəbbəti Qayın ürəyindəki buz qəlpəsini dərhal əritdi!</p>
        <p>Qay gülümsədi, dostunu tanıdı və onlar əl-ələ tutaraq öz isti evlərinə, güllü bağçalarına qayıtdılar. Bütün şimal küləkləri belə saf dostluğun və isti ürəyin qarşısında aciz qaldı!</p>
      `,
      en: `
        <p class="lead font-medium text-lg text-primary">Once upon a time in a quaint city lived two dear friends, little Gerda and Kay, who tended sweet red roses together.</p>
        <p>When a chilly ice shard chilled Kay's heart, he was whisked away to the Snow Queen's winter palace. But Gerda's courage knew no bounds.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. The Journey with the Friendly Reindeer</h4>
        <p>Putting on her warm red coat, Gerda journeyed into the frosty North with a gentle reindeer who galloped beneath the dancing aurora borealis.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">2. Love Melts the Coldest Ice</h4>
        <p>Finding Kay in the crystal halls, Gerda's warm tears and embrace melted the cold splinter in his heart. Hand in hand, they returned home to their blooming roses.</p>
      `,
      ru: `
        <p class="lead font-medium text-lg text-primary">Жили-были в старинном городе двое неразлучных друзей — маленькая Герда и Кай, которые вместе выращивали душистые розы.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Путь через снега</h4>
        <p>Когда ледяной осколок заморозил сердце Кая, храбрая Герда отправилась на далёкий Север. Добрый северный олень помог ей добраться до ледяных чертогов.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">2. Торжество горячего сердца</h4>
        <p>Горячие слёзы Герды и её преданная любовь растопили ледяной осколок в груди Кая, и они вернулись домой, где снова цвели их любимые розы.</p>
      `
    },
    moral: {
      az: "Dünyanın ən qalın buzlarını belə təmiz və səmimi bir qəlbin sevgisi əridə bilər. Əsl dost çətin gündə heç vaxt tək qoyulmur.",
      en: "A warm, steadfast heart can melt any frozen obstacle. True friendship never abandons someone in need.",
      ru: "Истинная любовь и верная дружба способны растопить даже самые холодные льды."
    },
    quiz: {
      question: {
        az: "Gerda Qayın ürəyindəki soyuq buz zərrəsini necə əritdi?",
        en: "How did Gerda melt the cold splinter in Kay's heart?",
        ru: "Как Герда растопила ледяной осколок в сердце Кая?"
      },
      options: {
        az: ["Öz səmimi sevgisi, isti qucağı və göz yaşları ilə", "Ona qaynar çay içirərək", "Buzları çəkiclə qıraraq"],
        en: ["With her warm tears, steadfast love, and heartfelt embrace", "By giving him hot tea", "By breaking the ice with a hammer"],
        ru: ["Своей горячей любовью, объятиями и искренними слезами", "Напоив его горячим чаем", "Разбив лёд молотком"]
      },
      correctIndex: 0
    }
  },

  // 1. TIER 1: 3-6 YAŞ (BALACALAR)
  {
    id: "tiq-tiq-xanim",
    category: "nature",
    ageGroup: "toddler",
    readingTime: { az: "4 dəq", en: "4 min", ru: "4 мин" },
    badge: { az: "3–6 YAŞ • BALACALAR ÜÇÜN", en: "AGES 3–6 • FOR TODDLERS", ru: "3–6 ЛЕТ • ДЛЯ МАЛЫШЕЙ" },
    image: "assets/tiq-tiq.svg",
    title: {
      az: "Tıq-tıq Xanım və Mehriban Meşə Dostları",
      en: "Lady Tiq-tiq and Her Kind Forest Friends",
      ru: "Госпожа Тык-тык и добрые лесные друзья"
    },
    summary: {
      az: "Rəngbərəng çiçəkli çəmənlikdə yaşayan parıltılı çəkməli sevimli böcək Tıq-tıq xanımın şən addımları, mehriban meşə dostları və paylaşmağın sevinci.",
      en: "The joyful tale of cheerful little beetle Lady Tiq-tiq with her tapping red boots, discovering the sweetness of sharing berries with woodland friends.",
      ru: "Добрая и светлая сказка о маленькой нарядной жужелице Тык-тык ханум, её звонких сапожках и радости настоящей дружбы на солнечной полянке."
    },
    contentHtml: {
      az: `
        <p class="lead font-medium text-lg text-primary">Biri var idi, biri yox idi. Yaşıl otların, al-əlvan çobanyastığı güllərinin arasında balaca, sevimli bir böcək yaşayırdı. Onun ayağında par-par parıldayan qırmızı çəkmələri var idi.</p>
        <p>Balaca böcək yeriyəndə çəkmələri sevinclə səs salardı: <em>"Tıq-tıq, tıq-tıq, tıq-tıq!"</em> Buna görə də meşədəki bütün quşlar və kəpənəklər onu gülərüzlə çağırardılar: <em>"Salam, əziz Tıq-tıq xanım!"</em></p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Günəşli Çəmənlik və Şirin Giləmeyvələr</h4>
        <p>Bir səhər Tıq-tıq xanım başına zərif qırmızı ləçəyini bağlayıb çəmənliyə gəzməyə çıxdı. Yolda qulaqları uzun balaca bir Dovşanla rastlaşdı. Dovşan meşədə şirin meşə çiyələkləri axtarırdı. Tıq-tıq xanım gülümsəyərək dedi: <em>"Gəl birlikdə axtaraq, iki dost olanda hər iş daha şən və asan olar!"</em></p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">2. Mehriban Süfrə və Gülüş Sədaları</h4>
        <p>Onlar birlikdə böyük yarpağın altında bütöv bir səbət meşə çiyələyi tapdılar. Çiyələkləri meşədəki digər dostları ilə də bölüşdülər. Axşam düşəndə Tıq-tıq xanım anladı ki, dünyada ən böyük xoşbəxtlik dostlarla əl-ələ verib mehriban yaşamaq və hər şeyi sevinclə bölüşməkdir.</p>
      `,
      en: `
        <p class="lead font-medium text-lg text-primary">Once upon a time, amidst sunny daisies and emerald blades of grass, lived a sweet little beetle with shiny red boots.</p>
        <p>As she tapped along the meadow path, her boots made a cheerful melody: <em>'Tiq-tiq, tiq-tiq!'</em> All the friendly woodland creatures greeted her warmly: <em>'Good morning, cheerful Lady Tiq-tiq!'</em></p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Sunny Meadows and Ripe Berries</h4>
        <p>One sunny morning, she met a friendly little bunny searching for woodland strawberries. Lady Tiq-tiq smiled: <em>'Let us search together, for friendship turns every journey into a song!'</em></p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">2. The Joy of Sharing</h4>
        <p>Together under a broad green leaf, they discovered a patch of sweet strawberries and shared them with all the birds and squirrels. True happiness is sharing sweet moments with kind friends.</p>
      `,
      ru: `
        <p class="lead font-medium text-lg text-primary">Жила-была на солнечной полянке среди ромашек весёлая маленькая жужелица в блестящих красных сапожках.</p>
        <p>Когда она шагала по росистой травке, её сапожки весело звенели: <em>«Тык-тык, тык-тык!»</em> И все лесные бабочки улыбались ей навстречу: <em>«Доброе утро, милая Тык-тык ханум!»</em></p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Солнечная прогулка</h4>
        <p>Встретив пушистого зайчонка, Тык-тык ханум предложила собирать землянику вместе, ведь вдвоём любое дело спорится веселее.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">2. Радость дружбы</h4>
        <p>Они угостили ягодами всех лесных зверят и пели добрые песенки до самого заката. Делиться радостью с друзьями — самое прекрасное чудо на свете.</p>
      `
    },
    moral: {
      az: "Mehribanlıq və paylaşmaq hər kəsə sevinc gətirir. Dostlarla birlikdə olanda hər gün bayrama çevrilir.",
      en: "Kindness and sharing bring warmth to everyone. True friends make every sunny day brighter.",
      ru: "Доброта и готовность делиться делают мир радостнее. С верными друзьями каждый день полон счастья."
    },
    quiz: {
      question: {
        az: "Tıq-tıq xanım meşədə kiminlə rastlaşdı və ona nə təklif etdi?",
        en: "Who did Lady Tiq-tiq meet in the sunny meadow?",
        ru: "Кого встретила Тык-тык ханум на полянке?"
      },
      options: {
        az: ["Mehriban balaca Dovşanla rastlaşdı və birlikdə giləmeyvə yığmağı təklif etdi", "Heç kimlə danışmadı", "Evə qayıtdı"],
        en: ["Met a friendly little bunny and offered to pick berries together", "Spoke to no one", "Ran back home"],
        ru: ["Встретила доброго зайчонка и предложила собирать ягоды вместе", "Ни с кем не заговорила", "Убежала домой"]
      },
      correctIndex: 0
    }
  },

  // 2. TIER 2: 7-10 YAŞ (KƏŞFİYYATÇILAR)
  {
    id: "cirtdan-ve-div",
    category: "az",
    ageGroup: "explorer",
    readingTime: { az: "5 dəq", en: "5 min", ru: "5 мин" },
    badge: { az: "7–10 YAŞ • KƏŞFİYYATÇILAR", en: "AGES 7–10 • EXPLORERS", ru: "7–10 ЛЕТ • ИССЛЕДОВАТЕЛИ" },
    image: "assets/cirtdan.svg",
    title: {
      az: "Cırtdanın Ağıllı Macərası",
      en: "Jirtdan's Clever Adventure",
      ru: "Умное приключение Джиртдана"
    },
    summary: {
      az: "Boyu balaca olsa da ağlı dağlar qədər uca olan sevimli Cırtdanın meşədə dostlarını qoruması və hazırcavablığı ilə hər kəsi heyrətləndirməsi.",
      en: "The spirited tale of little Jirtdan, whose tiny size is matched by a gigantic intellect, using quick wits and cool courage to guide his friends safely back to the village.",
      ru: "Задорная и мудрая история о сообразительном мальчике Джиртдане, который спас своих друзей благодаря острому уму и невозмутимому спокойствию."
    },
    contentHtml: {
      az: `
        <p class="lead font-medium text-lg text-primary">Biri var idi, biri yox idi. Qədim bir kənddə nənəsinin gül balası, balaca və çox hazırcavab bir oğlan yaşayırdı. Boyu balaca olduğu üçün hamı onu mehribanlıqla Cırtdan çağırardı.</p>
        <p>Cırtdan hər gün kəndin uşaqları ilə oynayar, tapmacalar tapar və heç vaxt çətinlikdən qorxmazdı.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Meşədə Axşam Düşəndə</h4>
        <p>Bir gün uşaqlar meşəyə quru çırpı toplamağa getdilər. Oyun o qədər şirin oldu ki, günəşin necə batdığını hiss etmədilər. Hava qaraldı, uşaqlar təşvişə düşdülər. Cırtdan isə sakitcə ətrafı dinlədi və uzaqdan bir itin hürməsini eşitdi: <em>"Darıxmayın, dostlar! İt hürən tərəfdə mütləq kənd və işıqlı evlər var, ora tərəf gedək!"</em></p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">2. Hazırcavab Ağıl və Qələbə</h4>
        <p>Yolda rast gəldikləri böyük və sadəlövh meşə qəhrəmanı onları qonaq etmək istədi. Gecə düşəndə Cırtdan öz hazırcavab sualları və tələsməzliyi ilə hər kəsin vaxtında yola düşməsinə şərait yaratdı. Səhər açılanda bütün uşaqlar salamat öz evlərinə, nənələrinin yanına çatdılar. Bütün kənd Cırtdanın ağlını və cəsarətini alqışladı!</p>
      `,
      en: `
        <p class="lead font-medium text-lg text-primary">Once upon a time in a charming village lived Jirtdan, a small boy with an enormous heart and a razor-sharp intellect.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. When Twilight Fell in the Forest</h4>
        <p>Gathering branches in the woods, the boys lost track of time. As shadows lengthened, Jirtdan stayed calm and listened intently: <em>'Follow the sound of barking dogs, my friends, for where there are watchdogs, there is a warm village!'</em></p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">2. Quick Wits Win the Day</h4>
        <p>Meeting a towering forest giant, Jirtdan's clever conversation and riddle-like requests delayed the giant peacefully until dawn broke. By sunrise, all the children returned safely home to their proud families.</p>
      `,
      ru: `
        <p class="lead font-medium text-lg text-primary">Жил-был в уютном селе смышлёный мальчуган по имени Джиртдан. Мал золотник, да дорог — так говорили о нём все соседи.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Сумерки в лесу</h4>
        <p>Заигравшись в лесу дотемна, ребята забеспокоились. Но Джиртдан не растерялся: <em>«Слушайте! Вдали лают собаки — значит, там наше село и тёплые огоньки домов!»</em></p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">2. Победа смекалки</h4>
        <p>Встретив простодушного великана, Джиртдан своими весёлыми загадками отвлёк его внимание, и на рассвете все ребята благополучно вернулись домой к бабушкам.</p>
      `
    },
    moral: {
      az: "Boy və fiziki güc deyil, çətin anlarda təmkinli olmaq və zəka ilə hərəkət etmək ən böyük qüvvədir.",
      en: "Size and strength are second to a calm head and clever thinking in any unexpected challenge.",
      ru: "Ум и спокойствие всегда сильнее простого физического роста. Сообразительность открывает любые двери."
    },
    quiz: {
      question: {
        az: "Cırtdan meşədə yolu tapmaq üçün nəyə diqqət yetirdi?",
        en: "How did Jirtdan know which way to lead his friends safely?",
        ru: "На что обратил внимание Джиртдан, чтобы найти дорогу домой?"
      },
      options: {
        az: ["Uzaqdan gələn it səsinə qulaq asaraq kəndin istiqamətini müəyyən etdi", "Yerə oturub ağladı", "Ağaca çıxıb yatdı"],
        en: ["Listened for barking dogs indicating the village direction", "Sat down and cried", "Climbed a tree and fell asleep"],
        ru: ["Прислушался к лаю собак, определив направление к селу", "Сел на траву и заплакал", "Уснул на ветке"]
      },
      correctIndex: 0
    }
  },

  // 3. TIER 3: 11+ YAŞ (QƏHRƏMANLAR)
  {
    id: "melikmemmed-zumrud-qusu",
    category: "az",
    ageGroup: "hero",
    readingTime: { az: "7 dəq", en: "7 min", ru: "7 мин" },
    badge: { az: "11+ YAŞ • QƏHRƏMANLAR", en: "AGES 11+ • HEROES", ru: "11+ ЛЕТ • ГЕРОИ" },
    image: "assets/melikmemmed.svg",
    title: {
      az: "Məlikməmməd və Sehrli Zümrüd Quşu",
      en: "Melikmammad and the Enchanted Simurgh Bird",
      ru: "Меликмамед и волшебная птица Зюмрюд"
    },
    summary: {
      az: "Bağdakı qızıl almaları qoruyan gənc Məlikməmmədin xeyirxahlığı, əfsanəvi Zümrüd quşunun balalarına göstərdiyi qayğı və onun qanadlarında işıqlı dünyaya möhtəşəm uçuşu.",
      en: "The heroic legend of noble young prince Melikmammad, whose boundless compassion for the Simurgh fledglings earned him flight across the skies to the city of light.",
      ru: "Благородное сказание об отважном Меликмамеде, защитившем птенцов великой птицы Симург и взмывшем на её изумрудных крыльях навстречу свету и подвигам."
    },
    contentHtml: {
      az: `
        <p class="lead font-medium text-lg text-primary">Biri var idi, biri yox idi. Qədim dövrlərdə ədalətli bir diyarda xalqını sevən müdrik bir padşah yaşayırdı. Onun saray bağında ildə bircə dəfə xalis qızıldan parlaq bir alma verən füsunkar bir ağac vardı.</p>
        <p>Padşahın ən kiçik oğlu Məlikməmməd həm cəsur, həm də çox xeyirxah bir gənc idi. O, böyük qardaşlarından fərqli olaraq bağda keşik çəkərkən yuxuya təslim olmadı.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Zümrüd Quşunun Balaları</h4>
        <p>Gizli bir səyahətə çıxan Məlikməmməd uca dağların zirvəsindəki nəhəng çinar ağacına çatdı. Ağacın təpəsində əfsanəvi Zümrüd quşunun yuvası vardı. Zümrüd quşu yem axtarmağa getdiyi vaxt yuvanın üstünə fırtına ilə böyük bir təhlükə yaxınlaşırdı. Məlikməmməd dərhal qalxanını qaldırdı, öz həyatını düşünmədən balaları yağışdan və təhlükədən qorudu.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">2. Göylərdə Səyahət və İşıqlı Dünya</h4>
        <p>Yuvasına qayıdan möhtəşəm Zümrüd quşu balalarını sağ-salamat görəndə qanadlarını açdı və insan dili ilə danışdı: <em>"Ey nəcib igid! Sənin xeyirxah qəlbin mənim balalarımı xilas etdi. Qanadlarımın üstünə otur, səni arzuladığın İşıqlı dünyaya aparım!"</em></p>
        <p>Zümrüd quşu göyün yeddinci qatına qalxdı, buludları yarıb Məlikməmmədi öz doğma sarayına, nurlu səhərə çatdırdı. Məlikməmməd anladı ki, ən böyük qəhrəmanlıq qılınc çalmaq deyil, zəiflərə mərhəmət göstərmək və dostluqda sədaqətli olmaqdır.</p>
      `,
      en: `
        <p class="lead font-medium text-lg text-primary">Long ago in a land of justice lived Melikmammad, a young prince renowned for his pure courage and compassionate heart.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Sheltering the Sacred Fledglings</h4>
        <p>High upon the crags of Mount Qaf in an ancient plane tree sat the nest of the legendary Simurgh. When an alpine tempest threatened the fledglings, Melikmammad climbed the tree and held his royal mantle over the nest through the storm.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">2. Flight to the Sunlit Realm</h4>
        <p>Witnessing his noble deed, the great green-winged bird spread her plumage: <em>'Climb upon my back, true prince, and we shall soar above the thunderclouds to your home of light!'</em> True heroism lies not in conquering, but in protecting the vulnerable.</p>
      `,
      ru: `
        <p class="lead font-medium text-lg text-primary">В давние времена жил храбрый и великодушный юноша Меликмамед, сердце которого не знало коварства и страха.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Защита птенцов Симурга</h4>
        <p>Поднявшись на скалы к священному древу, юноша укрыл своим плащом птенцов волшебной птицы Зюмрюд от бури и камнепада.</p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">2. Полёт над облаками</h4>
        <p>Благодарная птица вознесла героя высоко в небо, вернув его в родной край. Меликмамед понял, что истинная доблесть заключается в доброте и защите слабых.</p>
      `
    },
    moral: {
      az: "Ən böyük güc mərhəmət və fədakarlıqdadır. Zəiflərə arxa duran və təmənnasız kömək edən kəs ən uca zirvələrə yüksələr.",
      en: "True valor is rooted in compassion. Protecting those in need elevates a hero higher than any crown.",
      ru: "Подлинное благородство измеряется милосердием. Тот, кто бескорыстно защищает слабых, достоин величайшей славы."
    },
    quiz: {
      question: {
        az: "Məlikməmməd Zümrüd quşunun minnətdarlığını nəyin sayəsində qazandı?",
        en: "How did Melikmammad win the eternal gratitude of the Simurgh bird?",
        ru: "Чем Меликмамед заслужил благодарность птицы Зюмрюд?"
      },
      options: {
        az: ["Fırtına zamanı balalarını qoruyaraq xilas etdiyi üçün", "Ona qızıl hədiyyə etdiyi üçün", "Yüksək səslə oxuduğu üçün"],
        en: ["By sheltering and protecting her fledglings during the storm", "By giving her gold", "By singing loudly"],
        ru: ["Спас её птенцов во время бури, укрыв от опасности", "Подарил ей золото", "Громко запел песню"]
      },
      correctIndex: 0
    }
  },

  // 4. SPECIAL BEDTIME TALE (YUXU NAĞILI)
  {
    id: "ulduz-peri",
    category: "bedtime",
    ageGroup: "toddler",
    readingTime: { az: "4 dəq", en: "4 min", ru: "4 мин" },
    badge: { az: "YUXU NAĞILI • RAHATLAYICI", en: "BEDTIME • SOOTHING", ru: "НА НОЧЬ • УСПОКАИВАЮЩАЯ" },
    image: "assets/ulduz-peri.svg",
    title: {
      az: "Ulduzları Yandıran Balaca Pəri",
      en: "The Little Fairy Who Lit the Stars",
      ru: "Маленькая фея, зажигающая звёзды"
    },
    summary: {
      az: "Hər axşam göy üzünə çıxaraq ulduzları tək-tək yandıran, körpələrə şirin yuxular və sakitlik fısıldayan xeyirxah pərinin nağılı.",
      en: "A tender starlight bedtime fable of a gentle fairy sprinkling dreams over sleeping towns.",
      ru: "Убаюкивающая вечерняя сказка о доброй звёздной фее, которая нежно укрывает мир снами."
    },
    contentHtml: {
      az: `
        <p class="lead font-medium text-lg text-primary">Günəş dağların arxasında qürub edəndə və bütün quşlar yuvada sakitləşəndə göy üzünə gümüşü saçlı balaca bir Pəri çıxardı.</p>
        <p>Pərinin əlində ay işığından toxunmuş parlaq bir ulduz fənəri vardı. O, buludların üzərində addımlayaraq sönmüş ulduzlara toxunar, onlara pıçıldayardı: <em>"Parıldayın, şirin yuxuları qoruyun..."</em></p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Sakit Şəhər və Şirin Yuxular</h4>
        <p>Hər toxunuşdan sonra səmada qızılı bir ulduz yanardı. Uşaqların otaqları, evlər və küçələr sakitliyə qərq olardı. İndi sən də gözlərini yum, pərinin ulduzlu laylasını dinlə və şirin yuxulara dal...</p>
      `,
      en: `
        <p class="lead font-medium text-lg text-primary">As dusk settles gently over the meadow, a fairy with starlight hair walks softly across twilight clouds.</p>
        <p>With her moonlit wand, she taps sleepy stars awake, whispering: <em>'Shine soft and watch over sweet dreams.'</em> Close your eyes, little one, and drift into peaceful slumber.</p>
      `,
      ru: `
        <p class="lead font-medium text-lg text-primary">Когда солнце опускается за холмы, на небо выходит звёздная фея с лунным фонариком.</p>
        <p>Она зажигает огоньки и тихо поёт колыбельную: <em>«Спите сладко, добрые ребята...»</em> Закрывай глазки и смотри чудесные сны.</p>
      `
    },
    moral: {
      az: "Gecə dincəlmək və gözəl sabaha qüvvə toplamaq vaxtıdır. Şirin yuxular!",
      en: "Night is a haven for peaceful rest and wonderful dreams for tomorrow.",
      ru: "Ночь дарит отдых и силы для радостного нового дня."
    },
    quiz: {
      question: {
        az: "Balaca Pəri ulduzlara nə pıçıldayırdı?",
        en: "What did the fairy whisper to the sleeping stars?",
        ru: "Что шептала звёздная фея звёздам?"
      },
      options: {
        az: ["Parıldayın və şirin yuxuları qoruyun", "Sürətlə qaçın", "Bərkdən səs salın"],
        en: ["Shine soft and watch over sweet dreams", "Run fast", "Make noise"],
        ru: ["Светите мягко и храните добрые сны", "Быстро бегайте", "Шумите громко"]
      },
      correctIndex: 0
    }
  },

  // 5. ƏLƏDDİN VƏ UÇAN XALÇA
  {
    id: "eleddin-sehrli-ciraq",
    category: "world",
    ageGroup: "explorer",
    readingTime: { az: "6 dəq", en: "6 min", ru: "6 мин" },
    badge: { az: "DÜNYA NAĞILI • DƏNİZLƏR AŞAN", en: "WORLD TALE • WONDROUS", ru: "СКАЗКИ МИРА • ВОСТОЧНАЯ" },
    image: "assets/eleddin.svg",
    title: {
      az: "Ələddin və Uçan Xalça",
      en: "Aladdin and the Magic Carpet",
      ru: "Аладдин и волшебный ковёр"
    },
    summary: {
      az: "Mehriban Ələddinin sehrli çıraqdakı mavi gülərüz Cin ilə dostluğu və uçan xalça ilə ulduzların altından səyahəti.",
      en: "Aladdin's cheerful journey with the gentle blue Genie on a magic carpet soaring over starry minarets.",
      ru: "Увлекательное путешествие доброго Аладдина и весёлого Джинна на летающем ковре-самолёте."
    },
    contentHtml: {
      az: `
        <p class="lead font-medium text-lg text-primary">Qədim Şərq şəhərlərindən birində Ələddin adlı şən və xeyirxah bir oğlan yaşayırdı.</p>
        <p>Bir gün o, köhnə bir bürünc çıraq tapdı. Çırağı təmizləyəndə içindən gülərüz və mehriban bir Cin çıxdı. Cin ona dedi: <em>"Mən sənin dostunam! Sənə necə kömək edə bilərəm?"</em></p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Uçan Xalça Səyahəti</h4>
        <p>Ələddin heç bir qızıl-gümüş istəmədi, yalnız bütün kəndə təmiz su və şirin xurmalar çatdırmağı arzuladı. Cin sevinclə ona qırmızı naxışlı uçan bir xalça bəxş etdi. Onlar ulduzlu səmada uçaraq bütün uşaqlara hədiyyələr payladılar.</p>
      `,
      en: `
        <p class="lead font-medium text-lg text-primary">In an ancient sunny oasis lived Aladdin, a kind-hearted boy who always helped his neighbors.</p>
        <p>Rubbing a dusty lamp, he met a friendly blue Genie. Instead of asking for treasures, Aladdin wished for fresh water and dates for his whole village.</p>
      `,
      ru: `
        <p class="lead font-medium text-lg text-primary">В старинном городе жил добрый юноша Аладдин. Он нашёл медную лампу, из которой появился весёлый Джинн.</p>
        <p>Аладдин попросил ковёр-самолёт, чтобы развозить сладости и чистую воду всем жителям оазиса.</p>
      `
    },
    moral: {
      az: "Ən böyük xəzinə başqalarına təmənnasız sevinc bəxş etməkdir.",
      en: "The greatest wish is bringing happiness to others.",
      ru: "Истинное богатство — это радость, которую ты даришь окружающим."
    },
    quiz: {
      question: {
        az: "Ələddin Cindən ilk növbədə nə istədi?",
        en: "What did Aladdin wish for from the Genie?",
        ru: "О чём попросил Аладдин доброго Джинна?"
      },
      options: {
        az: ["Kəndə təmiz su və uşaqlara kömək", "Bütün qızılları özünə yığmaq", "Qalada tək yaşamaq"],
        en: ["Fresh water and help for his people", "Piles of gold for himself", "To live alone in a tower"],
        ru: ["Чистую воду и помощь жителям", "Много золота для себя", "Жить одному в замке"]
      },
      correctIndex: 0
    }
  },

  // 6. BALACA ŞAHZADƏ VƏ TÜLKÜ
  {
    id: "balaca-sahzade-ve-tulku",
    category: "world",
    ageGroup: "explorer",
    readingTime: { az: "6 dəq", en: "6 min", ru: "6 мин" },
    badge: { az: "DÜNYA KLASSİKASI • FƏLSƏFİ", en: "WORLD CLASSIC • HEARTFELT", ru: "КЛАССИКА • МУДРАЯ СКАЗКА" },
    image: "assets/balaca-sahzade.svg",
    title: {
      az: "Balaca Şahzadə və Müdrik Tülkü",
      en: "The Little Prince and the Gentle Fox",
      ru: "Маленький принц и мудрый Лис"
    },
    summary: {
      az: "Ulduzlardan gəlmiş qızılsaçlı Balaca Şahzadənin narıncı tüklü Tülkü ilə unudulmaz dostluğu və ürəyin sirri: 'Ən əsas olan gözə görünmür'.",
      en: "The Little Prince learning from the gentle desert fox that real friendship is seen with the heart.",
      ru: "Мудрая сказка о дружбе Маленького принца и Лиса: «Зорко одно лишь сердце»."
    },
    contentHtml: {
      az: `
        <p class="lead font-medium text-lg text-primary">Balaca Şahzadə uzaq bir ulduzdan, balaca bir asteroiddən gəlmişdi. Onun boynunda küləkdə dalğalanan qızılı bir şərf vardı.</p>
        <p>O, alma ağacının altında oturmuş narıncı tüklü sevimli Tülkü ilə qarşılaşdı. Tülkü ona baxıb gülümsədi: <em>"Salam, balaca dost!"</em></p>
        <h4 class="font-headline text-xl font-bold mt-4 text-text-ink">1. Ən Gözəl Sirr</h4>
        <p>Tülkü Şahzadəyə dünyanın ən gözəl sirrini pıçıldadı: <em>"Ən əsas olan şeyi gözlə görmək olmur. İnsan yalnız təmiz ürəyi ilə düzgün görə bilər. Sən əziz bildiyin hər kəsə qarşı məsuliyyət daşıyırsan."</em></p>
      `,
      en: `
        <p class="lead font-medium text-lg text-primary">From a tiny star with three volcanoes and one beloved rose came the Little Prince.</p>
        <p>Meeting a gentle fox beneath an apple tree, he learned: <em>'It is only with the heart that one can see rightly; what is essential is invisible to the eye.'</em></p>
      `,
      ru: `
        <p class="lead font-medium text-lg text-primary">Маленький принц прилетел с далёкого астероида Б-612.</p>
        <p>Под яблоней он подружился с Лисом, который открыл ему золотую истину: <em>«Зорко одно лишь сердце. Самого главного глазами не увидишь».</em></p>
      `
    },
    moral: {
      az: "Dostluq və sevgi ürəklə duyulur. Əziz dostlarımıza hər zaman qayğı göstərməliyik.",
      en: "True friendship is felt with the heart, not just seen with the eyes.",
      ru: "Настоящую любовь и дружбу чувствуют сердцем."
    },
    quiz: {
      question: {
        az: "Tülkünün Balaca Şahzadəyə dediyi ən böyük sirr nə idi?",
        en: "What was the golden secret shared by the fox?",
        ru: "Какую тайну открыл Лис Маленькому принцу?"
      },
      options: {
        az: ["Ən əsas olan şey gözə görünmür, yalnız ürəklə görmək olar", "Bütün çiçəklər eynidir", "Yalnız ulduzlara baxmaq lazımdır"],
        en: ["What is essential is invisible to the eye; one sees rightly with the heart", "All flowers are the same", "Only look at stars"],
        ru: ["Самого главного глазами не увидишь, зорко одно лишь сердце", "Все цветы одинаковы", "Надо смотреть только на звёзды"]
      },
      correctIndex: 0
    }
  }
];

// ============================================================
// 4. EXPRESSIVE AZERBAIJANI VOICE STORYTELLER ENGINE
// ============================================================
class FairytaleVoiceNarrator {
  constructor() {
    this.synth = window.speechSynthesis;
    this.currentUtterance = null;
    this.isPlaying = false;
    this.isPaused = false;
    this.sentences = [];
    this.currentSentenceIndex = 0;
    this.rate = 0.88; // Perfect warm storytelling pace
    this.pitch = 1.06; // Friendly cheerful tone
  }

  getBestVoice(lang = 'az') {
    if (!this.synth) return null;
    const voices = this.synth.getVoices();
    if (voices.length === 0) return null;

    if (lang === 'ru') {
      return voices.find(v => v.lang.startsWith('ru')) || voices[0];
    }
    if (lang === 'en') {
      return voices.find(v => v.lang.startsWith('en')) || voices[0];
    }

    // For Azerbaijani:
    // 1. Look for native az-AZ
    let match = voices.find(v => v.lang.startsWith('az'));
    if (match) return match;

    // 2. Look for natural Turkish (tr-TR) voices (Tolga, Yelda, Dilara, Google Türkçe, Natural)
    match = voices.find(v => v.lang.startsWith('tr') && (
      v.name.includes('Yelda') || 
      v.name.includes('Tolga') || 
      v.name.includes('Dilara') || 
      v.name.includes('Google') || 
      v.name.includes('Natural') || 
      v.name.includes('Emel')
    ));
    if (match) return match;

    match = voices.find(v => v.lang.startsWith('tr'));
    if (match) return match;

    return voices[0];
  }

  playStory(title, summary, bodyHtml, lang = 'az', onHighlight = null, onEnd = null) {
    if (!this.synth) return false;
    this.stop();

    // Clean plain text & break into natural expressive sentences
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = bodyHtml;
    const bodyText = tempDiv.textContent || tempDiv.innerText || '';
    const fullText = `${title}. ${summary}. ${bodyText}`;

    // Split sentences cleanly by punctuation (. ! ?)
    this.sentences = fullText
      .split(/(?<=[.!?])\s+/)
      .map(s => s.trim())
      .filter(s => s.length > 2);

    this.currentSentenceIndex = 0;
    this.isPlaying = true;
    this.isPaused = false;
    this.onHighlightCallback = onHighlight;
    this.onEndCallback = onEnd;

    // Play chime first, then start speaking
    window.snApp.playMagicalChime(440, 0.2);
    setTimeout(() => {
      this.speakNextSentence(lang);
    }, 280);

    return true;
  }

  speakNextSentence(lang) {
    if (!this.isPlaying || this.currentSentenceIndex >= this.sentences.length) {
      this.stop();
      if (this.onEndCallback) this.onEndCallback();
      window.snApp.playMagicalChime(880, 0.35); // Celebration chime
      return;
    }

    const rawSentence = this.sentences[this.currentSentenceIndex];
    if (this.onHighlightCallback) {
      this.onHighlightCallback(this.currentSentenceIndex, this.sentences.length, rawSentence);
    }

    const spokenText = rawSentence.replace(/[\*\_\#]/g, '');
    this.currentUtterance = new SpeechSynthesisUtterance(spokenText);
    const bestVoice = this.getBestVoice(lang);
    if (bestVoice) {
      this.currentUtterance.voice = bestVoice;
      this.currentUtterance.lang = bestVoice.lang;
    } else {
      this.currentUtterance.lang = lang === 'ru' ? 'ru-RU' : (lang === 'en' ? 'en-US' : 'tr-TR');
    }

    // Dynamic Intonation: Dialogues, Questions, Exclamations
    let currentPitch = this.pitch;
    let currentRate = this.rate;

    if (rawSentence.includes('"') || rawSentence.includes('«') || rawSentence.includes('”') || rawSentence.includes('<em>')) {
      currentPitch = 1.14; // Playful character pitch
      currentRate = this.rate * 0.94; // Expressive character pace
    } else if (rawSentence.endsWith('?')) {
      currentPitch = 1.11; // Inquiring fairytale tone
    } else if (rawSentence.endsWith('!')) {
      currentPitch = 1.13; // Excited celebration tone
    }

    this.currentUtterance.rate = currentRate;
    this.currentUtterance.pitch = currentPitch;

    this.currentUtterance.onend = () => {
      this.currentSentenceIndex++;
      // Natural expressive storytelling pause (260ms) between sentences
      setTimeout(() => {
        if (this.isPlaying && !this.isPaused) {
          this.speakNextSentence(lang);
        }
      }, 260);
    };

    this.currentUtterance.onerror = () => {
      this.currentSentenceIndex++;
      this.speakNextSentence(lang);
    };

    this.synth.speak(this.currentUtterance);
  }

  pause() {
    if (this.isPlaying && !this.isPaused) {
      this.isPaused = true;
      if (this.synth) this.synth.pause();
    }
  }

  resume() {
    if (this.isPlaying && this.isPaused) {
      this.isPaused = false;
      if (this.synth) this.synth.resume();
    }
  }

  stop() {
    this.isPlaying = false;
    this.isPaused = false;
    if (this.synth) {
      this.synth.cancel();
    }
  }

  setSpeed(newRate) {
    this.rate = newRate;
  }
}

// ============================================================
// 5. WEB AUDIO API SOOTHING LULLABY & CHIMES
// ============================================================
class FairytaleAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.currentStep = 0;
    this.masterGain = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playChime(freq = 587.33, dur = 0.3) {
    try {
      this.initContext();
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.14, this.ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + dur);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + dur);
    } catch (e) {}
  }

  toggleLullaby() {
    if (this.isPlaying) {
      this.stopLullaby();
      return false;
    } else {
      this.startLullaby();
      return true;
    }
  }

  startLullaby() {
    this.initContext();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    this.stopLullaby();
    this.isPlaying = true;
    this.currentStep = 0;

    // Master volume with smooth ramp
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.24, this.ctx.currentTime + 0.8);
    this.masterGain.connect(this.ctx.destination);

    // Warm Lullaby Sequence: Chord Bass Pad + Celesta Bell Arpeggio
    const sequence = [
      { bass: 130.81, chord: [261.63, 329.63, 392.00], notes: [523.25, 659.25, 783.99], dur: 2.4 }, // C Major
      { bass: 110.00, chord: [220.00, 261.63, 329.63], notes: [440.00, 523.25, 659.25], dur: 2.4 }, // A Minor
      { bass: 87.31,  chord: [174.61, 220.00, 261.63], notes: [349.23, 440.00, 523.25], dur: 2.4 }, // F Major
      { bass: 98.00,  chord: [196.00, 246.94, 293.66], notes: [392.00, 493.88, 587.33], dur: 2.4 }, // G Major
      { bass: 130.81, chord: [261.63, 329.63, 392.00], notes: [659.25, 523.25, 392.00], dur: 2.6 }, // C Major cadence
      { bass: 110.00, chord: [220.00, 261.63, 329.63], notes: [523.25, 440.00, 329.63], dur: 2.4 }, // Am
      { bass: 87.31,  chord: [174.61, 261.63, 349.23], notes: [440.00, 523.25, 659.25], dur: 2.4 }, // F
      { bass: 98.00,  chord: [196.00, 293.66, 392.00], notes: [493.88, 392.00, 261.63], dur: 2.8 }  // G to C
    ];

    const playBar = () => {
      if (!this.isPlaying) return;
      const bar = sequence[this.currentStep % sequence.length];
      const now = this.ctx.currentTime;

      // 1. Soft Warm Bass Drone
      const bassOsc = this.ctx.createOscillator();
      const bassGain = this.ctx.createGain();
      bassOsc.type = 'triangle';
      bassOsc.frequency.setValueAtTime(bar.bass, now);
      bassGain.gain.setValueAtTime(0.001, now);
      bassGain.gain.exponentialRampToValueAtTime(0.08, now + 0.3);
      bassGain.gain.exponentialRampToValueAtTime(0.001, now + bar.dur);
      bassOsc.connect(bassGain);
      bassGain.connect(this.masterGain);
      bassOsc.start(now);
      bassOsc.stop(now + bar.dur);

      // 2. Soft Chord Pad
      bar.chord.forEach((freq, idx) => {
        const chordOsc = this.ctx.createOscillator();
        const chordGain = this.ctx.createGain();
        chordOsc.type = 'sine';
        chordOsc.frequency.setValueAtTime(freq, now);
        chordGain.gain.setValueAtTime(0.001, now);
        chordGain.gain.exponentialRampToValueAtTime(0.04 / (idx + 1), now + 0.4);
        chordGain.gain.exponentialRampToValueAtTime(0.001, now + bar.dur);
        chordOsc.connect(chordGain);
        chordGain.connect(this.masterGain);
        chordOsc.start(now);
        chordOsc.stop(now + bar.dur);
      });

      // 3. Arpeggiated Celesta / Music Box Notes
      const noteDelay = bar.dur / (bar.notes.length + 1);
      bar.notes.forEach((freq, i) => {
        const noteTime = now + (i * noteDelay);
        const osc = this.ctx.createOscillator();
        const bellGain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);

        bellGain.gain.setValueAtTime(0.001, noteTime);
        bellGain.gain.exponentialRampToValueAtTime(0.12, noteTime + 0.04);
        bellGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 1.6);

        osc.connect(bellGain);
        bellGain.connect(this.masterGain);
        osc.start(noteTime);
        osc.stop(noteTime + 1.7);
      });

      this.currentStep++;
      this.timer = setTimeout(playBar, bar.dur * 1000);
    };

    playBar();
  }

  stopLullaby() {
    this.isPlaying = false;
    if (this.timer) clearTimeout(this.timer);
    if (this.masterGain && this.ctx) {
      try {
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      } catch (e) {}
    }
  }
}

// ============================================================
// 5.5. INTERACTIVE MAIN FAIRYTALE RIDDLES DATASET
// ============================================================
const FAIRYTALE_RIDDLES = [
  {
    id: 'cirtdan',
    points: 10,
    correctIndex: 1,
    az: {
      question: '"Balacayam, boyum bir qarış, amma ağlım dağlar qədərdir. Divi xəlbirdə su daşımağa göndərən qəhrəman kimdir?"',
      options: ['Məlikməmməd', 'Cırtdan', 'Bəy Siçan'],
      hint: 'Bu qəhrəman ağlı və zirəkliyi ilə divi aldadıb yoldaşlarını xilas etmişdi.'
    },
    en: {
      question: '"I am tiny, only an inch tall, but my wisdom is vast as mountains. Who tricked the giant into carrying water with a sieve?"',
      options: ['Melikmammad', 'Jirtdan', 'Lord Mouse'],
      hint: 'With his wit and cleverness, this young hero outsmarted the giant to rescue his friends.'
    },
    ru: {
      question: '"Я совсем мал ростом, но ум мой выше гор. Какой герой заставил дива носить воду решетом?"',
      options: ['Меликмамед', 'Джыртдан', 'Господин Мышь'],
      hint: 'Этот находчивый малыш перехитрил великана и спас своих товарищей.'
    }
  },
  {
    id: 'melikmemmed',
    points: 10,
    correctIndex: 1,
    az: {
      question: '"Sehrli qızıl almaları qoruyan, qaranlıq dünyaya enib Zümrüd quşunun balalarını xilas edən cəsur igid kimdir?"',
      options: ['Göyçək Fatma', 'Məlikməmməd', 'Keçəl'],
      hint: 'O, ağ və qara qoçların sirrini açaraq əfsanəvi quşun qanadında işıqlı dünyaya qayıtmışdı.'
    },
    en: {
      question: '"Who is the brave hero who guarded the magical golden apples and rescued the Simurgh chicks in the underworld?"',
      options: ['Beautiful Fatma', 'Melikmammad', 'Kechel'],
      hint: 'He uncovered the mystery of the rams and returned to the land of light upon the legendary bird’s wings.'
    },
    ru: {
      question: '"Кто этот отважный витязь, спасший золотые яблоки и птенцов волшебной птицы Симург в подземном царстве?"',
      options: ['Прекрасная Фатма', 'Меликмамед', 'Кечал'],
      hint: 'Он разгадал тайну белого и чёрного баранов и вернулся на крыльях легендарной птицы.'
    }
  },
  {
    id: 'tiq-tiq',
    points: 10,
    correctIndex: 0,
    az: {
      question: '"Qırmızı çəkmələrini geyinib özünə layiq dost axtaran, amma lovğalığı ucbatından tənhalığa düşən sevimli böcək kimdir?"',
      options: ['Tıq-tıq xanım', 'Hiyləgər Tülkü', 'Sülh Göyərçini'],
      hint: 'O, yola çıxaraq qarşısına çıxanlardan \'Məni döyərsən, yoxsa söyərsən?\' deyə soruşurdu.'
    },
    en: {
      question: '"Who wore shining red boots to seek a faithful companion, but learned an unforgettable lesson about pride?"',
      options: ['Lady Tiq-tiq', 'Clever Fox', 'Gentle Dove'],
      hint: 'She strolled gracefully asking suitors how they would treat her when they were angry.'
    },
    ru: {
      question: '"Кто надел блестящие красные сапожки в поисках верного друга, но зазнался и остался в одиночестве?"',
      options: ['Тык-тык ханум', 'Хитрая Лисица', 'Белый Голубь'],
      hint: 'Эта нарядная жужелица строго расспрашивала женихов, как они будут к ней относиться.'
    }
  },
  {
    id: 'gerda',
    points: 10,
    correctIndex: 2,
    az: {
      question: '"Buz sarayına qaçırılmış dostu Qayı xilas etmək üçün qarlı şimal diyarlarına cəsarətlə yollanan qızcığaz kimdir?"',
      options: ['Zoluşka', 'Alisa', 'Gerda'],
      hint: 'Onun səmimi və isti ürəyinin sevgisi Qayın qəlbindəki buzu əritdi.'
    },
    en: {
      question: '"Which courageous little girl traveled across frozen northern wastes to rescue her friend Kai from the ice castle?"',
      options: ['Cinderella', 'Alice', 'Gerda'],
      hint: 'The pure, glowing warmth of her loyal heart melted the frozen mirror shard inside Kai.'
    },
    ru: {
      question: '"Какая отважная девочка преодолела снежные бури Севера, чтобы спасти своего друга Кая из ледяного чертога?"',
      options: ['Золушка', 'Алиса', 'Герда'],
      hint: 'Теплота её любящего сердца растопила ледяной осколок в груди Кая.'
    }
  },
  {
    id: 'aleddin',
    points: 10,
    correctIndex: 1,
    az: {
      question: '"Köhnə mis çırağı ovuşduraraq içindən çıxan qüdrətli Cindən kömək istəyən və sevgisi uğrunda mübarizə aparan gənc kimdir?"',
      options: ['Sindibad', 'Ələddin', 'Əli Baba'],
      hint: 'Sehrli uçan xalçası ilə səmalarda süzülən bu qəhrəman şahzadənin etibarını qazandı.'
    },
    en: {
      question: '"Who rubbed an ancient oil lamp, summoned a mighty Genie, and soared through starry skies on a flying carpet?"',
      options: ['Sinbad', 'Aladdin', 'Ali Baba'],
      hint: 'With kindness, bravery, and his loyal magic carpet, he won the princess’s true love.'
    },
    ru: {
      question: '"Кто потёр старинную масляную лампу, призвал могучего Джинна и парил в небесах на ковре-самолёте?"',
      options: ['Синдбад', 'Аладдин', 'Али-Баба'],
      hint: 'Своей добротой, честностью и волшебным ковром он победил коварство визиря.'
    }
  }
];

// ============================================================
// 6. CORE SEHRLİ NAĞILLAR CONTROLLER
// ============================================================
class SehrliNagillarApp {
  constructor() {
    this.currentLang = localStorage.getItem('sn_lang') || 'az';
    this.currentTheme = localStorage.getItem('sn_theme') || 'light';
    this.activeCategory = 'all';
    this.activeAge = 'all';
    this.favorites = JSON.parse(localStorage.getItem('sn_favorites') || '[]');
    this.audioEngine = new FairytaleAudioEngine();
    this.narrator = new FairytaleVoiceNarrator();
    this.mainQuizIndex = 0;
    this.mainQuizScore = parseInt(localStorage.getItem('sn_quiz_score') || '0', 10);
    this.mainQuizAnswering = false;
    this.shuffledRiddles = [];
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme, false);
    this.injectStoryModal();
    this.injectSearchModal();
    this.injectQuizResultModal();
    this.applyLanguage(this.currentLang, false);
    this.setupGlobalEventListeners();
    this.renderCatalog();
    this.setupSparkleClicks();
    this.setActiveNav('home');
    this.setupScrollSpy();
    this.initMainQuiz();
    this.initHeroMagicCanvas();
    this.renderHeroStory(this.getInitialDailyStoryIndex(), false);
  }

  // --- Active Nav Manager ---
  setActiveNav(navId) {
    if (this.activeNavId === navId) return;
    this.activeNavId = navId;

    const NAV_ACTIVE_THEMES = {
      'home': 'bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 text-white border-transparent shadow-sm shadow-orange-500/30 font-bold',
      'az': 'bg-gradient-to-r from-rose-600 to-red-600 text-white border-transparent shadow-sm shadow-rose-500/30 font-bold',
      'world': 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-transparent shadow-sm shadow-amber-500/30 font-bold',
      'meals': 'bg-gradient-to-r from-orange-500 to-amber-600 text-white border-transparent shadow-sm shadow-orange-500/30 font-bold',
      'nature': 'bg-gradient-to-r from-emerald-600 to-green-600 text-white border-transparent shadow-sm shadow-emerald-500/30 font-bold',
      'lullabies': 'bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-500 text-white border-transparent shadow-sm shadow-purple-500/30 font-bold',
      'quiz': 'bg-gradient-to-r from-amber-500 to-rose-500 text-white border-transparent shadow-sm shadow-amber-500/30 font-bold'
    };

    const desktopButtons = document.querySelectorAll('.sn-nav-btn');
    desktopButtons.forEach(btn => {
      const id = btn.getAttribute('data-nav');
      if (id === navId) {
        const theme = NAV_ACTIVE_THEMES[id] || NAV_ACTIVE_THEMES['home'];
        btn.className = `sn-nav-btn px-2.5 xl:px-3 py-1.5 rounded-xl font-bold text-xs xl:text-[13px] ${theme} transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0`;
      } else {
        btn.className = "sn-nav-btn px-2.5 xl:px-3 py-1.5 rounded-xl font-medium text-xs xl:text-[13px] bg-white dark:bg-surface-dark-secondary text-text-ink dark:text-text-ink-inverted hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 hover:text-white hover:border-transparent border border-border-parchment/70 dark:border-white/10 shadow-xs transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0";
      }
    });

    const mobileButtons = document.querySelectorAll('.sn-mobile-nav-btn');
    mobileButtons.forEach(btn => {
      const id = btn.getAttribute('data-nav');
      if (id === navId) {
        const theme = NAV_ACTIVE_THEMES[id] || NAV_ACTIVE_THEMES['home'];
        btn.className = `sn-mobile-nav-btn px-3 py-2 rounded-xl ${theme} cursor-pointer transition-all`;
      } else {
        btn.className = "sn-mobile-nav-btn px-3 py-2 rounded-xl bg-white text-text-ink hover:bg-gradient-to-r hover:from-orange-500 hover:to-rose-500 hover:text-white font-medium cursor-pointer border border-border-parchment/60 transition-all";
      }
    });
  }

  setupScrollSpy() {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 130;
      const tapmacaEl = document.getElementById('tapmaca');
      const laylalarEl = document.getElementById('laylalar');
      const mealsEl = document.getElementById('qehreman-yemekleri');
      const kataloqEl = document.getElementById('kataloq');

      if (tapmacaEl && scrollPos >= tapmacaEl.offsetTop) {
        this.setActiveNav('quiz');
      } else if (laylalarEl && scrollPos >= laylalarEl.offsetTop) {
        this.setActiveNav('lullabies');
      } else if (mealsEl && scrollPos >= mealsEl.offsetTop) {
        this.setActiveNav('meals');
      } else if (kataloqEl && scrollPos >= kataloqEl.offsetTop) {
        if (this.activeCategory === 'world') this.setActiveNav('world');
        else if (this.activeCategory === 'nature') this.setActiveNav('nature');
        else this.setActiveNav('az');
      } else {
        this.setActiveNav('home');
      }
    }, { passive: true });
  }

  goToHome(e) {
    this.setActiveNav('home');
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('nagillar.html') || window.location.pathname.endsWith('/') || window.location.pathname === '') {
      if (e) e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  playMagicalChime(freq, dur) {
    this.audioEngine.playChime(freq, dur);
  }

  // --- Magical Sparkle Effect on Click ---
  setupSparkleClicks() {
    window.addEventListener('click', (e) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'fixed pointer-events-none z-[120] text-sm animate-ping';
      sparkle.style.left = (e.clientX - 10) + 'px';
      sparkle.style.top = (e.clientY - 10) + 'px';
      sparkle.textContent = ['✨', '⭐', '🌟'][Math.floor(Math.random() * 3)];
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 700);
    });
  }

  // --- Theme Controller ---
  applyTheme(theme, showNotice = true) {
    this.currentTheme = theme;
    localStorage.setItem('sn_theme', theme);
    const html = document.documentElement;

    if (theme === 'dark') {
      html.classList.remove('light');
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }

    document.querySelectorAll('[id*="theme-icon"]').forEach(icon => {
      icon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
    });

    if (showNotice) {
      this.showToast(this.t(theme === 'dark' ? 'toast_theme_night' : 'toast_theme_day'));
    }
  }

  toggleTheme() {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme, true);
  }

  // --- Translation Helper ---
  t(key) {
    const dict = NAGILLAR_TRANSLATIONS[this.currentLang] || NAGILLAR_TRANSLATIONS['az'];
    return dict[key] || key;
  }

  applyLanguage(lang, showNotice = true) {
    if (!['az', 'en', 'ru'].includes(lang)) lang = 'az';
    this.currentLang = lang;
    localStorage.setItem('sn_lang', lang);

    // Update switcher buttons
    document.querySelectorAll('.sn-lang-btn').forEach(btn => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang === lang) {
        btn.className = 'sn-lang-btn px-2.5 py-0.5 rounded-lg transition-all bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold shadow-xs';
      } else {
        btn.className = 'sn-lang-btn px-2.5 py-0.5 rounded-lg transition-all text-on-surface-variant hover:text-orange-600';
      }
    });

    // Translate all [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (val) {
        if (val.includes('<br>') || val.includes('<span') || val.includes('<strong>')) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Translate placeholders
    document.querySelectorAll('input[type="text"], input[type="search"]').forEach(inp => {
      inp.placeholder = this.t('search_placeholder');
    });

    // Re-render open story if visible
    const modal = document.getElementById('sn-story-modal');
    if (modal && !modal.classList.contains('hidden') && this.currentStoryId) {
      this.openStory(this.currentStoryId);
    }

    this.renderCatalog();
    this.renderMainQuiz();
    this.updateDailyHeroStory();

    if (showNotice) {
      this.showToast(this.t('toast_lang'));
    }
  }

  // --- Toast Notification ---
  showToast(message) {
    let toast = document.getElementById('sn-global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'sn-global-toast';
      toast.className = 'fixed bottom-6 right-6 z-[100] bg-surface-dark-secondary text-text-ink-inverted px-4 py-3 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3 text-sm hidden magic-float';
      toast.innerHTML = `
        <span class="material-symbols-outlined text-interactive-amber text-[22px]">auto_awesome</span>
        <span id="sn-toast-text">${message}</span>
      `;
      document.body.appendChild(toast);
    }
    const textEl = document.getElementById('sn-toast-text');
    if (textEl) textEl.textContent = message;
    toast.classList.remove('hidden');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, 3200);
  }

  // --- Story Reader Modal ---
  injectStoryModal() {
    if (document.getElementById('sn-story-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'sn-story-modal';
    modal.className = 'fixed inset-0 z-[95] hidden modal-backdrop flex items-center justify-center p-3 sm:p-6 overflow-y-auto';
    modal.innerHTML = `
      <div id="sn-story-box" class="story-modal-box bg-surface-cream text-text-ink w-full max-w-4xl rounded-3xl shadow-2xl border border-border-parchment overflow-hidden my-auto max-h-[94vh] flex flex-col transition-all">
        
        <!-- Header Image & Controls -->
        <div class="relative h-56 sm:h-72 w-full bg-surface-dark shrink-0 overflow-hidden">
          <img id="sn-story-img" class="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" src="" alt="Story Banner"/>
          <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/40 to-transparent"></div>
          
          <button id="sn-story-close-btn" class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-surface-dark/80 hover:bg-surface-dark text-white flex items-center justify-center backdrop-blur-md transition-all hover:rotate-90" title="Bağla">
            <span class="material-symbols-outlined text-[22px]">close</span>
          </button>

          <div class="absolute bottom-4 left-4 sm:left-6 right-4 z-10 flex flex-wrap items-center justify-between gap-2">
            <span id="sn-story-badge" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-rose-600 text-white text-xs font-bold uppercase tracking-wider shadow">
              NAĞIL
            </span>
            <div class="flex items-center gap-3 text-white/95 text-xs font-semibold">
              <span class="flex items-center gap-1 bg-surface-dark/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                <span class="material-symbols-outlined text-[16px] text-amber-400">schedule</span>
                <span id="sn-story-reading-time">5 dəq</span>
              </span>
              <button id="sn-bedtime-toggle-btn" class="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1 transition-colors">
                <span class="material-symbols-outlined text-[16px]">bedtime</span>
                <span id="sn-bedtime-label">Yuxu İşığı</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Audio Storyteller Bar -->
        <div class="p-3 bg-surface-ivory border-b border-border-parchment/60 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-2">
            <button id="sn-narrator-play-btn" class="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl transition-all shadow flex items-center gap-1.5 cursor-pointer">
              <span id="sn-narrator-icon" class="material-symbols-outlined text-[18px]">play_circle</span>
              <span id="sn-narrator-text">Səsli Dinlə (İntonasiyalı)</span>
            </button>
            <button id="sn-narrator-stop-btn" class="px-3 py-2 bg-surface-cream hover:bg-surface-container text-text-ink font-semibold rounded-xl border border-border-parchment transition-all flex items-center gap-1 cursor-pointer">
              <span class="material-symbols-outlined text-[16px]">stop</span>
              <span>Dayandır</span>
            </button>
          </div>

          <!-- Speed & Progress -->
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-1 bg-surface-cream px-2 py-1 rounded-lg border border-border-parchment/60">
              <span class="text-on-surface-variant font-medium">Sürət:</span>
              <button id="sn-speed-toggle-btn" class="font-bold text-primary hover:underline">0.9x (Uşaqlar üçün)</button>
            </div>
            <div id="sn-audio-progress-badge" class="px-2.5 py-1 rounded-lg bg-primary/10 text-primary font-bold hidden">
              0%
            </div>
          </div>
        </div>

        <!-- Story Content -->
        <div class="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <h2 id="sn-story-title" class="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-text-ink leading-tight"></h2>
          
          <p id="sn-story-summary" class="text-base sm:text-lg text-on-surface-variant font-medium leading-relaxed italic border-l-4 border-interactive-amber pl-4 py-1.5 bg-surface-ivory/60 rounded-r-xl"></p>

          <div id="sn-story-body" class="text-sm sm:text-base text-on-surface leading-relaxed space-y-4 font-body"></div>

          <!-- Moral of the Story Callout -->
          <div class="p-5 rounded-2xl bg-surface-ivory border-2 border-interactive-amber/40 shadow-sm space-y-2 mt-8">
            <div class="flex items-center gap-2 text-primary font-headline font-bold text-base sm:text-lg">
              <span class="material-symbols-outlined text-interactive-amber text-[24px]">lightbulb</span>
              <span id="sn-moral-title">💡 Nağıldan Çıxan İbrət Dərsi</span>
            </div>
            <p id="sn-story-moral" class="text-sm sm:text-base text-text-ink leading-relaxed"></p>
          </div>

          <!-- Interactive Riddle / Quiz -->
          <div id="sn-quiz-box" class="p-5 rounded-2xl bg-surface-cream border border-border-parchment space-y-3">
            <div class="flex items-center gap-2 text-primary font-headline font-bold text-base">
              <span class="material-symbols-outlined text-[20px] text-interactive-amber">help</span>
              <span id="sn-quiz-title">🌟 Sehrli Sual: Sən Olsaydın Nə Edərdin?</span>
            </div>
            <p id="sn-quiz-question" class="text-sm text-text-ink font-medium"></p>
            <div id="sn-quiz-options" class="grid grid-cols-1 gap-2 pt-1"></div>
            <div id="sn-quiz-feedback" class="text-xs font-bold hidden pt-1"></div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="p-4 sm:p-5 bg-surface-ivory border-t border-border-parchment flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div class="flex items-center gap-2">
            <button id="sn-fav-btn" class="px-4 py-2 rounded-xl bg-surface-cream hover:bg-surface-container border border-border-parchment text-text-ink text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm">
              <span id="sn-fav-icon" class="material-symbols-outlined text-[18px] text-interactive-amber">bookmark_border</span>
              <span>Sevimlilərə Əlavə Et</span>
            </button>
          </div>
          <button onclick="document.getElementById('sn-story-modal').classList.add('hidden'); window.snApp.narrator.stop();" class="px-6 py-2 bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-600 hover:to-rose-700 text-white font-bold text-sm rounded-xl transition-all shadow">
            Bağla
          </button>
        </div>

      </div>
    </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('sn-story-close-btn').addEventListener('click', () => {
      modal.classList.add('hidden');
      this.narrator.stop();
    });

    // Bedtime dimmer toggle inside modal
    document.getElementById('sn-bedtime-toggle-btn').addEventListener('click', () => {
      const box = document.getElementById('sn-story-box');
      box.classList.toggle('bedtime-mode');
      const isBedtime = box.classList.contains('bedtime-mode');
      document.getElementById('sn-bedtime-label').textContent = isBedtime ? this.t('bedtime_mode_on') : this.t('bedtime_mode_off');
    });

    // Speech narration start / pause
    const playBtn = document.getElementById('sn-narrator-play-btn');
    const stopBtn = document.getElementById('sn-narrator-stop-btn');
    const playIcon = document.getElementById('sn-narrator-icon');
    const playText = document.getElementById('sn-narrator-text');
    const progBadge = document.getElementById('sn-audio-progress-badge');

    playBtn.addEventListener('click', () => {
      if (!this.narrator.isPlaying) {
        const title = document.getElementById('sn-story-title').textContent;
        const summary = document.getElementById('sn-story-summary').textContent;
        const body = document.getElementById('sn-story-body').innerHTML;
        
        playIcon.textContent = 'pause_circle';
        playText.textContent = this.t('pause_audio');
        progBadge.classList.remove('hidden');

        this.narrator.playStory(
          title,
          summary,
          body,
          this.currentLang,
          (idx, total, sentence) => {
            const pct = Math.round(((idx + 1) / total) * 100);
            progBadge.textContent = `${pct}%`;
          },
          () => {
            playIcon.textContent = 'play_circle';
            playText.textContent = this.t('listen_story');
            progBadge.classList.add('hidden');
            this.showToast("Nağıl başa çatdı. Afərin sənə! 🌟");
          }
        );
        this.showToast("İntonasiyalı səsli nağıl başladı... Qulaq asaq!");
      } else if (this.narrator.isPaused) {
        this.narrator.resume();
        playIcon.textContent = 'pause_circle';
        playText.textContent = this.t('pause_audio');
        this.showToast("Davam edir...");
      } else {
        this.narrator.pause();
        playIcon.textContent = 'play_circle';
        playText.textContent = this.t('resume_audio');
        this.showToast("Fasilə verildi");
      }
    });

    stopBtn.addEventListener('click', () => {
      this.narrator.stop();
      playIcon.textContent = 'play_circle';
      playText.textContent = this.t('listen_story');
      progBadge.classList.add('hidden');
      this.showToast("Səsli oxuma dayandırıldı");
    });

    // Speed toggle
    const speedBtn = document.getElementById('sn-speed-toggle-btn');
    speedBtn.addEventListener('click', () => {
      if (this.narrator.rate === 0.88) {
        this.narrator.setSpeed(1.0);
        speedBtn.textContent = "1.0x (Normal)";
      } else {
        this.narrator.setSpeed(0.88);
        speedBtn.textContent = "0.9x (Uşaqlar üçün)";
      }
      this.showToast(`Oxuma sürəti: ${speedBtn.textContent}`);
    });

    // Favorite button
    document.getElementById('sn-fav-btn').addEventListener('click', () => {
      if (!this.currentStoryId) return;
      const idx = this.favorites.indexOf(this.currentStoryId);
      if (idx === -1) {
        this.favorites.push(this.currentStoryId);
        this.showToast(this.t('bookmark_added'));
      } else {
        this.favorites.splice(idx, 1);
        this.showToast(this.t('bookmark_removed'));
      }
      localStorage.setItem('sn_favorites', JSON.stringify(this.favorites));
      this.updateFavoriteButton();
    });
  }

  updateFavoriteButton() {
    const isFav = this.favorites.includes(this.currentStoryId);
    const icon = document.getElementById('sn-fav-icon');
    if (icon) {
      icon.textContent = isFav ? 'bookmark' : 'bookmark_border';
    }
  }

  openStory(storyId) {
    this.currentStoryId = storyId;
    const story = NAGILLAR_DB.find(s => s.id === storyId) || NAGILLAR_DB[0];
    const modal = document.getElementById('sn-story-modal');
    if (!modal) return;

    const lang = this.currentLang;
    document.getElementById('sn-story-img').src = story.image;
    document.getElementById('sn-story-badge').textContent = (story.badge && story.badge[lang]) || "NAĞIL";
    document.getElementById('sn-story-reading-time').textContent = (story.readingTime && story.readingTime[lang]) || "5 dəq";
    document.getElementById('sn-story-title').textContent = (story.title && story.title[lang]) || story.title.az;
    document.getElementById('sn-story-summary').textContent = (story.summary && story.summary[lang]) || story.summary.az;
    document.getElementById('sn-story-body').innerHTML = (story.contentHtml && story.contentHtml[lang]) || story.contentHtml.az;
    document.getElementById('sn-moral-title').textContent = this.t('moral_title');
    document.getElementById('sn-story-moral').textContent = (story.moral && story.moral[lang]) || story.moral.az;
    document.getElementById('sn-quiz-title').textContent = this.t('quiz_title');
    document.getElementById('sn-narrator-text').textContent = this.t('listen_story');
    document.getElementById('sn-bedtime-label').textContent = "Yuxu İşığı";

    // Quiz render
    const qBox = document.getElementById('sn-quiz-box');
    const qText = document.getElementById('sn-quiz-question');
    const qOpts = document.getElementById('sn-quiz-options');
    const qFeed = document.getElementById('sn-quiz-feedback');
    qFeed.classList.add('hidden');

    if (story.quiz) {
      qBox.classList.remove('hidden');
      qText.textContent = (story.quiz.question && story.quiz.question[lang]) || story.quiz.question.az;
      const options = (story.quiz.options && story.quiz.options[lang]) || story.quiz.options.az;
      qOpts.innerHTML = options.map((opt, i) => `
        <button onclick="window.snApp.answerQuiz(${i}, ${story.quiz.correctIndex})" class="w-full text-left p-3.5 rounded-xl bg-surface-ivory hover:bg-surface-container border border-border-parchment/70 text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer">
          <span>${opt}</span>
          <span class="material-symbols-outlined text-[18px] text-primary opacity-60">check_circle_outline</span>
        </button>
      `).join('');
    } else {
      qBox.classList.add('hidden');
    }

    this.updateFavoriteButton();
    modal.classList.remove('hidden');
    this.playMagicalChime(587.33, 0.25);
  }

  answerQuiz(selected, correct) {
    const feedback = document.getElementById('sn-quiz-feedback');
    if (!feedback) return;
    feedback.classList.remove('hidden');
    if (selected === correct) {
      feedback.textContent = "Afərin! Tamamilə doğru cavab verdin! 🌟";
      feedback.className = "text-xs sm:text-sm font-bold text-green-600 dark:text-green-400 pt-1 flex items-center gap-1";
      this.playMagicalChime(880, 0.3);
      this.showToast("Düzgün cavab! Sən əsl nağıl qəhrəmanısan! 🏆");
    } else {
      feedback.textContent = "Yenidən sına! Nağılı diqqətlə oxusan, düzgün yolu tapacaqsan. ✨";
      feedback.className = "text-xs sm:text-sm font-bold text-interactive-amber pt-1 flex items-center gap-1";
      this.playMagicalChime(330, 0.2);
    }
  }

  // ============================================================
  // INTERACTIVE MAIN FAIRYTALE RIDDLE SYSTEM (#tapmaca)
  // ============================================================
  prepareShuffledRiddles() {
    const list = FAIRYTALE_RIDDLES.map(r => {
      const origCount = r.az.options.length;
      const indices = Array.from({ length: origCount }, (_, i) => i);
      // Fisher-Yates shuffle for options
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      const newCorrectIndex = indices.indexOf(r.correctIndex);
      const mapOptions = (opts) => indices.map(idx => opts[idx]);

      return {
        id: r.id,
        points: r.points,
        correctIndex: newCorrectIndex,
        az: {
          question: r.az.question,
          options: mapOptions(r.az.options),
          hint: r.az.hint
        },
        en: {
          question: r.en.question,
          options: mapOptions(r.en.options),
          hint: r.en.hint
        },
        ru: {
          question: r.ru.question,
          options: mapOptions(r.ru.options),
          hint: r.ru.hint
        }
      };
    });

    // Fisher-Yates shuffle for question sequence
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }

    this.shuffledRiddles = list;
  }

  initMainQuiz() {
    this.prepareShuffledRiddles();
    this.updateMainQuizScoreDisplay(false);
    this.renderMainQuiz();
  }

  updateMainQuizScoreDisplay(animate = false) {
    const scoreValEl = document.getElementById('sn-main-quiz-score-val');
    const scoreBadge = document.getElementById('sn-main-quiz-score-badge');
    if (!scoreValEl) return;

    const lang = this.currentLang || 'az';
    const unitText = lang === 'az' ? 'Xal' : lang === 'ru' ? 'Очков' : 'Pts';
    scoreValEl.textContent = `+${this.mainQuizScore} ${unitText}`;

    if (animate && scoreBadge) {
      scoreBadge.classList.remove('animate-pop', 'ring-2', 'ring-amber-400');
      void scoreBadge.offsetWidth;
      scoreBadge.classList.add('animate-pop', 'ring-2', 'ring-amber-400');
      setTimeout(() => {
        scoreBadge.classList.remove('animate-pop', 'ring-2', 'ring-amber-400');
      }, 600);
    }
  }

  renderMainQuiz() {
    const cardEl = document.getElementById('sn-main-quiz-card');
    if (!cardEl) return;

    if (!this.shuffledRiddles || !this.shuffledRiddles.length) {
      this.prepareShuffledRiddles();
    }

    if (this.mainQuizIndex >= this.shuffledRiddles.length) {
      this.renderMainQuizFinished();
      return;
    }

    const riddle = this.shuffledRiddles[this.mainQuizIndex];
    if (!riddle) return;

    const lang = this.currentLang || 'az';
    const riddleData = riddle[lang] || riddle.az;

    // Update riddle number badge
    const badgeEl = document.getElementById('sn-main-quiz-badge');
    if (badgeEl) {
      const numStr = String(this.mainQuizIndex + 1).padStart(2, '0');
      const prefix = lang === 'az' ? 'Tapmaca №' : lang === 'ru' ? 'Загадка №' : 'Riddle №';
      badgeEl.textContent = `${prefix} ${numStr}`;
    }

    // Refresh score display
    this.updateMainQuizScoreDisplay(false);

    // Update question quote
    const qEl = document.getElementById('sn-main-quiz-question');
    if (qEl) {
      qEl.textContent = riddleData.question;
    }

    // Update hint
    const hintEl = document.getElementById('sn-main-quiz-hint-text');
    if (hintEl) {
      const hintLabel = lang === 'az' ? 'İpucu:' : lang === 'ru' ? 'Подсказка:' : 'Hint:';
      hintEl.innerHTML = `<strong class="text-orange-700 dark:text-orange-400">${hintLabel}</strong> ${riddleData.hint}`;
    }

    // Update options buttons symmetrically
    const optsGrid = document.getElementById('sn-main-quiz-options');
    if (optsGrid) {
      const letters = ['A', 'B', 'C', 'D'];
      optsGrid.innerHTML = riddleData.options.map((opt, i) => `
        <button id="sn-quiz-opt-${i}" onclick="window.snApp.handleMainQuizAnswer(${i})"
          class="sn-quiz-opt-btn group p-4 sm:p-5 rounded-2xl bg-surface-cream/50 dark:bg-surface-dark/50 hover:bg-orange-50/80 dark:hover:bg-orange-950/40 border border-border-parchment/80 dark:border-white/10 hover:border-orange-400 dark:hover:border-orange-500 shadow-xs hover:shadow-lg hover:shadow-orange-500/10 transform transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 text-center sm:text-left focus:outline-none focus:ring-2 focus:ring-orange-400">
          <span class="sn-quiz-opt-letter w-8 h-8 rounded-xl bg-white dark:bg-surface-dark-secondary group-hover:bg-orange-500 group-hover:text-white border border-border-parchment/80 dark:border-white/10 font-bold text-xs text-text-ink dark:text-text-ink-inverted flex items-center justify-center shrink-0 transition-all duration-300 shadow-2xs group-hover:scale-105">${letters[i] || (i + 1)}</span>
          <span class="sn-quiz-opt-label font-headline font-semibold text-sm sm:text-base text-text-ink dark:text-text-ink-inverted group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">${opt}</span>
        </button>
      `).join('');
    }
  }

  handleMainQuizAnswer(selectedIndex) {
    if (this.mainQuizAnswering) return;

    if (!this.shuffledRiddles || !this.shuffledRiddles.length) {
      this.prepareShuffledRiddles();
    }

    const riddle = this.shuffledRiddles[this.mainQuizIndex];
    if (!riddle) return;

    this.mainQuizAnswering = true;
    const lang = this.currentLang || 'az';
    const isCorrect = (selectedIndex === riddle.correctIndex);
    const selectedBtn = document.getElementById(`sn-quiz-opt-${selectedIndex}`);

    // Temporarily disable buttons
    const allBtns = document.querySelectorAll('.sn-quiz-opt-btn');
    allBtns.forEach(btn => btn.setAttribute('disabled', 'true'));

    if (isCorrect) {
      // 1. Success visual feedback (vibrant green)
      if (selectedBtn) {
        selectedBtn.classList.remove('bg-surface-cream/50', 'dark:bg-surface-dark/50', 'hover:-translate-y-1');
        selectedBtn.classList.add('bg-emerald-500', 'border-emerald-500', 'text-white', 'shadow-lg', 'shadow-emerald-500/30', 'scale-[1.02]');
        const letter = selectedBtn.querySelector('.sn-quiz-opt-letter');
        if (letter) {
          letter.classList.add('bg-white', 'text-emerald-700', 'border-white');
        }
        const label = selectedBtn.querySelector('.sn-quiz-opt-label');
        if (label) {
          label.classList.add('text-white');
        }
      }

      // 2. Celebration chime
      this.playMagicalChime(880, 0.35);

      // 3. Dynamic score update
      const pts = riddle.points || 10;
      this.mainQuizScore += pts;
      localStorage.setItem('sn_quiz_score', this.mainQuizScore);
      this.updateMainQuizScoreDisplay(true);

      // 4. Toast notification
      const toastSuccess = lang === 'az'
        ? `Möhtəşəm! Düzgün cavab! 🎉 +${pts} Xal qazandın!`
        : lang === 'ru'
        ? `Великолепно! Правильный ответ! 🎉 +${pts} очков!`
        : `Awesome! Correct answer! 🎉 +${pts} Points earned!`;
      this.showToast(toastSuccess);

      // 5. Advance to next riddle or show victory modal
      setTimeout(() => {
        this.mainQuizIndex++;
        this.mainQuizAnswering = false;

        if (this.mainQuizIndex >= this.shuffledRiddles.length) {
          this.renderMainQuizFinished();
          this.openQuizResultModal(true);
          return;
        }

        const cardEl = document.getElementById('sn-main-quiz-card');
        if (cardEl) {
          cardEl.classList.add('opacity-40', 'scale-[0.99]');
          setTimeout(() => {
            this.renderMainQuiz();
            cardEl.classList.remove('opacity-40', 'scale-[0.99]');
          }, 180);
        } else {
          this.renderMainQuiz();
        }
      }, 950);

    } else {
      // Səhv cavab feedback (red + shake)
      if (selectedBtn) {
        selectedBtn.classList.remove('bg-surface-cream/50', 'dark:bg-surface-dark/50', 'hover:-translate-y-1');
        selectedBtn.classList.add('bg-rose-500', 'border-rose-500', 'text-white', 'shadow-lg', 'shadow-rose-500/30', 'animate-shake');
        const letter = selectedBtn.querySelector('.sn-quiz-opt-letter');
        if (letter) {
          letter.classList.add('bg-white', 'text-rose-700', 'border-white');
        }
        const label = selectedBtn.querySelector('.sn-quiz-opt-label');
        if (label) {
          label.classList.add('text-white');
        }
      }

      // Soft low chime
      this.playMagicalChime(300, 0.25);

      const toastFail = lang === 'az'
        ? 'Təəssüf, bu cavab düzgün deyil! Yenidən sına 😊'
        : lang === 'ru'
        ? 'Увы, неверно! Попробуй ещё раз 😊'
        : 'Oops, that’s not right! Try again 😊';
      this.showToast(toastFail);

      // Open result modal after short delay (~650ms)
      setTimeout(() => {
        if (selectedBtn) {
          selectedBtn.classList.remove('bg-rose-500', 'border-rose-500', 'text-white', 'shadow-lg', 'shadow-rose-500/30', 'animate-shake');
          selectedBtn.classList.add('bg-surface-cream/50', 'dark:bg-surface-dark/50');
          const letter = selectedBtn.querySelector('.sn-quiz-opt-letter');
          if (letter) {
            letter.classList.remove('bg-white', 'text-rose-700', 'border-white');
          }
          const label = selectedBtn.querySelector('.sn-quiz-opt-label');
          if (label) {
            label.classList.remove('text-white');
          }
        }
        allBtns.forEach(btn => btn.removeAttribute('disabled'));
        this.mainQuizAnswering = false;

        this.openQuizResultModal(false);
      }, 650);
    }
  }

  renderMainQuizFinished() {
    const cardEl = document.getElementById('sn-main-quiz-card');
    if (!cardEl) return;

    const lang = this.currentLang || 'az';
    const congratsTitle = lang === 'az' ? 'Təbriklər, Balaca Qəhrəman!' : lang === 'ru' ? 'Поздравляем, юный герой!' : 'Congratulations, Little Hero!';
    const congratsDesc = lang === 'az'
      ? `Sən bütün tapmacaları uğurla tapdın və cəmi ${this.mainQuizScore} xal topladın! Sən əsl nağıl bilicisisən.`
      : lang === 'ru'
      ? `Вы успешно отгадали все загадки и набрали ${this.mainQuizScore} очков! Вы настоящий знаток сказок.`
      : `You successfully solved all riddles and scored ${this.mainQuizScore} points! You are a true fairytale master.`;
    const btnPlayAgain = lang === 'az' ? 'Yenidən Başla' : lang === 'ru' ? 'Играть снова' : 'Play Again';

    cardEl.innerHTML = `
      <div class="py-8 text-center space-y-5 animate-fadeIn">
        <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/30 text-4xl">
          🏆
        </div>
        <div class="space-y-2">
          <h3 class="font-headline text-2xl sm:text-3xl font-bold text-text-ink dark:text-text-ink-inverted">${congratsTitle}</h3>
          <p class="text-sm sm:text-base text-on-surface-variant max-w-md mx-auto leading-relaxed">${congratsDesc}</p>
        </div>
        <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500/10 border border-amber-300 text-amber-700 dark:text-amber-300 font-bold text-lg">
          <span>🪙</span>
          <span>${this.mainQuizScore} ${lang === 'az' ? 'Xal' : lang === 'ru' ? 'Очков' : 'Pts'}</span>
        </div>
        <div class="pt-3">
          <button onclick="window.snApp.openQuizResultModal(true)"
            class="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all hover:scale-105 cursor-pointer">
            🔄 ${btnPlayAgain}
          </button>
        </div>
      </div>
    `;
  }

  resetMainQuiz(resetScore = false) {
    const lang = this.currentLang || 'az';

    if (resetScore) {
      this.mainQuizScore = 0;
      localStorage.setItem('sn_quiz_score', '0');
      this.updateMainQuizScoreDisplay(true);
      const msg = lang === 'az' ? 'Xallar sıfırlandı və yeni oyun başladı! 🔄' : lang === 'ru' ? 'Очки сброшены, игра началась заново! 🔄' : 'Score reset and new game started! 🔄';
      this.showToast(msg);
    }

    this.mainQuizIndex = 0;
    this.mainQuizAnswering = false;
    this.prepareShuffledRiddles();

    const cardEl = document.getElementById('sn-main-quiz-card');
    if (!cardEl) return;

    const resetBtnText = lang === 'az' ? 'Sıfırla' : lang === 'ru' ? 'Сбросить' : 'Reset';

    cardEl.innerHTML = `
      <div class="flex items-center justify-between pb-4 border-b border-border-parchment/60 dark:border-white/10">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-orange-50 dark:bg-orange-950/50 border border-orange-200/70 dark:border-orange-800/40">
          <span class="material-symbols-outlined text-[18px] text-amber-500">help</span>
          <span id="sn-main-quiz-badge" class="text-xs font-bold text-orange-800 dark:text-orange-300 uppercase tracking-wider">Tapmaca № 01</span>
        </div>
        <div class="flex items-center gap-2">
          <div id="sn-main-quiz-score-badge" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-yellow-500/15 to-orange-500/15 border border-amber-300/80 dark:border-amber-600/40 text-amber-700 dark:text-amber-300 text-xs font-bold shadow-xs transition-all duration-300">
            <span class="text-sm">🪙</span>
            <span id="sn-main-quiz-score-val">+${this.mainQuizScore} ${lang === 'az' ? 'Xal' : lang === 'ru' ? 'Очков' : 'Pts'}</span>
          </div>
          <button onclick="window.snApp.resetMainQuiz(true)"
            title="Xalları sıfırla və yenidən başla"
            aria-label="Sıfırla"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-cream/90 dark:bg-surface-dark-secondary hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 border border-border-parchment/80 dark:border-white/10 hover:border-transparent text-on-surface-variant text-xs font-semibold shadow-2xs hover:shadow-md hover:shadow-orange-500/20 transition-all duration-200 cursor-pointer group active:scale-95">
            <span class="text-xs group-hover:rotate-180 transition-transform duration-500 select-none">🔄</span>
            <span data-i18n="quiz_reset_btn" class="font-medium">${resetBtnText}</span>
          </button>
        </div>
      </div>

      <div class="py-1 sm:py-2 px-2 sm:px-4 text-center">
        <p id="sn-main-quiz-question" class="font-headline text-lg sm:text-2xl font-bold text-text-ink dark:text-text-ink-inverted leading-relaxed sm:leading-loose max-w-xl mx-auto min-h-[3.5rem] flex items-center justify-center transition-all duration-300">
        </p>
      </div>

      <div id="sn-main-quiz-options" class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1 transition-all duration-300">
      </div>

      <div id="sn-main-quiz-hint-box" class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-300/60 dark:border-amber-600/30 text-center text-xs sm:text-[13px] text-on-surface-variant flex items-center justify-center gap-2 shadow-xs transition-all duration-300 hover:shadow-md hover:shadow-amber-500/10">
        <span class="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 text-xs shadow-xs animate-bounce" style="animation-duration: 2.5s;">💡</span>
        <span id="sn-main-quiz-hint-text" class="font-medium text-text-ink dark:text-text-ink-inverted">
        </span>
      </div>
    `;

    this.renderMainQuiz();
    this.playMagicalChime(660, 0.25);
  }

  // --- Section 7.5: Result Pop-up (Modal) System for Fairytale Quiz ---
  injectQuizResultModal() {
    if (document.getElementById('sn-quiz-result-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'sn-quiz-result-modal';
    modal.className = 'fixed inset-0 z-[120] hidden modal-backdrop flex items-center justify-center p-4 overflow-y-auto bg-black/60 backdrop-blur-sm transition-opacity duration-300';
    modal.innerHTML = `
      <div class="relative w-full max-w-md bg-[#FFFDF9] dark:bg-surface-dark-secondary rounded-[32px] p-6 sm:p-8 border border-orange-200/90 dark:border-white/10 shadow-2xl shadow-orange-950/25 text-center space-y-5 transform transition-all duration-300 scale-100 animate-fadeIn my-auto">
        <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-44 h-44 bg-gradient-to-br from-amber-400/20 via-orange-500/20 to-rose-500/20 rounded-full blur-2xl pointer-events-none"></div>
        <div id="sn-quiz-modal-icon-wrap" class="relative z-10 w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/30 text-4xl">🌟</div>
        <div class="relative z-10 space-y-2">
          <h3 id="sn-quiz-modal-title" class="font-headline text-2xl sm:text-[26px] font-bold text-text-ink dark:text-text-ink-inverted leading-snug">Əla cəhd idi, balaca qəhrəman!</h3>
          <p id="sn-quiz-modal-desc" class="text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-sm mx-auto px-1">Biliklərini daha da artırmaq üçün yenidən sına!</p>
        </div>
        <div class="relative z-10 py-1">
          <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-300/80 dark:border-amber-600/40 text-amber-800 dark:text-amber-300 font-bold text-base sm:text-lg shadow-xs">
            <span class="text-xl">🪙</span>
            <span><span id="sn-quiz-modal-score-label">Toplanan Xal:</span> <span id="sn-quiz-modal-score-val" class="text-orange-600 dark:text-orange-400">0 Xal</span></span>
          </div>
        </div>
        <div class="relative z-10 pt-1">
          <button id="sn-quiz-modal-ok-btn" onclick="window.snApp.closeQuizResultModalAndRestart()" class="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-[20px]">check_circle</span>
            <span id="sn-quiz-modal-ok-text">OK</span>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  openQuizResultModal(isSuccess) {
    let modal = document.getElementById('sn-quiz-result-modal');
    if (!modal) {
      this.injectQuizResultModal();
      modal = document.getElementById('sn-quiz-result-modal');
    }
    if (!modal) return;

    const lang = this.currentLang || 'az';
    const scoreVal = this.mainQuizScore;
    const unitText = lang === 'az' ? 'Xal' : lang === 'ru' ? 'Очков' : 'Pts';

    const iconWrap = document.getElementById('sn-quiz-modal-icon-wrap');
    const titleEl = document.getElementById('sn-quiz-modal-title');
    const descEl = document.getElementById('sn-quiz-modal-desc');
    const scoreValEl = document.getElementById('sn-quiz-modal-score-val');
    const scoreLabelEl = document.getElementById('sn-quiz-modal-score-label');
    const okTextEl = document.getElementById('sn-quiz-modal-ok-text');

    if (scoreValEl) scoreValEl.textContent = `${scoreVal} ${unitText}`;
    if (scoreLabelEl) {
      scoreLabelEl.textContent = lang === 'az' ? 'Toplanan Xal:' : lang === 'ru' ? 'Набранные очки:' : 'Total Score:';
    }
    if (okTextEl) okTextEl.textContent = 'OK';

    if (isSuccess) {
      if (iconWrap) {
        iconWrap.innerHTML = '🏆';
        iconWrap.className = 'relative z-10 w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 text-white flex items-center justify-center shadow-xl shadow-orange-500/30 text-4xl';
      }
      if (titleEl) {
        titleEl.textContent = lang === 'az'
          ? 'Möhtəşəm nəticə, balaca qəhrəman!'
          : lang === 'ru'
          ? 'Великолепный результат, юный герой!'
          : 'Magnificent result, little hero!';
      }
      if (descEl) {
        descEl.textContent = lang === 'az'
          ? 'Sən bütün nağıl tapmacalarını uğurla tapdın! Biliklərini daha da artırmaq üçün yenidən sına!'
          : lang === 'ru'
          ? 'Ты успешно отгадал все сказочные загадки! Чтобы закрепить знания, попробуй сыграть снова!'
          : 'You solved all fairytale riddles successfully! Try again to boost your wisdom even further!';
      }
      this.playMagicalChime(880, 0.4);
    } else {
      if (iconWrap) {
        iconWrap.innerHTML = '🌟';
        iconWrap.className = 'relative z-10 w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-500 to-orange-500 text-white flex items-center justify-center shadow-xl shadow-amber-500/30 text-4xl';
      }
      if (titleEl) {
        titleEl.textContent = lang === 'az'
          ? 'Əla cəhd idi, balaca qəhrəman!'
          : lang === 'ru'
          ? 'Отличная попытка, юный герой!'
          : 'Great effort, little hero!';
      }
      if (descEl) {
        descEl.textContent = lang === 'az'
          ? 'Biliklərini daha da artırmaq üçün yenidən sına! Hər cəhd səni əsl nağıl ustasına çevirir.'
          : lang === 'ru'
          ? 'Попробуй снова, чтобы закрепить свои знания! Каждая попытка делает тебя мастером сказок.'
          : 'Try again to boost your fairytale wisdom! Every try turns you into a true story master.';
      }
      this.playMagicalChime(520, 0.3);
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  closeQuizResultModalAndRestart() {
    const modal = document.getElementById('sn-quiz-result-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
    document.body.style.overflow = '';

    this.mainQuizScore = 0;
    localStorage.setItem('sn_quiz_score', '0');
    this.updateMainQuizScoreDisplay(true);

    const lang = this.currentLang || 'az';
    const toastMsg = lang === 'az'
      ? 'Xallar sıfırlandı! Yeni nağıl oyunu başladı 🚀'
      : lang === 'ru'
      ? 'Очки сброшены! Новая игра началась 🚀'
      : 'Score reset! New fairytale game started 🚀';
    this.showToast(toastMsg);

    this.mainQuizIndex = 0;
    this.mainQuizAnswering = false;
    this.prepareShuffledRiddles();

    const cardEl = document.getElementById('sn-main-quiz-card');
    if (cardEl) {
      cardEl.innerHTML = `
        <div class="flex items-center justify-between pb-4 border-b border-border-parchment/60 dark:border-white/10">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-orange-50 dark:bg-orange-950/50 border border-orange-200/70 dark:border-orange-800/40">
            <span class="material-symbols-outlined text-[18px] text-amber-500">help</span>
            <span id="sn-main-quiz-badge" class="text-xs font-bold text-orange-800 dark:text-orange-300 uppercase tracking-wider">Tapmaca № 01</span>
          </div>
          <div class="flex items-center gap-2">
            <div id="sn-main-quiz-score-badge" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-yellow-500/15 to-orange-500/15 border border-amber-300/80 dark:border-amber-600/40 text-amber-700 dark:text-amber-300 text-xs font-bold shadow-xs transition-all duration-300">
              <span class="text-sm">🪙</span>
              <span id="sn-main-quiz-score-val">+0 ${lang === 'az' ? 'Xal' : lang === 'ru' ? 'Очков' : 'Pts'}</span>
            </div>
            <button onclick="window.snApp.resetMainQuiz(true)"
              title="Xalları sıfırla və yenidən başla"
              aria-label="Sıfırla"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-cream/90 dark:bg-surface-dark-secondary hover:bg-orange-500 hover:text-white dark:hover:bg-orange-600 border border-border-parchment/80 dark:border-white/10 hover:border-transparent text-on-surface-variant text-xs font-semibold shadow-2xs hover:shadow-md hover:shadow-orange-500/20 transition-all duration-200 cursor-pointer group active:scale-95">
              <span class="text-xs group-hover:rotate-180 transition-transform duration-500 select-none">🔄</span>
              <span data-i18n="quiz_reset_btn" class="font-medium">${lang === 'az' ? 'Sıfırla' : lang === 'ru' ? 'Сбросить' : 'Reset'}</span>
            </button>
          </div>
        </div>

        <div class="py-1 sm:py-2 px-2 sm:px-4 text-center">
          <p id="sn-main-quiz-question" class="font-headline text-lg sm:text-2xl font-bold text-text-ink dark:text-text-ink-inverted leading-relaxed sm:leading-loose max-w-xl mx-auto min-h-[3.5rem] flex items-center justify-center transition-all duration-300">
          </p>
        </div>

        <div id="sn-main-quiz-options" class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1 transition-all duration-300">
        </div>

        <div id="sn-main-quiz-hint-box" class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-300/60 dark:border-amber-600/30 text-center text-xs sm:text-[13px] text-on-surface-variant flex items-center justify-center gap-2 shadow-xs transition-all duration-300 hover:shadow-md hover:shadow-amber-500/10">
          <span class="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 text-xs shadow-xs animate-bounce" style="animation-duration: 2.5s;">💡</span>
          <span id="sn-main-quiz-hint-text" class="font-medium text-text-ink dark:text-text-ink-inverted">
          </span>
        </div>
      `;
    }

    this.renderMainQuiz();
    this.playMagicalChime(660, 0.25);
  }

  // --- Live Global Search Modal ---
  injectSearchModal() {
    if (document.getElementById('sn-search-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'sn-search-modal';
    modal.className = 'fixed inset-0 z-[95] hidden modal-backdrop flex items-start justify-center pt-16 sm:pt-24 px-4';
    modal.innerHTML = `
      <div class="story-modal-box bg-surface-cream w-full max-w-2xl rounded-3xl shadow-2xl border border-border-parchment overflow-hidden">
        
        <!-- Search Input -->
        <div class="p-4 border-b border-border-parchment flex items-center gap-3 bg-surface-ivory">
          <span class="material-symbols-outlined text-[24px] text-primary">search</span>
          <input id="sn-search-input" type="text" placeholder="${this.t('search_placeholder')}" class="w-full bg-transparent border-none outline-none text-base text-text-ink placeholder:text-on-surface-variant/60 font-body"/>
          <button id="sn-search-close-btn" class="p-1 rounded-lg hover:bg-surface-container text-on-surface-variant cursor-pointer" title="Bağla">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Filter Chips in Search -->
        <div class="px-4 py-2.5 border-b border-border-parchment/50 flex items-center gap-2 overflow-x-auto text-xs bg-surface-cream">
          <button class="sn-search-cat-chip px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 text-white font-bold cursor-pointer shadow-xs" data-cat="all">${this.t('all_stories')}</button>
          <button class="sn-search-cat-chip px-3 py-1 rounded-full bg-white hover:bg-orange-50 text-on-surface-variant hover:text-orange-700 border border-border-parchment/70 cursor-pointer" data-cat="az">${this.t('cat_az')}</button>
          <button class="sn-search-cat-chip px-3 py-1 rounded-full bg-white hover:bg-orange-50 text-on-surface-variant hover:text-orange-700 border border-border-parchment/70 cursor-pointer" data-cat="world">${this.t('cat_world')}</button>
          <button class="sn-search-cat-chip px-3 py-1 rounded-full bg-white hover:bg-orange-50 text-on-surface-variant hover:text-orange-700 border border-border-parchment/70 cursor-pointer" data-cat="nature">${this.t('cat_nature')}</button>
          <button class="sn-search-cat-chip px-3 py-1 rounded-full bg-white hover:bg-orange-50 text-on-surface-variant hover:text-orange-700 border border-border-parchment/70 cursor-pointer" data-cat="bedtime">${this.t('cat_bedtime')}</button>
        </div>

        <!-- Live Results -->
        <div id="sn-search-results" class="max-h-[60vh] overflow-y-auto p-4 space-y-2"></div>

      </div>
    </div>
    `;
    document.body.appendChild(modal);

    const input = document.getElementById('sn-search-input');
    const closeBtn = document.getElementById('sn-search-close-btn');

    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    input.addEventListener('input', (e) => this.renderSearchResults(e.target.value));

    // Category chips in search
    document.querySelectorAll('.sn-search-cat-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.sn-search-cat-chip').forEach(c => {
          c.className = 'sn-search-cat-chip px-3 py-1 rounded-full bg-white hover:bg-orange-50 text-on-surface-variant hover:text-orange-700 border border-border-parchment/70 cursor-pointer';
        });
        chip.className = 'sn-search-cat-chip px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 text-white font-bold cursor-pointer shadow-xs';
        this.searchCatFilter = chip.getAttribute('data-cat');
        this.renderSearchResults(input.value);
      });
    });

    this.renderSearchResults('');
  }

  renderSearchResults(query = '') {
    const list = document.getElementById('sn-search-results');
    if (!list) return;

    query = query.trim().toLowerCase();
    const lang = this.currentLang;
    const cat = this.searchCatFilter || 'all';

    let matches = NAGILLAR_DB.filter(s => {
      const matchCat = cat === 'all' || s.category === cat;
      if (!matchCat) return false;
      if (!query) return true;

      const title = ((s.title && s.title[lang]) || s.title.az).toLowerCase();
      const summary = ((s.summary && s.summary[lang]) || s.summary.az).toLowerCase();
      const badge = ((s.badge && s.badge[lang]) || '').toLowerCase();
      return title.includes(query) || summary.includes(query) || badge.includes(query);
    });

    if (matches.length === 0) {
      list.innerHTML = `
        <div class="p-8 text-center space-y-2">
          <span class="material-symbols-outlined text-4xl text-on-surface-variant/40">auto_stories</span>
          <h4 class="font-headline font-bold text-lg text-text-ink">${this.t('no_results')}</h4>
          <p class="text-xs text-on-surface-variant">${this.t('no_results_desc')}</p>
        </div>
      `;
      return;
    }

    list.innerHTML = `
      <div class="text-xs uppercase font-bold text-primary tracking-wider px-2 mb-1">
        ${query ? `Axtarış nəticələri (${matches.length})` : 'Tövsiyə olunan nağıllar'}
      </div>
      ${matches.map(s => `
        <div onclick="window.snApp.openStory('${s.id}'); document.getElementById('sn-search-modal').classList.add('hidden');" 
             class="flex items-center justify-between p-3 rounded-2xl hover:bg-surface-ivory transition-all cursor-pointer border border-transparent hover:border-border-parchment/60 group">
          <div class="flex items-center gap-3">
            <img src="${s.image}" class="w-12 h-12 rounded-xl object-cover shrink-0" alt=""/>
            <div>
              <div class="font-headline font-bold text-sm text-text-ink group-hover:text-primary transition-colors">
                ${(s.title && s.title[lang]) || s.title.az}
              </div>
              <div class="text-xs text-on-surface-variant mt-0.5 line-clamp-1">
                ${(s.badge && s.badge[lang]) || s.category} • ${(s.readingTime && s.readingTime[lang]) || '5 dəq'}
              </div>
            </div>
          </div>
          <span class="material-symbols-outlined text-[20px] text-interactive-amber group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </div>
      `).join('')}
    `;
  }

  openSearchModal() {
    const modal = document.getElementById('sn-search-modal');
    if (modal) {
      modal.classList.remove('hidden');
      const input = document.getElementById('sn-search-input');
      if (input) {
        input.value = '';
        input.focus();
        this.renderSearchResults('');
      }
    }
  }

  // ============================================================
  // 6.5. GÜNÜN SEHRLİ NAĞILI & İNTERAKTİV SEHRLİ SANDIQ (Hero Magic Canvas & Dynamic Chest)
  // ============================================================
  initHeroMagicCanvas() {
    const canvas = document.getElementById('hero-magic-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
    let height = canvas.height = canvas.parentElement.offsetHeight || 500;

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    // Particle types: sparkling stars and golden fairy dust
    const PARTICLE_COUNT = 45;
    const particles = [];
    const starSymbols = ['★', '✦', '✨', '•'];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        symbol: starSymbols[Math.floor(Math.random() * starSymbols.length)],
        size: Math.random() * 11 + 7,
        alpha: Math.random() * 0.7 + 0.2,
        speedX: (Math.random() - 0.5) * 0.45,
        speedY: -Math.random() * 0.55 - 0.15,
        hue: Math.random() > 0.4 ? 42 : Math.random() > 0.5 ? 28 : 160, // Gold, Amber, Emerald fairy lights
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    let animId = null;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        if (p.y < -20) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 10;
        if (p.x > width + 20) p.x = -10;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `hsla(${p.hue}, 95%, 65%, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${p.hue}, 95%, 60%, 0.6)`;
        ctx.font = `${p.size}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    if (this._heroCanvasAnimId) {
      cancelAnimationFrame(this._heroCanvasAnimId);
    }
    this._heroCanvasAnimId = requestAnimationFrame(render);
  }

  getInitialDailyStoryIndex() {
    if (!NAGILLAR_DB || !NAGILLAR_DB.length) return 0;
    const now = new Date();
    const anchor = new Date(2025, 0, 1);
    const msPerDay = 1000 * 60 * 60 * 24;
    const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const anchorDate = new Date(anchor.getFullYear(), anchor.getMonth(), anchor.getDate());
    const dayDiff = Math.floor((nowDate.getTime() - anchorDate.getTime()) / msPerDay);
    return Math.abs(dayDiff) % NAGILLAR_DB.length;
  }

  getDailyHeroStory() {
    if (this.currentHeroStoryIndex === undefined) {
      this.currentHeroStoryIndex = this.getInitialDailyStoryIndex();
    }
    const story = NAGILLAR_DB[this.currentHeroStoryIndex] || NAGILLAR_DB[0];
    return {
      story,
      chestNumber: String(this.currentHeroStoryIndex + 1).padStart(2, '0')
    };
  }

  nextHeroStory(userTriggered = true) {
    if (!NAGILLAR_DB || !NAGILLAR_DB.length) return;
    if (this.currentHeroStoryIndex === undefined) {
      this.currentHeroStoryIndex = this.getInitialDailyStoryIndex();
    }
    this.currentHeroStoryIndex = (this.currentHeroStoryIndex + 1) % NAGILLAR_DB.length;
    this.renderHeroStory(this.currentHeroStoryIndex, userTriggered);
    if (userTriggered) {
      const story = NAGILLAR_DB[this.currentHeroStoryIndex];
      const lang = this.currentLang || 'az';
      const title = (story.title && (story.title[lang] || story.title.az)) || '';
      const toastPrefix = lang === 'az' ? 'Sehrli Sandıq açıldı:' : lang === 'ru' ? 'Сундучок открыт:' : 'Magic Chest opened:';
      this.showToast(`✨ ${toastPrefix} ${title}`);
    }
  }

  renderHeroStory(storyIdx = 0, animate = false) {
    if (!NAGILLAR_DB || !NAGILLAR_DB.length) return;
    this.currentHeroStoryIndex = storyIdx % NAGILLAR_DB.length;
    const story = NAGILLAR_DB[this.currentHeroStoryIndex];
    const lang = this.currentLang || 'az';
    const chestNumber = String(this.currentHeroStoryIndex + 1).padStart(2, '0');

    const narrativeBox = document.getElementById('hero-narrative-box');
    const stageContainer = document.getElementById('fairy-stage');

    if (animate) {
      if (narrativeBox) {
        narrativeBox.classList.add('opacity-0', 'translate-y-2');
      }
      if (stageContainer) {
        stageContainer.classList.add('scale-95', 'opacity-70');
      }
    }

    setTimeout(() => {
      // 1. Chest Badge
      const chestEl = document.getElementById('hero-chest-badge');
      if (chestEl) {
        const chestPrefix = lang === 'az' ? 'SEHRLİ SANDIQÇA №' : lang === 'ru' ? 'ВОЛШЕБНЫЙ СУНДУЧОК №' : 'MAGIC CHEST №';
        chestEl.textContent = `${chestPrefix} ${chestNumber}`;
      }

      // 2. Story Title
      const titleEl = document.getElementById('hero-story-title');
      if (titleEl) {
        titleEl.textContent = (story.title && (story.title[lang] || story.title.az)) || '';
      }

      // 3. Story Description / Summary
      const descEl = document.getElementById('hero-story-desc');
      if (descEl) {
        descEl.textContent = (story.summary && (story.summary[lang] || story.summary.az)) || '';
      }

      // 4. Reading time ribbon
      const timeEl = document.getElementById('hero-story-time');
      if (timeEl) {
        const timeVal = (story.readingTime && (story.readingTime[lang] || story.readingTime.az)) || '5 dəq';
        const timeLabel = lang === 'az' ? 'Mütaliə:' : lang === 'ru' ? 'Чтение:' : 'Reading:';
        timeEl.innerHTML = `${timeLabel} <strong>${timeVal}</strong>`;
      }

      // 5. Age group ribbon
      const ageEl = document.getElementById('hero-story-age');
      if (ageEl) {
        const ageLabels = {
          toddler: { az: '3–6 yaş', en: '3–6 ages', ru: '3–6 лет' },
          explorer: { az: '7–10 yaş', en: '7–10 ages', ru: '7–10 лет' },
          hero: { az: '11+ yaş', en: '11+ ages', ru: '11+ лет' }
        };
        const ageVal = (ageLabels[story.ageGroup] && (ageLabels[story.ageGroup][lang] || ageLabels[story.ageGroup].az)) || '7–10 yaş';
        const agePrefix = lang === 'az' ? 'Yaş:' : lang === 'ru' ? 'Возраст:' : 'Age:';
        ageEl.innerHTML = `${agePrefix} <strong>${ageVal}</strong>`;
      }

      // 6. Voice Story status ribbon
      const audioEl = document.getElementById('hero-story-audio');
      if (audioEl) {
        const audioPrefix = lang === 'az' ? 'Səsli Nağıl:' : lang === 'ru' ? 'Аудиосказка:' : 'Voice Story:';
        const audioVal = lang === 'az' ? 'Mövcuddur' : lang === 'ru' ? 'Доступно' : 'Available';
        audioEl.innerHTML = `${audioPrefix} <strong>${audioVal}</strong>`;
      }

      // 7. CTA Buttons text
      const readBtnTextEl = document.getElementById('hero-read-btn-text');
      if (readBtnTextEl) {
        readBtnTextEl.textContent = lang === 'az' ? 'Sehrli Nağılı Oxu' : lang === 'ru' ? 'Читать сказку' : 'Read Fairytale';
      }
      const listenBtnTextEl = document.getElementById('hero-listen-btn-text');
      if (listenBtnTextEl) {
        listenBtnTextEl.textContent = lang === 'az' ? 'Səsli Dinlə' : lang === 'ru' ? 'Слушать аудио' : 'Listen Voice';
      }

      // 8. Book Header Strip
      const stageBadgeEl = document.getElementById('hero-stage-badge');
      if (stageBadgeEl) {
        const defaultBadge = lang === 'az'
          ? `FOLİANT CİLDİ: ${story.title.az.toUpperCase()}`
          : lang === 'ru'
          ? `ФОЛИАНТ: ${(story.title.ru || story.title.az).toUpperCase()}`
          : `TOME EDITION: ${(story.title.en || story.title.az).toUpperCase()}`;
        stageBadgeEl.textContent = (story.badge && (story.badge[lang] || story.badge.az)) || defaultBadge;
      }

      // 9. Stage Image
      const stageImg = document.getElementById('fairy-stage-img');
      if (stageImg && story.image) {
        stageImg.src = story.image;
        stageImg.alt = (story.title && (story.title[lang] || story.title.az)) || 'Günün Sehrli Nağılı';
      }

      // 10. Floating stage button text
      const stageReadBtn = document.getElementById('hero-stage-open-btn');
      if (stageReadBtn) {
        stageReadBtn.textContent = lang === 'az' ? 'Aç və Oxu' : lang === 'ru' ? 'Открыть и читать' : 'Open & Read';
      }

      if (animate) {
        if (narrativeBox) {
          narrativeBox.classList.remove('opacity-0', 'translate-y-2');
        }
        if (stageContainer) {
          stageContainer.classList.remove('scale-95', 'opacity-70');
        }
      }
    }, animate ? 150 : 0);
  }

  openCurrentHeroStory(listenMode = false) {
    if (this.currentHeroStoryIndex === undefined) {
      this.currentHeroStoryIndex = this.getInitialDailyStoryIndex();
    }
    const story = NAGILLAR_DB[this.currentHeroStoryIndex] || NAGILLAR_DB[0];
    if (!story) return;

    this.openStory(story.id);

    if (listenMode) {
      setTimeout(() => {
        const listenBtn = document.getElementById('sn-listen-btn');
        if (listenBtn) listenBtn.click();
      }, 350);
    }
  }

  openDailyHeroStory(listenMode = false) {
    this.openCurrentHeroStory(listenMode);
  }

  updateDailyHeroStory() {
    if (this.currentHeroStoryIndex === undefined) {
      this.currentHeroStoryIndex = this.getInitialDailyStoryIndex();
    }
    this.renderHeroStory(this.currentHeroStoryIndex, false);
  }

  // --- Catalog Grid Rendering ---
  renderCatalog() {
    const grid = document.getElementById('sn-catalog-grid');
    if (!grid) return;

    const lang = this.currentLang;
    const cat = this.activeCategory;
    const age = this.activeAge;

    const filtered = NAGILLAR_DB.filter(s => {
      const matchCat = cat === 'all' || s.category === cat;
      const matchAge = age === 'all' || s.ageGroup === age;
      return matchCat && matchAge;
    });

    grid.innerHTML = filtered.map(story => {
      const catBadgeStyles = {
        az: 'text-rose-700 bg-rose-50/95 border-rose-200/80',
        world: 'text-amber-700 bg-amber-50/95 border-amber-200/80',
        nature: 'text-emerald-700 bg-emerald-50/95 border-emerald-200/80',
        bedtime: 'text-purple-700 bg-purple-50/95 border-purple-200/80'
      };
      const badgeStyle = catBadgeStyles[story.category] || 'text-orange-700 bg-orange-50/95 border-orange-200/80';

      return `
      <article onclick="window.snApp.openStory('${story.id}')" style="cursor:pointer;" class="story-card-hover bg-surface-cream rounded-3xl p-5 border border-border-parchment/70 flex flex-col justify-between shadow-sm group">
        <div class="space-y-4">
          <div class="relative w-full aspect-video rounded-2xl overflow-hidden bg-surface-dark">
            <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="${story.image}" alt=""/>
            <div class="absolute inset-0 bg-gradient-to-t from-surface-dark/60 via-transparent to-transparent"></div>
            <div class="absolute top-3 left-3 px-2.5 py-1 ${badgeStyle} backdrop-blur-sm rounded-lg text-xs font-bold shadow-xs uppercase tracking-wide border">
              ${(story.badge && story.badge[lang]) || story.category}
            </div>
            <div class="absolute bottom-3 right-3 px-2.5 py-1 bg-surface-dark/80 backdrop-blur-sm rounded-lg text-[11px] font-sans text-white flex items-center gap-1 font-semibold">
              <span class="material-symbols-outlined text-[14px] text-amber-400">schedule</span>
              <span>${(story.readingTime && story.readingTime[lang]) || '5 dəq'}</span>
            </div>
          </div>
          <div>
            <h3 class="font-headline text-xl font-bold text-text-ink group-hover:text-orange-600 transition-colors leading-snug">
              ${(story.title && story.title[lang]) || story.title.az}
            </h3>
            <p class="text-xs sm:text-sm text-on-surface-variant mt-2 line-clamp-3 leading-relaxed">
              ${(story.summary && story.summary[lang]) || story.summary.az}
            </p>
          </div>
        </div>
        <div class="pt-4 mt-4 border-t border-border-parchment/60 flex items-center justify-between">
          <span class="text-xs text-orange-600 font-bold flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px]">auto_stories</span>
            <span>${this.t('read_story')}</span>
          </span>
          <button onclick="event.stopPropagation(); window.snApp.openStory('${story.id}')" class="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white transition-all rounded-xl text-xs font-bold shadow-sm inline-flex items-center gap-1.5 cursor-pointer">
            <span>Oxu</span>
            <span class="material-symbols-outlined text-[16px]">menu_book</span>
          </button>
        </div>
      </article>
    `}).join('');
  }

  // --- Category Filter Click ---
  filterCategory(cat, btn, scrollToCatalog = false) {
    this.activeCategory = cat;
    document.querySelectorAll('.sn-cat-btn').forEach(b => {
      b.className = 'sn-cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all bg-white hover:bg-orange-50 text-on-surface-variant hover:text-orange-700 border border-border-parchment/70 cursor-pointer whitespace-nowrap shrink-0';
    });
    
    let targetBtn = btn;
    if (!targetBtn) {
      targetBtn = document.querySelector(`.sn-cat-btn[data-cat="${cat}"]`) || 
                  Array.from(document.querySelectorAll('.sn-cat-btn')).find(b => b.getAttribute('onclick')?.includes(`'${cat}'`));
    }
    if (targetBtn) {
      targetBtn.className = 'sn-cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-gradient-to-r from-orange-500 to-rose-600 text-white shadow-sm border-transparent cursor-pointer whitespace-nowrap shrink-0';
    }
    
    this.renderCatalog();
    this.playMagicalChime(440, 0.15);
    
    const catNames = {
      az: { all: 'Bütün Nağıllar', az: 'Azərbaycan', world: 'Dünya', nature: 'Heyvan', bedtime: 'Laylalar' },
      en: { all: 'All Stories', az: 'Azerbaijan', world: 'World', nature: 'Animals', bedtime: 'Lullabies' },
      ru: { all: 'Все сказки', az: 'Азербайджан', world: 'Мир', nature: 'Животные', bedtime: 'Колыбельные' }
    };
    const activeDict = catNames[this.currentLang] || catNames.az;
    const catLabel = activeDict[cat] || cat;
    const suffix = (this.currentLang === 'en') ? 'active' : (this.currentLang === 'ru') ? 'активно' : 'aktivdir';
    this.showToast(`${catLabel} ${suffix}`);

    if (scrollToCatalog) {
      const el = document.getElementById('kataloq');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // --- Smooth Scroll to Section Helper ---
  goToSection(sectionId, category = null) {
    if (category) {
      this.filterCategory(category, null, false);
    }
    
    let navId = sectionId;
    if (category === 'az') navId = 'az';
    else if (category === 'world') navId = 'world';
    else if (category === 'nature') navId = 'nature';
    else if (category === 'bedtime') navId = 'lullabies';
    else if (sectionId === 'qehreman-yemekleri') navId = 'meals';
    else if (sectionId === 'tapmaca') navId = 'quiz';
    else if (sectionId === 'header-top') navId = 'home';
    
    this.setActiveNav(navId);

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // --- Go To Age Tier Helper ---
  goToAgeTier(ageGroup) {
    const el = document.getElementById('pedaqoji');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.selectAgeMode(ageGroup);
  }

  // --- Hero Recipe Modal ---
  openRecipeModal(recipeKey) {
    const HERO_RECIPES = {
      cirtdan: {
        name: { az: "Cırtdanın Təndir Çörəyi və Dağ Balı", en: "Cirtdan's Power Bread & Mountain Honey", ru: "Хлеб Силы и Горный Мед Джиртдана" },
        hero: { az: "Cırtdan", en: "Cirtdan", ru: "Джиртдан" },
        icon: "🍯",
        bonus: { az: "Zəka +100 • Zirəklik +90", en: "Intelligence +100 • Agility +90", ru: "Интеллект +100 • Ловкость +90" },
        prepTime: { az: "5 dəqiqə", en: "5 mins", ru: "5 минут" },
        ingredients: {
          az: [
            "Təzə təndir çörəyi və ya kəpəkli lavaş",
            "1 xörək qaşığı xalis dağ balı",
            "Təbii kərə yağı və ya qaymaq",
            "3-4 ədəd xırdalanmış qoz ləpəsi"
          ],
          en: [
            "Fresh oven bread or whole wheat lavash",
            "1 tbsp pure mountain honey",
            "Fresh natural butter or clotted cream",
            "3-4 crushed walnut kernels"
          ],
          ru: [
            "Свежий тандырный хлеб или лаваш",
            "1 ст. л. натурального горного меда",
            "Сливочное масло или сливки",
            "3-4 измельченных грецких ореха"
          ]
        },
        steps: {
          az: "İsti təndir çörəyinin üzərinə azacıq təbii kərə yağı çəkin. Üzərinə qızılı dağ balı süzün və xırdalanmış qoz ləpələrini səpin. Cırtdan kimi divlərə qalib gəlmək üçün səhər süfrəsində iştahla yeyin!",
          en: "Spread butter over warm bread. Drizzle pure golden honey and sprinkle crushed walnuts. Enjoy for breakfast to stay smart and quick-witted!",
          ru: "Намажьте масло на теплый хлеб, полейте золотистым медом и посыпьте орехами. Отличный завтрак для ловкости и смекалки!"
        }
      },
      melikmemmed: {
        name: { az: "Məlikməmmədin Qızıl Alma Sıyığı", en: "Malikmammad's Golden Apple Porridge", ru: "Золотая Яблочная Каша Меликмамеда" },
        hero: { az: "Məlikməmməd", en: "Malikmammad", ru: "Меликмамед" },
        icon: "🍎",
        bonus: { az: "Cəsarət +100 • Güc +95", en: "Bravery +100 • Strength +95", ru: "Храбрость +100 • Сила +95" },
        prepTime: { az: "10 dəqiqə", en: "10 mins", ru: "10 минут" },
        ingredients: {
          az: [
            "1 ədəd şirin qızıl alma",
            "1 stəkan südlü yulaf yarması",
            "Yarım çay qaşığı ətirli darçın",
            "1 çay qaşığı bal və ya bəhməz"
          ],
          en: [
            "1 sweet golden apple",
            "1 cup of warm oat porridge with milk",
            "Half tsp of fragrant cinnamon",
            "1 tsp honey or molasses"
          ],
          ru: [
            "1 сладкое золотое яблоко",
            "1 чашка овсянки на молоке",
            "Половина ч. л. корицы",
            "1 ч. л. меда"
          ]
        },
        steps: {
          az: "Almanı xırda kublar şəklində doğrayıb ilıq yulaf sıyığına əlavə edin. Üzərinə darçın və bal gəzdirin. Qaranlıq quyuya enərkən qəhrəmana tükənməz cəsarət verən sehrli vitamin mənbəyi!",
          en: "Dice the apple and fold it into warm oats. Top with cinnamon and honey. Gain the stamina of a legendary hero!",
          ru: "Нарежьте яблоко кубиками и добавьте в теплую овсянку. Посыпьте корицей и медом для богатырской силы!"
        }
      },
      zumrud: {
        name: { az: "Zümrüd Quşunun Giləmeyvə Şirəsi", en: "Simurgh's Forest Berry Smoothie", ru: "Ягодный Смузи Птицы Симург" },
        hero: { az: "Zümrüd Quşu", en: "Simurgh Bird", ru: "Птица Симург" },
        icon: "🫐",
        bonus: { az: "Göz İtiyi +90 • Uçuş Qabiliyyəti +100", en: "Sharp Eyesight +90 • Flight Energy +100", ru: "Острое Зрение +90 • Энергия Полета +100" },
        prepTime: { az: "3 dəqiqə", en: "3 mins", ru: "3 минут" },
        ingredients: {
          az: [
            "Bir ovuc təzə meşə böyürtkəni və moruq",
            "1 stəkan uşaq qatığı və ya süd",
            "1 dilim banan",
            "Təzə nanə yarpağı"
          ],
          en: [
            "Handful of fresh forest berries",
            "1 cup of milk or light yogurt",
            "1 banana slice",
            "Fresh mint leaf"
          ],
          ru: [
            "Горсть лесных ягод (ежевика, малина)",
            "1 стакан йогурта или молока",
            "1 банан",
            "Листик свежей мяты"
          ]
        },
        steps: {
          az: "Bütün giləmeyvələri və bananı südlə birlikdə blendərdə 1 dəqiqə qarışdırın. Qədəhə süzüb nanə ilə bəzəyin. Qanadları 7 qat göyə qaldıracaq qədər yüksək enerji verir!",
          en: "Blend berries and banana with milk for 1 minute until creamy and smooth. Gives soaring energy throughout the day!",
          ru: "Взбейте ягоды и банан с молоком в блендере. Заряжает энергией и зоркостью на весь день!"
        }
      },
      gerda: {
        name: { az: "Gerdanın Qəlbi İsidən Südlü Şərbəti", en: "Gerda's Warm Heart Herbal Milk", ru: "Согревающее Молоко Герды" },
        hero: { az: "Balaca Gerda", en: "Little Gerda", ru: "Маленькая Герда" },
        icon: "🥛",
        bonus: { az: "İsti Ürək +100 • Şaxtaya Dözüm +95", en: "Warm Heart +100 • Frost Immunity +95", ru: "Теплое Сердце +100 • Стойкость к Холоду +95" },
        prepTime: { az: "6 dəqiqə", en: "6 mins", ru: "6 минут" },
        ingredients: {
          az: [
            "1 stəkan ilıq kənd südü",
            "1 çay qaşığı təbii kərə yağı",
            "1 çay qaşığı çiçək balı",
            "Bir çimdik təbii vanil və darçın"
          ],
          en: [
            "1 cup of warm milk",
            "1 tsp of fresh butter",
            "1 tsp of floral honey",
            "A pinch of natural vanilla and cinnamon"
          ],
          ru: [
            "1 стакан теплого молока",
            "1 ч. л. сливочного масла",
            "1 ч. л. цветочного меда",
            "Щепотка ванили и корицы"
          ]
        },
        steps: {
          az: "İlıq südün içinə bir az kərə yağı və bal əlavə edib qarışdırın. Üzərinə darçın səpin. Bu şəfalı içki hər cür şaxtanı və soyuqluğu əridən ən mehriban dostluq rəmzidir!",
          en: "Mix butter and honey into warm milk. Sprinkle cinnamon. Melts away the chills and warms the kindest hearts!",
          ru: "Размешайте масло и мед в теплом молоке, добавьте корицу. Согревает сердце даже в самые лютые морозы!"
        }
      }
    };

    const r = HERO_RECIPES[recipeKey];
    if (!r) return;
    const lang = this.currentLang || 'az';
    const name = (r.name && r.name[lang]) || r.name.az;
    const hero = (r.hero && r.hero[lang]) || r.hero.az;
    const bonus = (r.bonus && r.bonus[lang]) || r.bonus.az;
    const prep = (r.prepTime && r.prepTime[lang]) || r.prepTime.az;
    const ings = (r.ingredients && r.ingredients[lang]) || r.ingredients.az;
    const steps = (r.steps && r.steps[lang]) || r.steps.az;

    let modal = document.getElementById('sn-recipe-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'sn-recipe-modal';
      modal.className = 'fixed inset-0 z-[96] hidden modal-backdrop flex items-center justify-center p-3 sm:p-6 overflow-y-auto';
      document.body.appendChild(modal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    }

    const labels = {
      az: { bonus: "✨ QƏHRƏMAN GÜC BONUSU", ingredients: "Tərkibi (Ərzaqlar):", steps: "Hazırlanma Qaydası:", close: "Nuş Olsun! (Bağla)" },
      en: { bonus: "✨ HERO POWER BONUS", ingredients: "Ingredients:", steps: "Preparation Steps:", close: "Bon Appétit! (Close)" },
      ru: { bonus: "✨ БОНУС СИЛЫ ГЕРОЯ", ingredients: "Ингредиенты:", steps: "Способ приготовления:", close: "Приятного аппетита! (Закрыть)" }
    };
    const tLab = labels[lang] || labels.az;

    modal.innerHTML = `
      <div class="story-modal-box bg-surface-cream text-text-ink w-full max-w-lg rounded-3xl shadow-2xl border border-border-parchment overflow-hidden p-6 sm:p-8 space-y-5 relative my-auto">
        <button onclick="document.getElementById('sn-recipe-modal').classList.add('hidden')" class="absolute top-5 right-5 w-9 h-9 rounded-full bg-surface-ivory hover:bg-surface border border-border-parchment flex items-center justify-center text-text-ink hover:text-primary transition-colors cursor-pointer">
          <span class="material-symbols-outlined text-[20px]">close</span>
        </button>

        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-2xl bg-surface-ivory border border-border-parchment flex items-center justify-center text-3xl shadow-inner shrink-0">
            ${r.icon}
          </div>
          <div>
            <span class="text-xs font-bold text-interactive-amber uppercase tracking-wider bg-surface-ivory px-2.5 py-0.5 rounded-full border border-border-parchment/60">
              ${hero}
            </span>
            <h3 class="font-headline text-xl sm:text-2xl font-bold text-text-ink mt-1">
              ${name}
            </h3>
            <div class="text-xs text-on-surface-variant flex items-center gap-1.5 mt-0.5">
              <span class="material-symbols-outlined text-[15px] text-primary">timer</span>
              <span>${prep}</span>
            </div>
          </div>
        </div>

        <div class="p-3 bg-surface-ivory rounded-2xl border border-border-parchment/80 space-y-1">
          <span class="text-[10px] font-bold text-primary uppercase tracking-wider block">${tLab.bonus}</span>
          <p class="text-xs font-bold text-text-ink">${bonus}</p>
        </div>

        <div class="space-y-2">
          <h4 class="font-headline font-bold text-sm text-text-ink flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px] text-primary">grocery</span>
            <span>${tLab.ingredients}</span>
          </h4>
          <ul class="space-y-1.5 text-xs text-on-surface-variant bg-surface p-3.5 rounded-xl border border-border-parchment/60">
            ${ings.map(ing => `<li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-interactive-amber shrink-0"></span><span>${ing}</span></li>`).join('')}
          </ul>
        </div>

        <div class="space-y-2">
          <h4 class="font-headline font-bold text-sm text-text-ink flex items-center gap-1.5">
            <span class="material-symbols-outlined text-[18px] text-primary">skillet</span>
            <span>${tLab.steps}</span>
          </h4>
          <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed bg-surface-ivory/60 p-3.5 rounded-xl border border-border-parchment/60">
            ${steps}
          </p>
        </div>

        <button onclick="document.getElementById('sn-recipe-modal').classList.add('hidden'); window.snApp.playMagicalChime(880, 0.25);" class="w-full py-3 bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-600 hover:to-rose-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
          <span class="material-symbols-outlined text-[18px]">thumb_up</span>
          <span>${tLab.close}</span>
        </button>
      </div>
    `;

    modal.classList.remove('hidden');
    this.playMagicalChime(660, 0.2);
  }

  // --- Age Mode Direct Open & Filter ---
  selectAgeMode(ageGroup) {
    this.activeAge = ageGroup;
    this.renderCatalog();
    
    // Open the exact matching story for that age tier immediately
    if (ageGroup === 'toddler') {
      this.openStory('tiq-tiq-xanim');
    } else if (ageGroup === 'explorer') {
      this.openStory('cirtdan-ve-div');
    } else if (ageGroup === 'hero') {
      this.openStory('melikmemmed-zumrud-qusu');
    }
  }

  filterAge(ageGroup, btn) {
    this.selectAgeMode(ageGroup);
  }

  // --- Event Listeners ---
  setupGlobalEventListeners() {
    // Search triggers
    document.querySelectorAll('.sn-trigger-search').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.openSearchModal();
      });
    });

    // Theme toggle
    document.querySelectorAll('.sn-trigger-theme').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleTheme();
      });
    });

    // Language buttons
    document.querySelectorAll('.sn-lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        this.applyLanguage(lang, true);
      });
    });

    // Lullaby player button
    document.querySelectorAll('.sn-trigger-lullaby').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isPlaying = this.audioEngine.toggleLullaby();
        const icon = btn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = isPlaying ? 'stop_circle' : 'music_note';
        this.showToast(this.t(isPlaying ? 'lullaby_playing' : 'lullaby_stopped'));
      });
    });

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.openSearchModal();
      }
      if (e.key === 'Escape') {
        const sm = document.getElementById('sn-story-modal');
        const scm = document.getElementById('sn-search-modal');
        if (sm) sm.classList.add('hidden');
        if (scm) scm.classList.add('hidden');
        this.narrator.stop();
      }
    });

    // Zero dead links patch
    document.querySelectorAll('a[href="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        this.openStory('melikmemmed-zumrud-qusu');
      });
    });
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  window.snApp = new SehrliNagillarApp();
});

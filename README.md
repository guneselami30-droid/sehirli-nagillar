# 🌟 Sehrli Nağıllar — Uşaq Hekayə və Nağıl Portalı

Uşaqlar üçün xüsusi olaraq hazırlanmış, tam interaktiv, animasiyalı, səsli və təhlükəsiz veb portalı.

---

## ✨ Xüsusiyyətlər və Üstünlüklər:

- 🚫 **100% Uşaqlar Üçün Təhlükəsiz:** Qorxulu anatomik, orqanizm və ya mənfi elementlər qətiyyən yoxdur.
- 🎨 **Sevimli Vektor İllüstrasiyalar:** 7 ədəd xüsusi şirin SVG qrafika (`assets/*.svg`).
- 📚 **Pedaqoji Yaş Kateqoriyaları & Nağıllar:**
  - **3–6 yaş (Balacalar):** *«Tıq-tıq Xanım və Mehriban Meşə Dostları»* (Dostluq, çiyələk yığmaq, paylaşmaq sevinci)
  - **7–10 yaş (Kəşfiyyatçılar):** *«Cırtdanın Ağıllı Macərası»* (Fiziki güc deyil, ağıl, təmkin və zəkanın qalib gəlməsi)
  - **11+ yaş (Qəhrəmanlar):** *«Məlikməmməd və Sehrli Zümrüd Quşu»* (Cəsarət, quş balalarını xilas etmək, işıqlı dünyaya qayıdış)
  - **Dünya Klassikası (H.X. Andersen):** *«Qar Kraliçası və Gerdanın İsti Ürəyi»* (Cəsur Gerda, mehriban şimal maralı və buzları əridən sevgi)
  - **Gecə Yuxusu:** *«Ulduzları Yandıran Balaca Pəri»* (Şirin yuxuya getmək üçün sakitləşdirici nağıl)
  - **Dünya Nağılları:** *«Balaca Şahzadə və Müdrik Tülkü»*, *«Ələddin və Uçan Xalça»*
- 🎙️ **İntonasiyalı Səsli Nağılçı:** Cümləbəcümlə təbii intonasiya, dialoq modulyasiyası və karaoke işıqlandırması ilə Azərbaycan dilində səsli oxu (`0.9x / 1.0x` sürət rejimləri).
- 🎶 **Polifonik "Sehrli Layla" Musiqisi:** Web Audio API ilə zəngin arfa, musiqi qutusu (celesta) və yumşaq bas akkordları («Laylay dedim yatasan...» beşik melodiyası).
- 💡 **İbrət Dərsləri və Zəka Tapmacaları:** Hər nağılın sonunda tərbiyəvi nəticə və interaktiv viktorina sualları (düzgün cavabda zəfər zəngi səslənir).
- 🌙 **Yuxu İşığı & Gündüz/Gecə Mövzusu:** Uşaqların gözünü yormayan bənövşəyi-qaranlıq gecə lampası və gündüz kitabxana rejimləri.
- 🔍 **Canlı Qlobal Axtarış (Ctrl+K):** Bütün nağıl və qəhrəmanları saniyə içində tapma imkanı.
- 🌐 **Çoxdillilik:** Azərbaycan (`AZ`), İngilis (`EN`) və Rus (`RU`) dilləri arasında anında keçid.

---

## 🚀 Saytı Necə Başlatmaq Olar?

### 1-ci Üsul (Ən Sadə): Birbaşa Brauzerdə Açın
`index.html` və ya `nagillar.html` faylının üzərinə iki dəfə klikləyərək istənilən veb brauzerdə (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari) birbaşa aça bilərsiniz. Heç bir quraşdırma tələb olunmur!

### 2-ci Üsul: Lokal Node.js Serveri ilə İşə Salın
1. Qovluqda terminalı / əmr sətrini (Command Prompt / PowerShell) açın.
2. Aşağıdakı əmri daxil edin:
   ```bash
   node server.js
   ```
   və ya
   ```bash
   npm start
   ```
3. Brauzerinizdə bu ünvana keçin:
   👉 **http://localhost:3000/**

---

## 📁 Fayl Strukturu:
```
sehrli-nagillar/
├── index.html            # Əsas nağıllar portalı səhifəsi
├── nagillar.html         # Nağıllar portalı səhifəsi
├── nagillar-core.js      # Nağıllar bazası, səs mühərriki, layla pleyeri, axtarış, UI nəzarətçisi
├── server.js             # Yüngül lokal Node.js HTTP serveri (port 3000)
├── package.json          # Node.js layihə konfiqurasiyası
├── README.md             # Layihə sənədi və istifadə təlimatı
└── assets/               # Uşaqlar üçün xüsusi vektor illüstrasiyalar
    ├── tiq-tiq.svg
    ├── cirtdan.svg
    ├── melikmemmed.svg
    ├── qar-kralicasi.svg
    ├── ulduz-peri.svg
    ├── eleddin.svg
    └── balaca-sahzade.svg
```

---
Bütün hüquqlar qorunur © 2025–2026 Sehrli Nağıllar Portalı.

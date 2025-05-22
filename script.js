// Kategorili ve giriş ekranlı yeni sistem:

const data = [
  {
    category: "AI",
    shortcuts: [
      {
        "name": "GitHub Copilot",
        "description": "En kral AI.",
        "url": "https://github.com/copilot",
        "img": "https://www.podfeet.com/blog/wp-content/uploads/2021/09/GitHub-Copilot-logo-1040x650.png"
      },
      {
        "name": "ChatGPT",
        "description": "Premium üyeliğin yoksa en rezil AI.",
        "url": "https://chatgpt.com/",
        "img": "https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png"
      },
      {
        "name": "Gemini",
        "description": "Baya kral AI, severiz.",
        "url": "https://gemini.google.com/app?hl=tr",
        "img": "https://www.pngall.com/wp-content/uploads/16/Google-Gemini-Logo-Transparent.png"
      }
    ]
  },
  {
    category: "Yazılım",
    shortcuts: [
      {
        "name": "GitHub",
        "description": "Hatasız repo olmaz.",
        "url": "https://github.com/",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png"
      },
      {
        "name": "Stack Overflow",
        "description": "Her derdin devası burada.",
        "url": "https://stackoverflow.com/",
        "img": "https://w7.pngwing.com/pngs/427/170/png-transparent-code-coding-development-programming-stackoverflow-web-social-rounded-icon-thumbnail.png"
      }
    ]
  },
  {
    category: "Asset Kaynakları",
    shortcuts: [
      {
        "name": "Mixamo",
        "description": "Beleş rigleme ve animasyon yapıyon güzel site.",
        "url": "https://www.mixamo.com/",
        "img": "https://pbs.twimg.com/profile_images/572884213590794240/rjH3n4XB_400x400.png"
      },
      {
        "name": "Pack 3D",
        "description": "Burda da beleş baya asset var.",
        "url": "https://p3dm.ru/",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBlDsr0xfaPQ0UxMj5pg_mVqfwARy0T-fr5A&s"
      },
      {
        "name": "Rig Models",
        "description": "Rigged beleş charlar ve objeler var.",
        "url": "https://rigmodels.com/index.php",
        "img": "https://rigmodels.com/img/logo1.png"
      },
      {
        "name": "CGTrader",
        "description": "Çok iyi assetler var ama genelde pahalı.",
        "url": "https://www.cgtrader.com/",
        "img": "https://pbs.twimg.com/profile_images/1725531572076457984/3dScqVZa_400x400.jpg"
      },
      {
        "name": "Free3D",
        "description": "İyi asset bulmak zor, adı free ama çoğu paralı. Yoklukta gider.",
        "url": "https://free3d.com/tr/",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZzj8Er1cZcYxZxWiJjBlvzPImfMcjcMSMg&s"
      },
      {
        "name": "Turbosquid",
        "description": "Asset sayısı az ve genelde çok pahalı.",
        "url": "https://www.turbosquid.com/",
        "img": "https://worknola-client-images.s3.amazonaws.com/employerProfileImages/139057/profile-image"
      },
      {
        "name": "Sketchfab",
        "description": "Ben bunla geldim bunla giderim. Hem ücretli hem ücretsiz kral assetler var.",
        "url": "https://sketchfab.com/feed",
        "img": "https://static.sketchfab.com/img/press/logos/sketchfab-logo.png"
      },
      {
        "name": "Unity Asset Store",
        "description": "Bura iyidir, baya asset var.",
        "url": "https://assetstore.unity.com/",
        "img": "https://cdn-icons-png.flaticon.com/512/5969/5969346.png"
      },
      {
        "name": "Dev Asset Collection",
        "description": "Ah fakir öğrenci kardeşim, al buyur kullan burayı. (Eğitim amaçlıdır.)",
        "url": "https://unityassetcollection.com/",
        "img": "https://pbs.twimg.com/profile_images/1659581474306428928/X5Ki7OWQ_400x400.jpg"
      },
      {
        "name": "Fab",
        "description": "Genelde Unreal uyumlu assetler var. Kalite çok yüksek ama fiyat da yüksek.",
        "url": "https://www.fab.com/",
        "img": "https://orbolt.com/media/assets/Carlo_Jongen__Fab_USD_Builder__1.1/0/thumbnail-200x200-Carlo_Jongen__Fab_USD_Builder__1.1-icon.png"
      },
      {
        "name": "3D Assets One",
        "description": "Materyaller iyi burda.",
        "url": "https://3dassets.one/?q=&sort=popular",
        "img": "https://d2w9rnfcy7mm78.cloudfront.net/12241986/original_d978710a0dfdb66ac1f2e2184583c8d1.png?1623453139?bc=0"
      }
    ]
  },
  {
    category: "Tasarım",
    shortcuts: [
      {
        "name": "Figma",
        "description": "Photoshop apk ama UI/UX de var.",
        "url": "https://figma.com/",
        "img": "https://www.applivery.com/wp-content/uploads/2024/07/Figma-macos-app-1.png"
      }
    ]
  },
  {
    category: "Araçlar",
    shortcuts: [
      {
        "name": "Pixelcut AI",
        "description": "HD arkaplan silme aracı.",
        "url": "https://www.pixelcut.ai/background-remover",
        "img": "https://templateshake.com/wp-content/uploads/2021/09/Pixelcut_-AI-Graphic-Designer.png"
      },
      {
        "name": "Bafta Game Idea Creator",
        "description": "Basit oyun fikri bulma sitesi.",
        "url": "https://www.bafta.org/programmes/young-game-designer/idea-generator",
        "img": "https://pbs.twimg.com/profile_images/1817973544669851648/K9uk_Coa_400x400.jpg"
      }
    ]
  },
  {
    category: "Eğlence",
    shortcuts: [
      {
        "name": "YouTube",
        "description": "Olmazsan olmaz, büyümez çiçeklerim.",
        "url": "https://www.youtube.com/",
        "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
      },
      {
        "name": "Itch.io",
        "description": "Steam apk ama çoğu şey bedava.",
        "url": "https://itch.io/",
        "img": "https://static-00.iconduck.com/assets.00/itch-io-icon-2048x2048-i6hzclad.png"
      },
      {
        "name": "Kick",
        "description": "Açık ara en iyi yayın platformudur.",
        "url": "https://kick.com/",
        "img": "https://static.wikia.nocookie.net/logopedia/images/1/11/Kick_%28Icon%29.svg/revision/latest/scale-to-width-down/250?cb=20230622003955"
      }
    ]
  },
  {
    category: "Destek",
    shortcuts: [
      {
        "name": "Github Profilim",
        "description": "alparslanmaral",
        "url": "https://github.com/alparslanmaral",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png"
      },
      {
        "name": "LinkedIn Profilim",
        "description": "Ahmet Alparslan Maral",
        "url": "https://www.linkedin.com/in/alparslanmaral/",
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
      }
    ]
  }
];

const categoryGrid = document.getElementById('categoryGrid');
const shortcutGrid = document.getElementById('shortcutGrid');
const mainTitle = document.getElementById('mainTitle');
const backBtn = document.getElementById('backBtn');

// Kategori kartlarını oluştur
function showCategories() {
  mainTitle.textContent = "Kategoriler";
  categoryGrid.style.display = "";
  shortcutGrid.style.display = "none";
  backBtn.style.display = "none";
  categoryGrid.innerHTML = "";
  data.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.textContent = cat.category;
    card.onclick = () => showShortcuts(cat);
    categoryGrid.appendChild(card);
  });
}

// Kısayolları göster
function showShortcuts(categoryObj) {
  mainTitle.textContent = categoryObj.category;
  categoryGrid.style.display = "none";
  shortcutGrid.style.display = "";
  backBtn.style.display = "";
  shortcutGrid.innerHTML = "";
  categoryObj.shortcuts.forEach(sc => {
    const card = document.createElement('div');
    card.className = 'shortcut-card';
    card.onclick = () => window.open(sc.url, '_blank');

    // Resim alanı
    if (sc.img && sc.img.trim() !== "") {
      const img = document.createElement('img');
      img.src = sc.img;
      img.className = 'shortcut-img';
      img.alt = sc.name + " logosu";
      card.appendChild(img);
    }

    const title = document.createElement('div');
    title.className = 'shortcut-title';
    title.textContent = sc.name;
    const desc = document.createElement('div');
    desc.className = 'shortcut-desc';
    desc.textContent = sc.description;
    const link = document.createElement('a');
    link.className = 'shortcut-link';
    link.href = sc.url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = "Git";
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);
    shortcutGrid.appendChild(card);
  });
}

// Geri dön
backBtn.onclick = showCategories;

// Sayfa ilk açıldığında kategori seçimi göster
showCategories();
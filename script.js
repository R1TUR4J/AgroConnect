// ==================== 1. CORE CATEGORIES & SEED DATA ====================

const INITIAL_CATEGORIES = [
  {
    id: 'Agriculture & Farming',
    icon: '🌾',
    desc: 'Rice, wheat, vegetables, pulses, spices, organic agricultural crops & seeds'
  },
  {
    id: 'Bakery & Homemade Food',
    icon: '🥖',
    desc: 'Cakes, biscuits, cookies, bread, homemade snacks, pickles, jams & spices'
  },
  {
    id: 'Bamboo, Cane & Wooden Products',
    icon: '🎍',
    desc: 'Treated bamboo furniture, cane baskets, wooden furniture & handmade crafts'
  },
  {
    id: 'Handloom & Textiles',
    icon: '🧶',
    desc: 'Traditional Assamese garments, Phulam Gamocha, Mekhela Chador & Muga/Eri fabrics'
  },
  {
    id: 'Handicrafts & Handmade Products',
    icon: '🏺',
    desc: 'Handmade decorations, paintings, artwork, traditional jewellery & home decor'
  },
  {
    id: 'Small Manufacturing & Other Products',
    icon: '⚙️',
    desc: 'Locally manufactured goods, household products, eco-packaging & utility items'
  },
  {
    id: 'Electronics',
    icon: '🔌',
    desc: 'IoT agricultural sensors, solar dryers, custom embedded controllers & local hardware'
  },
  {
    id: 'Others',
    icon: '📦',
    desc: 'Specialty regional goods, bio-fertilizers, apiculture & multi-purpose supplies'
  }
];

const INITIAL_SELLERS = [
  {
    name: 'Kaziranga Cane & Bamboo Craft',
    category: 'Bamboo, Cane & Wooden Products',
    location: 'Golaghat, Assam',
    phone: '+91 94350-11223',
    icon: '🎍',
    bio: 'Master bamboo & cane artisans crafting treated Borak bamboo furniture and eco-resort interiors.'
  },
  {
    name: 'Brahmaputra Organic Farmers Co-op',
    category: 'Agriculture & Farming',
    location: 'Jorhat, Assam',
    phone: '+91 98642-33445',
    icon: '🌾',
    bio: 'Collective of 140+ river-island organic farmers producing GI-tagged Joha rice, mustard seeds, and spices.'
  },
  {
    name: 'Sualkuchi Heritage Looms',
    category: 'Handloom & Textiles',
    location: 'Guwahati, Assam',
    phone: '+91 99540-77889',
    icon: '🧶',
    bio: 'Authentic handwoven Muga, Eri, and Paat silk Mekhela Chadors and traditional Assamese Gamocha.'
  },
  {
    name: 'Brahmaputra Embedded & AgroTech Labs',
    category: 'Electronics',
    location: 'Golaghat, Assam',
    phone: '+91 86380-55667',
    icon: '🔌',
    bio: 'Local electronics & hardware manufacturers building solar crop dryers, soil moisture IoT nodes, and smart controllers.'
  },
  {
    name: 'Dibrugarh Homemade Delights',
    category: 'Bakery & Homemade Food',
    location: 'Dibrugarh, Assam',
    phone: '+91 97060-99001',
    icon: '🥖',
    bio: 'Artisanal food processors crafting Bhut Jolokia bamboo shoot pickles, sourdough breads, and traditional snacks.'
  }
];

const INITIAL_PRODUCTS = [
  {
    id: 'PRD-101',
    name: 'Handcrafted Treated Bamboo Lounge Armchair',
    sellerName: 'Kaziranga Cane & Bamboo Craft',
    category: 'Bamboo, Cane & Wooden Products',
    specs: 'Seasoned Borak Bamboo, Anti-Termite Borax Treated, Cane Weave Backrest',
    quantity: 50,
    unit: 'pieces',
    price: 1500,
    location: 'Golaghat, Assam',
    delivery: 'Both Direct Pickup & Transport Delivery Available',
    description: 'Ergonomic bamboo armchair built by master artisans in Golaghat. Ideal for homes, cafes, eco-resorts, and wholesale furniture buyers.',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80'
    ],
    available: true,
    popular: true
  },
  {
    id: 'PRD-102',
    name: 'Smart Solar Soil Moisture & Tea-Garden IoT Sensor Node',
    sellerName: 'Brahmaputra Embedded & AgroTech Labs',
    category: 'Electronics',
    specs: 'ESP32 LoRaWAN, 5W Solar Panel, IP67 Weatherproof Enclosure, 2-Year Warranty',
    quantity: 35,
    unit: 'units',
    price: 2450,
    location: 'Golaghat, Assam',
    delivery: 'All-India Courier & Freight Available',
    description: 'Locally assembled precision agricultural electronics module for tea estates, greenhouses, and progressive farmers. Streams real-time soil moisture and temperature data.',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    ],
    available: true,
    popular: true
  },
  {
    id: 'PRD-103',
    name: 'Organic GI-Tagged Assam Winter Joha Rice',
    sellerName: 'Brahmaputra Organic Farmers Co-op',
    category: 'Agriculture & Farming',
    specs: '100% Organic Unpolished Aromatic Grain, Moisture <12%, Farm-Gate Graded',
    quantity: 600,
    unit: 'kg',
    price: 95,
    location: 'Jorhat, Assam',
    delivery: 'Pan-Assam & Northeast Logistics Delivery',
    description: 'Naturally aromatic winter Joha rice cultivated without synthetic chemicals. Packed in 25kg/50kg food-grade jute bags for wholesale buyers.',
    images: [
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80'
    ],
    available: true,
    popular: true
  },
  {
    id: 'PRD-104',
    name: 'Handwoven Pure Paat & Muga Silk Mekhela Chador',
    sellerName: 'Sualkuchi Heritage Looms',
    category: 'Handloom & Textiles',
    specs: 'Pure Mulberry & Golden Muga Zari Kingkhap Motifs, Silk Mark Certified',
    quantity: 20,
    unit: 'sets',
    price: 4200,
    location: 'Guwahati, Assam',
    delivery: 'All-India Courier & Freight Available',
    description: 'Heirloom-grade Assamese Mekhela Chador woven on traditional looms in Sualkuchi. Ready for boutique investors and festive textile buyers.',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
    ],
    available: true,
    popular: true
  },
  {
    id: 'PRD-105',
    name: 'Artisanal Bhut Jolokia & Fermented Bamboo Shoot Pickle',
    sellerName: 'Dibrugarh Homemade Delights',
    category: 'Bakery & Homemade Food',
    specs: 'Cold-Pressed Mustard Oil, Zero Synthetic Preservatives, 500g Glass Jar',
    quantity: 150,
    unit: 'packets',
    price: 210,
    location: 'Dibrugarh, Assam',
    delivery: 'Pan-Assam & Northeast Logistics Delivery',
    description: 'Small-batch homemade Assamese King Chilli and tender bamboo shoot pickle crafted by women entrepreneurs in Dibrugarh.',
    images: [
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
    ],
    available: true,
    popular: false
  },
  {
    id: 'PRD-106',
    name: 'Handcrafted Cane Hanging Lampshade & Decor Trio',
    sellerName: 'Kaziranga Cane & Bamboo Craft',
    category: 'Handicrafts & Handmade Products',
    specs: 'Natural Polished Assam Cane, Warm LED Holder Compatible',
    quantity: 40,
    unit: 'sets',
    price: 1150,
    location: 'Golaghat, Assam',
    delivery: 'Both Direct Pickup & Transport Delivery Available',
    description: 'Intricately woven cane pendant lampshades designed for modern interiors, restaurants, and handicraft exporters.',
    images: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80'
    ],
    available: true,
    popular: false
  },
  {
    id: 'PRD-107',
    name: 'Eco-Friendly Biodegradable Areca Leaf Plates (Pack of 100)',
    sellerName: 'Sivasagar Eco Manufacturing Unit',
    category: 'Small Manufacturing & Other Products',
    specs: '12-Inch Heavy Duty Heat-Pressed Natural Sheath, Chemical-Free',
    quantity: 300,
    unit: 'packets',
    price: 340,
    location: 'Sivasagar, Assam',
    delivery: 'Pan-Assam & Northeast Logistics Delivery',
    description: 'Locally manufactured compostable dinnerware produced from fallen betel nut sheaths. High demand for catering and eco-retail.',
    images: [
      'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80'
    ],
    available: true,
    popular: false
  },
  {
    id: 'PRD-108',
    name: 'Raw Forest Stingless Bee Medicinal Honey',
    sellerName: 'Majuli Natural Apiculture Collective',
    category: 'Others',
    specs: 'Unheated Raw Putka Honey, NMR Tested Purity, 250ml Bottle',
    quantity: 65,
    unit: 'units',
    price: 650,
    location: 'Majuli, Assam',
    delivery: 'All-India Courier & Freight Available',
    description: 'Rare medicinal forest honey harvested sustainably by indigenous beekeepers in Majuli.',
    images: [
      'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80'
    ],
    available: true,
    popular: false
  }
];

const INITIAL_NEGOTIATIONS = [
  {
    id: 'NEG-501',
    productId: 'PRD-101',
    productName: 'Handcrafted Treated Bamboo Lounge Armchair',
    sellerName: 'Kaziranga Cane & Bamboo Craft',
    buyerName: 'Northeast Eco-Resorts & Retail Pvt Ltd',
    unit: 'pieces',
    listedPrice: 1500,
    requestedQty: 20,
    currentOfferPrice: 1200,
    lastActor: 'buyer',
    status: 'PENDING',
    createdAt: 'Today, 09:40 AM',
    history: [
      {
        actor: 'Northeast Eco-Resorts & Retail Pvt Ltd (Investor)',
        action: 'Submitted Purchase Request: 20 pieces at proposed price ₹1,200/piece (Seller expected: ₹1,500)',
        time: '09:40 AM'
      }
    ]
  },
  {
    id: 'NEG-502',
    productId: 'PRD-102',
    productName: 'Smart Solar Soil Moisture & Tea-Garden IoT Sensor Node',
    sellerName: 'Brahmaputra Embedded & AgroTech Labs',
    buyerName: 'Upper Assam Tea Estates Consortium',
    unit: 'units',
    listedPrice: 2450,
    requestedQty: 15,
    currentOfferPrice: 2300,
    lastActor: 'seller',
    status: 'COUNTERED',
    createdAt: 'Today, 11:10 AM',
    history: [
      {
        actor: 'Upper Assam Tea Estates Consortium (Investor)',
        action: 'Submitted Purchase Request: 15 units at proposed price ₹2,150/unit',
        time: '10:50 AM'
      },
      {
        actor: 'Brahmaputra Embedded & AgroTech Labs (Seller)',
        action: 'Sent Counteroffer: ₹2,300/unit including free LoRa gateway calibration',
        time: '11:10 AM'
      }
    ]
  }
];

const INITIAL_THREADS = [
  {
    id: 'THD-1',
    productId: 'PRD-101',
    productName: 'Handcrafted Treated Bamboo Lounge Armchair',
    sellerName: 'Kaziranga Cane & Bamboo Craft',
    buyerName: 'Northeast Eco-Resorts & Retail Pvt Ltd',
    messages: [
      {
        type: 'system',
        text: 'Purchase Request #NEG-501 submitted: 20 pieces @ ₹1,200/piece',
        time: '09:40 AM'
      },
      {
        type: 'user',
        senderRole: 'buyer',
        senderName: 'Northeast Eco-Resorts & Retail Pvt Ltd',
        text: 'Namaskar! We are furnishing 10 cottages near Kaziranga and need 20 bamboo lounge chairs. Can we close at ₹1,200 per chair if we arrange pickup from Golaghat?',
        time: '09:42 AM'
      },
      {
        type: 'user',
        senderRole: 'seller',
        senderName: 'Kaziranga Cane & Bamboo Craft',
        text: 'Namaskar! Every chair uses seasoned Borak bamboo treated against termites. Let us review your proposal in the Negotiation Centre—we can offer a fair bulk rate.',
        time: '09:50 AM'
      }
    ]
  }
];

const INITIAL_NOTIFICATIONS = [
  {
    id: 'NTF-1',
    text: 'New Purchase Request (#NEG-501): 20 pieces of Bamboo Armchair proposed at ₹1,200/piece.',
    targetView: 'negotiations',
    unread: true,
    time: '09:40 AM'
  },
  {
    id: 'NTF-2',
    text: 'Counteroffer Alert (#NEG-502): Seller proposed ₹2,300/unit for 15 IoT Sensor Nodes.',
    targetView: 'negotiations',
    unread: true,
    time: '11:10 AM'
  }
];

// ==================== 2. APPLICATION STATE ====================

let state = {
  currentUser: JSON.parse(localStorage.getItem('ac_ent_user')) || {
    name: 'Kaziranga Cane & Bamboo Craft',
    role: 'seller', // 'seller' | 'buyer' | 'admin'
    category: 'Bamboo, Cane & Wooden Products',
    location: 'Golaghat, Assam',
    phone: '+91 94350-11223',
    bio: 'Master bamboo & cane artisans crafting treated Borak bamboo furniture and eco-resort interiors.'
  },
  categories: JSON.parse(localStorage.getItem('ac_ent_categories')) || INITIAL_CATEGORIES,
  sellers: JSON.parse(localStorage.getItem('ac_ent_sellers')) || INITIAL_SELLERS,
  products: JSON.parse(localStorage.getItem('ac_ent_products')) || INITIAL_PRODUCTS,
  negotiations: JSON.parse(localStorage.getItem('ac_ent_negotiations')) || INITIAL_NEGOTIATIONS,
  orders: JSON.parse(localStorage.getItem('ac_ent_orders')) || [
    {
      id: 'ORD-9001',
      negId: 'NEG-490',
      productName: 'Organic GI-Tagged Assam Winter Joha Rice',
      sellerName: 'Brahmaputra Organic Farmers Co-op',
      buyerName: 'Northeast Eco-Resorts & Retail Pvt Ltd',
      qty: 100,
      unit: 'kg',
      listedPrice: 95,
      agreedPrice: 90,
      totalValue: 9000,
      location: 'Jorhat, Assam',
      date: '12 Nov 2026'
    }
  ],
  threads: JSON.parse(localStorage.getItem('ac_ent_threads')) || INITIAL_THREADS,
  notifications: JSON.parse(localStorage.getItem('ac_ent_notifs')) || INITIAL_NOTIFICATIONS,
  activeCategoryTab: 'Agriculture & Farming',
  activeProductId: 'PRD-101',
  activeSellerProfile: 'Kaziranga Cane & Bamboo Craft',
  activeThreadId: 'THD-1',
  negFilter: 'ALL',
  stagedUploadImages: [],
  cameraStream: null
};

function persistState() {
  localStorage.setItem('ac_ent_user', JSON.stringify(state.currentUser));
  localStorage.setItem('ac_ent_categories', JSON.stringify(state.categories));
  localStorage.setItem('ac_ent_sellers', JSON.stringify(state.sellers));
  localStorage.setItem('ac_ent_products', JSON.stringify(state.products));
  localStorage.setItem('ac_ent_negotiations', JSON.stringify(state.negotiations));
  localStorage.setItem('ac_ent_orders', JSON.stringify(state.orders));
  localStorage.setItem('ac_ent_threads', JSON.stringify(state.threads));
  localStorage.setItem('ac_ent_notifs', JSON.stringify(state.notifications));
  refreshHeaderAndBadges();
}

// ==================== 3. INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('globalRoleSelect').value = state.currentUser.role;
  populateAllCategoryDropdowns();
  refreshHeaderAndBadges();
  renderHomeView();
  renderMarketplace();
  renderCategoryPages();
});

function refreshHeaderAndBadges() {
  document.getElementById('navUserName').textContent = state.currentUser.name;
  document.getElementById('navUserRole').textContent =
    state.currentUser.role === 'seller'
      ? `Seller • ${state.currentUser.location}`
      : state.currentUser.role === 'buyer'
      ? `Investor / Buyer • ${state.currentUser.location}`
      : 'Platform Administrator';
  document.getElementById('navUserAvatar').textContent = state.currentUser.name.charAt(0).toUpperCase();

  const unreadCount = state.notifications.filter(n => n.unread).length;
  document.getElementById('notifBadge').textContent = unreadCount;

  const openNegs = state.negotiations.filter(n => n.status === 'PENDING' || n.status === 'COUNTERED').length;
  document.getElementById('subnavReqBadge').textContent = state.negotiations.length;
  document.getElementById('subnavNegBadge').textContent = openNegs;
  document.getElementById('subnavMsgBadge').textContent = state.threads.length;

  renderNotificationList();
}

function populateAllCategoryDropdowns() {
  const heroSelect = document.getElementById('heroCategorySelect');
  const fltCategory = document.getElementById('fltCategory');
  const inpProdCategory = document.getElementById('inpProdCategory');
  const sellerAuthCat = document.getElementById('sellerAuthCat');

  const allOptions =
    `<option value="ALL">All Categories</option>` +
    state.categories.map(c => `<option value="${c.id}">${c.icon} ${c.id}</option>`).join('');

  if (heroSelect) heroSelect.innerHTML = allOptions;
  if (fltCategory) fltCategory.innerHTML = allOptions;

  const formOptions =
    state.categories.map(c => `<option value="${c.id}">${c.icon} ${c.id}</option>`).join('') +
    `<option value="CUSTOM">+ Add New Custom Category...</option>`;

  if (inpProdCategory) inpProdCategory.innerHTML = formOptions;
  if (sellerAuthCat) {
    sellerAuthCat.innerHTML = state.categories
      .map(c => `<option value="${c.id}">${c.icon} ${c.id}</option>`)
      .join('');
  }
}

// ==================== 4. ROUTER & ROLE MANAGEMENT ====================

function navigateTo(viewId) {
  stopCameraIfRunning();
  document.querySelectorAll('.page-view').forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(`view-${viewId}`);
  if (target) target.classList.add('active');

  document.querySelectorAll('.subnav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewId);
  });

  if (viewId === 'home') renderHomeView();
  if (viewId === 'marketplace') renderMarketplace();
  if (viewId === 'categories') renderCategoryPages();
  if (viewId === 'product-details') renderProductDetailsPage();
  if (viewId === 'seller-dashboard') renderSellerDashboard();
  if (viewId === 'buyer-dashboard') renderBuyerDashboard();
  if (viewId === 'my-products') renderMyProductsPage();
  if (viewId === 'purchase-requests') renderPurchaseRequestsPage();
  if (viewId === 'negotiations') renderNegotiationsPage();
  if (viewId === 'messages') renderMessagesPage();
  if (viewId === 'orders') renderOrdersPage();
  if (viewId === 'seller-profile') renderSellerProfilePage();
  if (viewId === 'admin-dashboard') renderAdminDashboard();
  if (viewId === 'auth-seller') prefillSellerAuth();
  if (viewId === 'auth-buyer') prefillBuyerAuth();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleRoleChange(newRole) {
  state.currentUser.role = newRole;
  if (newRole === 'buyer' && state.currentUser.name === 'Kaziranga Cane & Bamboo Craft') {
    state.currentUser.name = 'Northeast Eco-Resorts & Retail Pvt Ltd';
    state.currentUser.category = 'Wholesale Investor & Distributor';
    state.currentUser.location = 'Guwahati, Assam';
  } else if (newRole === 'seller' && state.currentUser.name === 'Northeast Eco-Resorts & Retail Pvt Ltd') {
    state.currentUser.name = 'Kaziranga Cane & Bamboo Craft';
    state.currentUser.category = 'Bamboo, Cane & Wooden Products';
    state.currentUser.location = 'Golaghat, Assam';
  }
  persistState();
  showToast(`Switched active workspace role to ${newRole.toUpperCase()}`);

  if (newRole === 'seller') navigateTo('seller-dashboard');
  else if (newRole === 'buyer') navigateTo('buyer-dashboard');
  else navigateTo('admin-dashboard');
}

// ==================== 5. NOTIFICATIONS ====================

function toggleNotificationDrawer() {
  document.getElementById('notifDrawer').classList.toggle('hidden');
}

function renderNotificationList() {
  const list = document.getElementById('notifList');
  if (!list) return;
  if (state.notifications.length === 0) {
    list.innerHTML = `<div class="notif-item text-muted">No notifications yet.</div>`;
    return;
  }
  list.innerHTML = state.notifications
    .map(
      n => `
    <div class="notif-item ${n.unread ? 'unread' : ''}" onclick="openNotification('${n.id}', '${n.targetView}')">
      <div>${n.text}</div>
      <small class="text-muted">${n.time}</small>
    </div>
  `
    )
    .join('');
}

function openNotification(id, view) {
  const notif = state.notifications.find(n => n.id === id);
  if (notif) notif.unread = false;
  document.getElementById('notifDrawer').classList.add('hidden');
  persistState();
  navigateTo(view);
}

function markAllNotificationsRead() {
  state.notifications.forEach(n => (n.unread = false));
  persistState();
}

function pushNotification(text, targetView = 'negotiations') {
  state.notifications.unshift({
    id: 'NTF-' + Date.now(),
    text,
    targetView,
    unread: true,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
  persistState();
}

// ==================== 6. HOME PAGE RENDERER ====================

function renderHomeView() {
  document.getElementById('heroStatProducts').textContent = state.products.length;

  // Categories Grid
  const catGrid = document.getElementById('homeCategoryGrid');
  catGrid.innerHTML = state.categories
    .map(c => {
      const count = state.products.filter(p => p.category === c.id).length;
      return `
      <div class="category-card" onclick="openCategoryPage('${c.id}')">
        <div>
          <div class="category-card-top">
            <span class="cat-emoji">${c.icon || '📦'}</span>
            <span class="Category-count">${count} Listings</span>
          </div>
          <h4>${c.id}</h4>
          <p>${c.desc}</p>
        </div>
      </div>
    `;
    })
    .join('');

  // Recently Added Products (first 4)
  document.getElementById('homeRecentGrid').innerHTML = state.products
    .slice(0, 4)
    .map(p => buildProductCardHTML(p))
    .join('');

  // Popular Products
  const popular = state.products.filter(p => p.popular).slice(0, 4);
  document.getElementById('homePopularGrid').innerHTML = (popular.length ? popular : state.products.slice(0, 4))
    .map(p => buildProductCardHTML(p))
    .join('');

  // Featured Producers
  document.getElementById('homeProducersGrid').innerHTML = state.sellers
    .map(
      s => `
    <div class="producer-card" onclick="openSellerProfile('${s.name}')">
      <div class="producer-head">
        <div class="producer-icon">${s.icon || '🏭'}</div>
        <div>
          <h4>${s.name}</h4>
          <span class="text-muted" style="font-size:0.78rem;">📍 ${s.location}</span>
        </div>
      </div>
      <div class="Category-count" style="display:inline-block;margin-bottom:8px;">${s.category}</div>
      <p class="text-muted" style="font-size:0.82rem;">${s.bio}</p>
    </div>
  `
    )
    .join('');
}

function runHeroSearch() {
  const q = document.getElementById('heroSearchField').value.trim();
  const cat = document.getElementById('heroCategorySelect').value;
  document.getElementById('fltSearch').value = q;
  document.getElementById('fltCategory').value = cat;
  navigateTo('marketplace');
}

function triggerGlobalSearch() {
  const q = document.getElementById('globalSearchInput').value.trim();
  document.getElementById('fltSearch').value = q;
  navigateTo('marketplace');
}

// ==================== 7. PRODUCT CARD & MARKETPLACE ====================

function buildProductCardHTML(p) {
  const outOfStock = !p.available || p.quantity <= 0;
  return `
    <div class="product-card">
      <div class="p-media" onclick="openProductDetails('${p.id}')">
        <img src="${p.images[0]}" alt="${p.name}" />
        <span class="p-cat-tag">${p.category}</span>
        <span class="p-stock-tag ${outOfStock ? 'soldout' : ''}">
          ${outOfStock ? 'Sold / Unavailable' : `${p.quantity} ${p.unit} in stock`}
        </span>
      </div>
      <div class="p-content">
        <div class="p-title" onclick="openProductDetails('${p.id}')">${p.name}</div>
        <div class="p-seller">
          Producer: <strong style="cursor:pointer;text-decoration:underline;" onclick="openSellerProfile('${p.sellerName}')">${p.sellerName}</strong> • 📍 ${p.location}
        </div>
        <div class="p-spec">${p.specs}</div>

        <div class="p-pricing">
          <div>
            <span class="p-price-val">₹${p.price.toLocaleString('en-IN')}</span>
            <span class="p-unit">/ ${p.unit}</span>
          </div>
          <span class="Category-count">Direct Negotiation</span>
        </div>

        <div class="p-btn-group">
          <button class="btn btn-outline btn-sm" onclick="openProductDetails('${p.id}')">View Details</button>
          <button class="btn btn-outline btn-sm" onclick="initiateChatWithSeller('${p.id}')">Contact Seller</button>
          <button class="btn btn-primary btn-sm span-full" ${outOfStock ? 'disabled' : ''} onclick="openPurchaseModal('${p.id}')">
            ${outOfStock ? 'Marked Sold / Unavailable' : 'Send Purchase Request'}
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderMarketplace() {
  const q = (document.getElementById('fltSearch')?.value || '').toLowerCase().trim();
  const cat = document.getElementById('fltCategory')?.value || 'ALL';
  const loc = document.getElementById('fltLocation')?.value || 'ALL';
  const maxPrice = Number(document.getElementById('fltMaxPrice')?.value || 0);
  const sort = document.getElementById('fltSort')?.value || 'NEWEST';

  let list = state.products.filter(p => {
    const matchText =
      p.name.toLowerCase().includes(q) ||
      p.sellerName.toLowerCase().includes(q) ||
      p.specs.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    const matchCat = cat === 'ALL' || p.category === cat;
    const matchLoc = loc === 'ALL' || p.location.toLowerCase().includes(loc.toLowerCase());
    const matchPrice = !maxPrice || p.price <= maxPrice;
    return matchText && matchCat && matchLoc && matchPrice;
  });

  if (sort === 'PRICE_ASC') list.sort((a, b) => a.price - b.price);
  if (sort === 'PRICE_DESC') list.sort((a, b) => b.price - a.price);
  if (sort === 'STOCK_DESC') list.sort((a, b) => b.quantity - a.quantity);

  document.getElementById('marketplaceResultCount').textContent =
    `Showing ${list.length} verified producer listing(s)`;

  const grid = document.getElementById('marketplaceGrid');
  if (list.length === 0) {
    grid.innerHTML = `<div class="panel-card"><p class="text-muted">No products match your filter criteria. Click Reset to view all listings.</p></div>`;
    return;
  }
  grid.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
}

function resetMarketplaceFilters() {
  document.getElementById('fltSearch').value = '';
  document.getElementById('fltCategory').value = 'ALL';
  document.getElementById('fltLocation').value = 'ALL';
  document.getElementById('fltMaxPrice').value = '';
  document.getElementById('fltSort').value = 'NEWEST';
  renderMarketplace();
}

// ==================== 8. CATEGORY PAGES (PAGE 7) ====================

function openCategoryPage(categoryId) {
  state.activeCategoryTab = categoryId;
  navigateTo('categories');
}

function renderCategoryPages() {
  const tabsBar = document.getElementById('categoryTabsBar');
  tabsBar.innerHTML = state.categories
    .map(
      c => `
    <button class="cat-tab-btn ${c.id === state.activeCategoryTab ? 'active' : ''}" onclick="openCategoryPage('${c.id}')">
      ${c.icon} ${c.id}
    </button>
  `
    )
    .join('');

  const activeCat = state.categories.find(c => c.id === state.activeCategoryTab) || state.categories[0];
  const filtered = state.products.filter(p => p.category === activeCat.id);

  document.getElementById('categoryPageHeader').innerHTML = `
    <div>
      <h3>${activeCat.icon} ${activeCat.id}</h3>
      <p class="text-muted">${activeCat.desc}</p>
    </div>
    <button class="btn btn-primary btn-sm" onclick="navigateTo('add-product')">+ List Product in ${activeCat.id}</button>
  `;

  const prodGrid = document.getElementById('categoryPageProducts');
  if (filtered.length === 0) {
    prodGrid.innerHTML = `<div class="panel-card"><p class="text-muted">No products listed in "${activeCat.id}" yet. Sellers can add products to this category right away.</p></div>`;
  } else {
    prodGrid.innerHTML = filtered.map(p => buildProductCardHTML(p)).join('');
  }
}

// ==================== 9. DEDICATED PRODUCT DETAILS PAGE (PAGE 8) ====================

function openProductDetails(productId) {
  state.activeProductId = productId;
  navigateTo('product-details');
}

function renderProductDetailsPage() {
  const p = state.products.find(item => item.id === state.activeProductId) || state.products[0];
  if (!p) return;

  const outOfStock = !p.available || p.quantity <= 0;
  const thumbs = p.images
    .map(
      img => `
    <img src="${img}" onclick="document.getElementById('detailPrimaryImg').src='${img}'" />
  `
    )
    .join('');

  document.getElementById('productDetailsContainer').innerHTML = `
    <div class="details-card">
      <div>
        <img id="detailPrimaryImg" class="details-main-img" src="${p.images[0]}" alt="${p.name}" />
        <div class="details-thumbs">${thumbs}</div>
      </div>
      <div>
        <span class="Category-count">${p.category}</span>
        <h2 style="margin:8px 0;">${p.name}</h2>
        <p class="text-muted" style="margin-bottom:14px;">
          Listed by <strong style="cursor:pointer;color:var(--brand-700);" onclick="openSellerProfile('${p.sellerName}')">${p.sellerName}</strong> • 📍 ${p.location}
        </p>

        <div style="background:var(--slate-50);padding:16px;border-radius:10px;border:1px solid var(--slate-200);margin-bottom:16px;">
          <div style="font-size:0.8rem;color:var(--slate-500);">Expected Selling Price (Seller Controlled)</div>
          <div style="font-size:1.8rem;font-weight:800;color:var(--brand-800);">
            ₹${p.price.toLocaleString('en-IN')} <span style="font-size:0.95rem;font-weight:500;">per ${p.unit}</span>
          </div>
          <div style="margin-top:6px;font-size:0.85rem;">
            Stock Status: <strong>${outOfStock ? 'Sold / Unavailable' : `${p.quantity} ${p.unit} Available`}</strong>
          </div>
        </div>

        <p style="margin-bottom:8px;font-size:0.9rem;"><strong>Quality & Specifications:</strong> ${p.specs}</p>
        <p style="margin-bottom:12px;font-size:0.9rem;"><strong>Delivery / Pickup:</strong> ${p.delivery}</p>
        <p class="text-muted" style="margin-bottom:20px;">${p.description}</p>

        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn btn-primary" ${outOfStock ? 'disabled' : ''} onclick="openPurchaseModal('${p.id}')">
            Send Purchase Request & Propose Price
          </button>
          <button class="btn btn-outline" onclick="initiateChatWithSeller('${p.id}')">
            💬 Message Seller Directly
          </button>
          <button class="btn btn-outline" onclick="openSellerProfile('${p.sellerName}')">
            View Seller Profile
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==================== 10. MULTI-IMAGE & LIVE WEBRTC CAMERA UPLOAD (PAGE 9) ====================

function resetAndOpenAddProduct() {
  document.getElementById('editProductId').value = '';
  document.getElementById('productFormHeading').textContent = 'Add New Product Listing';
  document.getElementById('productListingForm').reset();
  document.getElementById('inpProdLocation').value = state.currentUser.location || 'Golaghat, Assam';
  state.stagedUploadImages = [];
  renderStagedUploadThumbnails();
  navigateTo('add-product');
}

function handleCategoryDropdownChange(val) {
  const box = document.getElementById('customCatBox');
  const inp = document.getElementById('inpCustomCategory');
  if (val === 'CUSTOM') {
    box.classList.remove('hidden');
    inp.required = true;
  } else {
    box.classList.add('hidden');
    inp.required = false;
  }
}

function handleFileSelect(event) {
  const files = Array.from(event.target.files);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      state.stagedUploadImages.push(e.target.result);
      renderStagedUploadThumbnails();
    };
    reader.readAsDataURL(file);
  });
}

async function openCameraStream() {
  const box = document.getElementById('cameraModalBox');
  const video = document.getElementById('cameraVideo');
  box.classList.remove('hidden');
  try {
    state.cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
      audio: false
    });
    video.srcObject = state.cameraStream;
  } catch (err) {
    showToast('Camera permission unavailable on this device. Please use "Upload Images" instead.');
    box.classList.add('hidden');
  }
}

function captureCameraFrame() {
  const video = document.getElementById('cameraVideo');
  const canvas = document.getElementById('cameraCanvas');
  if (!video.videoWidth) return;
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
  state.stagedUploadImages.push(dataUrl);
  renderStagedUploadThumbnails();
  showToast('Photograph captured and added to product gallery!');
  closeCameraStream();
}

function closeCameraStream() {
  stopCameraIfRunning();
  document.getElementById('cameraModalBox').classList.add('hidden');
}

function stopCameraIfRunning() {
  if (state.cameraStream) {
    state.cameraStream.getTracks().forEach(t => t.stop());
    state.cameraStream = null;
  }
}

function renderStagedUploadThumbnails() {
  const grid = document.getElementById('stagedImagesGrid');
  if (!grid) return;
  if (state.stagedUploadImages.length === 0) {
    grid.innerHTML = `<p class="text-muted">No product images staged yet. Upload real product photos or capture via camera.</p>`;
    return;
  }
  grid.innerHTML = state.stagedUploadImages
    .map(
      (img, idx) => `
    <div class="staged-thumb">
      <img src="${img}" alt="Upload ${idx + 1}" />
      <div class="staged-thumb-actions">
        <label style="cursor:pointer;font-size:0.7rem;border:1px solid #cbd5e1;padding:2px 6px;border-radius:4px;">
          Replace
          <input type="file" accept="image/*" hidden onchange="replaceStagedImage(event, ${idx})" />
        </label>
        <button type="button" onclick="deleteStagedImage(${idx})" style="color:var(--danger-600);">Delete</button>
      </div>
    </div>
  `
    )
    .join('');
}

function replaceStagedImage(event, index) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    state.stagedUploadImages[index] = e.target.result;
    renderStagedUploadThumbnails();
  };
  reader.readAsDataURL(file);
}

function deleteStagedImage(index) {
  state.stagedUploadImages.splice(index, 1);
  renderStagedUploadThumbnails();
}

function saveProductListing(event) {
  event.preventDefault();

  let cat = document.getElementById('inpProdCategory').value;
  if (cat === 'CUSTOM') {
    const customName = document.getElementById('inpCustomCategory').value.trim();
    if (!customName) return;
    cat = customName;
    if (!state.categories.some(c => c.id.toLowerCase() === customName.toLowerCase())) {
      state.categories.push({
        id: customName,
        icon: '✨',
        desc: 'Custom producer category added by seller'
      });
      populateAllCategoryDropdowns();
    }
  }

  const images =
    state.stagedUploadImages.length > 0
      ? [...state.stagedUploadImages]
      : ['https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'];

  const editId = document.getElementById('editProductId').value;
  if (editId) {
    const existing = state.products.find(p => p.id === editId);
    if (existing) {
      existing.name = document.getElementById('inpProdName').value.trim();
      existing.category = cat;
      existing.specs = document.getElementById('inpProdSpecs').value.trim();
      existing.location = document.getElementById('inpProdLocation').value.trim();
      existing.quantity = Number(document.getElementById('inpProdQty').value);
      existing.unit = document.getElementById('inpProdUnit').value;
      existing.price = Number(document.getElementById('inpProdPrice').value);
      existing.delivery = document.getElementById('inpProdDelivery').value;
      existing.description = document.getElementById('inpProdDesc').value.trim();
      existing.images = images;
      existing.available = existing.quantity > 0;
    }
    showToast('Product listing updated!');
  } else {
    const newProd = {
      id: 'PRD-' + Math.floor(100 + Math.random() * 900),
      name: document.getElementById('inpProdName').value.trim(),
      sellerName: state.currentUser.name,
      category: cat,
      specs: document.getElementById('inpProdSpecs').value.trim(),
      quantity: Number(document.getElementById('inpProdQty').value),
      unit: document.getElementById('inpProdUnit').value,
      price: Number(document.getElementById('inpProdPrice').value),
      location: document.getElementById('inpProdLocation').value.trim(),
      delivery: document.getElementById('inpProdDelivery').value,
      description: document.getElementById('inpProdDesc').value.trim(),
      images,
      available: true,
      popular: false
    };
    state.products.unshift(newProd);
    showToast('New product published to AgroConnect Marketplace!');
  }

  state.stagedUploadImages = [];
  document.getElementById('productListingForm').reset();
  persistState();
  navigateTo('my-products');
}

// ==================== 11. MY PRODUCTS MANAGER (PAGE 10) ====================

function renderMyProductsPage() {
  const container = document.getElementById('myProductsContainer');
  container.innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Seller</th>
          <th>Stock</th>
          <th>Expected Price</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${state.products
          .map(
            p => `
          <tr>
            <td>
              <div style="display:flex;align-items:center;gap:10px;">
                <img src="${p.images[0]}" style="width:46px;height:46px;border-radius:6px;object-fit:cover;" />
                <div>
                  <strong>${p.name}</strong>
                  <div class="text-muted" style="font-size:0.76rem;">📍 ${p.location}</div>
                </div>
              </div>
            </td>
            <td>${p.category}</td>
            <td>${p.sellerName}</td>
            <td><strong>${p.quantity} ${p.unit}</strong></td>
            <td><strong>₹${p.price.toLocaleString('en-IN')}/${p.unit}</strong></td>
            <td>
              <span class="status-badge ${p.available && p.quantity > 0 ? 'status-ACCEPTED' : 'status-REJECTED'}">
                ${p.available && p.quantity > 0 ? 'ACTIVE' : 'SOLD / UNAVAILABLE'}
              </span>
            </td>
            <td>
              <div style="display:flex;gap:6px;flex-wrap:wrap;">
                <button class="btn btn-outline btn-sm" onclick="editProduct('${p.id}')">Edit</button>
                <button class="btn btn-outline btn-sm" onclick="toggleSoldStatus('${p.id}')">
                  ${p.available ? 'Mark Sold' : 'Mark Available'}
                </button>
                <button class="btn btn-danger btn-sm" onclick="deleteProduct('${p.id}')">Delete</button>
              </div>
            </td>
          </tr>
        `
          )
          .join('')}
      </tbody>
    </table>
  `;
}

function editProduct(productId) {
  const p = state.products.find(item => item.id === productId);
  if (!p) return;
  document.getElementById('editProductId').value = p.id;
  document.getElementById('productFormHeading').textContent = `Edit Product — ${p.name}`;
  document.getElementById('inpProdName').value = p.name;
  document.getElementById('inpProdCategory').value = p.category;
  document.getElementById('inpProdSpecs').value = p.specs;
  document.getElementById('inpProdLocation').value = p.location;
  document.getElementById('inpProdQty').value = p.quantity;
  document.getElementById('inpProdUnit').value = p.unit;
  document.getElementById('inpProdPrice').value = p.price;
  document.getElementById('inpProdDelivery').value = p.delivery;
  document.getElementById('inpProdDesc').value = p.description;
  state.stagedUploadImages = [...p.images];
  renderStagedUploadThumbnails();
  navigateTo('add-product');
}

function toggleSoldStatus(productId) {
  const p = state.products.find(item => item.id === productId);
  if (!p) return;
  p.available = !p.available;
  persistState();
  renderMyProductsPage();
  showToast(`Listing marked as ${p.available ? 'Available' : 'Sold / Unavailable'}`);
}

function deleteProduct(productId) {
  state.products = state.products.filter(item => item.id !== productId);
  persistState();
  renderMyProductsPage();
  showToast('Product listing deleted.');
}

// ==================== 12. PURCHASE REQUEST SUBMISSION & NEGOTIATION ENGINE (PAGES 11 & 12) ====================

function openPurchaseModal(productId) {
  const p = state.products.find(item => item.id === productId);
  if (!p) return;

  const content = document.getElementById('purchaseModalContent');
  content.innerHTML = `
    <div style="background:var(--slate-50);padding:12px;border-radius:8px;margin-bottom:14px;">
      <strong>${p.name}</strong>
      <div class="text-muted">Seller: ${p.sellerName} • Available Stock: ${p.quantity} ${p.unit}</div>
      <div style="color:var(--brand-800);font-weight:700;margin-top:4px;">
        Seller Expected Price: ₹${p.price.toLocaleString('en-IN')} / ${p.unit}
      </div>
    </div>
    <form onsubmit="submitPurchaseProposal(event, '${p.id}')">
      <div class="form-group">
        <label>Required Quantity (Max: ${p.quantity} ${p.unit}) *</label>
        <input type="number" id="modalReqQty" min="1" max="${p.quantity}" value="${Math.min(10, p.quantity)}" required />
      </div>
      <div class="form-group">
        <label>Your Proposed Purchase Price (₹ per ${p.unit}) *</label>
        <input type="number" id="modalReqPrice" min="1" value="${Math.round(p.price * 0.9)}" required />
      </div>
      <div class="form-group">
        <label>Enquiry / Logistics Note to Seller</label>
        <textarea id="modalReqNote" rows="2" placeholder="Specify delivery preference, payment timeline, or packaging requirement..."></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Submit Purchase Request to Seller</button>
    </form>
  `;
  document.getElementById('purchaseModal').classList.remove('hidden');
}

function closePurchaseModal() {
  document.getElementById('purchaseModal').classList.add('hidden');
}

function submitPurchaseProposal(event, productId) {
  event.preventDefault();
  const p = state.products.find(item => item.id === productId);
  if (!p) return;

  const qty = Number(document.getElementById('modalReqQty').value);
  const price = Number(document.getElementById('modalReqPrice').value);
  const note = document.getElementById('modalReqNote').value.trim();

  if (qty > p.quantity) {
    showToast('Error: Requested quantity exceeds seller available stock!');
    return;
  }

  const buyerName =
    state.currentUser.role === 'buyer'
      ? state.currentUser.name
      : 'Northeast Eco-Resorts & Retail Pvt Ltd';

  const negId = 'NEG-' + Math.floor(500 + Math.random() * 499);
  const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const newNeg = {
    id: negId,
    productId: p.id,
    productName: p.name,
    sellerName: p.sellerName,
    buyerName,
    unit: p.unit,
    listedPrice: p.price,
    requestedQty: qty,
    currentOfferPrice: price,
    lastActor: 'buyer',
    status: 'PENDING',
    createdAt: `Today, ${nowStr}`,
    history: [
      {
        actor: `${buyerName} (Investor / Buyer)`,
        action: `Requested ${qty} ${p.unit} at proposed price ₹${price}/${p.unit} (Seller Expected: ₹${p.price}). ${note ? 'Note: ' + note : ''}`,
        time: nowStr
      }
    ]
  };

  state.negotiations.unshift(newNeg);
  pushNotification(`New Purchase Request (${negId}): ${qty} ${p.unit} of ${p.name} proposed at ₹${price}/${p.unit}`);
  appendSystemMessageToChat(p, buyerName, `Purchase Request ${negId} sent: ${qty} ${p.unit} @ ₹${price}/${p.unit}`);

  closePurchaseModal();
  persistState();
  showToast('Purchase Request sent! Opening Negotiation Centre...');
  navigateTo('negotiations');
}

function renderPurchaseRequestsPage() {
  const container = document.getElementById('purchaseRequestsTable');
  container.innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Request ID</th>
          <th>Product</th>
          <th>Seller</th>
          <th>Investor / Buyer</th>
          <th>Requested Qty</th>
          <th>Listed Price</th>
          <th>Proposed / Current Offer</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${state.negotiations
          .map(
            n => `
          <tr>
            <td><strong>${n.id}</strong></td>
            <td>${n.productName}</td>
            <td>${n.sellerName}</td>
            <td>${n.buyerName}</td>
            <td>${n.requestedQty} ${n.unit}</td>
            <td>₹${n.listedPrice}/${n.unit}</td>
            <td><strong style="color:var(--brand-700);">₹${n.currentOfferPrice}/${n.unit}</strong></td>
            <td><span class="status-badge status-${n.status}">${n.status}</span></td>
            <td><button class="btn btn-outline btn-sm" onclick="navigateTo('negotiations')">Negotiate</button></td>
          </tr>
        `
          )
          .join('')}
      </tbody>
    </table>
  `;
}

function filterNegotiations(status, btnEl) {
  state.negFilter = status;
  document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderNegotiationsPage();
}

function renderNegotiationsPage() {
  const listEl = document.getElementById('negotiationCardsList');
  const role = state.currentUser.role;

  let filtered = state.negotiations;
  if (state.negFilter !== 'ALL') {
    filtered = state.negotiations.filter(n => n.status === state.negFilter);
  }

  if (filtered.length === 0) {
    listEl.innerHTML = `<div class="panel-card"><p class="text-muted">No negotiations found under this filter.</p></div>`;
    return;
  }

  listEl.innerHTML = filtered
    .map(neg => {
      const totalVal = neg.requestedQty * neg.currentOfferPrice;
      const isClosed = neg.status === 'ACCEPTED' || neg.status === 'REJECTED';

      let actionHTML = '';
      if (!isClosed) {
        if (role === 'seller' || role === 'admin') {
          actionHTML = `
            <div class="neg-action-bar">
              <strong>Seller Decision Controls:</strong>
              <button class="btn btn-primary btn-sm" onclick="confirmNegotiationDeal('${neg.id}')">
                ✓ Accept ₹${neg.currentOfferPrice}/${neg.unit}
              </button>
              <input type="number" id="counterPrice-${neg.id}" placeholder="Counteroffer ₹/${neg.unit}" value="${Math.round((neg.listedPrice + neg.currentOfferPrice) / 2)}" min="1" />
              <button class="btn btn-secondary btn-sm" onclick="submitCounterOffer('${neg.id}', 'seller')">
                Send Counteroffer
              </button>
              <button class="btn btn-danger btn-sm" onclick="rejectNegotiationDeal('${neg.id}')">
                ✕ Reject Request
              </button>
            </div>
          `;
        } else {
          // Investor / Buyer view
          actionHTML = `
            <div class="neg-action-bar">
              <strong>Investor Response Controls:</strong>
              ${
                neg.status === 'COUNTERED' && neg.lastActor === 'seller'
                  ? `<button class="btn btn-primary btn-sm" onclick="confirmNegotiationDeal('${neg.id}')">
                      ✓ Accept Seller Counteroffer (₹${neg.currentOfferPrice}/${neg.unit})
                    </button>`
                  : `<span class="text-muted">Waiting for Seller response, or propose a revised price:</span>`
              }
              <input type="number" id="counterPrice-${neg.id}" placeholder="Revised Offer ₹/${neg.unit}" min="1" />
              <button class="btn btn-outline btn-sm" onclick="submitCounterOffer('${neg.id}', 'buyer')">
                Submit Revised Proposal
              </button>
              <button class="btn btn-danger btn-sm" onclick="rejectNegotiationDeal('${neg.id}')">
                Reject / Withdraw
              </button>
            </div>
          `;
        }
      }

      return `
        <div class="neg-card">
          <div class="neg-card-top">
            <div>
              <span class="eyebrow">${neg.id} • ${neg.createdAt}</span>
              <h3>${neg.productName}</h3>
              <p class="text-muted">Seller: <strong>${neg.sellerName}</strong> • Buyer: <strong>${neg.buyerName}</strong></p>
            </div>
            <span class="status-badge status-${neg.status}">${neg.status}</span>
          </div>

          <div class="neg-metrics">
            <div>
              <span class="text-muted">Expected Selling Price</span>
              <h4>₹${neg.listedPrice.toLocaleString('en-IN')} / ${neg.unit}</h4>
            </div>
            <div>
              <span class="text-muted">Requested Quantity</span>
              <h4>${neg.requestedQty} ${neg.unit}</h4>
            </div>
            <div>
              <span class="text-muted">Active Proposed Price</span>
              <h4 style="color:var(--brand-700);">₹${neg.currentOfferPrice.toLocaleString('en-IN')} / ${neg.unit}</h4>
            </div>
            <div>
              <span class="text-muted">Total Proposed Deal Value</span>
              <h4>₹${totalVal.toLocaleString('en-IN')}</h4>
            </div>
          </div>

          <div class="neg-timeline">
            <strong>Negotiation Audit History:</strong>
            ${neg.history.map(h => `<div>• <strong>${h.actor}:</strong> ${h.action} <em>(${h.time})</em></div>`).join('')}
          </div>

          ${actionHTML}
        </div>
      `;
    })
    .join('');
}

function submitCounterOffer(negId, actorRole) {
  const neg = state.negotiations.find(n => n.id === negId);
  const inp = document.getElementById(`counterPrice-${negId}`);
  const val = Number(inp?.value);

  if (!neg || !val || val <= 0) {
    showToast('Please enter a valid unit price for the counteroffer.');
    return;
  }

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  neg.currentOfferPrice = val;
  neg.lastActor = actorRole;
  neg.status = 'COUNTERED';

  const actorTitle =
    actorRole === 'seller'
      ? `${neg.sellerName} (Seller Counteroffer)`
      : `${neg.buyerName} (Investor Revised Proposal)`;

  neg.history.push({
    actor: actorTitle,
    action: `Proposed ₹${val}/${neg.unit} for ${neg.requestedQty} ${neg.unit}`,
    time: timeStr
  });

  pushNotification(`Counteroffer on ${neg.id}: ${actorTitle} proposed ₹${val}/${neg.unit}.`);

  const p = state.products.find(item => item.id === neg.productId);
  if (p) {
    appendSystemMessageToChat(p, neg.buyerName, `${actorTitle} proposed ₹${val}/${neg.unit} (${neg.id})`);
  }

  persistState();
  renderNegotiationsPage();
  showToast(`Counteroffer of ₹${val}/${neg.unit} sent!`);
}

function confirmNegotiationDeal(negId) {
  const neg = state.negotiations.find(n => n.id === negId);
  if (!neg) return;

  const p = state.products.find(item => item.id === neg.productId);
  if (p) {
    if (p.quantity < neg.requestedQty) {
      showToast(`Overselling prevented! Only ${p.quantity} ${p.unit} remaining in stock.`);
      return;
    }
    p.quantity -= neg.requestedQty;
    if (p.quantity === 0) p.available = false;
  }

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  neg.status = 'ACCEPTED';
  neg.history.push({
    actor: state.currentUser.role === 'seller' ? `${neg.sellerName} (Seller)` : `${neg.buyerName} (Investor)`,
    action: `Mutually Confirmed Deal at ₹${neg.currentOfferPrice}/${neg.unit} for ${neg.requestedQty} ${neg.unit}`,
    time: timeStr
  });

  const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
  state.orders.unshift({
    id: orderId,
    negId: neg.id,
    productName: neg.productName,
    sellerName: neg.sellerName,
    buyerName: neg.buyerName,
    qty: neg.requestedQty,
    unit: neg.unit,
    listedPrice: neg.listedPrice,
    agreedPrice: neg.currentOfferPrice,
    totalValue: neg.requestedQty * neg.currentOfferPrice,
    location: p ? p.location : 'Assam',
    date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
  });

  pushNotification(`Deal Confirmed (${orderId}): ${neg.requestedQty} ${neg.unit} of ${neg.productName} @ ₹${neg.currentOfferPrice}/${neg.unit}`, 'orders');
  if (p) {
    appendSystemMessageToChat(p, neg.buyerName, `Deal Confirmed! Order ${orderId} generated for ${neg.requestedQty} ${neg.unit} @ ₹${neg.currentOfferPrice}/${neg.unit}`);
  }

  persistState();
  renderNegotiationsPage();
  showToast(`Deal Confirmed! Order ${orderId} created and inventory updated.`);
}

function rejectNegotiationDeal(negId) {
  const neg = state.negotiations.find(n => n.id === negId);
  if (!neg) return;

  neg.status = 'REJECTED';
  neg.history.push({
    actor: state.currentUser.role === 'seller' ? `${neg.sellerName} (Seller)` : `${neg.buyerName} (Investor)`,
    action: 'Rejected / Closed negotiation request.',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });

  persistState();
  renderNegotiationsPage();
  showToast(`Negotiation ${neg.id} marked as Rejected.`);
}

// ==================== 13. PRIVATE MESSAGING SYSTEM (PAGE 13) ====================

function appendSystemMessageToChat(product, buyerName, sysText) {
  let thread = state.threads.find(t => t.productId === product.id);
  if (!thread) {
    thread = {
      id: 'THD-' + Date.now(),
      productId: product.id,
      productName: product.name,
      sellerName: product.sellerName,
      buyerName,
      messages: []
    };
    state.threads.unshift(thread);
  }
  thread.messages.push({
    type: 'system',
    text: sysText,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
  state.activeThreadId = thread.id;
}

function initiateChatWithSeller(productId) {
  const p = state.products.find(item => item.id === productId);
  if (!p) return;

  let thread = state.threads.find(t => t.productId === p.id);
  if (!thread) {
    thread = {
      id: 'THD-' + Date.now(),
      productId: p.id,
      productName: p.name,
      sellerName: p.sellerName,
      buyerName:
        state.currentUser.role === 'buyer'
          ? state.currentUser.name
          : 'Northeast Eco-Resorts & Retail Pvt Ltd',
      messages: [
        {
          type: 'system',
          text: `Direct enquiry opened for ${p.name} (Listed at ₹${p.price}/${p.unit})`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]
    };
    state.threads.unshift(thread);
  }
  state.activeThreadId = thread.id;
  persistState();
  navigateTo('messages');
}

function renderMessagesPage() {
  const sidebar = document.getElementById('messengerThreads');
  const header = document.getElementById('messengerHeader');
  const body = document.getElementById('messengerBody');

  sidebar.innerHTML = state.threads
    .map(
      t => `
    <div class="thread-row ${t.id === state.activeThreadId ? 'active' : ''}" onclick="selectThread('${t.id}')">
      <strong>${t.productName}</strong>
      <div class="text-muted" style="font-size:0.78rem;">Seller: ${t.sellerName}</div>
      <div class="text-muted" style="font-size:0.75rem;">Buyer: ${t.buyerName}</div>
    </div>
  `
    )
    .join('');

  const active = state.threads.find(t => t.id === state.activeThreadId) || state.threads[0];
  if (!active) {
    header.textContent = 'No active conversation selected';
    body.innerHTML = '';
    return;
  }

  header.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;">
      <span>${active.productName} • <strong>${active.sellerName}</strong> ↔ <strong>${active.buyerName}</strong></span>
      <button class="btn btn-outline btn-sm" onclick="openPurchaseModal('${active.productId}')">Propose Price</button>
    </div>
  `;

  body.innerHTML = active.messages
    .map(m => {
      if (m.type === 'system') {
        return `<div class="chat-system">🔔 ${m.text} (${m.time})</div>`;
      }
      const isMine = m.senderRole === state.currentUser.role;
      return `
        <div class="chat-bubble ${isMine ? 'chat-mine' : 'chat-theirs'}">
          <div><strong>${m.senderName}:</strong> ${m.text}</div>
          <div style="font-size:0.68rem;opacity:0.75;margin-top:4px;">${m.time}</div>
        </div>
      `;
    })
    .join('');

  body.scrollTop = body.scrollHeight;
}

function selectThread(threadId) {
  state.activeThreadId = threadId;
  renderMessagesPage();
}

function sendChatMessage(event) {
  event.preventDefault();
  const inp = document.getElementById('chatMessageInput');
  const text = inp.value.trim();
  if (!text) return;

  const active = state.threads.find(t => t.id === state.activeThreadId) || state.threads[0];
  if (!active) return;

  active.messages.push({
    type: 'user',
    senderRole: state.currentUser.role,
    senderName: state.currentUser.name,
    text,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });

  inp.value = '';
  persistState();
  renderMessagesPage();
}

// ==================== 14. ORDERS & TRANSACTIONS + RECEIPT MODAL (PAGE 14) ====================

function renderOrdersPage() {
  const container = document.getElementById('ordersLedgerContainer');
  if (state.orders.length === 0) {
    container.innerHTML = `<p class="text-muted">No confirmed orders yet.</p>`;
    return;
  }

  container.innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Product</th>
          <th>Seller</th>
          <th>Investor / Buyer</th>
          <th>Quantity</th>
          <th>Agreed Price</th>
          <th>Total Deal Value</th>
          <th>Receipt</th>
        </tr>
      </thead>
      <tbody>
        ${state.orders
          .map(
            o => `
          <tr>
            <td><strong>${o.id}</strong></td>
            <td>${o.date}</td>
            <td><strong>${o.productName}</strong></td>
            <td>${o.sellerName}</td>
            <td>${o.buyerName}</td>
            <td>${o.qty} ${o.unit}</td>
            <td>₹${o.agreedPrice.toLocaleString('en-IN')}/${o.unit}</td>
            <td><strong style="color:var(--brand-700);">₹${o.totalValue.toLocaleString('en-IN')}</strong></td>
            <td>
              <button class="btn btn-outline btn-sm" onclick="openOrderReceipt('${o.id}')">View Receipt</button>
            </td>
          </tr>
        `
          )
          .join('')}
      </tbody>
    </table>
  `;
}

function openOrderReceipt(orderId) {
  const o = state.orders.find(item => item.id === orderId);
  if (!o) return;

  document.getElementById('receiptModalContent').innerHTML = `
    <div style="border:2px solid var(--slate-800);padding:20px;border-radius:10px;">
      <div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--slate-200);padding-bottom:12px;margin-bottom:14px;">
        <div>
          <h4 style="color:var(--brand-800);">AGROCONNECT COMMERCIAL DEAL RECEIPT</h4>
          <small class="text-muted">Direct Producer-to-Investor Settlement Record</small>
        </div>
        <div style="text-align:right;">
          <strong>${o.id}</strong>
          <div class="text-muted">${o.date}</div>
        </div>
      </div>

      <p style="margin-bottom:6px;"><strong>Product:</strong> ${o.productName}</p>
      <p style="margin-bottom:6px;"><strong>Producer / Seller:</strong> ${o.sellerName} (${o.location})</p>
      <p style="margin-bottom:6px;"><strong>Investor / Buyer:</strong> ${o.buyerName}</p>
      <p style="margin-bottom:6px;"><strong>Confirmed Quantity:</strong> ${o.qty} ${o.unit}</p>
      <p style="margin-bottom:6px;"><strong>Listed Unit Price:</strong> ₹${o.listedPrice.toLocaleString('en-IN')} / ${o.unit}</p>
      <p style="margin-bottom:12px;"><strong>Mutually Agreed Unit Price:</strong> ₹${o.agreedPrice.toLocaleString('en-IN')} / ${o.unit}</p>

      <div style="background:var(--brand-50);padding:12px;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
        <strong>Total Confirmed Settlement Value</strong>
        <span style="font-size:1.35rem;font-weight:800;color:var(--brand-800);">₹${o.totalValue.toLocaleString('en-IN')}</span>
      </div>
    </div>
    <div style="margin-top:14px;display:flex;justify-content:flex-end;gap:10px;">
      <button class="btn btn-primary btn-sm" onclick="window.print()">🖨️ Print / Save PDF</button>
    </div>
  `;
  document.getElementById('receiptModal').classList.remove('hidden');
}

function closeReceiptModal() {
  document.getElementById('receiptModal').classList.add('hidden');
}

// ==================== 15. DASHBOARDS, SELLER PROFILE & ADMIN (PAGES 4, 5, 15, 16) ====================

function renderSellerDashboard() {
  document.getElementById('sellerDashHeading').textContent = `Seller Dashboard — ${state.currentUser.name}`;
  document.getElementById('sellerDashSub').textContent = `${state.currentUser.category} • 📍 ${state.currentUser.location}`;

  const totalSales = state.orders.reduce((acc, o) => acc + o.totalValue, 0);
  const openReqs = state.negotiations.filter(n => n.status === 'PENDING' || n.status === 'COUNTERED');

  document.getElementById('sellerKpiGrid').innerHTML = `
    <div class="kpi-box"><span>Active Product Listings</span><h3>${state.products.filter(p => p.available).length}</h3></div>
    <div class="kpi-box"><span>Open Buyer Proposals</span><h3>${openReqs.length}</h3></div>
    <div class="kpi-box"><span>Confirmed Orders</span><h3>${state.orders.length}</h3></div>
    <div class="kpi-box"><span>Cumulative Deal Turnover</span><h3>₹${totalSales.toLocaleString('en-IN')}</h3></div>
  `;

  document.getElementById('sellerDashNegList').innerHTML = state.negotiations
    .slice(0, 4)
    .map(
      n => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--slate-100);">
      <div>
        <strong>${n.productName}</strong>
        <div class="text-muted">${n.buyerName} • ${n.requestedQty} ${n.unit} @ ₹${n.currentOfferPrice}/${n.unit}</div>
      </div>
      <span class="status-badge status-${n.status}">${n.status}</span>
    </div>
  `
    )
    .join('');

  document.getElementById('sellerDashOrdersList').innerHTML = state.orders
    .slice(0, 4)
    .map(
      o => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--slate-100);">
      <div>
        <strong>${o.id}: ${o.productName}</strong>
        <div class="text-muted">Buyer: ${o.buyerName} • ${o.qty} ${o.unit}</div>
      </div>
      <strong style="color:var(--brand-700);">₹${o.totalValue.toLocaleString('en-IN')}</strong>
    </div>
  `
    )
    .join('');
}

function renderBuyerDashboard() {
  document.getElementById('buyerDashHeading').textContent = `Investor Dashboard — ${state.currentUser.name}`;
  document.getElementById('buyerDashSub').textContent = `Direct regional procurement, price negotiation & order tracking`;

  const totalSpend = state.orders.reduce((acc, o) => acc + o.totalValue, 0);

  document.getElementById('buyerKpiGrid').innerHTML = `
    <div class="kpi-box"><span>Submitted Requests</span><h3>${state.negotiations.length}</h3></div>
    <div class="kpi-box"><span>Seller Counteroffers</span><h3>${state.negotiations.filter(n => n.status === 'COUNTERED').length}</h3></div>
    <div class="kpi-box"><span>Confirmed Contracts</span><h3>${state.orders.length}</h3></div>
    <div class="kpi-box"><span>Total Procurement Value</span><h3>₹${totalSpend.toLocaleString('en-IN')}</h3></div>
  `;

  document.getElementById('buyerDashNegList').innerHTML = state.negotiations
    .map(
      n => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--slate-100);">
      <div>
        <strong>${n.productName}</strong>
        <div class="text-muted">Seller: ${n.sellerName} • Proposed: ₹${n.currentOfferPrice}/${n.unit}</div>
      </div>
      <span class="status-badge status-${n.status}">${n.status}</span>
    </div>
  `
    )
    .join('');

  document.getElementById('buyerDashOrdersList').innerHTML = state.orders
    .map(
      o => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--slate-100);">
      <div>
        <strong>${o.id}: ${o.productName}</strong>
        <div class="text-muted">${o.qty} ${o.unit} @ ₹${o.agreedPrice}/${o.unit}</div>
      </div>
      <button class="btn btn-outline btn-sm" onclick="openOrderReceipt('${o.id}')">Receipt</button>
    </div>
  `
    )
    .join('');
}

function openSellerProfile(sellerName) {
  state.activeSellerProfile = sellerName;
  navigateTo('seller-profile');
}

function renderSellerProfilePage() {
  const seller =
    state.sellers.find(s => s.name === state.activeSellerProfile) || {
      name: state.activeSellerProfile,
      category: state.currentUser.category,
      location: state.currentUser.location,
      phone: '+91 94350-XXXXX',
      icon: '🏭',
      bio: 'Verified local producer and entrepreneur registered on AgroConnect.'
    };

  const sellerProducts = state.products.filter(p => p.sellerName === seller.name);

  document.getElementById('sellerProfileContent').innerHTML = `
    <div class="category-banner" style="margin-bottom:24px;">
      <div style="display:flex;align-items:center;gap:16px;">
        <div class="producer-icon" style="width:64px;height:64px;font-size:2rem;">${seller.icon || '🏭'}</div>
        <div>
          <span class="Category-count">${seller.category}</span>
          <h2 style="margin-top:4px;">${seller.name}</h2>
          <p class="text-muted">📍 ${seller.location} • 📞 ${seller.phone}</p>
          <p style="margin-top:6px;max-width:680px;font-size:0.9rem;">${seller.bio}</p>
        </div>
      </div>
      <button class="btn btn-outline" onclick="navigateTo('auth-seller')">Edit Seller Profile</button>
    </div>

    <h3 style="margin-bottom:16px;">Active Catalogue by ${seller.name} (${sellerProducts.length})</h3>
    <div class="product-grid">
      ${
        sellerProducts.length
          ? sellerProducts.map(p => buildProductCardHTML(p)).join('')
          : `<p class="text-muted">No products currently listed under this seller profile.</p>`
      }
    </div>
  `;
}

function renderAdminDashboard() {
  const totalVolume = state.orders.reduce((s, o) => s + o.totalValue, 0);
  document.getElementById('adminKpiGrid').innerHTML = `
    <div class="kpi-box"><span>Total Product Categories</span><h3>${state.categories.length}</h3></div>
    <div class="kpi-box"><span>Total Registered Listings</span><h3>${state.products.length}</h3></div>
    <div class="kpi-box"><span>Active / Historical Negotiations</span><h3>${state.negotiations.length}</h3></div>
    <div class="kpi-box"><span>Gross Merchandise Value (GMV)</span><h3>₹${totalVolume.toLocaleString('en-IN')}</h3></div>
  `;

  document.getElementById('adminCategoryBreakdown').innerHTML = state.categories
    .map(c => {
      const cnt = state.products.filter(p => p.category === c.id).length;
      return `
      <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--slate-100);">
        <span>${c.icon} ${c.id}</span>
        <strong>${cnt} Product(s)</strong>
      </div>
    `;
    })
    .join('');

  document.getElementById('adminAuditLog').innerHTML = state.notifications
    .slice(0, 6)
    .map(
      n => `
    <div style="padding:8px 0;border-bottom:1px solid var(--slate-100);font-size:0.84rem;">
      <div>${n.text}</div>
      <small class="text-muted">${n.time}</small>
    </div>
  `
    )
    .join('');
}

// ==================== 16. AUTH HANDLERS & TOAST ====================

function prefillSellerAuth() {
  document.getElementById('sellerAuthName').value = state.currentUser.name;
  document.getElementById('sellerAuthLoc').value = state.currentUser.location;
  document.getElementById('sellerAuthPhone').value = state.currentUser.phone || '+91 94350-11223';
  document.getElementById('sellerAuthBio').value =
    state.currentUser.bio || 'Local producer delivering quality regional products.';
}

function handleSellerAuth(event) {
  event.preventDefault();
  const name = document.getElementById('sellerAuthName').value.trim();
  const category = document.getElementById('sellerAuthCat').value;
  const location = document.getElementById('sellerAuthLoc').value.trim();
  const phone = document.getElementById('sellerAuthPhone').value.trim();
  const bio = document.getElementById('sellerAuthBio').value.trim();

  state.currentUser = { name, role: 'seller', category, location, phone, bio };
  if (!state.sellers.some(s => s.name === name)) {
    state.sellers.push({ name, category, location, phone, icon: '🏭', bio });
  }
  document.getElementById('globalRoleSelect').value = 'seller';
  persistState();
  showToast(`Welcome ${name}! Seller Workspace activated.`);
  navigateTo('seller-dashboard');
}

function prefillBuyerAuth() {
  document.getElementById('buyerAuthName').value =
    state.currentUser.role === 'buyer'
      ? state.currentUser.name
      : 'Northeast Eco-Resorts & Retail Pvt Ltd';
  document.getElementById('buyerAuthLoc').value = state.currentUser.location || 'Guwahati, Assam';
}

function handleBuyerAuth(event) {
  event.preventDefault();
  const name = document.getElementById('buyerAuthName').value.trim();
  const category = document.getElementById('buyerAuthType').value;
  const location = document.getElementById('buyerAuthLoc').value.trim();

  state.currentUser = { name, role: 'buyer', category, location };
  document.getElementById('globalRoleSelect').value = 'buyer';
  persistState();
  showToast(`Welcome ${name}! Investor Workspace activated.`);
  navigateTo('buyer-dashboard');
}

function showToast(message) {
  const banner = document.getElementById('toastBanner');
  banner.textContent = message;
  banner.classList.remove('hidden');
  clearTimeout(window._acToastTimer);
  window._acToastTimer = setTimeout(() => banner.classList.add('hidden'), 3400);
}
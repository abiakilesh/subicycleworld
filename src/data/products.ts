// Product data for all brands
// Using high-quality cycle images

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  features: string[];
  category?: string;
}

// Hero Cycles Products
export const heroProducts: Product[] = [
  { id: "hero-1", name: "Hero Sprint Pro", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=450&fit=crop", price: 12999, features: ["21 Speed", "Steel Frame", "26 Inch"], category: "MTB" },
  { id: "hero-2", name: "Hero Octane Dude", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=450&fit=crop", price: 15499, features: ["Single Speed", "Alloy Frame", "24 Inch"], category: "City" },
  { id: "hero-3", name: "Hero Sprint Next", image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600&h=450&fit=crop", price: 18999, features: ["18 Speed", "Steel Frame", "27.5 Inch"], category: "MTB" },
  { id: "hero-4", name: "Hero RX2", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop", price: 9999, features: ["7 Speed", "Hi-Ten Steel", "26 Inch"], category: "Hybrid" },
  { id: "hero-5", name: "Hero Urban Trail", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=450&fit=crop", price: 22999, features: ["21 Speed", "Alloy Frame", "700c"], category: "Hybrid" },
  { id: "hero-6", name: "Hero Sprint Blast", image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&h=450&fit=crop", price: 14499, features: ["18 Speed", "Steel Frame", "26 Inch"], category: "MTB" },
  { id: "hero-7", name: "Hero Traveller", image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=450&fit=crop", price: 8499, features: ["Single Speed", "Steel Frame", "26 Inch"], category: "City" },
  { id: "hero-8", name: "Hero Skyper", image: "https://images.unsplash.com/photo-1619993938912-afbcf98529d8?w=600&h=450&fit=crop", price: 11999, features: ["6 Speed", "Steel Frame", "24 Inch"], category: "Kids" },
  { id: "hero-9", name: "Hero Stomper", image: "https://images.unsplash.com/photo-1618518187979-7a0313ee9d9f?w=600&h=450&fit=crop", price: 7999, features: ["Single Speed", "Steel Frame", "20 Inch"], category: "Kids" },
  { id: "hero-10", name: "Hero Howler", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=450&fit=crop", price: 13499, features: ["21 Speed", "Alloy Frame", "26 Inch"], category: "MTB" },
  { id: "hero-11", name: "Hero Lectro C3", image: "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=600&h=450&fit=crop", price: 34999, features: ["E-Bike", "Lithium Battery", "26 Inch"], category: "Electric" },
  { id: "hero-12", name: "Hero Lectro C5", image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=600&h=450&fit=crop", price: 44999, features: ["E-Bike", "250W Motor", "27.5 Inch"], category: "Electric" },
];

// Track and Trail Products
export const trackAndTrailProducts: Product[] = [
  { id: "tat-1", name: "TNT Fury 27.5", image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&h=450&fit=crop", price: 28999, features: ["21 Speed", "Alloy Frame", "27.5 Inch"], category: "MTB" },
  { id: "tat-2", name: "TNT Storm", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600&h=450&fit=crop", price: 32499, features: ["24 Speed", "Alloy Frame", "29 Inch"], category: "MTB" },
  { id: "tat-3", name: "TNT Blazer", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=450&fit=crop", price: 24999, features: ["18 Speed", "Steel Frame", "26 Inch"], category: "MTB" },
  { id: "tat-4", name: "TNT Urban Pro", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=450&fit=crop", price: 19999, features: ["7 Speed", "Alloy Frame", "700c"], category: "Hybrid" },
  { id: "tat-5", name: "TNT Speedster", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=450&fit=crop", price: 35999, features: ["14 Speed", "Carbon Fork", "700c"], category: "Road" },
  { id: "tat-6", name: "TNT Thunder", image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600&h=450&fit=crop", price: 27499, features: ["21 Speed", "Alloy Frame", "27.5 Inch"], category: "MTB" },
  { id: "tat-7", name: "TNT Cruiser", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop", price: 15999, features: ["Single Speed", "Steel Frame", "26 Inch"], category: "City" },
  { id: "tat-8", name: "TNT Junior Pro", image: "https://images.unsplash.com/photo-1619993938912-afbcf98529d8?w=600&h=450&fit=crop", price: 14999, features: ["6 Speed", "Alloy Frame", "24 Inch"], category: "Kids" },
  { id: "tat-9", name: "TNT Ranger", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=450&fit=crop", price: 22999, features: ["18 Speed", "Alloy Frame", "26 Inch"], category: "MTB" },
  { id: "tat-10", name: "TNT Venom", image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&h=450&fit=crop", price: 38999, features: ["27 Speed", "Alloy Frame", "29 Inch"], category: "MTB" },
  { id: "tat-11", name: "TNT E-Power", image: "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=600&h=450&fit=crop", price: 54999, features: ["E-Bike", "350W Motor", "27.5 Inch"], category: "Electric" },
  { id: "tat-12", name: "TNT Fat Boy", image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=600&h=450&fit=crop", price: 42999, features: ["21 Speed", "Fat Tires", "26 Inch"], category: "Fat Bike" },
];

// Caya Bikes Products
export const cayaBikesProducts: Product[] = [
  { id: "caya-1", name: "Caya Pro 27.5", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=450&fit=crop", price: 18999, features: ["21 Speed", "Alloy Frame", "27.5 Inch"], category: "MTB" },
  { id: "caya-2", name: "Caya Thunder", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600&h=450&fit=crop", price: 22499, features: ["24 Speed", "Alloy Frame", "29 Inch"], category: "MTB" },
  { id: "caya-3", name: "Caya Storm", image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&h=450&fit=crop", price: 16999, features: ["18 Speed", "Steel Frame", "26 Inch"], category: "MTB" },
  { id: "caya-4", name: "Caya Urban", image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=450&fit=crop", price: 14999, features: ["7 Speed", "Alloy Frame", "700c"], category: "Hybrid" },
  { id: "caya-5", name: "Caya Racer", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=450&fit=crop", price: 28999, features: ["14 Speed", "Alloy Frame", "700c"], category: "Road" },
  { id: "caya-6", name: "Caya Blitz", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=450&fit=crop", price: 19499, features: ["21 Speed", "Alloy Frame", "27.5 Inch"], category: "MTB" },
  { id: "caya-7", name: "Caya City", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=450&fit=crop", price: 12999, features: ["Single Speed", "Steel Frame", "26 Inch"], category: "City" },
  { id: "caya-8", name: "Caya Junior", image: "https://images.unsplash.com/photo-1618518187979-7a0313ee9d9f?w=600&h=450&fit=crop", price: 9999, features: ["6 Speed", "Steel Frame", "24 Inch"], category: "Kids" },
  { id: "caya-9", name: "Caya Cruze", image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600&h=450&fit=crop", price: 17499, features: ["18 Speed", "Alloy Frame", "26 Inch"], category: "MTB" },
  { id: "caya-10", name: "Caya Xtreme", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=450&fit=crop", price: 25999, features: ["27 Speed", "Alloy Frame", "29 Inch"], category: "MTB" },
  { id: "caya-11", name: "Caya E-Ride", image: "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=600&h=450&fit=crop", price: 42999, features: ["E-Bike", "250W Motor", "27.5 Inch"], category: "Electric" },
  { id: "caya-12", name: "Caya Fat Track", image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=600&h=450&fit=crop", price: 32999, features: ["21 Speed", "Fat Tires", "26 Inch"], category: "Fat Bike" },
];

// Outdoors 91 Products
export const outdoors91Products: Product[] = [
  { id: "o91-1", name: "Outdoors Explorer", image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&h=450&fit=crop", price: 24999, features: ["21 Speed", "Alloy Frame", "27.5 Inch"], category: "MTB" },
  { id: "o91-2", name: "Outdoors Trailblazer", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=450&fit=crop", price: 29999, features: ["24 Speed", "Alloy Frame", "29 Inch"], category: "MTB" },
  { id: "o91-3", name: "Outdoors Ranger", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600&h=450&fit=crop", price: 21999, features: ["18 Speed", "Alloy Frame", "26 Inch"], category: "MTB" },
  { id: "o91-4", name: "Outdoors Commuter", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop", price: 17999, features: ["7 Speed", "Alloy Frame", "700c"], category: "Hybrid" },
  { id: "o91-5", name: "Outdoors Sprint", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=450&fit=crop", price: 34999, features: ["16 Speed", "Carbon Fork", "700c"], category: "Road" },
  { id: "o91-6", name: "Outdoors Velocity", image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&h=450&fit=crop", price: 26499, features: ["21 Speed", "Alloy Frame", "27.5 Inch"], category: "MTB" },
  { id: "o91-7", name: "Outdoors Metro", image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=450&fit=crop", price: 14999, features: ["Single Speed", "Steel Frame", "26 Inch"], category: "City" },
  { id: "o91-8", name: "Outdoors Kids Pro", image: "https://images.unsplash.com/photo-1619993938912-afbcf98529d8?w=600&h=450&fit=crop", price: 12999, features: ["6 Speed", "Alloy Frame", "24 Inch"], category: "Kids" },
  { id: "o91-9", name: "Outdoors Maverick", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=450&fit=crop", price: 23499, features: ["18 Speed", "Alloy Frame", "26 Inch"], category: "MTB" },
  { id: "o91-10", name: "Outdoors Beast", image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600&h=450&fit=crop", price: 35999, features: ["27 Speed", "Alloy Frame", "29 Inch"], category: "MTB" },
  { id: "o91-11", name: "Outdoors E-Trail", image: "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=600&h=450&fit=crop", price: 52999, features: ["E-Bike", "350W Motor", "27.5 Inch"], category: "Electric" },
  { id: "o91-12", name: "Outdoors Fat Cruiser", image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=600&h=450&fit=crop", price: 38999, features: ["21 Speed", "Fat Tires", "26 Inch"], category: "Fat Bike" },
];

// Stryder Bikes Products
export const stryderBikesProducts: Product[] = [
  { id: "str-1", name: "Stryder Alpha", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=450&fit=crop", price: 16999, features: ["21 Speed", "Steel Frame", "27.5 Inch"], category: "MTB" },
  { id: "str-2", name: "Stryder Beta", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=450&fit=crop", price: 19999, features: ["24 Speed", "Alloy Frame", "29 Inch"], category: "MTB" },
  { id: "str-3", name: "Stryder Gamma", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=450&fit=crop", price: 14499, features: ["18 Speed", "Steel Frame", "26 Inch"], category: "MTB" },
  { id: "str-4", name: "Stryder Delta", image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=450&fit=crop", price: 12999, features: ["7 Speed", "Alloy Frame", "700c"], category: "Hybrid" },
  { id: "str-5", name: "Stryder Sigma", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=450&fit=crop", price: 24999, features: ["14 Speed", "Alloy Frame", "700c"], category: "Road" },
  { id: "str-6", name: "Stryder Omega", image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600&h=450&fit=crop", price: 17999, features: ["21 Speed", "Alloy Frame", "27.5 Inch"], category: "MTB" },
  { id: "str-7", name: "Stryder City Glide", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop", price: 10999, features: ["Single Speed", "Steel Frame", "26 Inch"], category: "City" },
  { id: "str-8", name: "Stryder Junior", image: "https://images.unsplash.com/photo-1618518187979-7a0313ee9d9f?w=600&h=450&fit=crop", price: 8999, features: ["6 Speed", "Steel Frame", "24 Inch"], category: "Kids" },
  { id: "str-9", name: "Stryder Thunder", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=450&fit=crop", price: 15999, features: ["18 Speed", "Alloy Frame", "26 Inch"], category: "MTB" },
  { id: "str-10", name: "Stryder Storm", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600&h=450&fit=crop", price: 22999, features: ["27 Speed", "Alloy Frame", "29 Inch"], category: "MTB" },
  { id: "str-11", name: "Stryder E-Motion", image: "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=600&h=450&fit=crop", price: 38999, features: ["E-Bike", "250W Motor", "27.5 Inch"], category: "Electric" },
  { id: "str-12", name: "Stryder Fat Track", image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=600&h=450&fit=crop", price: 28999, features: ["21 Speed", "Fat Tires", "26 Inch"], category: "Fat Bike" },
];

// Toronto Bicycles Products
export const torontoBicyclesProducts: Product[] = [
  { id: "tor-1", name: "Toronto Classic", image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&h=450&fit=crop", price: 32999, features: ["21 Speed", "Alloy Frame", "27.5 Inch"], category: "MTB" },
  { id: "tor-2", name: "Toronto Elite", image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&h=450&fit=crop", price: 38999, features: ["27 Speed", "Carbon Frame", "29 Inch"], category: "MTB" },
  { id: "tor-3", name: "Toronto Sport", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600&h=450&fit=crop", price: 27999, features: ["18 Speed", "Alloy Frame", "26 Inch"], category: "MTB" },
  { id: "tor-4", name: "Toronto Urban", image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600&h=450&fit=crop", price: 24999, features: ["8 Speed", "Alloy Frame", "700c"], category: "Hybrid" },
  { id: "tor-5", name: "Toronto Racer", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=450&fit=crop", price: 45999, features: ["22 Speed", "Carbon Frame", "700c"], category: "Road" },
  { id: "tor-6", name: "Toronto Trail", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=450&fit=crop", price: 34999, features: ["21 Speed", "Alloy Frame", "27.5 Inch"], category: "MTB" },
  { id: "tor-7", name: "Toronto Cruiser", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop", price: 19999, features: ["3 Speed", "Steel Frame", "26 Inch"], category: "City" },
  { id: "tor-8", name: "Toronto Kids Pro", image: "https://images.unsplash.com/photo-1619993938912-afbcf98529d8?w=600&h=450&fit=crop", price: 16999, features: ["7 Speed", "Alloy Frame", "24 Inch"], category: "Kids" },
  { id: "tor-9", name: "Toronto Gravel", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=450&fit=crop", price: 42999, features: ["11 Speed", "Alloy Frame", "700c"], category: "Gravel" },
  { id: "tor-10", name: "Toronto Extreme", image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600&h=450&fit=crop", price: 52999, features: ["30 Speed", "Carbon Frame", "29 Inch"], category: "MTB" },
  { id: "tor-11", name: "Toronto E-Urban", image: "https://images.unsplash.com/photo-1571188654248-7a89213915f7?w=600&h=450&fit=crop", price: 64999, features: ["E-Bike", "500W Motor", "27.5 Inch"], category: "Electric" },
  { id: "tor-12", name: "Toronto Fat Explorer", image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=600&h=450&fit=crop", price: 48999, features: ["21 Speed", "Fat Tires", "26 Inch"], category: "Fat Bike" },
];

// Cult Cycle Products
export const cultCycleProducts: Product[] = [
  { id: "cult-1", name: "Cult Gateway", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=450&fit=crop", price: 8499, features: ["Single Speed", "Steel Frame", "26 Inch"], category: "BMX" },
  { id: "cult-2", name: "Cult Devotion", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=450&fit=crop", price: 12999, features: ["Single Speed", "Chromoly", "20 Inch"], category: "BMX" },
  { id: "cult-3", name: "Cult Control", image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600&h=450&fit=crop", price: 18999, features: ["Single Speed", "Full Chromoly", "20 Inch"], category: "BMX" },
  { id: "cult-4", name: "Cult Crew", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600&h=450&fit=crop", price: 24999, features: ["Single Speed", "Full Chromoly", "20 Inch"], category: "BMX" },
  { id: "cult-5", name: "Cult Juvenile", image: "https://images.unsplash.com/photo-1618518187979-7a0313ee9d9f?w=600&h=450&fit=crop", price: 6999, features: ["Single Speed", "Steel Frame", "16 Inch"], category: "Kids BMX" },
  { id: "cult-6", name: "Cult Access", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=450&fit=crop", price: 15999, features: ["Single Speed", "Chromoly", "20 Inch"], category: "BMX" },
  { id: "cult-7", name: "Cult Shorty", image: "https://images.unsplash.com/photo-1619993938912-afbcf98529d8?w=600&h=450&fit=crop", price: 7499, features: ["Single Speed", "Steel Frame", "18 Inch"], category: "Kids BMX" },
  { id: "cult-8", name: "Cult Street", image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&h=450&fit=crop", price: 21999, features: ["Single Speed", "Chromoly", "20.5 Inch"], category: "BMX" },
  { id: "cult-9", name: "Cult Park", image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600&h=450&fit=crop", price: 19999, features: ["Single Speed", "Chromoly", "20.25 Inch"], category: "BMX" },
  { id: "cult-10", name: "Cult Vert", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=450&fit=crop", price: 28999, features: ["Single Speed", "Full Chromoly", "21 Inch"], category: "BMX" },
  { id: "cult-11", name: "Cult Race", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&h=450&fit=crop", price: 32999, features: ["Single Speed", "Alloy Frame", "20 Inch"], category: "Race BMX" },
  { id: "cult-12", name: "Cult Flatland", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop", price: 26999, features: ["Single Speed", "Chromoly", "20 Inch"], category: "Flatland" },
];

// Firefox Products
export const firefoxProducts: Product[] = [
  { id: "ff-1", name: "Firefox Maximus", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600", price: 26999, features: ["21 Speed", "Alloy Frame", "27.5 Inch"], category: "MTB" },
  { id: "ff-2", name: "Firefox Cyclone", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", price: 32999, features: ["24 Speed", "Alloy Frame", "29 Inch"], category: "MTB" },
  { id: "ff-3", name: "Firefox Vortex", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600", price: 22999, features: ["18 Speed", "Alloy Frame", "26 Inch"], category: "MTB" },
  { id: "ff-4", name: "Firefox Rapide", image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600", price: 18999, features: ["8 Speed", "Alloy Frame", "700c"], category: "Hybrid" },
  { id: "ff-5", name: "Firefox Road Runner", image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600", price: 38999, features: ["16 Speed", "Carbon Fork", "700c"], category: "Road" },
  { id: "ff-6", name: "Firefox Tremor", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600", price: 28499, features: ["21 Speed", "Alloy Frame", "27.5 Inch"], category: "MTB" },
  { id: "ff-7", name: "Firefox Nexus", image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600", price: 15999, features: ["Single Speed", "Steel Frame", "26 Inch"], category: "City" },
  { id: "ff-8", name: "Firefox Flip Flop", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600", price: 12999, features: ["6 Speed", "Alloy Frame", "24 Inch"], category: "Kids" },
  { id: "ff-9", name: "Firefox Storm", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600", price: 24999, features: ["18 Speed", "Alloy Frame", "26 Inch"], category: "MTB" },
  { id: "ff-10", name: "Firefox Thunder", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600", price: 36999, features: ["27 Speed", "Alloy Frame", "29 Inch"], category: "MTB" },
  { id: "ff-11", name: "Firefox E-Surge", image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600", price: 56999, features: ["E-Bike", "350W Motor", "27.5 Inch"], category: "Electric" },
  { id: "ff-12", name: "Firefox Fat Fury", image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=600", price: 42999, features: ["21 Speed", "Fat Tires", "26 Inch"], category: "Fat Bike" },
];

// Multi-brand page products (Schnell, KeysTo, Dodge Archives)
export const schnellProducts: Product[] = [
  { id: "sch-1", name: "Schnell Velox", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600", price: 45999, features: ["22 Speed", "Carbon Frame", "700c"], category: "Road" },
  { id: "sch-2", name: "Schnell Aero Pro", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", price: 52999, features: ["22 Speed", "Carbon Frame", "700c"], category: "Road" },
  { id: "sch-3", name: "Schnell Sprint", image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600", price: 38999, features: ["18 Speed", "Alloy Frame", "700c"], category: "Road" },
  { id: "sch-4", name: "Schnell Time Trial", image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600", price: 68999, features: ["11 Speed", "Carbon Frame", "700c"], category: "TT" },
];

export const keysToProducts: Product[] = [
  { id: "key-1", name: "KeysTo Urban", image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?w=600", price: 14999, features: ["7 Speed", "Alloy Frame", "700c"], category: "City" },
  { id: "key-2", name: "KeysTo Commuter", image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600", price: 18999, features: ["8 Speed", "Alloy Frame", "700c"], category: "Hybrid" },
  { id: "key-3", name: "KeysTo Fold", image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=600", price: 22999, features: ["6 Speed", "Alloy Frame", "20 Inch"], category: "Folding" },
  { id: "key-4", name: "KeysTo Electric", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600", price: 34999, features: ["E-Bike", "250W Motor", "26 Inch"], category: "Electric" },
];

export const dodgeArchivesProducts: Product[] = [
  { id: "dod-1", name: "Dodge Vintage", image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600", price: 28999, features: ["3 Speed", "Steel Frame", "26 Inch"], category: "Classic" },
  { id: "dod-2", name: "Dodge Heritage", image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=600", price: 32999, features: ["Single Speed", "Steel Frame", "28 Inch"], category: "Classic" },
  { id: "dod-3", name: "Dodge Roadster", image: "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=600", price: 24999, features: ["5 Speed", "Steel Frame", "26 Inch"], category: "Classic" },
  { id: "dod-4", name: "Dodge Classic", image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=600", price: 19999, features: ["Single Speed", "Steel Frame", "26 Inch"], category: "Classic" },
];

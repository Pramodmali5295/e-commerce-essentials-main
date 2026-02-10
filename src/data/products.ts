export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  subCategory: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  variants?: { type: string; options: string[] }[];
  tags: string[];
  isFeatured?: boolean;
  isTrending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subCategories: string[];
  productCount: number;
  bgColor: string;
  iconColor: string;
  hoverBorder: string;
  shadowColor: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  bgGradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
}

export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    icon: "Smartphone",
    subCategories: ["Phones", "Laptops", "Audio", "Cameras"],
    productCount: 245,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    hoverBorder: "hover:border-blue-400",
    shadowColor: "hover:shadow-blue-500/20"
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: "Shirt",
    subCategories: ["Men", "Women", "Kids", "Accessories"],
    productCount: 892,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    hoverBorder: "hover:border-amber-400",
    shadowColor: "hover:shadow-amber-500/20"
  },
  {
    id: "home",
    name: "Home & Living",
    icon: "Home",
    subCategories: ["Furniture", "Decor", "Kitchen", "Bedding"],
    productCount: 534,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hoverBorder: "hover:border-emerald-400",
    shadowColor: "hover:shadow-emerald-500/20"
  },
  {
    id: "beauty",
    name: "Beauty",
    icon: "Sparkles",
    subCategories: ["Skincare", "Makeup", "Fragrance", "Hair Care"],
    productCount: 312,
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    hoverBorder: "hover:border-rose-400",
    shadowColor: "hover:shadow-rose-500/20"
  },
  {
    id: "sports",
    name: "Sports",
    icon: "Dumbbell",
    subCategories: ["Fitness", "Outdoor", "Sportswear", "Equipment"],
    productCount: 198,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    hoverBorder: "hover:border-orange-400",
    shadowColor: "hover:shadow-orange-500/20"
  },
  {
    id: "books",
    name: "Books",
    icon: "BookOpen",
    subCategories: ["Fiction", "Non-Fiction", "Academic", "Comics"],
    productCount: 1024,
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    hoverBorder: "hover:border-indigo-400",
    shadowColor: "hover:shadow-indigo-500/20"
  },
];

export const products: Product[] = [
  {
    id: "1", name: "Premium Wireless Headphones", description: "Experience crystal-clear audio with active noise cancellation. Premium build with 30hr battery life.", price: 4999, originalPrice: 7999, discount: 38, category: "electronics", subCategory: "Audio",
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80", "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80", "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80"], rating: 4.5, reviewCount: 2341, inStock: true, stockCount: 45,
    variants: [{ type: "Color", options: ["Midnight Black", "Pearl White", "Navy Blue"] }],
    tags: ["bestseller", "trending"], isFeatured: true, isTrending: true,
  },
  {
    id: "2", name: "Slim Fit Cotton Shirt", description: "Premium cotton slim fit shirt perfect for any occasion. Breathable and comfortable.", price: 1299, originalPrice: 2499, discount: 48, category: "fashion", subCategory: "Men",
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80", "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80", "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80"], rating: 4.3, reviewCount: 876, inStock: true, stockCount: 120,
    variants: [{ type: "Size", options: ["S", "M", "L", "XL"] }, { type: "Color", options: ["White", "Sky Blue", "Navy"] }],
    tags: ["trending"], isFeatured: true, isTrending: true,
  },
  {
    id: "3", name: "Smart Fitness Watch", description: "Track your health with precision. Heart rate, SpO2, sleep tracking and 14-day battery.", price: 3499, originalPrice: 5999, discount: 42, category: "electronics", subCategory: "Phones",
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80", "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80", "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80"], rating: 4.6, reviewCount: 3210, inStock: true, stockCount: 78,
    variants: [{ type: "Color", options: ["Black", "Green", "Rose Gold"] }],
    tags: ["bestseller"], isFeatured: true, isTrending: true,
  },
  {
    id: "4", name: "Ergonomic Office Chair", description: "Designed for all-day comfort with lumbar support and adjustable armrests.", price: 12999, originalPrice: 18999, discount: 32, category: "home", subCategory: "Furniture",
    images: ["https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80", "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80", "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800&q=80"], rating: 4.4, reviewCount: 567, inStock: true, stockCount: 23,
    variants: [{ type: "Color", options: ["Black", "Grey", "Blue"] }],
    tags: ["featured"], isFeatured: true,
  },
  {
    id: "5", name: "Natural Glow Serum", description: "Vitamin C enriched serum for radiant, youthful skin. Dermatologically tested.", price: 899, originalPrice: 1599, discount: 44, category: "beauty", subCategory: "Skincare",
    images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80", "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80", "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80"], rating: 4.7, reviewCount: 4521, inStock: true, stockCount: 200,
    tags: ["bestseller", "trending"], isTrending: true,
  },
  {
    id: "6", name: "Running Shoes Pro", description: "Lightweight, responsive cushioning for your daily run. Breathable mesh upper.", price: 2999, originalPrice: 4999, discount: 40, category: "sports", subCategory: "Sportswear",
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"], rating: 4.5, reviewCount: 1890, inStock: true, stockCount: 65,
    variants: [{ type: "Size", options: ["7", "8", "9", "10", "11"] }, { type: "Color", options: ["Black/Red", "White/Blue", "Grey"] }],
    tags: ["trending"], isTrending: true,
  },
  {
    id: "7", name: "Bluetooth Speaker Mini", description: "Compact speaker with powerful bass. IPX7 waterproof, 12hr playtime.", price: 1999, originalPrice: 3499, discount: 43, category: "electronics", subCategory: "Audio",
    images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80", "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80", "https://images.unsplash.com/photo-1507646871304-c8eb7b0d7b4c?w=800&q=80"], rating: 4.2, reviewCount: 1234, inStock: true, stockCount: 90,
    variants: [{ type: "Color", options: ["Black", "Red", "Teal"] }],
    tags: ["featured"], isFeatured: true,
  },
  {
    id: "8", name: "Designer Handbag", description: "Elegant leather handbag with premium finish. Spacious compartments.", price: 3999, originalPrice: 6999, discount: 43, category: "fashion", subCategory: "Accessories",
    images: ["https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80", "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80", "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80"], rating: 4.6, reviewCount: 432, inStock: true, stockCount: 15,
    variants: [{ type: "Color", options: ["Tan", "Black", "Burgundy"] }],
    tags: ["premium"], isFeatured: true,
  },
  {
    id: "9", name: "Ceramic Dinner Set", description: "12-piece premium ceramic dinner set. Microwave and dishwasher safe.", price: 2499, originalPrice: 3999, discount: 38, category: "home", subCategory: "Kitchen",
    images: ["https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80", "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80", "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&q=80"], rating: 4.3, reviewCount: 289, inStock: true, stockCount: 34,
    tags: ["featured"],
  },
  {
    id: "10", name: "Yoga Mat Premium", description: "Extra thick, non-slip yoga mat. Eco-friendly TPE material.", price: 999, originalPrice: 1799, discount: 44, category: "sports", subCategory: "Fitness",
    images: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80", "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800&q=80", "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&q=80"], rating: 4.4, reviewCount: 876, inStock: false, stockCount: 0,
    tags: ["popular"],
  },
  {
    id: "11", name: "Aromatic Candle Set", description: "Set of 3 luxury scented candles. Soy wax, 40hr burn time each.", price: 799, originalPrice: 1299, discount: 38, category: "home", subCategory: "Decor",
    images: ["https://images.unsplash.com/photo-1602874801006-e7d7a9e9a9b0?w=800&q=80", "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80", "https://images.unsplash.com/photo-1602874801577-7d6db5f5b5e3?w=800&q=80"], rating: 4.5, reviewCount: 654, inStock: true, stockCount: 88,
    tags: ["gifting"],
  },
  {
    id: "12", name: "Laptop Backpack", description: "Water-resistant laptop backpack with USB charging port. Fits 15.6\" laptops.", price: 1499, originalPrice: 2499, discount: 40, category: "fashion", subCategory: "Accessories",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80", "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80", "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&q=80"], rating: 4.3, reviewCount: 1567, inStock: true, stockCount: 45,
    tags: ["bestseller"],
  },
];

export const banners: Banner[] = [
  { id: "1", title: "Summer Collection 2026", subtitle: "Up to 60% off on premium fashion", ctaText: "Shop Now", ctaLink: "/products?category=fashion", bgGradient: "gradient-hero" },
  { id: "2", title: "Tech Deals Week", subtitle: "Best prices on electronics", ctaText: "Explore Deals", ctaLink: "/products?category=electronics", bgGradient: "gradient-gold" },
  { id: "3", title: "Home Makeover Sale", subtitle: "Transform your space for less", ctaText: "Discover", ctaLink: "/products?category=home", bgGradient: "gradient-navy" },
];

export const testimonials: Testimonial[] = [
  { id: "1", name: "Priya Sharma", avatar: "PS", rating: 5, text: "Amazing quality products! The delivery was super fast and the packaging was premium. Will definitely shop again.", product: "Premium Wireless Headphones" },
  { id: "2", name: "Rahul Verma", avatar: "RV", rating: 5, text: "Best shopping experience ever. The prices are unbeatable and the customer service is top-notch.", product: "Smart Fitness Watch" },
  { id: "3", name: "Anita Desai", avatar: "AD", rating: 4, text: "Love the variety! Found exactly what I was looking for. The quality exceeded my expectations.", product: "Natural Glow Serum" },
  { id: "4", name: "Vikram Singh", avatar: "VS", rating: 5, text: "Great discounts and authentic products. The return policy is hassle-free too.", product: "Slim Fit Cotton Shirt" },
  { id: "5", name: "Sneha Patel", avatar: "SP", rating: 5, text: "Absolutely love my purchase! The product quality is outstanding and shipping was incredibly fast.", product: "Yoga Mat Pro" },
  { id: "6", name: "Arjun Mehta", avatar: "AM", rating: 4, text: "Excellent customer service and great product range. Highly recommend this store to everyone!", product: "Bluetooth Speaker" },
  { id: "7", name: "Kavita Reddy", avatar: "KR", rating: 5, text: "The best online shopping experience! Products are exactly as described and prices are very competitive.", product: "Designer Handbag" },
  { id: "8", name: "Amit Kumar", avatar: "AK", rating: 5, text: "Fast delivery, great packaging, and amazing product quality. This is now my go-to store!", product: "Running Shoes" },
];

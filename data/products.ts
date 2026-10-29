export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: 1, name: "Ethereal Draped Silk Dress", category: "Dresses", price: 2400, badge: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2, name: "Light Ivory Wool Trench", category: "Outerwear", price: 1850, badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3, name: "Sand Linen Blazer", category: "Outerwear", price: 1450,
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4, name: "Monogram Sand Tote", category: "Handbags", price: 1290,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5, name: "Sculpted Satin Evening Gown", category: "Dresses", price: 2850, badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6, name: "Soft-Tailored Wool Trousers", category: "Clothing", price: 980,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 7, name: "Cashmere Wrap Coat", category: "Outerwear", price: 3200, badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1548624149-fc5a5e9ee9d9?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 8, name: "Silk Column Skirt", category: "Clothing", price: 1150,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 9, name: "Luna Leather Shoulder Bag", category: "Handbags", price: 1680,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 10, name: "Fine-Knit Merino Sweater", category: "Knitwear", price: 890,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 11, name: "Linen Weekend Shirt", category: "Clothing", price: 620, badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 12, name: "Leather Atelier Loafers", category: "Shoes", price: 990,
    image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 13, name: "Gold-Tone Sculpted Cuff", category: "Accessories", price: 540,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 14, name: "Pleated Chiffon Blouse", category: "Clothing", price: 780,
    image: "https://images.unsplash.com/photo-1564257577-9d6c7a5e1a50?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 15, name: "Sculpted Leather Belt", category: "Accessories", price: 420,
    image: "https://images.unsplash.com/photo-1624222247344-550fb8d7c7f8?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 16, name: "The Weekend Carryall", category: "Handbags", price: 1950,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 17, name: "Cotton Poplin Midi Dress", category: "Dresses", price: 1380,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 18, name: "Cashmere Ribbed Scarf", category: "Accessories", price: 460,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 19, name: "Relaxed Tailored Blazer", category: "Outerwear", price: 1720, badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 20, name: "Minimal Leather Crossbody", category: "Handbags", price: 1420,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85"
  }
];

export const collections = [
  { title: "Women", subtitle: "Modern femininity", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85" },
  { title: "Men", subtitle: "Quiet confidence", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85" },
  { title: "Bags", subtitle: "Everyday icons", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85" }
];

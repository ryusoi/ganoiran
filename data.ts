import { Product } from './types';

// Base Supabase URL
export const STORAGE_URL = "https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media";

// Helper to resolve URLs from DB format to full URL
export const resolveUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  // If path is like 'media/filename.png' and BASE_URL ends in 'media', strip the prefix
  const cleanPath = path.startsWith('media/') ? path.replace('media/', '') : path;
  // Remove leading slash if present
  const finalPath = cleanPath.startsWith('/') ? cleanPath.substring(1) : cleanPath;
  return `${STORAGE_URL}/${finalPath}`;
};

export const formatPrice = (price: string | number) => {
  if (price === undefined || price === null || price === '') return '0';
  const clean = String(price).replace(/,/g, '');
  const num = parseInt(clean, 10);
  return isNaN(num) ? '0' : num.toLocaleString();
};

export const products: Product[] = [
  {
    id: 'a1b2c3d4-e5f6-47a8-91b0-1234567890ab',
    name: 'Gano Shakh - Pure Organic Reishi',
    short_name: 'Reishi Powder',
    description: 'Pure Organic Ganoderma Lucidum Powder - 150gm each minimum sized pack - All size packs available -Cultivated on whole wood log system - Unique Exceptional Quality Ganoderma Lucidum, best in the country.',
    long_description: 'Pure Organic Ganoderma Lucidum Powder - 150gm each minimum sized pack - All size packs available -Cultivated on whole wood log system - Unique Exceptional Quality Ganoderma Lucidum, best in the country. Gano Packs are 150 grams up to 1 kg.',
    price_rials: '9000000',
    image_url: 'https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/GANO%20SHAKH%20IMAGE.png',
    video_url: 'https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/GANO%20SHAKH%20VIDEO.mp4',
    gallery: [
      'https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/GANO%20SHAKH%20VIDEO.mp4',
      'https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/GANO%20SHAKH%20IMAGE.png',
      `${STORAGE_URL}/Gano%20Shakh%20Log.mp4`
    ],
    active: true,
    size: 'Gano Packs are 150 grams up to 1 kg',
    category: 'supplement',
    benefits: ['Whole Log Cultivation', '100% Organic', 'High Potency']
  },
  {
    id: 'b2c3d4e5-f6a7-48b9-92c1-2345678901bc',
    name: 'Gano Extract - Tincture',
    short_name: 'Extract',
    description: 'Pure Ganoderma Lucidum Extract 50ml bottle, highly concentrated, stored in tinted glass jars to protect bioactives from UV decomposition.',
    long_description: 'Pure Ganoderma Lucidum Extract 50ml bottle, highly concentrated, stored in tinted glass jars to protect bioactives from UV decomposition. Contains both water-soluble polysaccharides and alcohol-soluble triterpenes.',
    price_rials: '9700000',
    image_url: 'media/gano_extract.png', 
    video_url: 'https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Ganodrma%20Extract%20Top.mp4',
    gallery: [
      'https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Ganodrma%20Extract%20Top.mp4',
      'media/gano_extract.png',
      `${STORAGE_URL}/Gano%20Health.mp4`
    ],
    active: true,
    size: '50 cc tinted glass jar (Uv protected)',
    category: 'supplement',
    benefits: ['Dual Extract', 'UV Protected Jar', 'Liver Support']
  },
  {
    id: 'c3d4e5f6-a7b8-49ca-93d2-3456789012cd',
    name: 'Gano Luna - Anti-Wrinkle Night Cream',
    short_name: 'Luna',
    description: 'Anti-wrinkle night cream made from Ganoderma, miracle cream sold in 30ml bottles.',
    long_description: 'Anti-wrinkle night cream made from Ganoderma, miracle cream sold in 30ml bottles. A revolutionary anti-wrinkle formula using Reishi spores to accelerate cellular regeneration while you sleep.',
    price_rials: '8700000',
    image_url: 'media/gano_luna_night.png', 
    video_url: 'https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Gano%20Luna.mp4',
    gallery: [
      'https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Gano%20Luna.mp4',
      'media/gano_luna_night.png',
      `${STORAGE_URL}/Reishi%20Biome%20(2).mp4`
    ],
    active: true,
    size: '30 ml',
    category: 'skincare',
    benefits: ['Anti-Wrinkle', 'Cell Regeneration', 'Night Repair']
  },
  {
    id: 'd4e5f6a7-b8c9-4adb-94e3-4567890123de',
    name: 'Gano Sol - All Purpose Skin/Hair Day Gel',
    short_name: 'Sol',
    description: 'Day gel cream used for burns and as medicinal supplement for skin and hair. Can be used as hair gel to stop hair loss and regrow hair. Excellent for skin and sun burns.',
    long_description: 'Day gel cream used for burns and as medicinal supplement for skin and hair. Can be used as hair gel to stop hair loss and regrow hair. Excellent for skin and sun burns.',
    price_rials: '7500000',
    image_url: 'media/gano_sol_day_gel.png', 
    video_url: 'https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Gano%20Sol.mp4',
    gallery: [
      'https://qsikfiqqjxgichvjkvbz.supabase.co/storage/v1/object/public/media/Gano%20Sol.mp4',
      'media/gano_sol_day_gel.png',
      `${STORAGE_URL}/Gano%20Shakh%20(2).mp4`
    ],
    active: true,
    size: '50 ml',
    category: 'skincare',
    benefits: ['Burn Healing', 'Hair Regrowth', 'Sun Protection']
  }
];
export interface FrameColor {
  id: string;
  name: string;
  swatch: string;
  img: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  features: string[];
  technical: Record<string, string>;
  img: string;
  availableColors?: { id: string; name: string; hex: string }[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  variants: ProductVariant[];
}

export const FRAME_COLORS: FrameColor[] = [
  { id: 'white',      name: 'Arctic White',    swatch: '#e8e8e8', img: '/frame/ChatGPT_Image_Jun_16__2026__05_44_44_PM-removebg-preview.png' },
  { id: 'bronze',     name: 'Rose Bronze',     swatch: '#b08070', img: '/frame/ChatGPT Image Jun 17, 2026, 11_41_14 AM (3).png' },
  { id: 'gold',       name: 'Champagne Gold',  swatch: '#c8a84b', img: '/frame/ChatGPT Image Jun 17, 2026, 11_41_14 AM (2).png' },
  { id: 'anthracite', name: 'Anthracite Grey', swatch: '#3a3a3a', img: '/frame/ChatGPT Image Jun 17, 2026, 11_41_13 AM (1).png' },
];

export const CATEGORIES: ProductCategory[] = [
  {
    id: "balcony-system",
    name: "Balcony System",
    description: "Reclaim your outdoor space with our signature balcony systems. Enjoy 100% opening potential, excellent weather protection, and unobstructed views.",
    variants: [
      {
        id: "slide-turn",
        name: "Slide & Turn",
        tagline: "Premium space-saving slide and turn balcony partitions.",
        desc: "Our signature slide and turn glides on ultra-smooth tracks, allowing individual sheets of toughened glass to fully stack to either extreme corner. Offers 100% opening potential when desired, making it absolute king of balcony utility layout concepts.",
        features: ["No vertical frames for unobstructed views", "100% opening potential", "Premium smooth-gliding tracks", "Individual panels stack neatly"],
        technical: { glass: "Toughened Safety Glass", sealing: "Transparent H-Gaskets", profiles: "Premium Aluminum Rails", opening: "100% Clear Opening" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_13_49 PM.png",
        availableColors: [
          { id: 'black', name: 'Black', hex: '#222222' },
          { id: 'white', name: 'White', hex: '#ffffff' },
          { id: 'anthracite', name: 'Anthracite', hex: '#383e42' }
        ]
      },
      {
        id: "guillotine",
        name: "Guillotine Glass System",
        tagline: "Motorized vertical sliding panels for maximum convenience.",
        desc: "Experience ultimate luxury with our motorized guillotine glass systems. Vertical sliding panels provide adjustable ventilation and a seamless connection with the outdoors at the touch of a button.",
        features: ["Motorized remote operation", "Adjustable height positioning", "Sleek vertical movement", "High wind resistance"],
        technical: { operation: "Motorized Vertical", glass: "Insulated Double Glazing", framing: "Thermal Break Aluminum", control: "Remote / Smart Home" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_50_39 PM.png"
      }
    ]
  },
  {
    id: "internal-partition",
    name: "Internal Partition",
    description: "Sleek separation zones for functional multi-use spaces. Experience super smooth gliding and rapid space transitions.",
    variants: [
      {
        id: "telescopic",
        name: "Telescopic Sliders",
        tagline: "Overlapping glazed sheets for continuous tracks.",
        desc: "Experience super smooth gliding with our telescopic sliding system. Multiple glass panels overlap and slide seamlessly to provide a wide, continuous opening, ideal for internal partitions.",
        features: ["Smooth multi-track sliding mechanism", "Overlapping panels for continuous tracking", "Slim profiles for minimalist design"],
        technical: { tracks: "Multiple Tracks", operation: "Telescopic Sliding", glass: "Toughened Safety Glass" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_15_29 PM.png"
      },
      {
        id: "synchronized",
        name: "Synchronized Systems",
        tagline: "Panels partition left and right symmetrically.",
        desc: "A beautifully balanced system where panels split and fold to both left and right sides seamlessly. This symmetrical operation is perfect for wide interior openings.",
        features: ["Symmetrical split-fold operation", "Retains optimal balance for wide spans", "No vertical framing when closed"],
        technical: { operation: "Synchronized Sliding", glass: "Toughened Safety Glass", locking: "Secure Centre Lock" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_29_01 PM.png"
      },
      {
        id: "top-hang-bifold",
        name: "Top Hang Bi Fold",
        tagline: "Sleek folding structure for rapid partition transition zones.",
        desc: "Create dynamic and flexible spaces with our premium bi-fold glass system. Perfect for internal partitions, these connected panels fold concertina-style for rapid transitions without bottom floor tracks.",
        features: ["Top-hung clear floor operation", "Concertina-style folding mechanism", "Rapid and easy transitions"],
        technical: { operation: "Top Hung Bi-folding", hardware: "Heavy Duty Rollers", profiles: "Slimline Aluminum" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_27_22 PM.png"
      }
    ]
  },
  {
    id: "doors-windows",
    name: "Doors & Windows",
    description: "A reliable and classic range of sliding, openable, and foldable systems combining cost-effectiveness with signature premium hardware.",
    variants: [
      {
        id: "sliding-windows",
        name: "Sliding Windows & Doors",
        tagline: "Classic, cost-effective structural system layout.",
        desc: "A reliable and classic sliding system featuring multi-track layouts. It combines cost-effectiveness with our signature premium hardware, making it a versatile choice for standard doors and windows.",
        features: ["Classic multi-track sliding layout", "Cost-effective yet premium build", "Smooth and reliable rollers"],
        technical: { tracks: "2 or 3 Track Profiles", operation: "Parallel Sliding", glass: "Toughened Glass" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_25_52 PM.png"
      },
      {
        id: "openable-windows",
        name: "Openable Windows & Doors",
        tagline: "Traditional hinged solutions for maximum ventilation.",
        desc: "Premium openable casement windows and doors designed for maximum airflow, energy efficiency, and superior acoustic insulation.",
        features: ["Maximum ventilation opening", "High acoustic insulation", "Multi-point locking security"],
        technical: { operation: "Hinged Casement", glass: "Double Glazed Options", sealing: "High-grade EPDM" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_30_38 PM.png"
      },
      {
        id: "foldable-doors",
        name: "Foldable Doors (Bi Fold)",
        tagline: "Expansive opening capability with sturdy folding mechanics.",
        desc: "Connect your indoor and outdoor living spaces seamlessly with our heavy-duty exterior bi-fold doors, built to withstand the elements while providing elegant aesthetics.",
        features: ["Heavy-duty exterior folding mechanism", "Weather-sealed tracks", "Expansive clear openings"],
        technical: { operation: "Bottom Rolling Bi-fold", hardware: "Corrosion Resistant", weather: "High Weather Rating" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_16_49 PM.png"
      }
    ]
  },
  {
    id: "bathroom",
    name: "Bathroom",
    description: "Maximize your bathroom layout with our sleek glass enclosures featuring premium hardware.",
    variants: [
      {
        id: "90-encloser",
        name: "90 Degree Encloser",
        tagline: "Corner shower enclosures for optimal space utilization.",
        desc: "Maximize your bathroom layout with our sleek 90-degree corner shower enclosures, featuring frameless or semi-frameless designs for a modern look.",
        features: ["Space-saving corner design", "Frameless aesthetics", "Easy-clean glass coating"],
        technical: { angle: "90 Degree Join", glass: "Tempered Safety Glass", hardware: "Premium Stainless Steel" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 02_52_36 PM.png"
      },
      {
        id: "sliding-enclouser",
        name: "Sliding Enclouser",
        tagline: "Space-saving sliding shower screens.",
        desc: "Perfect for compact bathrooms, our smooth-gliding sliding enclosures provide elegant access without requiring swing space.",
        features: ["Zero outward swing space required", "Ultra-smooth roller mechanism", "Minimalist track design"],
        technical: { operation: "Linear Sliding", rollers: "Exposed or Concealed", glass: "Tempered Safety Glass" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 03_20_57 PM.png"
      },
      {
        id: "openable-bathroom",
        name: "Openable Door",
        tagline: "Hinged glass doors for modern bathroom aesthetics.",
        desc: "Classic and elegant, our hinged openable shower doors provide a wide, welcoming entry to your shower enclosure with premium heavy-duty hinges.",
        features: ["Wide clear entry", "Heavy-duty glass-to-wall hinges", "Magnetic seal closure"],
        technical: { operation: "Hinged Swing Door", hinges: "Solid Brass/Stainless", closure: "Magnetic Seals" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 01_10_02 PM.png"
      },
      {
        id: "fixed-partition",
        name: "Fixed Partition",
        tagline: "Minimalist fixed glass panels for walk-in showers.",
        desc: "Create a luxurious open walk-in shower experience with our minimalist fixed partition panels, custom cut for your specific space.",
        features: ["Ultimate minimalist aesthetic", "Zero moving parts", "Spacious walk-in feel"],
        technical: { installation: "U-Channel or Clamps", glass: "Thick Tempered Glass", support: "Stabilizing Bar" },
        img: "/infiwin images new/ChatGPT Image May 23, 2026, 12_15_29 PM.png"
      }
    ]
  }
];

export const getVariantById = (variantId: string): ProductVariant | undefined => {
  for (const category of CATEGORIES) {
    const variant = category.variants.find((v) => v.id === variantId);
    if (variant) return variant;
  }
  return undefined;
};

export const getCategoryByVariantId = (variantId: string): ProductCategory | undefined => {
  for (const category of CATEGORIES) {
    if (category.variants.some((v) => v.id === variantId)) {
      return category;
    }
  }
  return undefined;
};

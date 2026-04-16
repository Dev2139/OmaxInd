import productChiller from "@/assets/product-chiller.jpg";
import productTempController from "@/assets/product-tempcontroller.jpg";
import productConveying from "@/assets/product-conveying.jpg";
import productHopper from "@/assets/product-hopper.jpg";
import productDryer from "@/assets/product-dryer.jpg";

// Water Cooled Chillers image from Cloudinary
const waterCooledChillersImg = "https://res.cloudinary.com/dsddldquo/image/upload/q_auto/f_auto/v1775812327/krusgarrtrarfcs3ju9b.png";
const industrialWaterChillerNewImg = "https://res.cloudinary.com/dsddldquo/image/upload/v1776355916/l4pqgmdkwo5wi4ov7tc7.png";
const waterChiller1TRImg = "https://res.cloudinary.com/dsddldquo/image/upload/q_auto/f_auto/v1775813413/pkutvexbhsai2htnjkop.png";
const cncSpindleWaterChillerImg = "https://res.cloudinary.com/dsddldquo/image/upload/q_auto/f_auto/v1775813723/d1vn3i1pg2ysqebmk31t.png";
const roWaterChiller3TRImg = "https://res.cloudinary.com/dsddldquo/image/upload/q_auto/f_auto/v1775813962/yp0qbppaxmqyznriogz9.png";
const mouldTemperatureControllerNewImg = "https://res.cloudinary.com/dsddldquo/image/upload/q_auto/f_auto/v1775814293/utwjmczdzd8dmr9tyspy.png";
const heatPumpWaterHeaterImg = "https://res.cloudinary.com/dsddldquo/image/upload/q_auto/f_auto/v1775814609/czya2eeqze7q9zta5hf0.png";
const commercialWaterHeatPumpImg = "https://res.cloudinary.com/dsddldquo/image/upload/q_auto/f_auto/v1775814920/ovgbxdih8cxhkhflryac.png";
const labChillerImg = "https://res.cloudinary.com/dsddldquo/image/upload/v1776356140/gqvrpre6yqxcqvsuelsc.jpg";
import waterCooledAirChillerImg from "@/assets/water-cooled-air-chiller-img";

import industrialChillerImg from "@/assets/industrial-chiller-img";
import stainlessSteelWaterChillerImg from "@/assets/stainless-steel-water-chiller-img";
export const products: Product[] = [
  // ...existing products...
  {
    slug: "stainless-steel-water-chiller",
    name: "Stainless Steel Water Chillers",
    tagline: "Hygienic, corrosion-free cooling for critical applications",
    image: stainlessSteelWaterChillerImg,
    benefits: [
      "All wetted parts in stainless steel for hygiene and durability",
      "Corrosion-free operation for long service life",
      "High-efficiency cooling for demanding applications",
      "Easy to clean and maintain",
    ],
    overview:
      "Stainless Steel Water Chillers are engineered for industries where hygiene, corrosion resistance, and reliability are critical. With all wetted parts made from high-grade stainless steel, these chillers are ideal for food, beverage, pharmaceutical, and chemical applications, ensuring pure and uncontaminated cooling water.",
    features: [
      "All wetted parts in stainless steel",
      "Hermetically sealed scroll or reciprocating compressors",
      "Digital temperature control for precise cooling",
      "Double-walled insulated water tanks",
      "Low-maintenance, easy-to-clean design",
      "Integrated safety and alarm systems",
    ],
    specifications: [
      { label: "Cooling Capacity", value: "3 TR – 60 TR" },
      { label: "Temperature Range", value: "5°C – 25°C" },
      { label: "Reservoir Capacity", value: "50 – 600 Litres" },
      { label: "Compressor Type", value: "Scroll/Reciprocating" },
      { label: "Power Supply", value: "3 Phase, 415V, 50Hz" },
      { label: "Control System", value: "Digital microprocessor based" },
    ],
    modelSpecs: {
      headers: ["Model", "Cooling Capacity (TR)", "Reservoir (L)", "Compressor Type", "Power (kW)", "Dimensions (mm)", "Weight (Kg)"],
      rows: [
        ["SSWC-3", "3", "50", "Scroll", "2.8", "900x600x1000", "120"],
        ["SSWC-10", "10", "200", "Scroll", "7.2", "1300x800x1200", "300"],
        ["SSWC-20", "20", "400", "Reciprocating", "13.0", "1700x1000x1400", "520"],
        ["SSWC-40", "40", "600", "Reciprocating", "21.0", "2100x1200x1600", "900"],
      ],
    },
    applications: [
      "Food and beverage process cooling",
      "Pharmaceutical and chemical industries",
      "Medical and laboratory equipment cooling",
      "Plastic molding and extrusion",
      "Any application requiring pure, corrosion-free water",
    ],
  },
  {
    slug: "industrial-water-chiller",
    name: "Industrial Water Chiller",
    tagline: "Efficient process cooling for industrial applications",
    image: industrialChillerImg,
    benefits: [
      "High-efficiency cooling for continuous operation",
      "Robust construction for industrial environments",
      "Precise temperature control for process stability",
      "Energy-efficient and low maintenance design",
    ],
    overview:
      "The Industrial Water Chiller is engineered to deliver reliable and efficient cooling for a wide range of industrial processes. Designed for demanding environments, it ensures stable operation, protects equipment, and improves product quality by maintaining optimal process temperatures.",
    features: [
      "Advanced refrigeration system for rapid cooling",
      "Corrosion-resistant components for long service life",
      "User-friendly digital controls and monitoring",
      "Integrated safety features for fault protection",
      "Low noise and vibration operation",
      "Easy installation and minimal maintenance requirements",
    ],
    specifications: [
      { label: "Cooling Capacity", value: "Customizable (5 TR – 100+ TR)" },
      { label: "Temperature Range", value: "5°C – 30°C" },
      { label: "Reservoir Capacity", value: "100 – 1000 Litres" },
      { label: "Compressor Type", value: "Hermetically sealed scroll/reciprocating" },
      { label: "Power Supply", value: "3 Phase, 415V, 50Hz" },
      { label: "Control System", value: "Digital microprocessor based" },
    ],
    modelSpecs: {
      headers: ["Model", "Cooling Capacity (TR)", "Reservoir (L)", "Compressor Type", "Power (kW)", "Dimensions (mm)", "Weight (Kg)"],
      rows: [
        ["IWC-5", "5", "100", "Scroll", "4.5", "1200x800x1200", "250"],
        ["IWC-10", "10", "200", "Scroll", "7.5", "1400x900x1300", "350"],
        ["IWC-20", "20", "400", "Scroll", "13.5", "1800x1100x1500", "600"],
        ["IWC-30", "30", "600", "Reciprocating", "18.5", "2200x1300x1700", "900"],
      ],
    },
    applications: [
      "Plastic processing machine cooling",
      "Hydraulic oil temperature control",
      "Chemical and pharmaceutical process cooling",
      "Food and beverage industry cooling",
      "Laser and medical equipment cooling",
    ],
  },
  {
    slug: "water-cooled-air-chiller",
    name: "Water Cooled Air Chiller",
    tagline: "Dual-stage cooling for maximum efficiency and reliability",
    image: waterCooledAirChillerImg,
    benefits: [
      "Combines water and air cooling for superior performance",
      "Stable temperature control for sensitive processes",
      "Energy-saving operation with advanced components",
      "Low noise and vibration for quiet environments",
    ],
    overview:
      "The Water Cooled Air Chiller is designed for applications requiring both high cooling efficiency and reliability. By utilizing a dual-stage cooling system—water for primary heat removal and air for secondary dissipation—it ensures optimal temperature control for industrial and commercial processes, even in demanding conditions.",
    features: [
      "Dual-stage cooling: water-cooled condenser and air-cooled evaporator",
      "Digital temperature controller for precise adjustment",
      "Corrosion-resistant heat exchangers",
      "Automatic safety shutdown and alarms",
      "Easy-to-clean filters and accessible components",
      "Compact design for flexible installation",
    ],
    specifications: [
      { label: "Cooling Capacity", value: "5 TR – 80 TR" },
      { label: "Temperature Range", value: "7°C – 25°C" },
      { label: "Reservoir Capacity", value: "80 – 800 Litres" },
      { label: "Compressor Type", value: "Scroll/Reciprocating" },
      { label: "Power Supply", value: "3 Phase, 415V, 50Hz" },
      { label: "Control System", value: "Digital microprocessor based" },
    ],
    modelSpecs: {
      headers: ["Model", "Cooling Capacity (TR)", "Reservoir (L)", "Compressor Type", "Power (kW)", "Dimensions (mm)", "Weight (Kg)"],
      rows: [
        ["WCAC-5", "5", "80", "Scroll", "4.2", "1100x700x1100", "210"],
        ["WCAC-10", "10", "160", "Scroll", "7.8", "1300x850x1200", "320"],
        ["WCAC-20", "20", "320", "Scroll", "13.2", "1700x1000x1400", "540"],
        ["WCAC-40", "40", "600", "Reciprocating", "22.0", "2100x1200x1600", "950"],
      ],
    },
    applications: [
      "Plastic molding and extrusion cooling",
      "Chemical and pharmaceutical process cooling",
      "HVAC and building climate control",
      "Food and beverage process cooling",
      "Laser and electronics equipment cooling",
    ],
  },

  // --- Water Cooled Chillers (new fourth product) ---
  {
    slug: "water-cooled-chillers",
    name: "Water Cooled Chillers",
    tagline: "High-efficiency water-cooled chillers for industrial process cooling",
    image: waterCooledChillersImg,
    benefits: [
      "Superior cooling efficiency using water as the primary heat removal medium",
      "Stable temperature control for critical industrial processes",
      "Energy-efficient operation with reduced environmental impact",
      "Robust construction for continuous, reliable service",
    ],
    overview:
      "Water Cooled Chillers are engineered for applications demanding high cooling efficiency and reliability. By utilizing water as the main cooling medium, these chillers deliver consistent temperature control, making them ideal for large-scale industrial, commercial, and process cooling requirements.",
    features: [
      "Water-cooled condenser for maximum heat transfer",
      "Digital temperature controller for precise operation",
      "Corrosion-resistant heat exchangers",
      "Integrated safety and alarm systems",
      "Low noise and vibration design",
      "Easy maintenance and service access",
    ],
    specifications: [
      { label: "Cooling Capacity", value: "5 TR – 100 TR" },
      { label: "Temperature Range", value: "5°C – 25°C" },
      { label: "Reservoir Capacity", value: "100 – 1000 Litres" },
      { label: "Compressor Type", value: "Scroll/Reciprocating" },
      { label: "Power Supply", value: "3 Phase, 415V, 50Hz" },
      { label: "Control System", value: "Digital microprocessor based" },
    ],
    modelSpecs: {
      headers: ["Model", "Cooling Capacity (TR)", "Reservoir (L)", "Compressor Type", "Power (kW)", "Dimensions (mm)", "Weight (Kg)"],
      rows: [
        ["WCC-5", "5", "100", "Scroll", "4.5", "1200x800x1200", "250"],
        ["WCC-10", "10", "200", "Scroll", "7.5", "1400x900x1300", "350"],
        ["WCC-20", "20", "400", "Scroll", "13.5", "1800x1100x1500", "600"],
        ["WCC-40", "40", "800", "Reciprocating", "22.0", "2200x1300x1700", "950"],
      ],
    },
    applications: [
      "Plastic processing and extrusion cooling",
      "Chemical and pharmaceutical process cooling",
      "HVAC and building climate control",
      "Food and beverage industry cooling",
      "Laser and electronics equipment cooling",
    ],
  },
  // --- End Water Cooled Chillers ---

  // --- Industrial Water Chiller (new fifth product) ---
  {
    slug: "industrial-water-chiller-system",
    name: "Industrial Water Chiller",
    tagline: "Advanced cooling solutions for robust industrial processes",
    image: industrialWaterChillerNewImg,
    benefits: [
      "Optimized for heavy-duty industrial applications",
      "Enhanced energy efficiency with advanced compressors",
      "Precise temperature control for critical processes",
      "Durable construction for reliable continuous operation",
    ],
    overview:
      "Our Industrial Water Chillers are specifically designed to meet the rigorous demands of robust industrial environments. With high cooling capacities and energy-efficient operation, they ensure consistent performance, process stability, and increased lifespan of your equipment.",
    features: [
      "Heavy-duty hermetic scroll or reciprocating compressors",
      "Microprocessor-based digital temperature controller",
      "High-efficiency heat exchangers for rapid cooling",
      "Integrated safety modules and fault alarms",
      "Corrosion-resistant insulated reservoir tanks",
      "Low noise and vibration resilient design",
    ],
    specifications: [
      { label: "Cooling Capacity", value: "10 TR – 120 TR" },
      { label: "Temperature Range", value: "5°C – 30°C" },
      { label: "Reservoir Capacity", value: "200 – 1200 Litres" },
      { label: "Compressor Type", value: "Scroll/Reciprocating" },
      { label: "Power Supply", value: "3 Phase, 415V, 50Hz" },
      { label: "Control System", value: "Advanced Digital Microprocessor" },
    ],
    modelSpecs: {
      headers: ["Model", "Cooling Capacity (TR)", "Reservoir (L)", "Compressor Type", "Power (kW)", "Dimensions (mm)", "Weight (Kg)"],
      rows: [
        ["IWC-S10", "10", "200", "Scroll", "7.5", "1400x900x1300", "360"],
        ["IWC-S20", "20", "400", "Scroll", "14.0", "1800x1100x1500", "620"],
        ["IWC-S50", "50", "800", "Reciprocating", "28.0", "2300x1400x1800", "1100"],
        ["IWC-S100", "100", "1200", "Reciprocating", "55.0", "2800x1600x2000", "1800"],
      ],
    },
    applications: [
      "Heavy plastic processing and extrusion",
      "Metalworking and machine cooling",
      "Chemical manufacturing processes",
      "Large-scale food and beverage production",
      "Centralized facility cooling systems",
    ],
  },
  // --- End Industrial Water Chiller (new fifth product) ---

  // --- Water Chiller 1 TR (new sixth product) ---
  {
    slug: "water-chiller-1-tr",
    name: "Water Chiller 1 TR",
    tagline: "Compact and efficient 1 Ton refrigeration for small-scale processes",
    image: waterChiller1TRImg,
    benefits: [
      "Compact footprint, ideal for limited spaces",
      "Low power consumption with high cooling efficiency",
      "Plug-and-play installation for immediate use",
      "Precise temperature control for sensitive applications",
    ],
    overview:
      "The Water Chiller 1 TR is a compact, high-efficiency cooling solution designed specifically for small-scale industrial, medical, and laboratory applications. Delivering 1 Ton of refrigeration (approx. 3.5 kW), it provides stable and accurate temperature control while occupying minimal floor space.",
    features: [
      "Hermetically sealed rotary or scroll compressor",
      "Microprocessor-based PID temperature controller for precise accuracy",
      "Built-in stainless steel coolant tank and process pump",
      "Low noise operation suitable for indoor environments",
      "Eco-friendly refrigerant (R-410a / R-134a)",
      "Caster wheels for easy mobility",
    ],
    specifications: [
      { label: "Cooling Capacity", value: "1 TR (approx. 3.5 kW)" },
      { label: "Temperature Range", value: "5°C – 25°C" },
      { label: "Reservoir Capacity", value: "20 – 50 Litres" },
      { label: "Compressor Type", value: "Rotary/Scroll" },
      { label: "Power Supply", value: "Single Phase, 230V, 50Hz" },
      { label: "Refrigerant", value: "R-410a / R-134a" },
    ],
    modelSpecs: {
      headers: ["Model", "Cooling Capacity (TR)", "Reservoir (L)", "Compressor Type", "Power (kW)", "Dimensions (mm)", "Weight (Kg)"],
      rows: [
        ["WC-1TR", "1.0", "30", "Rotary/Scroll", "1.2", "600x500x800", "85"],
      ],
    },
    applications: [
      "Laser cutting and marking machines",
      "Laboratory and analytical instruments",
      "Small injection molding machines",
      "Medical and diagnostic equipment",
      "Spindle cooling for CNC routers",
    ],
  },
  // --- End Water Chiller 1 TR (new sixth product) ---

  // --- CNC Spindle Water Chiller (new seventh product) ---
  {
    slug: "cnc-spindle-water-chiller",
    name: "CNC Spindle Water Chiller",
    tagline: "High-precision cooling mechanism for CNC router spindles",
    image: cncSpindleWaterChillerImg,
    benefits: [
      "Extends the operational life of CNC spindles",
      "Prevents thermal deformation for higher machining accuracy",
      "Intelligent temperature control algorithms",
      "Compact design for easy integration into CNC stations",
    ],
    overview:
      "The CNC Spindle Water Chiller provides reliable and precise cooling specifically for CNC routers, engravers, and milling machines. By maintaining the optimal temperature of high-speed spindles, it ensures consistent cutting quality, reduces wear and tear, and prevents costly spindle burnouts over prolonged operations.",
    features: [
      "High-precision digital temperature controller (±0.3°C accuracy)",
      "Built-in flow alarm and over-temperature alarm protections",
      "Closed-loop water circulation to prevent contamination",
      "Durable, corrosion-resistant internal water pump",
      "Visual water level gauge for easy monitoring",
      "Low maintenance required and simple to operate",
    ],
    specifications: [
      { label: "Cooling Capacity", value: "0.8 kW – 3.0 kW" },
      { label: "Temperature Control", value: "Intelligent / Constant Mode" },
      { label: "Pump Lift", value: "10m – 25m" },
      { label: "Tank Capacity", value: "6 – 15 Litres" },
      { label: "Power Supply", value: "Single Phase, 220V, 50/60Hz" },
      { label: "Protections", value: "Compressor over-current, flow alarm, high/low temperature alarm" },
    ],
    modelSpecs: {
      headers: ["Model", "Cooling Capacity (kW)", "Tank (L)", "Pump Lift (m)", "Max Flow (L/min)", "Dimensions (mm)", "Weight (Kg)"],
      rows: [
        ["CW-3000", "50W/°C", "9", "10", "10", "470x270x370", "24"],
        ["CW-5000", "0.8", "6", "10", "10", "580x290x470", "26"],
        ["CW-5200", "1.4", "6", "25", "16", "580x290x470", "27"],
      ],
    },
    applications: [
      "CNC router spindles (woodworking, stone, metal)",
      "Laser engraving and cutting machines",
      "UV printing equipment",
      "High-speed motorized spindles",
      "Small-scale laboratory equipment",
    ],
  },
  // --- End CNC Spindle Water Chiller (new seventh product) ---

  // --- RO Water Chiller 3 TR (new eighth product) ---
  {
    slug: "ro-water-chiller-3-tr",
    name: "RO Water Chiller 3 TR",
    tagline: "Pure and consistent cooling for Reverse Osmosis water systems",
    image: roWaterChiller3TRImg,
    benefits: [
      "Ensures optimal temperature for high-quality RO water output",
      "Prevents microbial growth by maintaining chilled water lines",
      "Energy-efficient design for 24/7 continuous operation",
      "Constructed with food-grade materials to prevent contamination",
    ],
    overview:
      "The RO Water Chiller 3 TR is specifically engineered to integrate with Reverse Osmosis (RO) plants. Delivering 3 Tons of Refrigeration (approx. 10.5 kW), it successfully cools purified RO water to precise temperatures, preserving its taste, quality, and hygienic state for drinking water, beverage processing, and pharmaceutical applications.",
    features: [
      "Food-grade SS304/SS316 stainless steel heat exchangers and wetted parts",
      "High-performance hermetic scroll compressor",
      "Digital microprocessor control panel for accurate temperature management",
      "Automatic fail-safe mechanisms including anti-freeze protection",
      "High-density PUF insulated storage tank to restrict cooling loss",
      "Low noise levels and reduced vibration footprint",
    ],
    specifications: [
      { label: "Cooling Capacity", value: "3 TR (approx. 10.5 kW)" },
      { label: "Temperature Range", value: "8°C – 20°C" },
      { label: "Reservoir Capacity", value: "100 – 200 Litres" },
      { label: "Wetted Parts Material", value: "SS 304 / SS 316 (Food Grade)" },
      { label: "Power Supply", value: "3 Phase, 415V, 50Hz" },
      { label: "Ideal Application", value: "RO Plants, Drinking Water, Beverages" },
    ],
    modelSpecs: {
      headers: ["Model", "Cooling Capacity (TR)", "Reservoir (L)", "Compressor Type", "Power (kW)", "Dimensions (mm)", "Weight (Kg)"],
      rows: [
        ["RO-WC-3TR", "3.0", "150", "Scroll", "3.5", "1000x700x1100", "180"],
      ],
    },
    applications: [
      "Commercial RO water purification plants",
      "Packaged drinking water and bottling facilities",
      "Food and beverage processing lines",
      "Pharmaceutical and clinical laboratories",
      "Centralized drinking water systems for large complexes",
    ],
  },
  // --- End RO Water Chiller 3 TR (new eighth product) ---

  // --- Mould Temperature Controller (new ninth product) ---
  {
    slug: "mould-temperature-controller-unit",
    name: "Mould Temperature Controller",
    tagline: "High-precision thermal regulation for injection moulding",
    image: mouldTemperatureControllerNewImg,
    benefits: [
      "Optimizes product quality by maintaining consistent mould temperatures",
      "Reduces production cycle times and minimizes defect rates",
      "Fast heating and cooling for highly responsive temperature control",
      "Energy-saving operation with highly efficient pumps and heaters",
    ],
    overview:
      "Our advanced Mould Temperature Controller accurately maintains the desired mould temperature during plastic injection moulding, die-casting, and extrusion processes. Utilizing oil or water as a heat transfer medium, it ensures impeccable surface finishes and dimensional stability for your manufactured parts.",
    features: [
      "P.I.D. multi-stage temperature control system (accuracy up to ±1°C)",
      "High-efficiency, high-temperature heat transfer pumps",
      "Multiple safety alarms including reverse phase, pump overload, and overheat",
      "Stainless steel internal pipework to minimize pipe rust",
      "Automatic exhaust function upon startup",
      "Easy-to-read digital temperature display panel",
    ],
    specifications: [
      { label: "Control Platform", value: "P.I.D. Microprocessor" },
      { label: "Medium", value: "Water / Thermal Oil" },
      { label: "Max Temperature Range", value: "90°C (Water) / 200°C (Oil)" },
      { label: "Heating Power", value: "6 kW – 24 kW" },
      { label: "Pump Power", value: "0.5 HP – 3.0 HP" },
      { label: "Power Supply", value: "3 Phase, 415V, 50Hz" },
    ],
    modelSpecs: {
      headers: ["Model", "Medium", "Heating (kW)", "Pump Power (HP)", "Max Flow (L/min)", "Dimensions (mm)", "Weight (Kg)"],
      rows: [
        ["MTC-W6", "Water", "6", "0.5", "45", "650x320x650", "55"],
        ["MTC-W12", "Water", "12", "1.0", "60", "700x350x700", "75"],
        ["MTC-O9", "Oil", "9", "0.5", "45", "700x350x750", "80"],
        ["MTC-O18", "Oil", "18", "2.0", "100", "800x400x850", "110"],
      ],
    },
    applications: [
      "Plastic injection moulding machines",
      "Aluminium and zinc die-casting",
      "Rubber moulding and extrusion",
      "Chemical reaction vessels",
      "Blow moulding operations",
    ],
  },
  // --- End Mould Temperature Controller (new ninth product) ---

  // --- Heat Pump Water Heater (new tenth product) ---
  {
    slug: "heat-pump-water-heater",
    name: "Heat Pump Water Heater",
    tagline: "Highly efficient and eco-friendly industrial water heating",
    image: heatPumpWaterHeaterImg,
    benefits: [
      "Up to 75% energy savings compared to conventional electric heaters",
      "Environmentally friendly with zero direct emissions",
      "Provides both heating and localized cooling simultaneously",
      "Reliable and consistent hot water supply in all weather conditions",
    ],
    overview:
      "The Heat Pump Water Heater is a sustainable heating solution that extracts ambient heat from the air and transfers it into the water reservoir. Ideal for large-scale commercial and industrial applications, it significantly lowers operational energy costs while delivering robust, consistent hot water up to 60°C - 75°C.",
    features: [
      "Advanced vapor compression cycle using eco-friendly refrigerants",
      "Intelligent micro-computer control display for automated operation",
      "Built-in protection against over-pressure, high current, and overheating",
      "Heavy-duty compressors designed for high ambient temperatures",
      "High-efficiency tube-in-tube or shell-and-tube heat exchangers",
      "Automatic defrosting system for seamless winter operation",
    ],
    specifications: [
      { label: "Heating Capacity", value: "10 kW – 150 kW" },
      { label: "Max Output Temperature", value: "60°C – 75°C" },
      { label: "Power Supply", value: "3 Phase, 415V, 50Hz" },
      { label: "Refrigerant", value: "R410A / R134a" },
      { label: "Operation Ambient Temp", value: "-10°C to 45°C" },
      { label: "Compressor Type", value: "Scroll System" },
    ],
    modelSpecs: {
      headers: ["Model", "Heating Capacity (kW)", "Max Temp (°C)", "Rated Power (kW)", "Water Yield (L/h)", "Dimensions (mm)", "Weight (Kg)"],
      rows: [
        ["HPWH-10", "10", "60", "2.5", "215", "850x400x950", "95"],
        ["HPWH-20", "20", "60", "4.8", "430", "1100x450x1200", "145"],
        ["HPWH-50", "50", "60", "12.0", "1075", "1450x700x1600", "320"],
        ["HPWH-100", "100", "60", "24.5", "2150", "2200x1100x1800", "550"],
      ],
    },
    applications: [
      "Hotels, resorts, and large residential complexes",
      "Hospitals and commercial laundry facilities",
      "Pre-heating for industrial boiler feeds",
      "Food and beverage sanitary hot water processing",
      "Swimming pool heating and spa facilities",
    ],
  },
  // --- End Heat Pump Water Heater (new tenth product) ---

  // --- Commercial Water Heat Pump (new eleventh product) ---
  {
    slug: "commercial-water-heat-pump",
    name: "Commercial Water Heat Pump",
    tagline: "Heavy-duty centralized water heating for large-scale facilities",
    image: commercialWaterHeatPumpImg,
    benefits: [
      "Maximum heat recovery for significant long-term energy savings",
      "Robust anti-corrosion outer shell for demanding environments",
      "Seamless integration with existing boiler or solar heater systems",
      "Ensures stable high-volume hot water delivery even during peak demand",
    ],
    overview:
      "The Commercial Water Heat Pump is engineered to meet the massive hot water demands of modern commercial and industrial facilities. Utilizing advanced air-to-water heat exchange technologies, it provides continuous large-capacity heating with an exceptional Coefficient of Performance (COP), drastically minimizing running costs and carbon footprint.",
    features: [
      "Modular design allows multiple units to connect and cascade",
      "Top-discharge axial fans for superior aerodynamic efficiency",
      "Evaporator with hydrophilic coating to resist frost buildup",
      "Advanced PLC control system with remote monitoring capabilities",
      "Electronic expansion valves for precise refrigerant flow control",
      "Auto-restart memory function in case of power interruption",
    ],
    specifications: [
      { label: "Heating Capacity", value: "30 kW – 300 kW" },
      { label: "Max Water Temperature", value: "55°C – 65°C" },
      { label: "Power Supply", value: "3 Phase, 415V, 50Hz" },
      { label: "Refrigerant", value: "Eco-friendly R410A" },
      { label: "C.O.P. Range", value: "Up to 4.5" },
      { label: "Compressor Type", value: "Scroll / Semi-Hermetic" },
    ],
    modelSpecs: {
      headers: ["Model", "Capacity (kW)", "Max Temp (°C)", "Rated Power (kW)", "Water Yield (L/h)", "Dimensions (mm)", "Weight (Kg)"],
      rows: [
        ["CWHP-30", "30", "60", "7.0", "645", "1100x1100x1600", "280"],
        ["CWHP-50", "50", "60", "11.5", "1075", "1500x1100x1600", "350"],
        ["CWHP-100", "100", "60", "23.5", "2150", "2200x1200x1800", "580"],
        ["CWHP-200", "200", "60", "47.0", "4300", "3000x2000x2100", "1100"],
      ],
    },
    applications: [
      "Large-scale hospitality sites and commercial resorts",
      "University campuses and dormitory complexes",
      "Public swimming pool centers",
      "Factory process manufacturing and staff showers",
      "High-rise commercial office buildings",
    ],
  },
  // --- End Commercial Water Heat Pump (new eleventh product) ---

  // --- Lab Chiller (new twelfth product) ---
  {
    slug: "lab-chiller",
    name: "Lab Chiller",
    tagline: "Precision cooling engineered for laboratory and research environments",
    image: labChillerImg,
    benefits: [
      "Ultra-precise temperature stability for sensitive experiments",
      "Compact and quiet design ideal for lab environments",
      "Corrosion-resistant wetted parts for chemical compatibility",
      "Easy-to-use digital controls with programmable setpoints",
    ],
    overview:
      "The Lab Chiller is a high-precision cooling system engineered specifically for laboratory, research, and analytical applications. Delivering stable and accurate temperature control, it cools instruments, reactors, analytical equipment, and samples with minimal fluctuation — ensuring repeatable, reliable results in your most critical experiments.",
    features: [
      "PID microprocessor controller with ±0.1°C temperature accuracy",
      "Stainless steel or chemical-resistant wetted parts",
      "Low-noise hermetic compressor for quiet lab operation",
      "Compact benchtop or floor-standing cabinet design",
      "Integrated reservoir with circulation pump",
      "Multiple safety alarms: over-temperature, low flow, low level",
    ],
    specifications: [
      { label: "Cooling Capacity", value: "0.3 kW – 5 kW" },
      { label: "Temperature Range", value: "-20°C – +40°C" },
      { label: "Temperature Stability", value: "±0.1°C" },
      { label: "Reservoir Capacity", value: "4 – 30 Litres" },
      { label: "Power Supply", value: "Single / 3 Phase, 220–415V, 50Hz" },
      { label: "Refrigerant", value: "R-404A / R-410A (eco-friendly)" },
    ],
    modelSpecs: {
      headers: ["Model", "Cooling Capacity (kW)", "Temp Range (°C)", "Reservoir (L)", "Pump Flow (L/min)", "Dimensions (mm)", "Weight (Kg)"],
      rows: [
        ["LC-300", "0.3", "-10 to +40", "4", "6", "380x280x580", "28"],
        ["LC-800", "0.8", "-20 to +40", "8", "12", "480x330x650", "42"],
        ["LC-2000", "2.0", "-20 to +40", "15", "20", "600x420x850", "75"],
        ["LC-5000", "5.0", "-20 to +40", "30", "30", "750x500x1050", "120"],
      ],
    },
    applications: [
      "Chemical and biochemical reaction cooling",
      "Analytical instrumentation (HPLC, spectroscopy)",
      "Rotary evaporators and condensers",
      "Medical and clinical diagnostic equipment",
      "Semiconductor and electronics testing",
    ],
  },
  // --- End Lab Chiller (new twelfth product) ---
];

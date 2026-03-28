import productDryer from "@/assets/product-dryer.jpg";
import productHopper from "@/assets/product-hopper.jpg";
import productConveying from "@/assets/product-conveying.jpg";
import productTempController from "@/assets/product-tempcontroller.jpg";
import productChiller from "@/assets/product-chiller.jpg";

export interface ModelSpec {
  headers: string[];
  rows: string[][];
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  benefits: string[];
  overview: string;
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
  modelSpecs?: ModelSpec;
}

export const products: Product[] = [
  {
    slug: "hot-air-dryer",
    name: "Hot Air Dryer",
    tagline: "Uniform drying for consistent material quality up to 180°C",
    image: productDryer,
    benefits: [
      "Uniform air and heat distribution",
      "Quick-clean design with swivel cylinder",
      "Insulated heating chamber prevents heat loss",
      "Inbuilt magnet protects from ferrous material",
    ],
    overview:
      "Omax Hot Air Dryers (OHD & OMHD Series) deliver reliable moisture removal from plastic granules before processing. Built with aluminium casting cone, MS cone, and stainless steel cylinder, they feature low watt density heaters for longer life and high pressure centrifugal blowers with adjustable dampers for precise air flow control.",
    features: [
      "Uniform air / heat distribution",
      "Quick-clean design due to swivel able cylinder",
      "Suitable for high drying temperature up to 180°C",
      "Viewing window for monitoring material level",
      "Aluminium casting cone, MS cone and stainless steel cylinder",
      "In colony low watt density heaters for better life",
      "Drain port in discharge valve for quick change over of material",
      "Insulated heating chamber to prevent heat loss",
      "High pressure centrifugal blower with appropriate air flow",
      "Adjustable damper for air flow control",
      "Inbuilt magnet to protect machine from ferrous material",
    ],
    specifications: [
      { label: "Model Range", value: "OHD-30 to OHD-1200" },
      { label: "Capacity", value: "30 kg – 1200 kg" },
      { label: "Heating Power", value: "2.1 kW – 24 kW" },
      { label: "Blowing Power", value: "90 W – 1500 W" },
      { label: "Voltage (Small)", value: "230V, 1Ø (OHD-30, OHD-50)" },
      { label: "Voltage (Large)", value: "415V, 3Ø (OHD-100 onwards)" },
      { label: "Series", value: "OHD (60° cone) & OMHD (<60° cone)" },
    ],
    modelSpecs: {
      headers: ["Model & Capacity", "Height", "Weight", "Depth", "Heating Power (kW)", "Blowing Power (W)", "Voltage"],
      rows: [
        ["OHD-30", "990", "710", "350", "2.1", "90", "230V, 1Ø"],
        ["OHD-50", "1150", "790", "390", "2.7", "90", "230V, 1Ø"],
        ["OHD-100", "1220", "850", "450", "3.9", "200", "415V, 3Ø"],
        ["OHD-150", "1310", "1020", "660", "6", "250", "415V, 3Ø"],
        ["OHD-200", "1390", "1020", "660", "6", "250", "415V, 3Ø"],
        ["OHD-300", "1640", "1250", "840", "10", "400", "415V, 3Ø"],
        ["OHD-400", "1840", "1250", "840", "10/12", "400", "415V, 3Ø"],
        ["OHD-600", "1910", "1360", "990", "18", "750", "415V, 3Ø"],
        ["OHD-800", "2260", "1370", "980", "18", "750", "415V, 3Ø"],
        ["OHD-1200", "2600", "1400", "1400", "24", "1500", "415V, 3Ø"],
      ],
    },
    applications: [
      "Injection molding pre-drying",
      "Blow molding material preparation",
      "Extrusion line material conditioning",
      "Recycled material processing",
    ],
  },
  {
    slug: "single-phase-hopper-loader",
    name: "Single Phase Hopper Loader",
    tagline: "Contamination-free automatic loading up to 100 kg/hr",
    image: productHopper,
    benefits: [
      "No risk of material contamination or corrosion",
      "Maximum performance at every loading cycle",
      "Soft start function with warning signals",
      "Easy cleaning and total safety",
    ],
    overview:
      "Omax Single Phase Hopper Loaders offer easy-link automatic coupling stations, pure flow receivers, and Varyo Series vacuum units. Built with SS304 material of construction and microprocessor-based control with digital display, they handle all granular materials with zero contamination risk.",
    features: [
      "Easy link automatic coupling stations",
      "Pure flow Receivers",
      "Varyo Series Vacuum Units",
      "S-series Single Phase Hopper Loader",
      "Ryng Production Monitoring",
      "Microprocessor based control with digital display",
      "Audio alarm in case of fault",
    ],
    specifications: [
      { label: "Capacity", value: "Up to 100 kg/hr – Up to 30 kg/hr" },
      { label: "MOC", value: "SS304" },
      { label: "Alarms", value: "Audio alarm in case of fault" },
      { label: "Control", value: "Microprocessor based with digital display" },
    ],
    modelSpecs: {
      headers: ["Specification", "Value"],
      rows: [
        ["Capacity", "Up to 100 kg/hr – Up to 30 kg/hr"],
        ["MOC", "SS304"],
        ["Alarms", "Audio alarm in case of fault"],
        ["Control", "Microprocessor based control with digital display"],
      ],
    },
    applications: [
      "Injection molding machine feeding",
      "Extruder material supply",
      "Small to medium production setups",
      "Single machine material loading",
    ],
  },
  {
    slug: "three-phase-hopper-loader",
    name: "Three Phase Hopper Loader",
    tagline: "High-capacity automatic loading up to 2000 kg/hr",
    image: productHopper,
    benefits: [
      "Energy efficient operation",
      "Reduction of dust generation",
      "Adjustment of vacuum for individual receiver",
      "Ordinary maintenance reduced by 50%",
    ],
    overview:
      "Omax Three Phase Hopper Loaders deliver automatic loading without human intervention for regrind and virgin material. With modular construction, they can be upgraded for future expansion and feature cost-effective central blower and control to cater two or three loaders simultaneously.",
    features: [
      "Automatic loading without human intervention for regrind & virgin material",
      "Option for abrasive material conveying",
      "Ratio loading for 2 different materials in single unit",
      "Specially designed filter and dust separators with exclusive filter media",
      "Modular construction – upgradeable for future expansion",
      "Cost effective central blower for two or three loaders simultaneously",
      "Tools free concept for ease of maintenance",
    ],
    specifications: [
      { label: "Capacity", value: "Up to 2000 kg/hr – 30 kg/hr onwards" },
      { label: "MOC", value: "Aluminium alloy and SS304" },
      { label: "Alarms", value: "Audio alarm in case of fault" },
      { label: "Control", value: "Microprocessor based with digital display" },
    ],
    modelSpecs: {
      headers: ["Specification", "Value"],
      rows: [
        ["Capacity", "Up to 2000 kg/hr – 30 kg/hr onwards"],
        ["MOC", "Aluminium alloy and SS304"],
        ["Alarms", "Audio alarm in case of fault"],
        ["Control", "Microprocessor based control with digital display"],
      ],
    },
    applications: [
      "Large injection molding plants",
      "Central resin conveying systems",
      "Multi-machine production lines",
      "High-volume processing facilities",
    ],
  },
  {
    slug: "central-conveying-system",
    name: "Central Conveying System",
    tagline: "Fully automatic material transfer for multiple machines",
    image: productConveying,
    benefits: [
      "Reduced spillage and wastage",
      "Increased productivity through labour saving",
      "Neat and clean work area",
      "Modular system with easy future expansion",
    ],
    overview:
      "Omax Central Conveying Systems provide sophisticated material conveying management for different materials feeding multiple machines. With high-end PLC based central control unit with touch screen and colour graphics display, they offer complete customized solutions as per plant layout and requirement.",
    features: [
      "Sophisticated material conveying management for multiple machines",
      "Complete customized solution as per plant layout & requirement",
      "Fully automatic material transfer for longer distance",
      "Complete flexibility in handling various materials",
      "Central raw material storage",
      "Minimum breakdown in production",
      "Up to 1000 alarm history can be stored",
      "2 USB port, 1 Ethernet port connection",
      "Status monitoring with audio and visual alarm",
      "Modular system with scope of easy future expansion",
    ],
    specifications: [
      { label: "Solution Type", value: "Customised as per requirement" },
      { label: "Key Components", value: "Vacuum Blower, Filters, PLC Control, Switch gears" },
      { label: "Dust Cleaning", value: "Patented automatic dust cleaning system" },
      { label: "Safety Filter", value: "Vacuum blower with central safety filter" },
      { label: "Loader Body", value: "Robust cast aluminium" },
      { label: "Control Unit", value: "High-end PLC with touch screen & colour graphics" },
    ],
    modelSpecs: {
      headers: ["Specification", "Details"],
      rows: [
        ["Solution Type", "Customised as per requirement"],
        ["Vacuum Blower", "Imported performance related components"],
        ["Filters", "Patented automatic dust cleaning system"],
        ["Safety Filter", "Vacuum blower with central safety filter & auto filter cleaning"],
        ["Loader Body", "Robust cast aluminium body"],
        ["Control Unit", "High-end PLC with touch screen & colour graphics display"],
        ["Connectivity", "2 USB ports, 1 Ethernet port"],
        ["Alarm History", "Up to 1000 alarm history storage"],
      ],
    },
    applications: [
      "Large injection molding plants",
      "Multi-machine extrusion lines",
      "Automated plastics factories",
      "High-volume production facilities",
    ],
  },
  {
    slug: "mould-temperature-controller",
    name: "Mould Temperature Controller",
    tagline: "Oil and water based systems for precise mould temperature control",
    image: productTempController,
    benefits: [
      "Oil based up to 150°C, water based up to 95°C",
      "Digital display of set and actual value",
      "Easy to operate with user-friendly controls",
      "Overload protection with audible alarm",
    ],
    overview:
      "Omax Mould Temperature Controllers (OMT Series) deliver precise, stable temperature regulation for injection moulds. Available in both oil-based (max 150°C) and water-based (max 95°C) configurations with flow and high pressure powerful pumps, they ensure dimensional accuracy and surface finish quality.",
    features: [
      "Oil based system for max 150°C and water based for max 95°C",
      "Digital display of set and actual value on screen",
      "Flow and high pressure powerful pump",
      "Dry running protection by level monitoring device",
      "Automatic water refilling in water based unit",
      "Painted with P.U. paint",
      "Corrosion proof material in water line",
      "User friendly control and fault indication",
      "Overload protection of pump",
      "Audible alarm for fault indication",
    ],
    specifications: [
      { label: "Model Range", value: "OMT-3 to OMT-18 (Oil & Water)" },
      { label: "Heating Capacity", value: "3 kW – 18 kW" },
      { label: "Max Temperature (Oil)", value: "150°C" },
      { label: "Max Temperature (Water)", value: "95°C" },
      { label: "Pump Pressure", value: "3.8 – 5.0 Bar" },
      { label: "Flow Rate", value: "65 – 100 LPM" },
      { label: "Tank Volume", value: "16 – 45 L" },
      { label: "Operating Voltage", value: "415V, 50Hz, 3 Phase" },
      { label: "Control Voltage", value: "230V" },
    ],
    modelSpecs: {
      headers: ["Model", "Circulating Media", "Heating kW", "Max Temp °C", "Cooling kW", "Pump Bar", "Pump kW", "Flow LPM", "Tank L", "Weight Kg"],
      rows: [
        ["OMT-3 (Oil)", "Oil", "3", "150", "20", "3.8", "0.5", "65", "16", "60"],
        ["OMT-6 (Oil)", "Oil", "6", "150", "20", "3.8", "0.5", "65", "16", "60"],
        ["OMT-8 (Oil)", "Oil", "9", "150", "20", "3.8", "0.5", "65", "16", "60"],
        ["OMT-12 (Oil)", "Oil", "12", "150", "28", "5.0", "2.2", "100", "45", "135"],
        ["OMT-18 (Oil)", "Oil", "18", "150", "28", "5.0", "2.2", "100", "45", "135"],
        ["OMT-3 (Water)", "Water", "3", "95", "20", "3.8", "0.5", "65", "16", "60"],
        ["OMT-6 (Water)", "Water", "6", "95", "20", "3.8", "0.5", "65", "16", "60"],
        ["OMT-8 (Water)", "Water", "9", "95", "20", "3.8", "0.5", "65", "16", "60"],
        ["OMT-12 (Water)", "Water", "12", "95", "28", "5.0", "2.2", "100", "45", "135"],
        ["OMT-18 (Water)", "Water", "18", "95", "28", "5.0", "2.2", "100", "45", "135"],
      ],
    },
    applications: [
      "Injection mould temperature regulation",
      "Die casting thermal control",
      "Rubber processing",
      "Chemical reaction temperature control",
    ],
  },
  {
    slug: "water-cooled-chiller",
    name: "Water Cooled Water Chiller",
    tagline: "High-capacity cooling from 20.4 kW to 190 kW",
    image: productChiller,
    benefits: [
      "Wide range from OMW-5 to OMW-50",
      "High volume water reservoir up to 500 litres",
      "Standard process pump included",
      "415V, 3 Phase with neutral and earthing",
    ],
    overview:
      "Omax Water Cooled Water Chillers (OMW Series) provide precise cooling for plastic processing machines and moulds. With nominal capacity ranging from 20.4 kW to 190 kW and water reservoir capacity up to 500 litres, they maintain stable process temperatures for continuous operation.",
    features: [
      "Wide capacity range from 20.4 kW to 190 kW",
      "Standard process pump (1.2 – 5.5 kW)",
      "Maximum flow up to 480 LPM",
      "Maximum pressure up to 5.6 Bar",
      "Water reservoir capacity up to 500 litres",
      "415V, 50Hz, 3 Phase with Neutral and Earthing",
    ],
    specifications: [
      { label: "Model Range", value: "OMW-5 to OMW-50" },
      { label: "Nominal Capacity", value: "20.4 kW(TR) – 190 kW(TR)" },
      { label: "Max Flow to Process", value: "130 – 480 LPM" },
      { label: "Max Pressure", value: "4.6 – 5.6 Bar" },
      { label: "Water Reservoir", value: "100 – 500 Litres" },
      { label: "Weight", value: "350 – 1950 Kg" },
      { label: "Voltage", value: "415V, 50Hz, 3 Phase" },
    ],
    modelSpecs: {
      headers: ["Model", "Capacity kW(TR)", "Compressor", "Pump kW", "Max Flow LPM", "Max Bar", "Reservoir L", "Condenser Flow LPM", "Weight Kg"],
      rows: [
        ["OMW-5", "20.4 (5.8)", "1/3.85", "1.2", "130", "4.6", "100", "110-130", "350"],
        ["OMW-6", "22.6 (6.4)", "1/3.98", "1.2", "130", "4.6", "100", "130-150", "350"],
        ["OMW-7", "28.2 (8)", "1/3.17", "2.2", "230", "4.8", "150", "150-180", "699"],
        ["OMW-8", "36.7 (10.4)", "1/3.56", "2.2", "230", "4.8", "150", "175-220", "699"],
        ["OMW-10", "43.8 (12.4)", "1/3.05", "2.2", "230", "4.8", "150", "220-240", "699"],
        ["OMW-12", "47.2 (13.4)", "1/3.89", "2.2", "230", "4.8", "150", "220-250", "780"],
        ["OMW-15", "55.1 (15)", "1/10.2", "2.2", "230", "4.8", "200", "250-275", "820"],
        ["OMW-17", "73.4 (20.8)", "1/14.15", "2.2", "230", "4.8", "200", "275-300", "880"],
        ["OMW-24", "94.4 (26.8)", "1/18", "2.2", "230", "4.8", "200", "350-400", "1250"],
        ["OMW-30", "110.2 (31.3)", "1/21.5", "4", "380", "5.3", "300", "400-450", "1550"],
        ["OMW-40", "40-150 (43)", "1/14.0", "5.5", "480", "5.6", "500", "600", "1650"],
        ["OMW-50", "190 (54)", "2/18", "5.5", "480", "5.6", "500", "700", "1950"],
      ],
    },
    applications: [
      "Injection molding machine cooling",
      "Extrusion line cooling",
      "Blow molding process cooling",
      "Hydraulic oil cooling",
    ],
  },
  {
    slug: "air-cooled-chiller",
    name: "Air Cooled Water Chiller",
    tagline: "Reliable air-cooled process cooling from 17.8 kW to 172 kW",
    image: productChiller,
    benefits: [
      "Proven component supplier",
      "Hermetically sealed gas cooled scroll compressor",
      "Stainless steel insulated tank",
      "High performance with low maintenance",
    ],
    overview:
      "Omax Air Cooled Water Chillers (OMA Series) feature hermetically sealed suction gas cooled scroll compressors, large size stainless steel insulated tanks, and high volume high pressure pumps. With indicator lights showing state of pump, compressor, and temperature, they offer complete process visibility.",
    features: [
      "Proven Component Supplier",
      "Fault indication with audio alarm",
      "Sight glass with moisture indicator",
      "Filter dryer to ensure moisture free system",
      "Precise control and monitoring of outlet temperature",
      "Hermetically sealed suction gas cooled scroll compressor",
      "Large size stainless steel insulated tank to prevent heat loss",
      "High volume, high pressure pump with water level sensor",
      "Dry running protection by water level in tank",
      "Tool free access panels with neatly organized internals",
      "Crank case heater to prevent liquid migration in compressor",
      "All chilled water contact surfaces – non-ferrous for corrosion protection",
    ],
    specifications: [
      { label: "Model Range", value: "OMA-5 to OMA-50" },
      { label: "Nominal Capacity", value: "17.8 kW(TR) – 172 kW(TR)" },
      { label: "Max Flow to Process", value: "130 – 480 LPM" },
      { label: "Max Pressure", value: "4.6 – 5.6 Bar" },
      { label: "Water Reservoir", value: "100 – 500 Litres" },
      { label: "Weight", value: "476 – 1600 Kg" },
      { label: "Voltage", value: "415V, 50Hz, 3 Phase" },
    ],
    modelSpecs: {
      headers: ["Model", "Capacity kW(TR)", "Compressor", "Pump kW", "Max Flow LPM", "Max Bar", "Reservoir L", "Weight Kg", "Connected Load"],
      rows: [
        ["OMA-5", "17.8 (5.0)", "5.22", "1.2", "130", "4.6", "100", "476", "7.62"],
        ["OMA-6", "19.45 (5.5)", "1/5.37", "1.2", "130", "4.6", "100", "476", "7.77"],
        ["OMA-7", "25.6 (7.2)", "1/6.96", "2.2", "230", "4.8", "150", "699", "10.06"],
        ["OMA-8", "32.2 (9.4)", "1/9.06", "2.2", "230", "4.8", "150", "699", "13.16"],
        ["OMA-10", "40 (11.3)", "1/10.76", "2.2", "230", "4.8", "150", "700", "14.6"],
        ["OMA-12", "45 (12.2)", "1/11.61", "2.2", "230", "4.8", "150", "700", "15.61"],
        ["OMA-15", "50 (14.2)", "1/13.65", "2.2", "230", "4.8", "200", "900", "17.65"],
        ["OMA-17", "66.4 (18.8)", "1/18.36", "2.2", "230", "4.8", "200", "975", "24.36"],
        ["OMA-24", "86 (24.4)", "1/23.1", "2.2", "230", "4.8", "200", "1050", "29.1"],
        ["OMA-30", "100 (28.5)", "1/27.6", "4", "380", "5.3", "300", "1500", "37.3"],
        ["OMA-40", "135 (38.3)", "2/18.3", "5.5", "480", "5.6", "500", "1600", "49.82"],
        ["OMA-50", "172 (49)", "2/23.1", "5.5", "480", "5.6", "500", "1600", "59.3"],
      ],
    },
    applications: [
      "Injection molding machine cooling",
      "Extrusion line cooling",
      "Blow molding process cooling",
      "Hydraulic oil cooling",
    ],
  },
];

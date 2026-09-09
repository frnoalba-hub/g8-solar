export const LOCATION_IMAGE_URL = "https://media.base44.com/images/public/69a537c21eb5bc0a1e508288/75a05adf0_generated_c32b951c.png";

export const whySolarBySlug = {
  "chico-ca": "Chico homeowners often weigh solar against long cooling seasons and PG&E rate structures. Strong roof exposure can support daytime production, while storage may help households use more of that energy after sunset or reserve selected loads for an outage.",
  "redding-ca": "Redding's hot summers can place sustained demand on home cooling systems. Solar planning is most useful when it reflects the property's actual utility territory, daytime use, and any need to keep essential equipment operating during an outage.",
  "monterey-ca": "Monterey homeowners may consider solar to support long-term energy planning while making productive use of suitable roof space. Coastal weather, roof materials, shading, and evening consumption should all shape the design rather than a statewide production average.",
  "salinas-ca": "Salinas homes can benefit from a solar review that accounts for both inland sun and coastal weather patterns. The best comparison connects roof condition and household load timing to current utility rules, with storage evaluated separately for evening use or backup.",
  "fresno-ca": "Fresno's extended cooling season can make electricity use especially significant during summer afternoons and evenings. Solar and optional storage should be sized from a full usage history, roof exposure, and planned loads such as an EV or upgraded HVAC.",
  "visalia-ca": "Visalia homeowners often consider solar in response to recurring warm-weather cooling demand. A property-specific design can coordinate strong Central Valley sun with SCE billing rules, roof readiness, and the household's evening electricity needs.",
  "sacramento-ca": "Sacramento homes commonly experience substantial summer cooling loads, making the timing of energy use important. A useful solar comparison applies the correct SMUD or alternate utility rules and considers whether storage supports evening consumption, resilience, or both.",
  "stockton-ca": "Stockton homeowners may use solar to address daytime household loads and seasonal air-conditioning demand. The design should account for PG&E rate details, roof exposure, and how much generation the home can use directly before storage is considered.",
  "modesto-ca": "Modesto's hot summers make annual usage and time-of-day consumption central to solar planning. Because utility territory can vary, homeowners benefit from a design based on the actual MID or PG&E account, plus the roof and electrical service at the property.",
  "lake-isabella-ca": "Lake Isabella homeowners may consider solar for both daytime production and greater preparedness in an area where rural access and outages can matter. Storage planning should identify essential circuits and realistic operating duration while the array is designed around heat, shade, and site conditions.",
  "pasadena-ca": "Pasadena homeowners may consider solar to use suitable roof space for daytime production while planning around PWP's municipal rules. Mature tree cover, older housing, and evening loads make a shade review and address-specific battery comparison especially useful.",
  "los-angeles-ca": "Los Angeles homeowners may consider solar as household demand grows through air conditioning, EV charging, or an accessory dwelling unit. Compact roofs, hillside access, and LADWP program rules mean the system should be designed for the exact property rather than a regional average.",
  "arcadia-ca": "Arcadia homeowners often balance abundant sun with mature tree canopy, tile roofs, pool equipment, and cooling demand. A thoughtful solar plan measures usable roof exposure and considers how storage could shift daytime production into higher-use evening hours.",
  "glendora-ca": "Glendora's warm summers and foothill setting can make both cooling demand and outage planning important. Solar production should be assessed against seasonal shade and roof access, while storage should be tied to clearly defined essential circuits.",
  "monrovia-ca": "Monrovia homeowners may consider solar for daytime production and optional resilience, but foothill shade and older roofs can change the available design. Reviewing the existing electrical service and any preservation requirements early helps keep the proposal realistic.",
  "duarte-ca": "Duarte homes can pair strong regional sunlight with a design focused on afternoon and evening electricity use. Seasonal foothill shading, usable roof sections, and SCE export timing should be reviewed before deciding whether a battery adds practical value.",
  "azusa-ca": "Azusa homeowners may consider solar to serve cooling and household loads under the city's municipal electric rules. The proposal should distinguish daytime self-consumption from exported power and define whether a battery is intended for evening use, outage support, or both.",
  "el-monte-ca": "El Monte homeowners may consider solar where compact roofs can still support useful daytime generation. Meter configuration, accessory units, neighboring shade, and future EV loads need to be documented so the system serves the intended account and usage pattern.",
  "alhambra-ca": "Alhambra homeowners may consider solar as a long-term energy upgrade for older or space-constrained properties. Roof layout, electrical-service condition, shared ownership, and evening consumption should be resolved before equipment and optional storage are selected.",
  "san-gabriel-ca": "San Gabriel homeowners may consider solar to make productive use of suitable roof surfaces while addressing cooling and household electricity demand. Tile roofing, mature landscaping, and current SCE export rules make site-specific production and storage assumptions important.",
  "rancho-cucamonga-ca": "Rancho Cucamonga homeowners often evaluate solar alongside heavy summer cooling and growing EV demand. Because municipal and SCE service can vary by address, the utility account, roof exposure, and battery goals should be confirmed together.",
  "ontario-ca": "Ontario homeowners may consider solar for cooling loads, EV charging, or an expanding household energy profile. Existing panels, roof condition, and SCE interconnection status should be documented before planning a new system, expansion, or compatible battery.",
  "riverside-ca": "Riverside's long warm season can create substantial afternoon cooling demand that deserves a property-specific solar review. Municipal utility rules, roof exposure, and compliant battery placement all influence whether solar-only or solar-plus-storage is the better fit.",
  "san-bernardino-ca": "San Bernardino homeowners may consider solar to address sustained summer electricity use and improve preparedness for selected outage loads. Annual consumption, roof readiness, foothill or valley shade, and SCE billing rules should guide the design.",
  "bakersfield-ca": "Bakersfield's extended heat and air-conditioning season can make load timing a major part of solar planning. Homeowners benefit from a design that accounts for dust, roof maintenance access, PG&E rules, and clearly limited battery backup goals."
};

const defaultCards = [
  { title: "Production fit", text: "The comparison should connect usable roof exposure and system size to a property-specific production estimate." },
  { title: "Utility fit", text: "The serving utility, current tariff, load timing, and export assumptions should be stated clearly." },
  { title: "Storage fit", text: "Battery capacity should reflect whether the goal is evening self-consumption, selected outage loads, or both." },
  { title: "Contract fit", text: "Equipment, project scope, financing, warranties, and installation responsibilities should be documented in writing." }
];

export const regionDecisionCards = {
  "San Gabriel Valley": [
    { title: "Canopy and roof fit", text: "Mature trees, foothill shadows, tile roofing, and multiple roof planes should be measured before usable array space is estimated." },
    { title: "Local utility fit", text: "PWP, Azusa Light & Water, SCE, or another serving utility can apply, so tariff and export rules must follow the actual account." },
    { title: "Evening and backup fit", text: "Storage should be compared against evening cooling, pool or household loads, then separately sized for any essential outage circuits." },
    { title: "Property approval fit", text: "Roof work, electrical upgrades, battery clearances, historic review, and owner or association approvals belong in the written scope." }
  ],
  "Los Angeles": [
    { title: "Urban roof fit", text: "Compact lots, neighboring buildings, multiple roof planes, and hillside exposure determine how much unshaded array area is practical." },
    { title: "LADWP account fit", text: "The proposal should apply the program and interconnection terms for the utility shown on the bill rather than importing SCE assumptions." },
    { title: "New-load fit", text: "EV charging, an ADU, air conditioning, and other planned loads should be shown separately from measured historical consumption." },
    { title: "Access and permit fit", text: "Hillside logistics, equipment locations, panel work, permits, and installation responsibilities should be defined before contracting." }
  ],
  "Inland Empire": [
    { title: "Heat-load fit", text: "Long cooling seasons and afternoon demand should be evaluated across a full usage history instead of sizing from one high bill." },
    { title: "Territory fit", text: "SCE, Riverside Public Utilities, Rancho Cucamonga Municipal Utility, or another provider may govern the address and export treatment." },
    { title: "EV and storage fit", text: "Planned vehicle charging and evening cooling should inform battery scheduling, while outage circuits require a separate power review." },
    { title: "Site-readiness fit", text: "Roof age, foothill access, service-panel capacity, battery clearances, and association requirements should appear in the project scope." }
  ],
  "Central Valley": [
    { title: "Cooling-season fit", text: "Array sizing should reflect annual consumption, prolonged summer air-conditioning, and the share of load occurring during solar hours." },
    { title: "Provider-boundary fit", text: "PG&E, SCE, MID, or another local provider can change export and interconnection assumptions, so the exact account leads the analysis." },
    { title: "Future-load fit", text: "An EV, heat-pump HVAC, pool equipment, or other planned electrification should be modeled apart from current usage." },
    { title: "Roof and service fit", text: "Sun exposure, roof condition, main-service capacity, storage location, and maintenance access should be resolved in writing." }
  ],
  "Central Coast": [
    { title: "Coastal production fit", text: "Marine weather, seasonal cloud cover, shading, roof orientation, and usable area should inform the production model." },
    { title: "Account and export fit", text: "The serving utility and current tariff should anchor assumptions for daytime self-use, exported generation, and interconnection." },
    { title: "Evening-use fit", text: "Storage should be compared with the home's after-sunset demand and backup priorities rather than added through a generic package." },
    { title: "Material and warranty fit", text: "Roof materials, coastal exposure, mounting details, equipment models, and workmanship coverage should be identified in the agreement." }
  ],
  "Capital Region": [
    { title: "Summer profile fit", text: "Sacramento cooling demand and daytime household use should be reviewed together to establish a defensible production target." },
    { title: "SMUD territory fit", text: "SMUD and neighboring utility rules are not interchangeable, so rates, exports, and interconnection must match the service address." },
    { title: "Electrification fit", text: "Future vehicle charging, heat pumps, and evening loads should shape the solar and battery comparison without being mixed into past usage." },
    { title: "Milestone fit", text: "Permitting, utility review, equipment, installation scope, warranties, and project responsibilities should be mapped in the proposal." }
  ],
  "North Valley": [
    { title: "Long-summer fit", text: "Sustained heat, cooling demand, roof exposure, and seasonal shading should drive production assumptions for North Valley homes." },
    { title: "Utility-boundary fit", text: "PG&E, Redding Electric Utility, or another provider may serve the property, each with account-specific rates and solar requirements." },
    { title: "Resilience fit", text: "Battery planning should name critical circuits, power limits, and target outage duration instead of implying unrestricted whole-home backup." },
    { title: "Site and scope fit", text: "Roof readiness, electrical work, access conditions, equipment details, and installation responsibilities should be confirmed before signing." }
  ],
  "Kern River Valley": [
    { title: "Rural site fit", text: "Access, roof exposure, heat, shading, and distance from installation resources should be assessed at the Lake Isabella property." },
    { title: "SCE account fit", text: "The serving provider and current tariff should be verified before solar exports or expected battery operation are modeled." },
    { title: "Outage-duration fit", text: "Essential pumps, refrigeration, communications, or medical loads need a defined power and duration target for storage design." },
    { title: "Delivery-scope fit", text: "Permitting conditions, electrical upgrades, equipment availability, site logistics, and warranties should be documented for the address." }
  ],
  "Southern Central Valley": [
    { title: "Extreme-heat fit", text: "Bakersfield production and sizing should reflect an extended cooling season, evening demand, roof temperature, and annual usage." },
    { title: "PG&E tariff fit", text: "Current account terms, export timing, and any existing solar status should be verified before estimated bill effects are discussed." },
    { title: "Dust and storage fit", text: "Soiling and maintenance access affect the array, while battery design should distinguish evening self-use from essential backup." },
    { title: "Electrical-scope fit", text: "Roof condition, service-panel work, equipment models, backup circuits, financing, and warranties should be explicit in the agreement." }
  ]
};

export const getRegionDecisionCards = (region) => regionDecisionCards[region] || defaultCards;
export interface ZModel {
  id: string
  name: string
  subtitle?: string
  years: string
  chassis: string
  bodyStyle: string
  image: string
  powerRange: string
  facts: string[]
  specialEditions?: string[]
  isFacelift?: boolean
  faceliftChanges?: string[]
}

export const zModels: ZModel[] = [
  {
    id: 'z1',
    name: 'Z1',
    years: '1989-1991',
    chassis: 'Z1',
    bodyStyle: 'Roadster',
    image: '/images/z1.png',
    powerRange: '170 hp',
    facts: [
      'Featured unique vertically retracting doors that disappeared into the sills',
      'Only 8,000 units were produced',
      'First BMW Z-series model',
      'Plastic body panels could be removed and replaced individually',
      'Developed by BMW Technik GmbH as a technology showcase',
    ],
    specialEditions: ['Original Z-series roadster'],
  },

  {
    id: 'z3-roadster',
    name: 'Z3',
    subtitle: 'Roadster',
    years: '1995-2002',
    chassis: 'E36/7',
    bodyStyle: 'Roadster',
    image: '/images/z3-roadster.png',
    powerRange: '115-231 hp',
    facts: [
      'Featured in the James Bond film "GoldenEye" before launch',
      'First BMW manufactured in Spartanburg, South Carolina',
      'Based on the E36 Compact platform',
      'Nearly 300,000 roadsters were produced',
      'Received a major facelift in 1999 with wider rear styling',
    ],
    specialEditions: ['James Bond Edition', '007 Special Edition'],
  },

  {
    id: 'z3-m',
    name: 'Z3',
    subtitle: 'M Roadster',
    years: '1997-2002',
    chassis: 'E36/7',
    bodyStyle: 'Roadster',
    image: '/images/z3-m.png',
    powerRange: '240-325 hp',
    facts: [
      'Powered by S50, S52, and later S54 M engines',
      'European models initially received the S50 engine',
      '2001 models gained the S54 from the E46 M3',
      'Featured wider rear fenders and quad exhaust outlets',
      'Among the most sought-after modern BMW M roadsters',
    ],
    specialEditions: ['M Roadster S52', 'M Roadster S54'],
  },

  {
    id: 'z3-coupe',
    name: 'Z3',
    subtitle: 'Coupe',
    years: '1998-2002',
    chassis: 'E36/8',
    bodyStyle: 'Coupe',
    image: '/images/z3-coupe.png',
    powerRange: '193-325 hp',
    facts: [
      'Nicknamed the "Clown Shoe" due to its distinctive shooting-brake profile',
      'Considerably stiffer than the roadster variant',
      'Originally developed from an internal enthusiast project',
      'Combined sports-car dynamics with practical cargo space',
      'Among the most collectible modern BMWs',
    ],
    specialEditions: ['M Coupe S52', 'M Coupe S54'],
  },

  {
    id: 'z8',
    name: 'Z8',
    years: '1999-2003',
    chassis: 'E52',
    bodyStyle: 'Roadster',
    image: '/images/z8.png',
    powerRange: '400 hp',
    facts: [
      'Designed by Henrik Fisker as a modern homage to the BMW 507',
      'Featured in the James Bond film "The World Is Not Enough"',
      'Used an aluminum space-frame chassis',
      'Only 5,703 units were produced worldwide',
      'Powered by the S62 V8 shared with the E39 M5',
    ],
    specialEditions: ['Alpina Roadster V8'],
  },

  {
    id: 'z4-e85-roadster',
    name: 'Z4',
    subtitle: 'E85 Roadster',
    years: '2003-2008',
    chassis: 'E85',
    bodyStyle: 'Roadster',
    image: '/images/z4-e85-roadster.png',
    powerRange: '170-265 hp',
    facts: [
      'Designed by Chris Bangle and Anders Warming',
      'Introduced BMW\'s "flame surfacing" design language to the Z range',
      'Significantly stiffer chassis than the Z3 Roadster',
      'Featured near 50:50 weight distribution',
      'Received a major facelift in 2006 including new engines and styling revisions',
    ],
    specialEditions: ['3.0si', 'Alpina Roadster S'],
  },

  {
    id: 'z4-e85-m',
    name: 'Z4',
    subtitle: 'M Roadster',
    years: '2006-2008',
    chassis: 'E85',
    bodyStyle: 'Roadster',
    image: '/images/z4-e85-m.png',
    powerRange: '343 hp',
    facts: [
      'Powered by the S54 inline-six from the E46 M3',
      'Available exclusively with a six-speed manual transmission',
      'Featured M-tuned suspension, brakes, and limited-slip differential',
      'Produced for only two model years',
      'Widely regarded as one of the greatest driver-focused BMW roadsters',
    ],
    specialEditions: ['Z4 M Roadster'],
  },

  {
    id: 'z4-e86-coupe',
    name: 'Z4',
    subtitle: 'Coupe',
    years: '2006-2008',
    chassis: 'E86',
    bodyStyle: 'Coupe',
    image: '/images/z4-e85-coupe.png',
    powerRange: '215-343 hp',
    facts: [
      'Fixed-roof version of the E85 Roadster',
      'Offered in both standard and M Coupe variants',
      'Provided greater structural rigidity than the Roadster',
      'Combined sports-car handling with practical hatchback cargo space',
      'Limited production has made it highly collectible',
    ],
    specialEditions: ['Z4 M Coupe'],
  },

  {
    id: 'z4-e89',
    name: 'Z4',
    subtitle: 'E89',
    years: '2009-2016',
    chassis: 'E89',
    bodyStyle: 'Retractable Hardtop',
    image: '/images/z4-e89-roadster.png',
    powerRange: '156-340 hp',
    facts: [
      'First Z model with a retractable hardtop roof',
      'Roof operation took approximately 20 seconds',
      'Introduced turbocharged engines to the Z roadster range',
      'No dedicated BMW M model was produced',
      'Received a facelift for the 2013 model year',
    ],
    specialEditions: ['sDrive35is', 'Pure Fusion Design'],
  },

  {
    id: 'z4-g29',
    name: 'Z4',
    subtitle: 'G29',
    years: '2018-2026',
    chassis: 'G29',
    bodyStyle: 'Roadster',
    image: '/images/z4-g29-roadster.png',
    powerRange: '197-387 hp',
    facts: [
      'Co-developed with Toyota and shares its platform with the A90 Supra',
      'Returned to a traditional fabric soft-top roof',
      'M40i models use BMW’s B58 turbocharged inline-six',
      'Built by Magna Steyr in Graz, Austria',
      'Production concluded in 2026 with the Final Edition',
    ],
    specialEditions: ['M40i First Edition', 'Final Edition'],
  },
]
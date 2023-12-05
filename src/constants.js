// import { BLOCKED_PAGES } from "next/dist/shared/lib/constants";
// import { Bigelow_Rules } from "next/font/google";

export const SITE_TITLE = 'Framer Motion Bologna';
export const LIGHT_SITE_TITLE = 'Framer Motion Bologna';
export const DARK_SITE_TITLE = 'Framer Motion Bologna';
export const LIGHT_ICON = '🚀';
export const DARK_ICON = '⚰️'
export const COLOR_THEME_COOKIE_NAME = 'color-theme';

export const FAVICON = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍🏫</text></svg>";

export const PARAGRAPH = `Amicissime meus Harrius et pecuniam nostram servamus ut deliciolum nostrum aperiamus. Possedi vermes. Id quod amet vocamus, "Vangiones accepi." Lorem in amet vermibus praedia vendere.`;

export const CODE_FONT_SIZE = '1.2rem';

// export const DESKTOP_WIDTH = '40%';
// export const LAPTOP_WIDTH = '40%';
// export const TABLET_WIDTH = '70%';
// export const PHONE_WIDTH = '85%';



export const RESPONSIVE_WIDTHS = {
  '--desktop-width': '50%',
  '--laptop-width': '60%',
  '--tablet-width': '70%',
  '--mobile-width': '85%'
}

export const UTILS = {
  '--corner-large': '12px',
  '--corner-medium': '8px',
  '--corner-small': '5px',
  '--padding-extra-large': '32px',
  '--padding-large': '24px',
  '--padding-medium': '12px',
  '--padding-small': '6px',
  '--border_block_inner': '105px',
  '--border_block_outer': '120px',
  '--border_block_radius': '16px',
  '--viewport-padding': '16px',
  '--viewport-margin': '16px',
}


export const LIGHT_COLORS = {
  '--color-text': 'hsl(0deg 0% 5%)',
  '--color-text-code': 'hsla(194, 81%, 78%, 1)',
  '--color-primary-100': 'hsla(34, 67%, 87%, 1)',
  '--color-primary-300': 'hsla(34, 67%, 82%, 1)',
  '--color-primary-500': 'hsla(34, 67%, 77%, 1)',
  '--color-primary-700': 'hsla(34, 67%, 72%, 1)',
  '--color-primary-900': 'hsla(34, 67%, 65%, 1)',
  '--color-primary-1000': 'hsla(34, 67%, 40%, 1)',
  '--color-primary-contrast': 'white',
  '--color-secondary-500': 'hsla(0, 37%, 76%, 1)',
  '--color-decorative-100': 'hsla(160, 100%, 80%, 1)',
  '--color-decorative-200': 'hsla(160, 100%, 75%, 1)',
  '--color-decorative-300': 'hsla(160, 100%, 70%, 1)',
  '--color-decorative-500': 'hsla(160, 100%, 65%, 1)',
  '--color-decorative-600': 'hsla(160, 100%, 60%, 1)',
  '--color-decorative-700': 'hsla(160, 100%, 55%, 1)',
  '--color-decorative-800': 'hsla(160, 100%, 50%, 1)',
  '--color-decorative-900': 'hsla(160, 100%, 45%, 1)',
  '--color-gray-0': 'white',
  '--color-gray-100': 'hsl(50deg 20% 90%)',
  '--color-gray-200': 'hsl(50deg 15% 85%)',
  '--color-gray-300': 'hsl(50deg 10% 70%)',
  '--color-gray-500': 'hsl(50deg 4% 50%)',
  '--color-gray-700': 'hsl(50deg 10% 25%)',
  '--color-gray-900': 'hsl(50deg 20% 10%)',
  '--color-gray-1000': 'black',
  '--shadow-color-light': 'hsl(0deg 0% 63% / 0.36)'
};

export const DARK_COLORS = {
  '--color-text': 'hsl(0deg 0% 100%)',
  '--color-text-code': 'hsla(0, 0%, 13%, 1)',
  // Purples
  '--color-primary-100': 'hsl(270deg 50% 45%)',
  '--color-primary-300': 'hsl(270deg 45% 40%)',
  '--color-primary-500': 'hsl(270deg 40% 35%)',
  '--color-primary-700': 'hsl(270deg 35% 25%)',
  '--color-primary-900': 'hsl(256deg 30% 15%)',
  '--color-primary-1000': 'hsl(256deg 25% 10%)',
  '--color-primary-contrast': 'black',
  '--color-secondary-500': 'hsl(328deg 100% 50%)',
  // Turquoises
  '--color-decorative-100': 'hsl(183deg 60% 80%)',
  '--color-decorative-200': 'hsl(183deg 60% 70%)',
  '--color-decorative-300': 'hsl(183deg 60% 60%)',
  '--color-decorative-500': 'hsl(183deg 60% 50%)',
  '--color-decorative-600': 'hsl(183deg 60% 40%)',
  '--color-decorative-700': 'hsl(183deg 60% 30%)',
  '--color-decorative-800': 'hsl(183deg 60% 20%)',
  '--color-decorative-900': 'hsl(183deg 60% 10%)',
  '--color-gray-0': 'black',
  '--color-gray-100': 'hsl(256deg 10% 10%)',
  '--color-gray-200': 'hsl(256deg 10% 20%)',
  '--color-gray-300': 'hsl(256deg 10% 30%)',
  '--color-gray-500': 'hsl(256deg 10% 40%)',
  '--color-gray-700': 'hsl(256deg 10% 55%)',
  '--color-gray-900': 'hsl(256deg 10% 70%)',
  '--color-gray-1000': 'white',
};


// Special colors
LIGHT_COLORS['--color-primary'] = LIGHT_COLORS['--color-primary-500'];
LIGHT_COLORS['--color-secondary'] = LIGHT_COLORS['--color-secondary-500'];
LIGHT_COLORS['--color-inline-code-bg'] = 'hsl(45deg 74% 85%)';
LIGHT_COLORS['--color-selection-text'] = 'black';
LIGHT_COLORS['--color-selection-background'] = LIGHT_COLORS['--color-decorative-100'];
LIGHT_COLORS['--color-backdrop'] = 'hsla(52, 99%, 100%, 1)';
LIGHT_COLORS['--color-backdrop-highlight'] = LIGHT_COLORS['--color-primary-100'];
LIGHT_COLORS['--color-page-background'] = LIGHT_COLORS['--color-decorative-100'];
LIGHT_COLORS['--color-page-border'] = 'transparent';
LIGHT_COLORS['--color-card-background'] = LIGHT_COLORS['--color-gray-0'];
LIGHT_COLORS['--color-card-border'] = 'transparent';
DARK_COLORS['--color-primary'] = DARK_COLORS['--color-primary-500'];
DARK_COLORS['--color-secondary'] = DARK_COLORS['--color-secondary-500'];
DARK_COLORS['--color-inline-code-bg'] = 'hsl(256deg 30% 22%)';
DARK_COLORS['--color-selection-text'] = 'white';
DARK_COLORS['--color-selection-background'] = 'hsl(256deg 100% 30%)';
DARK_COLORS['--color-backdrop'] = 'hsl(212deg 9% 9%)';
DARK_COLORS['--color-backdrop-highlight'] = DARK_COLORS['--color-primary-900'];
DARK_COLORS['--color-page-background'] = 'transparent';
DARK_COLORS['--color-page-border'] = 'hsl(256deg 30% 50% / 0.2)';
DARK_COLORS['--color-card-background'] = DARK_COLORS['--color-backdrop'];
DARK_COLORS['--color-card-border'] = DARK_COLORS['--color-page-border'];
// Callout Boxes
LIGHT_COLORS['--callout'] = LIGHT_COLORS['--color-gray-100'];
DARK_COLORS['--callout'] = DARK_COLORS['--color-gray-200'];
// Code box background
LIGHT_COLORS['--code-background'] = 'hsl(60deg 0% 13%)';
DARK_COLORS['--code-background'] = 'hsl(60deg 0% 13%)';
// Logo
LIGHT_COLORS['--color-logo'] = LIGHT_COLORS['--color-gray-1000'];
DARK_COLORS['--color-logo'] = DARK_COLORS['--color-decorative-500'];
// Checkerplate
LIGHT_COLORS['--color-checkerplate'] = 'hsl(50deg 67% 50%)';
DARK_COLORS['--color-checkerplate'] = 'hsl(50deg 67% 50%)';

export const LIGHT_SHADOWS = {
  '--shadow-page': `
    0px 1px 2px hsl(50deg 60% 50% / 0.25),
    0px 3px 6px hsl(50deg 60% 50% / 0.25),
    0px 9px 18px hsl(50deg 60% 50% / 0.25),
    0px 18px 36px hsl(50deg 60% 50% / 0.25),
    0px 54px 108px hsl(50deg 60% 50% / 0.25)
  `,
  '--shadow-card': `
    0px 1px 2px hsl(50deg 20% 50% / 0.2),
    0px 2px 4px hsl(50deg 20% 50% / 0.2),
    0px 4px 8px hsl(50deg 20% 50% / 0.2),
    0px 8px 16px hsl(50deg 20% 50% / 0.2)
  `,
  '--shadow-1': `
    4px 4px 8px hsl(0deg 0% 0% / 0.25)
  `,
  '--shadow-layered-1': `
    2px 4px 2px hsl(0deg 0% 0% / 0.075),
    6px 6px 4px hsl(0deg 0% 0% / 0.075),
    8px 8px 6px hsl(0deg 0% 0% / 0.05),
    10px 10px 10px hsl(0deg 0% 0% / 0.050),
    12px 16px 16px hsl(0deg 0% 0% / 0.040)
  `,
  '--shadow-low': `
    0.2px 0.6px 0.7px hsl(0deg 0% 63%) / 0.34),
    0.4px 1px 1.2px -1.2px hsl(0deg 0% 63%) / 0.34),
    0.9px 2.5px 3px -2.5px hsl(0deg 0% 63%) / 0.34)
  `,
  '--shadow-medium': `
    0.2px 0.6px 0.7px hsl(0deg 0% 63% / 0.36),
    0.7px 2.1px 2.5px -0.8px hsl(0deg 0% 63% / 0.36),
    1.9px 5.2px 6.2px -1.7px hsl(0deg 0% 63% / 0.36),
    4.5px 12.6px 15.1px -2.5px hsl(0deg 0% 63% / 0.36)
  `,

  '--shadow-high': `
    0.2px 0.6px 0.7px hsl(0deg 0% 63% / 0.36),
    1.3px 3.7px 4.4px -0.4px hsl(0deg 0% 63% / 0.36),
    2.5px 6.9px 8.3px -0.7px hsl(0deg 0% 63% / 0.36),
    4px 11.3px 13.5px -1.1px hsl(0deg 0% 63% / 0.36),
    6.4px 18px 21.5px -1.4px hsl(0deg 0% 63% / 0.36),
    10.1px 28.2px 33.7px -1.8px hsl(0deg 0% 63% / 0.36),
    15.3px 42.8px 51.1px -2.1px hsl(0deg 0% 63% / 0.36),
    22.5px 63.1px 75.4px -2.5px hsl(0deg 0% 63% / 0.36)
  `,
  '--shadow-inset': `
    0.9px 2.5px 3px -2.5px hsl(0deg 0% 63%) / 0.34)
  `

};
export const DARK_SHADOWS = {
  '--shadow-page': 'none',
  '--shadow-card': 'none',
  '--shadow-1': 'none',
  '--shadow-layered-1': 'none',
  '--shadow-low': `
0px 0px 10px hsl(183deg 72% 55% / 0.20),
0px 0px 5px -1.2px hsl(183deg 72% 55% / 0.20),
0px 0px 5px -2.5px hsl(183deg 72% 55% / 0.10)
`,
  '--shadow-medium': `
  0px 0px 20px hsl(183deg 72% 55% / 0.26),
  0px 0px 20px -0.8px hsl(183deg 72% 55% / 0.20),
  0px 0px 20px -1.7px hsl(183deg 72% 55% / 0.15),
  0px 0px 20px -2.5px hsl(183deg 72% 55% / 0.10)
`,
  '--shadow-high': `
  0px 0px 40px hsl(183deg 58% 78% / 0.24),
  0px 0px 30px -0.4px hsl(183deg 58% 78% / 0.24),
  0px 0px 30px -0.7px hsl(183deg 68% 64% / 0.24),
  0px 0px 20px -1.1px hsl(183deg 72% 55% / 0.24),
  0px 0px 20px -1.4px hsl(183deg 72% 55% / 0.24),
  0px 0px 20px -1.8px hsl(183deg 72% 55% / 0.24),
  0px 0px 20px -2.1px hsl(183deg 72% 55% / 0.24),
    0px 0px 20px -2.5px hsl(183deg 72% 55% / 0.24)
`
};

export const LIGHT_TOKENS = {
  ...LIGHT_COLORS,
  ...LIGHT_SHADOWS,
  ...RESPONSIVE_WIDTHS,
  ...UTILS,
};

export const DARK_TOKENS = {
  ...DARK_COLORS,
  ...DARK_SHADOWS,
  ...RESPONSIVE_WIDTHS,
  ...UTILS,
}; 
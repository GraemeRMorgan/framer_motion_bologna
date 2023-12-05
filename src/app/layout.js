import './globals.css'
import localFont from 'next/font/local';
import {
  Inter,
  Roboto_Slab,
  Bitter,
  Recursive,
  Fira_Code
} from 'next/font/google';
import { SITE_TITLE, LIGHT_TOKENS, DARK_TOKENS, COLOR_THEME_COOKIE_NAME } from '@/constants';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cookies } from 'next/headers';
import clsx from 'clsx';


// I finally have local fonts working on this machine. Amazing. This is being used for the main font.
const myFont = localFont({ src: './fonts/Recursive_VF_1.085.woff2'})
// const myFont = localFont({ src: './fonts/CascadiaCode.woff2'})
// const myFont = localFont({ src: './fonts/FiraCode-VF.woff2'})

// This is where you declare the primary font in the webpage.
const mainFont = Bitter({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
})


export const metadata = {
  title: SITE_TITLE,
  description: 'This application is intended for learning purposes.',
  icons: {
    icon: {
      url: SITE_TITLE,
      type: 'image/svg'
    },
    shortcut: {
      url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍖</text></svg>",
      type: 'image/svg'
    },
  },
}

export default function RootLayout({ children }) {
  // TODO: Dynamic theme depending on user preference
  // Set the site theme.
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME);
  const theme = savedTheme?.value || 'light';

  return (
    // <html lang="en">
    //   <body className={work_sans.className}>{children}</body>
    // </html>

    <html
      lang="en"
      className={myFont.className}
      data-color-theme={theme}
      style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body>
        {/* This is a server component and cannot change in the client header, so we'll change the name. */}
        <Header initialTheme={theme} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

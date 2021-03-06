import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"
import funstonTheme from 'typography-theme-funston'

// Wordpress2016.overrideThemeStyles = () => {
//   return {
//     "a.gatsby-resp-image-link": {
//       boxShadow: `none`,
//     },
//   }
// }

// delete Wordpress2016.googleFonts

const typography = new Typography(funstonTheme)
// funston

// import Typography from "typography"

// const typography = new Typography({
//   baseFontSize: "20px",
//   baseLineHeight: 1.666,
//   headerFontFamily: [
//     "Avenir Next",
//     "Helvetica Neue",
//     "Segoe UI",
//     "Helvetica",
//     "Arial",
//     "sans-serif",
//   ],
//   bodyFontFamily: ["Inconsolata","Georgia", "serif"],
// })


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

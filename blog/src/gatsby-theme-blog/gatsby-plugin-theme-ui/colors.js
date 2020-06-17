import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a yellow theme
 */

const darkYellow = `#fb9e02`
const lightYellow = `rgba(251,158,2,.2)`
const yellowGray = `#393838`


    // --primary-color:#fb9e02;
    // --primary-light-color: rgba(251,158,2,.2);
    // --secundary-color:#393838;
    // --light-color: #fff;
    // --grey-color:#EEEEEE;

export default merge(defaultThemeColors, {
    text: yellowGray,
    primary: darkYellow,
    heading: yellowGray,
    highlight: lightYellow,
    background: lightYellow,
  modes: {
    dark: {
      background: yellowGray,
      primary: darkYellow,
      heading: `#fff`,
      highlight: `#fff`,
    },
  },
})

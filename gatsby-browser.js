import wrapThemeProvider from "./src/utils/wrapThemeProvider";

import colors from "./src/content/colors.json";

export const wrapRootElement = wrapThemeProvider;

export const onClientEntry = () => {
  // var set at document level
  // prevents widget color flashing from defaults to fetched by widget from marketing api
  Object.entries(colors).forEach(color => {
    document.documentElement.style.setProperty(`--${color[0]}`, color[1]);
    document.documentElement.style.setProperty(`--${color[0]}50`, `${color[1]}50`);
  });
};

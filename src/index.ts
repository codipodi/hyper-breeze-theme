const backgroundColor = "#232627"
const foregroundColor = "#fcfcfc"

const colors: Hyper.ColorOptions = {
  black: backgroundColor,
  red: "#ed1515",
  green: "#11d116",
  yellow: "#927400",
  blue: "#1d998f",
  magenta: "#7359b6",
  cyan: "#1a769c",
  white: foregroundColor,
  lightBlack: "#7f8c8d",
  lightRed: "#c0392b",
  lightGreen: "#1cdc9a",
  lightYellow: "#fd764b",
  lightBlue: "#3daedf",
  lightMagenta: "#8e44ad",
  lightCyan: "#16a085",
  lightWhite: "#ffffff",
}

export function decorateConfig(
  config: Hyper.ConfigOptions
): Hyper.ConfigOptions {
  return Object.assign({}, config, <Hyper.ConfigOptions>{
    backgroundColor,
    foregroundColor,
    colors,
  })
}

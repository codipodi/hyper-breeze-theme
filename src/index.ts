import styles from "./styles.scss"

const backgroundColor = "#31363b"
const foregroundColor = "#eff0f1"

const colors: Hyper.Options.Color = {
  black: backgroundColor,
  red: "#ed1515",
  green: "#11d116",
  yellow: "#f67400",
  blue: "#1d99f3",
  magenta: "#9b59b6",
  cyan: "#1abc9c",
  white: foregroundColor,
  lightBlack: "#7f8c8d",
  lightRed: "#c0392b",
  lightGreen: "#1cdc9a",
  lightYellow: "#fdbc4b",
  lightBlue: "#3daee9",
  lightMagenta: "#8e44ad",
  lightCyan: "#16a085",
  lightWhite: "#ffffff",
}

export function decorateConfig(
  config: Hyper.Options.Config
): Hyper.Options.Config {
  return Object.assign({}, config, <Hyper.Options.Config>{
    backgroundColor,
    foregroundColor,
    colors,
    css: (config.css || "") + styles,
  })
}

export function getTabsProps(
  parentProps: unknown,
  props: Hyper.TabsProps
): Record<string, unknown> {
  const bodyClasses = document.body.classList

  if (props.tabs.length <= 1) {
    bodyClasses.add("closed-tabs")
  } else {
    bodyClasses.remove("closed-tabs")
  }

  return Object.assign({}, parentProps, props)
}

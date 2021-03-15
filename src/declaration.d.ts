// https://stackoverflow.com/a/41946697
declare module "*.scss" {
  const content: Record<string, string>
  export default content
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace Hyper {
  // https://github.com/vercel/hyper/blob/ffd4eb46e3923061be6549796f00d437fa0aaa0f/lib/config.d.ts
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  namespace Options {
    export type Color = {
      black: string
      blue: string
      cyan: string
      green: string
      lightBlack: string
      lightBlue: string
      lightCyan: string
      lightGreen: string
      lightMagenta: string
      lightRed: string
      lightWhite: string
      lightYellow: string
      magenta: string
      red: string
      white: string
      yellow: string
    }

    export type Config = {
      autoUpdatePlugins: boolean | string
      backgroundColor: string
      bell: string
      bellSound: string | null
      bellSoundURL: string | null
      borderColor: string
      colors: ColorOptions
      copyOnSelect: boolean
      css: string
      cursorAccentColor: string
      cursorBlink: boolean
      cursorColor: string
      cursorShape: "BEAM" | "UNDERLINE" | "BLOCK"
      defaultSSHApp: boolean
      disableLigatures: boolean
      env: Record<string, string>
      fontFamily: string
      fontSize: number
      fontWeight: FontWeight
      fontWeightBold: FontWeight
      foregroundColor: string
      letterSpacing: number
      lineHeight: number
      macOptionSelectionMode: string
      modifierKeys: {
        altIsMeta: boolean
        cmdIsMeta: boolean
      }
      padding: string
      quickEdit: boolean
      scrollback: number
      selectionColor: string
      shell: string
      shellArgs: string[]
      showHamburgerMenu: boolean | ""
      showWindowControls: string
      termCSS: string
      uiFontFamily: string
      updateChannel: "stable" | "canary"
      useConpty: boolean
      webGLRenderer: boolean
      webLinksActivationKey: "ctrl" | "alt" | "meta" | "shift"
      windowSize: [number, number]
    }
  }

  // https://github.com/vercel/hyper/blob/ffd4eb46e3923061be6549796f00d437fa0aaa0f/lib/hyper.d.ts
  import { ReactChild } from "react"

  type extensionProps = Partial<{
    customChildren: ReactChild | ReactChild[]
    customChildrenBefore: ReactChild | ReactChild[]
    customCSS: string
    customInnerChildren: ReactChild | ReactChild[]
  }>

  export type ITab = {
    uid: string
    title: string
    isActive: boolean
    hasActivity: boolean
  }

  export type TabsProps = {
    tabs: ITab[]
    borderColor: string
    onChange: (uid: string) => void
    onClose: (uid: string) => void
    fullScreen: boolean
  } & extensionProps
}

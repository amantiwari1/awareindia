import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
  background: string
  textColor: string
  textSecondary: string
  buttonPrimary: string
  buttonGhost: string
  cardBackground: string
  }
}


export interface buttonInterface {
    primary: boolean
    big: boolean
    fontBig: boolean
}
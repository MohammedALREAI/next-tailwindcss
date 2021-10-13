import { PrismaClient } from '@prisma/client';

declare global {
    // Definition or type for the function.
    type Prisma = PrismaClient;

    declare namespace NodeJS {
        export interface ProcessEnv {
          
            PG_CONNECTIONSTRING: string;
        }

        export interface Global {
            prisma: Prisma;
        }
    }
}

declare module 'styled-components' {

    export interface DefaultTheme {
    // name: string;
    // background: string;
    // bgTwo: string;
    // primary: string;
    // secondary: string;
    // gradientColorOne: string;
    // gradientColorTwo: string;
    // text: string;
    // textLight: string;
    // textMed: string;
    // alert: string;
    // alert2: string;
    // alert3: string;
    // globalAlert: string;
    // salesAlert: string;
    // primaryBg: string;
    // secondaryBg: string;
    // tertiaryBg: string;
    // borderColorOne: string;
    // borderColorTwo: string;
    // borderColorThree: string;
    // invertedText: string;
    // inputBackgroundColor: string;
    // inputBorderColor: string;
    // navText: string;
    // navButtonRGBA: string;
    // pnlGradientOne: string;
    // pnlGradientTwo: string;
    // navActive: string;
    // navHover?: string;
    // appbarBackground: string;
    // appbarShadow: string;
    // sidebarBorder?: string;
    // sidebarShadow?: string;
    // pnlBorder?: string;
    // cardBackground: string;
    // cardBox: string;
    // pnlShadow: string;
    // breakpoints: string[];
    // textDark: string;
    // tabBackground: string;
        colors: {
            primary: string;
            yellow:string
          };
    }
}













// **  handle  with  image and  svg  jpt  and  svg  



declare module "*.svg" {
    const content: any;
    export default content;
  }
  declare module "*.png" {
    const content: any;
    export default content;
  }
  declare module "*.jpg" {
    const content: any;
    export default content;
  }
  declare module "*.gif" {
    const content: any;
    export default content;
  }


/// <reference types="vite/client" />
declare module '*.svg' {
    export const ReactComponent: any
    const content: {
      ReactComponent: ReactComponent
    }
    export default content
  }
  declare module '*.png' {
    export const ReactComponent: any
    const content: {
      ReactComponent: ReactComponent
    }
    export default content
  }
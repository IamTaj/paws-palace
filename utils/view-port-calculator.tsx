export function DesktopPxToVw(ViewPort: number) {
    return `${(ViewPort / 1920) * 100}vw`
  }
  
  
  export function MobilePxToVw(ViewPort: number) {
    return `${(ViewPort / 640) * 100}vw`
  }
export type DeviceClassName = "is-small-screen" |"is-medium-screen" |"is-large-screen"

export function setDeviceClassName(): DeviceClassName
{
  if      ( window.matchMedia("screen and (min-width: 1200px)").matches ) return "is-large-screen"
  else if ( window.matchMedia("screen and (min-width: 1000px)").matches ) return "is-medium-screen"
  return "is-small-screen"
}

import { withIconProps } from "../withIconProps";

export const ShareIcon = withIconProps(({ size, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 29.09 32"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    {...props}
  >
    <path
      fill="currentColor"
      d="M24.73,0a5.82,5.82,0,1,1-4.14,9.91l-7.72,4.51a5.85,5.85,0,0,1,0,3.16l7.73,4.5a5.81,5.81,0,1,1-1.47,2.51l-7.72-4.5a5.82,5.82,0,1,1,0-8.22l0,0L19.13,7.4a5.82,5.82,0,0,1,4-7.18A5.69,5.69,0,0,1,24.73,0Zm0,23.27a2.93,2.93,0,0,0-2.43,1.3,1,1,0,0,1-.07.15l-.09.14-.05.09A2.91,2.91,0,1,0,26,23.54,2.86,2.86,0,0,0,24.73,23.27ZM7.27,13.09a2.91,2.91,0,1,0,2.51,4.37l0-.05A2.93,2.93,0,0,0,10.18,16a2.89,2.89,0,0,0-.4-1.46v0A2.9,2.9,0,0,0,7.27,13.09ZM24.73,2.91a2.92,2.92,0,0,0-2.55,4.32l0,0v0a2.91,2.91,0,1,0,2.5-4.4Z"
      transform="translate(-1.46 0)"
    />
  </svg>
));

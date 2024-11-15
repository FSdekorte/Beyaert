// components/IconSvg.tsx
import React from 'react';

interface logoIcoonProps extends React.SVGProps<SVGSVGElement> {
  // You can define other props here if needed, like "size", "color", etc.
}

const logoIcoon: React.FC<logoIcoonProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 574.03 800"
    className={`w-full h-auto ${props.className}`} // TailwindCSS for width and height + additional className from props
    {...props} // Spread the rest of the props (including className, fill, etc.)
  >
    <defs>
      <style>
        {`
          .cls-1 {
            fill: #54a88a;
            stroke-width: 0px;
          }
        `}
      </style>
    </defs>
    <g id="Laag_2-2" data-name="Laag 2">
      <g id="Capa_1" data-name="Capa 1">
        <path
          className="cls-1"
          d="M487.24,0s-65.82,63.86-137.01,89.6C-176.92,280.28,45.4,651.85,52.65,653.07c0,0,29.56-51.48,69.49-80.84,253.39-186.28,304.89-400.69,304.89-400.69,0,0-56.86,258.01-282.29,418.55-49.79,35.44-83.5,122.7-97.77,209.91,0,0,35.29-14.26,50.47-18.12,5.92-38.62,18.29-75.6,39.21-108.63,315.06,37.51,418.25-216.36,431.73-304.88C600.2,159.29,487.24,0,487.24,0Z"
        />
      </g>
    </g>
  </svg>
);

export default logoIcoon;
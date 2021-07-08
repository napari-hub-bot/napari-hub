import { IconProps } from './icons.type';

export function Twitter({ className, alt }: IconProps) {
  return (
    <svg
      className={className}
      width="15"
      height="13"
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {alt && <title>{alt}</title>}
      <path
        d="M13.4581 3.44478C13.4676 3.57802 13.4676 3.7113 13.4676 3.84454C13.4676 7.9086 10.3744 12.5914 4.72082 12.5914C2.97906 12.5914 1.36105 12.0869 7.62939e-06 11.2113C0.247478 11.2398 0.485398 11.2494 0.742391 11.2494C2.17955 11.2494 3.50254 10.764 4.55901 9.93591C3.20749 9.90735 2.07487 9.0222 1.68464 7.80392C1.87501 7.83246 2.06535 7.8515 2.26524 7.8515C2.54125 7.8515 2.81728 7.81341 3.07425 7.74682C1.66562 7.46127 0.609119 6.22397 0.609119 4.72968V4.69163C1.01837 4.92006 1.49429 5.06282 1.9987 5.08183C1.17065 4.52979 0.628162 3.58755 0.628162 2.52155C0.628162 1.9505 0.780418 1.42702 1.04693 0.970164C2.56026 2.83564 4.83502 4.05389 7.38575 4.18717C7.33817 3.95874 7.30961 3.72082 7.30961 3.48287C7.30961 1.78869 8.68017 0.40863 10.3838 0.40863C11.269 0.40863 12.0685 0.779822 12.63 1.37944C13.3248 1.2462 13.9911 0.989207 14.5812 0.637058C14.3527 1.35091 13.8673 1.95052 13.2297 2.33121C13.8483 2.26462 14.4479 2.09326 14.9999 1.85534C14.5812 2.46445 14.0577 3.00694 13.4581 3.44478Z"
        fill="black"
      />
    </svg>
  );
}
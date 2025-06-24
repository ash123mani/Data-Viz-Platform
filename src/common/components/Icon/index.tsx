import icons, { type IconType } from './action-icons';

export type IconProps =  {
    icon: IconType
    width?: number | string;
    height?: number | string;
    alt?: string;
}

export default function Icon({ icon, width = '24px', height = '24px', alt }: IconProps) {
  return (
    <span style={{ width, height, display: 'inline-block' }}>
      <img src={icons[icon]} width={width} height={height} alt={alt} />
    </span>
  )
}

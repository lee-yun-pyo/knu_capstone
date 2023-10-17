import * as S from './style';

interface PrevProps {
  width: string;
  height: string;
  onClick: () => void;
  isShow?: boolean;
}

export function PrevButton({ width, height, onClick, isShow = true }: PrevProps) {
  return (
    <S.Container width={parseInt(width)} height={parseInt(height)} onClick={() => onClick()} isShow={isShow}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" fill="none">
        <g clipPath="url(#clip0_577_11601)">
          <path
            d="M31 36L19 24L31 12"
            stroke="#002C5F"
            strokeOpacity="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_577_11601">
            <rect width={width} height={height} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </S.Container>
  );
}

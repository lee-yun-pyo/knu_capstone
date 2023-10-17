import * as S from './style';

interface NextButtonProps {
  width: string;
  height: string;
  onClick: () => void;
  isShow?: boolean;
}

export function NextButton({ width, height, onClick, isShow = true }: NextButtonProps) {
  return (
    <S.Container width={parseInt(width)} height={parseInt(height)} onClick={() => onClick()} isShow={isShow}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 48 48" fill="none">
        <g clipPath="url(#clip0_577_11602)">
          <path
            d="M17 36L29 24L17 12"
            stroke="#002C5F"
            strokeOpacity="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_577_11602">
            <rect width={width} height={height} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </S.Container>
  );
}

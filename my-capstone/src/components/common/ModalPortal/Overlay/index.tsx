import * as S from './style';

interface Props {
  onClick: () => void;
}

export function Overlay({ onClick }: Props) {
  return <S.Container onClick={onClick} />;
}

import { useState } from 'react';

import { NextButton } from '@/components/common/NextButton';
import { PrevButton } from '@/components/common/PrevButton';

import * as S from './style';

interface Props {
  images: string[];
}

export function ItemImage({ images }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  const goNextImage = () => {
    setCurrentImage(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goPriviousImage = () => {
    setCurrentImage(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goSpecificImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <PrevButton width="48" height="48" onClick={goPriviousImage} isShow={images.length !== 1} />
        <S.ImageBox>
          {images.map((imageSrc, index) => (
            <S.Image src={imageSrc} isCurrent={index === currentImage} />
          ))}
        </S.ImageBox>
        <NextButton width="48" height="48" onClick={goNextImage} isShow={images.length !== 1} />
        <S.DotBox>
          {images.length !== 1 && (
            <S.Dots>
              {images.map((_, index) => (
                <S.Dot isCurrent={index === currentImage} onClick={() => goSpecificImage(index)} />
              ))}
            </S.Dots>
          )}
        </S.DotBox>
      </S.Wrapper>
    </S.Container>
  );
}

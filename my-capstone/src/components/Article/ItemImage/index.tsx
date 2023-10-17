import { useState, useRef, useEffect } from 'react';

import { PrevButton } from '@/components/common/PrevButton';
import { NextButton } from '@/components/common/NextButton';

import * as S from './style';

interface Props {
  images: string[];
}

export function ItemImage({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const goNextImage = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goPriviousImage = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goSpecificImage = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.4s ease-in-out';
      slideRef.current.style.transform = `translateX(-${(currentIndex * 100) / images.length}%)`;
    }
  }, [currentIndex]);

  return (
    <S.Container>
      <S.Wrapper>
        <PrevButton width="48" height="48" onClick={goPriviousImage} isShow={images.length !== 1} />
        <S.ImageBox ref={slideRef}>
          {images.map((imageSrc, index) => (
            <S.Image key={index} imgUrl={imageSrc} />
          ))}
        </S.ImageBox>
        <NextButton width="48" height="48" onClick={goNextImage} isShow={images.length !== 1} />
        <S.DotBox>
          {images.length !== 1 && (
            <S.Dots>
              {images.map((_, index) => (
                <S.Dot key={index} isCurrent={index === currentIndex} onClick={() => goSpecificImage(index)} />
              ))}
            </S.Dots>
          )}
        </S.DotBox>
      </S.Wrapper>
    </S.Container>
  );
}

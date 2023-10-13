import { Fragment } from 'react';

import { createPortal } from 'react-dom';

import { Overlay } from './Overlay';
import { Modal } from './Modal';

interface Props {
  props: {
    onClick: () => void;
    lowPrice: number;
    upperPrice: number;
  };
}

export function ModalPortal({ props }: Props) {
  const overlayElement = document.getElementById('overlay') as HTMLElement;
  const modalElement = document.getElementById('modal') as HTMLElement;

  return (
    <Fragment>
      {createPortal(<Overlay onClick={props.onClick} />, overlayElement)}
      {createPortal(<Modal props={props} />, modalElement)}
    </Fragment>
  );
}

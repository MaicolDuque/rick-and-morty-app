import { ReactNode } from 'react';
import './styles.css'


export interface ModalProps {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  onCloseModal: () => void
}

export function Modal({ header = undefined, body = undefined, footer = undefined, onCloseModal }: ModalProps ){
  return(
    <div className="modal-background">
      <div className="modal-content">
        <div className='modal-content__header'>
          <div>{header}</div>
          <div className='modal-content__header-close' onClick={() => onCloseModal()}>
            X
          </div>
        </div>
        <div className='modal-content__body'>
          {body}
        </div>
        <div className='modal-content__footer'>
          {footer}
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react';
import { ClassNames } from '@emotion/react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import {
  cssPortalClass,
  ContainerModal,
  HeaderModal,
  CloseButton,
  BodyModal,
  ModalTitle,
} from './styles';

Modal.setAppElement('#root');

/**
 * (Props):
 * dimensions : full-screen | medium | small | tiny
 */
const CustomModal = ({
  modalStatus,
  closeTimeoutMS,
  modalTitle,
  children,
  callbackLeftBtn,
  dimension,
}) => {
  const [modalIsOpen, setIsOpen] = useState(modalStatus);

  return (
    <>
      <ClassNames>
        {({ css }) => (
          <Modal
            data-cy="mindsdbModal"
            isOpen={modalIsOpen}
            onRequestClose={() => {
              setIsOpen(false);
              callbackLeftBtn();
            }}
            overlayClassName={{
              base: 'overlay-base',
              afterOpen: 'overlay-after',
              beforeClose: 'overlay-before',
            }}
            className={{
              base: `content-base`,
              afterOpen: `content-after-${dimension}`,
              beforeClose: 'content-before',
            }}
            closeTimeoutMS={closeTimeoutMS}
            portalClassName={css`
              ${cssPortalClass}
            `}
          >
            <ContainerModal>
              <HeaderModal
                className={dimension === 'small' ? 'HeaderModal-small' : ''}
                dimension={dimension}
              >
                <ModalTitle min={14} max={20}>
                  {modalTitle}
                </ModalTitle>
                <CloseButton
                  data-cy="close-modal"
                  onClick={() => {
                    setIsOpen(false);
                    callbackBtn();
                  }}
                >
                  <i className="close-action fas fa-times" />
                </CloseButton>
              </HeaderModal>
              <BodyModal
                className={dimension === 'small' ? 'BodyModal-small' : ''}
              >
                {children}
              </BodyModal>
            </ContainerModal>
          </Modal>
        )}
      </ClassNames>
    </>
  );
};

CustomModal.propTypes = {
  modalStatus: PropTypes.bool,
  closeTimeoutMS: PropTypes.number,
  modalTitle: PropTypes.string,
  callbackBtn: PropTypes.func,
  dimension: PropTypes.string,
};

CustomModal.defaultProps = {
  modalStatus: false,
  closeTimeoutMS: 500,
  modalTitle: '',
  callbackBtn: () => {},
  dimension: 'small',
};

export default CustomModal;

import React, { useState } from 'react';

import CustomModal from '../ui/modal';

import { lookData } from './look';
import { LookContainer, NavBar, LookOptions, Options } from './styles';

const LookUser = () => {
  const [showModal, setShowmodal] = useState(false);

  return (
    <>
      <LookContainer>
        <NavBar>
          <strong>Pelo, Maquillaje</strong>
        </NavBar>
        <LookOptions>
          {lookData.map((item) => (
            <Options
              role="button"
              key={item.id}
              onClick={() => setShowmodal(!showModal)}
              image={item.img}
            />
          ))}
        </LookOptions>
      </LookContainer>

      {showModal && (
        <CustomModal
          dimension="small"
          modalStatus={true}
          callbackLeftBtn={() => setShowmodal(!showModal)}
          modalTitle="Succes....."
          rightButtonTxt="Cerrar"
        >
          example...
        </CustomModal>
      )}
    </>
  );
};

export default LookUser;

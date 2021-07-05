import React, { useState, useEffect } from 'react';

import CustomModal from '../ui/modal';

import withContext from '../../HOC/withContext';

import { lookData } from './look';
import { LookContainer, NavBar, LookOptions, Options } from './styles';

const LookUser = ({ context }) => {
  const [showModal, setShowmodal] = useState(false);

  useEffect(() => {
    if (context?.users) {
      console.log('test', context.users.values);
    }
  }, [context]);

  const showValues = (item) => {
    console.log('🚀 ~ file: index.js ~ line 20 ~ showValues ~ item', item);
    setShowmodal(!showModal);
  };

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
              onClick={() => showValues(item)}
              image={item.img}
            />
          ))}
        </LookOptions>
      </LookContainer>

      {showModal && (
        <CustomModal
          dimension="small"
          modalStatus={true}
          callbackBtn={() => setShowmodal(!showModal)}
          modalTitle="Tu selección fue:"
        >
          example...
        </CustomModal>
      )}
    </>
  );
};

export default withContext(LookUser);

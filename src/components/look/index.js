import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import CustomModal from '../ui/modal';
import Card from '../ui/card';
import withContext from '../../HOC/withContext';

import { lookData } from './look';
import {
  LookContainer,
  NavBar,
  LookOptions,
  Options,
  ButtonsContainer,
  Button,
} from './styles';

const LookUser = ({ context }) => {
  let history = useHistory();

  const [showModal, setShowmodal] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (context?.users) {
      setUserData(context.users.values);
    }
  }, [context]);

  const showValues = (item) => {
    const { users } = context;
    const updateData = { ...users.values, image: item.img };

    users.setAnyValue({
      values: { $set: updateData },
    });

    setUserData(updateData);
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
        <ButtonsContainer>
          <Button onClick={() => history.push('/')}>Regresar</Button>
        </ButtonsContainer>
      </LookContainer>

      {showModal && (
        <CustomModal
          dimension="small"
          modalStatus={true}
          callbackBtn={() => setShowmodal(!showModal)}
          modalTitle="Tu selección fue:"
        >
          <Card data={userData} />
        </CustomModal>
      )}
    </>
  );
};

export default withContext(LookUser);

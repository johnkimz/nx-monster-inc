import React, { useEffect, useState } from 'react';
import { Message } from '@monsters-inc/api-interfaces';
import styled from 'styled-components';

const StyledApp = styled.div``;

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <StyledApp>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to monster-picker!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        />
      </div>
      <div>{m.message}</div>
    </StyledApp>
  );
};

export default App;

import React from 'react';
import { Class } from '../Class/Class';
// import { Description } from '../Description/Description';

export const Container = ({ type }) => {
  // const [show, setShow] = useState(false);

  return (
    <>
      <Class type={type} />
      {/* <Description type={type} /> */}
    </>
  );
};

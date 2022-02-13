import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
// import { Description } from './Description/Description';
// import { Class } from './Class/Class';
import { Container } from './Container/Container';
// interface Props {
//   onClick: () => void;
// }
const classes = [
  'mage',
  'hunter',
  'warrior',
  'priest',
  'paladin',
  'rogue',
  'druid',
  'warlock',
];

// export const Provider: React.FC<Props> = React.memo(
//   ({ onClick, children }) => (
//     <button
//       type='button'
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   ),
// );

export const App: React.FC = () => {
  const uuid: any = uuidv4();

  return (
    <div className="starter">
      {classes.map((c) => (
        <Container type={c} key={uuid} />
      ))}
    </div>
  );
};

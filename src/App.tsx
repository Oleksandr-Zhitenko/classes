import React from 'react';
import './App.scss';
import { Description } from './Description/Description';
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
  return (
    <div className="starter">
      {classes.map(c => (
        <Description class={c} key={c} />
      ))}
    </div>
  );
};

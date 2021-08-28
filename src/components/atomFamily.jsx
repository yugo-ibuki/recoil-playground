import React from 'react';
import ReactDOM from 'react-dom';
import {
  RecoilRoot,
  atomFamily,
  useRecoilState
} from 'recoil';

const itemStateFamily = atomFamily({
  key: 'sample/item',
  default: 0
});

const Item = ({name}) => {
  const [itemCount, setItemCount] = useRecoilState(itemStateFamily(name));
  return <div onClick={() => setItemCount((c) => c + 1)}>{name}: {itemCount}</div>;
};

const Family = () => (
  <div>
    <Item name="Apple"/>
    <Item name="Banana"/>
  </div>
);

export default Family;
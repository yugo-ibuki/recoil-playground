import React from 'react';

import {
  RecoilRoot,
  atomFamily,
  selectorFamily,
  useRecoilState
} from 'recoil';

const itemStateFamily = atomFamily({
  key: 'sample/item',
  default: 0
});

const LiarItemStateFamily = selectorFamily({
  key: 'sample/liarItem',
  get: (arg) => ({get}) => get(itemStateFamily(arg)) * 5,
  set: (arg) => ({set}, newValue) => set(itemStateFamily(arg), newValue)
});

const Item = ({name}) => {
  const [itemCount, setItemCount] = useRecoilState(LiarItemStateFamily(name));
  return <div onClick={() => setItemCount((c) => c + 1)}>{name}: {itemCount}</div>;
};

const SelectorFamilies = () => (
  <div>
    <Item name="Apple"/>
    <Item name="Banana"/>
  </div>
);

export default SelectorFamilies;

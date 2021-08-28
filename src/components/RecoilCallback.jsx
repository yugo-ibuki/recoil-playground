import React from 'react';
import {
  atom,
  useRecoilCallback
} from 'recoil';

const userDataState = atom({
  key: 'sample/userData',
  default: {name: 'John'}
})

const UserDataLogger = () => {
  const getUserData = useRecoilCallback(({snapshot}) => async () => {
    const {name} = await snapshot.getPromise(userDataState);
    console.log(name);
  }, []);

  return <div onClick={getUserData}>Click to Log</div>;
};

const DataLog = () => (
  <UserDataLogger/>
);

export default DataLog;

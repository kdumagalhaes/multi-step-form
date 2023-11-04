import { useEffect, useState } from 'react';
import styles from './ContentUserInfo.module.scss';
import { useAppDispatch } from '../../../redux/store';
import { setSubmitValidation } from '../../../redux/reducers/validation';
const ContentUserInfo = () => {
  const dispatch = useAppDispatch();

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');

  useEffect(() => {
    const isNotValid =
      inputName?.length === 0 ||
      inputEmail?.length === 0 ||
      inputPhone?.length === 0;

    dispatch(setSubmitValidation(isNotValid));
  }, [inputName, inputEmail, inputPhone, dispatch]);

  return (
    <>
      <label className={styles.label} htmlFor='name'>
        Name
      </label>
      <input
        id='name'
        className={styles.input}
        type='text'
        placeholder='e.g. Stephen King'
        onChange={(e) => setInputName(e.target.value)}
        autoFocus
      />
      <label className={styles.label} htmlFor='email'>
        Email address
      </label>
      <input
        id='email'
        className={styles.input}
        type='email'
        placeholder='e.g. stephenking@lorem.com'
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <label className={styles.label} htmlFor='phone'>
        Phone number
      </label>
      <input
        id='phone'
        className={styles.input}
        type='number'
        placeholder='e.g. +1 234 567 890'
        onChange={(e) => setInputPhone(e.target.value)}
      />
    </>
  );
};

export default ContentUserInfo;

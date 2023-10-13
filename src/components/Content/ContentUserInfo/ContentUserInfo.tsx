import styles from './ContentUserInfo.module.scss';
const ContentUserInfo = () => {
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
      />
      <label className={styles.label} htmlFor='phone'>
        Phone number
      </label>
      <input
        id='phone'
        className={styles.input}
        type='number'
        placeholder='e.g. +1 234 567 890'
      />
    </>
  );
};

export default ContentUserInfo;

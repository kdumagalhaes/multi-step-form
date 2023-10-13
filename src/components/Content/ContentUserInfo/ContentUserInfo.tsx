import styles from './ContentUserInfo.module.scss';
const ContentUserInfo = () => {
  return (
    <>
      <label className={styles.label} htmlFor='name'>
        Name
      </label>
      <input
        className={styles.input}
        type='text'
        placeholder='e.g. Stephen King'
      />
      <label className={styles.label} htmlFor='name'>
        Email address
      </label>
      <input
        className={styles.input}
        type='email'
        placeholder='e.g. stephenking@lorem.com'
      />
      <label className={styles.label} htmlFor='name'>
        Phone number
      </label>
      <input
        className={styles.input}
        type='number'
        placeholder='e.g. +1 234 567 890'
      />
    </>
  );
};

export default ContentUserInfo;

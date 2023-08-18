import styles from './mainSaideBar.module.css';

export function MainSidebar() {
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personal_name}>Sergey.Ivanov</p>
        <svg
          className={styles.sidebar__icon}
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
        >
          <path
            className={styles.logoutBtn}
            d='M25.6711 16.046V14.7419C25.6711 13.2276 24.4435 12 22.9292 12H16.7419C15.2276 12 14 13.2276 14 14.7419V26.0645C14 27.5788 15.2276 28.8065 16.7419 28.8065H22.9292C24.4435 28.8065 25.6711 27.5788 25.6711 26.0645V24.6048M18.3572 20.3254H33.2963M33.2963 20.3254L30.1062 23.5155M33.2963 20.3254L30.1062 17.1353'
            stroke='black'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle
            cx='20'
            cy='20'
            r='19.5'
            className={styles.logoutBtn}
            stroke='black'
          />
        </svg>
      </div>

      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item}>
            <a href='#' className={styles.sidebar__link}>
              <img
                className={styles.sidebar__img}
                src='img/playlist01.png'
                alt="day's playlist"
              />
            </a>
          </div>
          <div className={styles.sidebar__item}>
            <a className={styles.sidebar__link} href='#'>
              <img
                className={styles.sidebar__img}
                src='img/playlist02.png'
                alt="day's playlist"
              />
            </a>
          </div>
          <div className={styles.sidebar__item}>
            <a className={styles.sidebar__link} href='#'>
              <img
                className={styles.sidebar__img}
                src='img/playlist03.png'
                alt="day's playlist"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
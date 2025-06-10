import { Link } from 'react-router-dom';
import InstagramIcon from '../../../../assets/icons/instagram.svg?react';
import YoutubeIcon from '../../../../assets/icons/youtube.svg?react';
import FacebookIcon from '../../../../assets/icons/facebook.svg?react';
import XIcon from '../../../../assets/icons/x.svg?react';
import styles from './SocialMedia.module.scss';

export const SocialMedia = () => (
  <div className={styles['social-media']}>
    <Link to="#" className={styles['social-media__link']}>
      <InstagramIcon className={styles['social-media__icon']} />
    </Link>
    <Link to="#" className={styles['social-media__link']}>
      <YoutubeIcon className={styles['social-media__icon']} />
    </Link>
    <Link to="#" className={styles['social-media__link']}>
      <FacebookIcon className={styles['social-media__icon']} />
    </Link>
    <Link to="#" className={styles['social-media__link']}>
      <XIcon className={styles['social-media__icon']} />
    </Link>
  </div>
);

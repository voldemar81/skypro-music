import { PlayerControls } from '../playerControlComponent/playerControl';
import { PlayerTrackPlay } from '../playerTrackComponent/playerTrack';
import styles from './barPlayer.module.css';

export function BarPlayer({ isLoading }) {
  return (
    <div className={styles.bar__player}>
      <PlayerControls />
      <PlayerTrackPlay isLoading={isLoading}  />
    </div>
  );
}
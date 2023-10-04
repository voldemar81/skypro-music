import { useState, useEffect } from 'react';
import { getTrackById } from '../../api';
import { PlayerBtnPrevSvg } from '../../data/svg/playerBtnPrev';
import { PlayerBtnPlaySvg } from '../../data/svg/playerBtnPlay';
import { PlayerBtnNextSvg } from '../../data/svg/playerBtnNext';
import { PlayerBtnRepeatSvg } from '../../data/svg/playerBtnRepeat';
import { PlayerBtnShuffleSvg } from '../../data/svg/playerBtnShuffle';
import { PlayerBtnPauseSvg } from '../../data/svg/playerBtnPause';
import * as S from './styles'


export const PlayerControls = ({
  currentTrack,
  setCurrentTrack,
  trackId,
  isPlaying,
  setIsPlaying,
  setCurrentTime,
  setDuration,
  audioRef,
  volume
}) => {
  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    async function fetchTrack() {
      try {
        const track = await getTrackById(trackId);
        setCurrentTrack(track);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTrack();
  }, [trackId]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack.track_file, audioRef]);

  const toggleLoop = () => {
    setIsLoop(!isLoop);
  };

  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [currentTrack.track_file, audioRef, volume]);

  const notUsed = () => {
    alert('Еще не реализовано');
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  return (
    <>
      <audio
        key={currentTrack.track_file}
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        loop={isLoop}
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={currentTrack.track_file} type='audio/mpeg' />
      </audio>
      <S.PlayerControls>
        <S.PlayerBtnPrev onClick={notUsed}>
          <PlayerBtnPrevSvg alt='Предыдущий трек' />
        </S.PlayerBtnPrev>
        <S.PlayerBtnPlay onClick={togglePlay}>
          {isPlaying ? (
            <PlayerBtnPauseSvg alt='Пауза' />
          ) : (
            <PlayerBtnPlaySvg alt='Играть' />
          )}
        </S.PlayerBtnPlay>
        <S.PlayerBtnNext onClick={notUsed}>
          <PlayerBtnNextSvg alt='Следующий трек' />
        </S.PlayerBtnNext>
        <S.PlayerBtnRepeat onClick={toggleLoop}>
          <PlayerBtnRepeatSvg isLoop={isLoop} alt='Повтор' />
        </S.PlayerBtnRepeat>
        <S.PlayerBtnShuffle onClick={notUsed}>
          <PlayerBtnShuffleSvg alt='Случайный порядок' />
        </S.PlayerBtnShuffle>
      </S.PlayerControls>
    </>
  );
};

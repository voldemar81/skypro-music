import * as S from './styles';

export function PlayerTrackPlay({ isLoading }) {

  return (
    <S.PlayerTrackPlay>
      <S.TrackPlayerContain>
        {isLoading ? (
          <S.TrackPlayerImage>
            <S.TrackPlayerBlock>
              <S.TrackPlaySvg
                xmlns='http://www.w3.org/2000/svg'
                width='51'
                height='52'
                viewBox='0 0 51 52'
                fill='none'
              >
                <rect y='0.750977' width='51' height='51' fill='#313131' />
                <path
                  d='M23 32.751V18.7207L34 17.751V29.751'
                  stroke='#4E4E4E'
                />
                <ellipse
                  cx='19.5'
                  cy='32.751'
                  rx='3.5'
                  ry='2'
                  stroke='#4E4E4E'
                />
                <ellipse
                  cx='30.5'
                  cy='29.751'
                  rx='3.5'
                  ry='2'
                  stroke='#4E4E4E'
                />
              </S.TrackPlaySvg>
            </S.TrackPlayerBlock>
          </S.TrackPlayerImage>
        ) : (
          <S.SkeletonIcon></S.SkeletonIcon>
        )}
        {isLoading ? (
          <S.TrackPlayAuthor>
            <S.TrackPlayAuthorLink href='http://'>
              Ты та...
            </S.TrackPlayAuthorLink>
          </S.TrackPlayAuthor>
        ) : (
          <S.SceletonAuthor></S.SceletonAuthor>
        )}
        {isLoading ? (
          <S.TrackPlayAlbum>
            <S.TrackPlayAlbumLink href='http://'>
              Баста
            </S.TrackPlayAlbumLink>
          </S.TrackPlayAlbum>
        ) : (
          <S.SceletonAlbum></S.SceletonAlbum>
        )}
      </S.TrackPlayerContain>
      <S.TrackPlayLikesDisplay>
        <S.TrackPlayLike>
          <S.TrackPlayLikeSvg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='14'
            viewBox='0 0 16 14'
            fill='none'
          >
            <path
              d='M8.02154 13C13.902 9.5 16.9673 4.20921 13.6127 1.76734C11.4125 0.165765 8.95343 1.44175 8.02154 2.25572H8.00003H7.99997H7.97846C7.04657 1.44175 4.58746 0.165765 2.38727 1.76734C-0.967302 4.20921 2.09797 9.5 7.97846 13H7.99997H8.00003H8.02154Z'
              fill='#696969'
            />
            <path
              d='M7.99997 2.25572H8.02154C8.95343 1.44175 11.4125 0.165765 13.6127 1.76734C16.9673 4.20921 13.902 9.5 8.02154 13H7.99997M8.00003 2.25572H7.97846C7.04657 1.44175 4.58746 0.165765 2.38727 1.76734C-0.967302 4.20921 2.09797 9.5 7.97846 13H8.00003'
              stroke='white'
            />
          </S.TrackPlayLikeSvg>
        </S.TrackPlayLike>
        <S.TrackPlayDislike>
          <S.TrackPlayDislikeSvg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='15'
            viewBox='0 0 16 15'
            fill='none'
          >
            <path
              d='M8.36553 14C14.246 10.5 17.3113 5.20921 13.9567 2.76734C11.7565 1.16576 9.29742 2.44175 8.36553 3.25572H8.34402H8.34397H8.32246C7.39056 2.44175 4.93145 1.16576 2.73126 2.76734C-0.623308 5.20921 2.44196 10.5 8.32246 14H8.34397H8.34402H8.36553Z'
              fill='#696969'
            />
            <path
              d='M8.34396 3.25572H8.36553C9.29742 2.44175 11.7565 1.16576 13.9567 2.76734C17.3113 5.20921 14.246 10.5 8.36553 14H8.34396M8.34402 3.25572H8.32246C7.39056 2.44175 4.93145 1.16576 2.73126 2.76734C-0.623308 5.20921 2.44196 10.5 8.32246 14H8.34402'
              stroke='white'
            />
            <path d='M1 1L15 13.5' stroke='white' />
          </S.TrackPlayDislikeSvg>
        </S.TrackPlayDislike>
      </S.TrackPlayLikesDisplay>
    </S.PlayerTrackPlay>
  );
}
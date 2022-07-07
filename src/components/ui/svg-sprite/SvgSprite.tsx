import React, { FC } from 'react';

type Sprite = {
  id: string,
  width: number,
  height: number
};

const SvgSprite: FC<Sprite> = ({ id, width, height }) => {
  switch (id) {
    case 'status-ok':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={width} height={height}>
          <path fill="currentColor" d="M 24 4 C 12.972656 4 4 12.972656 4 24 C 4 35.027344 12.972656 44 24 44 C 35.027344 44 44 35.027344 44 24 C 44 12.972656 35.027344 4 24 4 Z M 32.5625 20.5625 L 22.5625 30.5625 C 22.269531 30.855469 21.882812 31 21.5 31 C 21.117188 31 20.730469 30.855469 20.4375 30.5625 L 15.4375 25.5625 C 14.851562 24.976562 14.851562 24.027344 15.4375 23.441406 C 16.023438 22.855469 16.972656 22.855469 17.558594 23.441406 L 21.5 27.378906 L 30.4375 18.441406 C 31.023438 17.855469 31.972656 17.855469 32.558594 18.441406 C 33.144531 19.027344 33.144531 19.976562 32.5625 20.5625 Z M 32.5625 20.5625 " />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213" width={width} height={height}>
          <polygon points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 345.606,368.713 476.213,238.106 " fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};

export default SvgSprite;

import React, { ReactNode } from 'react';
import { Swiper, SwiperProps } from 'swiper/react/swiper-react';
import { Navigation, Keyboard } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import './Slider.scss';

type Props = { children: ReactNode } & SwiperProps;

const Slider = ({ children, ...rest }: Props) => (
  <Swiper loop navigation modules={[Navigation, Keyboard]} className={rest.keyboard ? 'swiper--in-modal' : ''} {...rest}>
    {children}
  </Swiper>
);

export default Slider;

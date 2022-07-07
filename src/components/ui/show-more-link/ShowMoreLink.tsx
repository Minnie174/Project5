import React from 'react';
import SvgSprite from '../svg-sprite/SvgSprite';
import classes from './showMoreLink.module.scss';

type ShowMoreLinkProps = {
  text: string,
};

const ShowMoreLink = ({ text }: ShowMoreLinkProps) => (
  <a href="/" className={classes.showMoreLink}>
    {text}
    <SvgSprite id="arrow-right" width={20} height={20} />
  </a>
);

export default ShowMoreLink;

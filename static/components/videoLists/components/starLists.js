import React from 'react';
import compose from 'recompose/compose';
import mapProps from 'recompose/withProps';
import defaultProps from 'recompose/defaultProps';
import Star from './star';

const ratingMap = new Map([
  [2.5, 1],
  [3.5, 1.5],
  [4.5, 2],
  [5.2, 2.5],
  [6.5, 3],
  [7.1, 3.5],
  [8.1, 4],
  [8.9, 4.5],
  [10, 5],
]);

const calcStar = ({rating, config, max}) => {
  // max 星星的个数
  let [styleNames, result] = [];
  if (rating) {
    styleNames = [];
    for (let [level, star] of config) {
      if (rating <= level) {
        result = star;
        break;
      }
    }
    for (let i = 1; i <= max; i += 1) {
      let cha = i - result;
      if (cha <= 0) {
        styleNames.push('full');
      } else if (cha > 0 && cha < 1) {
        styleNames.push('half');
      } else {
        styleNames.push('empty');
      }
    }
  }
  return {
    styleNames
  };
};

const enhanced = compose(
  mapProps(({rating}) => calcStar({rating, config: ratingMap, max: 5})),
  defaultProps({styleNames: ['empty', 'empty', 'empty', 'empty', 'empty']}),
);

const StarLists = ({styleNames}) => {
  // styleNames like ['full', 'full', 'full', 'half', 'empty'] to 3.5point
  return (
    <ul className="clearfix">
      {
        styleNames.map((styleName, index) => {
          return (
            <Star styleName={styleName} key={index} />
          );
        })
      }
    </ul>
  );
};

export default enhanced(StarLists);

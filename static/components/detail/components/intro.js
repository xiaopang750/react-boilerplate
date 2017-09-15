import React from 'react';
import withHandlers from 'recompose/withHandlers';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import style from './index.styl';

const MAX = 100;

const CutArticle = ({intros, spread}) => {
  let befores = intros.slice(0, MAX);
  return (
    <article>
      {
        befores.map((item, index) => {
          return (
            <span key={index}>{item}</span>
          );
        })
      }
      <span className={style.spread} onTouchStart={spread}>展开&gt;</span>
    </article>
  );
};

// const EnhancedCutArticle = compose(
//   withHandlers({
//     spred: props => (event) => {
//       console.log(props);
//       console.log(event);
//       // props.updateValue(event.target.value);
//     }
//   })
// )(CutArticle);

const NormalArticle = ({intro}) => {
  return (
    <article>{intro}</article>
  );
};

const Content = ({intro, shouldCut, spread}) => {
  let intros = intro.split('');
  let Detail;
  if (shouldCut) {
    Detail = <CutArticle intros={intros} spread={spread} />;
  } else {
    Detail = <NormalArticle intro={intro} />;
  }
  return Detail;
};

const wrapContent = (shouldCut) => {
  return compose(
    withState('shouldCut', 'update', shouldCut),
    withHandlers({
      spread: props => (event) => {
        // console.log(props);
        props.update(false);
      }
    })
  )(Content);
};

const actor = ({intro}) => {
  let shouldCut = intro.length > MAX;
  let EnhancedContent = wrapContent(shouldCut);
  return (
    <div className={style.intro}>
      <h3>简介</h3>
      <EnhancedContent
        intro={intro}
        shouldCut={shouldCut}
      />
    </div>
  );
};

export default actor;

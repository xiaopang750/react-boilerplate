import {combineReducers} from 'redux';
import videoLists from './components/videoLists';
import detail from './components/detail';

let {constants: {NAME: videoListsName}, reducer: videoListsReducer} = videoLists;
let {constants: {NAME: detailName}, reducer: detailReducer} = detail;

const rootReducer = combineReducers({
  [videoListsName]: videoListsReducer,
  [detailName]: detailReducer
});

export default rootReducer;

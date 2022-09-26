import {combineReducers} from'redux';

import artists from './artist_reducer';
import dark from './dark_reducer';

const rootReducer = combineReducers({

    artists,
    dark

})

export default rootReducer
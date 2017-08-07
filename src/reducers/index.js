/**
 * Created by lenovo on 2017/8/5.
 */
import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './filterTodo';

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;

/**
 * Created by lenovo on 2017/8/5.
 */
import React from 'react';
import AddTodo from '../containers/AddTodo';
import FilterTodo from '../containers/FilterTodo';
import Footer from './Footer';

const App = function() {
    return <div>
        <AddTodo/>
        <FilterTodo/>
        <Footer/>
    </div>
}

export default App;
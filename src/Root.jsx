import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';
import TodoList from 'pages/TodoList/TodoList';
const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;

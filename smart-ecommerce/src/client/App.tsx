import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductList from './components/Products/ProductList';
import ProductDetail from './components/Products/ProductDetail';
import RecommendationList from './components/Recommendations/RecommendationList';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={ProductList} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/products/:id" component={ProductDetail} />
                    <Route path="/recommendations" component={RecommendationList} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
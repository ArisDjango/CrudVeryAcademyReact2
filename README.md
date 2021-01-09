# React
## 1. Instalasi
- 1.1. Instalasi React
    - npx create-react-app blogapi
    - cd blogapi
    - yarn start

- 1.2. Components
    - Buat Folder 'components', lalu buat file
    - Footer.js
    - Header.js
    - Posts.js
    - PostLoading.js

    - Buka index.js
    - code:
        - import
        ```
        import React from 'react';
        import ReactDOM from 'react-dom';
        import * as serviceWorker from './serviceWorker';
        import './index.css';
        import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
        import App from './App';
        import Header from './components/Header';
        import Footer from './components/Footer';
        ```
        - router
        ```
        const routing = (
            <Router>
            <React.StrictMode>
                <Header/>
                <Switch>
                <Route exact path="/" component={App} />
                </Switch>
                <Footer/>
            </React.StrictMode>
            </Router>
        );
        ```
        - gdfg
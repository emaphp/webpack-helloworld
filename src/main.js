// Styles
import './scss/styles.scss';

// Main app
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
    const app = new App('app');
    app.init();
})

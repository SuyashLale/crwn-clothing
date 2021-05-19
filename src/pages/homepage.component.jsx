import {React} from 'react';

import './homepage.styles.scss';
import '../components/directory/directory.component.jsx';
import Directory from '../components/directory/directory.component';

const HomePage = () => {
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
}

export default HomePage;
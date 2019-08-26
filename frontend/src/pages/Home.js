import React from 'react';
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Container />
            </div>
        )
    }
}

export default Home;
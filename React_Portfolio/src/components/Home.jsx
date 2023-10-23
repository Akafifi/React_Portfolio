import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const Home = () => {
    const cardInfo = [
        {image:'', title:'nextQuest'},
        {image:'', title:'Encyclopet'}
    ];

    const renderCard = (card, index) => {
        return (
            <div>
            <Card style={{ width: '18rem' }} key = {index}>
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Button href="https://next-quest-app-ede904b63665.herokuapp.com/login" target="_blank" onClick={() => onClickOpenVacancy(id)}variant="primary">Take Me There</Button>
                </Card.Body>
            </Card>

        </div>

        )
    }

    return <div>
        {cardInfo.map(renderCard)}
    </div>


}

export default Home

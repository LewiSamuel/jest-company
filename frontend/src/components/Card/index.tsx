import moment from 'moment';
import Card from 'react-bootstrap/Card';
import style from './card.module.css';

function CardPost(params:any) {
  return (
    <Card key={params.obj.id} className="bg-dark text-white border-0 mt-2">
      <Card.Img src={process.env.NEXT_PUBLIC_API_URL + params.obj.Img} alt="Card image" />
      <Card.ImgOverlay className={'align-self-end ' + style.cardPostOverlay}>
        <Card.Title>
            <b>{params.obj.Author.Name.split(" ")[0]}</b>
        </Card.Title>
        <Card.Text>
          {params.obj.Description}
        </Card.Text>
        <Card.Text>
            <small>{moment(params.obj.createdAt).locale('pt').fromNow()}</small>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardPost;
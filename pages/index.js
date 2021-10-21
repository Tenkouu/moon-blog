import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Media,
  Image,
  Card,
} from "react-bootstrap";

import MyNavbar from "components/my-navbar";
import Intro from "components/intro";
import ListItem from "components/list-item";
import GridItem from "components/grid-item";

export default function Home() {
  return (
    <Container>
      <MyNavbar />
      <div className="blog-detail-page">
        <Row>
          <Col md="8">
            <Intro />
          </Col>
        </Row>
        <hr />

        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              <ListItem />
            </Col>

            <Col md="4">
              <GridItem />
            </Col>

            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <img
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle me-2"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Амар Өсөхбаяр
                      </Card.Title>
                      <Card.Text className="card-date">
                        2021 оны 3 сарын 2
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://source.unsplash.com/collection/190727/250x250"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Монолотик архитектур
                    </Card.Title>
                    <Card.Text>Вэб технологи</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>

            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <img
                      src={"https://source.unsplash.com/user/erondu/150x150"}
                      className="rounded-circle me-2"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">
                        Амар Өсөхбаяр
                      </Card.Title>
                      <Card.Text className="card-date">
                        2021 оны 3 сарын 2
                      </Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img
                      src="https://source.unsplash.com/collection/190726/250x250"
                      alt="Card image cap"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">
                      Sanity блог хийх
                    </Card.Title>
                    <Card.Text>Вэб технологи</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <footer className="page-footer">
        <div>
          <a href="#">Нүүр</a>
          {" | "}
          <a href="#">Сургалт</a>
          {" | "}
          <a href="#">Фэйсбүүк</a>
        </div>
      </footer>
    </Container>
  );
}
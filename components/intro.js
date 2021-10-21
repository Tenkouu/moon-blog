import { Media, Image } from "react-bootstrap";

export default () => (
    <div class="media" className="admin-intro d-flex flex-row">
            <Image roundedCircle width={64} height={64} className="me-3" src="logo.jpg"/>
            <div class="media-body">
                <h5 className="font-weight-bold mb-0">
                    1234.mn - Онлайн видео сургалт
                </h5>
                <p className="welcome-text">
                    Бид програмчлалын технолгийн чиглэлээр төрөл бүрийн
                    сонирхолтой мэдээллүүдийг энэхүү блогоор хүргэж байна.
                </p>
            </div>
        </div>
);
import React from 'react';
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import cycle from "../vehicles/bicycle.png";
import admin from "../images/admin.jpg";
import userimage from "../images/userimage.png"
import seller from "../images/seller.png";

export default function Login() {
    const adminimgStyle = { width: "494px", height: "250px" };
    const userimgStyle = { width: "340px", height: "250px" , marginLeft: "83px"};
    const sellerimgStyle = { width: "330px", height: "250px", marginLeft: "83px" };

    return (
        <div>
            <div style={{ marginTop: "100px" }}></div>

            <Row xs={1} md={3} className="g-4" style={{ marginTop: "20px" }}>
                <Col style={{ marginBottom: "20px" }}>
                    <Link to="/adminlogin" style={{ textDecoration: "none" }}>
                        <Card>
                            <Card.Img variant="top" src={admin} style={adminimgStyle} />
                            <Card.Body>
                                <Card.Title style={{textAlign: "center"}}>Admin Login</Card.Title>
                                {/*<Card.Text>
                                    Two-wheeled, pedal-powered vehicle, often used for recreation, commuting, and sport.
                                </Card.Text>*/}
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>

                <Col style={{ marginBottom: "20px" }}>
                    <Link to="/userlogin" style={{ textDecoration: "none" }}>
                        <Card>
                            <Card.Img variant="top" src={userimage} style={userimgStyle} />
                            <Card.Body>
                                <Card.Title style={{textAlign: "center"}}>User Login</Card.Title>
                                {/*<Card.Text>
                                    Two-wheeled, pedal-powered vehicle, often used for recreation, commuting, and sport.
                                </Card.Text>*/}
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>

                <Col style={{ marginBottom: "20px" }}>
                    <Link to="/sellerlogin" style={{ textDecoration: "none" }}>
                        <Card>
                            <Card.Img variant="top" src={seller} style={sellerimgStyle} />
                            <Card.Body>
                                <Card.Title style={{textAlign: "center"}}>Seller login</Card.Title>
                                {/*<Card.Text>
                                    Two-wheeled, pedal-powered vehicle, often used for recreation, commuting, and sport.
                                </Card.Text>*/}
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}

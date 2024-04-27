import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import porshe from "../vehicles/porshe.png";
import cycle from "../vehicles/bicycle.png";
import jcb from "../vehicles/jcb.png";
import gt from "../vehicles/gt.png";
import bus from "../vehicles/bus.png"
import helicopter from "../vehicles/helicopter.png"
import armoedvehicle from "../vehicles/armoedtruck.png"
import ship from "../vehicles/ship.png"
import spareparts from "../vehicles/car electronics.png"
import accessories from "../vehicles/helmet.png"

function VehicleSection() {
  const imgStyle = { width: "400px", height: "250px" }; // Define the default width and height for images

  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <Row xs={1} md={2} className="g-4">
        
        <Col className="d-flex">
          <Link to="/userlogin"  style={{ textDecoration: "none" }}>
            <Card>
              <Card.Img variant="top" src={cycle} style={imgStyle} />
              <Card.Body>
                <Card.Title>By Cycle</Card.Title>
                <Card.Text >
                Two-wheeled, pedal-powered vehicle, often used for recreation, commuting, and sport.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col className="d-flex">
          <Link to="/userlogin"  style={{ textDecoration: "none" }}>
            <Card>
              <Card.Img variant="top" src={gt} style={imgStyle} />
              <Card.Body>
                <Card.Title>Motor Cycle</Card.Title>
                <Card.Text>
                Two-wheeled motor vehicle, known for its speed and maneuverability.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col className="d-flex">
          <Link to="/userlogin"  style={{ textDecoration: "none" }}>
            <Card>
              <Card.Img variant="top" src={porshe} style={imgStyle} />
              <Card.Body>
                <Card.Title>Cars</Card.Title>
                <Card.Text>
                Four-wheeled motor vehicle, commonly used for personal transportation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col className="d-flex">
          <Link to="/userlogin" style={{ textDecoration: "none" }}>
            <Card>
              <Card.Img variant="top" src={bus} style={imgStyle} />
              <Card.Body>
                <Card.Title>Buses</Card.Title>
                <Card.Text>
                Large motor vehicles, designed to carry numerous passengers, typically for public transport.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col className="d-flex">
          <Link to="/userlogin" style={{ textDecoration: "none" }}>
            <Card>
              <Card.Img variant="top" src={jcb} style={imgStyle} />
              <Card.Body>
                <Card.Title>JCB (Excavator) </Card.Title>
                <Card.Text>
                Construction equipment with a powerful digging arm and bucket, used for heavy lifting and digging.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col className="d-flex">
          <Link to="/userlogin" style={{ textDecoration: "none" }}>
            <Card>
              <Card.Img variant="top" src={helicopter} style={imgStyle} />
              <Card.Body>
                <Card.Title>Helicopter</Card.Title>
                <Card.Text>
                Rotary-wing aircraft, capable of vertical take-off and landing, used for various purposes
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col className="d-flex">
          <Link to="/userlogin" style={{ textDecoration: "none" }}>
            <Card>
              <Card.Img variant="top" src={armoedvehicle} style={imgStyle} />
              <Card.Body>
                <Card.Title>Armoed Vehicles </Card.Title>
                <Card.Text>
                Military vehicles with protective armor, used in combat situations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col className="d-flex">
          <Link to="/userlogin" style={{ textDecoration: "none" }}>
            <Card>
              <Card.Img variant="top" src={ship} style={imgStyle} />
              <Card.Body>
                <Card.Title>Ships</Card.Title>
                <Card.Text>
                Watercraft of considerable size, used for maritime voyages or cargo transport.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col className="d-flex">
          <Link to="/userlogin" style={{ textDecoration: "none" }}>
            <Card>
              <Card.Img variant="top" src={spareparts} style={imgStyle} />
              <Card.Body>
                <Card.Title>Spare Parts</Card.Title>
                <Card.Text>
                Individual components of vehicles, used for repair and replacement.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col className="d-flex">
          <Link to="/userlogin" style={{ textDecoration: "none" }}>
            <Card>
              <Card.Img variant="top" src={accessories} style={imgStyle} />
              <Card.Body>
                <Card.Title>Accessories</Card.Title>
                <Card.Text>
                Additional items that can be added to a vehicle for practical or decorative purposes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>

      </Row>
    </div>
  );
}

export default VehicleSection;

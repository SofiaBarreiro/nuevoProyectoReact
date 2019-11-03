import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, NavItem, Jumbotron, Container, MenuItem } from 'react-bootstrap';


function HelloWorld() {
  return (
    <Navbar bg="warning" variant="warning">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#SeccionUno">Seccion Uno</Nav.Link>
      <Nav.Link href="#SeccionDos">Seccion Dos</Nav.Link>
      <Nav.Link href="#SeccionTres">Seccion Tres</Nav.Link>
      <Nav.Link href="#SeccionCuatro">Seccion Cuatro</Nav.Link>
      <Nav.Link href="#SeccionContacto">Contacto</Nav.Link>
    </Navbar>
  );
}


function Encabezado() {
  return (
    <Jumbotron fluid>
      <Container>
        <center>
          <h1>Bienvenidos a mi web</h1>
          <p>
            Esta es una página de prueba hecha con React + bootstrap
      </p>
        </center>

      </Container>
    </Jumbotron>
  );
}


function FormularioContacto() {
  return (
    <center>
      <Form plaintext >
        <Form.Group plaintext>
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control type="name" />

        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"/>

        </Form.Group>
        <Form.Group>
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="name" />

        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Ingrese su edad</Form.Label>
          <Form.Control as="select">
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
          </Form.Control>
        </Form.Group>
        <Form.Label>Género</Form.Label>

        {['checkbox'].map(type => (
          <div key={'Sexo'} className="mb-3">
            <Form.Check
              type={type}
              id={'Hombre'}
              label={'Hombre'}
            />
            <Form.Check
              type={type}
              id={`Mujer`}
              label={`Mujer`}
            />
          </div>
        ))}

        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
    </center>

  );
}

const App = () => <div>
  <HelloWorld></HelloWorld>
  <Encabezado></Encabezado>
  <FormularioContacto>
  </FormularioContacto>
</div>


export default App;

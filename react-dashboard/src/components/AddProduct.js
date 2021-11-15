import React, { useState, useEffect } from "react";

import {
  Table,
  Button,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const AddProduct = () => {
  const [products, setProducts] = useState();

  const [form, setForm] = useState({
    // id: "",
    name: "",
    discount: "",
    price: "",
  });

  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  // componentDidMount: Al montar componente traemos productos
  useEffect(() => {
    const info = async () => {
      let resProducts = await fetch(`http://localhost:3001/api/products/`);
      let productsSaved = await resProducts.json();

      setProducts(productsSaved.products); //products=productsSaved
    };
    info();
  }, []);

  //   funcion para guardar cambios en el form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //   funciones para cambiar estado mostrar modal
  const showInsertModal = () => {
    setModalInsert(true);
  };
  const hideInsertModal = () => {
    setModalInsert(false);
  };

  //   funciones para cambiar estado mostrar modal
  const showEditModal = (data) => {
    setModalEdit(true);
    setForm(data);
  };
  const hideEditModal = () => {
    setModalEdit(false);
  };

  //   añadir producto de manera local
  const addProduct = () => {
    //   la info del form
    let newValue = { ...form };
    // id autoincrementable
    newValue.id = products.length + 1;
    // traemos los products
    let productsList = products;
    // pusheamos lo nuevo
    productsList.push(newValue);
    // seteamos nuevo estado
    setProducts(productsList);
    // hacemos desparecer el modal
    setModalInsert(false);
  };

  //   editar producto de manera local
  const editProduct = (data) => {
    let counter = 0;
    let list = products;
    list.map((product) => {
      if (data.name == product.name) {
        list[counter].name = data.name;
        list[counter].price = data.price;
        list[counter].discount = data.discount;
      }
      counter++;
    });
    setProducts(list);
    setModalEdit(false);
  };

  //   editar producto de manera local
  const deleteProduct = (data) => {
    let option = window.confirm(
      "Realmente deseas eliminar el producto " + data.name
    );
    console.log(option);
    if (option) {
      let counter = 0;
      let listProducts = products;
      console.log(products);
      listProducts.map((product) => {
        if (product.name == data.name) {
          listProducts.splice(counter, 1);
        }
        counter++;
      });
      setProducts(listProducts);
    }
  };

  return (
    <React.Fragment>
      <Container>
        <br />
        <Button color="success" onClick={showInsertModal}>
          Insertar nuevo producto
        </Button>
        <br />
        <br />

        <Table>
          <thead>
            <tr>
              {/* <th>Id</th> */}
              <th>Product</th>
              <th>Price</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product, i) => {
                console.log(product);
                return (
                  <tr key={i}>
                    {/* <td>{product.id}</td> */}
                    <td>{product.name}</td>

                    <td>{product.price}</td>
                    <td>{product.discount}</td>
                    <td>
                      <Button
                        color="primary"
                        onClick={() => showEditModal(product)}
                      >
                        Editar
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="danger"
                        onClick={() => deleteProduct(product)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>

      {/* se muestra o no depende del estado */}
      <Modal isOpen={modalInsert}>
        <ModalHeader>
          <div>
            <h3>Insertar registro</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Name:</label>
            <input
              className="form-control"
              name="name"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Precio:</label>
            <input
              className="form-control"
              name="price"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Descuento:</label>
            <input
              className="form-control"
              name="discount"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <button color="primary" onClick={addProduct}>
            Insertar
          </button>
          <button color="danger" onClick={hideInsertModal}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEdit}>
        <ModalHeader>
          <div>
            <h3>Editar registro</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Name:</label>
            <input
              className="form-control"
              name="name"
              type="text"
              onChange={handleChange}
              value={form.name}
            />
          </FormGroup>

          <FormGroup>
            <label>Precio:</label>
            <input
              className="form-control"
              name="price"
              type="text"
              onChange={handleChange}
              value={form.price}
            />
          </FormGroup>

          <FormGroup>
            <label>Descuento:</label>
            <input
              className="form-control"
              name="discount"
              type="text"
              onChange={handleChange}
              value={form.discount}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <button color="primary" onClick={() => editProduct(form)}>
            Editar
          </button>
          <button color="danger" onClick={hideEditModal}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};
export default AddProduct;

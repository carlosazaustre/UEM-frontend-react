import { useState, useEffect } from "react";

// 1) Crea  un  componente  llamado  Saludo  que  muestre  un  mensaje  de  bienvenida  a  un
// usuario. Este componente debería aceptar una prop nombre que especifica el nombre
// del usuario.
export function Saludo({ nombre = "Carlos" }) {
  return `Hola ${nombre}`;
}

// 2) Crea un componente llamado Lista que muestre una lista de elementos. Este
// componente debería aceptar una prop elementos que es un array con los elementos que
// se deben mostrar.
export function Lista({
  elementos = ["elemento 1", "elemento 2", "elemento 3"],
}) {
  return (
    <ul>
      {elementos?.map((elemento, index) => (
        <li key={elemento}>{elemento}</li>
      ))}
    </ul>
  );
}

// 3) Crea  un  componente  llamado  Perfil  que  muestre  información  de  un  usuario.  Este
// componente debería aceptar las props nombre, edad y país para especificar la
// información del usuario.
export function Perfil({ nombre, edad, pais }) {
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad} años</p>
      <p>País: {pais}</p>
    </div>
  );
}

// 4) Crea  un  componente  llamado  Contador  que  muestre  un  número  y  un  botón  para
// incrementar  o  decrementar  ese  número.  Este  componente  debería  aceptar  una  prop
// value que especifica el valor inicial del contador, y dos props de función para incrementar
// y decrementar que se deben llamar cuando se haga clic en los botones
// correspondientes.
export function Contador({ value, increment, decrement }) {
  return (
    <div>
      <p>Contador: {value}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

// 5) Crea  un  componente  llamado  Counter  que  muestre  un  número  y  un  botón  para
// incrementar o decrementar ese número. Este componente debería mantener el estado
// del contador y usar el hook useEffect para imprimir un mensaje en la consola cada vez
// que el contador cambie.
export function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div>
      <Contador
        value={counter}
        increment={() => setCounter(counter + 1)}
        decrement={() => setCounter(counter - 1)}
      />
    </div>
  );
}

// 6) Crea  un  componente  llamado  Clock  que  muestre  la  hora  actual.  Este  componente
// debería usar el hook useEffect para actualizar la hora cada segundo.
export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Hora: {time.toLocaleTimeString()}</p>;
}

// 7) Crea un componente llamado Form que muestre un formulario para ingresar el nombre
// y la edad de un usuario. Este componente debería tener dos campos de texto para el
// nombre y la edad, y un botón para enviar el formulario. Al enviar el formulario, se debería
// mostrar un mensaje con la información del usuario. Además, este componente debería
// usar el hook useEffect para limpiar los campos del formulario cuando se envíe.
export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
  });
  const [sended, setSended] = useState(false);

  useEffect(() => {
    setFormData({ name: "", age: "" });
  }, [sended]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setSended(true);
    alert(`Hola ${formData.name}, tienes ${formData.age} años`);
  };

  return (
    <>
      <h3>Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

// 8) Crea un componente llamado TodoList que muestre una lista de tareas por hacer. Cada
// tarea debe tener un título y una descripción. Este componente debería aceptar una prop
// "todos" que es un array de objetos, cada uno con las propiedades title y description.

export function TodoList({
  todos = [
    { title: "Tarea 1", description: "Descripción de la tarea 1" },
    { title: "Tarea 2", description: "Descripción de la tarea 2" },
    { title: "Tarea 3", description: "Descripción de la tarea 3" },
  ],
}) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <h4>{todo.title}</h4>
          <p>{todo.description}</p>
        </li>
      ))}
    </ul>
  );
}

// 9) Crea  un  componente  llamado  Table  que  muestre  una  tabla  con  datos  de  una  lista  de
// usuarios.  Cada  usuario  debe  tener  un  nombre,  una  edad  y  un  país.  Este  componente
// debería  aceptar  una  prop  users  que  es  un  array  de  objetos,  cada  uno  con  las
// propiedades name, age y country.
export function Table({
  users = [
    { name: "Juan", age: 20, country: "Argentina" },
    { name: "Pedro", age: 30, country: "Chile" },
    { name: "Pablo", age: 40, country: "Brasil" },
  ],
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// 10) Crea  un  componente  llamado  ShoppingList  que  muestre  una  lista  de  compras.  Cada
// elemento de la lista debe tener un nombre, una cantidad y un precio. Este componente
// debería tener un botón para agregar elementos a la lista y otro para eliminar elementos.
// Además, debería mostrar el total de la compra.
export function ShoppingList() {
  const [items, setItems] = useState([
    { name: "Manzana", quantity: 2, price: 100 },
    { name: "Pera", quantity: 1, price: 50 },
  ]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    items.forEach((item) => (total += item.quantity * item.price));
    setTotal(total);
  }, [items]);

  const handleAddItem = () => {
    setItems([...items, { name: "Nuevo Item", quantity: 1, price: 200 }]);
  };

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <>
      <h3>Shopping List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} - {item.price}
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <button onClick={handleAddItem}>Add Item</button>
    </>
  );
}

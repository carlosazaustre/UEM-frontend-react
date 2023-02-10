import { useState } from "react";

// 1. Crea  un  custom  hook  que  permita  manejar  un  contador.
// Deberá  tener  las  siguientes funciones:
// a. increment(): Incrementa el contador en 1.
// b. decrement(): Decrementa el contador en 1.
// c. reset(): Pone el contador a 0.
// d. getCount(): Devuelve el valor actual del contador
export function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const getCount = () => count;

  return { getCount, increment, decrement, reset };
}

// 2. Crea  un  custom  hook  que  permita  manejar  un
// formulario  de  inicio  de  sesión.  Deberá
// tener las siguientes funciones:
// a. handleChange(event): Actualiza el valor del campo del formulario
// correspondiente al event.target.name.
// b. handleSubmit(event): Envía el formulario.
// c. getValues(): Devuelve un objeto con los valores actuales del formulario.
// d. reset(): Pone todos los campos del formulario a sus valores iniciales.
export function useAuth() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    reset();
  };

  const getValues = () => values;

  const reset = () => setValues({ username: "", password: "" });

  return { handleChange, handleSubmit, getValues, reset };
}

// 3) Crea un custom hook que permita manejar una
// lista de tareas pendientes. Deberá tener
// las siguientes funciones:
// a. addTask(task): Añade una tarea a la lista.
// b. removeTask(taskId): Elimina una tarea de la lista por su id.
// c. toggleTask(taskId): Marca/desmarca una tarea como completada por su id.
// d. getTasks(): Devuelve la lista de tareas.
export function useTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    setTasks([...tasks, { id: task, name: task, completed: false }]);
    event.target.task.value = "";
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const getTasks = () => tasks;

  return { addTask, removeTask, toggleTask, getTasks };
}

// 4) Crea  un  custom  hook  que  permita  manejar  una  lista
// de  usuarios.  Deberá  tener  las siguientes funciones:
// a. fetchUsers(): Hace una llamada a una API para obtener la lista de usuarios.
// b. addUser(user): Añade un usuario a la lista.
// c. removeUser(userId): Elimina un usuario de la lista por su id.
// d. getUsers(): Devuelve la lista de usuarios.
export function useUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  const addUser = (event) => {
    event.preventDefault();
    const user = event.target.name.value;
    setUsers([...users, { id: user, name: user }]);
    event.target.name.value = "";
  };

  const removeUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const getUsers = () => users;

  return { fetchUsers, addUser, removeUser, getUsers };
}

// 5) Crea  un  custom  hook  que  permita  manejar  una
// lista  de  productos  de  un  carrito  de
// compras. Deberá tener las siguientes funciones:
// a. addProduct(product): Añade un producto a la lista.
// b. removeProduct(productId): Elimina un producto de la lista por su id.
// c. getTotal(): Devuelve el precio total de todos los productos en la lista.
// d. getCart(): Devuelve la lista de productos.
export function useShoppingCart() {
  const [cart, setCart] = useState([]);

  const addProduct = (event) => {
    event.preventDefault();
    const product = {
      id: event.target.name.value,
      name: event.target.name.value,
      price: +event.target.price.value,
    };
    setCart([...cart, product]);
    event.target.name.value = "";
    event.target.price.value = "";
  };

  const removeProduct = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const getTotal = () => {
    return cart.reduce((acc, product) => acc + product.price, 0);
  };

  const getCart = () => cart;

  return { addProduct, removeProduct, getTotal, getCart };
}

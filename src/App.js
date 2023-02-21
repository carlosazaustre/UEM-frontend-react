// import { Greeting } from "./components/U1_a/01_Greeting";
// import { ShowName } from "./components/U1_a/02_ShowName";
// import { ShowDate } from "./components/U1_a/03_ShowDate";
// import { ShowMessage } from "./components/U1_a/04_ShowMessage";
// import { Loading } from "./components/U1_a/05_Loading";
// import { Button } from "./components/U1_a/06_Button";
// import { Text } from "./components/U1_a/07_Text";
// import { TextPassword } from "./components/U1_a/08_TextPassword";
// import { Counter } from "./components/U1_a/09_Counter";
// import { String } from "./components/U1_a/10_String";

// import { Timer } from "./components/U1_b/01_Timer";
// import { Like } from "./components/U1_b/02_Like";
// import { Users } from "./components/U1_b/03_Users";
// import { Names } from "./components/U1_b/04_Names";
// import { UserAges } from "./components/U1_b/05_UserAges";
// import { Select } from "./components/U1_b/06_Select";
// import { Text as Text2 } from "./components/U1_b/07_Text";
// import { ButtonCall } from "./components/U1_b/08_ButtonCall";
// import { Password } from "./components/U1_b/09_Password";
// import { Form } from "./components/U1_b/10_Form";

// import {
//   Saludo,
//   Lista,
//   Perfil,
//   Contador,
//   Counter,
//   Clock,
//   Form,
//   TodoList,
//   Table,
//   ShoppingList,
// } from "./components/practice_U1/practice";

// import {
//   useCounter,
//   useAuth,
//   useTasks,
//   useUsers,
//   useShoppingCart,
// } from "./components/practice_U3/practice";

// import { Suspense, lazy } from "react";
// import { ColorPicker } from "./components/U3_b/ColorPicker";
// import { TodoList } from "./components/U3_b/TodoList";
// import { ShoppingCart } from "./components/U3_a/ShoppingCart";
// import { ErrorBoundary, ErrorMessage } from "./components/U3_a/Counter";
// import { ShowServerConfig } from "./components/U3_a/ShowServerConfig";
// const Counter = lazy(() => import("./components/U3_a/Counter"));

import { ThemeProvider } from "./components/practice_U4/ThemeContext";
import { LanguageProvider } from "./components/practice_U4/LanguageContext";
import { FontSizeProvider } from "./components/practice_U4/FontSizeContext";
import { AuthProvider } from "./components/practice_U4/AuthContext";
import { ConfigProvider } from "./components/practice_U4/ConfigContext";
import { Component } from "./components/practice_U4/Component";
import { UserComponent } from "./components/practice_U4/UserComponent";
import { ConfigForm } from "./components/practice_U4/ConfigForm";

function App() {
  // const names = ["sergio", "victoria", "iván", "liviu"];
  // const users = [
  //   { name: "Sergio", age: 28 },
  //   { name: "Victoria", age: 27 },
  //   { name: "Iván", age: 30 },
  //   { name: "Liviu", age: 26 },
  // ];
  // const { getCount, increment, decrement, reset } = useCounter();
  // const { handleChange, handleSubmit, getValues, reset: resetAuth } = useAuth();
  // const { addTask, removeTask, toggleTask, getTasks } = useTasks();
  // const { fetchUsers, addUser, removeUser, getUsers } = useUsers();
  // const { getCart, addProduct, removeProduct, getTotal } = useShoppingCart();
  return (
    <>
      <h2>Práctica U4</h2>
      <AuthProvider>
        <ConfigProvider>
          <FontSizeProvider>
            <LanguageProvider>
              <ThemeProvider>
                <ConfigForm />
                <Component />
                <UserComponent />
              </ThemeProvider>
            </LanguageProvider>
          </FontSizeProvider>
        </ConfigProvider>
      </AuthProvider>

      {/* <h2>Práctica</h2>
      <Saludo nombre="Pepe" />
      <Lista elementos={["item1", "item2", "item3"]} />
      <Perfil nombre="Carlos" edad="38" pais="España" />
      <Contador value="23" />
      <Counter />
      <Clock />
      <Form />
      <TodoList />
      <Table />
      <ShoppingList /> */}
      {/* <h2>Ejercicios 1 A</h2>
      <Greeting />
      <ShowName />
      <ShowDate />
      <ShowMessage />
      <Loading show>
        <ShowMessage />
      </Loading>
      <Button handleClick={() => console.log("Holi!")} />
      <Text />
      <TextPassword />
      <Counter />
      <String />

      <h2>Ejercicios 1 B</h2>
      <Timer />
      <Like />
      <Users />
      <Names names={names} />
      <UserAges users={users} />
      <Select
        value={1}
        items={["a", "b", "c"]}
        onChange={() => console.log("changed!")}
      />
      <Text2 />
      <ButtonCall />
      <Password />
      <Form /> */}
    </>
  );
}

export default App;

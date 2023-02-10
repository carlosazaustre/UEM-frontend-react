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

import {
  Saludo,
  Lista,
  Perfil,
  Contador,
  Counter,
  Clock,
  Form,
  TodoList,
  Table,
  ShoppingList,
} from "./components/practice_U1/practice";

function App() {
  // const names = ["sergio", "victoria", "iván", "liviu"];
  // const users = [
  //   { name: "Sergio", age: 28 },
  //   { name: "Victoria", age: 27 },
  //   { name: "Iván", age: 30 },
  //   { name: "Liviu", age: 26 },
  // ];

  return (
    <>
      <h2>Práctica</h2>
      <Saludo nombre="Pepe" />
      <Lista elementos={["item1", "item2", "item3"]} />
      <Perfil nombre="Carlos" edad="38" pais="España" />
      <Contador value="23" />
      <Counter />
      <Clock />
      <Form />
      <TodoList />
      <Table />
      <ShoppingList />
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

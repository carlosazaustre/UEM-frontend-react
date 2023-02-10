// Crea una función llamada add que tome dos números como argumentos
// y devuelva su  suma. Escribe pruebas para asegurarte de que
// la función funciona correctamente.
export function add(num1, num2) {
  return num1 + num2;
}

// Crea una función llamada isPalindrome que tome una cadena de
// texto como argumento  y devuelva true si la cadena es un palíndromo,
// o false si no lo es.
export function isPalindrome(text) {
  const textReverse = text.split("").reverse().join("");
  return textReverse === text;
}

// Crea una función llamada reverseString que tome una cadena
// de texto como argumento y  devuelva  la  cadena  invertida.
export function reverseString(text) {
  return text.split("").reverse().join("");
}

// Crea una función llamada factorial que calcule el factorial
// de un número dado.
export function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;

  // Recursivo
  //   if (num === 0) {
  //     return 1;
  //   }
  //   return num * factorial(num - 1);
}

// Crea una función llamada isPrime que determine
// si un número es primo o no.
export function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// Crea un componente de React llamado Button que renderice
// un botón HTML.
// Escribe pruebas para asegurarte de que el componente se está
// renderizando correctamente y  de que está reaccionando a los
// eventos de clic.
export function Button({ handleClick }) {
  return <button onClick={handleClick}>Click</button>;
}

// Crea un componente de React llamado Card que renderice
// una tarjeta con un título, una  imagen y una descripción.
// Escribe pruebas para asegurarte de que el componente se
// está  renderizando  correctamente  y  de  que  está
// mostrando  la  información  de  manera correcta.
export function Card({ title, image, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="imagen" />
      <p>{description}</p>
    </div>
  );
}

// Crea  un  componente  de  React  llamado  Form  que  renderice
// un  formulario  con  varios
// campos  de  texto  y  un  botón  de  envío.
// Escribe  pruebas  para  asegurarte  de  que  el
// componente se está renderizando correctamente y de que está manejando
// correctamente el envío del formulario.
export function Form({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Campo 1" />
      <input type="text" placeholder="Campo 2" />
      <input type="text" placeholder="Campo 2" />
      <button type="submit">Enviar</button>
    </form>
  );
}

//Crea un componente de React llamado Menu que renderice un menú de
// navegación con varios  enlaces.  Escribe  pruebas  para
// asegurarte  de  que  el  componente  se  está
// renderizando  correctamente  y  de  que  está
// manejando  correctamente  el  cambio  de
// enlace cuando se hace clic en uno de ellos.
export function Menu({ links = [], onLinkClick }) {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href} onClick={() => onLinkClick(link.id)}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Crea  un  componente  de  React  llamado  Pagination  que
// renderice  una  paginación  con botones para navegar a través
// de varias páginas. Escribe pruebas para asegurarte de
// que  el  componente  se  está  renderizando  correctamente
// y  de  que  está  manejando correctamente el cambio de página
// cuando se hace clic en un botón.
export function Pagination({ totalPages = 1, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      {pages.map((page) => (
        <button key={page} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  );
}

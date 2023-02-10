import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Testing with Jest (Unit Test)
import {
  add,
  isPalindrome,
  reverseString,
  factorial,
  isPrime,
} from "./practice";

// Testing with React Testing Library (Component Test)
import { Button, Card, Form, Menu, Pagination } from "./practice";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("isPalindrome", () => {
  it("returns true if the text is a palindrome", () => {
    expect(isPalindrome("ana")).toBe(true);
  });

  it("returns false if the text is not a palindrome", () => {
    expect(isPalindrome("sergio")).toBe(false);
  });
});

describe("reverseString", () => {
  it("returns the reversed string", () => {
    expect(reverseString("sergio")).toBe("oigres");
  });
});

describe("factorial", () => {
  it("returns the factorial of a number", () => {
    expect(factorial(5)).toBe(120);
  });
});

describe("isPrime", () => {
  it("returns true if the number is prime", () => {
    expect(isPrime(5)).toBe(true);
  });

  it("returns false if the number is not prime", () => {
    expect(isPrime(6)).toBe(false);
  });
});

describe("<Button />", () => {
  it("renders without errors", () => {
    render(<Button />);
  });

  it("calls the handleClick prop when clicked", () => {
    const handleClickMock = jest.fn();
    render(<Button handleClick={handleClickMock} />);
    userEvent.click(screen.getByRole("button"));
    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});

describe("<Card />", () => {
  it("renders without errors", () => {
    render(<Card />);
  });

  it("renders the title", () => {
    render(<Card title="Sergio" />);
    expect(screen.getByText("Sergio")).toBeInTheDocument();
  });

  it("renders the image", () => {
    render(<Card image="https://picsum.photos/200" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Card description="Sergio" />);
    expect(screen.getByText("Sergio")).toBeInTheDocument();
  });
});

describe("<Form />", () => {
  it("renders without errors", () => {
    render(<Form />);
  });

  it("renders 3 inputs", () => {
    render(<Form />);
    expect(screen.getAllByRole("textbox")).toHaveLength(3);
  });

  it("renders a submit button", () => {
    render(<Form />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls the handleSubmit prop when submitted", () => {
    const handleSubmitMock = jest.fn();
    render(<Form handleSubmit={handleSubmitMock} />);
    userEvent.click(screen.getByRole("button"));
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });
});

describe("<Menu />", () => {
  it("renders without errors", () => {
    render(<Menu />);
  });

  it("renders 3 links correctly", () => {
    const mockLinks = [
      { id: 1, text: "Home", href: "/" },
      { id: 2, text: "About", href: "/about" },
      { id: 3, text: "Contact", href: "/contact" },
    ];
    const onLinkClickMock = jest.fn();
    render(<Menu links={mockLinks} onLinkClick={onLinkClickMock} />);
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });

  it("handles the click event correctly", () => {
    const mockLinks = [
      { id: 1, text: "Home", href: "/" },
      { id: 2, text: "About", href: "/about" },
      { id: 3, text: "Contact", href: "/contact" },
    ];
    const onLinkClickMock = jest.fn();
    render(<Menu links={mockLinks} onLinkClick={onLinkClickMock} />);
    userEvent.click(screen.getByText("Home"));
    expect(onLinkClickMock).toHaveBeenCalledTimes(1);
  });
});

describe("<Pagination />", () => {
  it("renders without errors", () => {
    render(<Pagination />);
  });

  it("renders 3 buttons correctly", () => {
    render(<Pagination totalPages={3} />);
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  it("handles the onPageChange correctly", () => {
    const onPageChangeMock = jest.fn();
    render(<Pagination totalPages={3} onPageChange={onPageChangeMock} />);
    userEvent.click(screen.getByText("2"));
    expect(onPageChangeMock).toHaveBeenCalledTimes(1);
  });
});

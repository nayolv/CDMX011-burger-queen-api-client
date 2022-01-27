import React from "react";
import Form from "../pages/Form";
import Home from "../pages/Home";
import { render, fireEvent } from "@testing-library/react";
import Login from "../pages/Login";


test("Debería renderizar correctamente", () => {
  const component = render(<Form />);
  const email = component.container.querySelector("#email");
  fireEvent.change(email, {
    target: { value: "nattkeres@gmail.com" },
  });
  const password = component.container.querySelector("#password");
  fireEvent.change(password, {
    target: { value: "123456" },
  });
  const button = component.container.querySelector("#login");
  fireEvent.click(button);

  expect(email.value).toBe("nattkeres@gmail.com");
  expect(password.value).toBe("123456");
  expect(render(<Home />)).toMatchSnapshot();
});

test("Debería quedarse en la misma pagina si hay error", () => {
  const component = render(<Form />);
  const email = component.container.querySelector("#email");
  fireEvent.change(email, {
    target: { value: "nattkeres@gmail.com" },
  });
  const password = component.container.querySelector("#password");
  fireEvent.change(password, {
    target: { value: "1234567" },
  });
  const button = component.container.querySelector("#login");
  fireEvent.click(button);

  expect(email.value).toBe("nattkeres@gmail.com");
  expect(password.value).toBe("1234567");
  expect(render(<Login />)).toMatchSnapshot();
});

/*
test('Debería renderizar el Login', () => {
    const component = renderer.create(<Form/>);
    let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Debería devolver error', async () => 
{
let error  = '';
try {
       await signInWithEmailAndPassword(auth, 'example@gmail.com', '1');

} catch (err) {
    error = err.toString()
}
expect(error).toEqual("FirebaseError: Firebase: Error (auth/user-not-found)."
);
});

test('Debería loggear correctamente', async () => {
    const user = await signInWithEmailAndPassword(
        auth,
        'nattkeres@gmail.com',
        '123456'
    );
expect(user.user).toBeTruthy();
});
test('Debería retronar ...', ()=>{

})*/

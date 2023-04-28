import type { ActionFunction, V2_MetaFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React, { useState } from "react";
import Button from "~/components/Forms/Button";
import Input from "~/components/Forms/Input";
import Layout from "~/components/Layouts/layout";
import Heading from "~/components/Typography/Heading";
import { login } from "~/utils/auth.server";
import { validateEmail, validatePassword } from "~/utils/validators.server";


export const meta: V2_MetaFunction = () => [
  { title: "Login" },
  {
    name: "description",
    content: "Login to our website",
  },
];

export const action: ActionFunction = async ({request}) => {

  const form = await request.formData()
  const action = form.get("_action")
  const email = form.get("email")
  const password = form.get("password")

  if(typeof action !== "string" || typeof email !== "string" || typeof password !== "string") {
    return json({error: 'Invalid Form Data', form: action}, {status: 400})
  }

  const errors = {
    email: validateEmail(email),
    password: validatePassword(password)
  }

  if(Object.values(errors).some(Boolean))
    return json({errors, fields: {email, password}, form: action}, {status: 400})

  
  if(action == "login") {
    return await login({email, password})
  }
  
}

const LoginPage = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (params: any, field: string) => {
    setformData((form) => ({
      ...form,
      [field]: params,
    }));
  };

  return (
    <Layout>
      <div className="absolute top-8 right-8">
        <Link to="/register" className="text-white hover:text-gray-400">New Member</Link>
      </div>

      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div className="p-5 2xl:w-1/5 lg:w-1/4">
          <Heading
            type="h2"
            className="text-lg font-semibold text-center text-white"
            value="Welcome to our site"
          />
          <form method="post">
            <Input
              fieldIdentity="email"
              className="my-2 text-white"
              formStyle="text-black"
              label="Email"
              type="email"
              placeholder="Your email here.."
              value={formData.email}
              onChange={(event) =>
                handleInputChange(event.target.value, "email")
              }
            />
            <Input
              fieldIdentity="password"
              className="my-2 text-white"
              formStyle="text-black"
              label="Password"
              type="password"
              placeholder="Your password here.."
              value={formData.password}
              onChange={(event) =>
                handleInputChange(event.target.value, "password")
              }
            />

            <Button name="_action" value="login" type="submit" className="my-5 text-white bg-blue-500">Log In</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;

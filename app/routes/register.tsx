import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React, { useState } from "react";
import Button from "~/components/Forms/Button";
import Input from "~/components/Forms/Input";
import Layout from "~/components/Layouts/layout";
import Heading from "~/components/Typography/Heading";

export const meta: V2_MetaFunction = () => [
  { title: "Register" },
  {
    name: "description",
    content: "Register to our website",
  },
];

const RegisterPage = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
    fullName: "",
    phone: "",
    confirmPassword: "",
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
        <Link to="/login" className="text-white hover:text-gray-400">Already member</Link>
      </div>

      <div className="flex flex-col items-center justify-center h-full gap-4">
        <div className="p-5 2xl:w-1/5 lg:w-1/4">
          <Heading
            type="h2"
            className="text-lg font-semibold text-center text-white"
            value="Welcome to our site"
          />
          <form>
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
            <Input
              fieldIdentity="confirmPassword"
              className="my-2 text-white"
              formStyle="text-black"
              label="Confirm Password"
              type="password"
              placeholder="Your confirm password here.."
              value={formData.confirmPassword}
              onChange={(event) =>
                handleInputChange(event.target.value, "confirmPassword")
              }
            />
            <Input
              fieldIdentity="fullName"
              className="my-2 text-white"
              formStyle="text-black"
              label="Full Name"
              type="text"
              placeholder="Your full name here.."
              value={formData.fullName}
              onChange={(event) =>
                handleInputChange(event.target.value, "fullName")
              }
            />
            <Input
              fieldIdentity="phone"
              className="my-2 text-white"
              formStyle="text-black"
              label="Phone"
              type="text"
              placeholder="Your phone number here.."
              value={formData.phone}
              onChange={(event) =>
                handleInputChange(event.target.value, "phone")
              }
            />
            <Button className="my-5 text-white bg-blue-500">Register</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;

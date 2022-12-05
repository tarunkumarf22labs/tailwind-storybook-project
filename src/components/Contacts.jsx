import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import houseing from "../assets/images.jpg";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
      message: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .trim()
        .max(8, "Minmum be 8 characters ")
        .required("required"),
      email: yup
        .string()
        .trim()
        .email("invalid email adress")
        .required("required"),
      phonenumber: yup
        .string()
        .trim()
        .length(10, "phone number must be of 10 digit")
        .required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <>
      <header>
        <nav className="p-4 text-white bg-black shadow-lg ">
          <div className="font-bold font-poppins ">
            <span>Chef Table</span>
          </div>
        </nav>
      </header>
      <section className="flex justify-between min-h-screen bg-gray-300 min-w-fit ">
        <article className="flex flex-col items-center justify-between w-full p-8 m-4 bg-white md:flex-row ">
          <div className="md:pr-8">
            <h2 className="pb-8 font-bold font-poppins">Need help?</h2>
            <p className="pb-4 font-poppins">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              soluta ipsam nostrum ad debitis ut. Lorem, ipsum dolor sit amet
            </p>
            <img src={houseing} alt="" className="w-full mb-8" />
          </div>
          <div className="w-full">
            <form onSubmit={formik.handleSubmit} className="w-full">
              <div className="w-full mb-6">
                <input
                  className={`bg-gray-100 w-full p-2 border-2  ${
                    formik.errors.name && formik.touched.name
                      ? "border-red-500  outline-red-500 "
                      : "border-transparent"
                  }`}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-xs text-red-500 ">{formik.errors.name}</p>
                ) : (
                  <p className="w-4 h-4" />
                )}
              </div>

              <div className="w-full mb-6">
                <input
                  className={` bg-gray-100 w-full p-2 "outline-red-500 border-2 "  ${
                    formik.errors.email && formik.touched.email
                      ? "border-red-500 outline-red-500"
                      : "border-transparent"
                  } `}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-xs text-red-500 ">
                    {" "}
                    {formik.errors.email}{" "}
                  </p>
                ) : (
                  <p className="w-4 h-4" />
                )}
              </div>

              <div className="w-full mb-6 ">
                <input
                  className={`bg-gray-100 w-full p-2 border-2   ${
                    formik.touched.phonenumber && formik.errors.phonenumber
                      ? "border-red-500 outline-red-500"
                      : "border-transparent"
                  } `}
                  type="text"
                  id="phonenumber"
                  name="phonenumber"
                  placeholder="Phonenumber"
                  onChange={formik.handleChange}
                  value={formik.values.phonenumber}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phonenumber && formik.errors.phonenumber ? (
                  <p className="text-xs text-red-500 ">
                    {" "}
                    {formik.errors.phonenumber}{" "}
                  </p>
                ) : (
                  <p className="w-4 h-4" />
                )}
              </div>
              <textarea
                className="w-full p-2 mb-4 bg-gray-100"
                cols="30"
                rows="10"
                id="message"
                name="message"
                placeholder="your thoughts"
                onChange={formik.handleChange}
                value={formik.values.message}
              />
              <button
                className={`bg-black text-white w-full p-2 mb-4 ${
                  !(formik.isValid && formik.dirty)
                    ? "opacity-60"
                    : "opacity-100"
                } `}
                type="submit"
                onClick={() => console.log(formik.isValid, formik)}
                disabled={!(formik.isValid && formik.dirty)}
              >
                {" "}
                Submit Feedback
              </button>
            </form>
          </div>
        </article>
      </section>
      <footer className="p-8 text-white bg-black">
        <div className="text-center footer-logo ">
          <div className="font-bold">
            <span>Chef Table</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 justify-items-center sm:grid-cols-2 md:grid-cols-4 ">
          <div className="">
            <div className="text-left">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
              <div className="">
                <ul className="flex justify-center">
                  <li className="p-3"> 😃 </li>
                  <li className="p-3"> 😃 </li>
                  <li className="p-3"> 😃 </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="pb-3 text">
              <h2>About</h2>
            </div>
            <ul>
              <li> How it works </li>
              <li>our story</li>
              <li>our chefs</li>
            </ul>
          </div>
          <div className="">
            <div className="pb-3 text">
              <h2>About</h2>
            </div>
            <ul>
              <li> How it works </li>
              <li>our story</li>
              <li>our chefs</li>
            </ul>
          </div>
          <div className="">
            <div className="pb-3 text">
              <h2>About</h2>
            </div>
            <ul>
              <li> How it works </li>
              <li>our story</li>
              <li>our chefs</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;

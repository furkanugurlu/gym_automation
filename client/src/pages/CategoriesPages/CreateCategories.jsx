import { Form, Formik } from "formik";
import React from "react";
import { CategoriesValidation } from "../../validations";
import { Input } from "../../components/FormItems";
import { Helmet } from "react-helmet";
import { Loader } from "../../components";
import { useNavigate } from "react-router-dom";
import api from "../../constant/api";

const CreateCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto h-screen">
      <Helmet>
        <title>ArenaGYM - Kategori Ekleme</title>
      </Helmet>
      <h1 className="font-mono text-4xl  text-[#2D3748]  mb-4 font-bold">
        - Kategori Ekle -
      </h1>
      <Formik
        initialValues={{ kategoriAdi: "" }}
        validationSchema={CategoriesValidation}
        onSubmit={(values, actions) => {
          api
            .post("category/create", values)
            .then((res) => {
              actions.setSubmitting(false);
              navigate("/categories");
            })
            .catch((err) => {});
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Input label="Kategori Adi" name="kategoriAdi" />
            <div className="flex justify-end items-center ">
              <button
                type="submit"
                className="flex justify-center items-center text-white h-10  bg-blue-700  hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                {isSubmitting ? <Loader /> : "Ekle"}
              </button>
              <button
                type="reset"
                className="flex justify-center items-center text-white h-10  bg-yellow-500  hover:bg-yellow-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Sıfırla
              </button>
              <button
                onClick={() => navigate("/")}
                className="flex justify-center items-center text-white h-10  bg-red-500  hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Geri
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { CreateCategories };

import { Field, Form, Formik } from "formik";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <Formik
      initialValues={{ topic: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.topic);
        // console.log(values.topic);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field
          className={css.input}
          type="text"
          name="topic"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
}

import * as yup from "yup";
import { Formik, ErrorMessage, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectApartments } from "redux/apartments/selectors";
import { nanoid } from "nanoid";
import { addApartment } from "redux/apartments/api";
import { Button, TextField } from "@mui/material";


function AddForm() {
  const dispatch = useDispatch();
  const apartments = useSelector(selectApartments);

  // const FormError = ({ name }) => {
  //   return (
  //     <Field name={name}>
  //       {({ meta }) =>
  //         meta.touched && meta.error ? <div>{meta.error}</div> : null
  //       }
  //     </Field>
  //   );
  // };

  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={(message) => <p>{message}</p>} />;
  };

  const initValues = {
    name: "",
    price: "",
    rooms: "",
    description: "",
    id: "",
  };

  const apartSchema = yup.object().shape({
    name: yup
      .string()
      .required("Apartment name is required")
      .max(99, "Apartment name must be at most 99 characters"),
    rooms: yup
      .number()
      .positive("Number of rooms must be positive")
      .required("Number of rooms is required"),
    price: yup
      .number()
      .positive("Price must be positive")
      .required("Price is required"),
    description: yup
      .string()
      .max(999, "Description must be at most 999 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const isAtList = apartments.find((item) => item.name === values.name);
    if (isAtList) {
      alert("is already at list");
      return;
    }
    const apartment = {
      name: values.name,
      price: values.price,
      rooms: values.rooms,
      description: values.description,
      id: nanoid(),
    };
    dispatch(addApartment(apartment));
    resetForm();
  };

  return (
    <Formik
      initialValues={initValues}
      validationSchema={apartSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      <Form>
        <Field type="text" label="name" name="name" />
        <FormError name="name" />
        <Field type="text" label="rooms" name="rooms" />
        <FormError name="rooms" />
        <Field type="text" label="price" name="price" />
        <FormError name="price" />
        <Field type="text" label="description" name="description" />
        <FormError name="description" />
        <Button sx={{ borderRadius: 1 }} type="submit">
          add apartment
        </Button>
      </Form>
    </Formik>
  );
}

export default AddForm;

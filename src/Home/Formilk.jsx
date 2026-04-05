
import { useFormik } from 'formik';
import * as yup from 'yup';

const Formilk = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password:""
    },
    validationSchema: yup.object({
      name:yup.string().min(2,"name minimum at last 2 char").required(),
      email:yup.string().email().required(),
      password:yup.string().min(6).required()
    }),
    onSubmit: (values,{resetForm}) => {
      console.log(values)
      resetForm({values:""})
    }

  })


  return (
    <div className="flex justify-center items-center min-h-50 w-full bg-lime-400 flex-col my-3">
      <h1>This it Formik form</h1>
      <form className="bg-cyan-500 my-2 p-3 rounded" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className="border-2 m-2 rounded"
            type="text"
            value={formik.values.name}
            name="name"
            id="name"
            onChange={formik.handleChange}
          />
          <br />
          {
            formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>
          }
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="border-2 m-2 rounded"
            type="email"
            value={formik.values.email}
            name="email"
            id="email"
            onChange={formik.handleChange}
          />
          <br />
          {
            formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>
          }
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            className="border-2 m-2 rounded"
            type="password"
            value={formik.values.password}
            name="password"
            id="password"
            onChange={formik.handleChange}
          />
          <br />
          {
            formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>
          }
        </div>
        <input
          className="border-2 rounded px-2 bg-red-300"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Formilk;

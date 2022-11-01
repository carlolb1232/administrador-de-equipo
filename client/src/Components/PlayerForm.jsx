import React from 'react';
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";


const PlayerForm = (props) => {

  const { name, prefered_position, onSubmitProps} = props

  return (
    <div>
      <Formik
        initialValues={
          {
            name: name,
            prefered_position: prefered_position
          }
        }

        validationSchema={
          Yup.object().shape(
            {
              name: Yup
                .string()
                .min(2, "El nombre del jugador debe de ser mayor a dos carácteres")
                .required("El nombre del jugador es obligatorio"),
              prefered_position: Yup
                .string()
            }
          )
        }

        onSubmit={(values, {setSubmitting})=>{
          // console.log("INFO DEL FORMIK",values);
          onSubmitProps(values);
        }}
      >
        {({errors, touched, handleSubmit})=>{
          return(
            <div className="player-form">
              <h2>Add Player</h2>
              <Form>
                <div className="form-group">
                  <label htmlFor="name" className='form-label'>Player Name: </label>
                  <Field 
                    id="name"
                    type="text"
                    placeholder="Ingrese un nombre"
                    name="name"
                    className="form-control"
                  />
                  {
                    errors.name && touched.name &&
                    <div class="form-error alert alert-danger" role="alert">
                      {errors.name}
                    </div>
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="prefered_position" className='form-label'>Prefered Position: </label>
                  <Field 
                    id="prefered_position"
                    type="text"
                    placeholder="Ingrese la posición de preferencia"
                    name="prefered_position"
                    className="form-control"
                  />
                  {
                    errors.prefered_position && touched.prefered_position &&
                    <div class="form-error alert alert-danger" role="alert">
                      {errors.prefered_position}
                    </div>
                  }
                </div>
                <button 
                  className='mt-3 btn btn-primary btn-lg' 
                  type='submit' 
                  disabled={
                    Object.values(errors).length>0
                  }
                >
                  ENVIAR
                </button>
              </Form>
            </div>
          )
        }}
      </Formik>
    </div>
  );
}

export default PlayerForm;

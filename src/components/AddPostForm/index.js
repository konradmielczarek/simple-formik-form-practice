import React, { Component } from 'react';
import Debug from './Debug';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup'
import { inject, observer } from 'mobx-react';

class AddPostForm extends Component {
  render() {
    const { postsStore } = this.props.store;

    const validationSchema = yup.object().shape({
      title: yup
        .string()
        .required('Title is a required field'),
      author: yup
        .string()
        .required('Author is a required field'),
      number: yup
        .number()
        .positive()
        .required('Number is a required field'),
      content: yup
        .string()
        .required('Content is a required field')
    });

    return (
      <Formik
        initialValues={{ title: '', author: '', number: '', content: '', isChecked: false }}
        validationSchema={validationSchema}
        validateOnChange={false}
        onSubmit={async (values, { resetForm }) => {
          console.log(values);
          await postsStore.addPost(values);
          resetForm();
        }}
        render={({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
          console.log(values);
          return (
            <>
              <Form onSubmit={handleSubmit} className="border p-3" autoComplete="off">
                <FormGroup>
                  <Label htmlFor="title">Title</Label>
                  <Input onChange={handleChange} value={values.title} type="text" name="title" id="title" placeholder="title" />
                  {errors.title ? <div className="small text-danger">{errors.title}</div> : null}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="author">Author</Label>
                  <Input onChange={handleChange} value={values.author} type="text" name="author" id="author" placeholder="author" />
                  {errors.author ? <div className="small text-danger">{errors.author}</div> : null}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="number">Number</Label>
                  <Input onChange={handleChange} value={values.number} type="text" name="number" id="number" placeholder="number" />
                  {errors.number ? <div className="small text-danger">{errors.number}</div> : null}
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="content">Content</Label>
                  <Input onChange={handleChange} value={values.content} type="text" name="content" id="content" placeholder="content" />
                  {errors.content ? <div className="small text-danger">{errors.content}</div> : null}
                </FormGroup>
                <FormGroup check>
                  <Label check className="mb-2">
                    <Input onChange={handleChange} checked={values.isChecked} type="checkbox" name="isChecked" id="isChecked" />
                    Check me out
                </Label>
                </FormGroup>
                <Button className="btn-block" type="submit" disabled={isSubmitting}>Add</Button>
              </Form>
              <Debug />
            </>
          )
        }}
      />
    )
  }
}

export default inject('store')(observer(AddPostForm));

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

function Forms() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      gender: '',
      password: '',
      confirmPassword: '',
      address: '',
      country: '',
      acceptTerms: false,
    },
    validate: (values) => {
      const errors = {};

      if (!values.fullName) {
        errors.fullName = 'Full Name is required';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone Number is required';
      } else if (!/^\d{10}$/.test(values.phoneNumber)) {
        errors.phoneNumber = 'Phone Number must be exactly 10 digits';
      }

      if (!values.dateOfBirth) {
        errors.dateOfBirth = 'Date of Birth is required';
      }

      if (!values.gender) {
        errors.gender = 'Gender is required';
      }

      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords do not match';
      }

      if (!values.address) {
        errors.address = 'Address is required';
      }

      if (!values.country) {
        errors.country = 'Country is required';
      }

      if (!values.acceptTerms) {
        errors.acceptTerms = 'You must accept the terms and conditions';
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
      alert('Form Submitted Successfully!');
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ marginTop: '50px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 p-4" style={{ boxShadow: "0 4px 8px black", backgroundColor: "lightblue" }}>
            <h2 className="text-center my-4">Registration Form</h2>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Enter Full Name..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  isInvalid={formik.touched.fullName && !!formik.errors.fullName}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.fullName}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Your Email..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && !!formik.errors.email}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter Your Phone Number..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  isInvalid={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.phoneNumber}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfBirth"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateOfBirth}
                  isInvalid={formik.touched.dateOfBirth && !!formik.errors.dateOfBirth}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.dateOfBirth}</Form.Control.Feedback>
              </Form.Group>

              <h5>Gender</h5>
              <div className="mb-3">
                <Form.Check 
                  type="radio" 
                  name="gender" 
                  id="male" 
                  value="male" 
                  label="Male" 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.gender && !!formik.errors.gender}
                />
                <Form.Check 
                  type="radio" 
                  name="gender" 
                  id="female" 
                  value="female" 
                  label="Female" 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.gender && !!formik.errors.gender}
                />
                <Form.Check 
                  type="radio" 
                  name="gender" 
                  id="other" 
                  value="other" 
                  label="Other" 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.gender && !!formik.errors.gender}
                  feedback={formik.errors.gender}
                />
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Your Password..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && !!formik.errors.password}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.confirmPassword}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="address"
                  rows={3}
                  placeholder="Enter Your Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  isInvalid={formik.touched.address && !!formik.errors.address}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.address}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Select
                  name="country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  isInvalid={formik.touched.country && !!formik.errors.country}
                >
                  <option value="">Select Your Country...</option>
                  <option value="us">U.S.A</option>
                  <option value="ca">Canada</option>
                  <option value="in">India</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">{formik.errors.country}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  name="acceptTerms"
                  label="I accept the terms and conditions"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.acceptTerms && !!formik.errors.acceptTerms}
                  feedback={formik.errors.acceptTerms}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;

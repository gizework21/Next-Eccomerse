'use client'
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  storeName: yup.string().required('Store Name is required.'),
  categories: yup.string().required('Please select a category.'),
  country: yup.string().required('Please select a country.'),
  city: yup.string().required('Please select a city.'),
  subcity: yup.string(),
  streetName: yup.string(),
  houseNumber: yup.string(),
  tinNumber: yup.string().matches(/^\d+$/, 'TIN Number should contain only numbers.'),
  email: yup.string().email('Invalid email address.').required('Email is required.'),
  phoneNumber: yup.string().matches(/^\d+$/, 'Phone Number should contain only numbers.'),
  supportPhoneNumber: yup.string().matches(/^\d+$/, 'Support Phone Number should contain only numbers.'),
  lorem: yup.string(),
});

const EditStoreInformation = () => {
  const formik = useFormik({
    initialValues: {
      storeName: '',
      categories: '',
      country: '',
      city: '',
      subcity: '',
      streetName: '',
      houseNumber: '',
      tinNumber: '',
      email: '',
      phoneNumber: '',
      supportPhoneNumber: '',
      lorem: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here, e.g., save to backend
      console.log(values);
    },
  });

  return (
    <div className="p-6 my-2 w-3/5 mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-black">Edit Store Information</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="storeName" className="block text-sm font-medium text-black">
              Store Name
            </label>
            <input
              type="text"
              id="storeName"
              name="storeName"
              value={formik.values.storeName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                formik.touched.storeName && formik.errors.storeName ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.storeName && formik.errors.storeName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.storeName}</p>
            )}
          </div>
          <div>
            <label htmlFor="categories" className="block text-sm font-medium text-black">
              Categories
            </label>
            <select
              id="categories"
              name="categories"
              value={formik.values.categories}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                formik.touched.categories && formik.errors.categories ? 'border-red-500' : ''
              }`}
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Clothing">Clothing</option>
              <option value="Household">Household</option>
            </select>
            {formik.touched.categories && formik.errors.categories && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.categories}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-black">
              Country
            </label>
            <select
              id="country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                formik.touched.country && formik.errors.country ? 'border-red-500' : ''
              }`}
            >
              <option value="">Select Country</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Sudan">Sudan</option>
              <option value="South Africa">South Africa</option>
            </select>
            {formik.touched.country && formik.errors.country && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.country}</p>
            )}
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-black">
              City
            </label>
            <select
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                formik.touched.city && formik.errors.city ? 'border-red-500' : ''
              }`}
            >
              <option value="">Select City</option>
              <option value="Addis Ababa">Addis Ababa</option>
              <option value="Amhara">Amhara</option>
              <option value="Oromia">Oromia</option>
            </select>
            {formik.touched.city && formik.errors.city && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="subcity" className="block text-sm font-medium text-black">
              Subcity
            </label>
            <input
              type="text"
              id="subcity"
              name="subcity"
              value={formik.values.subcity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                formik.touched.subcity && formik.errors.subcity ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.subcity && formik.errors.subcity && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.subcity}</p>
            )}
          </div>
          <div>
            <label htmlFor="streetName" className="block text-sm font-medium text-black">
              Street Name
            </label>
            <input
              type="text"
              id="streetName"
              name="streetName"
              value={formik.values.streetName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                formik.touched.streetName && formik.errors.streetName ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.streetName && formik.errors.streetName && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.streetName}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="houseNumber" className="block text-sm font-medium text-black">
              House Number
            </label>
            <input
              type="text"
              id="houseNumber"
              name="houseNumber"
              value={formik.values.houseNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                formik.touched.houseNumber && formik.errors.houseNumber ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.houseNumber && formik.errors.houseNumber && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.houseNumber}</p>
            )}
          </div>
          <div>
            <label htmlFor="tinNumber" className="block text-sm font-medium text-black">
              TIN Number
            </label>
            <input
              type="text"
              id="tinNumber"
              name="tinNumber"
              value={formik.values.tinNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                formik.touched.tinNumber && formik.errors.tinNumber ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.tinNumber && formik.errors.tinNumber && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.tinNumber}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                formik.touched.email && formik.errors.email ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-black">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="supportPhoneNumber" className="block text-sm font-medium text-black">
              Support Phone Number
            </label>
            <input
              type="text"
              id="supportPhoneNumber"
              name="supportPhoneNumber"
              value={formik.values.supportPhoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                formik.touched.supportPhoneNumber && formik.errors.supportPhoneNumber ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.supportPhoneNumber && formik.errors.supportPhoneNumber && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.supportPhoneNumber}</p>
            )}
          </div>
          <div>
            <label htmlFor="lorem" className="block text-sm font-medium text-black">
              Lorem Ipsum
            </label>
            <textarea
              id="lorem"
              name="lorem"
              value={formik.values.lorem}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 p-0.2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black ${
                formik.touched.lorem && formik.errors.lorem ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.lorem && formik.errors.lorem && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.lorem}</p>
            )}
          </div>
        </div>
        <div className="flex justify-start space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-sm hover:bg-yellow-600"
          >
            Save changes
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-white border border-gray-300 text-yellow-500 rounded-md shadow-sm hover:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStoreInformation;

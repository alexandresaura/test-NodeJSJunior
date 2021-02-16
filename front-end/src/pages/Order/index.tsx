/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import conteleImg from '../../assets/contele.png';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import {
  Container,
  Content,
  Header,
  InputDiv,
  InputDivContent,
  InputGroupRow,
  SubmitDiv,
  SuccessMessage,
  ErrorMessage,
} from './styles';

interface Country {
  id: string;
  name: string;
}

interface Language {
  id: string;
  name: string;
}

interface SubmitFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  language_id: string;
  country_id: string;
  billing_address_line1: string;
  billing_address_line2?: string;
  billing_city: string;
  billing_state: string;
  billing_zip_code: string;
  billing_address_same_shipping_address: boolean;
  shipping_address_line1?: string;
  shipping_address_line2?: string;
  shipping_city?: string;
  shipping_state?: string;
  shipping_zip_code?: string;
  need_cut_off_device: boolean;
  will_trackers_be_installed_on_bike_truck_machinery: boolean;
  need_identify_fleet_drivers: boolean;
  quantity: number;
}

const Order: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [countries, setCountries] = useState<Country[]>([]);
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    api.get('/countries').then(response => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('/languages').then(response => {
      setLanguages(response.data);
    });
  }, []);

  const handleSubmit = useCallback(async (data: SubmitFormData) => {
    try {
      setSuccess(false);
      setError(false);
      const dataChanged = data;

      dataChanged.billing_address_same_shipping_address = !!dataChanged.billing_address_same_shipping_address;
      dataChanged.need_cut_off_device = !!dataChanged.need_cut_off_device;
      dataChanged.will_trackers_be_installed_on_bike_truck_machinery = !!dataChanged.will_trackers_be_installed_on_bike_truck_machinery;
      dataChanged.need_identify_fleet_drivers = !!dataChanged.need_identify_fleet_drivers;

      if (!dataChanged.billing_address_line2)
        delete dataChanged.billing_address_line2;
      if (!dataChanged.shipping_address_line1)
        delete dataChanged.shipping_address_line1;
      if (!dataChanged.shipping_address_line2)
        delete dataChanged.shipping_address_line2;
      if (!dataChanged.shipping_city) delete dataChanged.shipping_city;
      if (!dataChanged.shipping_state) delete dataChanged.shipping_state;
      if (!dataChanged.shipping_zip_code) delete dataChanged.shipping_zip_code;

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        first_name: Yup.string().required('First Name is a required field.'),
        last_name: Yup.string().required('Last Name is a required field.'),
        email: Yup.string()
          .email('Email Address must be a valid email.')
          .required('Email is a required field.'),
        phone: Yup.string().required('Phone is a required field.'),
        language_id: Yup.string()
          .uuid()
          .required('Language is a required field.'),
        country_id: Yup.string()
          .uuid()
          .required('Country is a required field.'),
        billing_address_line1: Yup.string().required(
          'Address Line 1 is a required field.',
        ),
        billing_address_line2: Yup.string(),
        billing_city: Yup.string().required('City is a required field.'),
        billing_state: Yup.string().required('State is a required field.'),
        billing_zip_code: Yup.string().required(
          'ZIP Code is a required field.',
        ),
        billing_address_same_shipping_address: Yup.boolean().required(),
        shipping_address_line1: Yup.string().when(
          'billing_address_same_shipping_address',
          {
            is: false,
            then: i => i.required('Address Line 1 is a required field.'),
          },
        ),
        shipping_address_line2: Yup.string(),
        shipping_city: Yup.string().when(
          'billing_address_same_shipping_address',
          {
            is: false,
            then: i => i.required('City is a required field.'),
          },
        ),
        shipping_state: Yup.string().when(
          'billing_address_same_shipping_address',
          {
            is: false,
            then: i => i.required('State is a required field.'),
          },
        ),
        shipping_zip_code: Yup.string().when(
          'billing_address_same_shipping_address',
          {
            is: false,
            then: i => i.required('ZIP Code is a required field.'),
          },
        ),
        need_cut_off_device: Yup.boolean().required(),
        will_trackers_be_installed_on_bike_truck_machinery: Yup.boolean().required(),
        need_identify_fleet_drivers: Yup.boolean().required(),
        quantity: Yup.number()
          .typeError('Quantity must be a number.')
          .integer('Quantity must be an integer number.')
          .positive('Quantity must be a positive number.')
          .required('Quantity is a required field.'),
      });

      await schema.validate(dataChanged, {
        abortEarly: false,
      });

      await api.post('/orders', dataChanged);

      setSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      } else {
        setError(true);
      }
    }
  }, []);

  return (
    <Container>
      <Header>
        <img src={conteleImg} alt="GoBarber" />
      </Header>
      <Content>
        {success && (
          <SuccessMessage>
            Your request has been submitted successfully.
          </SuccessMessage>
        )}
        {error && (
          <ErrorMessage>
            An error has occurred on submit, please try again later.
          </ErrorMessage>
        )}
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputDiv>
            <InputDivContent>
              <div>
                <h2>Contact Information:</h2>
                <InputGroupRow>
                  <Input
                    required
                    name="first_name"
                    type="text"
                    placeholder="First Name:"
                  />
                  <Input
                    required
                    name="last_name"
                    type="text"
                    placeholder="Last Name:"
                  />
                </InputGroupRow>
                <InputGroupRow>
                  <Input
                    required
                    name="email"
                    type="email"
                    placeholder="Email Address:"
                  />
                  <Input
                    required
                    name="phone"
                    type="text"
                    placeholder="Phone:"
                  />
                </InputGroupRow>
                <InputGroupRow>
                  <Select
                    defaultValue=""
                    required
                    id="language_id"
                    name="language_id"
                  >
                    <option value="" disabled hidden>
                      Language:
                    </option>
                    {languages.map(language => (
                      <option key={language.id} value={language.id}>
                        {language.name}
                      </option>
                    ))}
                  </Select>
                  <Select
                    defaultValue=""
                    required
                    id="country_id"
                    name="country_id"
                  >
                    <option value="" disabled hidden>
                      Country:
                    </option>
                    {countries.map(country => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </Select>
                </InputGroupRow>

                <h2>Billing Address:</h2>
                <InputGroupRow>
                  <Input
                    required
                    name="billing_address_line1"
                    type="text"
                    placeholder="Address Line 1:"
                  />
                </InputGroupRow>
                <InputGroupRow>
                  <Input
                    name="billing_address_line2"
                    type="text"
                    placeholder="Address Line 2:"
                  />
                </InputGroupRow>
                <InputGroupRow>
                  <Input
                    required
                    name="billing_city"
                    type="text"
                    placeholder="City:"
                  />
                  <Input
                    required
                    name="billing_state"
                    type="text"
                    placeholder="State:"
                  />
                  <Input
                    required
                    name="billing_zip_code"
                    type="text"
                    placeholder="ZIP Code:"
                  />
                </InputGroupRow>
                <InputGroupRow>
                  <div>
                    <Input
                      id="billing_address_same_shipping_address"
                      name="billing_address_same_shipping_address"
                      type="checkbox"
                      value="true"
                    />
                    <label htmlFor="billing_address_same_shipping_address">
                      Use shipping address same as billing address.
                    </label>
                  </div>
                </InputGroupRow>
              </div>

              <div>
                <h2>Shipping Address:</h2>
                <InputGroupRow>
                  <Input
                    name="shipping_address_line1"
                    type="text"
                    placeholder="Address Line 1:"
                  />
                </InputGroupRow>
                <InputGroupRow>
                  <Input
                    name="shipping_address_line2"
                    type="text"
                    placeholder="Address Line 2:"
                  />
                </InputGroupRow>
                <InputGroupRow>
                  <Input name="shipping_city" type="text" placeholder="City:" />
                  <Input
                    name="shipping_state"
                    type="text"
                    placeholder="State:"
                  />
                  <Input
                    name="shipping_zip_code"
                    type="text"
                    placeholder="ZIP Code:"
                  />
                </InputGroupRow>

                <h2>Check the boxes below:</h2>

                <InputGroupRow>
                  <div>
                    <Input
                      id="need_cut_off_device"
                      name="need_cut_off_device"
                      type="checkbox"
                      value="true"
                    />
                    <label htmlFor="need_cut_off_device">
                      Does any vehicle need to be equiped with a fuel cut off
                      device?
                    </label>
                  </div>
                  <div>
                    <Input
                      id="will_trackers_be_installed_on_bike_truck_machinery"
                      name="will_trackers_be_installed_on_bike_truck_machinery"
                      type="checkbox"
                      value="true"
                    />
                    <label htmlFor="will_trackers_be_installed_on_bike_truck_machinery">
                      Will any trackers be installed on a bike truck or
                      machinery?
                    </label>
                  </div>
                </InputGroupRow>
                <InputGroupRow>
                  <div>
                    <Input
                      id="need_identify_fleet_drivers"
                      name="need_identify_fleet_drivers"
                      type="checkbox"
                      value="true"
                    />
                    <label htmlFor="need_identify_fleet_drivers">
                      Will you need to identify the fleet drivers?
                    </label>
                  </div>
                </InputGroupRow>
                <InputGroupRow>
                  <Input
                    required
                    name="quantity"
                    type="number"
                    min="1"
                    step="1"
                    placeholder="How many trackers would you like to purchase?"
                  />
                </InputGroupRow>
              </div>
            </InputDivContent>
          </InputDiv>

          <SubmitDiv>
            <div>
              <button type="submit">Order Now</button>
            </div>
          </SubmitDiv>
        </Form>
      </Content>
    </Container>
  );
};

export default Order;

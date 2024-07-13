import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./check-out.css";
import { TextField } from "@mui/material";
type Inputs = {
  name: string;
  email: string;
  phone: number;
  terms: boolean;
};
const CheckOut = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const inputStyle = {
    margin: "8px 0",
  };

  // Fake order data
  const orderItems = [
    {
      name: "Grooming Cat",
      price: 95.0,
    },
    {
      name: "Grooming Cat",
      price: 95.0,
    },
  ];
  const total = orderItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-content">
        <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
          <div className="checkout-contact-information">
            <h2>Contact information</h2>
            <TextField
              sx={inputStyle}
              required
              id="name"
              label="Name"
              {...register("name", {
                required: "Name is required",
              })}
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
              onBlur={() => trigger("name")}
              fullWidth
            />
            <TextField
              sx={inputStyle}
              required
              id="email"
              label="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email is not valid",
                },
              })}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              onBlur={() => trigger("email")}
              fullWidth
            />
            <TextField
              sx={inputStyle}
              required
              id="phone"
              label="Phone number"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: "Phone number must be 10-11 positive digits",
                },
              })}
              error={!!errors.phone}
              helperText={errors.phone ? errors.phone.message : ""}
              onBlur={() => trigger("phone")}
              fullWidth
            />
            <div className="payment-option vnpay">
              <img
                src="https://vinadesign.vn/uploads/images/2023/05/vnpay-logo-vinadesign-25-12-57-55.jpg"
                alt="VNPAY"
              />
              <h5>You will pay by VNPAY</h5>
            </div>

            <button className="checkout-button" type="submit">
              Pay
            </button>
          </div>
          <div className="order-summary">
            <div className="order-summary-content">
              <h2>Order Summary</h2>
              {orderItems.map((item, index) => (
                <div className="checkout-order-item" key={index}>
                  <p>{item.name}</p>
                  <p>{item.price.toFixed(3)}</p>
                </div>
              ))}

              <div className="order-total">
                <p>Total: {total.toFixed(3)}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;

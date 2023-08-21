"use client";
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

async function loginUser() {
  return fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(credentials),
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
    }),
  });
  // .then((data) => data.json())
  // .then(console.log);
}

const Login = () => {
  const router = useRouter();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const response = await loginUser({
    //   username,
    //   password,
    // });
    // const res = loginUser();
    // console.log("res", res);
    loginUser()
      .then((res) => {
        console.log("res", res);
        if (res?.status == 200) {
          //   Swal("Success", res.message, "success", {
          //     buttons: false,
          //     timer: 2000,
          //   }).then((value) => {
          alert("Login successful");
          Cookies.set("loggedIn", true);
          // localStorage.setItem("accessToken", res["accessToken"]);
          // localStorage.setItem("user", JSON.stringify(res["user"]));
          router.push("/dashboard");
        } else {
          alert("Login Failed");
          //   Swal("Failed", res.message, "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Grid container style={{ textAlign: "center" }}>
        <CssBaseline />
        <Grid item xs={false} md={4} />
        <Grid
          style={{ marginTop: "30px" }}
          item
          xs={12}
          md={4}
          elevation={6}
          square
        >
          <div>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                onChange={(e) => setUserName(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

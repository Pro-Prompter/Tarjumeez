import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes";
import Headermain from "../header";
import "./App.css";

export default function App() {
  return (
    <HelmetProvider>
      <Headermain />
      <AppRoutes />
    </HelmetProvider>
  );
}

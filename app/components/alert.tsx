import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import "../alert.css";

interface AlertProps {
  message: string;
  success: boolean;
  setMessage: Dispatch<SetStateAction<string>>;
}

const Alert = ({ message, success, setMessage }: AlertProps) => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (message) {
      setShowAlert(true);

      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2500);

      const timer2 = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }
  }, [message]);

  return (
    <div
      className={`alert px-10 py-2.5 text-sm rounded-lg text-white ${
        success ? "bg-green-600" : "bg-red-500"
      } ${showAlert ? "show" : ""}`}
    >
      {message}
    </div>
  );
};

export default Alert;

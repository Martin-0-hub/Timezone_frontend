import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      className="rounded-full px-6 py-2 font-semibold shadow-md hover:shadow-orange-500/50 transition"
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;

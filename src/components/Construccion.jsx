import React, { useEffect } from "react";
import Swal from "sweetalert2";

export default function Construccion() {
  useEffect(() => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Esta página sigue en construcción!",
    });
  }, []);

  return <></>;
}

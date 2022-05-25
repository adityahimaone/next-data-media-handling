import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

function Alert({ title, text, icon, confirmText, navigation }) {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const titleAlert = title ? title : "Alert";
  const textAlert = text ? text : "This is a simple alert";
  const iconAlert = icon ? icon : "success";
  const confirmTextAlert = confirmText ? confirmText : "OK";
  const navigationLink = navigation ? navigation + "" : "";

  const alertOpen = () => {
    MySwal.fire({
      title: titleAlert,
      text: textAlert,
      icon: iconAlert,
      showCancelButton: true,
      confirmButtonColor: "#0D28A6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmTextAlert,
    }).then((result) => {
      if (result.value) {
        navigate(navigationLink);
      }
    });
  };
  return alertOpen();
}

export default Alert;

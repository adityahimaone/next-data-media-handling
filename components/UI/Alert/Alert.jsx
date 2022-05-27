import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";

function Alert({ title, text, icon, confirmText, navigation }) {
  const route = useRouter();
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
        route.push(navigationLink);
      }
    });
  };
  return alertOpen();
}

export default Alert;

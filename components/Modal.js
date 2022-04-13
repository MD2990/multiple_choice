import Swal from "sweetalert2";
export const conformation = (func) => {
  Swal.fire({
    title: "Are you sure you want to finish the quiz and submit your answers?",
    text: "You won't be able to revert this!",
    icon: "warning",
    timer: 6000,
    timerProgressBar: true,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, submit my answers!",
  }).then((result) => {
    if (result.isConfirmed) {
      func();

      Swal.fire("Submitted Successfully!", "Success", "success");
    }
  });
};

export const startNow = (func) => {
  Swal.fire({
    title: "Are you ready to start the quiz?",
    text: "Once you start the quiz, you can't go back to the start page and you will have only 5 minutes to finish the quiz.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, I'm ready to start the quiz!",
  }).then((result) => {
    if (result.isConfirmed) {
      func();
    }
  });
};

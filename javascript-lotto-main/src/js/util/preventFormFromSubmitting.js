import { $$ } from "./selector";

const preventFormFromSubmitting = () => {
  $$("form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
};

export default preventFormFromSubmitting;
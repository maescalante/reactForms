export default function validateForm(values) {
  const err = {};
  if (values.username.length === 0) {
    err.username = "Length of username is too short";
  }

  if (values.email.length === 0) {
    err.email = "Length of email is too short";
  }
  return err;
}

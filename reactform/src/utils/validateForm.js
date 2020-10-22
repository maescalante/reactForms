export default function validateForm(values, props) {
  const err = {};
  console.log(values);
  if (values.length === 0) {
    props.forEach((element) => {
      err[element.nombre] = "Length of " + element.nombre + " is too short";
    });
  }
  for (let key in values) {
    let act = values[key];
    if (act.length === 0) {
      err[key] = "Length of " + key + " is too short";
    }
  }

  return err;
}

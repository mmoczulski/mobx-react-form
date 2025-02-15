import validatorjs from "validatorjs";
import { Form } from "../../../../src";
import { ValidationPlugins } from "../../../../src/models/ValidatorInterface";
import dvr from "../../../../src/validators/DVR";

// const fields = [{
//   name: 'name',
//   label: 'Name',
//   rules: 'required|string|between:5,50',
// }, {
//   name: 'address',
//   label: 'Address',
//   fields: [{
//     name: 'street',
//     label: 'Street',
//     rules: 'required|string',
//   }, {
//     name: 'zip',
//     label: 'ZIP Code',
//     rules: 'required|string',
//   }],
// }];

const fields = ["name", "address", "address.street", "address.zip"];

const values = {
  name: "fatty",
  address: {
    street: "123 Fake St.",
    zip: "12345",
  },
};

const rules = {
  name: "required|string|between:5,50",
  "address.street": "required|string",
  "address.zip": "required|string",
};

const plugins: ValidationPlugins = {
  dvr: dvr(validatorjs),
};

class NewForm extends Form {}

export default new NewForm(
  { fields, rules, values },
  { plugins, name: "Fixes-N" }
);

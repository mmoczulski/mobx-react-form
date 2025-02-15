import { ValidationPlugins } from "./../../../../src/models/ValidatorInterface";
import validatorjs from "validatorjs";
import { Form } from "../../../../src";
import dvr from "../../../../src/validators/DVR";

const plugins: ValidationPlugins = {
  dvr: dvr(validatorjs),
};

const fields = {
  state: {
    label: "State",
    value: "USA",
    fields: {
      city: {
        label: "City",
        value: "New York",
        fields: {
          places: {
            label: "NY Places",
            value: "NY Places",
            fields: {
              centralPark: {
                label: "Central Park",
                value: true,
              },
              statueOfLiberty: {
                label: "Statue of Liberty",
                value: false,
              },
              empireStateBuilding: {
                label: "Empire State Building",
                value: true,
              },
              brooklynBridge: {
                label: "Brooklyn Bridge",
                value: true,
              },
            },
          },
        },
      },
    },
  },
};

const rules = {
  state: "integer",
  "state.city": "integer",
  "state.city.places": "integer",
};

export default new Form({ fields, rules }, { plugins, name: "Nested-G" });

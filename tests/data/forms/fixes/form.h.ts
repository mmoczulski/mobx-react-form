import { Form } from "../../../../src";
import FormInterface from "../../../../src/models/FormInterface";
import { shouldBeEqualTo } from "../../extension/vjf";

const fields = [
  "singleFieldArray",
  "singleFieldEmptyArray",
  "singleFieldEmptyObject",
  "items[].name",
  "items[].alternateName",
];

const labels = {
  "items[].name": "Name Label",
  "items[].alternateName": "Alternate Name Label",
};

const values = {
  items: [
    {
      name: "Item #A",
      alternateName: "Alternate Name #AA",
    },
    {
      name: "Item #B",
    },
  ],
};

class NewForm extends Form {
  hooks() {
    return {
      onInit(form: FormInterface) {
        form.update({
          items: [
            ...form.$("items").values(),
            {
              name: "Item #3",
              alternateName: "Alternate Name #3",
            },
          ],
        });

        this.$("singleFieldArray").set(["x"]);
        this.$("singleFieldEmptyArray").set([]);
        this.$("singleFieldEmptyObject").set({});

        this.$("items")
          .$(0)
          .$("name")
          .set("validators", [shouldBeEqualTo("items[0].alternateName")]);
        this.$("items")
          .$(0)
          .$("name")
          .set("related", ["items[0].alternateName"]);
        this.$("items").$(0).$("name").set("extra", ["a", "b", "c"]);
      },
    };
  }
}

export default new NewForm({ fields, labels, values }, { name: "Fixes-H" });

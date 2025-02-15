import { Form } from "../../../../src";
import FormInterface from "../../../../src/models/FormInterface";

const fields = ["items[].name"];

const labels = {
  "items[]": "ItemLabel",
  "items[].name": "ItemsNameLabel",
};

class NewForm extends Form {
  hooks() {
    return {
      onInit(form: FormInterface) {
        const items = form.$("items");
        for (let i = 0; i <= 20; i++) items.add(); // eslint-disable-line
      },
    };
  }
}

export default new NewForm({ fields, labels }, { name: "Fixes-G" });

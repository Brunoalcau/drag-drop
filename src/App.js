import "./styles.css";
import FormBuilder from "./FormBuilder";

const controls = [
  {
    value: "question",
    label: "Question",
    icon: "text_fields",
    config: {
      property: "params.timeout",
      label: "Script Timeout (in ms)",
      type: "number",
      input: "number",
      default: 10000.0,
      validations: {
        type: "number",
        options: [
          {
            type: "min",
            limit: 1000.0
          },
          {
            type: "max",
            limit: 300000.0
          }
        ]
      },
      addons: {
        intellisense: {
          active: true
        },
        disabled: true
      }
    }
  },
  {
    value: "date",
    label: "Date",
    icon: "calendar_today"
  },
  {
    value: "paragraph",
    label: "Paragraph",
    icon: "text_fields"
  },
  {
    value: "text_area",
    label: "Text Area",
    icon: "text_fields"
  },
  {
    value: "number",
    label: "Number",
    icon: "text_fields"
  },
  {
    value: "dropdown",
    label: "Dropdown",
    icon: "text_fields"
  },
  {
    value: "single_choice",
    label: "Single Choice",
    icon: "text_fields"
  },
  {
    value: "multiple_choice",
    label: "Multiple Choice",
    icon: "text_fields"
  }
];

export default function App() {
  return (
    <div className="App">
      <FormBuilder controls={controls} />
    </div>
  );
}

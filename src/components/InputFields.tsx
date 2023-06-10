import { ScrapeField, useStore } from "~/store";

const ScrapeFieldItem = ({ id, name, description }: ScrapeField) => {
  const { updateField } = useStore();
  console.log("render", { id, name });
  return (
    <div className="flex flex-row space-x-4">
      <input
        type="text"
        value={name}
        onChange={(e) => updateField({ id, description, name: e.target.value })}
        className="rounded-md px-2 py-1 focus:outline-none"
        placeholder="Field name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => updateField({ id, name, description: e.target.value })}
        className="flex-1 rounded-md px-2 py-1 focus:outline-none"
        placeholder="Field Description"
      />
    </div>
  );
};

const InputFields = () => {
  const { fields } = useStore();

  return (
    <div className="w-full flex flex-col space-y-4">
      {fields.map((field) => (
        <ScrapeFieldItem
          key={field.id}
          id={field.id}
          name={field.name}
          description={field.description}
        />
      ))}
    </div>
  );
};

export default InputFields;

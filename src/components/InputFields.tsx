import { type ScrapeField, useStore } from "~/store";
import { TrashIcon } from "@heroicons/react/24/outline";

const ScrapeFieldItem = ({ id, name, description }: ScrapeField) => {
  const { updateField, removeField } = useStore();
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
      <button onClick={() => removeField(id)}>
        <TrashIcon className="h-6 text-white" />
      </button>
    </div>
  );
};

const InputFields = () => {
  const { fields, addEmptyField } = useStore();

  return (
    <div className="flex w-full flex-col space-y-5">
      {fields.map((field) => (
        <ScrapeFieldItem
          key={field.id}
          id={field.id}
          name={field.name}
          description={field.description}
        />
      ))}
      <div className="h-1" />
      <button
        className="w-fit rounded-full bg-white px-5 py-1 hover:bg-gray-200"
        onClick={addEmptyField}
      >
        Add Field
      </button>
    </div>
  );
};

export default InputFields;

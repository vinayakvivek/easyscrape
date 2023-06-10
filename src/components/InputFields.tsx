const InputFieldItem = () => {
  return (
    <div className="flex flex-row space-x-4">
      <input
        type="text"
        className="px-2 py-1 focus:outline-none rounded-md"
        placeholder="Field name"
      />
      <input
        type="text"
        className="px-2 py-1 focus:outline-none rounded-md flex-1"
        placeholder="Field Description"
      />
    </div>
  );
};

const InputFields = () => {
  return (
    <div className="w-full">
      <InputFieldItem />
    </div>
  );
};

export default InputFields;

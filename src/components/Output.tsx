import { useStore } from "~/store";

const Output = () => {
  const { result } = useStore();
  return (
    <div className="h-full w-full">
      <textarea
        className="h-full w-full p-4 focus:outline-none"
        disabled
        value={JSON.stringify(result, null, 2)}
      ></textarea>
    </div>
  );
};

export default Output;

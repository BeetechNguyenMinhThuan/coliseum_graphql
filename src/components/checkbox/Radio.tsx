import { useController } from "react-hook-form";

function Radio({ checked, children, control, name, ...rest }) {
  const { field } = useController({
    control,
    name,
  });
  return (
    <label>
      <input
        checked={checked}
        type="radio"
        className="hidden-input"
        {...field}
        {...rest}
      />
      <div className="flex cursor-pointer items-center gap-x-3 font-medium">
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full border p-1  ${
            checked
              ? "border-primary bg-pink-200 text-white"
              : "border-gray-200 text-transparent"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span>{children}</span>
      </div>
    </label>
  );
}

export default Radio;

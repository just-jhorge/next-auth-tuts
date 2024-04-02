import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface ErrorProps {
  message?: string;
}

export const FormError = ({ message }: ErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p className="text-xs lg:text-sm">{message}</p>
    </div>
  );
};

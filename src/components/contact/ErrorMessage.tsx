
const ErrorMessage = ({ message }: { message: string }) => {
  return <span className="text-[11px] text-red-600">{message}</span>;
};
  
export default ErrorMessage;
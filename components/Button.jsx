function Button({ icon = false, Icon, children }) {
  return (
    <button
      className="flex justify-center bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      style={{ transition: "all 0.15s ease 0s" }}
    >
      {icon && <Icon className="mr-2" />}
      {children}
    </button>
  );
}
export default Button;

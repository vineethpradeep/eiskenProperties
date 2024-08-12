import Link from "next/link";

function PrimaryLink({
  children,
  linkTo,
  defaultColor = true,
  customColor,
  handleClick,
}) {
  const baseColor = "bg-primary-color hover:bg-primary-dark";
  const buttonColor = defaultColor ? baseColor : customColor;

  return (
    <Link
      href={linkTo}
      className={`py-3 px-4 flex items-center justify-center ${buttonColor} text-white`}
    >
      {children}
    </Link>
  );
}

export default PrimaryLink;

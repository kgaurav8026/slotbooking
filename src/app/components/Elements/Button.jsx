import Link from "next/link";

function Button(buttonName, url) {
  return (
    <Link href={url}>
      <button type="button" className="btn btn-primary">
        {buttonName}
      </button>
    </Link>
  );
}

export default Button;

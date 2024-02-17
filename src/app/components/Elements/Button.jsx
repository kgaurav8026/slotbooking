import Link from "next/link";
function Button(buttonName,url) {
  return (
    <Link href={url}>
    <button  type="button" className="btn btn-success">
      {buttonName}
    </button>
    </Link>

  );
}
//onClick = {()=>router.push({url})}
export default Button;
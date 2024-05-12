import Image from "next/image";
import imageFaille from "../public/images/LA FAILLE.png";

function MyImage() {
  return (
    <div>
      <h1>My Image</h1>
      <Image src={imageFaille} alt="My Image" width={300} height={300} />
    </div>
  );
}
export default MyImage;

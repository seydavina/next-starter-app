import Image from "next/image";
import imageFaille from "../public/images/LA FAILLE.png";

function MyImage() {
    return(
        <div>
            <p>My Image</p>
            <Image src={imageFaille} alt="My Image" width={500} height={500} />
        </div>
    );
}

export default MyImage;
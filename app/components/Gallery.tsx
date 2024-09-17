import ImgContainer from "../components/ImgContainer";
import imageLinks from "./imageLinks"; // Adjust the import path as necessary

const generateImageProps = (src: string) => {
  const defaultAlt = "Default alt text"; // Define default alt text

  return {
    src,
    alt: defaultAlt,
  };
};

const localImages = imageLinks.map(generateImageProps);

export default function Gallery() {
  if (localImages.length === 0) {
    return <h2 className="m-4 text-2xl font-bold">No images found</h2>;
  }

  return (
    <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
      {localImages.map((photo, index) => (
        <ImgContainer key={index} photo={photo} />
      ))}
    </section>
  );
}

import ImgContainer from "../components/ImgContainer";

    
    const localImages = [
        "/images/gallery/homepicweb.jpg",
        "/images/gallery/page2-1000-full.jpg",
        "/images/gallery/page2-1001-full.jpg",
        "/images/gallery/page2-1002-full.jpg",
        "/images/gallery/page2-1003-full.jpg",
        "/images/gallery/page2-1004-full.jpg",
        "/images/gallery/page2-1005-full.jpg",
        "/images/gallery/page2-1006-full.jpg",
        "/images/gallery/page2-1007-full.jpg",
        "/images/gallery/page2-1008-full.jpg",
        "/images/gallery/page2-1009-full.jpg",
        "/images/gallery/page2-1010-full.jpg",
        "/images/gallery/page2-1011-full.jpg",
        "/images/gallery/page2-1012-full.jpg",
        "/images/gallery/page2-1013-full.jpg",
        "/images/gallery/page2-1014-full.jpg",
        "/images/gallery/page2-1015-full.jpg",
        "/images/gallery/page3-1000-full.jpg",
        "/images/gallery/page3-1001-full.jpg",
        "/images/gallery/page3-1002-full.jpg",
        "/images/gallery/page3-1003-full.jpg",
        "/images/gallery/page3-1005-full.jpg",
        "/images/gallery/page3-1006-full.jpg",
        "/images/gallery/page3-1007-full.jpg",
        "/images/gallery/page3-1008-full.jpg",
        "/images/gallery/page3-1009-full.jpg",
        "/images/gallery/page3-1010-full.jpg",
        "/images/gallery/page3-1011-full.jpg",
        "/images/gallery/page3-1012-full.jpg",
        "/images/gallery/page3-1013-full.jpg",
        "/images/gallery/page3-1014-full.jpg",
        "/images/gallery/page3-1015-full.jpg",
        "/images/gallery/page3-1016-full.jpg",
        "/images/gallery/page3-1017-full.jpg",
        "/images/gallery/page3-1018-full.jpg",
        "/images/gallery/page3-1019-full.jpg",
        "/images/gallery/page3-1020-full.jpg",
        "/images/gallery/page3-1021-full.jpg",
        "/images/gallery/page3-1022-full.jpg",
        "/images/gallery/page3-1023-full.jpg",
        "/images/gallery/page3-1024-full.jpg",
        "/images/gallery/page3-1025-full.jpg",
        "/images/gallery/page3-1026-full.jpg",
        "/images/gallery/page3-1027-full.jpg",
        "/images/gallery/page3-1028-full.jpg",
        "/images/gallery/page3-1029-full.jpg",
        "/images/gallery/page3-1030-full.jpg",
        "/images/gallery/page3-1031-full.jpg",
        "/images/gallery/page3-1032-full.jpg",
        "/images/gallery/page3-1033-full.jpg",
        "/images/gallery/page3-1034-full.jpg",
        "/images/gallery/page3-1035-full.jpg",
        "/images/gallery/page3-1036-full.jpg",
        "/images/gallery/page3-1037-full.jpg",
        "/images/gallery/page3-1038-full.jpg",
        "/images/gallery/page3-1039-full.jpg",
        "/images/gallery/page3-1040-full.jpg",
        "/images/gallery/page3-1041-full.jpg",
        "/images/gallery/page3-1042-full.jpg",
        "/images/gallery/page3-1043-full.jpg",
        "/images/gallery/page3-1044-full.jpg",
        "/images/gallery/page3-1045-full.jpg",
        "/images/gallery/page3-1046-full.jpg",
        "/images/gallery/page3-1047-full.jpg"
      ];

      export default function Gallery() {
        if (localImages.length === 0) {
          return <h2 className="m-4 text-2xl font-bold">No images found</h2>;
        }
      
        return (
          <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
            {localImages.map((src, index) => (
              <ImgContainer key={index} photo={{ src }} />
            ))}
          </section>
        );
      }
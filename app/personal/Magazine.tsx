import Image from "next/image";
export default function Magazine() {
  const images = [
    "https://picsum.photos/418/620",
    "https://picsum.photos/347/509",
    "https://picsum.photos/418/620",
    "https://picsum.photos/347/509",
  ];
  return (
    <div id="magazine" className="container">
      <div
        className={`images grid grid-cols-2 items-center justify-items-center gap-8`}
      >
        {images.map((image, index) => {
          const [w, h] = index % 2 === 0 ? [418, 620] : [347, 509];

          return (
            <Image
              src={image}
              alt="personal"
              width={w}
              height={h}
              className="p-1"
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

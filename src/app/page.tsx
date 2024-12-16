import CatPhotoList from "./_components/CatPhotoList";
import { imagePhotos } from "./_data/catPhote";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <CatPhotoList photoDataList={imagePhotos} />
    </main>
  );
}

import { ObjectItem } from "@/utils/types";
import { FiNavigation } from "react-icons/fi";
import { DialogBody } from "../ui/Dialog";

interface ObjectDetailsViewProps {
  object: ObjectItem;
  objectNavigation: () => void;
}

function ObjectDetailsView({
  object,
  objectNavigation,
}: ObjectDetailsViewProps) {
  let targetImageName = ""; // Nama variabel diubah agar lebih umum

  try {
    if (object?.gambar && typeof object.gambar === 'string') {
      const imageArray = JSON.parse(object.gambar);
      
      // --- PERUBAHAN DI SINI ---
      // Cek apakah ada gambar kedua (array index 1)
      if (Array.isArray(imageArray) && imageArray.length > 1) {
        // Ambil nama file KEDUA dari array
        targetImageName = imageArray[1]; 
      }
    }
  } catch (error) {
    console.error("Gagal parse JSON gambar, mungkin formatnya string biasa:", object.gambar, error);
    if (typeof object.gambar === 'string') {
      targetImageName = object.gambar;
    }
  }

  // Bersihkan nama file dari karakter '\' (jika ada)
  const cleanImageName = targetImageName.replace(/\\/g, '/');

  // Buat URL final HANYA jika ada nama file yang valid
  const imageUrl = cleanImageName
    ? `http://localhost:8080/uploads/${cleanImageName}`
    : "";

  return (
    <DialogBody>
      {imageUrl && (
        <div className="mb-4">
          <img
            src={imageUrl}
            alt={object.name}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      )}
      <div className="mb-6">
        <p className="text-lg font-medium text-gray-900">{object.name}</p>
        <p className="text-md text-gray-700">{object.desc}</p>
      </div>
      <div className="inline-flex rounded-md right-0 bottom-0 p-2 absolute">
        <button
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-800 hover:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          onClick={objectNavigation}
        >
          <FiNavigation />
        </button>
      </div>
    </DialogBody>
  );
}

export default ObjectDetailsView;
# Developer Modification Guide

Panduan ini menjelaskan cara melakukan modifikasi umum pada proyek Indoor-Navigation TuJuanda.

---

## 1. Mengubah Nama Tenant

Nama tenant digunakan untuk pencarian, navigasi, dan tampilan di sidebar. Perubahan harus konsisten di beberapa tempat.

**Langkah-langkah:**

1.  **Ubah di Database**: Langkah paling penting adalah mengubah nama tenant di database utama, yang kemungkinan besar dikelola melalui website admin TuJuanda. Ini adalah sumber data utama yang diambil oleh aplikasi.

2.  **Update `graphData.ts`**: Untuk memastikan fungsi navigasi dan pencarian tetap bekerja, Anda **wajib** memperbarui nama di file `src/store/graphData.ts`.
    * Buka file `src/store/graphData.ts`.
    * Cari vertex yang sesuai dengan tenant yang namanya diubah.
    * Ubah nilai properti `objectName` menjadi nama yang baru, pastikan sama persis dengan yang ada di database.

    ```typescript
    // src/store/graphData.ts

    export const graphData1: GraphData = {
      vertices: [
        // ...
        // Contoh sebelum diubah
        { id: "FB11", objectName: "Java Cafe", cx: 1850.929, cy: 480.811, objectCX: 1850.621337890625, objectCY: 503.37005615234375 },
        // Contoh sesudah diubah
        { id: "FB11", objectName: "Kafe Java Baru", cx: 1850.929, cy: 480.811, objectCX: 1850.621337890625, objectCY: 503.37005615234375 },
        // ...
      ],
      //...
    };
    ```

> 📝 **Catatan:** File seperti `src/components/IndoorMap/Objects.tsx` tidak perlu diubah karena ia menggunakan `id` untuk identifikasi, bukan nama tenant.

---

## 2. Mengubah ID Tenant

ID tenant (`uid`) digunakan sebagai pengidentifikasi unik untuk elemen SVG di peta dan vertex pada graf navigasi.

**Langkah-langkah:**

1.  **Ubah di Database**: Ubah `uid` tenant di database melalui admin panel.

2.  **Update `Objects.tsx`**: Buka file `src/components/IndoorMap/Objects.tsx` dan ubah `id` dari elemen SVG yang sesuai.

    ```typescript
    // src/components/IndoorMap/Objects.tsx

    // Sebelum
    <path
        id="FB11" // ID lama
        className={`${className} object`}
        d="..."
        onClick={handleObjectClick}
    />

    // Sesudah
    <path
        id="KAFE-01" // ID baru
        className={`${className} object`}
        d="..."
        onClick={handleObjectClick}
    />
    ```

3.  **Update `graphData.ts`**: Buka `src/store/graphData.ts`, cari vertex yang bersangkutan, dan ubah `id`-nya agar sesuai dengan `uid` yang baru.

    ```typescript
    // src/store/graphData.ts

    // Sebelum
    { id: "FB11", objectName: "Java Cafe", ... },

    // Sesudah
    { id: "KAFE-01", objectName: "Java Cafe", ... },
    ```

---

## 3. Menambah Lokasi Tenant Baru

Menambahkan tenant baru melibatkan pembuatan data di database, penambahan elemen visual di peta, dan pendaftaran titik baru di sistem navigasi.

**Langkah-langkah:**

1.  **Tambah Data di Database**: Tambahkan data tenant baru (uid, nama, lantai, gambar, dll.) melalui website admin.

2.  **Gambar Objek di Peta (`Objects.tsx`)**:
    * Buka file SVG peta asli (misal: `src/assets/img/T1-LT1.svg`) di editor teks atau Inkscape.
    * Untuk mempermudah, gambar bentuk (persegi, poligon) untuk tenant baru dengan warna yang mencolok (misal: `#FF00FF`).
    * Simpan file, lalu buka file SVG tersebut dengan editor teks. Cari kode warna yang Anda gunakan (`#FF00FF`).
    * Salin data path SVG (`<path d="...">` atau `<rect ...>`).
    * Buka `src/components/IndoorMap/Objects.tsx` dan tempelkan path tersebut di dalam grup (`<g>`) lantai yang sesuai. **Pastikan `id` elemen SVG baru sama dengan `uid` tenant baru dari database.**

3.  **Update `graphData.ts`**:
    * **Tambahkan Vertex Baru**: Di `src/store/graphData.ts`, dalam array `vertices` untuk lantai yang benar, tambahkan objek vertex baru.
        * `id`: `uid` tenant baru.
        * `objectName`: nama tenant baru.
        * `cx`, `cy`: Koordinat untuk titik henti navigasi (biasanya di depan pintu).
        * `objectCX`, `objectCY`: Koordinat titik tengah objek untuk menempatkan logo/ikon.
    * **Tambahkan Edge Baru**: Dalam array `edges`, tambahkan satu atau lebih edge untuk menghubungkan vertex baru ini ke vertex navigasi terdekat. Ini krusial agar rute ke tenant baru dapat ditemukan.

    ```typescript
    // src/store/graphData.ts

    // 1. Tambah Vertex
    vertices: [
        ...
        { id: "TENANT-BARU", objectName: "Toko Baru", cx: 1300, cy: 400, objectCX: 1305, objectCY: 410 },
    ],

    // 2. Tambah Edge (hubungkan ke vertex terdekat, misal P7)
    edges: [
        ...
        { id: "P7_to_TENANT-BARU", from: "P7", to: "TENANT-BARU", floor: 1 },
    ]
    ```

---

## 4. Memindahkan Lokasi Tenant

Proses ini mirip dengan menambah lokasi, tetapi Anda memodifikasi data yang sudah ada.

**Langkah-langkah:**

1.  **Update Path di `Objects.tsx`**: Dapatkan path SVG baru dari lokasi tenant yang baru (gunakan trik warna seperti di atas) dan ganti path lama di `src/components/IndoorMap/Objects.tsx`.

2.  **Update Koordinat di `graphData.ts`**:
    * Cari vertex tenant yang pindah berdasarkan `id`-nya.
    * Perbarui koordinat `cx`, `cy`, `objectCX`, dan `objectCY` agar sesuai dengan lokasi baru.

3.  **Update Edge di `graphData.ts`**: Ini adalah bagian terpenting.
    * Hapus semua *edge* lama yang terhubung ke vertex tenant tersebut.
    * Tambahkan *edge* baru yang menghubungkan vertex tersebut ke titik-titik navigasi terdekat di lokasi barunya. Kegagalan pada langkah ini akan menyebabkan navigasi ke tenant tersebut rusak.

---

## 5. Mengubah ViewBox Peta

Jika Anda mengganti file SVG peta dengan yang memiliki `viewBox` atau dimensi berbeda, beberapa penyesuaian diperlukan.

**Langkah-langkah:**

1.  **Update `MapBackground.tsx`**: Buka `src/components/IndoorMap/MapBackground.tsx` dan ubah properti `viewBox` pada komponen `<svg>`.

2.  **Kalibrasi Ulang `mapRatio`**: Perubahan `viewBox` akan mengubah skala peta. Untuk menjaga akurasi perhitungan jarak (meter) dan estimasi waktu jalan kaki, Anda harus mengkalibrasi ulang rasio di `src/hooks/useRouteDetails.ts`.
    * Ukur jarak antara dua titik di SVG (dalam unit SVG).
    * Ukur jarak nyata antara dua titik yang sama di lokasi fisik (dalam meter).
    * Hitung rasio baru dan perbarui nilai `mapRatio`.

---

## 6. Mengubah Isi Legenda

Legenda yang ditampilkan di desktop mudah untuk diubah.

**Langkah-langkah:**

* Buka file `src/components/Legend.tsx`.
* Modifikasi, tambah, atau hapus item dari array `legendItems`. Setiap item memiliki properti `type` ('box' untuk warna, 'image' untuk ikon), `content` (kode warna atau path gambar), dan `text` (label legenda).

```typescript
// src/components/Legend.tsx

const legendItems: LegendItem[] = [
  { type: 'image', content: '/media/Toilet.png', text: 'Toilet' },
  { type: 'box', content: '#000000', text: 'Gate' },
  // Tambah atau ubah item di sini
];
 ```

---

## 7. Melihat Semua Jalur Navigasi (Edges)
Untuk keperluan debugging, Anda bisa menampilkan semua kemungkinan jalur (edges) yang ada di dalam graf navigasi.

**Langkah-langkah:**

* Buka file `src/components/IndoorMap/Paths.tsx`.
* Cari bagian kode render untuk edge-path.
* Hilangkan komentar pada properti stroke dan fill untuk membuatnya terlihat.


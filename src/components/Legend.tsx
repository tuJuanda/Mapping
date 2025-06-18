// src/components/Legend.tsx

import React from 'react';

// Definisikan tipe untuk item legenda agar lebih jelas
interface LegendItem {
  type: 'box' | 'image';
  content: string; // Berisi kode warna atau path gambar
  text: string;
}

const legendItems: LegendItem[] = [
  // Baris Pertama
  { type: 'box', content: '#D1D5DB', text: 'Perkantoran' }, // Warna abu-abu (gray-300)
  { type: 'image', content: '/icons/fnb.png', text: 'Food & Beverage' },
  { type: 'image', content: '/icons/retail.png', text: 'Retail' },
  { type: 'image', content: '/icons/prayer.png', text: 'Prayer Room' },
  { type: 'image', content: '/icons/toilet.png', text: 'Toilet' },
  { type: 'image', content: '/icons/gate.png', text: 'Gate' },

  // Baris Kedua (bisa diisi sesuai kebutuhan)
  { type: 'image', content: '/icons/layanan.png', text: 'Layanan Bandara' },
  { type: 'box', content: '#FBBF24', text: 'Contoh 1' }, // Contoh warna kuning
  { type: 'image', content: '/icons/placeholder.png', text: 'Contoh 2' },
  { type: 'image', content: '/icons/placeholder.png', text: 'Contoh 3' },
  { type: 'image', content: '/icons/placeholder.png', text: 'Contoh 4' },
  { type: 'image', content: '/icons/placeholder.png', text: 'Contoh 5' },
];

const Legend: React.FC = () => {
  return (
    <div className="legend-container">
      <div className="legend-grid">
        {legendItems.map((item, index) => (
          <div key={index} className="legend-item">
            {item.type === 'box' ? (
              // Tampilkan kotak warna jika tipenya 'box'
              <div
                className="legend-color-box"
                style={{ backgroundColor: item.content }}
              ></div>
            ) : (
              // Tampilkan gambar jika tipenya 'image'
              <img src={item.content} alt={item.text} className="legend-img-icon" />
            )}
            <span className="legend-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
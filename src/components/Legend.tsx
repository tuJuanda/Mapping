// src/components/Legend.tsx

import React from 'react';

// Definisikan tipe untuk item legenda agar lebih jelas
interface LegendItem {
  type: 'box' | 'image';
  content: string; // Berisi kode warna atau path gambar
  text: string;
}

const legendItems: LegendItem[] = [
  { type: 'image', content: '/media/Boardingpass.png', text: 'Boarding Pass Check' },
  { type: 'image', content: '/media/Checkin.png', text: 'Check-in Counter' },
  { type: 'image', content: '/media/Selfcheckin.png', text: 'Self Check-in' },
  { type: 'image', content: '/media/baggage claim.png', text: 'Baggage Claim' },
  { type: 'image', content: '/media/Xray.png', text: 'Body Check' },
  { type: 'image', content: '/media/Emergencystair.png', text: 'Emergency Stair' },

  { type: 'image', content: '/media/Toilet.png', text: 'Toilet' },
  { type: 'image', content: '/media/Musholla.png', text: 'Musholla' },
  { type: 'image', content: '/media/Nursery.png', text: 'Nursery' },
  { type: 'image', content: '/media/Eskalator.png', text: 'Eskalator' },
  { type: 'box', content: '#000000', text: 'Gate' }, 
  { type: 'box', content: '#878787', text: 'Perkantoran' }, 
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
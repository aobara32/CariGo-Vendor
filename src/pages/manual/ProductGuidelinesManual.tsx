import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const ProductGuidelinesManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Product Guidelines — CariGo',
      sections: {
        accuracy: {
          title: 'Accuracy',
          items: [
            'Ensure all product details are correct and truthful. Misrepresentation may result in suspension.'
          ]
        },
        media: {
          title: 'Media',
          items: [
            'Use clear, professional images (1000×1000px min). Avoid misleading visuals.'
          ]
        },
        restricted: {
          title: 'Restricted Items',
          items: [
            'Prohibited: counterfeit goods, illegal materials, dangerous or recalled items.'
          ]
        },
        compliance: {
          title: 'Compliance',
          items: [
            'Follow Brunei\'s product safety and labeling requirements.'
          ]
        }
      }
    },
    ms: {
      title: 'Garis Panduan Produk — CariGo',
      sections: {
        accuracy: {
          title: 'Ketepatan',
          items: [
            'Pastikan semua butiran produk adalah betul dan benar. Salah nyata mungkin mengakibatkan penggantungan.'
          ]
        },
        media: {
          title: 'Media',
          items: [
            'Gunakan imej yang jelas dan profesional (minimum 1000×1000px). Elakkan visual yang mengelirukan.'
          ]
        },
        restricted: {
          title: 'Item Terhad',
          items: [
            'Dilarang: barang tiruan, bahan haram, item berbahaya atau ditarik balik.'
          ]
        },
        compliance: {
          title: 'Pematuhan',
          items: [
            'Ikuti keperluan keselamatan produk dan pelabelan Brunei.'
          ]
        }
      }
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/seller-agreement" nextPath="/manual/shipping-policies">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {c.sections.accuracy.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.accuracy.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {c.sections.media.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.media.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {c.sections.restricted.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.restricted.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">4) {c.sections.compliance.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.compliance.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ManualLayout>
  )
}

export default ProductGuidelinesManual
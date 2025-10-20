import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'

const ProductGuidelinesManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/seller-agreement" nextPath="/manual/shipping-policies">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Product Guidelines — CariGo' : 'Garis Panduan Produk — CariGo'}</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">1) {language === 'en' ? 'Accuracy' : 'Ketepatan'}</h2>
      <p className="mb-4">{language === 'en' ? 'Ensure product details are correct and truthful.' : 'Pastikan butiran produk adalah betul dan benar.'}</p>
      <h2 className="text-xl font-semibold mb-2">2) {language === 'en' ? 'Media' : 'Media'}</h2>
      <p className="mb-4">{language === 'en' ? 'Use clear images (1000×1000px min).' : 'Gunakan imej yang jelas (minimum 1000×1000px).'}</p>
      <h2 className="text-xl font-semibold mb-2">3) {language === 'en' ? 'Restricted Items' : 'Item Terhad'}</h2>
      <p className="mb-4">{language === 'en' ? 'No counterfeit, illegal, or dangerous items.' : 'Tiada barangan tiruan, haram atau berbahaya.'}</p>
      <h2 className="text-xl font-semibold mb-2">4) {language === 'en' ? 'Compliance' : 'Pematuhan'}</h2>
      <p>{language === 'en' ? 'Follow Brunei safety and labeling requirements.' : 'Ikuti keperluan keselamatan dan pelabelan Brunei.'}</p>
    </ManualLayout>
  )
}

export default ProductGuidelinesManual



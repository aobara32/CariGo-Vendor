import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const ProductCatalogManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/store-management" nextPath="/manual/order-processing">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Product Catalog — Vendor Manual (CariGo)' : 'Katalog Produk — Manual Peniaga (CariGo)'}</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">1) {language === 'en' ? 'Setting Up Your First Product' : 'Menetapkan Produk Pertama Anda'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'Dashboard > Products > Add Product' : 'Papan Pemuka > Produk > Tambah Produk'}</li>
        <li>{language === 'en' ? 'Required: Title, Description, Price, Stock, Category, Condition, SKU' : 'Wajib: Tajuk, Penerangan, Harga, Stok, Kategori, Keadaan, SKU'}</li>
        <li>{language === 'en' ? 'Optional: Brand, Tags, Weight, Dimensions, Visibility' : 'Pilihan: Jenama, Tag, Berat, Dimensi, Keterlihatan'}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">2) {language === 'en' ? 'Product Categories and Tags' : 'Kategori Produk dan Tag'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'Assign correct categories for better search results.' : 'Tetapkan kategori yang betul untuk hasil carian yang lebih baik.'}</li>
        <li>{language === 'en' ? 'Use clear, relevant tags.' : 'Gunakan tag yang jelas dan relevan.'}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">3) {language === 'en' ? 'Managing Product Variants' : 'Mengurus Varian Produk'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'Each variant has its own stock and price.' : 'Setiap varian mempunyai stok dan harga tersendiri.'}</li>
        <li>{language === 'en' ? 'Manage variants under the parent product.' : 'Urus varian di bawah produk induk.'}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">4) {language === 'en' ? 'Product Image Guidelines' : 'Garis Panduan Imej Produk'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'Min 1000×1000px, JPG/PNG, no heavy text or watermarks.' : 'Min 1000×1000px, JPG/PNG, tiada teks berat atau tera air.'}</li>
        <li>{language === 'en' ? 'Core: max 3 images; Basic: 8; Pro: unlimited.' : 'Core: maks 3 imej; Basic: 8; Pro: tanpa had.'}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">5) {language === 'en' ? 'Bulk Product Upload with CSV' : 'Muat Naik Produk Pukal dengan CSV'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'Dashboard > Products > Import CSV' : 'Papan Pemuka > Produk > Import CSV'}</li>
        <li>{language === 'en' ? 'Template fields: Title, Description, Price, Stock, SKU, Category, Image URLs.' : 'Medan templat: Tajuk, Penerangan, Harga, Stok, SKU, Kategori, URL Imej.'}</li>
        <li>{language === 'en' ? 'Basic/Pro support bulk; Pro gets priority processing.' : 'Basic/Pro menyokong pukal; Pro mendapat pemprosesan keutamaan.'}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">6) {language === 'en' ? 'Inventory Synchronization' : 'Penyegerakan Inventori'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'Core: manual' : 'Core: manual'}</li>
        <li>{language === 'en' ? 'Basic: CSV auto-update + manual' : 'Basic: CSV auto-kemas kini + manual'}</li>
        <li>{language === 'en' ? 'Pro: API or scheduled auto-sync' : 'Pro: API atau auto-segerak berjadual'}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">7) {language === 'en' ? 'Product Guidelines' : 'Garis Panduan Produk'}</h2>
      <ul className="list-disc pl-6">
        <li>{language === 'en' ? 'Avoid prohibited items; ensure accuracy; comply with regulations.' : 'Elak item dilarang; pastikan ketepatan; patuhi peraturan.'}</li>
      </ul>
    </ManualLayout>
  )
}

export default ProductCatalogManual



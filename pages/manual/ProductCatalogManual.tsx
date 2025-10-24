import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const ProductCatalogManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Product Catalog — Vendor Manual (CariGo)',
      overview: 'Manage your store\'s products: adding, editing, and organizing your catalog effectively.',
      sections: {
        firstProduct: {
          title: 'Setting Up Your First Product',
          items: [
            'Dashboard > Products > Add Product',
            'Required: Title, Description, Price, Stock Quantity, Category, Condition (New/Used), SKU.',
            'Optional: Brand, Tags, Weight, Dimensions, Visibility.'
          ]
        },
        categories: {
          title: 'Product Categories and Tags',
          items: [
            'Assign correct categories for better search results.',
            'Use clear, relevant tags (avoid "tag spam").'
          ]
        },
        variants: {
          title: 'Managing Product Variants',
          items: [
            'Each variant (e.g., color, size) has its own stock and price.',
            'Manage variants under the parent product.'
          ]
        },
        images: {
          title: 'Product Image Guidelines',
          items: [
            'Image minimum 1000×1000px, JPG/PNG format, no heavy text or watermarks.',
            'Core: max 3 images/product',
            'Basic: max 8 images/product',
            'Pro: unlimited (fair-use policy)'
          ]
        },
        bulkUpload: {
          title: 'Bulk Product Upload with CSV',
          items: [
            'Dashboard > Products > Import CSV.',
            'Download the CSV template and fill fields: Title, Description, Price, Stock, SKU, Category, Image URLs.',
            'Basic/Pro plans support bulk upload; Pro gets priority processing.'
          ]
        },
        inventory: {
          title: 'Inventory Synchronization',
          items: [
            'Core: manual',
            'Basic: CSV auto-update + manual',
            'Pro: API or scheduled auto-sync'
          ]
        },
        guidelines: {
          title: 'Product Guidelines',
          items: [
            'Avoid prohibited items (counterfeits, hazardous goods, illegal materials).',
            'Ensure product information and claims are accurate.',
            'Comply with Brunei\'s labeling and consumer protection regulations.'
          ]
        }
      }
    },
    ms: {
      title: 'Katalog Produk — Manual Peniaga (CariGo)',
      overview: 'Urus produk kedai anda: menambah, mengedit, dan mengatur katalog anda dengan berkesan.',
      sections: {
        firstProduct: {
          title: 'Menyediakan Produk Pertama Anda',
          items: [
            'Papan Pemuka > Produk > Tambah Produk',
            'Diperlukan: Tajuk, Penerangan, Harga, Kuantiti Stok, Kategori, Keadaan (Baru/Terpakai), SKU.',
            'Pilihan: Jenama, Tag, Berat, Dimensi, Keterlihatan.'
          ]
        },
        categories: {
          title: 'Kategori dan Tag Produk',
          items: [
            'Tugaskan kategori yang betul untuk hasil carian yang lebih baik.',
            'Gunakan tag yang jelas dan relevan (elakkan "spam tag").'
          ]
        },
        variants: {
          title: 'Mengurus Variant Produk',
          items: [
            'Setiap variant (cth. warna, saiz) mempunyai stok dan harga sendiri.',
            'Urus variant di bawah produk induk.'
          ]
        },
        images: {
          title: 'Garis Panduan Imej Produk',
          items: [
            'Imej minimum 1000×1000px, format JPG/PNG, tiada teks berat atau watermark.',
            'Core: maks 3 imej/produk',
            'Basic: maks 8 imej/produk',
            'Pro: tidak terhad (polisi penggunaan adil)'
          ]
        },
        bulkUpload: {
          title: 'Muat Naik Produk Pukal dengan CSV',
          items: [
            'Papan Pemuka > Produk > Import CSV.',
            'Muat turun templat CSV dan isi medan: Tajuk, Penerangan, Harga, Stok, SKU, Kategori, URL Imej.',
            'Pelan Basic/Pro menyokong muat naik pukal; Pro mendapat pemprosesan keutamaan.'
          ]
        },
        inventory: {
          title: 'Sinkronisasi Inventori',
          items: [
            'Core: manual',
            'Basic: kemas kini auto CSV + manual',
            'Pro: API atau sinkronisasi auto berjadual'
          ]
        },
        guidelines: {
          title: 'Garis Panduan Produk',
          items: [
            'Elakkan item yang dilarang (tiruan, barang berbahaya, bahan haram).',
            'Pastikan maklumat dan tuntutan produk adalah tepat.',
            'Patuhi peraturan pelabelan dan perlindungan pengguna Brunei.'
          ]
        }
      }
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/store-management" nextPath="/manual/order-processing">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>
      
      <h2 className="text-xl font-semibold mt-6 mb-2">Overview</h2>
      <p className="text-muted-foreground mb-6">{c.overview}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {c.sections.firstProduct.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.firstProduct.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {c.sections.categories.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.categories.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {c.sections.variants.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.variants.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">4) {c.sections.images.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.images.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">5) {c.sections.bulkUpload.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.bulkUpload.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">6) {c.sections.inventory.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.inventory.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">7) {c.sections.guidelines.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.guidelines.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ManualLayout>
  )
}

export default ProductCatalogManual
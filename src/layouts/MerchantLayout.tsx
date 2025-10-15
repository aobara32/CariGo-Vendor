import MerchantHeader from '@/components/MerchantHeader'
import MerchantFooter from '@/components/MerchantFooter'

const MerchantLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MerchantHeader />
      <main className="flex-1">{children}</main>
      <MerchantFooter />
    </div>
  )
}

export default MerchantLayout


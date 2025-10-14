import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CheckCircle2, 
  TrendingUp, 
  Upload, 
  BarChart3, 
  Clock, 
  Shield, 
  FileText, 
  Zap,
  ChevronDown,
  Phone,
  Mail
} from "lucide-react";
import heroImage from "@/assets/hero-merchant.jpg";

const Index = () => {
  const [gmv, setGmv] = useState(2000);
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [stickyVisible, setStickyVisible] = useState(false);

  // Revenue calculator logic
  const calculateRevenue = (gmvAmount: number, plan: string) => {
    const platformFees = {
      core: 0.15,
      basic: 0.095,
      pro: 0.065
    };
    const paymentFee = 0.025;
    const subscriptionFees = {
      core: 0,
      basic: 48,
      pro: 90
    };

    const platformFee = platformFees[plan as keyof typeof platformFees];
    const platformCommission = gmvAmount * platformFee;
    const paymentCost = gmvAmount * paymentFee;
    const platformNet = platformCommission - paymentCost;
    const sellerReceives = gmvAmount - platformCommission - paymentCost;
    const subscription = subscriptionFees[plan as keyof typeof subscriptionFees];
    const sellerNet = sellerReceives - subscription;

    return {
      platformCommission,
      paymentCost,
      platformNet,
      sellerReceives,
      subscription,
      sellerNet,
      effectiveRate: ((platformCommission + paymentCost + subscription) / gmvAmount * 100).toFixed(1)
    };
  };

  const revenue = calculateRevenue(gmv, selectedPlan);

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Carigo",
          "description": "Local e-commerce platform for Brunei merchants",
          "url": "https://carigo.bn",
          "logo": "https://carigo.bn/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales",
            "availableLanguage": ["English", "Malay"]
          }
        })}
      </script>

      {/* Sticky CTA Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg transition-transform duration-300 ${stickyVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <span className="font-semibold">Start selling on Carigo today</span>
          <div className="flex gap-3">
            <Button variant="secondary" size="sm" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
              Apply to sell
            </Button>
            <Button variant="outline" size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Talk to sales
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Start selling locally with Carigo.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              List your products, reach nearby shoppers, and get paid on your schedule.
            </p>
            
            {/* RTB Pills */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Zap className="w-5 h-5" />
                <span className="font-medium">5-second product discovery</span>
              </div>
              <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <Upload className="w-5 h-5" />
                <span className="font-medium">Inventory sync & CSV imports</span>
              </div>
              <div className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <BarChart3 className="w-5 h-5" />
                <span className="font-medium">Analytics & faster payouts</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                className="min-w-[200px]"
              >
                Apply to sell
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="min-w-[200px] bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Talk to sales
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Secure payments
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Transparent fees
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Local support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Start selling in three simple steps</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Create your store & verify</h3>
              <p className="text-muted-foreground">Complete KYC with business registration, ID, and bank account proof</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Upload products</h3>
              <p className="text-muted-foreground">Add items manually, via CSV bulk import, or API integration</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Start selling</h3>
              <p className="text-muted-foreground">Get paid weekly, bi-weekly, or monthly based on your plan</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Key Features</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Everything you need to succeed</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Upload className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Flexible Product Uploads</h3>
              <p className="text-sm text-muted-foreground">Manual entry, CSV bulk import with templates, or full API integration</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Inventory Sync</h3>
              <p className="text-sm text-muted-foreground">From manual updates to scheduled auto-sync via API priority queue</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BarChart3 className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-sm text-muted-foreground">Track sales, customers, and trends with CSV/PDF export options</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Fast Payouts</h3>
              <p className="text-sm text-muted-foreground">Choose monthly, bi-weekly, or weekly payouts based on your plan</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Dedicated Support</h3>
              <p className="text-sm text-muted-foreground">From email support to dedicated account managers with onboarding</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Priority Placement</h3>
              <p className="text-sm text-muted-foreground">Get featured in search results and category listings with Pro plan</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Transparent Pricing</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Choose the plan that fits your business</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Core Plan */}
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Core</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">US$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Platform fee:</span>
                  <span className="font-semibold">15.0%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Payment processing:</span>
                  <span className="font-semibold">2.5%</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t">
                  <span className="font-semibold">Total fees:</span>
                  <span className="font-bold text-lg">17.5%</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Up to 50 products</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>3 images per product</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Manual inventory</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Basic order history</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Email support (≤72h)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Monthly payouts</span>
                </li>
              </ul>

              <Button className="w-full" variant="outline">Get Started</Button>
            </Card>

            {/* Basic Plan */}
            <Card className="p-8 border-2 border-primary hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">US$48</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Platform fee:</span>
                  <span className="font-semibold">9.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Payment processing:</span>
                  <span className="font-semibold">2.5%</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t">
                  <span className="font-semibold">Total fees:</span>
                  <span className="font-bold text-lg">12.0%</span>
                </div>
                <p className="text-xs text-muted-foreground">+ subscription fee</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Up to 500 products</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>8 images per product</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>CSV bulk import</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>CSV auto-update + manual</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Expanded reports & CSV export</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Priority email & chat (24-48h)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Bi-weekly payouts</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>1 featured pickup slot/month</span>
                </li>
              </ul>

              <Button className="w-full" variant="secondary">Get Started</Button>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">US$90</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Platform fee:</span>
                  <span className="font-semibold">6.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Payment processing:</span>
                  <span className="font-semibold">2.5%</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t">
                  <span className="font-semibold">Total fees:</span>
                  <span className="font-bold text-lg">9.0%</span>
                </div>
                <p className="text-xs text-muted-foreground">+ subscription fee</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Unlimited products & images</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Priority CSV processing</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>API + scheduled auto-sync</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Advanced analytics dashboard</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Phone & chat support + onboarding</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Weekly payouts (or on request)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Priority search placement</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>API keys for integration</span>
                </li>
              </ul>

              <Button className="w-full">Get Started</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Plan Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Plan Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Core</th>
                  <th className="text-center p-4 font-semibold bg-primary/10">Basic</th>
                  <th className="text-center p-4 font-semibold">Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">Monthly fee</td>
                  <td className="text-center p-4">US$0</td>
                  <td className="text-center p-4 bg-primary/5">US$48</td>
                  <td className="text-center p-4">US$90</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Platform fee</td>
                  <td className="text-center p-4">15.0%</td>
                  <td className="text-center p-4 bg-primary/5">9.5%</td>
                  <td className="text-center p-4">6.5%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Payment fee</td>
                  <td className="text-center p-4">2.5%</td>
                  <td className="text-center p-4 bg-primary/5">2.5%</td>
                  <td className="text-center p-4">2.5%</td>
                </tr>
                <tr className="border-b bg-muted/50 font-semibold">
                  <td className="p-4">Effective fees total</td>
                  <td className="text-center p-4">17.5%</td>
                  <td className="text-center p-4 bg-primary/10">12.0%*</td>
                  <td className="text-center p-4">9.0%*</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Listings limit</td>
                  <td className="text-center p-4">50</td>
                  <td className="text-center p-4 bg-primary/5">500</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Images per item</td>
                  <td className="text-center p-4">3</td>
                  <td className="text-center p-4 bg-primary/5">8</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">CSV bulk import</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4 bg-primary/5">✓ Template</td>
                  <td className="text-center p-4">✓ Priority</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Inventory sync</td>
                  <td className="text-center p-4">Manual</td>
                  <td className="text-center p-4 bg-primary/5">CSV auto</td>
                  <td className="text-center p-4">API scheduled</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Analytics level</td>
                  <td className="text-center p-4">Basic</td>
                  <td className="text-center p-4 bg-primary/5">Expanded</td>
                  <td className="text-center p-4">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Support SLA</td>
                  <td className="text-center p-4">Email ≤72h</td>
                  <td className="text-center p-4 bg-primary/5">Priority 24-48h</td>
                  <td className="text-center p-4">Dedicated manager</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Payout frequency</td>
                  <td className="text-center p-4">Monthly</td>
                  <td className="text-center p-4 bg-primary/5">Bi-weekly</td>
                  <td className="text-center p-4">Weekly/On-request</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Priority placement</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4 bg-primary/5">1 slot/month</td>
                  <td className="text-center p-4">✓ Quota</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">API access</td>
                  <td className="text-center p-4">✗</td>
                  <td className="text-center p-4 bg-primary/5">✗</td>
                  <td className="text-center p-4">✓ Limited keys</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-muted-foreground text-center mt-4">* Plus subscription fee billed separately</p>
          </div>
        </div>
      </section>

      {/* Revenue Simulator */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Revenue Simulator</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">See how much you'll earn on each plan</p>
          
          <Card className="max-w-4xl mx-auto p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="gmv-input" className="text-base font-semibold mb-3 block">
                  Monthly GMV (Gross Merchandise Value)
                </Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="gmv-input"
                    type="number"
                    value={gmv}
                    onChange={(e) => setGmv(Number(e.target.value))}
                    className="max-w-[200px]"
                    min="0"
                  />
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    step="100"
                    value={gmv}
                    onChange={(e) => setGmv(Number(e.target.value))}
                    className="flex-1"
                  />
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">Select Plan</Label>
                <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="core">Core (US$0/mo)</SelectItem>
                    <SelectItem value="basic">Basic (US$48/mo)</SelectItem>
                    <SelectItem value="pro">Pro (US$90/mo)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-lg mb-4">Fee Breakdown</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Gross Merchandise Value:</span>
                    <span className="font-semibold">US${gmv.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-destructive">
                    <span>- Platform commission ({(revenue.platformCommission / gmv * 100).toFixed(1)}%):</span>
                    <span>US${revenue.platformCommission.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-destructive">
                    <span>- Payment processing (2.5%):</span>
                    <span>US${revenue.paymentCost.toFixed(2)}</span>
                  </div>
                  
                  {revenue.subscription > 0 && (
                    <div className="flex justify-between text-destructive">
                      <span>- Monthly subscription:</span>
                      <span>US${revenue.subscription.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-3 flex justify-between text-lg font-bold text-primary">
                    <span>You receive (net):</span>
                    <span>US${revenue.sellerNet.toFixed(2)}</span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Effective rate: {revenue.effectiveRate}% (includes all fees{revenue.subscription > 0 ? ' + subscription' : ''})
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center h-8 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full flex items-center justify-center text-xs text-primary-foreground px-2"
                      style={{ width: `${(revenue.platformCommission / gmv * 100)}%` }}
                    >
                      {(revenue.platformCommission / gmv * 100).toFixed(1)}%
                    </div>
                    <div 
                      className="bg-destructive h-full flex items-center justify-center text-xs text-destructive-foreground px-2"
                      style={{ width: `${(revenue.paymentCost / gmv * 100)}%` }}
                    >
                      2.5%
                    </div>
                    <div 
                      className="bg-secondary h-full flex items-center justify-center text-xs text-secondary-foreground px-2"
                      style={{ width: `${((revenue.sellerNet / gmv * 100))}%` }}
                    >
                      You get
                    </div>
                  </div>
                  <div className="flex justify-between text-xs mt-2 text-muted-foreground">
                    <span>Platform</span>
                    <span>Payment</span>
                    <span>Your earnings</span>
                  </div>
                </div>
              </div>

              {/* Preset Examples */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <button
                  onClick={() => setGmv(500)}
                  className="p-4 border rounded-lg hover:bg-muted transition-colors text-left"
                >
                  <div className="text-sm text-muted-foreground mb-1">Small business</div>
                  <div className="font-semibold">US$500 GMV</div>
                </button>
                <button
                  onClick={() => setGmv(2000)}
                  className="p-4 border rounded-lg hover:bg-muted transition-colors text-left"
                >
                  <div className="text-sm text-muted-foreground mb-1">Growing business</div>
                  <div className="font-semibold">US$2,000 GMV</div>
                </button>
                <button
                  onClick={() => setGmv(10000)}
                  className="p-4 border rounded-lg hover:bg-muted transition-colors text-left"
                >
                  <div className="text-sm text-muted-foreground mb-1">Established business</div>
                  <div className="font-semibold">US$10,000 GMV</div>
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Payouts & KYC */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Payouts & KYC</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                KYC Requirements
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>Business registration documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>Government-issued ID</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>Bank account proof</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-primary" />
                Payout Schedule
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary w-16 shrink-0">Core:</span>
                  <span>Monthly payouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary w-16 shrink-0">Basic:</span>
                  <span>Every 2 weeks (bi-weekly)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary w-16 shrink-0">Pro:</span>
                  <span>Weekly or on-request</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                <strong>Chargebacks & refunds:</strong> Fees are netted from your balance. The platform bears the initial processing cost, and disputed amounts are deducted from future payouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Security & Compliance</h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">PCI Compliant</h3>
              <p className="text-sm text-muted-foreground">External payment processors ensure secure transactions</p>
            </Card>

            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">TLS Encryption</h3>
              <p className="text-sm text-muted-foreground">All data transmitted securely with industry-standard encryption</p>
            </Card>

            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Role-Based Access</h3>
              <p className="text-sm text-muted-foreground">Control who can access your business data</p>
            </Card>

            <Card className="p-6 text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Audit Logs</h3>
              <p className="text-sm text-muted-foreground">Complete visibility into all account activities</p>
            </Card>
          </div>

          <p className="text-center mt-8 text-muted-foreground">
            <a href="#" className="underline hover:text-foreground">Data Privacy Policy</a> • <a href="#" className="underline hover:text-foreground">Prohibited Items</a>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">What's included in each plan?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">Each plan is designed to scale with your business:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Core:</strong> Perfect for testing the platform with up to 50 products, manual inventory, and basic features</li>
                  <li><strong>Basic:</strong> For growing businesses with CSV imports, expanded analytics, priority support, and bi-weekly payouts</li>
                  <li><strong>Pro:</strong> For established merchants needing API integration, dedicated support, weekly payouts, and priority placement</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Who pays payment processing fees?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">Carigo uses a conservative model where the platform collects all fees from merchants and then pays the 2.5% payment processing cost to external processors.</p>
                <p className="text-muted-foreground">This means you see one clear percentage deducted from your sales. Note: We may switch to a pass-through model in the future, but we'll notify you well in advance.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">How fast are payouts by plan?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Core:</strong> Monthly payouts (once per month)</li>
                  <li><strong>Basic:</strong> Bi-weekly payouts (every 2 weeks)</li>
                  <li><strong>Pro:</strong> Weekly payouts, or on-request for urgent needs</li>
                </ul>
                <p className="mt-3 text-muted-foreground">Faster payouts help you manage cash flow and reinvest in your business quickly.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Can I switch plans anytime?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. If you upgrade mid-cycle, we'll prorate the difference.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">How do CSV and API sync differ?</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>CSV (Basic):</strong> Upload inventory files manually or schedule automatic updates. Great for most merchants without technical resources.</li>
                  <li><strong>API (Pro):</strong> Real-time two-way sync with your existing systems. Requires developer setup but offers the most automation and control.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">Do you support cash on pickup?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">Yes, cash on delivery/pickup is supported for local Brunei orders. Payment processing fees only apply to online card payments. Contact sales for details on how cash orders are tracked and reconciled.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">How are refunds and chargebacks handled?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3 text-muted-foreground">When a customer requests a refund or initiates a chargeback:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>The disputed amount is deducted from your next payout</li>
                  <li>Payment processing fees are non-refundable and netted from your balance</li>
                  <li>You'll be notified immediately and can provide evidence for disputes</li>
                  <li>Pro plan merchants get dedicated support to handle complex cases</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Trusted by Local Merchants</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="p-6">
              <p className="text-muted-foreground mb-4 italic">"Carigo helped us reach customers we never thought possible. The CSV import saved us hours every week."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold">AH</span>
                </div>
                <div>
                  <div className="font-semibold">Ahmad Hassan</div>
                  <div className="text-sm text-muted-foreground">Local Electronics Store</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <p className="text-muted-foreground mb-4 italic">"The analytics dashboard shows exactly where our sales are coming from. Pro plan was worth every dollar."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold">SL</span>
                </div>
                <div>
                  <div className="font-semibold">Siti Lim</div>
                  <div className="text-sm text-muted-foreground">Fashion Boutique Owner</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <p className="text-muted-foreground mb-4 italic">"Weekly payouts improved our cash flow dramatically. Customer support is always quick to respond."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-semibold">JW</span>
                </div>
                <div>
                  <div className="font-semibold">James Wong</div>
                  <div className="text-sm text-muted-foreground">Home Goods Seller</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Mini case tiles */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <div className="text-sm text-muted-foreground">Average sales increase in first 90 days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-sm text-muted-foreground">Active merchants in Brunei</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Merchant satisfaction rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Apply to Sell on Carigo</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Fill out the form below and we'll get back to you within 24 hours</p>
          
          <Card className="max-w-2xl mx-auto p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="business-name">Business Name *</Label>
                  <Input id="business-name" required />
                </div>
                <div>
                  <Label htmlFor="contact-name">Contact Name *</Label>
                  <Input id="contact-name" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone/WhatsApp *</Label>
                  <Input id="phone" type="tel" required />
                </div>
              </div>

              <div>
                <Label htmlFor="category">Business Category *</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="fashion">Fashion & Apparel</SelectItem>
                    <SelectItem value="home">Home & Garden</SelectItem>
                    <SelectItem value="food">Food & Beverage</SelectItem>
                    <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                    <SelectItem value="sports">Sports & Outdoors</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="monthly-sales">Expected Monthly Sales *</Label>
                <Select>
                  <SelectTrigger id="monthly-sales">
                    <SelectValue placeholder="Select sales range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500">US$0 - US$500</SelectItem>
                    <SelectItem value="500-2000">US$500 - US$2,000</SelectItem>
                    <SelectItem value="2000-5000">US$2,000 - US$5,000</SelectItem>
                    <SelectItem value="5000-10000">US$5,000 - US$10,000</SelectItem>
                    <SelectItem value="10000+">US$10,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="preferred-plan">Preferred Plan *</Label>
                <Select>
                  <SelectTrigger id="preferred-plan">
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="core">Core (US$0/mo)</SelectItem>
                    <SelectItem value="basic">Basic (US$48/mo)</SelectItem>
                    <SelectItem value="pro">Pro (US$90/mo)</SelectItem>
                    <SelectItem value="unsure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Tell us about your business</Label>
                <Textarea id="message" rows={4} placeholder="What do you sell? How many products do you have?" />
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Checkbox id="tos" required />
                  <Label htmlFor="tos" className="text-sm cursor-pointer">
                    I agree to the <a href="#" className="text-primary underline">Terms of Service</a> *
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="privacy" required />
                  <Label htmlFor="privacy" className="text-sm cursor-pointer">
                    I agree to the <a href="#" className="text-primary underline">Privacy Policy</a> *
                  </Label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="anti-counterfeit" required />
                  <Label htmlFor="anti-counterfeit" className="text-sm cursor-pointer">
                    I agree to the <a href="#" className="text-primary underline">Anti-counterfeit Policy</a> *
                  </Label>
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Apply to sell
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Carigo</h3>
              <p className="text-sm opacity-80">Empowering local merchants in Brunei to sell online with ease.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#pricing" className="hover:opacity-100">Pricing</a></li>
                <li><a href="#" className="hover:opacity-100">Features</a></li>
                <li><a href="#" className="hover:opacity-100">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100">Terms of Service</a></li>
                <li><a href="#" className="hover:opacity-100">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-100">Fees & Policies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:support@carigo.bn" className="hover:opacity-100">support@carigo.bn</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+6732123456" className="hover:opacity-100">+673 212 3456</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 Carigo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
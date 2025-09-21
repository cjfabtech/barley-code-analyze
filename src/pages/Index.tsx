import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Leaf, 
  Heart, 
  Zap, 
  Shield, 
  Award, 
  Users, 
  CheckCircle, 
  Star,
  Quote,
  ArrowUp,
  Sparkles,
  Target,
  Brain,
  Activity
} from "lucide-react";

// Import product images
import barleyPowder from "@/assets/barley-powder.jpg";
import barleyCapsules from "@/assets/barley-capsules.jpg";
import barleyVitaminC from "@/assets/barley-vitamin-c.jpg";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent-soft text-accent-foreground">Premium Products</Badge>
            <h2 className="text-4xl font-bold mb-4 text-primary">Choose Your Wellness Format</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Pure organic barley grass in convenient forms to fit your lifestyle and wellness goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ProductCard
              name="Barley Greens Powder"
              description="Premium organic barley grass powder. Rich in chlorophyll, vitamins, and minerals for daily nutrition."
              price="$24.99"
              originalPrice="$34.99"
              image={barleyPowder}
              badge="Best Seller"
              rating={4.9}
              reviews={234}
            />
            <ProductCard
              name="Barley Capsules"
              description="Convenient capsules for on-the-go nutrition. Same powerful benefits in an easy-to-take format."
              price="$19.99"
              image={barleyCapsules}
              rating={4.7}
              reviews={189}
            />
            <ProductCard
              name="Barley + Vitamin C"
              description="Enhanced formula combining barley grass with natural vitamin C for immune system support."
              price="$29.99"
              image={barleyVitaminC}
              badge="New"
              rating={4.8}
              reviews={156}
            />
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">All products come with a 30-day money-back guarantee</p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span>Third-party tested</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-accent" />
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                <span>Non-GMO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-wellness/20 text-wellness-foreground border-wellness/30">Health Benefits</Badge>
            <h2 className="text-4xl font-bold mb-4 text-primary">Why Choose Barley Grass?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Barley grass is one of nature's most complete superfoods, packed with essential nutrients 
              that support your overall health and vitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center shadow-soft hover:shadow-nature transition-spring">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Energy Boost</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Natural energy from chlorophyll and B-vitamins to fuel your active lifestyle
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-nature transition-spring">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-wellness/20 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-wellness" />
                </div>
                <CardTitle className="text-lg">Immune Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Antioxidants and vitamins A, C, E help strengthen your body's natural defenses
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-nature transition-spring">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Heart Health</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Supports cardiovascular health with potassium, magnesium, and fiber
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-soft hover:shadow-nature transition-spring">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-secondary/40 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg">Detox Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Chlorophyll helps cleanse and detoxify your body naturally
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Nutritional Stats */}
          <Card className="max-w-4xl mx-auto shadow-elegant bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6" />
                Nutritional Powerhouse
              </CardTitle>
              <CardDescription className="text-lg">
                Each serving of Amazing Barley contains
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">Essential Vitamins & Minerals</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-wellness mb-2">18</div>
                  <p className="text-sm text-muted-foreground">Amino Acids</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">70%</div>
                  <p className="text-sm text-muted-foreground">Chlorophyll Content</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-earth/40 text-earth-foreground">Customer Stories</Badge>
            <h2 className="text-4xl font-bold mb-4 text-primary">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real results from real people who've transformed their wellness journey with Amazing Barley.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-nature transition-spring">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold">Maria Santos</h4>
                    <p className="text-sm text-muted-foreground">Fitness Enthusiast</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="w-8 h-8 text-muted-foreground/30 mb-2" />
                <p className="text-muted-foreground italic">
                  "I've been taking Amazing Barley for 3 months and my energy levels have never been better. 
                  It's become an essential part of my daily routine!"
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-nature transition-spring">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-wellness rounded-full flex items-center justify-center text-wellness-foreground font-bold">
                    J
                  </div>
                  <div>
                    <h4 className="font-semibold">James Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Wellness Coach</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="w-8 h-8 text-muted-foreground/30 mb-2" />
                <p className="text-muted-foreground italic">
                  "As a wellness coach, I recommend Amazing Barley to all my clients. 
                  The quality is outstanding and the results speak for themselves."
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-nature transition-spring">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    A
                  </div>
                  <div>
                    <h4 className="font-semibold">Ana Garcia</h4>
                    <p className="text-sm text-muted-foreground">Busy Professional</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="w-8 h-8 text-muted-foreground/30 mb-2" />
                <p className="text-muted-foreground italic">
                  "With my busy schedule, Amazing Barley capsules are perfect. 
                  I feel more focused and healthier than ever. Highly recommend!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-nature">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Our Story</Badge>
              <h2 className="text-4xl font-bold mb-6 text-primary">Committed to Your Wellness</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Amazing Barley was founded on the belief that nature provides the best solutions for optimal health. 
                We source only the finest organic barley grass, harvested at peak nutrition and processed with care 
                to preserve all the natural goodness.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Organic Farming Practices</h4>
                    <p className="text-muted-foreground">Grown without pesticides or harmful chemicals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Third-Party Testing</h4>
                    <p className="text-muted-foreground">Every batch is tested for purity and potency</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Sustainable Sourcing</h4>
                    <p className="text-muted-foreground">Supporting local farmers and eco-friendly practices</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-accent">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">50,000+</span>
                  <span className="text-muted-foreground">Happy customers</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">5+</span>
                  <span className="text-muted-foreground">Years of excellence</span>
                </div>
              </div>

              <Button variant="wellness" size="lg" onClick={() => scrollToSection('contact')}>
                Learn More About Us
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Brain className="w-5 h-5" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To make premium wellness accessible to everyone through the power of organic barley grass, 
                    helping people live healthier, more vibrant lives naturally.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Activity className="w-5 h-5" />
                    Our Promise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pure, potent, and ethically sourced products that deliver real results. 
                    We stand behind every product with our satisfaction guarantee.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Amazing Barley</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Premium organic barley grass supplements for your wellness journey.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Barley Powder</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Barley Capsules</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Barley + Vitamin C</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#about" className="hover:text-primary-foreground transition-smooth">About Us</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Our Story</a></li>
                <li><a href="#contact" className="hover:text-primary-foreground transition-smooth">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">FAQs</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Shipping Info</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-smooth">Returns</a></li>
              </ul>
            </div>
          </div>

          <Separator className="bg-primary-foreground/20 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/80">
              © 2024 Amazing Barley. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-primary-foreground transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Button
        variant="hero"
        size="icon"
        className="fixed bottom-6 right-6 rounded-full shadow-elegant z-40"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </main>
  );
};

export default Index;
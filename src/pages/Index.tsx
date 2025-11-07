import { useState } from "react";
import Header from "@/components/Header";
import BookingForm, { BookingData } from "@/components/BookingForm";
import CarCard, { CarType } from "@/components/CarCard";
import { toast } from "sonner";
import heroImage from "@/assets/hero-car.jpg";

const Index = () => {
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  const cars: CarType[] = [
    {
      id: "1",
      name: "Maruti Swift",
      category: "Economy",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/54399/swift-exterior-right-front-three-quarter-62.jpeg?q=80",
      price: 1200,
      seats: 5,
      fuelType: "Petrol",
      transmission: "Manual",
      rating: 4.5,
    },
    {
      id: "2",
      name: "Honda City",
      category: "Premium",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/134287/city-exterior-right-front-three-quarter-76.jpeg?isig=0&q=80",
      price: 2500,
      seats: 5,
      fuelType: "Petrol",
      transmission: "Automatic",
      rating: 4.7,
    },
    {
      id: "3",
      name: "Mercedes E-Class",
      category: "Luxury",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/173905/e-class-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      price: 8500,
      seats: 5,
      fuelType: "Diesel",
      transmission: "Automatic",
      rating: 4.9,
    },
    {
      id: "4",
      name: "Toyota Fortuner",
      category: "SUV",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/fortuner-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
      price: 5500,
      seats: 7,
      fuelType: "Diesel",
      transmission: "Automatic",
      rating: 4.8,
    },
    {
      id: "5",
      name: "Hyundai i20",
      category: "Economy",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/147007/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
      price: 1400,
      seats: 5,
      fuelType: "Petrol",
      transmission: "Manual",
      rating: 4.4,
    },
    {
      id: "6",
      name: "BMW 5 Series",
      category: "Luxury",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/139133/5-series-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
      price: 9500,
      seats: 5,
      fuelType: "Petrol",
      transmission: "Automatic",
      rating: 4.9,
    },
  ];

  const handleSearch = (data: BookingData) => {
    setBookingData(data);
    toast.success("Searching for available cars...");
    // Scroll to car section
    document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBook = (car: CarType) => {
    if (!bookingData) {
      toast.error("Please fill in the booking details first");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    toast.success(`Booking ${car.name} for ${bookingData.pickup} to ${bookingData.dropoff}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mb-12 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Your Journey,
              <br />
              <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                Our Passion
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Book premium cars at affordable prices. Experience luxury, comfort, and reliability
              with every ride.
            </p>
          </div>
          <BookingForm onSearch={handleSearch} />
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Premium <span className="text-primary">Fleet</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of vehicles, from economical to luxury cars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} onBook={handleBook} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-primary">RideEase?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚗",
                title: "Wide Selection",
                description: "Choose from economy to luxury vehicles for every occasion",
              },
              {
                icon: "💰",
                title: "Best Prices",
                description: "Competitive rates with no hidden charges",
              },
              {
                icon: "🔒",
                title: "Safe & Secure",
                description: "All vehicles are sanitized and regularly maintained",
              },
              {
                icon: "⚡",
                title: "Quick Booking",
                description: "Book your ride in just a few clicks",
              },
              {
                icon: "📱",
                title: "24/7 Support",
                description: "Round-the-clock customer support for your convenience",
              },
              {
                icon: "✨",
                title: "Premium Experience",
                description: "Enjoy a luxury experience at affordable prices",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border/40 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                RideEase
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted car rental partner for comfortable and affordable rides.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#fleet" className="hover:text-primary transition-colors">
                    Fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>support@rideease.com</li>
                <li>+91 1800-123-4567</li>
                <li>Available 24/7</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-border/40 pt-8">
            © 2024 RideEase. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

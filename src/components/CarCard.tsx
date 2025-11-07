import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Fuel, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface CarType {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  seats: number;
  fuelType: string;
  transmission: string;
  rating: number;
}

interface CarCardProps {
  car: CarType;
  onBook: (car: CarType) => void;
}

const CarCard = ({ car, onBook }: CarCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted to-background">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
          {car.category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{car.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-2xl font-bold text-primary">₹{car.price}</span>
              <span className="text-sm text-muted-foreground">/day</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{car.seats} Seats</span>
            </div>
            <div className="flex items-center gap-1">
              <Fuel className="h-4 w-4" />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              <span>{car.transmission}</span>
            </div>
          </div>

          <Button onClick={() => onBook(car)} className="w-full" variant="accent">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;

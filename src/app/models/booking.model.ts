export class Booking {
    bookingId?: number;
    roomId: number;
    hotelId: number;
    hotelName?: string;
    checkinDate: Date;
    checkoutDate: Date;
    cancelled?: boolean;
    breakfastIncluded?: boolean;
    freecancellation?: boolean;
    price: number;
    review?: string;
    rating?: number;
}

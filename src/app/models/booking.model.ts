export class Booking {
    bookingId?: number;
    roomId: number;
    hotelId: number;
    hotelName?: string;
    checkinDate: string;
    checkoutDate: string;
    cancelled?: boolean;
    breakfastIncluded?: boolean;
    freecancellation?: boolean;
    price: number;
    review?: string;
    rating?: number;
}

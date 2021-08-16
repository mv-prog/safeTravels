export class Booking {
    bookingId: number;
    roomId: number;
    hotelId: number;
    hotelName?: string;
    reviewId: number;
    checkinDate: Date;
    checkoutDate: Date;
    cancelled: boolean;
    breakfastIncluded: boolean;
    freecancellation: boolean;
}

import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

// Marquee content for dynamic text
export const marqueeContent = {
  cancellation: `No Refund shall be made with respect to the initial booking amount for any cancellations. However,
  • If cancellations are made 30 days before the start date of the trip, 50% of the trip cost will be charged as cancellation fees.
  • If cancellations are made 15-30 days before the start date of the trip, 75% of the trip cost will be charged as cancellation fees.
  • If cancellations are made within 0-15 days before the start date of the trip, 100% of the trip cost will be charged as cancellation fees.
  • In the case of unforeseen weather conditions or government restrictions, certain activities may be cancelled and in such cases, the operator will try his best to provide an alternate feasible activity. However, no refund will be provided for the same.`,
  terms: `• Slots at the premises will be confirmed only after receipt of full payment.
  • Management accepts no responsibility for injuries or the loss/theft of any personal property during the tour.
  • In case of any breakdown or in delay due to the breakdown of the transport on the way, you would have to wait until the transport gets repaired.
  • "Tripgix" is not responsible for any delays or alterations in the program or indirectly incurred expenses in cases such as natural hazards, accidents, weather conditions, landslides, political closure, or any untoward incident.`,
  thingsToCarry: `• Down Jacket (Main jacket)
  • Raincoat/ Poncho
  • Inner Layer
  • T-shirt or Fleece
  • Trek Pant
  • Extra pair of Socks
  • Woolen Cap
  • Rucksack (At least 40L)
  • Mufflers/ Neck Warmer
  • Extra pair of Clothes
  • Undergarments
  • Slippers
  • Power Bank
  • Sunscreen Lotion
  • Tissue Roll
  • Sunglasses
  • Torch
  • Water Bottle
  • Tissue Roll
  • Hand Sanitizer
  • Personal Toiletries
  • Medicines
  • First Aid Kit
  • Quick dry towel
  • Extra polythene
  • Documents
  • *Add extra thermal layers and sweater during the winter season`,
};

// Accommodation images
export const accommodationImages = [
  { src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D", alt: "Hotel" },
  { src: "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww", alt: "Room" },
  { src: "https://plus.unsplash.com/premium_photo-1661875135365-16aab794632f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", alt: "Resort" },
  { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsfGVufDB8fDB8fHww", alt: "Villa" },
  { src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww", alt: "Beach Villa" },

];

// Gallery images
export const galleryImages = [
  { src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRyaXB8ZW58MHx8MHx8fDA%3D", alt: "Nature" },
  { src: "https://plus.unsplash.com/premium_photo-1687653070774-87704dca1730?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHRyaXB8ZW58MHx8MHx8fDA%3D", alt: "Beach" },
  { src: "https://plus.unsplash.com/premium_photo-1682390303252-4e1e31e692e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJpcHxlbnwwfHwwfHx8MA%3D%3D", alt: "Forest" },
  { src: "https://images.unsplash.com/photo-1606054534744-a3b13e35c574?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyaXB8ZW58MHx8MHx8fDA%3D", alt: "Mountain" },
  { src: "https://images.unsplash.com/photo-1648416501050-59ebefbb2a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjI4fHx0cmlwfGVufDB8fDB8fHww", alt: "Trekking" },
];


export const trendingDestinations = [
  { src: "https://plus.unsplash.com/premium_photo-1661949303004-bab6b7a82912?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
  { src: "https://plus.unsplash.com/premium_photo-1661886836347-5738ab3b7728?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
  { src:"https://images.unsplash.com/photo-1566323124805-757e5c41d37c?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
  {src: "https://plus.unsplash.com/premium_photo-1697730113415-b33b83fe77c4?q=80&w=1170&auto=format&fit=crop", alt: "Nature" },
  {src: "https://images.unsplash.com/photo-1566323124805-757e5c41d37c?w=500&auto=format&fit=crop&q=60",  alt: "Nature" },
  {src: "https://images.unsplash.com/photo-1624890240392-da0b1aa01c90?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
];


export const UpcomingTrips = [
  { src: "https://plus.unsplash.com/premium_photo-1661949303004-bab6b7a82912?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
  { src: "https://plus.unsplash.com/premium_photo-1661886836347-5738ab3b7728?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
  { src:"https://images.unsplash.com/photo-1566323124805-757e5c41d37c?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
  {src: "https://plus.unsplash.com/premium_photo-1697730113415-b33b83fe77c4?q=80&w=1170&auto=format&fit=crop", alt: "Nature" },
  {src: "https://images.unsplash.com/photo-1566323124805-757e5c41d37c?w=500&auto=format&fit=crop&q=60",  alt: "Nature" },
  {src: "https://images.unsplash.com/photo-1624890240392-da0b1aa01c90?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
];



export const SpitiLadakhTrips = [
  { src: "https://plus.unsplash.com/premium_photo-1661949303004-bab6b7a82912?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
  { src: "https://plus.unsplash.com/premium_photo-1661886836347-5738ab3b7728?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
  { src:"https://images.unsplash.com/photo-1566323124805-757e5c41d37c?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
  {src: "https://plus.unsplash.com/premium_photo-1697730113415-b33b83fe77c4?q=80&w=1170&auto=format&fit=crop", alt: "Nature" },
  {src: "https://images.unsplash.com/photo-1566323124805-757e5c41d37c?w=500&auto=format&fit=crop&q=60",  alt: "Nature" },
  {src: "https://images.unsplash.com/photo-1624890240392-da0b1aa01c90?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
];


export const HimachalTrips = [
  { src: "https://plus.unsplash.com/premium_photo-1661949303004-bab6b7a82912?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
  { src: "https://plus.unsplash.com/premium_photo-1661886836347-5738ab3b7728?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
  { src:"https://images.unsplash.com/photo-1566323124805-757e5c41d37c?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
  {src: "https://plus.unsplash.com/premium_photo-1697730113415-b33b83fe77c4?q=80&w=1170&auto=format&fit=crop", alt: "Nature" },
  {src: "https://images.unsplash.com/photo-1566323124805-757e5c41d37c?w=500&auto=format&fit=crop&q=60",  alt: "Nature" },
  {src: "https://images.unsplash.com/photo-1624890240392-da0b1aa01c90?w=500&auto=format&fit=crop&q=60", alt: "Nature" },
];




// Gallery images
export const feedbackVideo = [
  {
    src: "https://plus.unsplash.com/premium_photo-1661939833710-6a7548ceacb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwJTIwYWlyJTIwZm9yY2V8ZW58MHx8MHx8fDA%3D", alt: "Nature"
  },
  {
    src: "https://images.unsplash.com/photo-1604768402994-b8d664517b81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwJTIwbmF2eXxlbnwwfHwwfHx8MA%3D%3D",alt: "Nature"
  },
  {
    src: "https://images.unsplash.com/flagged/photo-1560177776-55a762c5c000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJteXxlbnwwfHwwfHx8MA%3D%3D",alt: "Nature"
  }
];


export const Videos = [
  {
    src: "https://plus.unsplash.com/premium_photo-1661939833710-6a7548ceacb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwJTIwYWlyJTIwZm9yY2V8ZW58MHx8MHx8fDA%3D",
    alt: "AirForce",
    link: "https://youtu.be/IaGqZ-jV2XQ?si=cE7sSEps2sIJzRRK",
  },
  {
    src: "https://images.unsplash.com/photo-1604768402994-b8d664517b81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwJTIwbmF2eXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Navy",
    link: "https://www.youtube.com/watch?v=-XfRU8pB-Io&pp=ygUbaW5kaWFuIG5hdnkgcHJvbW90aW9uIHZpZG9l",
  },
  {
    src: "https://images.unsplash.com/flagged/photo-1560177776-55a762c5c000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJteXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Army",
    link: "https://www.youtube.com/watch?v=fS-cxg2Bi3M&pp=ygUdaW5kaWFuIGFybXkgIHByb21vdGlvbiB2aWRlbyA%3D",
  }
];


// Notes Card Component
export const NotesCard: React.FC = () => (
  <Card sx={{ maxWidth: "400px", width: "100%" }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        Notes
      </Typography>
      <Typography variant="body2">
        • Travelers residing outside Delhi are suggested to book trains/flights reaching Delhi not later than 2 PM on the trip start date. Similarly, on the trip end date, book returning flights/trains leaving post 6 PM.
        <br />
        • Numerous factors such as weather, road conditions, the physical ability of participants, etc. may cause itinerary changes. We reserve the right to change any schedule in the interest of safety, comfort, and general well-being.
        <br />
        • The age limit of our group departures is 16 to 42 years due to the power-packed itineraries that we provide to our travelers. We can customize trips for travelers beyond the mentioned age bracket.
      </Typography>
    </CardContent>
  </Card>
);

// Marquee Buttons Component
export const MarqueeButtons: React.FC<{
  selectedTab: keyof typeof marqueeContent;
  setSelectedTab: (tab: keyof typeof marqueeContent) => void;
}> = ({ selectedTab, setSelectedTab }) => (
  <Card sx={{ maxWidth: "400px", width: "100%" }}>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        Information
      </Typography>
      <Box sx={{ display: "flex", gap: 2, marginBottom: "10px" }}>
        <Button
          variant={selectedTab === "cancellation" ? "contained" : "outlined"}
          onClick={() => setSelectedTab("cancellation")}
        >
          Cancellation Policy
        </Button>
        <Button
          variant={selectedTab === "terms" ? "contained" : "outlined"}
          onClick={() => setSelectedTab("terms")}
        >
          Terms & Conditions
        </Button>
        <Button
          variant={selectedTab === "thingsToCarry" ? "contained" : "outlined"}
          onClick={() => setSelectedTab("thingsToCarry")}
        >
          Things to Carry
        </Button>
      </Box>
      <Typography variant="body2">{marqueeContent[selectedTab]}</Typography>
    </CardContent>
  </Card>
);
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
  { id: 1, src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", alt: "Hotel" },
  { id: 2, src: "https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5", alt: "Room" },
  { id: 3, src: "https://plus.unsplash.com/premium_photo-1661875135365-16aab794632f", alt: "Resort" },
  { id: 4, src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4", alt: "Villa" },
  { id: 5, src: "https://images.unsplash.com/photo-1582719508461-905c673771fd", alt: "Beach Villa" }
];

// Gallery images
export const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d", alt: "Nature" },
  { id: 2, src: "https://plus.unsplash.com/premium_photo-1687653070774-87704dca1730", alt: "Beach" },
  { id: 3, src: "https://plus.unsplash.com/premium_photo-1682390303252-4e1e31e692e4", alt: "Forest" },
  { id: 4, src: "https://images.unsplash.com/photo-1606054534744-a3b13e35c574", alt: "Mountain" },
  { id: 5, src: "https://images.unsplash.com/photo-1648416501050-59ebefbb2a15", alt: "Trekking" }
];

export const trendingDestinations = [
  { id: 1, src: "https://plus.unsplash.com/premium_photo-1661949303004-bab6b7a82912", alt: "Nature" },
  { id: 2, src: "https://plus.unsplash.com/premium_photo-1661886836347-5738ab3b7728", alt: "Nature" },
  { id: 3, src: "https://images.unsplash.com/photo-1566323124805-757e5c41d37c", alt: "Nature" },
  { id: 4, src: "https://plus.unsplash.com/premium_photo-1697730113415-b33b83fe77c4", alt: "Nature" },
  { id: 5, src: "https://images.unsplash.com/photo-1566323124805-757e5c41d37c", alt: "Nature" },
  { id: 6, src: "https://images.unsplash.com/photo-1624890240392-da0b1aa01c90", alt: "Nature" }
];

export const UttarPradesh = [
  { id: 1, src: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D", alt: "Varanasi" },
  { id: 2, src: "https://images.unsplash.com/photo-1627894483216-2138af692e32", alt: "Varanasi Ghats" },
  { id: 3, src: "https://plus.unsplash.com/premium_photo-1697730409550-71858318f4c8", alt: "Ayodhya Ram Mandir" },
  { id: 4, src: "https://media.istockphoto.com/id/1381030718/photo/barsana-holi-one-of-the-most-joyful-festival-of-india-this-is-birth-place-of-radha-lord.jpg?s=1024x1024&w=is&k=20&c=ecLMXSVrZNP5RJMOcNUorBzWM9Jn5uGAsCw7WLL2riA=", alt: "Mathura" },
  { id: 5, src: "https://images.unsplash.com/photo-1647671195638-2a7cf32e3dbd", alt: "Krishna Janmabhoomi Mathura" },
  { id: 6, src: "https://images.unsplash.com/photo-1659544457000-d3e7dadcc026", alt: "Prayagraj Sangam" },
  { id: 7, src: "https://plus.unsplash.com/premium_photo-1694475572292-5f19c8a188c6", alt: "Vindhyachal Temple" },
  { id: 8, src: "https://images.unsplash.com/photo-1645344273898-7fd1e33803c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJheWFncmFqfGVufDB8fDB8fHww", alt: "Prayagraj Kumbh" }
];

export const SpitiLadakhTrips = [
  { id: 1, src: "https://images.unsplash.com/photo-1546919921-64d1fb873098", alt: "Pangong Lake" },
  { id: 2, src: "https://images.unsplash.com/photo-1624890240392-da0b1aa01c90", alt: "Nubra Valley" },
  { id: 3, src: "https://images.unsplash.com/photo-1580389915863-f9bc9ff15bd9", alt: "Key Monastery" },
  { id: 4, src: "https://images.unsplash.com/photo-1636788236886-90de63beab48", alt: "Khardung La Pass" },
  { id: 5, src: "https://images.unsplash.com/photo-1650952079621-96c056af4bde", alt: "Chandratal Lake" }
];

export const Uttarakhand = [
  { id: 1, src: "https://images.unsplash.com/photo-1619837374214-f5b9eb80876d", alt: "Rishikesh" },
  { id: 2, src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23", alt: "Kedarnath Temple" },
  { id: 3, src: "https://images.unsplash.com/photo-1613067532651-7075a620c900", alt: "Nainital Lake" },
  { id: 4, src: "https://images.unsplash.com/photo-1588085579148-069c3d7c161d", alt: "Mussoorie" },
  { id: 5, src: "https://images.unsplash.com/photo-1623161551727-10d04eef50e9", alt: "Valley of Flowers" },
  { id: 6, src: "https://images.unsplash.com/photo-1582650625112-567c7a12eb11", alt: "Auli" },
  { id: 7, src: "https://images.unsplash.com/photo-1587474260584-136574528ed5", alt: "Badrinath Temple" },
  { id: 8, src: "https://images.unsplash.com/photo-1624890240392-da0b1aa01c90", alt: "Jim Corbett National Park" }
];

export const HimachalTrips = [
  { id: 1, src: "https://images.unsplash.com/photo-1607144113358-9d8dd893a647", alt: "Spiti Valley" },
  { id: 2, src: "https://images.unsplash.com/photo-1597167231350-d057a45dc868", alt: "Manali" },
  { id: 3, src: "https://images.unsplash.com/photo-1652501834567-937de29c4533", alt: "Manikaran" },
  { id: 4, src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23", alt: "Shimla" },
  { id: 5, src: "https://images.unsplash.com/photo-1622225074638-1d80c0388697", alt: "Dharamshala" },
  { id: 6, src: "https://images.unsplash.com/photo-1609920658906-8223bd289001", alt: "Kasol" }
];

export const feedbackVideo = [
  { id: 1, src: "https://plus.unsplash.com/premium_photo-1661939833710-6a7548ceacb9", alt: "Nature" },
  { id: 2, src: "https://images.unsplash.com/photo-1604768402994-b8d664517b81", alt: "Nature" },
  { id: 3, src: "https://images.unsplash.com/flagged/photo-1560177776-55a762c5c000", alt: "Nature" }
];

export const Videos = [
  { 
    id: 1,
    src: "https://plus.unsplash.com/premium_photo-1661939833710-6a7548ceacb9",
    alt: "AirForce",
    link: "https://youtu.be/IaGqZ-jV2XQ?si=cE7sSEps2sIJzRRK"
  },
  {
    id: 2, 
    src: "https://images.unsplash.com/photo-1604768402994-b8d664517b81",
    alt: "Navy",
    link: "https://www.youtube.com/watch?v=-XfRU8pB-Io&pp=ygUbaW5kaWFuIG5hdnkgcHJvbW90aW9uIHZpZG9l"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/flagged/photo-1560177776-55a762c5c000",
    alt: "Army",
    link: "https://www.youtube.com/watch?v=fS-cxg2Bi3M&pp=ygUdaW5kaWFuIGFybXkgIHByb21vdGlvbiB2aWRlbyA%3D"
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
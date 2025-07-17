import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const icons = {
  instagram: {
    component: <InstagramIcon />,
    link: "https://www.instagram.com",
  },
  whatsapp: {
    component: <WhatsAppIcon />,
    link: "https://www.whatsapp.com",
  },
  youtube: {
    component: <YouTubeIcon />,
    link: "https://www.youtube.com",
  },
  linkedin: {
    component: <LinkedInIcon />,
    link: "https://www.linkedin.com",
  },
};

export default icons;
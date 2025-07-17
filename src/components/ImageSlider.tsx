import React, { useRef } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface ImageSliderProps {
  title: string;
  images: { src: string; alt: string; onClick?: () => void }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ title, images }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust scroll amount as needed
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Title */}
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        {title}
      </Typography>

      {/* Left Arrow (Previous Button) */}
      <IconButton
        onClick={() => handleScroll("left")}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Slider Content */}
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: "10px",
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              minWidth: "300px",
              height: "200px",
              borderRadius: "10px",
              backgroundImage: `url(${image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexShrink: 0,
              cursor: image.onClick ? "pointer" : "default",
            }}
            onClick={image.onClick}
          >
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                padding: "5px",
                textAlign: "center",
                borderRadius: "0 0 10px 10px",
              }}
            >
              {image.alt}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Right Arrow (Next Button) */}
      <IconButton
        onClick={() => handleScroll("right")}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
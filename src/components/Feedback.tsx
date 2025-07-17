import React, { useRef } from "react";
import { Box, IconButton, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface FeedbackCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ title, description, image, date }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {title[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="194"
        image={image} // Use the image passed as a prop
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Additional details about {title}.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Feedback: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust scroll amount as needed
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const feedbackData = [
    {
      title: "Feedback 1",
      description: "rasgulles are beast in kolkata",
      image: "https://media.istockphoto.com/id/2196087139/photo/dog-gives-paw-to-a-woman-making-high-five-gesture.webp?a=1&b=1&s=612x612&w=0&k=20&c=9JStCy8UAHKmbPZxaWmnbysmXHtUKH_5Iy23XRlFrnA=", // Replace with your image link
      date: "September 14, 2023",
    },
    {
      title: "Feedback 2",
      description: "rasgulles are beast in kolkata",
      image: "https://via.placeholder.com/300", // Replace with your image link
      date: "September 15, 2023",
    },
    {
      title: "Feedback 3",
      description: "rasgulles are beast in kolkata",
      image: "https://via.placeholder.com/300", // Replace with your image link
      date: "September 16, 2023",
    },
    {
      title: "Feedback 4",
      description: "rasgulles are beast in kolkata",
      image: "https://via.placeholder.com/300", // Replace with your image link
      date: "September 17, 2023",
    },
    {
      title: "Feedback 5",
      description: "rasgulles are beast in kolkata",
      image: "https://via.placeholder.com/300", // Replace with your image link
      date: "September 18, 2023",
    },
    {
      title: "Feedback 6",
      description: "rasgulles are beast in kolkata",
      image: "https://via.placeholder.com/300", // Replace with your image link
      date: "September 19, 2023",
    },
  ];

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden", padding: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Feedback
      </Typography>

      {/* Left Arrow */}
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
        {feedbackData.slice(0, 4).map((feedback, index) => ( // Restrict to 4 cards
          <FeedbackCard
            key={index}
            title={feedback.title}
            description={feedback.description}
            image={feedback.image}
            date={feedback.date}
          />
        ))}
      </Box>

      {/* Right Arrow */}
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

export default Feedback;
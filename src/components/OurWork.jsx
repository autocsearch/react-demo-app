import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const works = [
  {
    title: "Work 1",
    description: "Description for work 1",
    image: "/event1.png",
    link: "/work1",
  },
  {
    title: "Work 2",
    description: "Description for work 2",
    image: "/event2.jpg",
    link: "/work2",
  },
  {
    title: "Work 3",
    description: "Description for work 3",
    image: "/event3.jpg",
    link: "/work3",
  },
];

export default function Works() {
  const handleRedirect = (link) => {
    window.location.href = link; // later you can replace this with React Router's navigate()
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      {works.map((work, index) => (
        <Card
          key={index}
          sx={{
            width: 300,
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
            },
          }}
          onClick={() => handleRedirect(work.link)}
        >
          <CardMedia component="img" height="180" image={work.image} alt={work.title} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {work.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {work.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

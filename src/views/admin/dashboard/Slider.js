import React from 'react';
import { Box, Typography } from  '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slide = ({ title }) => (
    <Box
      w="100%"
      h="200px"
      bg="cyan.400"
      border="cyan.700"
      align="center"
      justifyContent="center"
      mx="4"
    >
      <Typography color="white" fontWeight="bold">
        {title}
      </Typography>
    </Box>
  );


export default function SliderComp() {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3
  };

  return (
    <div className="App">
      <Box m="20">
        <Box
          sx={{
            ".slick-dots": {
              transform: "translateY(1em)"
            },
            ".slick-dots li button": {
              _before: {
                transition: "0.2s",
                content: "''",
                borderRadius: "100%",
                background: "red.500"
              }
            }
          }}
        >
          <Slider {...slickSettings}>
            <Slide title="スライド１" />
            <Slide title="スライド２" />
            <Slide title="スライド３" />
            <Slide title="スライド４" />
            <Slide title="スライド５" />
          </Slider>
        </Box>
      </Box>
    </div>
  );
}
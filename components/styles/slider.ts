import { Box, styled } from "@mui/material";

export const CommonCarouselStyles = styled(Box)`
  & .slick-dots {
    bottom: 2.5vw;
    position: relative;
    line-height: 0vw;
  }
  & .slick-dots li {
    width: auto;
    height: auto;
  }
  & .slick-dots li button {
    width: 0.4vw;
    padding: 0px;
    height: 0.4vw;
    background: gray;
    border-radius: 50%;
  }

  & .slick-dots li button::before {
    content: none;
    color: #afafaf;
  }

  & .slick-dots li.slick-active button {
    opacity: 1;
    width: 0.6vw;
    height: 0.6vw;
    background: #ad8b3a;
    border-radius: 15px;
  }
  & .slick-next {
    top: 50%;
    right: 0;
    z-index: 1;
    opacity: 1;
  }

  & .slick-next:before,
  & .slick-prev:before {
    opacity: 1;
    content: none;
  }

  & .slick-prev {
    left: 0;
    top: 50%;
    z-index: 1;
    opacity: 1;
  }

  .slick-vertical .slick-track {
    overflow: hidden;
    height: auto !important;
  }
`
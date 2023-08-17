"use client";
import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { useThemeContext } from "../context/context";
import useDownloader from "react-use-downloader";

const Payment = () => {
  const { open } = useThemeContext();
  const { download } = useDownloader();
  const media_urls = [
    {
      id: 1,
      title: "Video One",
      video_url:
        "https://res.cloudinary.com/chris101/video/upload/v1645684691/video_1.mp4",
    },
    {
      id: 2,
      title: "Video Two",
      video_url:
        "https://res.cloudinary.com/chris101/video/upload/v1645684672/video_2.mp4",
    },
    {
      id: 3,
      title: "Video Three",
      video_url:
        "https://res.cloudinary.com/chris101/video/upload/v1645684663/video_3.mp4",
    },
  ];
  return (
    <>
      <Container className={`modify_container ${open ? "" : "close"}`}>
        <h1>Videos to download</h1>
        <Grid container xs={12}>
          {media_urls.map((media) => (
            <Grid item xs={4} key={media.id} sx={{ pr: 2 }}>
              <video width="100%" height="auto" controls>
                <source src={media.video_url} type="video/mp4" />
              </video>
              <Button
                variant="contained"
                onClick={() => download(media.video_url, media.title)}
              >
                Click to download
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Payment;

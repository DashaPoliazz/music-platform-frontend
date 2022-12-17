import MainLayout from "../../layouts/MainLayout";
import { Grid, Card, Button, Box } from "@mui/material";
import { useRouter } from "next/router";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList/TrackList";

const Tracks = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "639214fa1a2ad3ddafa1f96e",
      name: "TrackName",
      artist: "WellKnown Artist",
      listens: 5,
      text: "Text",
      picture:
        "http://localhost:5000/image/aeb6bb7a-9526-455d-8827-00bfaf29fdeb.webp",
      audio:
        "http://localhost:5000/audio/1fe2920d-f20d-434e-abda-ed3340847cf9.mp3",
      comments: [
        {
          _id: "63921b8bccb0d4ae0bcd0285",
          username: "Joe",
          text: "Wow! What an awful song!",
        },
      ],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card
          style={{
            width: "900px",
          }}
        >
          <Box p={2}>
            <Grid container justifyContent="space-between">
              <h1>Track list</h1>
              <Button onClick={(e) => router.push("/tracks/create")}>
                Load
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Tracks;

import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";

import MainLayout from "../../layouts/MainLayout";

const track = {
  _id: "639214fa1a2ad3ddafa1f96e",
  name: "TrackName",
  artist: "WellKnown Artist",
  listens: 5,
  text: "Text",
  picture:
    "http://localhost:5000/image/aeb6bb7a-9526-455d-8827-00bfaf29fdeb.webp",
  audio: "http://localhost:5000/audio/1fe2920d-f20d-434e-abda-ed3340847cf9.mp3",
  comments: [
    {
      _id: "63921b8bccb0d4ae0bcd0285",
      username: "Joe",
      text: "Wow! What an awful song!",
    },
  ],
};

const TrackPage = () => {
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        onClick={(e) => router.push("/tracks")}
        style={{
          fontSize: 32,
        }}
      >
        Back
      </Button>
      <h1>Comments: </h1>
      <Grid
        container
        style={{
          margin: "20px 0",
        }}
      >
        <img src={track.picture} width={200} height={200} />
        <div>
          <h1>Track: {track.name}</h1>
          <h1>Artist: {track.artist}</h1>
          <h1>Listens: {track.listens}</h1>
        </div>
      </Grid>
      <h1>Words: </h1>
      <p>{track.text}</p>
      <Grid container>
        <TextField label="Your name" fullWidth />
        <TextField label="Comment" fullWidth multiline />
        <Button>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <>
            <div>Author: {comment.username}</div>
            <div>Comment: {comment.text}</div>
          </>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;

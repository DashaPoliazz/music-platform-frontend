import { Grid, IconButton } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUp from "@mui/icons-material/VolumeUp";

import styles from "../../styles/Player.module.scss";
import TrackProgress from "../TrackProgress/TrackProgress";

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

const Player = () => {
  const isActive = false;

  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {isActive ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{
          width: "200px",
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: "gray",
          }}
        >
          {track.name}
        </div>
        <div>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp
        style={{
          marginLeft: "auto",
        }}
      />
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  );
};

export default Player;

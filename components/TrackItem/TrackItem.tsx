import { Card, IconButton, Grid } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteIcon from "@mui/icons-material/Delete";

import { ITrack } from "../../types/track";

import styles from "../../styles/TrackItem.module.scss";
import { useRouter } from "next/router";

interface Props {
  track: ITrack;
  isActive?: boolean;
}

const TrackItem: React.FC<Props> = ({ track, isActive = true }) => {
  const router = useRouter();

  return (
    <div>
      <Card
        className={styles.track}
        onClick={(e) => router.push(`tracks/${track._id}`)}
      >
        <IconButton onClick={(e) => e.stopPropagation()}>
          {isActive ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <img width={70} height={70} src={track.picture} />
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
        {isActive && <div>02:42 / 03:22</div>}
        <IconButton
          style={{
            marginLeft: "auto",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <DeleteIcon />
        </IconButton>
      </Card>
    </div>
  );
};

export default TrackItem;

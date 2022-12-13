import { Grid, Box } from "@mui/material";

import { ITrack } from "../../types/track";
import TrackItem from "../TrackItem/TrackItem";

interface Props {
  tracks: ITrack[];
}

const TrackList: React.FC<Props> = ({ tracks }) => {
  return (
    <div>
      <Grid container direction="column">
        <Box p={2}>
          {tracks.map((track) => (
            <TrackItem key={track._id} track={track} />
          ))}
        </Box>
      </Grid>
    </div>
  );
};

export default TrackList;

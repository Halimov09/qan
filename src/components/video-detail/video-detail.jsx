import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import { color } from "../../constants/color";
import moment from "moment/moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Videodetail = ({ video }) => {
  console.log(video);
  return (
    <Card sx={{ width: { xs: "100%", sm: "300px" } }}>
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{ width: { xs: "100%", sm: "300px" }, height: "180px" }}
        />
      </Link>
      <CardContent
        sx={{
          background: color.primary,
          height: "220px",
          position: "relative",
        }}
      >
        <Typography my={5} sx={{ opacity: 0.4, my: "5px" }}>
          {moment(video.snippet.publishTime).fromNow()}
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold">
          {video.snippet.title.slice(0, 50)}
        </Typography>
        <Typography variant="subtitle2" sx={{ opacity: 0.6 }}>
          {video.snippet.description.slice(0, 60)}
        </Typography>
        <Stack
          direction={"row"}
          position={"absolute"}
          bottom={"15px"}
          alignItems={"center"}
          gap={"5px"}
        >
          <Avatar src={video?.snippet?.thumbnails?.high?.url} />
          <Typography variant={"subtitle2"} color={"gray"}>
            {video?.snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Videodetail;

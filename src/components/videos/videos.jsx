import { Box, Stack } from "@mui/material";
import { Videodetail, Chanelcard } from "..";

const Videos = ({ videos }) => {
  return (
    <Stack
      justifyContent={"space-between"}
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      gap={"10px"}
      alignItems={"center"}
    >
    {videos.map((item, idx) => (
      <Box key={idx}>
        {item.id.videoId && <Videodetail video={item} />}
        {item.id.channelId && <Chanelcard video={item} />}
      </Box>
    ))} 
    </Stack>
  );
};

export default Videos;

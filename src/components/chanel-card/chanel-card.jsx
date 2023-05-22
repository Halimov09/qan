import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";

const Chanelcard = ({ video }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <CardMedia
          image={video?.snippet?.thumbnails?.default?.url}
          alt={video?.snippet?.title}
          sx={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            mb: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <Typography variant={"h6"}>
         {video?.snippet?.title} {" "}
         <CheckCircle sx={{fontSize: "14px", color: "gray", ml: "5px"}}/>
         {video?.statistics?.subscriberCount && (
            <Typography>
            {parseInt(video?.statistics?.subscriberCount).toLocaleString("en-Us")} Subscribes
            </Typography>
         )}
        </Typography>
      </CardContent>
    </Box>
  );
};

export default Chanelcard;

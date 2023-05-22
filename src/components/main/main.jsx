import { Box, Typography, Container, Stack } from "@mui/material";
import { color } from "../../constants/color";
import { useState, useEffect } from "react";
import { Categorya,  Videos } from "..";
import { ApiServicee } from "../../service/api-service";

const Main = () => {
  const [selectedcategory, setSelectedcategory] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const Data = await ApiServicee.Fetching(`search?part=snippet&q=${selectedcategory}`);
        setvideos(Data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, [selectedcategory]);

  const selectedcategoryHandler = (category) => setSelectedcategory(category);
  return (
    <Stack>
      <Categorya
        selectedcategoryHandler={selectedcategoryHandler}
        selectedcategory={selectedcategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectedcategory}{" "}
            <span style={{ color: color.secondary }}>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;

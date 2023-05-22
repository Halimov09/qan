import { useParams } from "react-router-dom";
import { ApiServicee } from "../../service/api-service";
import { useState, useEffect } from "react";
import moment from "moment";
import { Container, Typography } from "@mui/material";

const Search = () => {
  const { id } = useParams();
  const [items, SetItems] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        const Data = await ApiServicee.Fetching(`search?part=snippet&q=${id}`);
        SetItems(Data.items);
        console.log(Data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, [id]);
  console.log(items);

  return (
    <div>
      <Container style={{ width: "90%" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          {items.map((item) => (
            <div className="all" style={{ width: "280px" }}>
              <div className="images">
                <img
                  style={{
                    width: "280px",
                    height: "180px",
                  }}
                  src={item.snippet.thumbnails.high.url}
                  alt={item.kind}
                />
              </div>
              <div className="title-card">
                <p>{moment(item.snippet.publishTime).fromNow()}</p>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.snippet.title.slice(0, 50)}
                </Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.6 }}>
                  {item.snippet.description.slice(0, 60)}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Search;

import { Stack } from "@mui/material";
import { category } from "../../constants";
import { color } from "../../constants/color";

const Categorya = ({ selectedcategoryHandler, selectedcategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{background: item.name === selectedcategory && color.secondary, color: item.name === selectedcategory && "#fff"}}
          onClick={() => selectedcategoryHandler(item.name)}

        >
          <span style={{ color: color.secondary, color: item.name === selectedcategory && "#fff", marginRight: "15px" }}>
            {item.icon}
          </span>
          <span style={{ opacity: 1 }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Categorya;

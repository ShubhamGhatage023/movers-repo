import "./ItemComponent.css";
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Collapse } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import WidgetsIcon from "@mui/icons-material/Widgets";
import RouteIcon from "@mui/icons-material/Route";
import EventIcon from "@mui/icons-material/Event";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { FormGroup, FormControlLabel, Checkbox, Divider } from "@mui/material";
import { getItemData } from "../service/item-service";
import HouseDetails from "./houseDetails";
import InventoryDetails from "./inventoryDetails";

const ItemComponent = () => {
  const [itemData, setItemData] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItemData();
        setItemData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleExpandClick = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const formatDate = (date) => {
    const newDate = new Date(date);
    const options = {
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    let formattedDate = newDate.toLocaleString("en-US", options);

    const parts = formattedDate.split(",");
    if (parts.length > 2) {
      formattedDate =
        parts.slice(0, 2).join(",") + " at" + parts.slice(2).join(",");
    } else {
      formattedDate = formattedDate.replace(/,/, ",");
    }
    return formattedDate;
  };

  return (
    <Box>
      {itemData.map((item, index) => (
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: "16px 8px",
            }}
          >
            <Box
              sx={{
                display: "block",
                width: "380px",
              }}
            >
              <Typography variant="body2" className="fromTo">
                From
              </Typography>
              <Typography variant="body2">{item.moving_from}</Typography>
            </Box>
            <Box
              sx={{
                p: 1,
                width: "24px",
                height: "24px",
                borderRadius: "24px",
                color: "orangered",
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
              }}
            >
              <EastIcon />
            </Box>
            <Box
              sx={{
                display: "block",
                width: "380px",
              }}
            >
              <Typography variant="body2" className="fromTo">
                To
              </Typography>
              <Typography variant="body2">{item.moving_to}</Typography>
            </Box>
            <Box sx={{ pr: 10 }}>
              <Typography variant="body2" className="fromTo">
                Request#
              </Typography>
              <Typography
                variant="body2"
                className="fromTo"
                sx={{ color: "orangered" }}
              >
                {item.estimate_id}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: "16px 8px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <OtherHousesIcon className="detailIcons" sx={{ pr: 1 }} />
              <Typography>{item.property_size}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <WidgetsIcon className="detailIcons" sx={{ pr: 1 }} />
              <Typography>{item.total_items}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <RouteIcon className="detailIcons" sx={{ pr: 1 }} />
              <Typography>{item.distance}</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <EventIcon className="detailIcons" sx={{ pr: 1 }} />
              <Typography>{formatDate(item.moving_on)}</Typography>
              <EditOutlinedIcon sx={{ pl: 1 }} />
            </Box>
            <Box sx={{ display: "flex" }}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked className="detailIcons" />}
                  label="Is flexible"
                />
              </FormGroup>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Button
                variant="outlined"
                sx={{
                  mr: "12px",
                  color: "orangered",
                  border: "1px solid orangered",
                  "&:hover": {
                    border: "1px solid orangered",
                  },
                }}
                onClick={() => handleExpandClick(index)}
              >
                View move details
              </Button>
              <Button variant="contained" color="warning">
                Quotes Awaiting
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              p: "16px 8px",
            }}
          >
            <WarningRoundedIcon sx={{ color: "orangered", mr: 1 }} />
            <Typography variant="body2">
              <strong>Disclaimer:</strong> Please update your move date before
              two days of shifting
            </Typography>
          </Box>
          <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
            <Box>
              <InventoryDetails moveDetails={item} />
              <HouseDetails moveDetails={item} />
            </Box>
          </Collapse>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default ItemComponent;

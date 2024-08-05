import { Typography, Button, Box, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const accordionStyles = {
  marginTop: "12px",
  backgroundColor: "rgba(125,125,125,0.3)",
  boxShadow: "none",
};

const summaryStyles = {
  color: "orangered",
  fontWeight: 700,
  fontSize: "16px",
};

const InventoryDetails = ({ moveDetails }) => {
  const inventoryDetails = moveDetails.items.inventory;

  const invData = [];
  inventoryDetails.forEach((item) => {
    const category = item.category;
    const label = item.displayName;
    const itemDetails = [];
    category.forEach((data) => {
      const items = data.items;
      items.forEach((itemData) => {
        const options = itemData.type;
        const type = options.find((option) => option.selected);
        if (itemData.qty > 0) {
          itemDetails.push({
            quantity: itemData.qty,
            itemName: itemData.displayName,
            type: type?.option || null,
          });
        }
      });
    });
    invData.push({ labelName: label, items: itemDetails });
  });
  return (
    <Box sx={{ my: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", pb: 1 }}>
        <Typography sx={{ fontWeight: 700, pr: 2 }}>Inventory</Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ backgroundColor: "#000000", textTransform: "capitalize" }}
        >
          Edit inventory
        </Button>
      </Box>
      <Box>
        <Accordion sx={accordionStyles}>
          <AccordionSummary
            expandIcon={<ExpandLessIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={summaryStyles}
          >
            Living Room
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#ffffff" }}>
            <Grid container columnSpacing={4}>
              {invData.map(
                (data) =>
                  data.items.length > 0 && (
                    <Grid item xs={12} sm={6} md={3}>
                      <Typography sx={{ fontWeight: 600 }} variant="h6">
                        {data.labelName}
                      </Typography>
                      {data.items.map((list) => (
                        <Box sx={{ my: 2, pr: 2 }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography variant="body2">
                              {list.itemName}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 700 }}
                            >
                              {list.quantity}
                            </Typography>
                          </Box>
                          {list.type && (
                            <Typography
                              variant="body2"
                              sx={{ fontWeight: 700 }}
                            >
                              {list.type}
                            </Typography>
                          )}
                        </Box>
                      ))}
                    </Grid>
                  )
              )}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyles}>
          <AccordionSummary
            expandIcon={<ExpandLessIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={summaryStyles}
          >
            Bed room
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#ffffff" }}>
            Bed room details
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyles}>
          <AccordionSummary
            expandIcon={<ExpandLessIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            sx={summaryStyles}
          >
            Kitchen
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#ffffff" }}>
            Kitchen Details
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyles}>
          <AccordionSummary
            expandIcon={<ExpandLessIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
            sx={summaryStyles}
          >
            Bathroom
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#ffffff" }}>
            Bathroom Details
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default InventoryDetails;

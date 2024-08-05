import { Button, Typography, Box, Grid } from "@mui/material";

const HouseDetails = (details) => {
  const homeTitle = {
    color: "orangered",
    fontWeight: 700,
    paddingBottom: 2,
  };
  const moveDetails = details.moveDetails;
  const newHomeDetails = {
    noOfFloors: moveDetails.new_floor_no,
    elevatorAvail: moveDetails.new_elevator_availability,
    parkingDist: moveDetails.new_parking_distance,
    additionalInfo:
      moveDetails.new_house_additional_info &&
      moveDetails.new_house_additional_info !== ""
        ? moveDetails.new_house_additional_info
        : "No additional info",
  };

  const oldHomeDetails = {
    noOfFloors: moveDetails.old_floor_no,
    elevatorAvail: moveDetails.old_elevator_availability,
    parkingDist: moveDetails.old_parking_distance,
    additionalInfo:
      moveDetails.old_house_additional_info &&
      moveDetails.old_house_additional_info !== ""
        ? moveDetails.old_house_additional_info
        : "No additional info",
  };

  const dataGrid = (moveDetails) => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ fontWeight: 700 }}> Floor No. </Typography>
          <Typography variant="caption"> {moveDetails.noOfFloors} </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ fontWeight: 700 }}> Elavator Available </Typography>
          <Typography variant="caption">
            {" "}
            {moveDetails.elevatorAvail}{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ fontWeight: 700 }}> Parking Required </Typography>
          <Typography variant="caption"> Yes </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ fontWeight: 700 }}>
            Distance from truck to door
          </Typography>
          <Typography variant="caption"> {moveDetails.parkingDist} </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography sx={{ fontWeight: 700 }}>
            Additional Information
          </Typography>
          <Typography variant="caption">
            {" "}
            {moveDetails.additionalInfo}{" "}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <Box sx={{ my: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontWeight: 700, pr: 2 }}>House Details</Typography>
        <Button
          variant="contained"
          size="small"
          sx={{ backgroundColor: "#000000", textTransform: "capitalize" }}
        >
          Edit house details
        </Button>
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography sx={homeTitle}>Existing House Details</Typography>
        {dataGrid(oldHomeDetails)}
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography sx={homeTitle}>New House Details</Typography>
        {dataGrid(newHomeDetails)}
      </Box>
    </Box>
  );
};

export default HouseDetails;

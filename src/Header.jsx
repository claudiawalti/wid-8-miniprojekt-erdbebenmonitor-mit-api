import { Stack, Typography, ButtonGroup, Button } from "@mui/material";

export const Header = ({setMag, setTime}) => (
  <div className="header">
    <header>
      <Typography
        sx={{ backgroundColor: "#eee333", color: "black", textAlign: "center" }}
        variant="h4"
      >
        IGEO Erdbebenmonitor
      </Typography>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        <ButtonGroup variant="contained" aria-label="Magnitude">
          <Button onClick={() => setMag("significant")}>significant</Button>
          <Button onClick={() => setMag("4.5")}>4.5</Button>
          <Button onClick={() => setMag("2.5")}>2.5</Button>
          <Button onClick={() => setMag("1.0")}>1.0</Button>
          <Button onClick={() => setMag("all")}>all</Button>
        </ButtonGroup>

        <ButtonGroup variant="contained" aria-label="Zeitintervall">
          <Button onClick={() => setTime("hour")}>hour</Button>
          <Button onClick={() => setTime("day")}>day</Button>
          <Button onClick={() => setTime("week")}>week</Button>
          <Button onClick={() => setTime("month")}>month</Button>
        </ButtonGroup>

      </Stack>
    </header>
  </div>
);

import {Box,Grid,Button,TextField,Container,Avatar,ThemeProvider,createTheme,Typography} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "80%",
  boxShadow: 60
};
const center = {
  position: "relative",
  top: "50%",
  left: "30%",
};
export default function Register() {
  const navigate = useNavigate();
  return (
    <div style={{backgroundImage: 'url("https://images.wallpaperscraft.com/image/single/cup_coffee_steam_5456_1920x1080.jpg'}}>
      <div style={{justifyContent:'center',height: "100vh",color: "#f5f5f5"}}>
        <Box sx={boxstyle}>
            <Grid item xs={12} sm={12} lg={6}>
              <Box style={{backgroundSize: "cover",height: "80vh",backgroundColor: " rgba(34, 35, 35, 0.5)",borderRadius:'10px'}}>
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={35} />
                    <Box sx={center}>
                      <Avatar sx={{ ml: "15%", mb: "4px", bgcolor: "#ffffff" }}>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography component="h1" variant="h5">
                        Create Account
                      </Typography>
                    </Box>
                    <Box component="form" sx={{ mt: 2 }}>
                      <Grid container spacing={1}>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField required fullWidth id="name" label="Name" name="email" autoComplete="name"/>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField required fullWidth id="email" label="Email" name="email" autoComplete="email"/>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField required fullWidth id="mobile" type="number" label="Mobile" name="mobile" autoComplete="mobile"/>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password"/>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField required fullWidth name="confirmpassword" label="Confirm Password" type="password" id="confirmpassword" autoComplete="new-password"/>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "5em", mr: "3.1em",align:'center'}}>
                          <Button  onClick={()=>{navigate("/")}} type="submit" variant="contained"  size="large" sx={{mt: "0.8em",borderRadius: 28,color: "#ffffff",backgroundColor: "#FF9A01",width:'90%'}}>
                            Register
                          </Button>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <Stack direction="row" spacing={2}>
                            <Typography  variant="body1" component="span" style={{ marginTop: "1.1em" }}>
                              Already have an Account?{" "}
                              <span style={{ color: "#beb4fb", cursor: "pointer" }} onClick={() => {navigate("/login");}}>
                                Sign In
                              </span>
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
        </Box>
      </div>
    </div>
  );
}


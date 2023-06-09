// import important modules
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import footerImage from "../../assets/images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={4}>
          <Grid item md={4} className="footer-img">
            <img src={footerImage} alt="footer-image" />
          </Grid>
          <Grid item md={4} className="footer-copyright">
            <Typography variant="body1">
              &copy; 2023 BIT-Cafeteria. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item md={4} className="social-icons">
            <div>
              <a href="#" target="_blank">
                <FacebookIcon />
              </a>
              <a href="#" target="_blank">
                <TwitterIcon />
              </a>
              <a href="https://www.linkedin.com/in/sriram-suresh-326684217/" target="_blank">
                <LinkedInIcon />
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;

// import important modules
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import aboutImage from "../../assets/images/cafe_bg2.jpg";
import "./AboutInfo.css";

const AboutInfo = () => {
  return (
    <section className="about-info">
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} className="about-info-left" data-aos="fade-up">
            <div className="about-info-left-content">
              <img
                src={aboutImage}
                alt="about-info-image"
                className="main-img"
              />
              <div className="mc-about-circle-1"></div>
              <div className="mc-about-circle-2"></div>
              <div className="mc-about-circle-3"></div>
              <div className="mc-about-circle-4"></div>
              <div className="experience">
                <Typography variant="h2" className="number-cursive">
                  10
                </Typography>
                <Typography variant="body1"> Years of Experience</Typography>
              </div>
            </div>
          </Grid>
          <Grid item md={6} className="about-info-right" data-aos="fade-up">
            <div className="about-info-right-content">
              <Typography variant="h2">
                We are doing more than you expect
              </Typography>
              <Typography variant="body1" gutterBottom>
                Welcome to BIT Cafeteria, a culinary experience like no other. Our
                restaurant is dedicated to bringing you the very best in fine
                dining, using the freshest ingredients and expertly crafted
                recipes to create a truly unforgettable dining experience.
              </Typography>
              <Typography variant="body1" gutterBottom>
              Step into our inviting space and allow us to take you on a remarkable gastronomic journey. Our menu is a testament to our passion for exquisite flavors and exceptional dining experiences. From mouthwatering appetizers to decadent desserts, every dish is crafted with care and precision. Whether you're joining us for a romantic dinner, a gathering with friends, or a special celebration, our attentive staff is here to ensure your visit is nothing short of extraordinary. Indulge in our tantalizing creations, reserve a table, and let us create a memorable dining experience tailored just for you.
              </Typography>
              <Typography variant="body1" className="signature">
                BIT Cafeteria
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutInfo;

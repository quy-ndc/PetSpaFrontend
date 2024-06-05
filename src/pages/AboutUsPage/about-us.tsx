import React from 'react';
import { Container, Box, Typography, Avatar, Grid, List, ListItem, ListItemText, Link } from '@mui/material';
import './about-us.css';

const AboutUsPage: React.FC = () => {
  return (
    <div>
      <Box className="hero-section">
        <Container className="hero-content">
          <Typography variant="h2" component="h1" gutterBottom>
            About us
          </Typography>
          <Typography variant="h5">
            Chào mừng đến với PET'SPA, nơi chăm sóc thú cưng của bạn như gia đình.
          </Typography>
        </Container>
      </Box>

      <Container className="section">
        <Typography variant="h4" component="h2" gutterBottom>
          Sứ Mệnh Của Chúng Tôi
        </Typography>
        <Typography variant="body1">
          Sứ mệnh của chúng tôi là cung cấp dịch vụ y tế tốt nhất cho thú cưng của bạn với sự tận tâm và tình yêu thương.
        </Typography>
      </Container>

      <Container className="section">
        <Typography variant="h4" component="h2" gutterBottom>
          Đội Ngũ Của Chúng Tôi
        </Typography>
        <Grid container spacing={4}>
          {/* Example team member */}
          <Grid item xs={12} sm={6} md={4}>
            <Box textAlign="center">
              <Avatar alt="Bác sĩ A" src="/path-to-image.jpg" className="avatar-large" />
              <Typography variant="h6">Bác sĩ A</Typography>
              <Typography variant="body2">Chuyên gia về thú cưng nhỏ</Typography>
            </Box>
          </Grid>
          {/* Add more team members as needed */}
        </Grid>
      </Container>

      <Container className="section">
        <Typography variant="h4" component="h2" gutterBottom>
          Giá Trị Cốt Lõi
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Tận tâm" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Chuyên nghiệp" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Trách nhiệm" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sáng tạo" />
          </ListItem>
        </List>
      </Container>

      <Container className="section">
        <Typography variant="h4" component="h2" gutterBottom>
          Contact
        </Typography>
        <Typography variant="body1">
          Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại dưới đây.
        </Typography>
        <Typography variant="body1">
          Email: <Link href="mailto:petngao@gmail.com">contact@theanimaldoctors.org</Link>
        </Typography>
        <Typography variant="body1">
          Điện thoại: 888888888
        </Typography>
      </Container>
    </div>
  );
};

export default AboutUsPage;
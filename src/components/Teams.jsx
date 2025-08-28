import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    image: "/profiles1.jpg",
  },
  {
    name: "Bob Smith",
    role: "Backend Developer",
    image: "/profiles1.jpg",
  },
  {
    name: "Clara Williams",
    role: "UI/UX Designer",
    image: "/profiles1.jpg",
  },
];

export default function Teams() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ textAlign: "center", p: 2, borderRadius: 3 }}>
              <Avatar src={member.image} alt={member.name} sx={{ width: 100, height: 100, margin: "0 auto" }} />
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

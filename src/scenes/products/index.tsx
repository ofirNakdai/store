import {
  Box,
  Container,
  Grid2,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function Products() {
  const nums = [1, 2, 3, 4, 5, 6,7,8,9, 10, 11, 12, 13, 14, 15, 16, 17];

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid container spacing={2} m="0px">
        {nums.map((num) => (
          <Grid item key={num} xs={12} sm={6} md={3}>
            <Card className={`card_${num}`}>
              <CardMedia
                image="https://api.unsplash.com/photos/random"
                title="Image Title"
                sx={{ paddingTop: "56.25%" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  //   <Container className={classes.cardGrid} maxWith="md">
  //     <Grid container spacing={4}>
  //       {cards.map((card) => (
  //         <Grid item key={card} xs={12} sm={6} md={4}>
  //           <Card className={classes.card}>
  //             <CardMedia
  //               className={classes.cardMedia}
  //               image="https://api.unsplash.com/photos/random"
  //               title="Image Title"
  //             />
  //             <CardContent className={classes.cardContent}>
  //               <Typography gutterBottom variant="h5">
  //                 Heading
  //               </Typography>
  //               <Typography>
  //                 This is a media card. You can use this section to describe
  //                 the content.
  //               </Typography>
  //             </CardContent>
  //             <CardActions>
  //               <Button size="small" color="primary">
  //                 View
  //               </Button>
  //               <Button size="small" color="primary">
  //                 Edit
  //               </Button>
  //             </CardActions>
  //           </Card>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </Container>
  //   );
}

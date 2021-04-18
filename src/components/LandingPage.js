import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";

function Copyright() {
   return (
     <Typography variant="body2" color="textSecondary" align="center">
       {'Copyright © '}
       <Link color="inherit" href="https://material-ui.com/">
         Recfly
       </Link>{' '}
       {new Date().getFullYear()}
       {'.'}
     </Typography>
   );
 }
 
 const useStyles = makeStyles((theme) => ({
   icon: {
     marginRight: theme.spacing(2),
   },
   heroContent: {
     backgroundColor: theme.palette.background.paper,
     padding: theme.spacing(8, 0, 6),
   },
   heroButtons: {
     marginTop: theme.spacing(4),
   },
   cardGrid: {
     paddingTop: theme.spacing(8),
     paddingBottom: theme.spacing(8),
   },
   card: {
     height: '100%',
     display: 'flex',
     flexDirection: 'column',
   },
   cardMedia: {
     paddingTop: '56.25%', // 16:9
   },
   cardContent: {
     flexGrow: 1,
   },
   footer: {
     backgroundColor: theme.palette.background.paper,
     padding: theme.spacing(6),
   },
 }));
 
 const cards = [1, 2, 3];

const LandingPage = () => {
   const classes = useStyles();

   const  history = useHistory();
   return (
     <React.Fragment>
       <CssBaseline />
       <main>
         {/* Hero unit */}
         <div className={classes.heroContent}>
           <Container maxWidth="sm">
             <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
               Recyfly
             </Typography>
             <Typography variant="h5" align="center" color="textSecondary" paragraph>
               "Sortowanie śmieci może być proste!" - to motto naszej firmy.
               Pomagamy znalezc odpoweidnie miejsce dla Twoich odpadow.
             </Typography>
             <div className={classes.heroButtons}>
               <Grid container spacing={2} justify="center">
                 <Grid item>
                   <Button variant="contained" color="primary" onClick={()=>{history.push("/qualify")}}>
                    
                     Przejdź do aplikacji
                   
                   </Button>
                 </Grid>
               </Grid>
             </div>
           </Container>
         </div>
         <Container className={classes.cardGrid} maxWidth="md">
           {/* End hero unit */}
           <Grid container spacing={4}>
               <Grid item xs={12} sm={6} md={4}>
                 <Card className={classes.card}>
                   <CardMedia
                     className={classes.cardMedia}
                     image="https://cdn.pixabay.com/photo/2013/07/13/10/11/qr-code-156717_1280.png"
                     title="Image title"
                   />
                   <CardContent className={classes.cardContent}>
                     <Typography gutterBottom variant="h5" component="h2">
                       Skanowanie kodów kreskowych
                     </Typography>
                     <Typography>
                       Mozesz zeskanowac kod kreskowy opakowania z którym nie wiesz co zrobić
                     </Typography>
                   </CardContent>
                 </Card>
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                 <Card className={classes.card}>
                   <CardMedia
                     className={classes.cardMedia}
                     image="https://cdn.pixabay.com/photo/2017/09/03/07/07/digital-art-2709462_1280.jpg"
                     title="Image title"
                   />
                   <CardContent className={classes.cardContent}>
                     <Typography gutterBottom variant="h5" component="h2">
                       Sztuczna inteligencja
                     </Typography>
                     <Typography>
                       Nasza aplikacja korzysta ze sztuczej inteligencji zeby pomoc ci znalezc kosz na smieci.
                     </Typography>
                   </CardContent>
                 </Card>
               </Grid>
               <Grid item xs={12} sm={6} md={4}>
                 <Card className={classes.card}>
                   <CardMedia
                     className={classes.cardMedia}
                     image="https://media.istockphoto.com/vectors/enter-code-vector-id1073852362"
                     title="Image title"
                   />
                   <CardContent className={classes.cardContent}>
                     <Typography gutterBottom variant="h5" component="h2">
                       Wprowadzanie ręczne
                     </Typography>
                     <Typography>
                       Mozesz recznie wprowadzic kod z opakowania jesli masz slaby aparat w telefonie.
                     </Typography>
                   </CardContent>
                 </Card>
               </Grid>
           </Grid>
         </Container>
       </main>
       {/* Footer */}
       <footer className={classes.footer}>
         <Typography variant="h6" align="center" gutterBottom>
           Footer
         </Typography>
         <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
           Something here to give the footer a purpose!
         </Typography>
         <Copyright />
       </footer>
       {/* End footer */}
     </React.Fragment>
   );
};

export default LandingPage;

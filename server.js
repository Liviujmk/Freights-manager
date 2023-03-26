const express = require( 'express' );
const app = express();

//dotnev
require( 'dotenv' ).config();

//connect to mongo db
const mongoose = require( 'mongoose' );
mongoose.connect( process.env.DB_STRING, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then( () => {
        console.log( "MongoDB connected" );
    } )
    .catch( err => console.log( err ) );

//set ejs
app.set( 'view engine', 'ejs' );

//url encoded
app.use( express.urlencoded( { extended: true } ) );

// expres static
app.use( '/static', express.static( 'static' ) )


//import routes
const routes = require( './routes/routes.js' );
app.use( '/', routes );

//listen server
app.listen( process.env.PORT || 5050, () => console.log( `Example app listening on port 5050!` ) );

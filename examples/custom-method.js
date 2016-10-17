return module.exports = require( '../' ).create({
  url: process.env.WORDPRESS_URL,
  username: process.env.WORDPRESS_USERNAME,
  password: process.env.WORDPRESS_PASSWORD
}).once( 'connected', onceConnected );

/**
 * Callback to Trigger Once Connected.
 *
 * @param error
 * @param methods
 */
function onceConnected( error, methods ) {

  if( !error ) {
    console.log( 'Connected to %s. There are %d methods available.', this.get( 'url' ), this.get( 'methods' ).length );
  }

  //console.log( require( 'util' ).inspect( this.get( 'methods' ), {showHidden: false, depth: 2, colors: true} ) );

  this.methodCall('wpp.systemCheck', [ 1, process.env.WORDPRESS_USERNAME, process.env.WORDPRESS_PASSWORD ], function( error, data ) {
    console.log( 'error', require( 'util' ).inspect( error, {showHidden: false, depth: 2, colors: true} ) );
    console.log( 'data', require( 'util' ).inspect( data, {showHidden: false, depth: 2, colors: true} ) );
  });

  if( error ) {
    console.error( error.message );
  }

}

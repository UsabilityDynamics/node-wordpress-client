[![Dependency Status](https://david-dm.org/UsabilityDynamics/node-wordpress-client/status.svg)
[![Master status](https://circleci.com/gh/UsabilityDynamics/node-wordpress-client/tree/master.png?circle-token=ad785bf3e72f75e3aae0b2f4897fe100f8538e34)](https://circleci.com/gh/UsabilityDynamics/node-wordpress-client/tree/master.png?circle-token=ad785bf3e72f75e3aae0b2f4897fe100f8538e34)
[![Dev status](https://circleci.com/gh/UsabilityDynamics/node-wordpress-client/tree/dev.png?circle-token=ad785bf3e72f75e3aae0b2f4897fe100f8538e34)](https://circleci.com/gh/UsabilityDynamics/node-wordpress-client/tree/dev.png?circle-token=ad785bf3e72f75e3aae0b2f4897fe100f8538e34)
[![Code Climate](https://codeclimate.com/github/UsabilityDynamics/node-wordpress-client.png)](https://codeclimate.com/github/UsabilityDynamics/node-wordpress-client)

WordPress XML-RPC client.

resources:
  - "https://usabilitydynamics.com/technical/project-yaml/"
  - "https://github.com/scottgonzalez/grunt-wordpress"
  - "https://www.npmjs.org/package/grunt-wordpress-deploy"
  - "https://www.npmjs.org/package/wp-util"
  - "https://www.npmjs.org/package/wordpress-rpc"
  
## Features
* Automated batching of RPC calls.

## Methods
Instance methods resemble WordPress functions used in PHP development.

* `client.insertPost()` - Insert a regular post.
* `client.uploadFile()` - Upload a file to a site.

## Usage

```javascript
// Load module and create an instance.
var client = require( 'wordpress-client' ).create({
  url: 'http://my-site.com/xmlrpc.php',
  username: 'admin',
  password: 'secret-password'
});

// Upload File
client.uploadFile({
  'name': 'my_file.jpg',
  'bits': require( 'fs' ).readFileSync( './path/to/file.jpeg' )
});
```

## Notes

* All callbacks are called in context of client's instance.
* Authenticated vs non-authenticated calls are automatically selected based on type of endpoint.
* BlogID is automatically selected based on url

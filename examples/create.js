var client = module.exports = require('../').create({
  url: process.env.WORDPRESS_URL,
  username: process.env.WORDPRESS_USERNAME,
  password: process.env.WORDPRESS_PASSWORD
});

/**
 * Insertion Callback.
 *
 * @param error
 * @param data
 */
function insertCallback(error, data) {
  console.log(require('util').inspect(error ? error.message : data, { showHidden: true, colors: true, depth: 2 }));
}

// Create New Post.
client.insertPost({
  post_type: 'post',
  post_status: 'draft',
  post_title: 'Test Post added using WordPress Client',
  post_author: process.env.WORDPRESS_AUTHOR_ID || 1,
  post_excerpt: 'Summary of post',
  post_content: '<b>Rich-text</b> detail of of post.',
  post_modified_gmt: new Date(),
  post_date: new Date(),
  post_format: 'standard',
  comment_status: 'closed',
  ping_status: 'closed',
  sticky: false,
  custom_fields: [
    {
      key: '_source',
      value: 'xml-rpc'
    },
    {
      key: 'key1',
      value: 'value1'
    },
    {
      key: 'key2',
      value: 'value2'
    },
    {
      key: 'key_3',
      value: 'value_3'
    },
    // the following will not work because meta keys can not start with underscores
    {
      key: '_key_4',
      value: 'value_4'
    },
    {
      key: 'key:5',
      value: 'value.5'
    },
    {
      key: 'key::6',
      value: 'value.6'
    },
    {
      key: 'key-7',
      value: 'value.7 - first'
    },
    {
      key: 'key-7',
      value: 'value.7 - second'
    },
    {
      key: 'some-key',
      value: 'some-value'
    }
  ],
  terms_names: {
    category: [ 'Awesome Category', 'Another Category' ],
    post_tag: [ 'Chicago' ]
  }
}, insertCallback);

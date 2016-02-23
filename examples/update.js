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

// Update Existing Post.
client.insertPost({
  ID: 1,
  if_not_modified_since: new Date(( new Date() ).getTime() - ( 60 * 1000 )),
  post_type: 'post',
  post_status: 'draft',
  post_title: 'Test Post',
  post_author: 1,
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
      key: 'some-key',
      value: 'some-value'
    }
  ],
  terms_names: {
    category: [ 'Awesome Category', 'Another Category' ],
    post_tag: [ 'Chicago' ]
  }
}, insertCallback);

// Update non-existing post, should fail.
client.insertPost({
  ID: 23432324321,
  if_not_modified_since: new Date(( new Date() ).getTime() - ( 60 * 1000 )),
  post_type: 'post',
  post_status: 'draft',
  post_title: 'Test Post',
  post_author: 1,
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
      key: 'some-key',
      value: 'some-value'
    }
  ],
  terms_names: {
    category: [ 'Awesome Category', 'Another Category' ],
    post_tag: [ 'Chicago' ]
  }
}, insertCallback);



export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/course"
  },
  {
    "renderMode": 2,
    "route": "/research"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/c-programming"
  },
  {
    "renderMode": 2,
    "route": "/c-programming/introduction"
  },
  {
    "renderMode": 2,
    "route": "/c-programming/getstarted"
  },
  {
    "renderMode": 2,
    "route": "/c-programming/syntax"
  },
  {
    "renderMode": 2,
    "route": "/c-programming/output"
  },
  {
    "renderMode": 2,
    "route": "/c-programming/comments"
  },
  {
    "renderMode": 2,
    "route": "/c-programming/variables"
  },
  {
    "renderMode": 2,
    "route": "/c-programming/datatypes"
  },
  {
    "renderMode": 2,
    "route": "/c-programming/input"
  },
  {
    "renderMode": 2,
    "route": "/c-programming/constant"
  },
  {
    "renderMode": 2,
    "route": "/c-programming/operator"
  },
  {
    "renderMode": 2,
    "route": "/cpp-programming"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5009, hash: 'fab6cc717dbd3230d4b01a80d3ce1dd71a500bb358df766e7c2cde3df87cf386', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1125, hash: '291c2fdd42608851ebcf521d22e9e80615a6b3800b82a4a9ff834787bdb0b9e9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13640, hash: '703a89f3f7c5d82f334c3f4861a676058f96e787e2b2346c8975b0f77cec9945', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'research/index.html': {size: 11114, hash: '9ca99e569e256d644b9ac0795c7676076262728e753fb7d3a16bcd431350dcdd', text: () => import('./assets-chunks/research_index_html.mjs').then(m => m.default)},
    'course/index.html': {size: 17370, hash: 'ca7599c1e4a8fbc5b23a61d63823a4fcf356b48b50a3069949c871646fc84918', text: () => import('./assets-chunks/course_index_html.mjs').then(m => m.default)},
    'c-programming/index.html': {size: 19161, hash: '174aafa8939810f2d032bc8304df7b1515dd096b8573df00c73009f1d9f8269b', text: () => import('./assets-chunks/c-programming_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14058, hash: '9ce5a455377ccf123414dd3fc031f1429145a92e9ddf1cf78b1f043c70efb169', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'c-programming/introduction/index.html': {size: 18960, hash: 'e014a9543cb56996f2e8edb1a4590ea09c46d21e088a4ea729454ce7116fe184', text: () => import('./assets-chunks/c-programming_introduction_index_html.mjs').then(m => m.default)},
    'c-programming/syntax/index.html': {size: 17117, hash: 'e90af587d5c539558d864287e96c2f8272552cc4c6de29065060892fc1ccf8a2', text: () => import('./assets-chunks/c-programming_syntax_index_html.mjs').then(m => m.default)},
    'c-programming/output/index.html': {size: 18705, hash: '93945ffd5d46c5ad9991af8d9b9f99d72c9e46372918be6e1779a8ff3968783d', text: () => import('./assets-chunks/c-programming_output_index_html.mjs').then(m => m.default)},
    'c-programming/getstarted/index.html': {size: 20448, hash: '92d6b0b46b4d42f3530c8bf4bc4ba6f3b8aebeeb8c3f3afea4543c78f9fa8de3', text: () => import('./assets-chunks/c-programming_getstarted_index_html.mjs').then(m => m.default)},
    'c-programming/comments/index.html': {size: 17256, hash: '681d98e54996b3163dce1983c6ea9566c46b8d07be92d984860218e9d10c0889', text: () => import('./assets-chunks/c-programming_comments_index_html.mjs').then(m => m.default)},
    'c-programming/variables/index.html': {size: 18180, hash: 'e3ba2904ac34d8f039513d1ebfa87d6102e4573658103a67acae4fe2b1ac6f62', text: () => import('./assets-chunks/c-programming_variables_index_html.mjs').then(m => m.default)},
    'c-programming/datatypes/index.html': {size: 23673, hash: '5d85e405af260334c452edd62fa822b402f8a5afc202459c1d1349cefeaf9bf6', text: () => import('./assets-chunks/c-programming_datatypes_index_html.mjs').then(m => m.default)},
    'c-programming/input/index.html': {size: 20371, hash: '4ec3abd6931dcdca6551514309168fd3f32b7470a66fbe48804af20e3d05ce61', text: () => import('./assets-chunks/c-programming_input_index_html.mjs').then(m => m.default)},
    'c-programming/constant/index.html': {size: 23165, hash: '6fecc473afe374a2affa5765590ba082f507978a6d172b150c78886661132f2d', text: () => import('./assets-chunks/c-programming_constant_index_html.mjs').then(m => m.default)},
    'c-programming/operator/index.html': {size: 15190, hash: '0b384b16a9e4e0ddf510abab9094307301c3489383abb9415f4d678a9fd0547f', text: () => import('./assets-chunks/c-programming_operator_index_html.mjs').then(m => m.default)},
    'cpp-programming/index.html': {size: 17173, hash: '0c731befd8f27abf6141e7855555f4c91e7971be468c1a110d777efa9c0e039b', text: () => import('./assets-chunks/cpp-programming_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 22986, hash: '5c3a7803159215f22a928bc10cfcc1d6e9dda863f990bae7cd02ee95eaa75ddb', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'styles-RWPQRFZL.css': {size: 233390, hash: '+nEzBFblB6g', text: () => import('./assets-chunks/styles-RWPQRFZL_css.mjs').then(m => m.default)}
  },
};

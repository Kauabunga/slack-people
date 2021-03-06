export const path = {
  ROOT: './',
  JS: './client/js/',
  DEV: './client/dev/',
  DIST: './client/dist/',
  TEST: './tests/'
}

export const tasks = {
  CLIENT_BUILD_DEV: 'client.build:dev',
  CLIENT_BUILD_DIST: 'client.build:dist',

  CLIENT_CSS_DIST: 'client.build_css:dist',
  CLIENT_JS_DIST: 'client.build_js:dist',
  CLIENT_VIEWS_DIST: 'client.views:dist',
  CLIENT_IMAGE_DIST: 'client.imgs:dist',
  CLIENT_DEL_DIST: 'client.del:dist',
  
  CLIENT_SW_DIST: 'client.sw:dist',

  CLIENT_COPY: 'client.copy',

  CLIENT_UNIT_TEST: 'client.unit_test',
  CLIENT_COVERAGE: 'client.coverage',

  CLIENT_RELOAD: 'client.reload',

  CLIENT_WATCH: 'client.watch',

  CLIENT_BUILD_TS: 'client.build_ts',
  CLIENT_BUILD_TS_WATCH: 'client.build_ts_watch'
}

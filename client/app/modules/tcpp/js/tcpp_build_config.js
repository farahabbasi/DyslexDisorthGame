({
  baseUrl : "./",
  dir : "../release/",
  optimize : 'none',
//  optimize : 'uglify',
//  uglify : {
//    toplevel : true,
//    ascii_only : true,
//    beautify : true,
//    max_line_length : 1000
//  },
  // inlineText: true,
  // namespace: 'fielddb',
  skipModuleInsertion : false,
  // stubModules: ['underscore', 'jquery','backbone'],
  // wrap: {
  // start: "(function() {",
  // end: "}());"
  // },
  mainConfigFile : "tcpp.js",
  modules : [ {
    name : "tcpp"
  } ]
})
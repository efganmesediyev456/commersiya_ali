<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    title: 'salam',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: 'sss' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      }
    ],

    script: [
      {
        src: "https://demo.templatesjungle.com/booksaw/js/modernizr.js",
        type: "text/javascript"
      },
      {
        src:
          "https://demo.templatesjungle.com/booksaw/js/jquery-1.11.0.min.js",
        type: "text/javascript"
      },


      {
        src:
          "https://demo.templatesjungle.com/booksaw/js/plugins.js",
        type: "text/javascript"
      },
      {
        src:
          "https://demo.templatesjungle.com/booksaw/js/script.js",
        type: "text/javascript"
      },

    ]
  },
}
</script>

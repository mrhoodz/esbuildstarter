const { build } = require("esbuild");
const esBuildDevServer = require("esbuild-dev-server");

const inlineimage = require("esbuild-plugin-inline-image");

const { vanillaExtractPlugin } = require("@vanilla-extract/esbuild-plugin");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

async function processCss(css) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined /* suppress source map warning */,
  });

  return result.css;
}

const copyStaticFiles = require("esbuild-copy-static-files");

const copySrc = "src/assets";
const copyDest = "public/dist";

esBuildDevServer.start(
  build({
    entryPoints: ["src/index.js"],
    outdir: "public/dist",
    bundle: true,
    // minify: true,

    incremental: true,

    loader: {
      ".js": "jsx",
      ".ts": "tsx",
    },
    plugins: [
      inlineimage(),
      vanillaExtractPlugin({
        processCss,
      }),
      copyStaticFiles({ src: copySrc, dest: copyDest }),
    ],
    // and more options ...
  }),
  {
    port: "8090", // optional, default: 8080
    watchDir: "src", // optional, default: "src"
    index: "public/index.html", // optional
    staticDir: "public", // optional
    onBeforeRebuild: {}, // optional
    onAfterRebuild: {}, // optional
  }
);

const esbuild = require("esbuild");
const inlineimage = require("esbuild-plugin-inline-image");

const { vanillaExtractPlugin } = require("@vanilla-extract/esbuild-plugin");
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

async function processCss(css) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined /* suppress source map warning */,
  });

  return result.css;
}

esbuild
  .serve(
    {
      servedir: "public",
      port: 3000,
    },
    {
      entryPoints: ["./src/index.js"],
      outfile: "./public/dist/app.js",
      bundle: true,
      loader: {
        ".js": "jsx",
        // ".ts": "tsx",
      },
      plugins: [
        inlineimage(),
        vanillaExtractPlugin({
          processCss,
        }),
      ],
    }
  )
  .catch(() => process.exit(1));

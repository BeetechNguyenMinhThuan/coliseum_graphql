import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#6F49FD",
        color1: "#7BD3EA",
        color2: "#FDFFAB",
        color3: "#FAFAFA",
        color4: "#FFCE5A",
        color5: "#FF5A5A",
        color6: "#FDCEDF",
        color7: "#FFE95A",
        color8: "#ABBDC2",
        color9: "#9DD1FE",
        color10: "#2CA9FC",
        color11: "#0DC57A",
        color12: "#FFC571",
      },
    },
  },
  plugins: [],
});

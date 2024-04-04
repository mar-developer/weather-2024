export const locations = [
  {
    name: "Current Location",
    img: "https://res.cloudinary.com/development-mar/image/upload/v1665981415/image/djqcu25s8c_hvv7yz.jpg",
    lat: null,
    lon: null,
  },
  {
    name: "London",
    img: "https://res.cloudinary.com/development-mar/image/upload/v1665980945/image/tower-bridge-london-uk-38138737_p4it34.jpg",
    lat: 51.5074,
    lon: 0.1278,
  },
  {
    name: "New York",
    img: "https://res.cloudinary.com/development-mar/image/upload/v1665980942/image/new-york-statue-of-liberty_16x9_nr9msm.webp",
    lat: 40.7128,
    lon: -74.006,
  },
  {
    name: "Tokyo",
    img: "https://res.cloudinary.com/development-mar/image/upload/v1665980938/image/c870x524_brmdhq.jpg",
    lat: 35.6895,
    lon: 139.6917,
  },
  {
    name: "Seoul",
    img: "https://res.cloudinary.com/development-mar/image/upload/v1665980944/image/Kyongbok-Palace-Seoul_g0ylhi.webp",
    lat: 37.5665,
    lon: 126.978,
  },
];

export const background = {
  sunny:
    "linear-gradient(284deg, #abccbb 26%, rgba(255,255,255,0) 69%), linear-gradient(160deg, #e4b814 52%, rgba(255,255,255,0) 62%), linear-gradient(147deg, #e37669 89%, rgba(255,255,255,0) 96%), linear-gradient(219deg, #f3d0dd 18%, rgba(255,255,255,0) 65%), radial-gradient(ellipse at -173% -79%, rgba(255,255,255,0) 0%, #271807 54%)",
  clear:
    "linear-gradient(72deg, #cce0d5 15%, rgba(255,255,255,0) 90%), linear-gradient(195deg, #f3b685 5%, rgba(255,255,255,0) 50%), linear-gradient(350deg, #20674a 29%, rgba(255,255,255,0) 78%), linear-gradient(228deg, #843e84 14%, rgba(255,255,255,0) 96%), radial-gradient(circle at -76% -48%, rgba(255,255,255,0) 0%, #d299cf 54%)",
  cloudy:
    "linear-gradient(72deg, #d8d7f6 33%, rgba(255,255,255,0) 90%), radial-gradient(circle at -76% -48%, rgba(255,255,255,0) 0%, #99a2d2 84%)",
  rainy:
    "linear-gradient(72deg, #62aff7 0%, rgba(255,255,255,0) 90%), radial-gradient(circle at -76% -48%, rgba(255,255,255,0) 0%, #bcc6fc 84%)",
  snow: "linear-gradient(180deg, #cfcfcf 2%, rgba(233, 233, 233, 0) 89%), linear-gradient(185deg, rgba(255,255,255,0) 0%, #ffecfe 1%)",
  overcast:
    "linear-gradient(185deg, rgba(255,255,255,0) 0%, #7d7d7d 106%), linear-gradient(180deg, #6e97ff 2%, rgba(233, 233, 233, 0) 89%)",
  thunderstorm:
    "linear-gradient(210deg, hsla(262.67,89.4%,70.39%,0.643352250704994) 0%, hsla(262.67,89.4%,70.39%,0.668547953325233) 0%), linear-gradient(180deg, #0a58ca 50%, hsla(190.67,88.24%,10%,0.4) 100%)",
};

export const defaultGradient =
  "repeating-radial-gradient(ellipse at 60% 77%, hsla(210,10.81%,14.51%,0.009822101773725667) 39%, hsla(44.85,94.29%,20.59%,0.3278170955865638) 5%), linear-gradient(134deg, hsla(261.32,50.67%,70.59%,0.9911964020353863) 0%, hsla(262.67,88.24%,10%,0.30437947288325873) 94%), linear-gradient(340deg, hsla(330.91,67.35%,90.39%,0.5604774978383413) 32%, hsla(189.89,88.35%,79.8%,0.7291131775249668) 54%), repeating-linear-gradient(187deg, hsla(215.75,98.36%,52.16%,0.7091023545418649) 74%, hsla(27.43,98.59%,72.16%,0.37543637385899586) 8%), repeating-radial-gradient(circle at 24% 55%, hsl(260.77,50%,10.2%) 60%, hsl(162.35,73.91%,9.02%) 87%)";

export const LOGO="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR="https://tse3.mm.bing.net/th?id=OIP.kYYbdJhBIh1SEi8MKTPYpgHaHa&pid=Api&P=0&h=220";

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English"
  },
  {
    identifier: "hindi",
    name: "Hindi"
  },
  {
    identifier: "spanish",
    name: "Spanish"
  },
]


export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
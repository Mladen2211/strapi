type AdminConfig = {
    config: {
      head?: {
        favicon?: string;
      };
      auth?: {
        logo?: string;
      };
      menu?: {
        logo?: string;
      };
      theme?: {
        light?: {
          colors?: {
            primary100?: string;
            primary500?: string;
            primary600?: string;
            primary700?: string;
          };
        };
      };
      locales?: string[];
    };
    bootstrap?: () => void;
  };
  
  const config: AdminConfig = {
    config: {
      head: {
        favicon: '/favicon.ico',
      },
      auth: {
        logo: '/logo.png',
      },
      menu: {
        logo: '/logo.png',
      },
      theme: {
        light: {
          colors: {
            primary100: '#e0f7fa',
            primary500: '#00bcd4',
            primary600: '#00acc1',
            primary700: '#0097a7',
          },
        },
      },
      locales: ['en'], // Optional: add other locales here
    },
    bootstrap() {
      console.log('Custom admin panel loaded');
    },
  };
  
  export default config;
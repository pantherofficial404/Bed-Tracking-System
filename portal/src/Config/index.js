import packageJson from '../../package.json';

const config = {
  get PUBLIC_URL() {
    return process.env.PUBLIC_URL;
  },
  get SERVER_URL() {
    return process.env.REACT_APP_SERVER_URL;
  },
  get DEBUG() {
    return process.env.NODE_ENV !== 'production';
  },
  get NODE_ENV() {
    return process.env.NODE_ENV;
  },
  get VERSION() {
    return packageJson.version;
  }
};

export default config;

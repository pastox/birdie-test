const url : string = process.env.NODE_ENV === "development" ? '' : '/api';

export default url;
export interface IReply {
  '2xx': {
    message: string;
    data: unknown;
  };
  400: {
    message: string;
  };
  '4xx': {
    message: string;
  };
  500: {
    message: string;
    error: string;
  };
}

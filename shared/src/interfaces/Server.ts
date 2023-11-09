export interface IReply {
  200: {
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
  };
}

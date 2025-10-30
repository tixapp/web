export type Price = {
  name: string;
  amount: number;
};

export type Ticket = {
  id: string;
  name: string;
  image: string;
  location: string;
  date: string;
  category: string;
  prices: Price[];
};

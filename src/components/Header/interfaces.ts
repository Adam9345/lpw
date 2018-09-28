export interface IProps {
  items: IItems[];
  theme: string;
  title: string;
}

interface IItems {
  name: string;
  url: string;
}

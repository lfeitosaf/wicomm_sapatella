export interface ProductProps {
  product: {
    src: string;
    alt: string;
    size: number;
    price: string;
    formerPrice: string;
    installments: string;
  };
  setCartCount?: any;
}

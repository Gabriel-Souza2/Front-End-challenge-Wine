import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
  id: string;
  image: string;
  name: string;
  quantity: number;
  price: number;
}

interface CartContextType {
  totalPrice: number;
  cartQuantity: number;
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (product: CartItem) => void;
  checkIfAlreadyExists: (productId: string) => boolean;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.length;

  const totalPrice = cartItems.reduce((total, product) => {
    return total + product.price;
  }, 0);

  const addToCart = (product: CartItem) => {
    setCartItems((state) => [...state, product]);
  };

  const removeFromCart = (product: CartItem) => {
    const newCart = cartItems.filter((item) => item.id !== product.id);

    setCartItems(newCart);
  };

  const checkIfAlreadyExists = (productId: string) =>
    cartItems.some((product) => product.id === productId);

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        cartItems,
        cartQuantity,
        addToCart,
        removeFromCart,
        checkIfAlreadyExists,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

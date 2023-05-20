import { CART } from "@/util/card";
import { saveStorage, getStorage } from "@/util/storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface CartItem {
  id: string;
  image: string;
  name: string;
  quantity: number;
  price: string;
}

interface CartContextType {
  totalPrice: number;
  cartQuantity: number;
  cartItems: CartItem[];
  totalCart: number;
  addToCart: (product: CartItem) => void;
  getCartById: (productId: string) => CartItem;
  removeFromCart: (product: CartItem) => void;
  checkIfAlreadyExists: (productId: string) => boolean;
  totalPriceUpdate: () => number;
  UpdateQuantityProduct: (productId: string, quantity: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalCart, setTotalCart] = useState(0);

  const init = useRef(true);
  const cartQuantity = cartItems.length;

  const totalPrice = cartItems.reduce((total, product) => {
    return total + Number(product.price) * product.quantity;
  }, 0);

  const totalPriceUpdate = () => {
    let total = cartItems.reduce((total, product) => {
      return total + Number(product.price) * product.quantity;
    }, 0);

    setTotalCart(totalCart);
    return total;
  };

  const UpdateQuantityProduct = (productId: string, quantity: number) => {
    let product = cartItems.filter((product) => {
      if (productId === product.id) {
        return product;
      }
    });

    product[0].quantity = quantity;

    removeFromCartById(productId);

    if (product[0]) {
      addToCart(product[0]);
    }

    totalPriceUpdate();
  };

  const addToCart = (product: CartItem) => {
    setCartItems((state) => [...state, product]);
  };

  const getCartById = (productId: string) => {
    return cartItems.filter((item) => item.id === productId)[0];
  };

  const removeFromCart = (product: CartItem) => {
    const newCart = cartItems.filter((item) => item.id !== product.id);

    setCartItems(newCart);
  };

  const removeFromCartById = (productId: string) => {
    const newCart = cartItems.filter((item) => item.id !== productId);

    setCartItems(newCart);
  };

  const checkIfAlreadyExists = (productId: string) =>
    cartItems.some((product) => product.id === productId);

  useEffect(() => {
    if (cartItems.length === 0 && init.current) {
      setCartItems(getStorage(CART));
      init.current = false;
      return;
    }
    saveStorage(CART, cartItems);
  }, [cartItems, init]);

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        totalCart,
        cartItems,
        cartQuantity,
        addToCart,
        totalPriceUpdate,
        getCartById,
        removeFromCart,
        checkIfAlreadyExists,
        UpdateQuantityProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

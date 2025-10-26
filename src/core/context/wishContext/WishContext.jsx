import { createContext, useContext, useEffect, useState } from "react";

const WishContext = createContext();

export const WishProvider = ({ children }) => {
    const [wishList, setWishList] = useState([])
    useEffect(() => {
        const saveWish = localStorage.getItem('wishList')
        if (saveWish) {
            setWishList(JSON.parse(saveWish))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('wishList', JSON.stringify(wishList))
    }, [wishList])
    const wishHandler = (item) => {
        setWishList((prev) => {
            const wishExists = prev.find(W => W.id === item.id)
            if (wishExists) {
                return prev.filter(W => W.id !== item.id)
            } else {
                return [...prev, item]
            }
        })
    }
    return (
        <WishContext.Provider value={{ wishList, setWishList, wishHandler }}>
            {children}
        </WishContext.Provider>
    )
}

export const useWish = () => useContext(WishContext);
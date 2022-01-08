export const itemInFav = (item, favs) => {
    return favs.some(fav => fav._id === item._id)
}
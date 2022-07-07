type ProductCard = {
  id: number,
  itemName: string,
  itemModel: string,
  itemSize: string,
  photoUrl: { id: number, url: string }[],
  price: number,
  likesCount: number,
  created: string
};

export default ProductCard;

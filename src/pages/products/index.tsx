import { useQuery } from "react-query"
import ProductItem from '../../components/product/item'
import { QueryKeys, fetcher } from "../../queryClient"
import { Product } from "../../types"

const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () => fetcher({
    method: 'GET',
    path: '/products'
  })) 
  /*
    category: "men's clothing"
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
    id: 3
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    price: 55.99
    rating: {rate: 4.7, count: 500}
    title: "Mens Cotton Jacket"
  */
  return (
    <div>
      <ul className="products">
        {data?.map(product => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList

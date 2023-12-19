import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductsList() {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) return <p>Fish Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>{product.price}</p>
        </li>
      ))}
    </ul>
  );
}

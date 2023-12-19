import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductsList() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/products/${id}`, fetcher);
  if (isLoading) return <p>Fish Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <h1>{product.name}</h1>
    </>
  );
}

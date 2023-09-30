const fetchProducts = async () => {
  const res = await fetch('http://localhost:3000/api/productsTitle')
  const product = await res.json()
  return product
}

export default async function Home() {
  const products = await fetchProducts();
  console.log("products", products)
  return (
    <>

      {
        products.products.map((item:{title:String})=>{
          return <p>{item.title}</p>
        })}
    </>
  )
}

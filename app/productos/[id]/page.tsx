export default function Products({ params }: { params: { id: string } }) {
  return <h1>ID: {params.id}</h1>;
}

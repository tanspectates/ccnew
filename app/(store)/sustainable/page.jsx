import CategoryPage from '../../../components/CategoryPage';

export const metadata = { title: 'Sustainable — Closet Cleaned' };

export default function Page() {
  return (
    <CategoryPage
      slug="sustainable"
      title={
        <>
          LOW
          <br />
          <em>IMPACT.</em>
        </>
      }
      blurb="Recycled materials, same obsession with the fit."
    />
  );
}

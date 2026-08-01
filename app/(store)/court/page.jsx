import CategoryPage from '../../../components/CategoryPage';

export const metadata = { title: 'Court — Closet Cleaned' };

export default function Page() {
  return (
    <CategoryPage
      slug="court"
      title={
        <>
          COURT
          <br />
          <em>CALLED.</em>
        </>
      }
      blurb="Quick cuts, low profiles, zero patience for slow footwork."
    />
  );
}

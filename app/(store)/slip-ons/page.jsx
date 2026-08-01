import CategoryPage from '../../../components/CategoryPage';

export const metadata = { title: 'Slip-Ons — Closet Cleaned' };

export default function Page() {
  return (
    <CategoryPage
      slug="slip-ons"
      title={
        <>
          NO LACES,
          <br />
          <em>NO DRAMA.</em>
        </>
      }
      blurb="In and out the door before your coffee's ready."
    />
  );
}

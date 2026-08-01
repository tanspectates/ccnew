import CategoryPage from '../../../components/CategoryPage';

export const metadata = { title: 'Classics — Closet Cleaned' };

export default function Page() {
  return (
    <CategoryPage
      slug="classics"
      title={
        <>
          MAIN
          <br />
          <em>CHARACTER.</em>
        </>
      }
      blurb="The pairs that never left rotation and never will."
    />
  );
}

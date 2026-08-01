import CategoryPage from '../../../components/CategoryPage';

export const metadata = { title: 'Lifestyle — Closet Cleaned' };

export default function Page() {
  return (
    <CategoryPage
      slug="lifestyle"
      title={
        <>
          OFFLINE
          <br />
          <em>HIGH.</em>
        </>
      }
      blurb="For days with no agenda and an outfit that still needs to go off."
    />
  );
}

import CategoryPage from '../../../components/CategoryPage';

export const metadata = { title: 'Skate — Closet Cleaned' };

export default function Page() {
  return (
    <CategoryPage
      slug="skate"
      title={
        <>
          CONCRETE
          <br />
          <em>BABY.</em>
        </>
      }
      blurb="Flat, grippy, and built to survive a lot of falling down."
    />
  );
}

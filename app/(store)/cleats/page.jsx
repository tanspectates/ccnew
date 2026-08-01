import CategoryPage from '../../../components/CategoryPage';

export const metadata = { title: 'Cleats — Closet Cleaned' };

export default function Page() {
  return (
    <CategoryPage
      slug="cleats"
      title={
        <>
          STUDDED
          <br />
          <em>UP.</em>
        </>
      }
      blurb="Traction for grass, turf, and Sunday league bragging rights."
    />
  );
}

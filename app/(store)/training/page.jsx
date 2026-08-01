import CategoryPage from '../../../components/CategoryPage';

export const metadata = { title: 'Training — Closet Cleaned' };

export default function Page() {
  return (
    <CategoryPage
      slug="training"
      title={
        <>
          LEG DAY
          <br />
          <em>LORE.</em>
        </>
      }
      blurb="Stable enough for the last rep, stylish enough for the drive home."
    />
  );
}
